const express = require("express");
const pg = require("pg")

let connectionString = "tcp://postgres:1234@psqlDB:4040/testdb"; //tcp://usr:pwd@localhost/databaseName
let client =  new pg.Client(connectionString);
client.connect();

function psql_query(sql){
    return client.query(sql);
}

let app = express();
app.listen(8888, () => {
    console.log('expressJS started (port 8888');
});

app.get("/getRecords", (request, response) => {
    let sqlStr = "SELECT * FROM testTable";
    let res = psql_query(sqlStr);
    res.then(res =>{
        response.send(JSON.stringify(res.rows));
    });
});