//qual é o schema
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type:  String, 
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

//codeigo para registrar um model na aplicacao
mongoose.model('Product', ProductSchema);