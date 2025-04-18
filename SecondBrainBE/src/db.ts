import mongoose, {model, Schema} from "mongoose";
import { MONGODB_URI } from "./config";

mongoose.connect(MONGODB_URI )

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: {type: String, unique: true},
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', Required: true}
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type : mongoose.Types.ObjectId, ref: 'User', required: true, unique: true}
})

export const LinkModel = model ("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);