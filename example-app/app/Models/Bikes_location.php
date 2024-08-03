<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bikes_location extends Model
{
    use HasFactory;

    protected $table = "bikes_locations";
    protected $fillable = [
        "bike_id",
        "location_id"
    ];

    public function bike(){
        return $this -> belongsTo(Bike::class);
    }

    public function location(){
        return $this -> belongsTo(Location::class);
    }
}
