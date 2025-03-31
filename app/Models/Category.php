<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory, Notifiable;
    protected $fillable=['name','slug','description','image','parent_id'];
    protected function setNameAttribute($value){
        $this->attributes['name'] = ucfirst($value);
        $this->attributes['slug'] = self::generateUniqueSlug($value ,$this->id);
    }
    protected static function generateUniqueSlug($value ,$id){
        $slug= "buy-" . Str::slug($value)."-".$id;
        return $slug;
    }

    public function products(){
        return $this->hasMany(Product::class);

    }
}
