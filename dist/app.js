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
	  rp.when('/services', {
	    name: 'index',
	    templateUrl: 'services.jade',
	    controller: 'IndexCtrl'
	  });
	  rp.when('/contacts', {
	    name: 'index',
	    templateUrl: 'contacts.jade',
	    controller: 'IndexCtrl'
	  });
	  rp.when('/education', {
	    name: 'index',
	    templateUrl: 'education.jade',
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

	__webpack_require__(14);

	__webpack_require__(15);


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

	var v1="<div class=\"container-fluid title\"><div class=\"container text-center\"><span class=\"moto\">Мы <span class=\"title_piece\">знаем как </span>создавать медицинские информационные системы будущего</span><span class=\"desc\">Эксперты в Health IT. Разрабатываем для клиентов на основе наших технологичных продуктов и стандарта HL7 FHIR.</span></div></div><div class=\"container products\"><h3>Продукты &nbsp<small> <a href=\"#/products\" class=\"lbl\">Все продукты (5)</a></small></h3><br><div class=\"col-md-4\"><a href=\"#/products#fhirbase\" class=\"item-product\"><span class=\"image-product\"><i class=\"hs-icon logo icon-fhirbase\"></i></span><span class=\"productname\"><h3>Fhirbase &nbsp<small class=\"label\">Open Source</small></h3><p>Реляционное хранилище для медицинских данных на основе HL7 FHIR</p></span></a></div><div class=\"col-md-4\"><a href=\"#/products#aidbox\" class=\"item-product\"><span class=\"image-product\"><i class=\"hs-icon logo icon-aidbox\"></i></span><span class=\"productname\"><h3>Aidbox &nbsp<small class=\"label\">Platform as a Service</small></h3><p>Облачная платформа для разработки медицинских приложений на основе HL7 FHIR</p></span></a></div><div class=\"col-md-4\"><a href=\"#/products#hl7mapper\" class=\"item-product\"><span class=\"image-product\"><i class=\"hs-icon logo icon-mapper\"></i></span><span class=\"productname\"><h3>HL7 Mapper &nbsp<small class=\"label\">Library</small></h3><p>Интеграционный модуль для преобразования сообщений HL7 v2.x в HL7 FHIR и обратно</p></span></a></div></div><div class=\"container projects\"><h3>Проекты &nbsp<small><a href=\"#/works\" class=\"lbl\">Все проекты (9)</a></small></h3><br><div class=\"cont-projects\"><a href=\"#/works#medclient\" class=\"item-project\"><h3>MedClient EHR<small class=\"label\"></small></h3><span>Разработка, сертификация и внедрение в 3-х американских клиниках облачной EHR</span></a><a href=\"#/works#kainos\" class=\"item-project\"><h3>Kainos<small class=\"label\"></small></h3><span>Доработка Fhirbase под нужды проекта Kainos</span></a><a href=\"#/works#netrika\" class=\"item-project\"><h3>Netrika<small class=\"label\"></small></h3><span>Консультирование и обучение по HL7 FHIR и внедрение Fhirbase в рамках региональной шины</span><i class=\"fa fa-chevrone-right\"></i></a></div></div><div class=\"container products\"><h3>Обучение &nbsp<small> <a href=\"#/education\" class=\"lbl\">Все обучения (9)</a></small></h3><br><div class=\"col-md-4\"><a href=\"#/education\" class=\"item-product\"><span class=\"image-product\"><span>B</span></span><span class=\"productname\"><h3>Основы HL7 FHIR<small class=\"label\"></small></h3><p>Восьмичасовой семинар по основным особенностям стандарта HL7 FHIR и экосистеме вокруг стандарта.</p></span></a></div><div class=\"col-md-4\"> <a href=\"#/education\" class=\"item-product\"><span class=\"image-product\"><span>E</span></span><span class=\"productname\"><h3>Анатомия Fhirbase<small class=\"label\"></small></h3><p>Тренинг по архитектуре и использованию Fhirbase в разработке решений для здравоохранения.</p></span></a></div><div class=\"col-md-4\"> <a href=\"#/education\" class=\"item-product\"><span class=\"image-product\"><span>M</span></span><span class=\"productname\"><h3>Тренинг по DevOps<small class=\"label\"></small></h3><p>Двухдневный тренинг по подходам и инструментам построения Continuouse Delivery Pipline</p></span></a></div></div><div class=\"container offers\"><h3>Виды сотрудничества &nbsp</h3><br><ul class=\"list-unstyled\"><li class=\"item-offer\"><a href=\"#/services#bootstrap\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-rocket logo\"></i></div><div class=\"col-md-10\"><h4>\"Быстрый старт проекта\" и обучение вашей команды</h4><p>Развернем наши технологичные продукты и обучим вашу команду для дальнейшей работы.</p></div><div class=\"col-md-1\"></div></div></a></li><li class=\"item-offer\"><a href=\"#/services#bootstrap\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-rocket logo\"></i></div><div class=\"col-md-10\"><h4>\"Быстрый старт проекта\" и разработка под заказ</h4><p>Реализуем ваш проект на базе наших технологичных продуктов.</p></div><div class=\"col-md-1\"></div></div></a></li><li class=\"item-offer\"><a href=\"#/services#fhirsupport\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-life-ring logo\"></i></div><div class=\"col-md-10\"><h4>Коммерческая поддержка для продукта Fhirbase</h4><p>Доработаем Fhirbase под ваши нужды, выделим специалиста для помощи и подпишем вас на обновления.</p></div><div class=\"col-md-1\"></div></div></a></li><li class=\"item-offer\"><a href=\"#/services#fhirsupport\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-graduation-cap logo\"></i></div><div class=\"col-md-10\"><h4>Обучение стандартам и нашим продуктам</h4><p>Прочитаем семинары/тренинги по FHIR и нашим продуктам, обучим вашу команду.</p></div><div class=\"col-md-1\"></div></div></a></li><li class=\"item-offer\"><a href=\"#/services#consultingaudit\"><div class=\"row\"><div class=\"col-md-1 text-center\"><i class=\"fa fa-binoculars logo\"></i></div><div class=\"col-md-10\"><h4>Консультации и аудиты</h4><p>Проведем аудит вашего решения, поможем адаптироваться к FHIR, поучаствуем в разработке архитектуры вашего решения.</p></div><div class=\"col-md-1\"></div></div></a></li></ul></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div><div class=\"container news\"><h3>Новости и статьи &nbsp</h3><br><div class=\"row\"></div><div class=\"row\"><div class=\"col-md-6\"><ul class=\"list-unstyled\"><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li></ul></div><div class=\"col-md-6\"><ul class=\"list-unstyled\"><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li><li class=\"item-article\"><p class=\"article-title\"> <strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li><li class=\"item-article\"><p class=\"article-title\"><strong>Название статьи</strong></p><p>Имя автора, 05.12.2015</p></li></ul></div></div></div>";
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

	var v1="<div class=\"container-fluid sub-title text-center\"><span class=\"sub-moto\">Наши продукты</span><span class=\"sub-desc\">Мы разрабатываем технологичные продукты на основе HL7 FHIR.</span></div><div class=\"container\"><div id=\"fhirbase\" class=\"row list-item\"><div class=\"col-md-3\"><i class=\"hs-icon logo icon-fhirbase\"></i><br><br><span class=\"label custom-label\">PostgreSQL</span><br><span class=\"label custom-label\">plv8</span><br><span class=\"label custom-label\">HL7 FHIR</span></div><div class=\"col-md-8\"><h3>Fhirbase &nbsp<small>Open Source</small></h3><span class=\"product-slogan\">Реляционное хранилище медицинских данных на основе стандарта HL7 FHIR.</span><br><br><p>Fhirbase - это реляционное хранилище с встроенной моделью данных, соответствующей международному стандарту HL7 FHIR. Fhirbase подходит для построения медицинских информационных системы разных классов: электронные карты (EHR), интеграционные ”шины”, репозитории медицинских данных (реестры), госпитальные системы (HIS), порталы для пациентов и телемедицины.</p><br><strong>Особенности Fhirbase</strong><ul><li>Fhirbase построен на PostgreSQL с использованием языка plv8</li><li>Fhirbase реализует модель данных соответсвующую HL7 FHIR</li><li>Fhirbase имеет простой API для обращения к данным (like REST)</li></ul><br><a href=\"http://fhirbase.github.io\" target=\"_blank\" class=\"btn btn-default gotosite\">Сайт продукта</a><a href=\"https://github.com/fhirbase\" target=\"_blank\"><i class=\"fa fa-github add_links\"></i></a><a href=\"https://groups.google.com/forum/#!forum/fhirbase\" target=\"_blank\"><i class=\"fa fa-comments-o add_links\"></i></a></div></div><hr><div id=\"aidbox\" class=\"row list-item\"><div class=\"col-md-3\"><i class=\"hs-icon logo icon-aidbox\"></i><br><br><span class=\"label custom-label\">Amazon AWS</span><br><span class=\"label custom-label\">Fhirbase</span><br><span class=\"label custom-label\">Clojure</span><br><span class=\"label custom-label\">AngularJS</span></div><div class=\"col-md-8\"><h3>Aidbox</h3><span class=\"product-slogan\">Облачная платформа для создания медицинских систем на основе HL7 FHIR</span><br><br><p>Aidbox - это платформа \"как сервис\" (PaaS) для разработки медицинских решений на основе HL7 FHIR. Aidbox подходит для построения мобильных и web-решений оперирующих медицинскими данными: электронные карты (EHR), интеграционные ”шины”, репозитории медицинских данных (реестры), госпитальные системы (HIS), порталы для пациентов и телемедицины.</p><br><strong>Особенности Aidbox</strong><ul><li>Aidbox использует Fhirbase для хранения данных</li><li>Aidbox реализует REST API на основе стандарта HL7 FHIR</li><li>Aidbox решает вопросы Security с использование OAuth</li><li>Aidbox предоставляет хостинг для базы и несложных single page applications</li><li>Aidbox имеет SDK и вы можете интегрироваться с решениями на ваших технологиях (Java, .Net etc...)</li></ul><br><a href=\"https://aidbox.io/landing.html#/\" target=\"_blank\" class=\"btn btn-default gotosite\">Сайт продукта</a></div></div><hr><div id=\"formstamp\" class=\"row list-item\"><div class=\"col-md-3\"><i class=\"hs-icon logo icon-formstamp\"></i><br><br><span class=\"label custom-label\">AngularJS</span></div><div class=\"col-md-8\"><h3>FormStamp &nbsp<small>Open Source</small></h3><span class=\"product-slogan\">Библиотека виджетов на \"чистом\" AngularJS</span><br><br><p>FormStamp - это библиотека виджетов на AngularJS для разработки web-приложений с \"богатым\" клиентом.</p><br><strong>Особенности FormStamp</strong><ul><li>FormStamp написан на \"чистом\" AngularJS</li><li>FormStamp имеет встроеный FormBuilder</li><li>FormStamp стилизован на Twitter Bootstrap</li><li>FormStamp имеет минималистичный codebase</li></ul><br><a href=\"http://formstamp.github.io/#/\" target=\"_blank\" class=\"btn btn-default gotosite\">Сайт продукта</a></div></div></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("products.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var v1="<div class=\"container-fluid sub-title text-center\"><span class=\"sub-moto\">Наши проекты</span><span class=\"sub-desc\">Вместе с нашими клиентам мы создаем медицинские системы нового поколения, которые используются в разных частях мира.</span></div><div class=\"container\"><div id=\"kainos\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><h2>Kainos &nbsp<small>Support for Fhirbase</small></h2><p>Самураи расширили функциональные возможности Fhirbase под специфику проекта Kainos Evolve. Провели обучение команды Kainos по архитектурным особенностям Fhirbase и разработке на его основе.</p><br><div ng-class=\"{opened:kainos}\" class=\"project-details\"><strong>О проекте Kainos</strong><p>Kainos разрабатывает платформу <a href=\"https://www.kainosevolve.com/solutions/\" target=\"_blank\">Kainos Evolve Platform </a>&nbspдля создания мобильных и web- приложений для здравоохранения в Великобритании. В основе платформы используется Fhirbase.</p><br><strong>Продукты и технологии</strong><br><span class=\"label custom-label\">PostgreSQL 9.4+ </span>&nbsp<span class=\"label custom-label\">plv8 </span>&nbsp<span class=\"label custom-label\">HL7 FHIR </span>&nbsp<span class=\"label custom-label\">Fhirbase </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"kainos=!kainos\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"netrika\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><h2>Нетрика.ДЛИ &nbsp<small>Consulting & Audit</small></h2><p>Самураи провели обучение команды Netrika по межународным стандартам: HL7 v2, HL7 v3, HL7 FHIR. Помогли в проектировании архитектуры регионального сервиса для обмена лабораторными данными и модели данных на основе HL7 FHIR.</p><br><div ng-class=\"{opened:netrika}\" class=\"project-details\"><strong>О проекте Нетрика.ДЛИ</strong><p>Нетрика разаботала и внедрила сервис <a href=\"http://api.netrika.ru/docs.php?article=DLIService\" target=\"_blank\">Нетрика.ДЛИ</a>&nbspдля обмена данными лабораторных исследований в Санкт-Петербурге. Сервис позволяет медицинским учреждениям и лабораториям обмениваться назначениями и результатами лабораторных исследований в электронном виде. Обмен данными производится на основне стандарта HL7 FHIR. В основе сервиса используется Fhirbase.</p><br><strong>Продукты и технологии</strong><br><span class=\"label custom-label\">Fhirbase </span>&nbsp<span class=\"label custom-label\">HL7 FHIR </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"netrika=!netrika\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"vitalsync\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><h2>VitalSync &nbsp<small>Consulting & Custom development</small></h2><p>Самураи консультируют команду Medtronic по применению стандарта HL7 FHIR и занимаются разработкой интеграционного модуля для преобразования входящего потока данных в формате HL7 v2.x в HL7 FHIR.</p><br><div ng-class=\"{opened:vitalsync}\" class=\"project-details\"><strong>О проекте VitalSync</strong><p>Компания Medtronic разрабатывает информационную систему для мониторинга и сопровождения больных раком легких в США на базе существующей системы VitalSync. Для интеграции VitalSync с другими госпитальными системами используется HL7 Mapper.</p><br><strong>Продукты и технологии</strong><br><span class=\"label custom-label\">HL7 FHIR </span>&nbsp<span class=\"label custom-label\">HL Mapper </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"vitalsync=!vitalsync\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"miazslt\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><h2>МИАЦ.СЛТ &nbsp<small>Project Bootstrap & Custom development</small></h2><p>Самураи разработали, запустили и осуществляют поддержку web-сервиса для управления справочником лабораторных тестов Санкт-Петербурга. Сервис разработан на базе платформы Aidbox.</p><br><div ng-class=\"{opened:miazslt}\" class=\"project-details\"><strong>О проекте МИАЦ.СЛТ</strong><p>Web-сервис <a href=\"https://loinc.aidbox.io/#/\" target=\"_blank\">МИАЦ.СЛТ</a>&nbspиспользуется для актуализации справочника лабораторных тестов, через заявки на изменения от представителей лабораторий и их последующим утверждением представителями СПб МИАЦ.</p><p>Актуальный справочник распространяется через FHIR API и используется для идентификации лабораторных тестов при электронном обмене медицинскими данными между информационными системами медицинских учреждений Санкт-Петербурга.</p><br><strong>Продукты и технологии</strong><br><span class=\"label custom-label\">Aidbox </span>&nbsp<span class=\"label custom-label\">Fhirbase </span>&nbsp<span class=\"label custom-label\">HL7 FHIR </span>&nbsp<span class=\"label custom-label\">AngularJS </span>&nbsp<span class=\"label custom-label\">Clojure (JVM) </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"miazslt=!miazslt\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"miazmo\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><h2>МИАЦ.МО &nbsp<small>Project Bootstrap & Custom development</small></h2><p>Самураи разработали, запустили и осуществляют поддержку web-сервиса для управления реестром медицинских организаций Санкт-Петербурга. Сервис разработан на базе платформы Aidbox.</p><br><div ng-class=\"{opened:miazmo}\" class=\"project-details\"><strong>О проекте МИАЦ.МО</strong><p>Web-сервис <a href=\"http://mo.nsi.zdrav.spb.ru/#/?q=\" target=\"_blank\">МИАЦ.МО</a>&nbspиспользуется для актуализации реестра медицинских организаций, через заявки на изменения от представителей медицинских учреждений и их последующим утверждением представителями СПб МИАЦ.</p><p>Актуальный реестр распространяется через FHIR API и используется для идентификации медицинских учреждений Санкт-Петербурга при электронном обмене медицинскими данными между информационными системами медицинских учреждений.</p><br><strong>Продукты и технологии</strong><br><span class=\"label custom-label\">Aidbox </span>&nbsp<span class=\"label custom-label\">Fhirbase</span>&nbsp<span class=\"label custom-label\">HL7 FHIR </span>&nbsp<span class=\"label custom-label\">AngularJS </span>&nbsp<span class=\"label custom-label\">Clojure (JVM) </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"miazmo=!miazmo\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"holiadvice\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><h2>Holiadvice &nbsp<small>Custom development</small></h2><p>Самураи разработали телемедицинский портал для \"нетрадиционной\" медицины. Владельцы сервиса произвели пилотное внедрение в Израиле и планирует выход на международный рынок.</p><br><div ng-class=\"{opened:holiadvice}\" class=\"project-details\"><strong>О проекте Holiadvice</strong><p>Телемедицинский портал <a href=\"https://www.holiadvice.com/\" target=\"_blank\">Holiadvice</a>&nbsp предназначен для проведения он-лайн консультации со специалистами \"нетрадиционной\" медицины. На данный момент проект принят в программу &nbsp<a href=\"https://www.startuphealth.com/c/27733/Holiadvice\">StartUp Health.</a></p><br><strong>Продукты и технологии</strong><br><span class=\"label custom-label\">Ruby on Rails </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"holiadvice=!holiadvice\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"salemed\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><h2>SaleMed &nbsp<small>Custom development</small></h2><p>Самураи разработали и провели пилотный запуск электронной торговой площадки для МРТ-центров и страховых компаний в Санкт-Петербурге.</p><br><div ng-class=\"{opened:salemed}\" class=\"project-details\"><strong>О проекте Salemed</strong><p>Электронная торговая площадка <a href=\"https://salemed.info/\" target=\"_blank\">Salemed</a>&nbsp предназначена для реализации услуг со скидками между МРТ-центрами и страховыми компаниями.</p><br><strong>Продукты и технологии</strong><br><span class=\"label custom-label\">Clojure (JVM) </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"salemed=!salemed\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div><hr><div id=\"medclient\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><h2>MedClient EHR &nbsp<small>Custom development</small></h2><p>Самураи разработали, сертифицировали и внедрили в трех клиниках США, медицинскую информационную систему для госпиталей (EHR).</p><br><div ng-class=\"{opened:medclient}\" class=\"project-details\"><strong>О проекте MedClient</strong><p>Облачная медицинская информационная система <a href=\"http://choice-hs.com/\" target=\"_blank\">MedClient EHR</a>&nbsp предназначена для информационного сопроваждения клинических и административных процессов скорой помощи и стационаров в США. Реализует врачебный и медсестринский документооборот, систему помощи в принятии клинических решений, аналитические инструменты для врачей и т.д.</p><p>Система сертифицирована по программе <a href=\"https://www.healthit.gov/providers-professionals/meaningful-use-definition-objectives\" target=\"_blank\">ONC Stage 1 и подготовлена к Stage 2.</a></p><br><strong>Продукты и технологии</strong><br><span class=\"label custom-label\">Ruby on Rails </span>&nbsp<span class=\"label custom-label\">PostgreSQL </span>&nbsp<span class=\"label custom-label\">Amazon AWS </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"medclient=!medclient\" class=\"btn btn-default gotosite\">Подробнее</a></div><div class=\"col-md-3\"><div class=\"images\"><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div><div class=\"row\"><a href=\"#/\" class=\"image-1\"><img src=\"\" class=\"img-responsive\"></a><a href=\"#/\" class=\"image-2\"><img src=\"\" class=\"img-responsive\"></a></div></div></div></div></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("works.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var v1="<div class=\"container-fluid sub-title text-center\"><span class=\"sub-moto\">Виды сотрудничества</span></div><div class=\"container\"><div id=\"bootstrap\" class=\"row list-item services\"><small>Bootstrap</small><h2>Быстрый старт&nbsp</h2><p>У вас есть новый проект, вы не хотите тянуть с выпуском в свет первой версии, но в тоже время заложить «правильный фундамент» для дальнейшего развития продукта, используя стандарты и международные наработки и опыт.</p><br><h4>Мы готовы помочь:</h4><br><div class=\"row\"><div class=\"col-md-1 service-step\"><p>1</p></div><div class=\"col-md-7 service-descrption\"><p>Вникнем в идею будущего решения, совместно сформируем Product Vision и очертим границы продукта. Проведем аналитическую работу и построим стартовую модель данных продукта на базе HL7 FHIR.</p><br></div><div class=\"col-md-8 service-image\"></div></div><div class=\"row\"><div class=\"col-md-1 service-step\"><p>2</p></div><div class=\"col-md-7 service-descrption\"><p>Развернем и настроим наши технологичные продукты, которые закроют вопросы хранения информации, интеграции с другими системами через FHIR REST API и создадут хороший фундамент для разработки будущего решения.</p><br></div><div class=\"col-md-8 service-image\"></div></div><div class=\"row\"><div class=\"col-md-1 service-step\"><p>3</p></div><div class=\"col-md-7 service-descrption\"><p>Обучим вашу команду FHIR стандарту, работе с нашими технологичными продуктами и поучаствуем в формировании архитектуры будущего продукта с учетом специфики.</p><br></div><div class=\"col-md-8 service-image\"></div></div><h4>либо ...</h4><div class=\"row\"><div class=\"col-md-1 service-step\"><p>3</p></div><div class=\"col-md-7 service-descrption\"><p>Возьмем на себя разработку вашего решения «под ключ», выделив под проект кроссфункциональную команду профессионалов и выстроив процесс разработки 2-х недельными итрациями, в лучших традициях гибких и бережливых подходов к разработке ПО.</p><br></div><div class=\"col-md-8 service-image\"></div></div><hr id=\"fhirsupport\"><br><small>Fhirbase Customization</small><h2>Доработка Fhirbase под проект &nbsp</h2><p>Вы используете в своем проекте хранилище с открытым кодом Fhirbase и у вас появилась потребность доработать этот продукт по специфику проекта. Вы понимаете, что лучше переложить эту работу на плечи идеологов и создателей Fhirbase.</p><br><h4>Мы готовы помочь:</h4><br><div class=\"row\"><div class=\"col-md-1 service-step\"><p>1</p></div><div class=\"col-md-7 service-descrption\"><p>Вникнем в ваш проект, обсудим недостающую в Fhirbase функциональность.</p><br></div><div class=\"col-md-8 service-image\"></div></div><div class=\"row\"><div class=\"col-md-1 service-step\"><p>2</p></div><div class=\"col-md-7 service-descrption\"><p>Оценим трудоемкость, согласуем и заключим с вами договор на доработку Fhirbase под специфику вашего проекта.</p><br></div><div class=\"col-md-8 service-image\"></div></div><div class=\"row\"><div class=\"col-md-1 service-step\"><p>3</p></div><div class=\"col-md-7 service-descrption\"><p>Доработаем Fhirbase и предоставим вам новую версию, дополненную недостающей функциональностью.</p><br></div><div class=\"col-md-8 service-image\"></div></div><hr id=\"fhirsupport\"><br><small>Fhirbase Support</small><h2>Коммерческая поддержка Fhirbase &nbsp</h2><p>Вы используете в своем проекте хранилище с открытым кодом Fhirbase, у вас регулярно возникают вопросы и вы хотите получать квалицицированную помощь без задержки.</p><br><h4>Мы готовы помочь:</h4><br><div class=\"row\"><div class=\"col-md-1 service-step\"><i class=\"fa fa-star-o\"></i></div><div class=\"col-md-7 service-descrption\"><p>Закрепим за вашим проектом специалиста, доступного для интерактивного решения возникающих вопросов.</p><br></div><div class=\"col-md-8 service-image\"></div></div><div class=\"row\"><div class=\"col-md-1 service-step\"><i class=\"fa fa-star-o\"></i></div><div class=\"col-md-7 service-descrption\"><p>Предоставим подписку на специальные обновления для Fhirbase, которые не входят в Open Source версию.</p><br></div><div class=\"col-md-8 service-image\"></div></div><hr id=\"consultingaudit\"><br><small>Consulting & Audit</small><h2>Консалтинг и аудит &nbsp</h2><p>Вы очень хотите \"правильно\", но не знаете как. У вас есть сложная задача, но у вас не получается ее решить, вы в поиске экспертов в области, которые проконсультируют и скажут как сделать правильно.</p><br><h4>Мы готовы помочь:</h4><br><div class=\"row\"><div class=\"col-md-1 service-step\"><i class=\"fa fa-star-o\"></i></div><div class=\"col-md-7 service-descrption\"><p>Поможем сформулировать концепцию решения, выявить требования к вашему продукту и построить модель данных для будущего решения на основе стандарта HL7 FHIR.</p><br></div><div class=\"col-md-8 service-image\"></div></div><div class=\"row\"><div class=\"col-md-1 service-step\"><i class=\"fa fa-star-o\"></i></div><div class=\"col-md-7 service-descrption\"><p>Поучаствуем в архитектурных сессиях с вашей командой и поможем выработать правильное решение: выбрать стандарт, спроектировать архитектуру. Подскажем какие международные наработки использовать.</p><br></div><div class=\"col-md-8 service-image\"></div></div><div class=\"row\"><div class=\"col-md-1 service-step\"><i class=\"fa fa-star-o\"></i></div><div class=\"col-md-7 service-descrption\"><p>Сделаем процессный и технический аудит вашего проекта и в результате дадим рекомендации по улучшениям.</p><br></div><div class=\"col-md-8 service-image\"></div></div><hr id=\"education\"><br><small>Education</small><h2>Обучение стандартам и продуктам &nbsp</h2><p>Вы присматриваетесь к стандарту HL7 FHIR и/или планируете использовать один из наших технологичных продуктов, но хотите чтобы переход на этот стандарт и технологии в вашей команде прошел наиболее гладко.</p><br><h4>Мы готовы помочь:</h4><br><div class=\"row\"><div class=\"col-md-1 service-step\"><i class=\"fa fa-star-o\"></i></div><div class=\"col-md-7 service-descrption\"><strong>Основы HL7 FHIR &nbsp</strong><span class=\"label custom-label\">семинар </span><p>Обучим вашу команду основам стандарта HL7 FHIR, расскажем о созданной вокруг стандарта экосистеме, разберем ваши кейсы.</p><br></div><div class=\"col-md-8 service-image\"></div></div><div class=\"row\"><div class=\"col-md-1 service-step\"><i class=\"fa fa-star-o\"></i></div><div class=\"col-md-7 service-descrption\"><strong>Анатомия Fhirbase &nbsp</strong><span class=\"label custom-label\">тренинг </span><p>Расскажем вашей команде об архитектуре и поможем освоить на упражнениях использование Fhirbase в разработке медицинскх решений.</p><br></div><div class=\"col-md-8 service-image\"></div></div><div class=\"row\"><div class=\"col-md-1 service-step\"><i class=\"fa fa-star-o\"></i></div><div class=\"col-md-7 service-descrption\"><strong>Культура DevOps &nbsp</strong><span class=\"label custom-label\">тренинг </span><p>Расскажем и покажем вашей команде как создать инфраструктуру (ценности, практики, инструменты), позволяющую построить Continuous Delivery Pipeline.</p><br></div><div class=\"col-md-8 service-image\"></div></div></div></div><div class=\"calltoaction text-center\"><h4>Готовы к сотрудничеству?</h4><p>Если у вас остались какие либо вопросы, хотите увидеть демо наших решений или обсудить с нами ваш проект - оставьте запрос и мы свяжемся с вами.</p><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("services.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var v1="<div class=\"container-fluid sub-title text-center\"><span class=\"sub-moto\">Обучение от Health Samurai</span></div><div class=\"container\"><div id=\"kainos\" class=\"row list-item\"><div class=\"col-md-8 project-descrption\"><h2>Введение в FHIR &nbsp<small>Support for Fhirbase</small></h2><p>Самураи провели обучение команды Kainos по архитектуре Fhirbase и работе с ним. Осуществляют поддержку/доработку Fhirbase в рамках проекта Kainos.</p><br><div ng-class=\"{opened:kainos}\" class=\"project-details\"><strong>О проекте Kainos</strong><p>Самураи провели обучение команды Kainos по архитектуре Fhirbase и работе с ним. Осуществляют поддержку/доработку Fhirbase в рамках проекта Kainos.</p><br><strong>Продукты и технологии</strong><br><span class=\"label custom-label\">PostgreSQL 9.4+ </span>&nbsp<span class=\"label custom-label\">plv8 </span>&nbsp<span class=\"label custom-label\">HL7 FHIR </span>&nbsp<br><br><br></div><a href=\"javascript:void(0)\" ng-click=\"kainos=!kainos\" class=\"btn btn-default gotosite\">Подробнее</a></div></div><hr></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("education.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var v1="<div class=\"container-fluid sub-title text-center\"><span class=\"sub-moto\">Наши контакты</span><span class=\"sub-desc\">У нас есть представительства в двух странах и мы всегда готовы встретитсья и обсудить ваш проект.</span><br><span class=\"email\">hello@health-samurai.io</span><br><span class=\"phone_us\">USA: +1-818-731-1279</span><br><span class=\"phone_ru\">Russia: +7-921-919-00-25</span><br><br><a class=\"btn btn-default btn-lg\">Сотрудничать</a></div><div class=\"container products\"><div class=\"col-md-6\"><a class=\"item-product\"><h3>Санкт-Петербург &nbsp<small>Россия</small></h3><span class=\"image-product\"></span><span class=\"productname\"><p>Россия, Санкт-Петербург, ул. Большая морская 19</p></span></a></div><div class=\"col-md-6\"><a class=\"item-product\"><h3>Лос-Анджелес &nbsp<small>США, Калифорния</small></h3><span class=\"image-product\"></span><span class=\"productname\"><p>USA 832 Hermosa Ave Hermosa Beach, CA 90254</p></span></a></div></div><br><br><br>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("contacts.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 13 */
/***/ function(module, exports) {

	var v1="<div class=\"signup-page\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-4 col-md-offset-4\"><h2>Проверка ключа</h2></div></div></div></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("confirm.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 14 */
/***/ function(module, exports) {

	var v1="<div class=\"signup-page\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6 col-sm-offset-3\"><h1> Регистрация завершена</h1><p>После проверки и подтверждения вашей учетной записи администрацией портала, вы сможете управлять вашими организациями.</p><p>Перейти на <a href=\"/#/\">главную страницу.</a></p></div></div></div></div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("complete.jade", v1)}]);
	module.exports=v1;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);