<?php

namespace App\GraphQL\Queries;

use App\Models\Event;
use Carbon\Carbon;
use GraphQL\Error\Error;

final class Events
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $fromCheck = (isset($args['from']) && $args['from']);
        $toCheck = (isset($args['to']) && $args['to']);

        $events = Event::query();
        if (isset($args['search'])) {
            $events->where('title', 'like', "%{$args['search']}%");
        }

        if (($fromCheck || $toCheck) && (!$fromCheck || !$toCheck)) {
            throw new Error('Complete the search date range.');
        }

        if ($fromCheck && $toCheck) {
            $events->whereBetween('event_date', [$args['from'], Carbon::create($args['to'])->addDay()]);
        }

        return $events->orderBy('event_date', 'ASC')->get();
    }
}
