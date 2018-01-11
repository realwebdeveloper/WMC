var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
var Mixed       = mongoose.Schema.Types.Mixed;
var Bcrypt      = require('mongoose-bcrypt')
var mongoosePaginate = require('mongoose-paginate');

var Schema = new Schema({

    // IDs, _id is automatically generated and would be used as the primary key
    employeeID  :  {type: String},

    // // PERSONAL DETAILS
    // firstName       :  {type: String, default: ""},
    // lastName        :  {type: String, default: ""},
    // email           :  {type: String, default: ""},
    // dateOfBirth     :  {type: Date, default: ""},
    // address         :  {type: String, default: ""},
    // reportTo        :  {type: Schema.ObjectId, ref: "User"},

    // APPLICATION SPECIFIC
    // profilePhoto    :   {type: String, default: "/img/icons/profile.svg"},
    // status          :   {type: String, default: "UNINVITED"},
    // doneTour        :   {type: Boolean, default: false},
    username        :   {type: String, default: ""},
    password        :   {type: String, default: ""},                 // INCLUDED BY MONGOOSE BCRYPT
    // language        :   {type: String, default: "vi"},
    // lastLoggedIn    :   {type: Date, default: Date.now()},
    // createdAt       :   {type: Date, default: Date.now()},

});
// Schema.index({email: 1}, {unique: true, dropDups: true });
Schema.plugin(Bcrypt);
Schema.plugin(mongoosePaginate);

module.exports = function(db) {
    return db.model('User' , Schema);
}
