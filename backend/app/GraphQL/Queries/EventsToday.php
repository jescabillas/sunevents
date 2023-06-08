<?php

namespace App\GraphQL\Queries;

use App\Models\Event;
use Carbon\Carbon;
use DateTime;

final class EventsToday
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $today = isset($args['today']) ? new Carbon($args['today']) : now()->format('Y-m-d');
        $events = Event::whereDate('event_date', '=', $today)->get();

        return $events;
    }
}
