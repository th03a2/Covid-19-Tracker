<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('avatar')->nullable();
            $table->string('fname');
            $table->string('mname')->nullable();
            $table->string('lname');
            $table->enum('suffix', [
                'SR',
                'JR',
                'III',
                'IV',
                'V',
                'VI',
                'VII'])->nullable()->comment('suffixes');
            $table->date('dob')->nullable();
            $table->string('phone')->nullable();
            $table->string('parentObj')->nullable();
            $table->string('offspringArr')->nullable();
            $table->string('relativeObj')->nullable();
            $table->boolean('is_male')->default(1);
            $table->enum('bt', [
                'A',
                'B',
                'AB',
                'O'])->nullable()->comment('Blood Type');
            $table->boolean('has_rh')->nullable();
            $table->boolean('is_active')->default(1)->comment('deceased');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
