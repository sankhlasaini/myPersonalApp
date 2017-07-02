const mongoose = require('mongoose');

/*
 * This is a profile schema, for persisting profile details of each user registered in the system
 */

const profileSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    profilePic: { type: String },
    createdOn: { type: Date, required: true, default: Date.now },
    updatedOn: { type: Date, required: true, default: Date.now },
    personalInfo: {
        name: { type: String, min: 2, max: 30 },
        fname: { type: String, min: 2 },
        lname: { type: String },
        dob: { type: Date },
        gender: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        altemail: { type: String },
        contact: {
            I: { type: String, min: 10, max: 10 },
            II: { type: String }
        }
    }
}, { collection: 'profiles' });

module.exports = mongoose.model('profiles', profileSchema);