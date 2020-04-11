<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) { return $request->user();});

Route::prefix('/patient')->group(function() 
    {
        Route::get('/', 'Actor\PatientController@index'); 
        Route::get('/list', 'Actor\PatientController@list'); 
        Route::get('/{patient}/find', 'Actor\PatientController@find'); 
        Route::put('/save', 'Actor\PatientController@save'); 
        Route::put('/{patient}/update', 'Actor\PatientController@update'); 
        Route::delete('/{customer}/destroy', 'Actor\PatientController@destroy'); 
    });

Route::prefix('/role')->group(function() 
    {
        Route::get('/', 'Actor\RoleController@index'); 
        Route::get('/list', 'Actor\RoleController@list'); 
        Route::get('/{role}/find', 'Actor\RoleController@find');  
        Route::post('/save', 'Actor\RoleController@store'); 
        Route::put('/{role}/update', 'Actor\RoleController@update'); 
        Route::delete('/{role}/destroy', 'Actor\RoleController@destroy'); 
    });

Route::prefix('/employee')->group(function() 
    {
        Route::get('/', 'Actor\EmployeeController@index'); 
        Route::get('/list', 'Actor\EmployeeController@list'); 
        Route::get('/{employee}/find', 'Actor\EmployeeController@find'); 
        Route::put('/updateOrCreate', 'Actor\EmployeeController@updateOrCreate');
        Route::post('/save', 'Actor\EmployeeController@save');  
        Route::put('/{user}/update', 'Actor\EmployeeController@update'); 
        Route::delete('/{employee}/destroy', 'Actor\EmployeeController@destroy'); 
    });