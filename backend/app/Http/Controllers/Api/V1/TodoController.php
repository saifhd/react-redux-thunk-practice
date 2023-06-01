<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\TodoResource;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::query()
            ->paginate();

        return TodoResource::collection($todos);
    }
}
