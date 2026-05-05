<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function portfolio()
    {
        return Inertia::render('Portfolio');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function book()
    {
        // Handle booking form submission
        // This would typically save to database and send notifications
        return back()->with('success', 'Booking request submitted successfully!');
    }
}
