<?php

namespace App\Http\Controllers\Actor;

use App\Models\Actor\User;
use App\Models\Actor\Role;
use App\http\Requests\UserValidate;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Alert;

class EmployeeController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(User $request){
    $employees= User::all();
    return response()->json($employees);
  }

public function list()
  { 
    $employees= User::whereHas('role',function ($q){
              $q->whereNotIn('name',['Superadmin', 'Client']);
            })
            ->orderby('role_id', 'desc')
            ->get();
    return response()->json($employees);
  }

/**
 * Show the form for creating a new resource.
 *
 * @return \Illuminate\Http\Response
 */
public function create(Request $request){
  $roles=Role::whereNotIn('name', ['Superadmin', 'Client'])
            ->orderBy('name')
            ->get();
  return view('Actors.Employees.create', compact('roles'));
}

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request, UserValidate $validate){
    if($request->hasFile('img')){
        $image = $request->file('img');
        $filename = date('FY') . '/' .$request['lname'].' '.$request['fname'].'.'.$image->getClientOriginalExtension();
        $image->move(public_path("/storage/users/" . date('FY'). '/'), $filename);

        $request->merge(['avatar' => $filename]);
    }else{
      $request->merge(['avatar'=> 'img/admin.png']);
    }
  
      $input = $request->all();
      User::create ($input);
      return redirect('/employees')
      ->with('success', 'You Have Updated the Employee');
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show(User $user){
    return view('Actors.employees.member', compact('Advisers'));
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id){
    Alert::message('Robots are working!');
    Alert::basic('Basic Message', 'Mandatory Title');

    Alert::info('Info Message', 'Optional Title');

    Alert::success('Success Message', 'Optional Title');

    Alert::error('Error Message', 'Optional Title');

    Alert::warning('Warning Message', 'Optional Title');
    
    $employee=User::find($id);
    $roles=Role::all();
    return view('Actors.employees.edit',compact('employee','roles'));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id){
    $employee = User::find($id);

    if($request->hasFile('img')){
      $image = $request->file('img');
      $filename = date('FY') . '/' .$request['lname'].$request['fname'].'.'.$image->getClientOriginalExtension();
      $image->move(public_path("/storage/users/" . date('FY'). '/'), $filename);

      $request->avatar = $filename;
      };
    $input = $request->all();
    $input['avatar'] = $request->hasFile('avatar')? $request->avatar: 'img/admin.png';
    $employee->fill($input)->save();
    return redirect('/employees')
            ->with('success','You have updated the customer');
      Image::make($image)->resize(300, 300)->save( storage_path('/storage/users/'. date('FY'). '/'. $filename ) );
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id){
      User::destroy($id);
      return redirect('/employees')
        ->with('success','You have Succesfully deleted your employee..');
  }
}
