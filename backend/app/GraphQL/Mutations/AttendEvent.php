<?php

namespace App\GraphQL\Mutations;

use App\Models\Event;
use GraphQL\Error\Error;
use Illuminate\Support\Facades\Auth;

final class AttendEvent
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $event = Event::find($args['id']);
        $user = Auth::user();

        if (!$event) {
            throw new Error('Event not found.');
        }

        $event->attendants()->toggle($user->id);

        if ($event->attendants->find($user->id)) {
            return "You have successfully flag to attend this event.";
        }

        return "You have successfully unflag this event.";
    }
}
