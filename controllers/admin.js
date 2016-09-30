angular.module('myApp.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin', {
    templateUrl: 'views/admin.html',
    controller: 'AdminCtrl'
  });
}])

.controller('AdminCtrl', ['$scope',function($scope) {

	firebase.database().ref('student/').once('value').then(function(snapshot){

		console.log(snapshot.val())
	})

 
 }]);

