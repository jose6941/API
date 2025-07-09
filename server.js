import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const URI = process.env.MONGO_URL_CONNECT;

const connectDB = async () => {
    try{
        await mongoose.connect(URI);
        console.log("Conectado ao MongoDB");
    }catch(error){
        console.log("Erro ao conectar ao MongoDB");
    }
};

connectDB();

app.get('/', (req,res) => {

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})