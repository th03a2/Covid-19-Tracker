<?php

namespace App\Http\Controllers\Actor;

use App\Models\Actor\Role;
use Illuminate\Http\Request;
use Session;

use App\Http\Controllers\Controller;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource. 
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request){
        $roles=Role::Where('id', '!=', 1)
                     ->where('name', 'LIKE',"%$request->key%")
                     ->get();
        return response()->json($roles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function save(Request $request){ 
        $role=Role::create ($request->all());
        return response()->json(array('role'=>$role, 'success' => 'You Have Updated the Roles'), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function find(Role $role)
    {
        return response()->json($role); 
    }

     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role){
        $input = $request->all();
        $role->fill($input)->save();
        return response()->json(array('role'=>$role, 'success' => 'You Have Updated the Roles'), 200);
        return redirect()->route('roles.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role){
        $role->update(['deleted_at'=> now()]);
        return response()->json(array('success' => 'You have Succesfully deleted your roles..'), 204);
    }
}
