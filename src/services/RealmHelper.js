const { realmDb } = require("../database");

const returnRes = (status, data, err) => {
    return {
        status,
        data,
        err
    }
}

class RealmHelper {

    async getAll(path, collection) {
        try {
            const db = await realmDb(path)
            const data = db.objects(collection);
            return returnRes(200, data, null)
        } catch (error) {
            return returnRes(500, null, error)
        }
    }

    async getOne(path, collection, doc_id) {
        try {
            const db = await realmDb(path)
            const data = db.objectForPrimaryKey(collection, doc_id);
            return returnRes(200, data, null)
        } catch (error) {
            return returnRes(500, null, error)
        }
    }

    async post(path, collection, formData) {
        try {
            const db = await realmDb(path)
            let newDoc;
            await db.write(() => {
                newDoc = db.create(collection, formData);
            })
            return returnRes(201, newDoc, null)
        } catch (error) {
            return returnRes(500, null, error)
        }
    }

    async put(path, collection, formData) {
        try {
            const db = await realmDb(path)
            let newDoc;
            await db.write(() => {
                newDoc = db.create(collection, formData, "modified");
            })
            return returnRes(204, newDoc, null)
        } catch (error) {
            return returnRes(500, null, error)
        }
    }

    async delete(path, collection, id) {
        try {
            const db = await realmDb(path)
            const doc = await db.objectForPrimaryKey(collection, id);
            await db.write(() => {
                db.delete(doc);
            })
            return returnRes(204, `${id} deleted`, null)
        } catch (error) {
            return returnRes(500, null, error)
        }
    }

    async addOnChangeLister(path, collection, func) {
        const db = await realmDb(path)
        const colRef = await db.objects(collection)
        colRef.addListener(func)
    }
    async removeOnChangeLister(path, collection, func) {
        const db = await realmDb(path)
        const colRef = await db.objects(collection)
        colRef.removeListener(func)
    }
}

export default new RealmHelper;