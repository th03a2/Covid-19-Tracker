<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('display_name')->nullable();
            $table->enum('category', [
                            'daily',
                            'weekly',
                            'bi-monthly',
                            'monthly',
                            'quarterly',
                            'bi-annually',
                            'annually'])->nullable()->comment('payment types');
            $table->integer('hrsduty')->nullable();
            $table->integer('daysduty')->nullable();
            $table->decimal('basicpay', 8, 2)->unsigned()->default(0)->nullable();
            $table->decimal('dailypay', 8, 2)->unsigned()->default(0)->nullable();
            $table->decimal('SSS', 8, 2)->unsigned()->default(0)->nullable();
            $table->decimal('PHi', 8, 2)->unsigned()->default(0)->nullable();
            $table->decimal('COLA', 8, 2)->unsigned()->default(0)->nullable();
            $table->boolean('is_active')->default(1);;
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
        Schema::dropIfExists('roles');
    }
}
