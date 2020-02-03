<?php
/**
 * Unordered Mindmap
 * Created: 2020-01-02
 * Updated: 2020-01-02
 * Author: Noah J Stewart
 */

namespace UnorderedMindmap;

use DateTime;
use DateTimeZone;
// use UnorderedMindmap\Interview;
// use UnorderedMindmap\InterviewException;

//helpful when using money_format
setlocale(LC_MONETARY, 'en_US');

//autoload through composer
// require_once __DIR__ . '/vendor/autoload.php';

$dataPath = '../data/sitemap.html';

$myfile = fopen($dataPath, "r");

include 'src/partials/header.php';

echo '<div class="mindmap">';

echo '<input type="text">';

// Output one line until end-of-file
while (!feof($myfile)) {
    echo fgets($myfile);
}
fclose($myfile);

echo '</div>';

include 'src/partials/footer.php';
