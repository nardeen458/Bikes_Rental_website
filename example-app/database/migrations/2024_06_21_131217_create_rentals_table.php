<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rentals', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")->constrained()->onDelete("cascade");
            $table->integer("phone_number");
            $table->string("pickup_datetime");
            $table->foreignId("duration_id")->constrained()->onDelete("cascade");
            $table->foreignId("location_id")->constrained()->onDelete("cascade");
            $table->foreignId("bike_id")->constrained()->onDelete("cascade");
            $table->string("payment_method");
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
        Schema::dropIfExists('rentals');
    }
};
