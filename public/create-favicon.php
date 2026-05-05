<?php
// Create a simple 32x32 PNG favicon with neon colors
$width = 32;
$height = 32;

$image = imagecreatetruecolor($width, $height);

// Colors
$background = imagecolorallocate($image, 10, 10, 10); // #0a0a0a
$cyan = imagecolorallocate($image, 0, 240, 255); // #00f0ff
$pink = imagecolorallocate($image, 255, 0, 255); // #ff00ff

// Make background transparent
imagecolortransparent($image, $background);
imagefill($image, 0, 0, $background);

// Draw "B" letter
$font = 5; // Built-in font
imagestring($image, $font, 8, 8, 'B', $cyan);

// Draw small dot below
imagefilledellipse($image, 16, 25, 3, 3, $pink);

// Save as PNG
imagepng($image, 'favicon.png');
imagedestroy($image);

echo "favicon.png created\n";

// Create 16x16 version
$image16 = imagecreatetruecolor(16, 16);
$background16 = imagecolorallocate($image16, 10, 10, 10);
$cyan16 = imagecolorallocate($image16, 0, 240, 255);
imagecolortransparent($image16, $background16);
imagefill($image16, 0, 0, $background16);
imagestring($image16, 1, 3, 3, 'B', $cyan16);
imagepng($image16, 'favicon-16.png');
imagedestroy($image16);

echo "favicon-16.png created\n";

// Create apple touch icon 180x180
$image180 = imagecreatetruecolor(180, 180);
$background180 = imagecolorallocate($image180, 10, 10, 10);
$cyan180 = imagecolorallocate($image180, 0, 240, 255);
$pink180 = imagecolorallocate($image180, 255, 0, 255);
imagefill($image180, 0, 0, $background180);

// Draw larger "B"
imagestring($image180, 5, 65, 60, 'B', $cyan180);
imagefilledellipse($image180, 90, 110, 8, 8, $pink180);

// Add neon glow effect with circles
for ($i = 0; $i < 3; $i++) {
    imageellipse($image180, 90, 90, 140 - $i*10, 140 - $i*10, $cyan180);
}

imagepng($image180, 'apple-touch-icon.png');
imagedestroy($image180);

echo "apple-touch-icon.png created\n";
echo "Done!\n";
?>
