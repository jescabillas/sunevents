<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use GraphQL\Error\Error;
use Illuminate\Support\Facades\Validator;

final class RegisterUser
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $validator = Validator::make(collect($args)->all(), [
            'name' => ['required', 'min:2'],
            'email' => ['required','email', 'unique:users'],
            'password' => ['required', 'min:2', 'confirmed'],
        ]);

        if ($validator->fails()) {
            throw new Error('Validation failed! Please check your inputs and try again.');
        }

        $user = User::create([
            'name' => $args['name'],
            'email' => $args['email'],
            'password' => $args['password'],
        ]);

        $token = $user->createToken('API Token of ' . $user->email)->accessToken;

        return ['user' => $user, 'token' => $token];
    }
}
