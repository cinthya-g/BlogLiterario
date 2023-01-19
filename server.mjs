
import express from "express";
import cors from "cors";

// Constantes de render
/*
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
*/

//------------------------------------------------

const app = express();
const port = 3000;

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.json());

app.listen(port,()=>{
    console.log("Blog corriendo el el puerto "+ port);
}); 

