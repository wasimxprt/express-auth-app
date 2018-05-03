import ProductModel from "../models/products";
import config from '../config/config';
import request from "request";

/** 
 *  Products class with methods for product management
 */
export class ProductController {

    /**
     * constructor to initialize the properties
     */
    constructor() {
    }

    /**
     * Method to find all products
     */

    getAllProducts = (req, res, next) => {
        return new Promise((resolve, reject) => {
            ProductModel
                .find()
                .select()
                .then((products) => {
                    if (products) {
                        //resolve({ status: 200, products, "message": "Products found" });
                        res.json({ status: 200, products, "message": "Products found" });
                        next();
                    } else {
                        reject("No Product not found!");
                        reject(res.json(401, { status: false, error: "No products not found!" }));
                        next();
                    }
                })
                .catch((err) => {
                    next(error);
                })
        })
    }
}

const productController = new ProductController();
export default productController;