// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.model');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof power_turtle.model.current_language !== 'undefined'){
} else {
power_turtle.model.current_language = reagent.core.atom.call(null,"en");
}
if(typeof power_turtle.model.flip !== 'undefined'){
} else {
power_turtle.model.flip = reagent.core.atom.call(null,(90));
}

//# sourceMappingURL=model.js.map?rel=1509738657541