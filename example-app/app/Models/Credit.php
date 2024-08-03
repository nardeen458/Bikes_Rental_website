<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Credit extends Model
{
    use HasFactory;

    protected $table = "credits";
    protected $fillable = [
        "user_id",
        "credit_number",
        "credit_password"
    ];

    public function user(){
        return $this -> belongsTo(User::class);
    }
}
