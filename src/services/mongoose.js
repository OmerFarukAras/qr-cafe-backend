import mongoose from "mongoose"

export default function loadDB(logger) {
    let username = config.get("db.username")
    let password = config.get("db.password")
    let host = config.get("db.host")
    let name = config.get("db.name")

    mongoose.connect("mongodb+srv://" + username + ":" + password + "@" + host + "/" + name + "?retryWrites=true&w=majority").then(() => {
        logger.info("Connected to DB")
    }).catch(err => {
        logger.error(err)
    })

}