<?php

use App\Models\Category;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('slug');
            $table->string('description')->nullable();
            $table->json('image')->nullable();
            $table->float('price');
            $table->float('discount')->nullable();
            $table->string('size')->nullable();
            $table->string('color')->nullable();
            $table->softDeletes()->nullable();
            $table->float('quantity');
            $table->foreignIdFor(Category::class,'category_id')->constrained()->cascadeOnDelete();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
