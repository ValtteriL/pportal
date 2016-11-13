Template.OtaYhteytta.onCreated(function() {
    this.nameClass = new ReactiveVar('');
    this.emailClass = new ReactiveVar('');
});

Template.OtaYhteytta.events({
    'blur #name': function(e, template) {
        if($('#name').val() == '') {
            template.nameClass.set('has-error');
        }  else {
            template.nameClass.set('has-success');
        }
    },
    'blur #email': function(e, template) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test($('#email').val())) {
            template.emailClass.set('has-error');
        } else {
            template.emailClass.set('has-success');
        }
    },
    'click #lahetaBtn': function(e, template) {
        if($('#name').val() == '' || $('#email').val() == '' || $('#comment').val() == '') {
            Bert.alert('Kaikki kohdat ovat pakollisia', 'danger');
        } else if (template.nameClass.get() != 'has-success' || template.emailClass.get() != 'has-success') {
            Bert.alert('Lomakkeessa on virheitä', 'danger');
        } else {
            Meteor.call('otaYhteytta', $('#name').val(), $('#email').val(), $('#comment').val(), function(err, result) {
                if(!err) {
                    $('#name').val('');
                    $('#email').val('');
                    $('#comment').val('');
                    Bert.alert('Kiitos yhteydenotostasi!','success');
                } else {
                    Bert.alert('Jokin meni pieleen, kokeile myöhemmin uudestaan', 'danger');
                }
            });
        }
    } 
});

Template.OtaYhteytta.helpers({
    nameClass: function() {
        return Template.instance().nameClass.get();
    },
    emailClass: function() {
        return Template.instance().emailClass.get();
    }
});
