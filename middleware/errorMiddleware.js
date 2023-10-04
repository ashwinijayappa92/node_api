// const { stack } = require("../routes/productRoute");

const errorMiddleWare = (err, req, res, next)=>{
    setTimeout(() => {console.log('error middle ware');
    const statusCode = err.statusCode ? err.statusCode : 500;
    res.status(statusCode);
    res.json({message:err.message, stack:process.env.NODE_ENV === 'development' ? err.stack : null})
})
}
module.exports = errorMiddleWare;