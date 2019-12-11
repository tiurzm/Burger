// Inside `burger.js`, import `orm.js` into `burger.js`

const orm = require("../config/orm.js"); 

// orm.selectAll("burgers"); 
// orm.insertOne("burgers", "burger_name", "Pizza Burger");
// orm.updateOne("burgers", "devoured", false, "id", 4)

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }, 
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(cols, vals, id, num, cb) {
        orm.updateOne("burgers", cols, vals, id, num, function(res) {
            cb(res);
        });
    }

};
module.exports = burger;