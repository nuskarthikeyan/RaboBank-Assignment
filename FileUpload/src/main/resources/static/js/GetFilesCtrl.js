mainApp.controller('getcontroller', function($scope, $http, $location) {
	
	$scope.getfunction = function(){
		// get URL
		var url = $location.absUrl() + "/rest/getAllFilesNew";
		
		// do getting
		$http.get(url).then(function (response) {
			// turn on flag for get successfully
			$scope.getDivAvailable = true;
			alert("entered");
			$scope.response = response.data;
		}, function error(response) {
			$scope.postResultMessage = "Error Status: " +  response.statusText;
		});
	}
});
