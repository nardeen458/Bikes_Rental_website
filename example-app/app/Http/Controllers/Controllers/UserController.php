<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user=[];
        $user = DB::select("select * from users where email=?",[$request["email"]]);
        if(empty($user)){
            return response()->json([
                "status" => false,
                "message" => "Invalid email"
            ]);
        }
        else{
            if($user[0]->password == $request["password"]){
                return response()->json([
                    "status" => true,
                    "message" => "loged in successfully",
                    "user_id" => $user[0]->id
                ]);
            }
            else{
                return response()->json([
                    "status" => false,
                    "message" => "Invalid password"
                ]);
            }
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allusers()
    {
        $users = User::all();
        $rowCount = DB::table('users')->count();
        return response()->json([$users,$rowCount]);
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
        $user = User::create($request->all());
        $newuser=[];
        $newuser = DB::select("select * from users order by created_at desc");
        return response() -> json([
            "status" => true,
            "message" => "User added successfully",
            "user_id" => $newuser[0]->id
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
        $user = User::findOrFail($id);
        return response()->json($user);

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
