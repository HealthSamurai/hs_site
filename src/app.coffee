require('./pages/pages')

app = angular.module('app', [
  'ngRoute'
])


app.config ($routeProvider) ->
  rp = $routeProvider
  rp.when '/',
    name: 'index'
    templateUrl: '_index.jade'
    controller: 'IndexCtrl'
  rp.when '/products',
    name: 'index'
    templateUrl: 'products.jade'
    controller: 'IndexCtrl'
  rp.when '/works',
    name: 'index'
    templateUrl: 'works.jade'
    controller: 'IndexCtrl'
  rp.when '/services',
    name: 'index'
    templateUrl: 'services.jade'
    controller: 'IndexCtrl'
  rp.when '/contacts',
    name: 'index'
    templateUrl: 'contacts.jade'
    controller: 'IndexCtrl'
  rp.when '/education',
    name: 'index'
    templateUrl: 'education.jade'
    controller: 'IndexCtrl'
  rp.when '/foo',
    name: 'index'
    templateUrl: 'foo.jade'
    controller: 'IndexCtrl'

app.controller 'IndexCtrl', ($scope) ->
  

