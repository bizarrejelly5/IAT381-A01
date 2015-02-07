var index = angular.module('index', ['ngRoute']);

index.config(function($routeProvider){
	$routeProvider.
	//**Home Page**
		//index for app
		when('/', {
			templateUrl: 'partials/index.html'
		})
		//index when 'Quiz App' is clicked
		.when('/index',{
			templateUrl: 'partials/index.html'
		})
		//studying Home page
		.when('/studyPage',{
			templateUrl: 'partials/study_home.html'
		})
		//quiz home page
		.when('/quizPage',{
			templateUrl: 'partials/quiz_home.html'
		})
		//Marvel home page
		.when('/MarvelPage', {
			templateUrl: 'partials/quiz_marvel.html',
			controller: 'MarvelController'
		})
		//DC home page
		.when('/DCPage', {
			templateUrl: 'partials/quiz_media.html',
			controller: 'DCController'
		})


	//**Quiz Page**
		.when('/designPage', {
			templateUrl: 'partials/quiz_design.html',
			controller: 'DesignController'
		})
		.when('/mediaPage', {
			templateUrl: 'partials/quiz_media.html',
			controller: 'MediaController'
		})
		.when('/informaticsPage', {
			templateUrl: 'partials/quiz_informatics.html',
			controller: 'InformaticsController'
		})
		.when('/amyPage', {
			templateUrl: 'partials/quiz_tester.html',
			controller: 'InformaticsController'
		})
		.when('/MarvelAnswers', {
			templateUrl: 'partials/marvel_answers.html'
		})

		
	//**404 Error**
		.otherwise({
			redirectTo: '/'
		});
});

//**controller for the quiz**
index.controller('DesignController', function($scope){
	$scope.userInput = {};
	$scope.answers = {};
});

index.controller('MediaController', function($scope){
	$scope.userInput = {};
	$scope.answers = {};
});

index.controller('InformaticsController', function($scope){
	$scope.userInput = {};
	$scope.answers = {};
});
index.controller('MarvelController', function($scope){
	$scope.userInput = {};
	$scope.answers = {};
});

index.controller('DCController', function($scope){
	$scope.userInput = {};
	$scope.answers = {};
});

