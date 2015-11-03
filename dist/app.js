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

	var v1="<div class=\"container title\"><span class=\"moto\">Мы <span class=\"title_piece\">знаем как </span>создавать медицинские информационные системы будущего</span><span class=\"desc\">Эксперты в Health IT. Разрабатываем для клиентов на основе наших технологичных продуктов и стандарта HL7 FHIR.</span></div><div class=\"container products\"><h3>Продукты &nbsp<small> <a href=\"#/products\" class=\"lbl\">Все продукты (5)</a></small></h3><br><div class=\"cont-products\"><div class=\"item-product\"><div class=\"image-product\"><i class=\"fa fa-fire logo\"></i></div><div class=\"productname\"><h3>Fhirbase &nbsp<small>Open Source</small></h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p><a href=\"#/\">Подробнее...</a></div></div><div class=\"item-product\"><div class=\"image-product\"><i class=\"fa fa-gift logo\"></i></div><div class=\"productname\"><h3>Aidbox</h3><p>Облачная платформа для разработки медицинских приложений на основе HL7 FHIR</p><a href=\"#/\">Подробнее...</a></div></div><div class=\"item-product\"><div class=\"image-product\"><i class=\"fa fa-arrow-circle-o-right logo\"></i></div><div class=\"productname\"><h3>HL7 Mapper</h3><p>Интеграционный модуль для преобразования сообщений HL7 v2.x в HL7 FHIR и обратно</p><a href=\"#/\">Подробнее...</a></div></div></div></div><div class=\"container projects\"><h3>Проекты &nbsp<small> <a href=\"#/works\" class=\"lbl\">Все проекты (9)</a></small></h3><br><div class=\"cont-projects\"><div class=\"item-project\"><span>2007-2014</span><h3>MedClient EHR</h3><span>Разработка, внедрение в 4-х американских клиниках и сертификация облачной EHR</span></div><div class=\"item-project\"><span>2015 год</span><h3>Kainos</h3><span>Доработка Fhirbase под нужды проекта Kainos</span></div><div class=\"item-project\"><span>2015</span><h3>Netrika</h3><span>Консультирование и обучение по HL7 FHIR и внедрение Fhirbase в рамках региональной шины</span><i class=\"fa fa-chevrone-right\"></i></div></div></div><div class=\"container education\"><h3>Обучение &nbsp<small> <a href=\"#/\" class=\"lbl\">Все обучения (9)</a></small></h3><br><div class=\"cont-products\"><div class=\"item-product\"><div class=\"image-product\"><span>B</span></div><div class=\"productname\"><h3>Основы HL7 FHIR</h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p><a href=\"#/\">Подробнее...</a></div></div><div class=\"item-product\"><div class=\"image-product\"><span>E</span></div><div class=\"productname\"><h3>Анатомия Fhirbase</h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p><a href=\"#/\">Подробнее...</a></div></div><div class=\"item-product\"><div class=\"image-product\"><span>M</span></div><div class=\"productname\"><h3>HL7 v2.x</h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p><a href=\"#/\">Подробнее...</a></div></div></div></div><div class=\"container offers\"><h3>Виды сотрудничества &nbsp</h3><br><ul class=\"list-unstyled\"><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-rocket logo\"></i></div><div class=\"col-md-9\"><h4>\"Быстрый старт\" и обучение вашей команды</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-rocket logo\"></i></div><div class=\"col-md-9\"><h4>\"Быстрый старт\" и заказная разработка нашей командой</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-life-ring logo\"></i></div><div class=\"col-md-9\"><h4>Коммерческая поддержка для продукта Fhirbase</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-graduation-cap logo\"></i></div><div class=\"col-md-9\"><h4>Обучение стандартам и нашим продуктам</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li><li class=\"item-offer\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-binoculars logo\"></i></div><div class=\"col-md-9\"><h4>Консультации и аудиты</h4><p>Быстрый старт вашего проекта на базе наших наработок</p></div><div class=\"col-md-2\"></div></div></li></ul></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div><div class=\"container news\"><h3>Новости и статьи &nbsp</h3><br><div class=\"row\"><div class=\"col-md-6\"><ul class=\"list-unstyled\"><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li></ul></div><div class=\"col-md-6\"><ul class=\"list-unstyled\"><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li><li class=\"item-article\"><p class=\"article-title\"><strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li></ul></div></div></div>";
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

	var v1="<div class=\"container-fluid sub-title text-center\"><span class=\"sub-moto\">Наши продукты</span><span class=\"sub-desc\">Мы разрабатываем технологичные продукты на основе HL7 FHIR, которые становятся \"здоровым сердцем\" медицинских информационных систем нового поколения. Многие из наших продуктов Open Source.</span></div><div class=\"container\"><div class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-fire logo\"></i><br><br><span class=\"label label-info\">PostgreSQL 9.4+</span><br><span class=\"label label-info\">plv8</span><br><span class=\"label label-info\">HL7 FHIR</span></div><div class=\"col-md-8\"><h3>Fhirbase &nbsp<small>Open Source</small></h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR. Реляционное хранилище для медицинских данных на основе HL7 FHIR</p><br><a href=\"http://fhirbase.github.io\" target=\"_blank\" class=\"btn btn-default gotosite\">Сайт продукта</a><a href=\"https://github.com/fhirbase\" target=\"_blank\"><i class=\"fa fa-github add_links\"></i></a><a href=\"https://groups.google.com/forum/#!forum/fhirbase\" target=\"_blank\"><i class=\"fa fa-comments-o add_links\"></i></a></div></div><hr><div class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-gift logo\"></i><br><br><span class=\"label label-info\">Amazon AWS</span><br><span class=\"label label-info\">Fhirbase</span><br><span class=\"label label-info\">Clojure</span><br><span class=\"label label-info\">AnguraJS</span></div><div class=\"col-md-8\"><h3>Aidbox</h3><p>Облачная платформа для разработки медицинских информационных систем на основе HL7 FHIR</p><br><a href=\"http://fhirbase.github.io\" class=\"btn btn-default gotosite\">Сайт продукта</a></div></div><hr><div class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-arrow-circle-o-right logo\"></i><br><br><span class=\"label label-info\">Clojure</span><br><span class=\"label label-info\">HL7 FHIR</span></div><div class=\"col-md-8\"><h3>HL7 Mapper</h3><p>Облачная платформа для разработки медицинских информационных систем на основе HL7 FHIR</p><br><a href=\"http://fhirbase.github.io\" class=\"btn btn-default gotosite\">Сайт продукта</a></div></div><hr><div class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-stack-overflow logo\"></i><br><br><span class=\"label label-info\">AngularJS</span></div><div class=\"col-md-8\"><h3>FormStamp &nbsp<small>Open Source</small></h3><p>Облачная платформа для разработки медицинских информационных систем на основе HL7 FHIR</p><br><a href=\"http://fhirbase.github.io\" class=\"btn btn-default gotosite\">Сайт продукта</a></div></div><hr><div class=\"row list-item\"><div class=\"col-md-3\"><i class=\"fa fa-rocket logo\"></i><br><br><span class=\"label label-info\">Cheff</span></div><div class=\"col-md-8\"><h3>FoodTaster &nbsp<small>Open Source</small></h3><p>Облачная платформа для разработки медицинских информационных систем на основе HL7 FHIR</p><br><a href=\"http://fhirbase.github.io\" class=\"btn btn-default gotosite\">Сайт продукта</a></div></div></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("products.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var v1="<div class=\"container-fluid sub-title text-center\"><span class=\"sub-moto\">Наши проекты</span><span class=\"sub-desc\">Мы разрабатываем медицинские web-решения нового поколения для наших клиентов, на основе наших технологичных продуктов.</span></div><div class=\"container\"><div class=\"row list-item\"><div class=\"col-md-8\"><span class=\"date\">2015 - ...</span><h2>Kainos &nbsp<small>Support for Fhirbase</small></h2><p>Самураи осуществляют поддержку/доработку Fhirbase по запросам от Kainos. Kainos создает медицинскую платформу для Великобретании.</p><br></div><div class=\"col-md-3\"></div></div><hr><div class=\"row list-item\"><div class=\"col-md-8\"><span class=\"date\">2015</span><h2>Нетрика.ДЛИ &nbsp<small>Consulting & Audit</small></h2><p>Самураи проконсультировали Нетрику по межународным стандартам (HL7 v2, HL7 v3, HL7 FHIR) и помогли выбрать наиболее подходящий для их задач. Прочитали тренинг по основам HL7 FHIR. Поучаствовали в проектировании сервиса для обмена лабораторными данными и создании модели данных на основе HL7 FHIR.</p><br></div><div class=\"col-md-3\"></div></div><hr><div class=\"row list-item\"><div class=\"col-md-8\"><span class=\"date\">2015 - ...</span><h2>VitalSync &nbsp<small>Consulting & Custom development</small></h2><p>Самураи консультируют по применению стандарта HL7 FHIR и занимаются разработкой интеграционного модуля для обработки входящего потока данных.</p><br></div><div class=\"col-md-3\"></div></div><hr><div class=\"row list-item\"><div class=\"col-md-8\"><span class=\"date\">2015</span><h2>МИАЦ.СЛТ &nbsp<small>Bootstrap & Custom development</small></h2><p>Самураи спроектировали, разработали и запустили в использование web-сервис “МИАЦ.СЛТ” для управления справочником лабораторных тестов (like LOINC). Сервис спроектирован на основе стандарта HL7 FHIR и построен на базе технологичных продуктов Aidbox и Fhirbase.</p><br></div><div class=\"col-md-3\"></div></div><hr><div class=\"row list-item\"><div class=\"col-md-8\"><span class=\"date\">2015</span><h2>МИАЦ.МО &nbsp<small>Bootstrap & Custom development</small></h2><p>Самураи спроектировали, разработали и запустили в использование web-сервис “МИАЦ.МО” для управления реестром медицинских организаций Санкт-Петербурга. Сервис спроектирован на основе стандарта HL7 FHIR и построен на базе технологичных продуктов Aidbox и Fhirbase.</p><br></div><div class=\"col-md-3\"></div></div><hr><div class=\"row list-item\"><div class=\"col-md-8\"><span class=\"date\">2015</span><h2>Holiadvice &nbsp<small>Custom development</small></h2><p>Самураи спроектировали и разработали телемедицинский портал для \"нетрадиционной\" медицины. На данный момент используется в Израиле и планируется выход на международный рынок.</p><br></div><div class=\"col-md-3\"></div></div><hr><div class=\"row list-item\"><div class=\"col-md-8\"><span class=\"date\">2014 - 2015</span><h2>SaleMed &nbsp<small>Custom development</small></h2><p>Самураи придумали, разработали и провели пилотный запуск электронной торговой площадки для МРТ-центров и страховых компаний.</p><br></div><div class=\"col-md-3\"></div></div><hr><div class=\"row list-item\"><div class=\"col-md-8\"><span class=\"date\">2007 - 2014</span><h2>MedClient EHR &nbsp<small>Custom development</small></h2><p>Самураи разработали, сертифицировали по программе ONC (Stage 1) и внедрили, в трех клиниках США, медицинскую информационную систему для госпиталей (EHR).</p><br></div><div class=\"col-md-3\"></div></div></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("works.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var v1="<div class=\"container-fluid\"><div class=\"contacts text-center\"><h3>Связаться с нами</h3><p>Некоторый текст приветсвенный и рассказывающий о наших офисах и о том что мы готовы подъехать для общения face-to-face.</p><br><span class=\"email\">hello@health-samurai.io</span><br><span class=\"phone_us\">USA: +1-818-731-1279</span><br><span class=\"phone_ru\">Russia: +7-921-919-00-25</span><br><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div><div class=\"container cont-products\"><div class=\"item-product\"><div class=\"image-product\"></div><div class=\"productname\"><h3>Санкт-Петербург &nbsp<small>Россия</small></h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p><a href=\"#/\">Подробнее...</a></div></div><div class=\"item-product\"><div class=\"image-product\"></div><div class=\"productname\"><h3>Лос-Анджелес &nbsp<small>США</small></h3><p>USA 832 Hermosa Ave Hermosa Beach, CA 90254</p></div></div><div class=\"item-product\"><div class=\"image-product\"></div><div class=\"productname\"><h3>Киев &nbsp<small>Укарина</small></h3><p>Интеграционный модуль для преобразования сообщений HL7 v2.x в HL7 FHIR и обратно</p><a href=\"#/\">Подробнее...</a></div></div></div><br><br><br></div>";
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