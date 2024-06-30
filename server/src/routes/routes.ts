import {Router} from 'express';
import OpenAiRouter from './open_AI_router';

const router= Router();
 
router.use("/generate_response")

router.use("/hello")

router.use("/Hello Response", OpenAiRouter)

export default router

