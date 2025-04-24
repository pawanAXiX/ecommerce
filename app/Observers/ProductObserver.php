<?php

namespace App\Observers;

use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use JetBrains\PhpStorm\NoReturn;

class ProductObserver
{
    /**
     * Handle the Product "created" event.
     */
    public function created(Product $product): void
    {
        //
    }

    /**
     * Handle the Product "updated" event.
     */
    #[NoReturn] public function updated(Product $product): void
    {
        if (!$product->wasChanged('image'))
            return;

        $old_image = $product->getOriginal('image');

        if (!Storage::disk('public')->exists($old_image)) {
            return;
        }

        Storage::disk('public')->delete($old_image);
    }

    /**
     * Handle the Product "deleted" event.
     */
    public function deleted(Product $product): void
    {
        //
    }

    /**
     * Handle the Product "restored" event.
     */
    public function restored(Product $product): void
    {
        //
    }

    /**
     * Handle the Product "force deleted" event.
     */
    public function forceDeleted(Product $product): void
    {
        //
    }
}
