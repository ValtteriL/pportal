<?php
include_once 'db-connect.php';


/* input should be coordinates */
if(isset($_GET['lo'], $_GET['la']))
{
    $longitude = filter_input(INPUT_GET, 'lo', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    $latitude = filter_input(INPUT_GET, 'la', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
}
else
{
    die('illegal arguments');
}


/* connect to database */
if ($stmt = $mysqli->prepare("SELECT id, nimi, kuva, arvosana, hinta, SQRT(
    POW(69.1 * (latitude - ?), 2) +
    POW(69.1 * (? - longitude) * COS(latitude / 57.3), 2)
    - sade
    ) AS distance
    FROM pukit HAVING distance <= 0")
{
    /* fetch results - should we request only suitable ones somehow? YES if possible */
    $stmt->bind_param('ddd', $latitude, $longitude);
    $stmt->execute();   // Execute the prepared query.

    
    /* generate JSON of the suitable ones */
    $array_of_pukkis = array();
    while($r = mysqli_fetch_assoc($stmt))
    {
         $array_of_pukkis[] = $r;
    }

    /* print out the json */
    print json_encode($array_of_pukkis);
}
else
{
    die('database connectionz failez');
}


?>
