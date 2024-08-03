<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users_offer extends Model
{
    use HasFactory;
    protected $table = "users_offers";
    protected $fillable = [
        "user_id",
        "offer_id"
    ];

    public function user(){
        return $this -> belongsTo(User::class);
    }

    public function offer(){
        return $this -> belongsTo(Offer::class);
    }
}
