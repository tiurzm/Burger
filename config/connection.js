// setup the code to connect Node to MySQL

const mysql = require ("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // ask why when i change the port, it doesn't work?
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
})

module.exports = connection;