Template.Profiili.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var username = FlowRouter.getParam('username');
        self.subscribe('singlePukki', username); // subscribe to only one pukki (on template level)
    });
});

Template.Profiili.helpers({
    pukki: ()=> {
        var id = FlowRouter.getParam('username');
        return Meteor.users.findOne({_id: id}); // find the one pukki from the collection
    }
});
