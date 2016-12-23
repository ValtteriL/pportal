<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSantasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('santas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('username', 32);
            $table->string('email', 320);
            $table->string('password', 64);
            $table->string('firstName', 32);
            $table->string('familyName', 32);
            $table->boolean('hasProfpic');
            $table->string('picVersion', 32);
            $table->string('description', 500);
            $table->boolean('finnish');
            $table->boolean('swedish');
            $table->boolean('english');
            $table->boolean('russian');
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
        Schema::dropIfExists('santas');
    }
}
