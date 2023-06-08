<?php

namespace App\GraphQL\Mutations;

use App\Models\Event;
use Carbon\Carbon;
use GraphQL\Error\Error;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

final class CreateEvent
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $validator = Validator::make(collect($args)->all(), [
            'event_date' => ['required', 'date'],
            'title' => ['required', 'max:40'],
            'description' => ['required'],
            'hosts' => ['required'],
        ]);

        if ($validator->fails()) {
            throw new Error('Validation failed! Please check your inputs and try again.');
        }

        $event = Event::create([
            'event_date' => new Carbon($args['event_date']),
            'title' => $args['title'],
            'description' => $args['description'],
            'user_id' => Auth::user()->id,
        ]);

        $event->hosts()->sync($args['hosts']);

        return Event::find($event->id);
    }
}
