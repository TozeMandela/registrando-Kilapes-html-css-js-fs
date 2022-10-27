exports.Global = (req, res, next)=>{
    req.locals.sucess;
    req.locals.error;
    next(); 
}