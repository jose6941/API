import mongoose from "mongoose";

const VendasSchema = new mongoose.Schema({
    mes: Number,
    valorVenda: Number,
});

export default mongoose.model('Vendas', VendasSchema);