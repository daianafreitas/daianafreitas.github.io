/*!
 * classie v1.0.0
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 */
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}var n,a,t;function c(s,e){(n(s,e)?t:a)(s,e)}"classList"in document.documentElement?(n=function(s,e){return s.classList.contains(e)},a=function(s,e){s.classList.add(e)},t=function(s,e){s.classList.remove(e)}):(n=function(s,n){return e(n).test(s.className)},a=function(s,e){n(s,e)||(s.className=s.className+" "+e)},t=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:n,addClass:a,removeClass:t,toggleClass:c,has:n,add:a,remove:t,toggle:c};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);
