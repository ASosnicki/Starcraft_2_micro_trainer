<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Build extends Model
{
    protected $fillable = [
			'name',
			'private',
			'description'
		];
}
