import Base from './baseController';
import {USER_SETTINGS_COOKIE_NAME, WEEKLY_RECIPES_COOKIE_NAME} from '../../../../shared/consts/consts';

/**
 * User class
 * */

export default class RecipeClass<T extends any> extends Base<T> {
    constructor(model: T) {
        super(model);
    }

    public async insertAll(req: any, res: any) {
        const jsonObjects = req.body;
        const resArray:any = [];
        for(let jsonObject of jsonObjects) {
            let obj = new this.model(jsonObject);
            await obj.save((err: any, item: any) => {
                if (err) {
                    return console.error(err);
                }
                resArray.push(obj);
            });
        }
        res.status(200).json(resArray);
    }

    private isSettingsCookieAvailable(req: any, res: any): boolean {
        if(req.cookies == null || req.cookies[USER_SETTINGS_COOKIE_NAME] == null) {
            return false;
        }
        return true;
    }

    private isWeeklyRecipesCookieAvailable(req: any, res: any): boolean {
        if(req.cookies == null || req.cookies[WEEKLY_RECIPES_COOKIE_NAME] == null) {
            return false;
        }
        return true;
    }

    public getRecipesForWeek(req: any, res: any) {
        if(!this.isSettingsCookieAvailable(req, res)){
            return res.send(null);
        }
        if(!this.isWeeklyRecipesCookieAvailable(req, res)){
            this.generateNewRecipes(req, res);
        } else {
            this.getRecipesFromCookies(req, res);
        }
    }

    private getRecipesFromCookies(req: any, res: any) {
        const weeklyRecipeIds = JSON.parse(req.cookies[WEEKLY_RECIPES_COOKIE_NAME]);
        this.getRecipesFromArray(res, weeklyRecipeIds);
    }

    public getRecipesFromArray(res: any, recipeArray: string[]) {
        this.model.find({_id: {$in: recipeArray}}, (err: any, obj: any) => {
            if (err) {
                return console.error(err);
            }
            res.json(obj);
        });
    }

    private generateNewRecipes(req: any, res: any) {
        const userSettings = JSON.parse(req.cookies[USER_SETTINGS_COOKIE_NAME]);        
        this.model.find({amountOfPeople: {$gte: userSettings.numberOfPeople}, 
                         nutritionCategory: {$lte: userSettings.nutritionCategory},
                         allergenics: {$nin: userSettings.allergenics}
        },
        (err: any, obj: any) => {
            if (err) {
                return console.error(err);
            }
            res.json(obj);
        }
        ).sort({approval: -1}).limit(7);
    }

    public get(req: any, res: any) {
        this.model.findOne({_id: req.params.recipeId}, (err: any, obj: any) => {
            if (err) {
                return console.error(err);
            }
            res.json(obj);
        });
    }
}
