Template.Profiili.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('omaSivu', Meteor.userId()); // subscribe to only one pukki (on template level)
    });
});


Template.PukkiLayout.events({
    "change input[type='file']": function(e) {
        files = e.currentTarget.files;
        Cloudinary.upload( files, { public_id: Meteor.userId() }, function(err, res) {
            if(err) {
                console.log(err);
                Bert.alert( err, 'danger' );
            } else { 
                Meteor.call('addProfilePic', Meteor.userId(), res.version);
            } 
        });
    },
    "click .poistonappi": function(e) {
        Meteor.call("c.delete_by_public_id", Meteor.userId());
        Meteor.call('removeProfilePic', Meteor.userId());
    },
    "click .lisaysnappi": function(e) {
        Bert.alert("Coming soon!!");
    }
});

Template.PukkiLayout.helpers({
    // userId for profile form doc
    user: function() {
        return Meteor.user();
    },

    userId: function() {
        return Meteor.userId();
    },

    omaprofiili: ()=> {
        return Meteor.users.findOne({});
    }
});
