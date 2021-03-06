// route pages using DefaultLayout
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Etusivu'}); 
    }
});

FlowRouter.route('/pukiksi', {
    name: 'pukiksi',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Pukiksi'});
    }
});

FlowRouter.route('/tietoa', {
    name: 'tietoa',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Tietoa'});
    }
});

FlowRouter.route('/ota-yhteytta', {
    name: 'otayhteytta',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'OtaYhteytta'});
    }
});

FlowRouter.route('/yritys', {
    name: 'yritys',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Yritys'});
    }
});

FlowRouter.route('/rekisteroidy', {
    name: 'rekisteroidy',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Rekisteroidy'});
    }
});

FlowRouter.route('/kirjaudu', {
    name: 'kirjaudu',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Kirjaudu'}); 
    }
});

FlowRouter.route('/profiili/:username', {
    name: 'profiili',
    action: function(params) {
        BlazeLayout.render('DefaultLayout', {main: 'Profiili'}); 
    }
});
FlowRouter.route('/hallinta', {
    name: 'hallinta',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Hallinta'}); 
    }
});



// route pages using TilausLayout
FlowRouter.route('/tilaa', {
    name: 'tilaa',
    action() {
        BlazeLayout.render('TilausLayout', {main: 'Pukit'}); 
    }
});
FlowRouter.route('/tilaa/:username', {
    name: 'tilaa',
    action: function(params) {
        BlazeLayout.render('TilausLayout', {main: 'Tilaapukki'}); 
    }
});

// route pages using PukkiLayout
FlowRouter.route('/oma-sivu', {
    name: 'omasivu',
    action() {
        if (Meteor.userId()) {
            BlazeLayout.render('PukkiLayout', {main: 'OmaSivu'});
        } else {
            FlowRouter.go('kirjaudu');
        }
    }
});

FlowRouter.route('/asetukset', {
    name: 'asetukset',
    action() {
        if (Meteor.userId()) {
            BlazeLayout.render('PukkiLayout', {main: 'Asetukset'});
        } else {
            FlowRouter.go('kirjaudu');
        }
    }
});

// logout, login
FlowRouter.route('/kirjaudu-ulos', {
    name: 'uloskirjautuminen',
    action() {
        Accounts.logout();
        FlowRouter.go('/');
    }
});
