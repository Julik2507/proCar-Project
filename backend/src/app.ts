import express from "express";
import authModule from "./modules/auth-module/auth_controller.js"

const app = express()
const port = 3000

app.use(express.json())
app.use("/auth", authModule)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
