Template.Profiili.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('omaSivu', Meteor.userId()); // subscribe to only one pukki (on template level)
    });
});


Template.PukkiLayout.events({
    "change input[type='file']": function(e) {
        files = e.currentTarget.files;
        Cloudinary.upload( files, { public_id: Meteor.userId(), err:function(e){console.info(e)}, res:function(e){console.info(e)} })
    },
    "click .poistonappi": function(e) {
        console.log("poistonappia painettu!");
        Meteor.call('removeProfilePic', Meteor.userId());
    },
    "click .lisaysnappi": function(e) {
        console.log("lisaysnappia painettu!");
        Meteor.call('addProfilePic', Meteor.userId());
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
