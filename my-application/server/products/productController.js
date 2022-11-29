var product = require('./product');

exports.createOne = function (req, res) {
    product.create(req.body,(err,result)=>{
        console.log(err)
        
            
            res.json(result)
    })
};

exports.retrieve = function (req, res) {
    product.find({},(err,Res)=>{
        if(err) console.log(err)
        else {res.send(Res)};
    })
};

exports.retrieveOne = function (req, res) {
    product.findOne({name:req.params.name},(err,Res)=>{
        if(err) console.log(err)
        else {res.json(Res)};
    })

};

exports.updateOne = function (req, res) {
    product.findOneAndUpdate({name:req.params.name},{$inc:{quantity:1}})
    .then((result)=>{res.send(result)})

.catch((err)=>console.log(err))
}
exports.updateOne1 = function (req, res) {
 product.findOneAndUpdate({name:req.params.name},{$inc:{quantity:-1}})
    .then((result)=>{res.send(result)})

.catch((err)=>console.log(err))
}
exports.deleteOne = function (req, res) {
    product.deleteOne({name:req.params.name})
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
};
