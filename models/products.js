import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const ProductSchema = new Schema({

    id: {
        type: Number
    },
    title: {
        type: String
    },
    price: {
        type: String
    },
    inventory: {
        type: String
    },
    image: {
        type: String
    }

}, {
        toObject: {
            virtuals: true
        }, toJSON: {
            virtuals: true
        }
    });

export default mongoose.model('Product', ProductSchema);
