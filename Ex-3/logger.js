export function logger(req,res,next){
    let method = req.method
    let path = req.path
    let queryParam = req.query
    let dateTime  = new Date().toISOString();
    console.log(dateTime+' - Method : '+method+' Path : '+path+' Query : '+JSON.stringify(queryParam));
    next();
}
