<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGameObjectsTable extends Migration
{
	/**
     * Run the migrations.
     *
     * @return void
     */
	public function up()
	{
		Schema::create('game_objects', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('game_id')->unsigned();
			$table->integer('faction_id')->unsigned();
			$table->string('name');
			$table->string('image_src');
			$table->timestamps();
		});
	}

	/**
     * Reverse the migrations.
     *
     * @return void
     */
	public function down()
	{
		Schema::drop('game_objects');
	}
}
