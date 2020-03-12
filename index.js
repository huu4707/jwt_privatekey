const fs = require('fs');
const jwt = require('jsonwebtoken');

var privateKEY  = fs.readFileSync('./private.key', 'utf8');
var publicKEY  = fs.readFileSync('./public.key', 'utf8');

var payload = {
    id: 1,
    name: "huu",
};

var signOptions = {
    expiresIn:  "12h",
    algorithm:  "RS256"
   };


//dùng http://travistidwell.com/jsencrypt/demo/ để tạo privateKey và public key

var token = jwt.sign(payload, privateKEY, signOptions );
console.log('token', token)

var verifyOptions = {
    expiresIn:  "12h",
    algorithm:  ["RS256"]
 };

 var legit = jwt.verify(token, publicKEY, verifyOptions);
 console.log('legit', legit)