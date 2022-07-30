/**
 * Handle signUp entry
 */
const CryptoJS = require("crypto-js");
require('dotenv').config();
module.exports  = async (formData, dbConnection, res) =>{
    const createTableQry =  getCreateTableQuery();
    const insertQry = getInsertQuery(formData);
    try{
       await dbConnection.query(createTableQry);
    }catch(e){
        console.log('create_err', e);
       res.send({
           res: false
       })
    }
    try{
       await dbConnection.query(insertQry,(err)=>{
           if(err){
            console.log(err);
                res.send({
                    res: false
                })
            }else{
                res.send({
                    res: true
                })
            }
       });
    }catch(e){
        res.send({
            res: false
        })
    }

}

const getCreateTableQuery=()=>{
    return `create table if not exists users_data(
        id int primary key auto_increment,
        name varchar(255)not null,
        email varchar(255)not null unique,
        password varchar(255)not null,
        phone varchar(255)not null,
        address varchar(255)not null,
        gender varchar(25)not null,
        blood_group varchar(10)not null
    )`;
}
const getInsertQuery=(formData)=>{
    const hashPass = CryptoJS.AES.encrypt(formData.password,process.env.APP_SECRET).toString();
    return `insert into users_data(name, email, password, phone, address, gender, blood_group) values('${formData.name}','${formData.email}','${hashPass}', '${formData.phone}', '${formData.address}', '${formData.gender}', '${formData.blood_group}');`
};