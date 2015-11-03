require('file?name=/index.html!jade-env-html!./layout.jade')

#require('file?name=/favicon.png!./../img/favicon.png')

require('ng-cache?!jade-env-html!./404.jade')
require('ng-cache?!jade-env-html!./_index.jade')
require('ng-cache?!jade-env-html!./registration.jade')
require('ng-cache?!jade-env-html!./instructions.jade')
require('ng-cache?!jade-env-html!./foo.jade')
require('ng-cache?!jade-env-html!./products.jade')
require('ng-cache?!jade-env-html!./works.jade')
require('ng-cache?!jade-env-html!./contacts.jade')


require('ng-cache?!jade-env-html!./confirm.jade')
require('ng-cache?!jade-env-html!./complete.jade')
require('../app.less')
