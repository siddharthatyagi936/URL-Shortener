const jwt = require("jsonwebtoken");
const secret = "siddhartha@123"

function setUser( user){
  return jwt.sign({
    _id: user._id,
    email:user.email,
    role: user.role,
   }, secret)
}
function getUser(token) {
  if(!token) return null;
  return jwt.verify(token, secret);
}

module.exports= {
  setUser,
  getUser,
};