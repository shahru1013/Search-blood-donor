const CryptoJS = require("crypto-js");
require('dotenv').config();

module.exports = async (formData, dbConnection, res)=>{
    const fetchQry =  getFetchQuery(formData);
    await dbConnection.query(fetchQry,(err, result)=>{
        if(err){
            res.send({
                res: false
            });
         }else{
            if(!result[0]){
                res.send({
                    res: false,
                    message:"User not found!"
                });
                return;
            }

            const isPassValid = validatePassword(result[0]?.password, formData?.password);
            if(isPassValid){
                res.send({
                    res:true,
                    user:{
                        name: result[0].name,
                        email: result[0].email
                    }
                })
            }else{
                res.send({
                    res: false
                });
            }
         }
         
    })
}

const getFetchQuery=(formData)=>{
   return `select * from users_data where email = '${formData.email}';`;
}

const validatePassword=(encrypted, plain)=>{
    var bytes  = CryptoJS.AES.decrypt(encrypted, process.env.APP_SECRET);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return plain === originalText
}