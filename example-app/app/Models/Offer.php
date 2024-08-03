<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;
    protected $table = "offers";
    protected $fillable = [
        "description"
    ];

    public function users_offer(){
        return $this -> hasMany(Users_offer::class);
    }
}
