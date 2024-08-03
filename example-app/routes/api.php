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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/categories",[App\Http\Controllers\CategoryController::class,"index"]);
Route::get("/bikes",[App\Http\Controllers\BikeController::class,"index"]);
Route::get("/bike/{id}",[App\Http\Controllers\BikeController::class,"show"]);
Route::post("/addUser",[App\Http\Controllers\UserController::class,"store"]);
Route::get("/offers/{id}",[App\Http\Controllers\OfferController::class,"index"]);
Route::get("/categoryBikes/{id}",[App\Http\Controllers\BikeController::class,"categoryBikes"]);
Route::get("/durations",[App\Http\Controllers\DurationController::class,"index"]);
Route::get("/locations",[App\Http\Controllers\LocationController::class,"index"]);
Route::get("/homeBikes",[App\Http\Controllers\BikeController::class,"limitedBikes"]);
Route::post("/login",[App\Http\Controllers\UserController::class,"index"]);
Route::get("/user/{id}",[App\Http\Controllers\UserController::class,"show"]);
Route::post("/rent",[App\Http\Controllers\RentalController::class,"store"]);
Route::get("/receipt",[App\Http\Controllers\RentalController::class,"index"]);
Route::post("/credit/{id}",[App\Http\Controllers\CreditController::class,"store"]);
Route::post("/message/{id}",[App\Http\Controllers\MessageController::class,"store"]);
Route::get("/getbikes",[App\Http\Controllers\BikeController::class,"get_bikes"]);
Route::get("/users",[App\Http\Controllers\UserController::class,"allusers"]);
Route::get("/rentals",[App\Http\Controllers\RentalController::class,"all_rentals"]);
Route::get("/limitedbikes",[App\Http\Controllers\BikeController::class,"limited_bikes"]);
Route::get("/limitedrentals",[App\Http\Controllers\RentalController::class,"limited_rentals"]);
Route::get("/alloffers",[App\Http\Controllers\OfferController::class,"all_offers"]);
Route::post("/addcategory",[App\Http\Controllers\CategoryController::class,"store"]);
Route::post("/updatecategory",[App\Http\Controllers\CategoryController::class,"update"]);
Route::post("/updatebike",[App\Http\Controllers\BikeController::class,"update"]);
Route::post("/addbike",[App\Http\Controllers\BikeController::class,"store"]);
Route::post("/deletecategory",[App\Http\Controllers\CategoryController::class,"destroy"]);
Route::post("/deletebike",[App\Http\Controllers\BikeController::class,"destroy"]);
Route::post("/addlocation",[App\Http\Controllers\LocationController::class,"store"]);
Route::post("/updatelocation",[App\Http\Controllers\LocationController::class,"update"]);
Route::post("/deletelocation",[App\Http\Controllers\LocationController::class,"destroy"]);
Route::post("/addoffer",[App\Http\Controllers\OfferController::class,"store"]);
Route::post("/updateoffer",[App\Http\Controllers\OfferController::class,"update"]);
Route::post("/deleteoffer",[App\Http\Controllers\OfferController::class,"destroy"]);
Route::post("/updatebikename",[App\Http\Controllers\BikeController::class,"update_name"]);
Route::post("/updatebikedescription",[App\Http\Controllers\BikeController::class,"update_description"]);
Route::post("/updatebikecategory",[App\Http\Controllers\BikeController::class,"update_category"]);
Route::post("/updatebikeage",[App\Http\Controllers\BikeController::class,"update_age"]);
Route::get("/discount/{id}",[App\Http\Controllers\DurationController::class,"price_after_offer"]);