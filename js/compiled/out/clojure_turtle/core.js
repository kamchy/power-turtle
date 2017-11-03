// Compiled by ClojureScript 1.9.908 {}
goog.provide('clojure_turtle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('clojure_turtle.macros');
/**
 * The default color to be used (ex: if color is not specified)
 */
clojure_turtle.core.DEFAULT_COLOR = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {clojure_turtle.core.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure_turtle.core.Turtle = (function (x,y,angle,pen,color,fill,commands,start_from,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.angle = angle;
this.pen = pen;
this.color = color;
this.fill = fill;
this.commands = commands;
this.start_from = start_from;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
clojure_turtle.core.Turtle.prototype.toString = (function (){
var self__ = this;
var turt = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.select_keys.call(null,turt,cljs.core.keys.call(null,turt)))].join('');
});

clojure_turtle.core.Turtle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28779__auto__,k__28780__auto__){
var self__ = this;
var this__28779__auto____$1 = this;
return this__28779__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28780__auto__,null);
});

clojure_turtle.core.Turtle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28781__auto__,k36729,else__28782__auto__){
var self__ = this;
var this__28781__auto____$1 = this;
var G__36733 = k36729;
var G__36733__$1 = (((G__36733 instanceof cljs.core.Keyword))?G__36733.fqn:null);
switch (G__36733__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "angle":
return self__.angle;

break;
case "pen":
return self__.pen;

break;
case "color":
return self__.color;

break;
case "fill":
return self__.fill;

break;
case "commands":
return self__.commands;

break;
case "start-from":
return self__.start_from;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36729,else__28782__auto__);

}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28793__auto__,writer__28794__auto__,opts__28795__auto__){
var self__ = this;
var this__28793__auto____$1 = this;
var pr_pair__28796__auto__ = ((function (this__28793__auto____$1){
return (function (keyval__28797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28794__auto__,cljs.core.pr_writer,""," ","",opts__28795__auto__,keyval__28797__auto__);
});})(this__28793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28794__auto__,pr_pair__28796__auto__,"#clojure-turtle.core.Turtle{",", ","}",opts__28795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pen","pen",2006675445),self__.pen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commands","commands",161008658),self__.commands],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-from","start-from",1934364841),self__.start_from],null))], null),self__.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36728){
var self__ = this;
var G__36728__$1 = this;
return (new cljs.core.RecordIter((0),G__36728__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"start-from","start-from",1934364841)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28777__auto__){
var self__ = this;
var this__28777__auto____$1 = this;
return self__.__meta;
});

clojure_turtle.core.Turtle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28774__auto__){
var self__ = this;
var this__28774__auto____$1 = this;
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,self__.__hash));
});

