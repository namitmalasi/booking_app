import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema({});

export default mongoose.model("Room", RoomSchema);
