<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $table = "locations";
    protected $fillable = [
        "location_name"
    ];

    public function rental(){
        return $this -> hasMany(Rental::class);
    }

    public function bikes_location(){
        return $this -> hasMany(Bikes_location::class);
    }

}
