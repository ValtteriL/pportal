Template.Etusivu.onCreated(function() {

    // Load Google Maps
    GoogleMaps.load({
        key: Meteor.settings.public.googlePlacesAutocomplete, // get api key from settings
        libraries: 'places'  // also accepts an array if you need more than one
    });
});

Template.Etusivu.onRendered(function() {
    this.autorun(function () {
        if (GoogleMaps.loaded()) {
            $("input").geocomplete({componentRestrictions: {country: "fi"}});
        }
    });
});


Template.Etusivu.events({
    'submit form'(event) {
        event.preventDefault();

        console.log(addressInput.value);
        addressInput.value = '';
    }
});
