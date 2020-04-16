const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//exportando um objeto
module.exports = {
    //asynnc VER O QUE é
    //index vai fazer uma listagem de todos os produtos que temos no db
    async index(req, res) {
        const { page = 1 } = req.query;
        //await -> so executa a proxima linha depois de conseguir buscar os registros no db
        const products = await Product.paginate({}, {page, limit: 10});

        return res.json(products);
    },
    
    async show(req, res){
        //Mostrar apenas um dos produtos
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        //criacao de produto
        const product = await Product.create(req.body);

        return res.json(product);
    
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        //apenas vai retornar uma resposta de sucesso
        return res.send();
    }

};