import Realm from "realm";
import { TaskSchema } from "./schemas/demo";

export const realmDb = async (user) => {
    try {
        let config = {
            schema: [TaskSchema],
            sync: {
                user: user,
                partitionValue: `user_${user?.id}`
            }
        }
        return await Realm.open(config);
    } catch (err) {
        return console.log("Failed to open the realm", err.message);
    }
}
