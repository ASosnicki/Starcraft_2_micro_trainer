<?php

Route::get('/', 'PagesController@index');

Route::resource('build', 'BuildController');
Route::get('games', 'GamesController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);