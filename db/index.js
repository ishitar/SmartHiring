var mysql = require('mysql');

// Add the credentials to access your database
exports.DbConnect= function (){
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
    else
    {
        console.log("khush hole");
    }
});
return connection;
}
