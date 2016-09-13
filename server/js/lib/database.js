var Database = function (host, user, password, database) {

    var mysql      = require('mysql');

    var connection = mysql.createConnection({
        host     : host,
        user     : user,
        password : password,
        database : database
    });

    connection.connect();
}

Database.prototype.Query = function (query) {

    connection.query(query, function(err, rows, fields) {
        if (err) throw err;

        return rows;
    });

}

Database.prototype.GetById = function (table, id) {

    connection.query('SELECT * FROM '+table+' WHERE id = '+id, function(err, rows, fields) {
        if (err) throw err;

        return rows;
    });

}

module.exports = Database;