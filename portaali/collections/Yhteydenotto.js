// tee uus collection
Viestit = new Mongo.Collection('Viestit');

// tee schema sille
Viestit.schema = new SimpleSchema({
    name: {type: String, max: 25},
    email: {type: String, max: 255},
    comment: {type: String, max: 3000},
    createdAt: {type: Date}
});

// käytä schemaa aina validaatioissa kun heitetään insert,update tai upsert
Viestit.attachSchema(Viestit.schema);
