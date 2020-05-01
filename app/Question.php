<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'text',
        'category_id'
    ];

    public function answers() {
        return $this->hasMany('App\Answer');
    }

    public function answersInRandomOrder() {
        return $this->hasMany('App\Answer')->inRandomOrder();
    }
}
