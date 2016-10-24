Template.Etusivu.onCreated(function() {
    // Load Google Maps
    GoogleMaps.load({
        key: 'GOOGLE API KEY',
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