clojure_turtle.core.Turtle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28783__auto__){
var self__ = this;
var this__28783__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28775__auto__){
var self__ = this;
var this__28775__auto____$1 = this;
var h__28593__auto__ = self__.__hash;
if(!((h__28593__auto__ == null))){
return h__28593__auto__;
} else {
var h__28593__auto____$1 = ((function (h__28593__auto__,this__28775__auto____$1){
return (function (coll__28776__auto__){
return (1301349890 ^ cljs.core.hash_unordered_coll.call(null,coll__28776__auto__));
});})(h__28593__auto__,this__28775__auto____$1))
.call(null,this__28775__auto____$1);
self__.__hash = h__28593__auto____$1;

return h__28593__auto____$1;
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36730,other36731){
var self__ = this;
var this36730__$1 = this;
return (!((other36731 == null))) && ((this36730__$1.constructor === other36731.constructor)) && (cljs.core._EQ_.call(null,this36730__$1.x,other36731.x)) && (cljs.core._EQ_.call(null,this36730__$1.y,other36731.y)) && (cljs.core._EQ_.call(null,this36730__$1.angle,other36731.angle)) && (cljs.core._EQ_.call(null,this36730__$1.pen,other36731.pen)) && (cljs.core._EQ_.call(null,this36730__$1.color,other36731.color)) && (cljs.core._EQ_.call(null,this36730__$1.fill,other36731.fill)) && (cljs.core._EQ_.call(null,this36730__$1.commands,other36731.commands)) && (cljs.core._EQ_.call(null,this36730__$1.start_from,other36731.start_from)) && (cljs.core._EQ_.call(null,this36730__$1.__extmap,other36731.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28788__auto__,k__28789__auto__){
var self__ = this;
var this__28788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"start-from","start-from",1934364841),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"angle","angle",1622094254),null,new cljs.core.Keyword(null,"commands","commands",161008658),null,new cljs.core.Keyword(null,"pen","pen",2006675445),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__28789__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28788__auto____$1),self__.__meta),k__28789__auto__);
} else {
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28789__auto__)),null));
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28786__auto__,k__28787__auto__,G__36728){
var self__ = this;
var this__28786__auto____$1 = this;
var pred__36734 = cljs.core.keyword_identical_QMARK_;
var expr__36735 = k__28787__auto__;
if(cljs.core.truth_(pred__36734.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36735))){
return (new clojure_turtle.core.Turtle(G__36728,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36734.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36735))){
return (new clojure_turtle.core.Turtle(self__.x,G__36728,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36734.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254),expr__36735))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,G__36728,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36734.call(null,new cljs.core.Keyword(null,"pen","pen",2006675445),expr__36735))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,G__36728,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36734.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__36735))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,G__36728,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36734.call(null,new cljs.core.Keyword(null,"fill","fill",883462889),expr__36735))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,G__36728,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36734.call(null,new cljs.core.Keyword(null,"commands","commands",161008658),expr__36735))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,G__36728,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36734.call(null,new cljs.core.Keyword(null,"start-from","start-from",1934364841),expr__36735))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,G__36728,self__.__meta,self__.__extmap,null));
} else {
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28787__auto__,G__36728),null));
}
}
}
}
}
}
}
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28791__auto__){
var self__ = this;
var this__28791__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pen","pen",2006675445),self__.pen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commands","commands",161008658),self__.commands],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-from","start-from",1934364841),self__.start_from],null))], null),self__.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28778__auto__,G__36728){
var self__ = this;
var this__28778__auto____$1 = this;
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,G__36728,self__.__extmap,self__.__hash));
});

clojure_turtle.core.Turtle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28784__auto__,entry__28785__auto__){
var self__ = this;
var this__28784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28785__auto__)){
return this__28784__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28785__auto__,(0)),cljs.core._nth.call(null,entry__28785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28784__auto____$1,entry__28785__auto__);
}
});

clojure_turtle.core.Turtle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null),new cljs.core.Symbol(null,"pen","pen",-647760324,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null),new cljs.core.Symbol(null,"commands","commands",1801540185,null),new cljs.core.Symbol(null,"start-from","start-from",-720070928,null)], null);
});

clojure_turtle.core.Turtle.cljs$lang$type = true;

clojure_turtle.core.Turtle.cljs$lang$ctorPrSeq = (function (this__28815__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojure-turtle.core/Turtle");
});

clojure_turtle.core.Turtle.cljs$lang$ctorPrWriter = (function (this__28815__auto__,writer__28816__auto__){
return cljs.core._write.call(null,writer__28816__auto__,"clojure-turtle.core/Turtle");
});

clojure_turtle.core.__GT_Turtle = (function clojure_turtle$core$__GT_Turtle(x,y,angle,pen,color,fill,commands,start_from){
return (new clojure_turtle.core.Turtle(x,y,angle,pen,color,fill,commands,start_from,null,null,null));
});

clojure_turtle.core.map__GT_Turtle = (function clojure_turtle$core$map__GT_Turtle(G__36732){
return (new clojure_turtle.core.Turtle(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36732),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36732),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(G__36732),new cljs.core.Keyword(null,"pen","pen",2006675445).cljs$core$IFn$_invoke$arity$1(G__36732),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__36732),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(G__36732),new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(G__36732),new cljs.core.Keyword(null,"start-from","start-from",1934364841).cljs$core$IFn$_invoke$arity$1(G__36732),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36732,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"start-from","start-from",1934364841))),null));
});

/**
 * This method determines what gets returned when passing a Turtle record instance to pr-str, which in turn affects what gets printed at the REPL
 */
