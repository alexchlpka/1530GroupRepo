import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import conditionsDAO from "./DAO/conditionsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000
MongoClient.connect(
    process.env.SKIN_DB_URI,
    ).catch(err => {
        console.log(err.stack)
        process.exit(1)
    }).then(async client => {
        await conditionsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port: ${port}`)
        })
    })