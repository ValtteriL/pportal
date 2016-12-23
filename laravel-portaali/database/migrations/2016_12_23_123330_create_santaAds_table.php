<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSantaAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('santaAds', function (Blueprint $table) {
            $table->increments('id');
            $table->time('startTime');
            $table->time('endTime');
            $table->integer('costPerQuarter'); // hinta/vartti
            $table->string('mobility', 12);
            $table->float('latitude'); // keskipisteen latitude
            $table->float('longtitude'); // keskipisteen longtitude
            $table->integer('sade'); // ympyrän säde 
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
        Schema::dropIfExists('santaAds');
    }
}
