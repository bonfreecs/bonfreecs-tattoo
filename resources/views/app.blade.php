<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BONFREECS Tattoo | Dark Art Studio</title>
    <meta name="description" content="Dark art tattoo studio specializing in custom designs, blackwork, and neo-traditional tattoos.">
    
    <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2.0">
    
    @php
        $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
        $cssFile = $manifest['resources/css/app.css']['file'] ?? 'assets/app-Dkm8aFBc.css';
        $jsFile = $manifest['resources/js/app.jsx']['file'] ?? 'assets/app-BsYFT4d6.js';
    @endphp
    
    <link rel="stylesheet" href="/build/{{ $cssFile }}">
    <script type="module" src="/build/{{ $jsFile }}"></script>
</head>
<body>
    @inertia
</body>
</html>
