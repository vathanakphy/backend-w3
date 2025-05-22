export function auth(req, res, next) {
  const token = req.query.token;
  const validToken = 'xyz123'; 
    
  if (!token || token !== validToken) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing token' });
  }

  next();
}
