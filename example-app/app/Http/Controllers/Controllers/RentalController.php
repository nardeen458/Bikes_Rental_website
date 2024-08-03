<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Rental;
use App\Models\User;
use App\Models\Bike;
use App\Models\Duration;
use App\Models\Location;
use App\Models\Offer;



class RentalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $receipt=[];
        $receipt = DB::select("select * from rentals order by created_at desc");
        $id = $receipt[0]->bike_id;
        $bike = Bike::findOrFail($id);
        $id_duration = $receipt[0]->duration_id;
        $duration = Duration::findOrFail($id_duration);
        $id_location = $receipt[0]->location_id;
        $location = Location::findOrFail($id_location);
        $id_user = $receipt[0]->user_id;
        $user = User::findOrFail($id_user);
        return response()->json([$receipt[0],$bike,$duration,$location,$user]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all_rentals()
    {
        $rentals = DB::select("select * from bikes join rentals on bikes.id = rentals.bike_id join locations on locations.id = rentals.location_id");
        $rowCount = DB::table('rentals')->count();
        return response()->json([$rentals,$rowCount]);
    }

    public function limited_rentals()
    {
        $rentals = DB::select("select * from bikes join rentals on bikes.id = rentals.bike_id join locations on locations.id = rentals.location_id limit 5");
        return response()->json($rentals);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string', // Adjust the validation rules as per your requirements
            // Other fields validation rules
        ]);
        //dd($request);
        $data = $request -> only(["phone_number","pickup_datetime","duration_id","location_id","bike_id","payment_method"]);
        $user=[];
        $user = DB::select("select id from users where email=?",[$request["email"]]);
        $id=$user[0]->id;
        $data["user_id"] = $user[0]->id;
        $duration=[];
        $duration = DB::select("select price from durations where id=?",[$request["duration_id"]]);
        $price = $duration[0]->price;
        $rentals = DB::select("select * from rentals where user_id=?",[$id]);
        if(empty($rentals)){
            $data["offer"] = $price;
            $data["total"] = 0;
        }
        elseif(count($rentals)>=4){
            $data["offer"] = $price/2;
            $data["total"] = $price/2;
        }
        elseif(count($rentals)==2){
            $discount = $price/4;
            $data["offer"] = $price/4;
            $data["total"] = $price - $discount;
        }
        else{
            $data["total"] = $price;
        }
        $rental = Rental::create($data);
        return response() -> json([
            "status" => true,
            "message" => "You rented successfully"
        ],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request, $id)
    {
        //
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
}
