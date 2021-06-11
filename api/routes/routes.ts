import * as bodyparser from "body-parser";
import * as express from "express";
import {Logger} from "../logger/logger";
import User from "./user";


class Routes {

    public express: express.Application;
    public logger: Logger;

    //array para los usuarios
    public users: any[];

    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
    }

    //configuaracion del middleware de express
    private middleware():  void{
        this.express.use(bodyparser.json());
        this.express.use(bodyparser.urlencoded({extended: false}));
    }
 
    private routes() {


        //routa de usuario
        this.express.use("/", User);    
    }

}

export default new Routes().express;