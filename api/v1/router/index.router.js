const productRouter = require("./product.router")
const productsCategoryRouter = require("./products-category.router")
const userRouter = require("./user.router")
module.exports = (app)=>{

    try {
        const version = '/api/v1';
        app.use(version + '/product', productRouter)
        app.use(version + '/product-category', productsCategoryRouter)
        app.use(version + '/auth', userRouter)

    } catch (error) {
        console.log(error);
        
    }
}