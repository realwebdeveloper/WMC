var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/WCM');

var exports = module.exports = {};

// exports.insert = function (dbName, data) {
//     var db = mongoose.connection;
//     db.on('error', console.log('connection error'));
//     db.once('open', function() {
//         var User = require ('')(db);
//         var newData = new User({name: data.username, password: data.password});
//         newData.save(function(err, newData){
//             if (err) return console.log(err);
//             User.find(function (err, datas){
//                 if (err) return console.error(err);
//                 console.log(datas);
//             })
//         })
//     })
// }

// exports.queryAll = function (dbName, callback) {
//     var db = mongoose.connection;
//     db.on('error', console.log('connection'))
// }

// exports.findOne = function (dbName, userInfo, callback) {
//     var db = mongoose.connection;
//     db.on('error', console.log('connection'))
// }


return module.exports;