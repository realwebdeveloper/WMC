var exports = module.exports = {};
var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/WCM');
// var db = mongoose.connection;

// db.once('open', function () {
//     console.log('Connected to DB');
// })

exports.insert = function (dbName, data) {
    console.log('insert')
    mongoose.connect('mongodb://localhost/WCM');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to DB');
        var User = require ('')(db);
        var newData = new User({name: data.username, password: data.password});
        newData.save(function(err, newData){
            if (err) return console.log(err);
            User.find(function (err, datas){
                if (err) return console.error(err);
                console.log(datas);
            })
        })
        db.close();
    })
}

exports.queryAll = function (dbName, callback) {
    // var mongoose = require('mongoose');
    // mongoose.connect('mongodb://localhost/WCM');
    // var db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'))
}

exports.findOne = function (dbName, userInfo, callback) {
    console.log('findone');
    mongoose.connect('mongodb://localhost/WCM');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to DB');
        var User = require ('')(db);
        User.find(userInfo, function(err, datas){
            if (err) return console.log(err);
            if (datas.length > 0){
                db.close();
                callback(true);
            }
            else {
                db.close();
                callback(false);
            }
        })
        // db.close();
    })
    // callback(false);
}

return module.exports;
