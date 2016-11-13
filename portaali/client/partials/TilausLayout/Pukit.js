Template.Pukit.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('allPukkis'); // subscribe to only one pukki (on template level)
    });

    this.emailClass = new ReactiveVar('');
    this.suomi = new ReactiveVar(false);
    this.ruotsi = new ReactiveVar(false);
    this.englanti = new ReactiveVar(false);
    this.venaja = new ReactiveVar(false);
});

Template.Pukit.events({
    'blur #email': function(e, template) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test($('#email').val())) {
            template.emailClass.set('has-error');
        } else {
            template.emailClass.set('has-success');
        }
    },
    'click .asetusNappi': function(e, template) {
        if($('#email').val() == '') {
            Bert.alert('Kaikki lomakkeen kohdat ovat pakollisia', 'danger');
        } else if (template.emailClass.get() != 'has-success') {
            Bert.alert('Lomakkeessa on virheitä', 'danger');
        } else {
            Meteor.call('asetaHalytys', $('#email').val(), Session.get("address"), function(err, result) {
                if(!err) {
                    $('#email').val('');
                    Bert.alert('Hälytys asetettu', 'success');
                } else {
                    Bert.alert('Jokin meni pieleen, kokeile myöhemmin uudestaan', 'danger');
                }
            });
        }
    },
    'click .profileBtn': function(e) {
        FlowRouter.go('/profiili/' + e.currentTarget.value);
    },
    'click #suomicheck': function(e, template) { 
        template.suomi.set(!template.suomi.get());
    },
    'click #ruotsicheck': function(e, template) { 
        template.ruotsi.set(!template.ruotsi.get());
    }, 
    'click #englanticheck': function(e, template) { 
        template.englanti.set(!template.englanti.get());
    }, 
    'click #ruotsicheck': function(e, template) { 
        template.venaja.set(!template.venaja.get());
    }
});


Template.Pukit.helpers({
    pukit: ()=> {
        // TODO: kaikki filtterit
        // applying language filters
        if(Template.instance().suomi.get()) {
            return Meteor.users.find({'profile.kielitaito': 'suomi'}); 
        } else {    
            return Meteor.users.find(); // find the one pukki from the collection
        }
    },
    address: function() {
        return Session.get("address");
    },
    emailClass: function() {
        return Template.instance().emailClass.get();
    }
});
