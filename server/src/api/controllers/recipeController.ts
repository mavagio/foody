import Base from './baseController';

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
}
