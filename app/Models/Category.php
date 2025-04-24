<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Category extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = ['name', 'slug', 'description', 'image', 'parent_id'];

    public function products()
    {
        return $this->hasMany(Product::class);

    }


    public function child()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function parent()
    {
        return $this->belongsTo(Category::class);
    }

    protected function setNameAttribute($value)
    {
        $this->attributes['name'] = ucfirst($value);
    }
}
