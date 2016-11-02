import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

// configure cloudinary
Cloudinary.config({
    cloud_name: Meteor.settings.public.cloudName,
    api_key: Meteor.settings.private.cloudKey,
    api_secret: Meteor.settings.private.cloudSecret
});
