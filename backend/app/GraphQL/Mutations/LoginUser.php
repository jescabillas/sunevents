<?php

namespace App\GraphQL\Mutations;

use GraphQL\Error\Error;
use Illuminate\Support\Facades\Auth;

final class LoginUser
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        if( !Auth::attempt($args)) {
            throw new Error('Invalid credentials.');
        }

        $user = Auth::user();

        $token = $user->createToken('API Token of ' . $user->email)->accessToken;

        return ['user' => $user, 'token' => $token];
    }
}
