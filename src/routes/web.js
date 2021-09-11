import express from "express";
import { route } from "express/lib/application";
import homepageController from "../controllers/homepageController";
import chatfacebookController from "../controllers/chatfacebookController"
/*
init all web routes
 */

let router = express.Router();

let initAllWebRoutes = (app) =>{
    router.get("/", homepageController.getHomepage);
    router.post("/webhook", chatfacebookController.postWebhook);
    router.get("/webhook", chatfacebookController.getWebhook)
    return app.use("/", router);
};

module.exports = initAllWebRoutes;
