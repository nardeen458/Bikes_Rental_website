<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Duration extends Model
{
    use HasFactory;

    protected $table = "durations";
    protected $fillable = [
        "duration_time",
        "price"
    ];

    public function rental(){
        return $this -> hasMany(Rental::class);
    }

}
