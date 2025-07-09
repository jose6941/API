import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import vendas from "./vendas.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const URI = process.env.MONGO_URL_CONNECT;

app.use(express.json());

const connectDB = async () => {
    try{
        await mongoose.connect(URI);
        console.log("Conectado ao MongoDB");
    }catch(error){
        console.log("Erro ao conectar ao MongoDB");
    }
};

connectDB();

app.post('/vendas', async (req,res) => {
    try{
        const novaVenda = await vendas.create(req.body);
        res.json(novaVenda);
    }catch(error){
        res.json({
            error: error
        })
    }
    
});

app.get('/vendas', async (req,res) =>{
    try{
        const Vendas = await vendas.find();
        res.json(Vendas);
    }catch{
        res.json({
            error: error
        })
    }
})

app.put('/vendas/:id', async (req,res) =>{
    try{
        const novaVendas = await vendas.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(novaVendas);
    }catch{
        res.json({
            error: error
        })
    }
})

app.delete('/vendas/:id', async (req,res) =>{
    try{
        const novaVendas = await vendas.findByIdAndDelete(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(novaVendas);
    }catch{
        res.json({
            error: error
        })
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})