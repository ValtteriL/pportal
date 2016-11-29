Template.OmaSivu.onCreated(function() {
    this.editMode = new ReactiveVar(false); // variable for editmode, default false
    this.toggleJouluaatto = new ReactiveVar(false);
    this.toggleJoulupaiva = new ReactiveVar(false); 

    /* hande map events and reactive updates here */
    GoogleMaps.ready('exampleMap', function(map) {
        
        // Add a CIRCLE to the map once it's ready
        var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map.instance,
            center: map.options.center,
            radius: 1000,
            editable: true,
            draggable: true 
        });

    });
    
    /* hande map events and reactive updates here */
    GoogleMaps.ready('jouluaattoMap', function(map) {
        
        // Add a CIRCLE to the map once it's ready
        var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map.instance,
            center: map.options.center,
            radius: 1000,
            editable: true,
            draggable: true 
        });
    });
});


Template.OmaSivu.events({
    "click #toggle-jouluaatto": function(event, template) {
        template.toggleJouluaatto.set(!template.toggleJouluaatto.get());
        if (template.toggleJouluaatto.get()) {
            GoogleMaps.load({key: Meteor.settings.public.googleMaps}); // load map if opened
        }
    },
    "click #toggle-joulupaiva": function(event, template) {
        template.toggleJoulupaiva.set(!template.toggleJoulupaiva.get());
        if (template.toggleJoulupaiva.get()) {
            GoogleMaps.load({key: Meteor.settings.public.googleMaps}); // load map if opened
        }
    }
});

Template.OmaSivu.helpers({
    omaprofiili: ()=> {
        return Meteor.users.findOne({});
    },
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(60.1699, 24.9384),
                zoom: 12,
                disableDefaultUI: true
            };
        }
    },
    aattoMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(60.1699, 24.9384),
                zoom: 12,
                disableDefaultUI: true
            };
        }
    },
    toggleJoulupaiva: function() {
        return Template.instance().toggleJoulupaiva.get();
    },
    toggleJouluaatto: function() {
        return Template.instance().toggleJouluaatto.get();
    }
});
