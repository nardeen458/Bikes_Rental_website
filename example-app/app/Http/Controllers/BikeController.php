<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
        $request -> validate([
            "bike_name" => "required",
            "description" => "required",
            "suitable_age" => "required",
            "category_id" => "required",
            "image" => "nullable|max:2048"
        ]);
        $data = $request -> only(["bike_name","description","suitable_age","category_id"]);
        // $request -> request -> add(["category_id" => $id ]);
        $imagePath = null;
        if($request -> hasFile("image")){
            $imagePath = $request -> file("image") -> store("bikes","public");
            $data["image"] = $imagePath;
            $bike = Bike::create($data);
            return response() -> json([
                "status" => true,
                "message" => "Bike added successfully.",
            ],200);
        }
        else{
            return response() -> json([
                "status" => false,
                "message" => "Bike not added.",
            ],200);
        }
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
        $request -> validate([
            "id" => "required",
            "image" => "nullable|max:2048",
        ]);
        $imagePath = null;
        if($request->hasFile("image")){
            $imagePath = $request -> file("image") -> store("bikes","public");
            $path = $imagePath;
            $bike = DB::update("update bikes set image=? where id=?",[$path,$request["id"]]);
            return response() -> json([
                "status" => true,
                "message" => "Bike updated successfully",
            ],200);
        }
        else{
            return response() -> json([
                "status" => false,
                "message" => "Bike not updated",
            ],200);
        }
    }

    public function update_name(Request $request)
    {
        $request -> validate([
            "id" => "required",
            "bike_name" => "required"
        ]);
        Bike::find($request["id"])->update($request->only(["bike_name"]));
        return response() -> json([
            "status" => true,
            "message" => "Bike name updated successfully.",
        ],200);
    }

    public function update_description(Request $request)
    {
        $request -> validate([
            "id" => "required",
            "description" => "required"
        ]);
        Bike::find($request["id"])->update($request->only(["description"]));
        return response() -> json([
            "status" => true,
            "message" => "Bike description updated successfully.",
        ],200);
    }

    public function update_category(Request $request)
    {
        $request -> validate([
            "id" => "required",
            "category_id" => "required"
        ]);
        Bike::find($request["id"])->update($request->only(["category_id"]));
        return response() -> json([
            "status" => true,
            "message" => "Bike category updated successfully.",
        ],200);
    }

    public function update_age(Request $request)
    {
        $request -> validate([
            "id" => "required",
            "suitable_age" => "required"
        ]);
        Bike::find($request["id"])->update($request->only(["suitable_age"]));
        return response() -> json([
            "status" => true,
            "message" => "Bike suitable age updated successfully.",
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Bike::find($request["id"])->delete();
        return response() -> json([
            "status" => true,
            "message" => "Bike deleted successfully.",
        ],200);
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
