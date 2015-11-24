<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Game;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class GamesController extends Controller
{
    public function index(){
			$games = Game::all();
			
			return $games;
		}
}