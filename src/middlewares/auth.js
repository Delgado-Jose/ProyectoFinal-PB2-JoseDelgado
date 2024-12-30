const isAdmin = (req, res, next) => {
    if (req.user?.role === 'admin') return next();
    return res.status(403).json({ error: 'Acceso denegado: se requiere rol de administrador' });
  };
  
  const isUser = (req, res, next) => {
    if (req.user?.role === 'user') return next();
    return res.status(403).json({ error: 'Acceso denegado: se requiere rol de usuario' });
  };
  
  module.exports = { isAdmin, isUser };
  