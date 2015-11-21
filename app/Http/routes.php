<?php

Route::get('/', 'PagesController@index');

Route::resource('build', 'BuildController');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);