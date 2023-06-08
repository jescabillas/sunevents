<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;

final class LogoutUser
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        Auth::user()->tokens()->delete();

        return "Logout successfully";
    }
}
