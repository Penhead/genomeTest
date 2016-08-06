app.controller('HomeController', function($scope, $http) {
    $scope.data = [];
    $scope.query;
    $scope.searchCategory = function (category){
        $http.get('/api/v1/menu?category='+category).success(function (res) {
            $scope.data = res;
        });
    };
    $scope.searchQuery = function (searchAll) {
        var queryString = '/api/v1/menu';
        if(searchAll) {
            $http.get(queryString).success(function (res) {
                if(res.length === 0) { res = ["No Matching Results"] }
                $scope.data = res;
            });
        }else{
            var query = encodeURIComponent($scope.query).replace(/%20/g, '+');
            if($scope.query !== undefined) { queryString = '/api/v1/menu?query='+query; };
            $http.get(queryString).success(function (res) {
                $scope.data = res;
            });
        }
    };

    document.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {$scope.searchQuery();}
    });
});
