<?php

namespace App\Models\Actor;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Patient extends Model
{
    protected $softDelete = true;
    protected $fillable = [
        'avatar',
        'fname',
        'mname_id',
        'lname_id',
        'suffix',
        'dob',
        'contactnum',
        'parentObj',
        'offspringArr',
        'relativeObj',
        'is_male',
        'has_rh',
        'bt',
        'is_active',
        ];

    protected $casts = [
        'mname_id'    => 'integer',
        'lname_id'    => 'integer',
        'parentObj'   => 'object',
        'offspringArr'=> 'array',
        'relativeObj' => 'object',
        'dob'         => 'date:M d, Y',
        'has_rh'      => 'boolean',
        'is_male'     => 'boolean',
        'is_active'   => 'boolean',
        ];

    protected $appends = [
        'fullname',
        'img',
        'parents',
        'offsprings',
        'relatives',
        'age',
        'age_string',
        'gender',
        'development',
        'bday'
        ];

    public function getParentsAttribute()
        {
            $parents = null;
            if($this->parentObj){
                foreach($this->parentObj as $key=>$value){
                    if($key=='m'){
                        $parents['Mother'] = Customer::find($value);
                    }else{
                        $parents['Father'] = Customer::find($value);
                    }
                }
            }
            return $parents;
        }

    public function getOffspringsAttribute()
        {
            $offspring = null;
            if($this->offspringArr){
                for ($i=0; $i < count($this->offspringArr); $i++) { 
                    $os = Customer::find($this->offspringArr[$i]);
                    if($os->is_male){
                        $offspring['Son'][$os->id] = $os;
                    }else{
                        $offspring['Daugther'][$os->id] = $os;
                    }
                }
            }
            return $offspring;
        }
    public function getRelativesAttribute()
        {
            $relatives=null;
            if( $this->relativeObj){
                foreach ($this->relativeObj as $key => $value) {
                    switch ($key) {
                        case 'siblings':
                            $siblings = null;
                            if($value){
                                for ($i=0; $i < count($value); $i++) { 
                                    $sb = Customer::find($value[$i]);
                                    if($sb->is_male){
                                        $siblings['Brother'][$sb->id] = $sb;
                                    }else{
                                        $siblings['Sister'][$sb->id] = $sb;
                                    }
                                }
                            }

                            $relatives['siblings']=$siblings;
                            break;
                        case 'pamangkin':
                            $pamangkin = null;
                            if($value){
                                for ($i=0; $i < count($value); $i++) { 
                                    $pk = Customer::find($value[$i]);
                                    if($pk->is_male){
                                        $pamangkin['Niece'][$pk->id] = $pk;
                                    }else{
                                        $pamangkin['Nephew'][$pk->id] = $pk;
                                    }
                                }
                            }
                          
                            $relatives['pamangkin']=$pamangkin;
                            break;
                        default:
                            # code...
                            break;
                    }
                }
            }
            return $relatives;
        }
    public function getfullnameAttribute()
        {
            $fn = "{$this->fname} {$this->lname} {$this->suffix}";
            if(!$this->mname_id ==Null or !$this->mame_id =='')  {
                $fn = "{$this->fname} {$this->mname->mi} {$this->lname } {$this->suffix}";
                }
            return  strtoupper($fn);
        }

    public function getAgeAttribute()
        {
           return Carbon::parse($this->attributes['dob'])->age;
        }
        public function getAgeStringAttribute()
        {
            if( Carbon::parse($this->attributes['dob'])->age > 1){
                return $this->dob->diff(Carbon::now())->format('%y y/o and  %m mo.');
            }
           return $this->dob->diff(Carbon::now())->format('%y Year, %m Months and %d Days');
            
        }    
    public function getImgAttribute()
        {
            return is_null($this->avatar)?($this->gender?'male.png':'female.png'):$this->avatar;
        }
    public function getGenderAttribute()    
        {
            return $this->is_male?"Male":"Female";         
        }
        
    public function getDevelopmentAttribute()
        {
            // Age Development
            switch (true) {
                case in_array($this->age, range(1,2)):
                    return "Toddler";
                    break;
                case in_array($this->age, range(3,4)):
                    return "Preschool";
                    break;
                case in_array($this->age, range(5,11)):
                    return "Gradeschooler";
                    break;
                case in_array($this->age, range(12,17)):
                    return "Teen";
                    break;
                case in_array($this->age, range(18,21)):
                    return "Young Adult";
                    break;
                default:
                    return "Adult";
                    break;
            }
        }
    public function getBdayAttribute()
        {
            return $this->dob->format('Y-m-d');
        }
}
