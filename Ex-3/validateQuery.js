export function handleQuery(req,res,next){
    const {minCredits, maxCredits} = req.query;
    if (minCredits && !Number.isInteger(Number(minCredits))) {
        return res.status(400).json({ message: 'minCredits must be an integer' });
    }
    if (maxCredits && !Number.isInteger(Number(maxCredits))) {
        return res.status(400).json({ message: 'maxCredits must be an integer' });
    }
    if (minCredits && maxCredits) {
        if (Number(minCredits) > Number(maxCredits)) {
        return res.status(400).json({ message: 'invalid credit range: minCredits cannot be greater than maxCredits' });
        }
    }
    next()
}