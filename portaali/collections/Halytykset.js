// tee uus collection
Halytykset = new Mongo.Collection('Halytykset');

// tee schema sille
Halytykset.schema = new SimpleSchema({
    email: {type: String, max: 255},
    address: {type: String, max: 255},
    createdAt: {type: Date}
});

// käytä schemaa aina validaatioissa kun heitetään insert,update tai upsert
Halytykset.attachSchema(Halytykset.schema);
