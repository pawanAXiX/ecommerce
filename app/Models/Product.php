<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory,SoftDeletes, Notifiable;
    protected $fillable=['name','slug','description','image','price','category_id','size','color','quantity'];
    protected function setNameAttribute($value){
        $this->attributes['name'] = ucfirst($value);
        $this->attributes['slug'] = self::generateUniqueSlug($value ,$this->id);
    }
    protected static function generateUniqueSlug($value ,$id){
        $slug= "buy-" . Str::slug($value)."-".$id;
        return $slug;
    }

    public function category(){
        return $ths =  $this->belongsTo(Category::class);
    }
}
