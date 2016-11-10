Schema = {};

Schema.ProfiiliSchema = new SimpleSchema({
    name: {
        type: String,
        optional: true,
        label: "Etunimi"
    },
    lastname: {
        type: String,
        optional: true,
        label: "Sukunimi"
    },
    hasProfilePic: {
        type: Boolean,
        defaultValue: false,
        optional: true,
    },
    picVersion: {
        type: String,
        optional: true,
    },
    terms: {
        type: Boolean,
        optional: true,
        label: "kayttoehrot"
    },
    kuvaus: {
        type: String,
        label: "Kuvaus",
        optional: true,
        max: 3000,
        autoform: {
            placeholder: 'Kuvaa itseäsi!',
            rows: 5
        }
    },
    kielitaito: {
        type: [String],
        label: "Kielitaito",
        optional: true,
        allowedValues: ['suomi','ruotsi','englanti','venäjä'],
        autoform: {
            type: "select-checkbox-inline"
        }
    },
    kulkuvaline: {
        type: String,
        label: "Kulkuväline",
        optional: true,
        allowedValues: ['auto','pyörä','julkinen','jalan'],
        autoform: {
            type: "select-radio-inline"
        }
    },
    hinta: {
        type: Number,
        label: "Hinta",
        optional: true
    },
    automaatio: {
        type: Boolean,
        optional: true,
        label: "Ajanvarausjärjestelmä",
        autoform: {
            type: "boolean-checkbox"
        }
    }
});


Schema.User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
    registered_emails: {
        type: Array,
        optional: true
    },
    'registered_emails.$': {
        type: Object,
        blackbox: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.ProfiiliSchema,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: Array,
        optional: true
    },
    'roles.$': {
        type: String
    },
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
});

Meteor.methods({
    // mark hasProfilePic to true
    addProfilePic: function(userId, version) {
        Meteor.users.update(userId, {
            $set: {
                "profile.hasProfilePic": true,
                "profile.picVersion": version
            }
        });
    },

    // mark hasProfilePic to as false
    removeProfilePic: function(userId, currentState) {
        Meteor.users.update(userId, {
            $set: {
                "profile.hasProfilePic": false
            }
        });
    }
});

Meteor.users.attachSchema(Schema.User);
