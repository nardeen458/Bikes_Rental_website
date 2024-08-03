<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rental extends Model
{
    use HasFactory;

    protected $table = "rentals";
    protected $fillable = [
        "user_id",
        "phone_number",
        "pickup_datetime",
        "duration_id",
        "location_id",
        "bike_id",
        "payment_method",
        "offer",
        "total"
    ];
    protected $attributes=[
        "offer" => 0
    ];

    public function user(){
        return $this -> belongsTo(User::class);
    }

    public function duration(){
        return $this -> belongsTo(Duration::class);
    }

    public function location(){
        return $this -> belongsTo(Location::class);
    }

    public function bike(){
        return $this -> belongsTo(Bike::class);
    }
}
