<?php
// Athena's API requires pecl_http
class athenahealth {

	private $api;
	private $practice;
	
	public function __construct($practiceid='195900') {
		$this->practice = $practiceid;
//		$this->api = new athenahealthapi('preview1', 'vc8m6yx28sq773xara4f5np2', '7sCK5gnWkJ4ut5K', $practiceid);
		$this->api = new athenahealthapi('preview1', 'gcsy2snfwxdbybg639z6desd', 'pVSEsWQhqusvYBz', $practiceid);
	}

	public function getDepartments() {
		$ret = $this->api->get('/departments?providerlist=false&showalldepartments=false',array('limit'=>5000));
		return $ret;
	}

	public function getProviders() {
		$ret = $this->api->get('/providers',array('limit'=>5000));
		return $ret;
	}

	public function getPracticeInfo() {
		$ret = $this->api->get('/practiceinfo',array('limit'=>5000));
		return $ret;
	}

	public function getPatientsByID($id) {
		$ret = $this->api->get("/patients/$id",array('limit'=>5000));
		return $ret;
	}

	public function getPatients($a) {
		$query = "";
		foreach ($a as $key=>$value) {
			$query .= "&$key=$value";
		}
		$query = '?'.substr($query, 1);
		$ret = $this->api->get("/patients$query",array('limit'=>5000));
		return $ret;
	}

	public function getInsurances($patientid) {
		$ret = $this->api->get("/patients/$patientid/insurances",array('limit'=>5000));
		return $ret;
	}

	public function getBenefitDetails($patientid, $insuranceid) {
		$ret = $this->api->get("/patients/$patientid/insurances/$insuranceid/benefitdetails",array('limit'=>5000));
		return $ret;
	}
	
	public function getInsurancePackages($a) {
		$query = "";
		foreach ($a as $key=>$value) {
			$query .= "&$key=$value";
		}
		$query = '?'.substr($query, 1);
		$ret = $this->api->get("/insurancepackages$query",array('limit'=>5000));
		return $ret;
	}

}