clojure_turtle.core.pr_str_turtle = (function clojure_turtle$core$pr_str_turtle(turt){
return cljs.core.pr_str.call(null,cljs.core.select_keys.call(null,turt,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill","fill",883462889)], null)));
});
clojure_turtle.core.Turtle.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

clojure_turtle.core.Turtle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (turt,writer,_){
var turt__$1 = this;
return cljs.core._write.call(null,writer,clojure_turtle.core.pr_str_turtle.call(null,turt__$1));
});
/**
 * Returns an entity that represents a turtle.
 */
clojure_turtle.core.new_turtle = (function clojure_turtle$core$new_turtle(){
return cljs.core.atom.call(null,clojure_turtle.core.map__GT_Turtle.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(90),new cljs.core.Keyword(null,"pen","pen",2006675445),true,new cljs.core.Keyword(null,"color","color",1011675173),clojure_turtle.core.DEFAULT_COLOR,new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start-from","start-from",1934364841),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)));
});
/**
 * The default turtle entity used when no turtle is specified for an operation.
 */
clojure_turtle.core.turtle = clojure_turtle.core.new_turtle.call(null);
/**
 * A helper function used in the implementation of basic operations to abstract
 *   out the interface of applying a function to a turtle entity.
 */
clojure_turtle.core.alter_turtle = (function clojure_turtle$core$alter_turtle(turt_state,f){
cljs.core.swap_BANG_.call(null,turt_state,f);

return turt_state;
});
/**
 * Take a color vector, as passed to the `color` fn, and return a color vector
 *   in the form [red blue green alpha], where all RGB and alpha values are integers
 *   in the range 0-255 inclusive. In order to make the color vector represent full
 *   opacity, the alpha value will be 255.
 */
clojure_turtle.core.make_opaque = (function clojure_turtle$core$make_opaque(color_vec){
var rgb_vec = (function (){var G__36738 = cljs.core.count.call(null,color_vec);
switch (G__36738) {
case (1):
return cljs.core.repeat.call(null,(3),cljs.core.first.call(null,color_vec));

break;
case (3):
return color_vec;

break;
case (4):
return cljs.core.take.call(null,(3),color_vec);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36738)].join('')));

}
})();
var rgba_vec = cljs.core.concat.call(null,rgb_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255)], null));
return rgba_vec;
});
/**
 * Set the turtle's color using [red green blue].
 *   RGB values are in the range 0 to 255, inclusive.
 */
clojure_turtle.core.color = (function clojure_turtle$core$color(var_args){
var G__36741 = arguments.length;
switch (G__36741) {
case 1:
return clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$1 = (function (c){
return clojure_turtle.core.color.call(null,clojure_turtle.core.turtle,c);
});

clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,c){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"color","color",1011675173),c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),c], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.color.cljs$lang$maxFixedArity = 2;

/**
 * Rotate the turtle turt clockwise by ang degrees.
 */
