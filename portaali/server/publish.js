// Includes all publications

// Get all pukkis (profiles)
Meteor.publish('allPukkis', function(){
    return Meteor.users.find({}, {fields: {profile: 1}});
});

// Only get one pukki (profile)
Meteor.publish('singlePukki', function(id){
    check(id, String);
    return Meteor.users.find({_id: id}, {fields: {profile: 1}});
});


// Oma sivu
// TODO: is this needed?
Meteor.publish('omaSivu', function(id){
    return Meteor.users.find({_id: id}, {fields: {profile: 1}});
});
