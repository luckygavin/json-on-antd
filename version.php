<?php
$json = json_decode(file_get_contents(__DIR__ . '/package.json'));
echo $json->fixedVersion;