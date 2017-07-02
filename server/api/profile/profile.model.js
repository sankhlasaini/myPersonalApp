/*
 * Add/modify profile schema values
 */
var profileDataModel = function(profileObj) {
    var profileDetails = {
        username: profileObj.email,
        createdOn: Date.now(),
        updatedOn: Date.now(),
        // profilePic: profileObj.profilePic,
        personalInfo: {
            gender: profileObj.gender,
            email: profileObj.email,
            dob: profileObj.dob,
            // contact: profileObj.contact,
        }
    };
    return profileDetails;
};


module.exports = {
    profileDataModel: profileDataModel,
};