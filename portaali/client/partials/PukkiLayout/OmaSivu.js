Template.OmaSivu.onCreated(function() {
    this.editMode = new ReactiveVar(false); // variable for editmode, default false
});


Template.OmaSivu.events({
    "click .fa-pencil": function(event, template) {
        template.editMode.set(!template.editMode.get());
    },
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
    }, "click .lisaysnappi": function(e) {
        Bert.alert("Coming soon!!");
    }
});

Template.OmaSivu.helpers({
    // userId for profile form doc
    user: function() {
        return Meteor.user();
    },

    userId: function() {
        return Meteor.userId();
    },

    omaprofiili: ()=> {
        return Meteor.users.findOne({});
    },

    editMode: function() {
        return Template.instance().editMode.get();
    }
});