Template.Profiili.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var username = FlowRouter.getParam('username');
        self.subscribe('singlePukki', username); // subscribe to only one pukki (on template level)
    });

    this.editKielitaito = new ReactiveVar(false);
    this.editKuvaus = new ReactiveVar(false);
    this.editHinta = new ReactiveVar(false);
});

Template.Profiili.helpers({
    pukki: ()=> {
        var id = FlowRouter.getParam('username');
        return Meteor.users.findOne({_id: id}); // find the one pukki from the collection
    },
    ownProfile: function() {
        return FlowRouter.getParam('username')==Meteor.userId();
    },
    editKielitaito: function() {
        return Template.instance().editKielitaito.get();
    },
    editKuvaus: function() {
        return Template.instance().editKuvaus.get();
    },
    editHinta: function() {
        return Template.instance().editHinta.get();
    }
});

Template.Profiili.events({
    "change input[type='file']": function(e) {
        files = e.currentTarget.files;
        Cloudinary.upload( files, { public_id: Meteor.userId() }, function(err, res) {
            if(err) {
                console.log(err);
                Bert.alert( err, 'danger' );
            } else { 
                Meteor.call('addProfilePic', res.version);
            } 
        });
    },
    "click #poistonappi": function(e) {
        e.preventDefault();
        Meteor.call("c.delete_by_public_id", Meteor.userId());
        Meteor.call('removeProfilePic');
    },
    "click #lisaysnappi": function(e) {
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    },
    "click #kielitaitopencil": function(e, template) {
        e.preventDefault();
        template.editKielitaito.set(!template.editKielitaito.get());
    },
    "click #kuvauspencil": function(e, template) {
        e.preventDefault();
        template.editKuvaus.set(!template.editKuvaus.get());
    },
    "click #hintapencil": function(e, template) {
        e.preventDefault();
        template.editHinta.set(!template.editHinta.get());
    },
    "submit #kielitaitoForm": function(e, template) {
        template.editKielitaito.set(!template.editKielitaito.get());
    },
    "submit #kuvausForm": function(e, template) {
        template.editKuvaus.set(!template.editKuvaus.get());
    },
    "submit #hintaForm": function(e, template) {
        template.editHinta.set(!template.editHinta.get());
    },
});
