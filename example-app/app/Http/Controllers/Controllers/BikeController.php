<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Bike;

class BikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$bikes = Bike::with('category')->find();
        $bikes = Bike::all();
        return response()->json($bikes);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get_bikes()
    {
        $bikes = DB::select("select * from bikes join categories on categories.id = bikes.category_id");
        $rowCount = DB::table('bikes')->count();
        return response()->json([$bikes,$rowCount]);
    }

    public function limited_bikes()
    {
        $bikes = DB::select("select * from bikes join categories on categories.id = bikes.category_id limit 5");
        return response()->json($bikes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bike = Bike::findOrFail($id);
        return response()->json($bike);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // $request -> validate([
        //     "id" => "required",
        //     "images" => "nullable|image|max:2048",
        // ]);
        // //$request -> request -> add(["category_id" => $id ]);
        // $imagePath = null;
        // if($request -> hasFile("image")){
        //     $imagePath = $request -> file("image") -> store("products","public");
        //     $request["image"] = $imagePath;
        //     Product::find($request["id"])->update($request->only["image"]);
        // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function categoryBikes($id)
    {
        $bikes = Bike::where('category_id', $id)->get();
        return response()->json($bikes);
    }

    public function limitedBikes()
    {
        $bikes = Bike::limit(6)->get();
        return response()->json($bikes);
    }
}
