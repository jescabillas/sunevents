<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function hosts()
    {
        return $this->belongsToMany(User::class, 'event_user');
    }

    public function attendants()
    {
        return $this->belongsToMany(User::class, 'attendance');
    }
}
