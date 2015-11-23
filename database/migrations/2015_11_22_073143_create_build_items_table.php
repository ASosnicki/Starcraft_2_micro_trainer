<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuildItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('build_items', function (Blueprint $table) {
            $table->increments('id');
						$table->integer('build_id')->unsigned();
						$table->integer('game_object_id')->unsigned();
						$table->integer('quantity')->unsigned();
						$table->integer('play_requirement_id')->unsigned();
						$table->integer('play_requirement_quantity')->unsigned();
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
        Schema::drop('build_items');
    }
}
