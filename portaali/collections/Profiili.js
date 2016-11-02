ProfiiliSchema = new SimpleSchema({
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
        allowedValues: ['suomi','ruotsi','englanti','venäjä'],
        autoform: {
            type: "select-checkbox-inline"
        }
    },
    kulkuvaline: {
        type: String,
        label: "Kulkuväline",
        allowedValues: ['auto','pyörä','julkinen','jalan'],
        autoform: {
            type: "select-radio-inline"
        }
    },
    hinta: {
        type: Number,
        label: "Hinta"
    },
    automaatio: {
        type: Boolean,
        label: "Ajanvarausjärjestelmä",
        autoform: {
            type: "boolean-checkbox"
        }
    }
});

//Meteor.users.attachSchema(ProfiiliSchema);
