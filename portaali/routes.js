// route pages using DefaultLayout
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Etusivu'}); 
    }
});

FlowRouter.route('/pukiksi', {
    name: 'home',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Pukiksi'});
    }
});

FlowRouter.route('/tietoa', {
    name: 'home',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Tietoa'});
    }
});

FlowRouter.route('/yritys', {
    name: 'home',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Yritys'});
    }
});

FlowRouter.route('/rekisteroidy', {
    name: 'home',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Rekisteroidy'});
    }
});

FlowRouter.route('/kirjaudu', {
    name: 'home',
    action() {
        BlazeLayout.render('DefaultLayout', {main: 'Kirjaudu'}); 
    }
});


// route pages using TilausLayout
FlowRouter.route('/tilaa', {
    name: 'home',
    action() {
        BlazeLayout.render('TilausLayout'); 
    }
});

// route pages using PukkiLayout
FlowRouter.route('/profiili', {
    name: 'home',
    action() {
        BlazeLayout.render('PukkiLayout'); 
    }
});


