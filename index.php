<?php
/**
 * Created by PhpStorm.
 * User: Jsmit and Ean Daus
 * Date: 1/18/2019
 * Time: 10:06 AM
 */


//Turn on error reporting
session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once('vendor/autoload.php');

//Create an instance of the Base class
$f3 = Base::instance();

//Turn on Fat-Free error reporting
$f3->set('DEBUG', 3);

$f3 = Base::instance();

//Define a default route
$f3->route('GET /', function() {
    echo"<h1>Js Review 2</h1>";
    $view = new View;
    echo $view->render('views/home.html');
});

//Run fat free
$f3->run();