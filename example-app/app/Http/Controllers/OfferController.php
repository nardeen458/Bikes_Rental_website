<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Offer;
use App\Models\Rental;


class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $user = DB::select("select * from rentals where user_id=?",[$id]);
        if(empty($user)){
            $offers = DB::select("select * from offers where id>=1");
            //$offers = Offer::findOrFail(1);
            return response()->json($offers);
        }
        elseif(count($user) >= 1 && count($user) < 3){
            $offers = DB::select("select * from offers where id>=2");
            //$offers = Offer::findOrFail(2);
            return response()->json($offers);
        }
        elseif(count($user) >= 4){
            $offers = DB::select("select * from offers where id=2");
            //$offers = Offer::findOrFail(2);
            return response()->json($offers);
        }
    }

    public function all_offers()
    {
        $offers = Offer::all();
        $rowCount = DB::table('offers')->count();
        return response()->json([$offers,$rowCount]);
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
        $request->validate([
            'description' => 'required',
        ]);
        $offer = Offer::create($request->all());
        return response() -> json([
            "status" => true,
            "message" => "Offer added successfully.",
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
    public function update(Request $request)
    {
        $request -> validate([
            "id" => "required",
            "description" => "required"
        ]);
        Offer::find($request["id"])->update($request->only(["description"]));
        return response() -> json([
            "status" => true,
            "message" => "Offer updated successfully.",
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
        Offer::find($request["id"])->delete();
        return response() -> json([
            "status" => true,
            "message" => "Offer deleted successfully.",
        ],200);
    }
}
