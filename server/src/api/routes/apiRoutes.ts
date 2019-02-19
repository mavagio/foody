
module.exports = (app: any, passport: any) => {
    const apiController = require('../controllers/apiController')(passport);

    /**
     * Recipe routes
     */
    app.route('/api/recipes').get(apiController.recipes_get);
    app.route('/api/recipe/:recipeId').get(apiController.recipe_get);

    app.route('/api/recipe').post(apiController.recipe_post);
    app.route('/api/recipes').post(apiController.recipes_post);

    app.route('/api/weeks').get(apiController.weeks_get);

    /**
     * Login routes
     */
    app.route('/').get(apiController.home_get);
    app.route('/api/login').post(apiController.jwt_login_post);
    app.route('/api/signup').post(apiController.signup_post);
    app.route('/api/logout').get(apiController.logout_get);
    app.route('/api/user/:userId').get(apiController.isJWTValid, apiController.get_user);

    /**
     * Testing routes
     */
    app.route('/api/test/').get(apiController.isJWTValid, apiController.test_get);
    app.route('/api/test_no_auth/').get( apiController.test_get);
    app.route('/api/test/').post(apiController.test_post);
    app.route('/api/test/:id').delete(apiController.test_delete);
    app.route('/**').get(apiController.home_get);
};
