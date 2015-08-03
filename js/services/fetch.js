app.factory('forecast', ['$http', function($http) { 

  return $http.get('https://bleutrade.com/api/v2/public/getmarkets') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
