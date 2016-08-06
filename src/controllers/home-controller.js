app.controller('HomeController', function($scope, $http) {
    $scope.data = [];
    $scope.trackResults = 0;
    $scope.hasMadeQuery = false;
    $scope.noMatches = false;
    $scope.query = "";
    $scope.isVegan = false;
    $scope.isGlutenFree = false;

    $scope.filterResults = function (item, idx) {
        if($scope.isVegan || $scope.isGlutenFree) {
            if (($scope.isVegan && item.is_vegan) || ($scope.isGlutenFree && item.is_gluten_free)) {
                $scope.trackResults++;
                return item;
            }
        }
        else{ $scope.trackResults++; return item; }
    };

    $scope.searchCategory = function (category){
        $scope.hasMadeQuery = true;
        $http.get('/api/v1/menu?category='+category).success(function (res) { $scope.trackResults = 0; $scope.data = res; });
    };
    $scope.searchQuery = function (searchAll) {
        $scope.hasMadeQuery = true;

        var queryString = '/api/v1/menu';
        if(searchAll) {
            $scope.isVegan = false;
            $scope.isGlutenFree = false;
            $http.get(queryString).success(function (res) { $scope.data = res; });
        }
        else {
            if ($scope.query.length > 2) {
                var query = encodeURIComponent($scope.query).replace(/%20/g, '+');
                if ($scope.query !== undefined) { queryString = '/api/v1/menu?query='+query; };
                $http.get(queryString).success(function (res) { $scope.trackResults = 0; $scope.data = res; });
            }
        }
    };

    document.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { $scope.searchQuery(); }
    });
});
