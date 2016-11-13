Meteor.methods({
    // mark hasProfilePic to true
    addProfilePic: function(version) {
        if(this.userId) {
            Meteor.users.update(this.userId, {
                $set: {
                    "profile.hasProfilePic": true,
                    "profile.picVersion": version
                }
            });
        }
    },

    // mark hasProfilePic to as false
    removeProfilePic: function() {
        if (this.userId) {
            Meteor.users.update(this.userId, {
                $set: {
                    "profile.hasProfilePic": false
                }
            });
        }
    },

    // check password
    checkPassword: function(digest) {
        check(digest, String);
        if(this.userId) { 
            var user = Meteor.user();
            var password = {digest: digest, algorithm: 'sha-256'};
            var result = Accounts._checkPassword(user, password);
            return result.error == null
        } else {
            return false;
        }
    },

    // ota yhteyttä
    otaYhteytta: function(sentname, sentemail, sentcomment) {
        // ei tarvi tarkistella koska käytetään schemaa

        // heitä tietokantaan
        return Viestit.insert({name: sentname, email: sentemail, comment: sentcomment, createdAt: new Date()}, function(err, res) {
            if(err) {
                console.log(err);
                return false;
            } else {
                return true;
            }
        });
    },

    // aseta hälytys
    asetaHalytys: function(sentemail, sentaddress) {
        // ei tarvi tarkistella koska käytetään schemaa
        
        // heitä tietokantaan
        return Halytykset.insert({email: sentemail, address: sentaddress, createdAt: new Date()}, function(err, res) {
            if(err) {
                console.log(err);
                return false;
            } else {
                return true;
            }
        }); 
    }
});
