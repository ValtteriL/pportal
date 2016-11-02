// tee uus collection

YhteydenottoSchema = new SimpleSchema({
    viesti: {
        type: String,
        label: "Kommentti",
        optional: true,
        max: 3000,
        autoform: {
            placeholder: 'Kuvaa itseäsi!',
            rows: 5
        }
    },
    savy: {
        type: String,
        label: "Sävy",
        allowedValues: ['Positiivinen','Negatiivinen'],
        autoform: {
            type: "select-radio-inline"
        }
    }
});

//Meteor.users.attachSchema(YhteydenottoSchema);
