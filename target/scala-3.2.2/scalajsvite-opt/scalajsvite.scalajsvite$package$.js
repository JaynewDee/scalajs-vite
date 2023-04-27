'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
function $p_Lscalajsvite_scalajsvite$package$__setCounter$1__Lorg_scalajs_dom_Element__sr_IntRef__I__V($thiz, element$1, counter$1, count) {
  var ev$1 = count;
  counter$1.sr_IntRef__f_elem = ev$1;
  element$1.innerHTML = ("count is " + counter$1.sr_IntRef__f_elem)
}
export { $p_Lscalajsvite_scalajsvite$package$__setCounter$1__Lorg_scalajs_dom_Element__sr_IntRef__I__V as $p_Lscalajsvite_scalajsvite$package$__setCounter$1__Lorg_scalajs_dom_Element__sr_IntRef__I__V };
/** @constructor */
function $c_Lscalajsvite_scalajsvite$package$() {
  /*<skip>*/
}
export { $c_Lscalajsvite_scalajsvite$package$ as $c_Lscalajsvite_scalajsvite$package$ };
$c_Lscalajsvite_scalajsvite$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lscalajsvite_scalajsvite$package$.prototype.constructor = $c_Lscalajsvite_scalajsvite$package$;
/** @constructor */
function $h_Lscalajsvite_scalajsvite$package$() {
  /*<skip>*/
}
export { $h_Lscalajsvite_scalajsvite$package$ as $h_Lscalajsvite_scalajsvite$package$ };
$h_Lscalajsvite_scalajsvite$package$.prototype = $c_Lscalajsvite_scalajsvite$package$.prototype;
$c_Lscalajsvite_scalajsvite$package$.prototype.ScalaJSVite__V = (function() {
  document.querySelector("#app").innerHTML = "\r\n    <div>\r\n      <h1>Hello Scala.js!</h1>\r\n      <div class=\"card\">\r\n        <button id=\"counter\" type=\"button\"></button>\r\n      </div>\r\n      <p class=\"read-the-docs\">\r\n        Click on the Vite logo to learn more\r\n      </p>\r\n    </div>\r\n  ";
  $m_Lscalajsvite_scalajsvite$package$().setupCounter__Lorg_scalajs_dom_Element__V(document.getElementById("counter"))
});
$c_Lscalajsvite_scalajsvite$package$.prototype.setupCounter__Lorg_scalajs_dom_Element__V = (function(element) {
  var counter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_IntRef(0);
  element.addEventListener("click", ((e) => {
    $p_Lscalajsvite_scalajsvite$package$__setCounter$1__Lorg_scalajs_dom_Element__sr_IntRef__I__V(this, element, counter, ((1 + counter.sr_IntRef__f_elem) | 0))
  }));
  $p_Lscalajsvite_scalajsvite$package$__setCounter$1__Lorg_scalajs_dom_Element__sr_IntRef__I__V(this, element, counter, 0)
});
var $d_Lscalajsvite_scalajsvite$package$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass({
  Lscalajsvite_scalajsvite$package$: 0
}, false, "scalajsvite.scalajsvite$package$", {
  Lscalajsvite_scalajsvite$package$: 1,
  O: 1
});
export { $d_Lscalajsvite_scalajsvite$package$ as $d_Lscalajsvite_scalajsvite$package$ };
$c_Lscalajsvite_scalajsvite$package$.prototype.$classData = $d_Lscalajsvite_scalajsvite$package$;
var $n_Lscalajsvite_scalajsvite$package$;
function $m_Lscalajsvite_scalajsvite$package$() {
  if ((!$n_Lscalajsvite_scalajsvite$package$)) {
    $n_Lscalajsvite_scalajsvite$package$ = new $c_Lscalajsvite_scalajsvite$package$()
  };
  return $n_Lscalajsvite_scalajsvite$package$
}
export { $m_Lscalajsvite_scalajsvite$package$ as $m_Lscalajsvite_scalajsvite$package$ };
//# sourceMappingURL=scalajsvite.scalajsvite$package$.js.map
