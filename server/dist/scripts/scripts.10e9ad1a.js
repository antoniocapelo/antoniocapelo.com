"use strict";angular.module("antoniocapeloCom",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/cv",{templateUrl:"views/cv.html",controller:"CvCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("antoniocapeloCom").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("antoniocapeloCom").controller("CvCtrl",["$scope",function(a){var b={profile_description:{title:"Profile",text:"<p>I'm a former Civil Engineer who made some new life choices and became a Software Engineer.</p><p>asdasdasdasdas n e tal</p>"},contacts:{email:"antonioccapelo@gmail.com,",phone:"+351 916 321 950",web:"www.antoniocapelo.com",social:{twitter:"twitter",linkedin:"linkedin",googleplus:"googleplus"}},experience:[{title:"Frontend Developer",where:"Blip.pt",where_url:"http://www.blip.pt",from:"August 2014",to:"Present",text:"I develop some cool stuff!"},{title:"Junior Frontend Developer",where:"Blip.pt",where_url:"http://www.blip.pt",from:"February 2014",to:"August 2014"},{title:"Intern Developer",where:"Blip.pt",where_url:"http://www.blip.pt",from:"August 2013",to:"January 2014"},{title:"Civil Engineer",where:"http://casais.pt/",where_url:"www.blip.pt",from:"February 2014",to:"August 2014"}],skills:[{title:"HTML 5",level:80},{title:"Javascript",level:90},{title:"CSS",level:85},{title:"Testing",level:75}]};a.data=b}]),angular.module("antoniocapeloCom").controller("MainCtrl",["$scope",function(a){a.$on("$routeChangeSuccess",function(){var a=new Awty;a.init()})}]),function(){angular.module("antoniocapeloCom").directive("typewrite",["$timeout",function(a){function b(b,c,d){function e(b,d,f){return d<=f.length?(b.html(f.substring(0,d)+m),d++,void(i=a(function(){e(c,d,f)},k))):void(n?l?(h="-webkit-animation:blink-it steps(1) "+l+" infinite;-moz-animation:blink-it steps(1) "+l+" infinite -ms-animation:blink-it steps(1) "+l+" infinite;-o-animation:blink-it steps(1) "+l+" infinite; animation:blink-it steps(1) "+l+" infinite;",b.html(f.substring(0,d)+'<span class="blink" style="'+h+'">'+m+"</span>")):b.html(f.substring(0,d)+'<span class="blink">'+m+"</span>"):b.html(f.substring(0,d)))}function f(a){return"string"==typeof a?"s"===a.charAt(a.length-1)?1e3*parseInt(a.substring(0,a.length-1),10):+a:void 0}function g(a){return"string"==typeof a?"s"===a.charAt(a.length-1)?a:parseInt(a.substring(0,a.length-1),10)/1e3:void 0}var h,i=null,j=d.initialDelay?f(d.initialDelay):200,k=d.typeDelay?f(d.typeDelay):200,l=d.blinkDelay?g(d.blinkDelay):!1,m=d.cursor?d.cursor:"|",n=d.blinkCursor?"true"===d.blinkCursor:!0;d.text&&(i=a(function(){e(c,0,d.text)},j)),b.$on("$destroy",function(){i&&a.cancel(i)})}return{restrict:"A",link:b,scope:!1}}])}();