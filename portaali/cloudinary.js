// SERVER
if(Meteor.isServer) {
    Cloudinary.config({
        cloud_name: Meteor.settings.public.cloudName,
        api_key: Meteor.settings.private.cloudKey,
        api_secret: Meteor.settings.private.cloudSecret

        // Rules are all optional
        //Cloudinary.rules.delete = ->
        //@userId is "my_user_id" // The rule must return true to pass validation, if you do not set a rule, the validation will always pass
        //@public_id // The public_id that is being deleted

        //Cloudinary.rules.signature = -> // This one checks whether the user is allowed to upload or not
        //@userId is "my_user_id" // The rule must return true to pass validation, if you do not set a rule, the validation will always pass

        //Cloudinary.rules.private_resource = ->
        //@userId is "my_user_id" // The rule must return true to pass validation, if you do not set a rule, the validation will always pass

        //Cloudinary.rules.download_url = ->
        //@userId is "my_user_id" // The rule must return true to pass validation, if you do not set a rule, the validation will always pass


    });
}

// CLIENT
if(Meteor.isClient) {
    $.cloudinary.config({
        cloud_name: Meteor.settings.public.cloudName
    });
}
