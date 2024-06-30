import {Router, Request, Response} from "express"
import { generateOpenAiResponseController } from "../controllers/generate_open_ai_controller";

const OpenAiRouter = Router()

OpenAiRouter.post("/", generateOpenAiResponseController);
 
export default OpenAiRouter