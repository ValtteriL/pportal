var email = AccountsTemplates.removeField('email');
var pwd = AccountsTemplates.removeField('password');

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Nimi",
    placeholder: "Etunimi",
    func: function(value){return false;},
    errStr: 'Only "Full Name" allowed!',
    required: true,
});

AccountsTemplates.addField({
    _id: 'lastname',
    type: 'text',
    displayName: "Sukunimi",
    placeholder: "Sukunimi",
    func: function(value){return false;},
    errStr: 'Only "Full Name" allowed!',
    required: true,
});

AccountsTemplates.addField(email);
AccountsTemplates.addField(pwd);

AccountsTemplates.addField({
    _id: 'terms',
    type: 'checkbox',
    template: "termsCheckbox",
    errStr: "Sinun on hyväksyttävä käyttöehdot",
    func: function(value) {
        return !value;
    },
    negativeValidation: false
});

if (Meteor.isClient){
    Template.overwriteAtTitle.replaces("atTitle");
}
