import mysql from "mysql";

const connection = mysql.createConnection({
    host: "baaf4r9xpuefglogbrvo-mysql.services.clever-cloud.com",
    user: "ulzbvb2vqwurmz6g",
    password: "NUIZ1CffMeVnuxFYmZGV",
    database: "baaf4r9xpuefglogbrvo"
})

connection.connect((err)=>{
    if(err){
        console.error("No se pudo conectar con la base de datos," + err);
        return;
    }
    console.log("conexión exitosa.")
})

export default connection;