clojure_turtle.core.right = (function clojure_turtle$core$right(var_args){
var G__36744 = arguments.length;
switch (G__36744) {
case 1:
return clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$1 = (function (ang){
return clojure_turtle.core.right.call(null,clojure_turtle.core.turtle,ang);
});

clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,ang){
var add_angle = (function clojure_turtle$core$add_angle(p__36748){
var map__36749 = p__36748;
var map__36749__$1 = ((((!((map__36749 == null)))?((((map__36749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36749):map__36749);
var t = map__36749__$1;
var angle = cljs.core.get.call(null,map__36749__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var new_angle = cljs.core.mod.call(null,(angle - ang),(360));
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"angle","angle",1622094254),new_angle),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setheading","setheading",1500207184),new_angle], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,add_angle);
});

clojure_turtle.core.right.cljs$lang$maxFixedArity = 2;

/**
 * Same as right, but turns the turtle counter-clockwise.
 */
clojure_turtle.core.left = (function clojure_turtle$core$left(var_args){
var G__36753 = arguments.length;
switch (G__36753) {
case 1:
return clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$1 = (function (ang){
return clojure_turtle.core.right.call(null,((-1) * ang));
});

clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,ang){
return clojure_turtle.core.right.call(null,turt_state,((-1) * ang));
});

clojure_turtle.core.left.cljs$lang$maxFixedArity = 2;

clojure_turtle.core.deg__GT_radians = quil.core.radians;
clojure_turtle.core.radians__GT_deg = quil.core.degrees;
clojure_turtle.core.atan = quil.core.atan;
/**
 * Move the turtle turt forward in the direction that it is facing by length len.
 */
clojure_turtle.core.forward = (function clojure_turtle$core$forward(var_args){
var G__36756 = arguments.length;
switch (G__36756) {
case 1:
return clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$1 = (function (len){
return clojure_turtle.core.forward.call(null,clojure_turtle.core.turtle,len);
});

clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,len){
var rads = clojure_turtle.core.deg__GT_radians.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,turt_state),new cljs.core.Keyword(null,"angle","angle",1622094254)));
var dx = (len * Math.cos(rads));
var dy = (len * Math.sin(rads));
var alter_fn = ((function (rads,dx,dy){
return (function (t){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,dx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,dy),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null)], null));
});})(rads,dx,dy))
;
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.forward.cljs$lang$maxFixedArity = 2;

/**
 * Same as forward, but move the turtle backwards, which is opposite of the direction it is facing.
 */
clojure_turtle.core.back = (function clojure_turtle$core$back(var_args){
var G__36759 = arguments.length;
switch (G__36759) {
case 1:
return clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$1 = (function (len){
return clojure_turtle.core.forward.call(null,((-1) * len));
});

clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,len){
return clojure_turtle.core.forward.call(null,turt_state,((-1) * len));
});

clojure_turtle.core.back.cljs$lang$maxFixedArity = 2;

/**
 * Instruct the turtle to pick its pen up. Subsequent movements will not draw to screen until the pen is put down again.
 */
clojure_turtle.core.penup = (function clojure_turtle$core$penup(var_args){
var G__36762 = arguments.length;
switch (G__36762) {
case 0:
return clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.penup.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pen","pen",2006675445),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pen","pen",2006675445),false], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.penup.cljs$lang$maxFixedArity = 1;

/**
 * Instruct the turtle to put its pen down. Subsequent movements will draw to screen.
 */
clojure_turtle.core.pendown = (function clojure_turtle$core$pendown(var_args){
var G__36765 = arguments.length;
switch (G__36765) {
case 0:
return clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.pendown.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pen","pen",2006675445),true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pen","pen",2006675445),true], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.pendown.cljs$lang$maxFixedArity = 1;

/**
 * Make the turtle fill the area created by his subsequent moves, until end-fill is called.
 */
clojure_turtle.core.start_fill = (function clojure_turtle$core$start_fill(var_args){
var G__36768 = arguments.length;
switch (G__36768) {
case 0:
return clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.start_fill.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-fill","start-fill",91524710)], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.start_fill.cljs$lang$maxFixedArity = 1;

/**
 * Stop filling the area of turtle moves. Must be called start-fill.
 */
clojure_turtle.core.end_fill = (function clojure_turtle$core$end_fill(var_args){
var G__36771 = arguments.length;
switch (G__36771) {
case 0:
return clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.end_fill.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fill","end-fill",-1674316866)], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.end_fill.cljs$lang$maxFixedArity = 1;

/**
 * Sleeps for ms miliseconds. Can be used in a repeat to show commands execute in real time
 */
clojure_turtle.core.wait = (function clojure_turtle$core$wait(ms){
var get_time = (function clojure_turtle$core$wait_$_get_time(){
return (new Date()).getTime();
});
var initial_time = get_time.call(null);
while(true){
if((get_time.call(null) < (initial_time + ms))){
continue;
} else {
return null;
}
break;
}
});
/**
 * Clear the lines state, which effectively clears the drawing canvas.
 */
clojure_turtle.core.clean = (function clojure_turtle$core$clean(var_args){
var G__36775 = arguments.length;
switch (G__36775) {
case 0:
return clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.clean.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
var curr_pos_map = cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"start-from","start-from",1934364841),curr_pos_map);
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.clean.cljs$lang$maxFixedArity = 1;

/**
 * Set the position of turtle turt to x-coordinate x and y-coordinate y.
 */
clojure_turtle.core.setxy = (function clojure_turtle$core$setxy(var_args){
var G__36778 = arguments.length;
switch (G__36778) {
case 2:
return clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return clojure_turtle.core.setxy.call(null,clojure_turtle.core.turtle,x,y);
});

clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$3 = (function (turt_state,x,y){
var pen_down_QMARK_ = cljs.core.get.call(null,cljs.core.deref.call(null,turt_state),new cljs.core.Keyword(null,"pen","pen",2006675445));
var alter_fn = ((function (pen_down_QMARK_){
return (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setxy","setxy",-229566621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});})(pen_down_QMARK_))
;
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.setxy.cljs$lang$maxFixedArity = 3;

/**
 * Set the direction which the turtle is facing, given in degrees, where 0 is to the right,
 *   90 is up, 180 is left, and 270 is down.
 */
clojure_turtle.core.setheading = (function clojure_turtle$core$setheading(var_args){
var G__36781 = arguments.length;
switch (G__36781) {
case 1:
return clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$1 = (function (ang){
return clojure_turtle.core.setheading.call(null,clojure_turtle.core.turtle,ang);
});

clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,ang){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"angle","angle",1622094254),ang),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setheading","setheading",1500207184),ang], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.setheading.cljs$lang$maxFixedArity = 2;

/**
 * Set the turtle at coordinates (0,0), facing up (heading = 90 degrees)
 */
clojure_turtle.core.home = (function clojure_turtle$core$home(var_args){
var G__36784 = arguments.length;
switch (G__36784) {
case 0:
return clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.home.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
clojure_turtle.core.setxy.call(null,turt_state,(0),(0));

return clojure_turtle.core.setheading.call(null,turt_state,(90));
});

clojure_turtle.core.home.cljs$lang$maxFixedArity = 1;

/**
 * A helper function for the Quil rendering function.
 */
clojure_turtle.core.reset_rendering = (function clojure_turtle$core$reset_rendering(){
quil.core.background.call(null,(200));

return quil.core.stroke_weight.call(null,(1));
});
/**
 * A helper function for the Quil rendering function.
 */
clojure_turtle.core.setup = (function clojure_turtle$core$setup(){
quil.core.smooth.call(null);

setTimeout((function (){
return quil.sketch._STAR_applet_STAR_ = quil.core.get_sketch_by_id.call(null,"turtle-canvas");
}),(5));

return clojure_turtle.core.reset_rendering.call(null);
});
/**
 * A helper function that draws the triangle that represents the turtle onto the screen.
 */
clojure_turtle.core.get_turtle_sprite = (function clojure_turtle$core$get_turtle_sprite(var_args){
var G__36787 = arguments.length;
switch (G__36787) {
case 0:
return clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.get_turtle_sprite.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$1 = (function (turt){
var short_leg = (5);
var long_leg = (12);
var hypoteneuse = Math.sqrt(((short_leg * short_leg) + (long_leg * long_leg)));
var large_angle = clojure_turtle.core.radians__GT_deg.call(null,clojure_turtle.core.atan.call(null,(long_leg / short_leg)));
var small_angle = ((90) - large_angle);
var turt_copy_state = clojure_turtle.core.clean.call(null,clojure_turtle.core.pendown.call(null,cljs.core.atom.call(null,turt)));
var current_color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(turt);
var opaque_color = clojure_turtle.core.make_opaque.call(null,current_color);
clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.right.call(null,clojure_turtle.core.color.call(null,clojure_turtle.core.pendown.call(null,clojure_turtle.core.back.call(null,clojure_turtle.core.penup.call(null,clojure_turtle.core.setxy.call(null,turt_copy_state,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(turt),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(turt))),(long_leg / (3)))),opaque_color),(90)),short_leg),((180) - large_angle)),hypoteneuse),((180) - ((2) * small_angle))),hypoteneuse),((180) - large_angle)),short_leg),(90));

return turt_copy_state;
});

clojure_turtle.core.get_turtle_sprite.cljs$lang$maxFixedArity = 1;

/**
 * Takes a seq of turtle commands and converts them into Quil commands to draw
 *   onto the canvas
 */
clojure_turtle.core.draw_turtle_commands = (function clojure_turtle$core$draw_turtle_commands(turt){
var new_turtle = cljs.core.deref.call(null,clojure_turtle.core.new_turtle.call(null));
var start_from_pos = cljs.core.get.call(null,turt,new cljs.core.Keyword(null,"start-from","start-from",1934364841));
var new_turtle_with_start = cljs.core.assoc.call(null,cljs.core.assoc.call(null,new_turtle,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_from_pos)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_from_pos));
var t = new_turtle_with_start;
var commands = new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(turt);
while(true){
if(cljs.core.empty_QMARK_.call(null,commands)){
return t;
} else {
var next_cmd = cljs.core.first.call(null,commands);
var cmd_name = cljs.core.first.call(null,next_cmd);
var cmd_vals = cljs.core.rest.call(null,next_cmd);
var rest_cmds = cljs.core.rest.call(null,commands);
var G__36789 = cmd_name;
var G__36789__$1 = (((G__36789 instanceof cljs.core.Keyword))?G__36789.fqn:null);
switch (G__36789__$1) {
case "color":
var c = cljs.core.first.call(null,cmd_vals);
cljs.core.apply.call(null,quil.core.stroke,c);

cljs.core.apply.call(null,quil.core.fill,c);

var G__36797 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"color","color",1011675173),c);
var G__36798 = rest_cmds;
t = G__36797;
commands = G__36798;
continue;

break;
case "setxy":
var vec__36790 = cljs.core.first.call(null,cmd_vals);
var x = cljs.core.nth.call(null,vec__36790,(0),null);
var y = cljs.core.nth.call(null,vec__36790,(1),null);
var G__36799 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
var G__36800 = rest_cmds;
t = G__36799;
commands = G__36800;
continue;

break;
case "setheading":
var G__36801 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.first.call(null,cmd_vals));
var G__36802 = rest_cmds;
t = G__36801;
commands = G__36802;
continue;

break;
case "translate":
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t);
var vec__36793 = cljs.core.first.call(null,cmd_vals);
var dx = cljs.core.nth.call(null,vec__36793,(0),null);
var dy = cljs.core.nth.call(null,vec__36793,(1),null);
var new_x = (x + dx);
var new_y = (y + dy);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pen","pen",2006675445).cljs$core$IFn$_invoke$arity$1(t))){
quil.core.line.call(null,x,y,new_x,new_y);

if(cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(t))){
quil.core.vertex.call(null,x,y);

quil.core.vertex.call(null,new_x,new_y);
} else {
}
} else {
}

var G__36803 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),new_x,new cljs.core.Keyword(null,"y","y",-1757859776),new_y);
var G__36804 = rest_cmds;
t = G__36803;
commands = G__36804;
continue;

break;
case "pen":
var G__36805 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pen","pen",2006675445),cljs.core.first.call(null,cmd_vals));
var G__36806 = rest_cmds;
t = G__36805;
commands = G__36806;
continue;

break;
case "start-fill":
if(cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(t))){
} else {
quil.core.begin_shape.call(null);
}

var G__36807 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),true);
var G__36808 = rest_cmds;
t = G__36807;
commands = G__36808;
continue;

break;
case "end-fill":
if(cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(t))){
quil.core.end_shape.call(null);
} else {
}

var G__36809 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),false);
var G__36810 = rest_cmds;
t = G__36809;
commands = G__36810;
continue;

break;
default:
return t;

}
}
break;
}
});
/**
 * The function passed to Quil for doing rendering.
 */
clojure_turtle.core.draw_turtle = (function clojure_turtle$core$draw_turtle(turt_state){
quil.core.push_matrix.call(null);

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

clojure_turtle.core.reset_rendering.call(null);

quil.core.push_matrix.call(null);

quil.core.scale.call(null,1.0,-1.0);

cljs.core.apply.call(null,quil.core.stroke,clojure_turtle.core.DEFAULT_COLOR);

cljs.core.apply.call(null,quil.core.fill,clojure_turtle.core.DEFAULT_COLOR);

clojure_turtle.core.draw_turtle_commands.call(null,cljs.core.deref.call(null,turt_state));

var sprite_36811 = clojure_turtle.core.get_turtle_sprite.call(null,cljs.core.deref.call(null,turt_state));
clojure_turtle.core.draw_turtle_commands.call(null,cljs.core.deref.call(null,sprite_36811));

quil.core.pop_matrix.call(null);

return quil.core.pop_matrix.call(null);
});
/**
 * The function passed to Quil for doing rendering.
 */
clojure_turtle.core.draw = (function clojure_turtle$core$draw(){
return clojure_turtle.core.draw_turtle.call(null,clojure_turtle.core.turtle);
});
var ret__29348__auto___36812 = /**
 * Executes `then` clause iff generating ClojureScript code. Stolen from Prismatic code.
 *   Ref. http://goo.gl/DhhhSN, http://goo.gl/Bhdyna.
 */
clojure_turtle.core.if_cljs = (function clojure_turtle$core$if_cljs(_AMPERSAND_form,_AMPERSAND_env,then,else$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return then;
} else {
return else$;
}
});
clojure_turtle.core.if_cljs.cljs$lang$macro = true;

var ret__29348__auto___36828 = (function (){
/**
 * Opens up a new window that shows the turtle rendering canvas.  In CLJS it will render
 *   to a new HTML5 canvas object. An optional config map can be provided, where the key
 *   :title indicates the window title (clj), the :size key indicates a vector of 2 values
 *   indicating the width and height of the window.
 */
clojure_turtle.core.new_window = (function clojure_turtle$core$new_window(var_args){
var args__29315__auto__ = [];
var len__29308__auto___36829 = arguments.length;
var i__29309__auto___36830 = (0);
while(true){
if((i__29309__auto___36830 < len__29308__auto___36829)){
args__29315__auto__.push((arguments[i__29309__auto___36830]));

var G__36831 = (i__29309__auto___36830 + (1));
i__29309__auto___36830 = G__36831;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return clojure_turtle.core.new_window.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

clojure_turtle.core.new_window.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__36816){
var vec__36817 = p__36816;
var config = cljs.core.nth.call(null,vec__36817,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","if-cljs","clojure-turtle.core/if-cljs",1147190338,null)),(function (){var x__29001__auto__ = (function (){var default_config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(323),(200)], null)], null);
var map__36822 = cljs.core.merge.call(null,default_config,config);
var map__36822__$1 = ((((!((map__36822 == null)))?((((map__36822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36822):map__36822);
var host = cljs.core.get.call(null,map__36822__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var size = cljs.core.get.call(null,map__36822__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.sketch","add-canvas","quil.sketch/add-canvas",-44468094,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"turtle-canvas"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","defsketch","quil.core/defsketch",137571269,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"example","example",-115247617,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"host","host",-1558485167)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"turtle-canvas"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"setup","setup",1987730512)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","setup","clojure-turtle.core/setup",-224051665,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"draw","draw",1358331674)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","draw","clojure-turtle.core/draw",1759977673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"size","size",1098693007)),(function (){var x__29001__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = (function (){var default_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Watch the turtle go!",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(323),(200)], null)], null);
var map__36826 = cljs.core.merge.call(null,default_config,config);
var map__36826__$1 = ((((!((map__36826 == null)))?((((map__36826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36826):map__36826);
var title = cljs.core.get.call(null,map__36826__$1,new cljs.core.Keyword(null,"title","title",636505583));
var size = cljs.core.get.call(null,map__36826__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","defsketch","quil.core/defsketch",137571269,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"example","example",-115247617,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),(function (){var x__29001__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"setup","setup",1987730512)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","setup","clojure-turtle.core/setup",-224051665,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"draw","draw",1358331674)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","draw","clojure-turtle.core/draw",1759977673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"size","size",1098693007)),(function (){var x__29001__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

clojure_turtle.core.new_window.cljs$lang$maxFixedArity = (2);

clojure_turtle.core.new_window.cljs$lang$applyTo = (function (seq36813){
var G__36814 = cljs.core.first.call(null,seq36813);
var seq36813__$1 = cljs.core.next.call(null,seq36813);
var G__36815 = cljs.core.first.call(null,seq36813__$1);
var seq36813__$2 = cljs.core.next.call(null,seq36813__$1);
return clojure_turtle.core.new_window.cljs$core$IFn$_invoke$arity$variadic(G__36814,G__36815,seq36813__$2);
});

return null;
})()
;
clojure_turtle.core.new_window.cljs$lang$macro = true;


//# sourceMappingURL=core.js.map?rel=1509738657287