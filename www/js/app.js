
angular.module('ionicApp', ['ionic', 'tabSlideBox', 'ionic-modal-select'])

.run(['$ionicPlatform', '$q', '$http', '$rootScope', '$location', '$window', '$timeout',
	function($ionicPlatform, $q, $http, $rootScope, $location, $window, $timeout) {
  		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
			  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			  cordova.plugins.Keyboard.disableScroll(true);
			}
			if(window.StatusBar) {
			  StatusBar.styleDefault();
			}
  		});
	}
])
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('tabs', {
	  url: "/tab",
	  abstract: true,
	  templateUrl: "templates/tabs.html"
    })
    .state('tabs.newOrder', {
	  url: "/newOrder",
	  views: {
		'newOrder-tab': {
		  templateUrl: "templates/newOrder.html",
		  controller: 'NewOrderTabCtrl'
		}
	  }
	})
	.state('tabs.previousOrders', {
	  url: "/previousOrders",
	  views: {
		'previousOrders-tab': {
		  templateUrl: "templates/previousOrders.html",
		  controller: 'PreviousOrdersTabCtrl'
		}
	  }
	})
	.state('tabs.selectOrder', {
	  url: "/selectOrder",
	  views: {
		'newOrder-tab': {
		  templateUrl: "templates/selectOrder.html"
		}
	  }
	})

	$urlRouterProvider.otherwise("/tab/newOrder");
})
.controller('NewOrderTabCtrl',['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout',
 	function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout) {
$scope.chains = [
    "Starbucks", "Barista", "Costa Coffee", "Cafe Coffee Day"
  ];
  $scope.locations = [
      "CP", "Cyber Hub", "Dlf Promenade", "Rajouri Garden"
    ];
    $scope.city = [
        "New Delhi", "Bangalore", "Mumbai", "Pune"
      ];
      $scope.selectedChain=" ";
      $scope.selectedCity=" ";
      $scope.selectedLocation=" ";
	  $scope.selectedOutlet = $scope.selectedChain + " , " + $scope.selectedCity +
	   " , " + $scope.selectedLocation;
}])
.controller('PreviousOrdersTabCtrl', function($scope) {
})
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})
