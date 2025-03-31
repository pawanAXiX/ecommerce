<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    use SoftDeletes;
    protected $model = Product::class;
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'description' => $this->faker->text(),
            'price' => $this->faker->randomFloat(2, 10),
            'quantity' => $this->faker->randomDigit(),
            'category_id' => Category::all()->random()->first()->id,
            'color' => $this->faker->colorName(),
            'discount' => $this->faker->randomFloat(2, 10),
            'size' => $this->faker->randomDigit(),
        ];
    }
}
