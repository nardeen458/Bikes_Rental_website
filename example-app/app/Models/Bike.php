<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bike extends Model
{
    use HasFactory;

    protected $table = "bikes";
    protected $fillable = [
        "bike_name",
        "description",
        "category_id",
        "suitable_age",
        "image"
    ];

    public function category(){
        return $this -> belongsTo(Category::class);
    }

    public function rental(){
        return $this -> hasMany(Rental::class);
    }

    public function bikes_location(){
        return $this -> hasMany(Bikes_location::class);
    }
}
