<?php

namespace App\Trait;



use Illuminate\Support\Str;

trait Sluggable
{
    public static function bootSluggable(): void
    {

        static::creating(function ($record) {
            $record->slug="buy-".Str::slug($record->name);
        });

    }
}
