<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Duration;

class DurationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $durations = Duration::all();
        return response()->json($durations);
    }

    public function price_after_offer($id)
    {
        $durations = Duration::all();
        $user = DB::select("select * from rentals where user_id=?",[$id]);
        $rents = count($user);
        if(empty($user)){
            for($i = 0; $i < count($durations); $i++){
                $durations[$i]->price = "Free";
            }
            return response()->json([$durations,$rents]);
        }
        elseif(count($user)==2){
            for($i = 0; $i < count($durations); $i++){
                $discount = $durations[$i]->price/4;
                $durations[$i]->price =  "$" . $durations[$i]->price - $discount;
            }
            return response()->json([$durations,$rents]);
        }
        elseif(count($user)>=4){
            for($i = 0; $i < count($durations); $i++){
                $durations[$i]->price = "$" . $durations[$i]->price/2;
            }
            return response()->json([$durations,$rents]);
        }
        else{
            return response()->json();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
