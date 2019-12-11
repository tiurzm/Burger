// Import (require) `connection.js` into `orm.js`

const connection = require("./connection.js");

const orm = {
    selectAll: function(table, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        })

    }
    , insertOne: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";  
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
    , updateOne: function(table, cols, vals, id, num, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, cols, vals, id, num], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// const orm = {
//     selectAll: function(table) {
//         const queryString = "SELECT * FROM ??";
//         connection.query(queryString, [table], function(err, result) {
//             if (err) throw err;
//             console.log(result);
//         })

//     }
//     , insertOne: function(table, cols, vals) {
//         const queryString = "INSERT INTO ?? (??) VALUES (?)";  
//         connection.query(queryString, [table, cols, vals], function(err, result) {
//             if (err) throw err;
//             console.log(result);
//         });
//     }
//     , updateOne: function(table, cols, vals, id, num) {
//         const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
//         connection.query(queryString, [table, cols, vals, id, num], function(err, result) {
//             if (err) throw err;
//             console.log(result);
//         });
//     }
// };

module.exports = orm;
