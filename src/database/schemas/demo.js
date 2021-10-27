import { Collections } from "../constants";

export const TaskSchema = {
    name: Collections.TASK,
    properties: {
        _id: "int",
        name: "string",
        status: "string?",
        imageUrl: "string?"
    },
    primaryKey: "_id",
};