<?php

namespace App\GraphQL\Mutations;

use App\Models\Event;
use GraphQL\Error\Error;
use Illuminate\Support\Facades\Auth;

final class DeleteEvent
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $event = Event::find($args['id']);

        if (!$event) {
            throw new Error('No Event found!');
        }

        if (Auth::user()->id !== $event->user->id) {
            throw new Error('Not authorized to delete this event.');
        }

        $event->delete();

        return "Event successfully deleted.";
    }
}
