exports.middleGlobal = (req, res, next)=>{
    res.locals.Sucess = 'cadastrado com sucesso!';
    // // req.locals.error;
    next(); 
}

exports.csrfTokenerr = (err, req, res, next)=>{
    // if(err );
    next();
}

exports.mcsrfToken = ( req, res, next)=>{
    res.locals.csrf = req.csrfToken();
    next();
}

