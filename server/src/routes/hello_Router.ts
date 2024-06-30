import { Router,Request,Response} from "express";
  


const hello_Router: Router = Router();

hello_Router.get("/",(req:Request,res:Response)=>{res.json({'data' : "sever is live"})});

export default hello_Router;