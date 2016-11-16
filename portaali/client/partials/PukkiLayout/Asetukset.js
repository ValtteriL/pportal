Template.Asetukset.onCreated(function() {
    this.passwordChange = new ReactiveVar(false);
    this.passwordsMatch = new ReactiveVar(false);
    this.passwordClass = new ReactiveVar('');
    this.oldPasswordClass = new ReactiveVar('');
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
        if ($("#password-verify").val() != '' && $("#password-verify").val() != e.currentTarget.value) {
            template.passwordsMatch.set(false);
            template.passwordClass.set('has-error');
        }
    },
    'blur .pwdfield-verify': function(e, template) {
        var pass = $("#password").val();
        if(e.currentTarget.value != pass) {
            template.passwordsMatch.set(false);
            template.passwordClass.set('has-error');
        } else {
            template.passwordsMatch.set(true);
            template.passwordClass.set('has-success');
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
        if(template.passwordChange.get()) {
            if(template.passwordsMatch.get()) {
                // user wants to change password
                var digesti = Package.sha.SHA256($('#password-old').val());
                Meteor.call('checkPassword', { digest: digesti }, (err, res) => {
                    if(err) {
                        template.oldPasswordClass.set('has-error');
                        Bert.alert(err.message, 'danger');
                    } else {
                        Accounts.changePassword($('#password-old').val(), $('#password').val(), (err, res) => {
                            if(err) {
                                Bert.alert(err.message, 'danger');
                            } else {
                                $('#password').val('');
                                $('#password-old').val('');
                                $('#password-verify').val('');
                                Bert.alert('Asetukset tallennettu', 'success');
                            }
                        });
                    }
                });
            } else {
                Bert.alert("Salasanat eivät täsmää", 'danger');
            }
        } else {
            // password not changed
            // TODO: muiden asetusten tallennus
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
    },
    passwordClass: function() {
        return Template.instance().passwordClass.get();
    },
    oldPasswordClass: function() {
        return Template.instance().oldPasswordClass.get();
    }
});
