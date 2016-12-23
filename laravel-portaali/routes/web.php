<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

// Change this to something else later...
Route::get('/', function () {
    return view('welcome');
});

// route to show the registration form and to register
Route::get('pukiksi', array('uses' => 'RegistrationController@showRegistration'));
Route::post('pukiksi', array('uses' => 'RegistrationController@doRegister'));

// pages without any authentication
Route::get('tietoa', function() { return view('tietoa'); });
Route::get('ota-yhteytta', function() { return view('ota-yhteytta'); });
Route::get('yritys', function() { return view('yritys'); });

// Kirjaudu sisään / ulos
Route::get('kirjaudu', array('uses' => 'LoginController@showLogin'));
Route::post('kirjaudu', array('uses' => 'LoginController@doLogin'));
Route::get('kirjaudu-ulos', array('uses' => 'LoginController@logOut'));

// sisäänkirjautuneella pukilla
Route::get('asetukset', array('uses' => 'settingsController@showSettings'));
Route::post('asetukset', array('uses' => 'settingsController@saveSettings'));
Route::get('oma-sivu', array('uses' => 'HomeController@showHome'));
Route::post('oma-sivu', array('uses' => 'HomeController@saveHome'));

// profiilin katselu ja muokkaus
Route::get('profiili/{santaId?}', function($santaId = null) {
    return ProfileController@showProfile();
});
Route::post('profiili/{santaId?}', function($santaId = null) {
    return ProfileController@saveProfile(); // tarkkana
});
Route::get('profiili/tilaa/{santaId?}', function($santaId = null) {
    return OrderController@showOrder // onko tarpeellinen? miten tilaustiedot saadaan välittymään parhaiten sivujen välillä?
});

// administraatiohommat
Route::get('hallinta', array('uses' => 'AdminController@showPanel')); // tosi tarkkana!
Route::post('hallinta', array('uses' => 'AdminController@doAdmin')); // tosi tarkkana!
