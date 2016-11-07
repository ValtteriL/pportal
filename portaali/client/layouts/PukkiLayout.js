Template.PukkiLayout.events({
    "change input[type='file']": function(e) {
        files = e.currentTarget.files;
        Cloudinary.upload( files, { public_id: Meteor.userId(), err:function(e){console.info(e)}, res:function(e){console.info(e)} })
    }

});

Template.PukkiLayout.helpers({
    // userId for profile form doc
    user: function() {
        return Meteor.user();
    },

    userId: function() {
        return Meteor.userId();
    }
});
