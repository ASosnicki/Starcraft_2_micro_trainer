<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuildRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('build_ratings', function (Blueprint $table) {
            $table->increments('id');
						$table->integer('user_id')->unsigned();
						$table->integer('build_id')->unsigned();
						$table->integer('rating')->unsigned();
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
        Schema::drop('build_ratings');
    }
}
