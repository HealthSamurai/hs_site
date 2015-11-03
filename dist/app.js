/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var app;

	__webpack_require__(1);

	app = angular.module('app', ['ngRoute']);

	app.config(function($routeProvider) {
	  var rp;
	  rp = $routeProvider;
	  rp.when('/', {
	    name: 'index',
	    templateUrl: '_index.jade',
	    controller: 'IndexCtrl'
	  });
	  rp.when('/products', {
	    name: 'index',
	    templateUrl: 'products.jade',
	    controller: 'IndexCtrl'
	  });
	  rp.when('/works', {
	    name: 'index',
	    templateUrl: 'works.jade',
	    controller: 'IndexCtrl'
	  });
	  rp.when('/contacts', {
	    name: 'index',
	    templateUrl: 'contacts.jade',
	    controller: 'IndexCtrl'
	  });
	  return rp.when('/foo', {
	    name: 'index',
	    templateUrl: 'foo.jade',
	    controller: 'IndexCtrl'
	  });
	});

	app.controller('IndexCtrl', function($scope) {});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(9);

	__webpack_require__(10);

	__webpack_require__(11);

	__webpack_require__(12);

	__webpack_require__(13);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/index.html"

/***/ },
/* 3 */
/***/ function(module, exports) {

	var v1="<div class=\"content_block\"><h1>Страница не найдена</h1><p>Преейти на <a href=\"/\">главную страницу</a></p></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("404.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var v1="<div class=\"container title\"><span class=\"moto\">Мы <span class=\"title_piece\">знаем как </span>создавать медицинские информационные системы будущего</span><span class=\"desc\">Эксперты в Health IT. Разрабатываем для клиентов на основе наших технологичных продуктов и стандарта HL7 FHIR.</span></div><div class=\"container products\"><h3>Продукты &nbsp<small> <a href=\"#/products\" class=\"lbl\">Все продукты (5)</a></small></h3><br><div class=\"col-md-4\"><a href=\"#/products#fhirbase\" class=\"item-product\"><span class=\"image-product\"><i class=\"fa fa-fire logo\"></i></span><span class=\"productname\"><h3>Fhirbase &nbsp<small>Open Source</small></h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p></span></a></div><div class=\"col-md-4\"><a href=\"#/products#aidbox\" class=\"item-product\"><span class=\"image-product\"><i class=\"fa fa-gift logo\"></i></span><span class=\"productname\"><h3>Aidbox</h3><p>Облачная платформа для разработки медицинских приложений на основе HL7 FHIR</p></span></a></div><div class=\"col-md-4\"><a href=\"#/products#hl7mapper\" class=\"item-product\"><span class=\"image-product\"><i class=\"fa fa-arrow-circle-o-right logo\"></i></span><span class=\"productname\"><h3>HL7 Mapper</h3><p>Интеграционный модуль для преобразования сообщений HL7 v2.x в HL7 FHIR и обратно</p></span></a></div></div><div class=\"container projects\"><h3>Проекты &nbsp<small><a href=\"#/works\" class=\"lbl\">Все проекты (9)</a></small></h3><br><div class=\"cont-projects\"><a href=\"#/works#medclient\" class=\"item-project\"><span>2007-2014</span><h3>MedClient EHR</h3><span>Разработка, внедрение в 4-х американских клиниках и сертификация облачной EHR</span></a><a href=\"#/works#kainos\" class=\"item-project\"><span>2015 год</span><h3>Kainos</h3><span>Доработка Fhirbase под нужды проекта Kainos</span></a><a href=\"#/works#netrika\" class=\"item-project\"><span>2015</span><h3>Netrika</h3><span>Консультирование и обучение по HL7 FHIR и внедрение Fhirbase в рамках региональной шины</span><i class=\"fa fa-chevrone-right\"></i></a></div></div><div class=\"container products\"><h3>Обучение &nbsp<small> <a href=\"#/\" class=\"lbl\">Все обучения (9)</a></small></h3><br><div class=\"col-md-4\"><a class=\"item-product\"><span class=\"image-product\"><span>B</span></span><span class=\"productname\"><h3>Основы HL7 FHIR</h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p></span></a></div><div class=\"col-md-4\"> <a class=\"item-product\"><span class=\"image-product\"><span>E</span></span><span class=\"productname\"><h3>Анатомия Fhirbase</h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p></span></a></div><div class=\"col-md-4\"> <a class=\"item-product\"><span class=\"image-product\"><span>M</span></span><span class=\"productname\"><h3>HL7 v2.x</h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p></span></a></div></div><div class=\"container offers\"><h3>Виды сотрудничества &nbsp</h3><br><ul class=\"list-unstyled\"><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-rocket logo\"></i></div><div class=\"col-md-9\"><h4>\"Быстрый старт\" и обучение вашей команды</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-rocket logo\"></i></div><div class=\"col-md-9\"><h4>\"Быстрый старт\" и заказная разработка нашей командой</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-life-ring logo\"></i></div><div class=\"col-md-9\"><h4>Коммерческая поддержка для продукта Fhirbase</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-graduation-cap logo\"></i></div><div class=\"col-md-9\"><h4>Обучение стандартам и нашим продуктам</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-binoculars logo\"></i></div><div class=\"col-md-9\"><h4>Консультации и аудиты</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li></ul></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div><div class=\"container news\"><h3>Новости и статьи &nbsp</h3><br><div class=\"row\"><script async src=\"https://static.medium.com/embed.js\"></script><a class=\"m-profile\" href=\"https://medium.com/@health_samurai\">Health Samurai</a></div></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("_index.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 5 */
/***/ function(module, exports) {

	var v1="<div class=\"container\"><br><h2 class=\"text-center\">МИАЦ СПб \"Справочник лабораторных тестов\"</h2><br><div class=\"row\"><div class=\"col-sm-4 col-sm-offset-4\"><ul class=\"nav nav-tabs tabs-top\"><li role=\"presentation\"><a href=\"#/\">Вход</a></li><li role=\"presentation\" class=\"active\"><a href=\"#/registration\">Регистрация</a></li></ul><br><form ng-submit=\"registration()\"><div ng-class=\"{'has-error': err.email}\" class=\"form-group\"><label ng-if=\"err.email\" class=\"control-label\">Указанный Email уже используется</label><input ng-model=\"new_user.email\" type=\"email\" required=\"true\" placeholder=\"Email\" class=\"form-control\"></div><div class=\"form-group\"><input ng-model=\"new_user.password\" type=\"password\" required=\"true\" placeholder=\"Пароль\" class=\"form-control\"></div><div class=\"form-group\"><input ng-model=\"new_user.data.phone\" placeholder=\"Телефон\" required class=\"form-control\"></div><div class=\"form-group\"><input ng-model=\"new_user.data.name\" placeholder=\"ФИО\" required class=\"form-control\"></div><div class=\"form-group\"><input ng-model=\"new_user.data.position\" placeholder=\"Должность\" required class=\"form-control\"></div><div class=\"form-group\"><button id=\"submit\" type=\"submit\" class=\"btn btn-block btn-success\">Зарегистрироваться</button></div></form></div></div></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("registration.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var v1="<div class=\"signup-page\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6 col-sm-offset-3\"><h3>Подтвердите ваш email</h3><p>На указанный вами адрес электронной почты было выслано письмо с инструкциями для подтверждения вашей учетной записи.</p><p>Перейти на <a href=\"/#/\">главную страницу.</a></p></div></div></div></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("instructions.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var v1="<div class=\"container\"><h1>Fooooo</h1><a href=\"#/\">Index</a></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("foo.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var v1="<div class=\"container-fluid sub-title text-center\"><span class=\"sub-moto\">Наши продукты</span><span class=\"sub-desc\">Мы разрабатываем технологичные продукты на основе HL7 FHIR.</span></div><div class=\"container\"><h1> <i class=\"demo-icon icon-fhirbase\">0xe802</i></h1><div id=\"fhirbase\" class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-fire logo\"></i><br><br><span class=\"label label-info\">PostgreSQL 9.4+</span><br><span class=\"label label-info\">plv8</span><br><span class=\"label label-info\">HL7 FHIR</span></div><div class=\"col-md-8\"><h3>Fhirbase &nbsp<small>Open Source</small></h3><span class=\"product-slogan\">Реляционное хранилище медицинских данных на основе стандарта HL7 FHIR.</span><br><br><p>Fhirbase - это реляционное хранилище с встроенной моделью данных, соответствующей международному стандарту HL7 FHIR. Fhirbase подходит для построения медицинских информационных системы разных классов: электронные карты (EHR), интеграционные ”шины”, репозитории медицинских данных (реестры), госпитальные системы (HIS), порталы для пациентов и телемедицины.</p><br><strong>Особенности Fhirbase</strong><ul><li>Fhirbase построен на PostgreSQL с использованием языка plv8</li><li>Fhirbase реализует модель данных соответсвующую HL7 FHIR</li><li>Fhirbase имеет простой API для обращения к данным (like REST)</li></ul><br><a href=\"http://fhirbase.github.io\" target=\"_blank\" class=\"btn btn-default gotosite\">Сайт продукта</a><a href=\"https://github.com/fhirbase\" target=\"_blank\"><i class=\"fa fa-github add_links\"></i></a><a href=\"https://groups.google.com/forum/#!forum/fhirbase\" target=\"_blank\"><i class=\"fa fa-comments-o add_links\"></i></a></div></div><hr><div id=\"aidbox\" class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-gift logo\"></i><br><br><span class=\"label label-info\">Amazon AWS</span><br><span class=\"label label-info\">Fhirbase</span><br><span class=\"label label-info\">Clojure</span><br><span class=\"label label-info\">AnguraJS</span></div><div class=\"col-md-8\"><h3>Aidbox</h3><span class=\"product-slogan\">Облачная платформа для создания медицинских систем на основе HL7 FHIR</span><br><br><p>Aidbox - это платформа \"как сервис\" (PaaS) для разработки медицинских решений на основе HL7 FHIR. Aidbox подходит для построения мобильных и web-решений оперирующих медицинскими данными: электронные карты (EHR), интеграционные ”шины”, репозитории медицинских данных (реестры), госпитальные системы (HIS), порталы для пациентов и телемедицины.</p><br><strong>Особенности Aidbox</strong><ul><li>Aidbox использует Fhirbase для хранения данных</li><li>Aidbox реализует REST API на основе стандарта HL7 FHIR</li><li>Aidbox решает вопросы Security с использование OAuth</li><li>Aidbox предоставляет хостинг для базы и несложных single page applications</li><li>Aidbox имеет SDK и вы можете интегрироваться с решениями на ваших технологиях (Java, .Net etc...)</li></ul><br><a href=\"https://aidbox.io/landing.html#/\" target=\"_blank\" class=\"btn btn-default gotosite\">Сайт продукта</a></div></div><hr><div id=\"hl7mapper\" class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-arrow-circle-o-right logo\"></i><br><br><span class=\"label label-info\">Clojure</span><br><span class=\"label label-info\">HL7 FHIR</span></div><div class=\"col-md-8\"><h3>HL7 Mapper</h3><span class=\"product-slogan\">Модуль для интеграции...</span><br><br><p>HL7 Mapper - это ...</p><br><strong>Особенности HL7 Mapper</strong><ul><li>HL7 Mapper ...</li></ul><br><a href=\"http://fhirbase.github.io\" target=\"_blank\" class=\"btn btn-default gotosite\">Сайт продукта</a></div></div><hr><div id=\"formstamp\" class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-stack-overflow logo\"></i><br><br><span class=\"label label-info\">AngularJS</span></div><div class=\"col-md-8\"><h3>FormStamp &nbsp<small>Open Source</small></h3><span class=\"product-slogan\">Библиотека виджетов на \"чистом\" AngularJS</span><br><br><p>FormStamp - это платформа \"как сервис\" (PaaS) для разработки медицинских решений на основе HL7 FHIR. Aidbox подходит для построения мобильных и web-решений оперирующих медицинскими данными: электронные карты (EHR), интеграционные ”шины”, репозитории медицинских данных (реестры), госпитальные системы (HIS), порталы для пациентов и телемедицины.</p><br><strong>Особенности FormStamp</strong><ul><li>Aidbox использует Fhirbase для хранения данных</li><li>Aidbox реализует REST API на основе стандарта HL7 FHIR</li><li>Aidbox решает вопросы Security с использование OAuth</li><li>Aidbox предоставляет хостинг для базы и несложных single page applications</li><li>Aidbox имеет SDK и вы можете интегрироваться с решениями на ваших технологиях (Java, .Net etc...)</li></ul><br><a href=\"http://formstamp.github.io/#/\" target=\"_blank\" class=\"btn btn-default gotosite\">Сайт продукта</a></div></div><hr><div id=\"foodtaster\" class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-rocket logo\"></i><br><br><span class=\"label label-info\">Chef</span><br><span class=\"label label-info\">Vagrant</span><br><span class=\"label label-info\">RSpec</span></div><div class=\"col-md-8\"><h3>FoodTaster &nbsp<small>Open Source</small></h3><span class=\"product-slogan\">Библиотека виджетов на \"чистом\" AngularJS</span><br><br><p>FormStamp - это платформа \"как сервис\" (PaaS) для разработки медицинских решений на основе HL7 FHIR. Aidbox подходит для построения мобильных и web-решений оперирующих медицинскими данными: электронные карты (EHR), интеграционные ”шины”, репозитории медицинских данных (реестры), госпитальные системы (HIS), порталы для пациентов и телемедицины.</p><br><strong>Особенности FormStamp</strong><ul><li>Aidbox использует Fhirbase для хранения данных</li><li>Aidbox реализует REST API на основе стандарта HL7 FHIR</li><li>Aidbox решает вопросы Security с использование OAuth</li><li>Aidbox предоставляет хостинг для базы и несложных single page applications</li><li>Aidbox имеет SDK и вы можете интегрироваться с решениями на ваших технологиях (Java, .Net etc...)</li></ul><br><a href=\"https://github.com/mlapshin/foodtaster\" target=\"_blank\"><i class=\"fa fa-github add_links\"></i></a></div></div></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("products.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var v1="<div class=\"container-fluid sub-title text-center\"><span class=\"sub-moto\">Наши проекты</span><span class=\"sub-desc\">Вместе с нашими клиентам мы создаем медицинские системы нового поколения, которые используются в разных частях мира.</span></div><div class=\"container\"><div id=\"kainos\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><span class=\"date\">2015 - ...</span><h2>Kainos &nbsp<small>Support for Fhirbase</small></h2><p>Самураи провели обучение команды Kainos по архитектуре Fhirbase и работе с ним. Осуществляют поддержку/доработку Fhirbase в рамках проекта Kainos.</p><br><div ng-class=\"{opened:kainos}\" class=\"project-details\"><strong>О проекте Kainos</strong><p>Самураи провели обучение команды Kainos по архитектуре Fhirbase и работе с ним. Осуществляют поддержку/доработку Fhirbase в рамках проекта Kainos.</p><br><strong>Продукты и технологии</strong><br><span class=\"label label-info\">PostgreSQL 9.4+ </span>&nbsp<span class=\"label label-info\">plv8 </span>&nbsp<span class=\"label label-info\">HL7 FHIR </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"kainos=!kainos\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"netrika\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><span class=\"date\">2015</span><h2>Нетрика.ДЛИ &nbsp<small>Consulting & Audit</small></h2><p>Самураи проконсультировали Нетрику по межународным стандартам (HL7 v2, HL7 v3, HL7 FHIR) и помогли выбрать стандарт подходящий для их задач. Прочитали тренинг по основам HL7 FHIR. Поучаствовали в проектировании сервиса для обмена лабораторными данными и создании модели данных на основе HL7 FHIR.</p><br><div ng-class=\"{opened:netrika}\" class=\"project-details\"><strong>О проекте Нетрика.ДЛИ</strong><p>Нетрика разаботала сервис для обмена данными лабораторных исследований и для реализации использовала Fhirbase. Сервис для обмена лабораторными данными, позволяет медицинским учреждениям и лабораториям обмениваться назначениями и результатами лабораторных исследований в электронном виде, весь обмен данными производится на основне стандарта HL7 FHIR.</p><br><strong>Продукты и технологии</strong><br><span class=\"label label-info\">Fhirbase </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"netrika=!netrika\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"vitalsync\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><span class=\"date\">2015 - ...</span><h2>VitalSync &nbsp<small>Consulting & Custom development</small></h2><p>Самураи консультируют по применению стандарта HL7 FHIR и занимаются разработкой интеграционного модуля для обработки входящего потока данных в формате HL7 v2.x.</p><br><div ng-class=\"{opened:vitalsync}\" class=\"project-details\"><strong>О проекте Kainos</strong><p>Самураи провели обучение команды Kainos по архитектуре Fhirbase и работе с ним. Осуществляют поддержку/доработку Fhirbase в рамках проекта Kainos.</p><br><strong>Продукты и технологии</strong><br><span class=\"label label-info\">PostgreSQL 9.4+ </span>&nbsp<span class=\"label label-info\">plv8 </span>&nbsp<span class=\"label label-info\">HL7 FHIR </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"vitalsync=!vitalsync\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"miazslt\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><span class=\"date\">2015</span><h2>МИАЦ.СЛТ &nbsp<small>Project Bootstrap & Custom development</small></h2><p>Самураи спроектировали, разработали и запустили в использование web-сервис “МИАЦ.СЛТ” для управления справочником лабораторных тестов (like LOINC). Сервис спроектирован на основе стандарта HL7 FHIR и построен на базе технологичных продуктов Aidbox и Fhirbase.</p><br><div ng-class=\"{opened:miazslt}\" class=\"project-details\"><strong>О проекте Kainos</strong><p>Самураи провели обучение команды Kainos по архитектуре Fhirbase и работе с ним. Осуществляют поддержку/доработку Fhirbase в рамках проекта Kainos.</p><br><strong>Продукты и технологии</strong><br><span class=\"label label-info\">PostgreSQL 9.4+ </span>&nbsp<span class=\"label label-info\">plv8 </span>&nbsp<span class=\"label label-info\">HL7 FHIR </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"miazslt=!miazslt\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"miazmo\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><span class=\"date\">2015</span><h2>МИАЦ.МО &nbsp<small>Project Bootstrap & Custom development</small></h2><p>Самураи спроектировали, разработали и запустили в использование web-сервис “МИАЦ.МО” для управления реестром медицинских организаций Санкт-Петербурга. Сервис спроектирован на основе стандарта HL7 FHIR и построен на базе технологичных продуктов Aidbox и Fhirbase.</p><br><div ng-class=\"{opened:miazmo}\" class=\"project-details\"><strong>О проекте МИАЦ.МО</strong><p>Web-сервис МИАЦ.МО используется для актуализации реестра медицинских организаций, через заявки на изменения от представителей медицинских учреждений и их последующим утверждением представителями СПб МИАЦ.</p><p>Актуальный реестр распространяется через FHIR API и используется для идентификации медицинских учреждений Санкт-Петербурга при электронном обмене медицинскими данными между информационными системами организаций..</p><br><strong>Продукты и технологии</strong><br><span class=\"label label-info\">Fhirbase </span>&nbsp<span class=\"label label-info\">Aidbox </span>&nbsp<span class=\"label label-info\">AngularJS </span>&nbsp<span class=\"label label-info\">Clojure (JVM) </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"miazmo=!miazmo\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"holiadvice\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><span class=\"date\">2015</span><h2>Holiadvice &nbsp<small>Custom development</small></h2><p>Самураи спроектировали и разработали телемедицинский портал для \"нетрадиционной\" медицины. На данный момент используется в Израиле и планируется выход на международный рынок.</p><br><a href=\"#/works#kainos\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"salemed\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><span class=\"date\">2014 - 2015</span><h2>SaleMed &nbsp<small>Custom development</small></h2><p>Самураи придумали, разработали и провели пилотный запуск электронной торговой площадки для МРТ-центров и страховых компаний в Санкт-Петербурге.</p><br><a href=\"#/works#kainos\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"medclient\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><span class=\"date\">2007 - 2014</span><h2>MedClient EHR &nbsp<small>Custom development</small></h2><p>Самураи разработали, сертифицировали по программе ONC (Stage 1) и внедрили, в трех клиниках США, медицинскую информационную систему для госпиталей (EHR).</p><br><a href=\"#/works#kainos\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("works.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var v1="<div class=\"container-fluid\"><div class=\"contacts text-center\"><h3>Связаться с нами</h3><p>Некоторый текст приветсвенный и рассказывающий о наших офисах и о том что мы готовы подъехать для общения face-to-face.</p><br><span class=\"email\">hello@health-samurai.io</span><br><span class=\"phone_us\">USA: +1-818-731-1279</span><br><span class=\"phone_ru\">Russia: +7-921-919-00-25</span><br><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div><div class=\"container products\"><div class=\"col-md-4\"><a class=\"item-product\"><span class=\"image-product\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255984.99733243225!2d30.044883592145347!3d59.91749254175824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2sSt+Petersburg!5e0!3m2!1sen!2sru!4v1446553321535\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen class=\"img-responsive\"></iframe></span><span class=\"productname\"><h3>Санкт-Петербург &nbsp<small>Россия</small></h3><p>Россия, Санкт-Петербург, ул. Большая морская 19</p></span></a></div><div class=\"col-md-4\"><a class=\"item-product\"><span class=\"image-product\"></span><span class=\"productname\"><h3>Лос-Анджелес &nbsp<small>США, Калифорния</small></h3><p>USA 832 Hermosa Ave Hermosa Beach, CA 90254</p></span></a></div><div class=\"col-md-4\"><a class=\"item-product\"><span class=\"image-product\"></span><span class=\"productname\"><h3>Киев &nbsp<small>Укарина</small></h3><p>Украина, Киев, ул. Тестовая 14</p></span></a></div></div><br><br><br></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("contacts.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var v1="<div class=\"signup-page\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-4 col-md-offset-4\"><h2>Проверка ключа</h2></div></div></div></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("confirm.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var v1="<div class=\"signup-page\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6 col-sm-offset-3\"><h1> Регистрация завершена</h1><p>После проверки и подтверждения вашей учетной записи администрацией портала, вы сможете управлять вашими организациями.</p><p>Перейти на <a href=\"/#/\">главную страницу.</a></p></div></div></div></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("complete.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);