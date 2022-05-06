<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return $products;
    }

    public function store(Request $request)
    {
        Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock
        ]);
        
    }

    public function show($id)
    {
        $product = Product::find($id);

        return $product;
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($request->id);
        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock
        ]);
    }

    public function destroy($id)
    {
        $product = Product::destroy($id);
        return $product;
    }
}
