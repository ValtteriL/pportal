Template.Pukiksi.events({
    'delete form' ( event, template ) {
        event.preventDefault();

        let user = {
            //etunimi: template.find('[name=etuNimi]').value,
            //sukunimi: template.find('[name=sukuNimi]').value,
            email: template.find( '[name="emailAddress"]' ).value,
            password: template.find( '[name="password"]' ).value
            
        };

        Accounts.createUser( user, ( error ) => {
            if ( error ) {
                Bert.alert( error.reason, 'danger' );
            } else {
                // TODO: include this to enable email verification
                //Meteor.call( 'sendVerificationLink', ( error, response ) => {
                    if ( error ) {
                        Bert.alert( error.reason, 'danger' );
                    } else {
                        Bert.alert( 'Welcome!', 'success' );
                    }
                //});
            }
        });
    }
});
