Template.Asetukset.onCreated(function() {
    this.passwordChange = new ReactiveVar(false);
    this.passwordsMatch = new ReactiveVar(false);
});

Template.Asetukset.events({
    'input .pwdfield': function(e, template) {
        template.passwordChange.set(true);
    },
    'blur .pwdfield': function(e, template) {
        if (e.currentTarget.value == '') {
            template.passwordChange.set(false);
            template.passwordsMatch.set(false);
        }
    },
    'blur .pwdfield-verify': function(e, template) {
        var pass = $("#password").val();
        if(e.currentTarget.value != pass) {
            template.passwordsMatch.set(false);
        } else {
            template.passwordsMatch.set(true);
        }
    },
    'keyup .pwdfield-verify': function(e, template) {
        var pass = $("#password").val();
        if(e.currentTarget.value != pass) {
            template.passwordsMatch.set(false);
        } else {
            template.passwordsMatch.set(true);
        }
    },
    'click .submitsettings': function(e, template) {
        if(template.passwordChange.get() && template.passwordsMatch.get()) {
            // user wants to change password
            var digest = Package.sha.SHA256($('#password-old').val());
            Meteor.call('checkPassword', digest, function(err, result) {
                if(result) {
                    Accounts.changePassword($('#password-old').val(), $('#password').val(), function(err) {
                        if(err) {
                            Bert.alert(err.message, 'danger');
                        } else {
                            Bert.alert('Asetukset tallennettu', 'success');
                        }
                    });
                } else {
                    Bert.alert("Nykyinen salasana on väärin", 'danger');
                }
            });
        } else {
            // password not changed
            Bert.alert('Asetukset tallennettu', 'success');
        }
    }
});

Template.Asetukset.helpers({
    passwordChange: function() {
        return Template.instance().passwordChange.get();
    },
    passwordsMatch: function() {
        return Template.instance().passwordsMatch.get();
    }
});
