!function(){function c(){}function e(a){return b.retinaImageSuffix+a}function f(a,b){if(this.path=a||"","undefined"!==typeof b&&null!==b)this.at_2x_path=b,this.perform_check=!1;else{if(void 0!==document.createElement){var c=document.createElement("a");c.href=this.path,c.pathname=c.pathname.replace(d,e),this.at_2x_path=c.href}else{var f=this.path.split("?");f[0]=f[0].replace(d,e),this.at_2x_path=f.join("?")}this.perform_check=!0}}function g(a){this.el=a,this.path=new f(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var b=this;this.path.check_2x_variant(function(a){a&&b.swap()})}var a="undefined"===typeof exports?window:exports,b={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};a.Retina=c,c.configure=function(a){null===a&&(a={});for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])},c.init=function(b){null===b&&(b=a);var c=b.onload||function(){};b.onload=function(){var d,e,a=document.getElementsByTagName("img"),b=[];for(d=0;d<a.length;d+=1)e=a[d],e.getAttributeNode("data-no-retina")||b.push(new g(e));c()}},c.isRetina=function(){var b="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return a.devicePixelRatio>1?!0:a.matchMedia&&a.matchMedia(b).matches?!0:!1};var d=/\.\w+$/;a.RetinaImagePath=f,f.confirmed_paths=[],f.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},f.prototype.check_2x_variant=function(a){var c,d=this;return this.is_external()?a(!1):this.perform_check||"undefined"===typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in f.confirmed_paths?a(!0):(c=new XMLHttpRequest,c.open("HEAD",this.at_2x_path),c.onreadystatechange=function(){if(4!==c.readyState)return a(!1);if(c.status>=200&&c.status<=399){if(b.check_mime_type){var e=c.getResponseHeader("Content-Type");if(null===e||!e.match(/^image/i))return a(!1)}return f.confirmed_paths.push(d.at_2x_path),a(!0)}return a(!1)},c.send(),void 0):a(!0)},a.RetinaImage=g,g.prototype.swap=function(a){function d(){c.el.complete?(b.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(d,5)}"undefined"===typeof a&&(a=this.path.at_2x_path);var c=this;d()},c.isRetina()&&c.init(a)}();