<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserPaymentHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_payment_history', function (Blueprint $table) {
            $table->increments('id');
						$table->integer('user_id')->unsigned();
						$table->string('transaction_id');
						$table->timestamp('paid_through');
						$table->timestamp('date_paid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('user_payment_history');
    }
}
