// TODO muutetaan oikea datatyppi
ToimiAlue = new SimpleSchema({
    origo: {
        type: String
    },
    sade: {
        type: String
    }
});

ProfiiliSchema = new SimpleSchema({
    toimialue: {
        label: "Toimialue (tää tulee erilailla)",
        type: ToimiAlue
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

Meteor.users.attachSchema(ProfiiliSchema);
