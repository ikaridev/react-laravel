<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'description' => $this->faker->paragraph(1),
            'price' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 300),
            'stock' => $this->faker->numberBetween($min = 3, $max = 50)
        ];
    }
}
