<?php

namespace App\Models;

use App\Observers\ProductObserver;
use App\Trait\Sluggable;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;


#[ObservedBy(ProductObserver::class)]
class Product extends Model
{
    use HasFactory, SoftDeletes, Notifiable, Sluggable;

    protected $fillable = ['name', 'slug', 'description', 'image', 'price', 'category_id', 'size', 'color', 'quantity'];

    public function category(): BelongsTo
    {
        return $ths = $this->belongsTo(Category::class);
    }


    protected function setNameAttribute($value)
    {
        $this->attributes['name'] = ucfirst($value);
    }
}
