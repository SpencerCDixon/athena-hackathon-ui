<?php
include 'athenahealth.class.inc.php';
include 'athenahealthapi.class.inc.php';
error_reporting(E_ALL & ~E_NOTICE);

$a = new athenahealth;
$patientid = 26093; // Normally we would look this up, but hard coding for the demo.
$patient = $a->getPatientsByID($patientid);
$p = $a->getInsurances($patientid);
$patient['insurances'] = $p['insurances'];
$patient['271'] = array();
// Simulate the next API call
for ($i=1; $i<=5; $i++) {
	$handle = fopen("./example$i.txt", "r");
	$info = process271($handle);
	fclose($handle);
	if (count($info['outofpocket']) > 0 and count($info['deductible']) > 0) {
		$key = $info['who'];
		$good = true;
		if (array_key_exists($key, $patient['271'])) {
			if ($info['stamp'] < $patient['271'][$key]['stamp']) $good = 0;
		}
		unset($info['who']);
		if ($good) $patient['271'][$key] = $info;
	}
}

print json_encode($patient)."\n";

function process271($handle) {
	$who = '';
	$plans = array();
	$oop = array();
	
	while ($line = fgets($handle)) {
		if ($loc = strrpos($line, '~'))  {
			$fields = explode('*', substr($line, 0, $loc));
			switch ($fields[0]) {
				Case 'NM1':
					if ($fields[1] == '1P') {
						$who = $fields[9];
					}
					break;					
				case 'EB':
					if ($fields[1] == 'C' or $fields[1] == 'G') { // Out of pocket max
						$key0 = $fields[1];
						$key1 = $fields[2];
						if ($key1) {
							$key2 = '';
							if ($fields[6] == 23) $key2 = 'calendar';
							if ($fields[6] == 26) $key2 = 'base';
							if ($fields[6] == 28) $key2 = 'remaining';
							if ($key2 != '') {
								if ($fields[12] == 'Y') $key3 = 'in';
								elseif ($fields[12] == 'N') $key3 = 'out';
								else $key3 = 'both';
								if (! array_key_exists($key0, $oop)) $oop[$key0] = array();
								if (! array_key_exists($key1, $oop[$key0])) $oop[$key0][$key1] = array();
								if (! array_key_exists($key2, $oop[$key0][$key1])) $oop[$key0][$key1][$key2] = array();
								$oop[$key0][$key1][$key2][$key3] = $fields[7];
							}
						}
					}
					break;
				case 'DTP':
					if ($fields[2] == 'RD8') {
						$plans[] = array(
							'plan_id' => $fields[1],
							'dates' => $fields[3]
						);
					}
					break;
				case 'ISA':
					$datetime = '20'.$fields[9].' '.$fields[10];
					break;
			}
		}
	}
	$ret = array(
		'who' => $who,
		'stamp' => $datetime,
//		'plans' => $plans,
		'outofpocket' => $oop['G'],
		'deductible' => $oop['C'],
	);
	return $ret;
}
//$json = json_encode($patient);
//print $json;
