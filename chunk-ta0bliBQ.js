import{$ as ME,$t as im,A as Eg,An as sE,At as WE,B as Hm,Bn as wI,Bt as b,C as Cp,Cn as om,Ct as U,D as Dm,Dn as qD,Dt as Vo,E as Dg,En as q,Et as VD,F as Fh,Fn as vF,Ft as YE,G as Ji$1,Gn as xp,Gt as et$1,H as Hu,Hn as wn,I as Fp,In as vg,It as Z,J as Kp,Jn as yr$1,K as Jp,Kn as xu,Kt as fr$1,L as Gh,Ln as vr$1,Lt as _,M as FE,Mn as sm,Mt as XD,N as Fc,Nn as uD,Nt as XE,O as Dp,On as ri$1,P as Fe$1,Pn as ug,Pt as Xp,Q as MD,R as Gp,Rn as wD,Rt as ae,S as Bp,Sn as og,St as Tp,T as DF,Tn as pr$1,Tt as V,U as Ig,Un as xE,V as Hp,Vn as wg,Vt as be,W as JE,Wn as xi$1,Wt as en$1,X as Lp,Xn as zE,Xt as hI,Y as Lc,Yn as yu,Yt as hF,Zt as he,_ as $p,_n as mu,_t as SE,an as ju,at as Np,b as Ap,bn as nv,bt as TF,cn as lE,ct as Op,dn as mF,dt as QE,en as io$1,et as Mv,f as ws$1,fn as mI,ft as Qh,g as $o$1,gt as Rn$1,hn as mi,ht as Rc,in as jp,jn as sg,jt as Wl$1,k as EF,kn as rs$1,kt as W,l as de$1,ln as lg,lt as PD,mn as mg,mt as Ra$1,n as Fl$1,nn as jh,o as Tn$1,on as kc,ot as OD,pt as RD,q as KE,qn as yg,qt as gF,r as Mu,rn as jl$1,rt as NE,s as Xs$1,sn as kp,st as Oc,t as Ds$1,tt as N,un as lh,ut as Pc,v as AE,vn as ng,vt as Si$1,w as Cr$1,wt as Up,x as Au,xn as oE,y as An$1,yn as nr$1,yt as Sp,z as HD,zn as wF,zt as ag}from"./main-NTKA6AMV.js";import{a as M,c as Ut$1,d as ie$1,f as vn,l as Vn$1,p as zt,s as Pe,t as $t$1}from"./chunk-BHXED-5R.js";function lt(i){return i.buttons===0||i.detail===0}function dt(i){let o=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var _i;function Xo(){if(_i==null){let i=typeof document<`u`?document.head:null;_i=!!(i&&(i.createShadowRoot||i.attachShadow))}return _i}function bi(i){if(Xo()){let o=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function de(i){if(i.composedPath)try{return i.composedPath()[0]}catch{}return i.target}var vi;try{vi=typeof Intl<`u`&&Intl.v8BreakIterator}catch{vi=!1}var G=(()=>{class i{_platformId=b(om);isBrowser=this._platformId?Fl$1(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||vi)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var Wt;function Ko(){if(Wt==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Wt=!0}))}finally{Wt=Wt||!1}return Wt}function Et(i){return Ko()?i:!!i.capture}function Ut(i,o=0){return Mn(i)?Number(i):arguments.length===2?o:0}function Mn(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Ue(i){return i instanceof vr$1?i.nativeElement:i}var qo=new N(`cdk-input-modality-detector-options`);var Zo={ignoreKeys:[18,17,224,91,16]};var $o=650;var yi={passive:!0,capture:!0};var Qo=(()=>{class i{_platform=b(G);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new An$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=de(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<$o||(this._modality.next(lt(e)?`keyboard`:`mouse`),this._mostRecentTarget=de(e))};_onTouchstart=e=>{if(dt(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=de(e)};constructor(){let e=b(be),t=b(nr$1),n=b(qo,{optional:!0});if(this._options=U(U({},Zo),n),this.modalityDetected=this._modality.pipe(vg(1)),this.modalityChanged=this.modalityDetected.pipe(ug()),this._platform.isBrowser){let r=b(pr$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,`keydown`,this._onKeydown,yi),r.listen(t,`mousedown`,this._onMousedown,yi),r.listen(t,`touchstart`,this._onTouchstart,yi)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var Yt=(function(i){return i[i.IMMEDIATE=0]=`IMMEDIATE`,i[i.EVENTUAL=1]=`EVENTUAL`,i})(Yt||{});var Jo=new N(`cdk-focus-monitor-default-options`);var Nn=Et({passive:!0,capture:!0});var Ye=(()=>{class i{_ngZone=b(be);_platform=b(G);_inputModalityDetector=b(Qo);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=b(nr$1);_stopInputModalityDetector=new Z;constructor(){let e=b(Jo,{optional:!0});this._detectionMode=e?.detectionMode||Yt.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=de(e);for(let n=t;n;n=n.parentElement)e.type===`focus`?this._onFocus(e,n):this._onBlur(e,n)};monitor(e,t=!1){let n=Ue(e);if(!this._platform.isBrowser||n.nodeType!==1)return Gh();let r=bi(n)||this._document,a=this._elementInfo.get(n);if(a)return t&&(a.checkChildren=!0),a.subject;let l={checkChildren:t,subject:new Z,rootNode:r};return this._elementInfo.set(n,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=Ue(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let r=Ue(e);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([l,m])=>this._originChanged(l,t,m)):(this._setOrigin(t),typeof r.focus==`function`&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===Yt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle(`cdk-focused`,!!t),e.classList.toggle(`cdk-touch-focused`,t===`touch`),e.classList.toggle(`cdk-keyboard-focused`,t===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,t===`mouse`),e.classList.toggle(`cdk-program-focused`,t===`program`)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&t,this._detectionMode===Yt.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?$o:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),r=de(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Nn),t.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Nn)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Eg(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Nn),t.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Nn),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!==`mouse`||!t||t===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var kn=new WeakMap;var fe=(()=>{class i{_appRef;_injector=b(he);_environmentInjector=b(ae);load(e){let t=this._appRef=this._appRef||this._injector.get(xi$1),n=kn.get(t);n||(n={loaders:new Set,refs:[]},kn.set(t,n),t.onDestroy(()=>{kn.get(t)?.refs.forEach(r=>r.destroy()),kn.delete(t)})),n.loaders.has(e)||(n.loaders.add(e),n.refs.push(TF(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var Gt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return i})();var En;function Va(){if(En===void 0&&(En=null,typeof window<`u`)){let i=window;if(i.trustedTypes!==void 0)try{En=i.trustedTypes.createPolicy(`angular#components`,{createHTML:o=>o})}catch(o){console.error(o)}}return En}function Ha(i){return Va()?.createHTML(i)||i}function er(i,o,e){i.innerHTML=Ha(e.sanitize(W.HTML,o)||``)}function Rt(i){return Array.isArray(i)?i:[i]}var tr=new Set;var ct;var Ot=(()=>{class i{_platform=b(G);_nonce=b(sm,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Wa}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ja(e,this._nonce),this._matchMedia(e)}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();function ja(i,o){if(!tr.has(i))try{ct||(ct=document.createElement(`style`),o&&ct.setAttribute(`nonce`,o),ct.setAttribute(`type`,`text/css`),document.head.appendChild(ct)),ct.sheet&&(ct.sheet.insertRule(`@media ${i.replace(/[{}]/g,``)} {body{ }}`,0),tr.add(i))}catch(e){console.error(e)}}function Wa(i){return{matches:i===`all`||i===``,media:i,addListener:()=>{},removeListener:()=>{}}}var Si=(()=>{class i{_mediaMatcher=b(Ot);_zone=b(be);_queries=new Map;_destroySubject=new Z;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return nr(Rt(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let r=ng(nr(Rt(e)).map(a=>this._registerQuery(a).observable));return r=io$1(r.pipe(rs$1(1)),r.pipe(vg(1),lg(0))),r.pipe(et$1(a=>{let l={matches:!1,breakpoints:{}};return a.forEach(({matches:m,query:f})=>{l.matches=l.matches||m,l.breakpoints[f]=m}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new _(a=>{let l=m=>this._zone.run(()=>a.next(m));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(jl$1(t),et$1(({matches:a})=>({query:e,matches:a})),Eg(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();function nr(i){return i.map(o=>o.split(`,`)).reduce((o,e)=>o.concat(e)).map(o=>o.trim())}var Ua=(()=>{class i{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var Rn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({providers:[Ua]})}return i})();var rr=new N(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var ar=new N(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Ya=0;var wi=(()=>{class i{_ngZone=b(be);_defaultOptions=b(ar,{optional:!0});_liveElement;_document=b(nr$1);_sanitizer=b(Xs$1);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=b(rr,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,r,a;return t.length===1&&typeof t[0]==`number`?a=t[0]:[r,a]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=n&&n.politeness?n.politeness:`polite`),a==null&&n&&(a=n.duration),this._liveElement.setAttribute(`aria-live`,r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:er(this._liveElement,e,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,t=this._document.getElementsByClassName(e),n=this._document.createElement(`div`);for(let r=0;r<t.length;r++)t[r].remove();return n.classList.add(e),n.classList.add(`cdk-visually-hidden`),n.setAttribute(`aria-atomic`,`true`),n.setAttribute(`aria-live`,`polite`),n.id=`cdk-live-announcer-${Ya++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let r=t[n],a=r.getAttribute(`aria-owns`);a?a.indexOf(e)===-1&&r.setAttribute(`aria-owns`,a+` `+e):r.setAttribute(`aria-owns`,e)}}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var nt=(function(i){return i[i.NONE=0]=`NONE`,i[i.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,i[i.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,i})(nt||{});var ir=`cdk-high-contrast-black-on-white`;var or=`cdk-high-contrast-white-on-black`;var xi=`cdk-high-contrast-active`;var sr=(()=>{class i{_platform=b(G);_hasCheckedHighContrastMode=!1;_document=b(nr$1);_breakpointSubscription;constructor(){this._breakpointSubscription=b(Si).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return nt.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||``).replace(/ /g,``);switch(e.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return nt.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return nt.BLACK_ON_WHITE}return nt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(xi,ir,or),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===nt.BLACK_ON_WHITE?e.add(xi,ir):t===nt.WHITE_ON_BLACK&&e.add(xi,or)}}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var Ci=(()=>{class i{constructor(){b(sr)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[Rn]})}return i})();var Ga=200;var On=class{_letterKeyStream=new Z;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Z;selectedItem=this._selectedItem;constructor(o,e){let t=typeof e?.debounceInterval==`number`?e.debounceInterval:Ga;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(o),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let e=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(wg(e=>this._pressedLetters.push(e)),lg(o),en$1(()=>this._pressedLetters.length>0),et$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let n=(this._selectedItemIndex+t)%this._items.length,r=this._items[n];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Ce(i,...o){return o.length?o.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Tt=class{_items;_activeItemIndex=Vo(-1);_activeItem=Vo(null);_wrap=!1;_typeaheadSubscription=V.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,e){this._items=o,o instanceof ri$1?this._itemChangesSubscription=o.changes.subscribe(t=>this._itemsChanged(t.toArray())):$o$1(o)&&(this._effectRef=Hu(()=>this._itemsChanged(o()),{injector:e}))}tabOut=new Z;change=new Z;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new On(e,{debounceInterval:typeof o==`number`?o:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,e=10){return this._pageUpAndDown={enabled:o,delta:e},this}setActiveItem(o){let e=this._activeItem();this.updateActiveItem(o),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(o){let e=o.keyCode,n=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(r=>!o[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&n){this.setNextItemActive();break}else return;case 38:if(this._vertical&&n){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&n){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&n){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&n){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&n){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&n){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&n){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(n||Ce(o,`shiftKey`))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let e=this._getItemsArray(),t=typeof o==`number`?o:e.indexOf(o),n=e[t];this._activeItem.set(n??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let n=(this._activeItemIndex()+o*t+e.length)%e.length,r=e[n];if(!this._skipPredicateFn(r)){this.setActiveItem(n);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,e){let t=this._getItemsArray();if(t[o]){for(;this._skipPredicateFn(t[o]);)if(o+=e,!t[o])return;this.setActiveItem(o)}}_getItemsArray(){return $o$1(this._items)?this._items():this._items instanceof ri$1?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let e=this._activeItem();if(e){let t=o.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var $t=class extends Tt{setActiveItem(o){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(o),this.activeItem&&this.activeItem.setActiveStyles()}};var Qt=class extends Tt{_origin=`program`;setFocusOrigin(o){return this._origin=o,this}setActiveItem(o){super.setActiveItem(o),this.activeItem&&this.activeItem.focus(this._origin)}};var dr=new Map;var pe=class i{_appId=b(ju);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,e=!1){this._appId!==`ng`&&(o+=this._appId);let t=dr.get(o);return t===void 0?t=0:t++,dr.set(o,t),`${o}${e?i._infix+`-`:``}${t}`}static ɵfac=function(e){return new(e||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})};var mr=` `;function Xa(i,o,e){let t=In(i,o);e=e.trim(),!t.some(n=>n.trim()===e)&&(t.push(e),i.setAttribute(o,t.join(mr)))}function Ka(i,o,e){let t=In(i,o);e=e.trim();let n=t.filter(r=>r!==e);n.length?i.setAttribute(o,n.join(mr)):i.removeAttribute(o)}function In(i,o){return i.getAttribute(o)?.match(/\S+/g)??[]}var ur=`cdk-describedby-message`;var Tn=`cdk-describedby-host`;var Mi=0;var Pn=(()=>{class i{_platform=b(G);_document=b(nr$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${Mi++}`;constructor(){b(fe).load(Gt),this._id=b(ju)+`-`+Mi++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;let r=Di(t,n);typeof t!=`string`?(cr(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;let r=Di(t,n);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t==`string`){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Tn}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Tn);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let n=this._document.createElement(`div`);cr(n,this._id),n.textContent=e,t&&n.setAttribute(`role`,t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(Di(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let n=this._document.createElement(`div`);n.style.visibility=`hidden`,n.classList.add(e),n.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){let t=In(e,`aria-describedby`).filter(n=>n.indexOf(ur)!=0);e.setAttribute(`aria-describedby`,t.join(` `))}_addMessageReference(e,t){let n=this._messageRegistry.get(t);Xa(e,`aria-describedby`,n.messageElement.id),e.setAttribute(Tn,this._id),n.referenceCount++}_removeMessageReference(e,t){let n=this._messageRegistry.get(t);n.referenceCount--,Ka(e,`aria-describedby`,n.messageElement.id),e.removeAttribute(Tn)}_isElementDescribedByMessage(e,t){let n=In(e,`aria-describedby`),r=this._messageRegistry.get(t),a=r&&r.messageElement.id;return!!a&&n.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t==`object`)return!0;let n=t==null?``:`${t}`.trim(),r=e.getAttribute(`aria-label`);return n?!r||r.trim()!==n:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();function Di(i,o){return typeof i==`string`?`${o||``}/${i}`:i}function cr(i,o){i.id||(i.id=`${ur}-${o}-${Mi++}`)}var mt;function hr(){if(mt==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return mt=!1,mt;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)mt=!0;else{let i=Element.prototype.scrollTo;i?mt=!/\{\s*\[native code\]\s*\}/.test(i.toString()):mt=!1}}return mt}function Ni(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var qa=new N(`MATERIAL_ANIMATIONS`);var fr=null;function Za(){return b(qa,{optional:!0})?.animationsDisabled||b(im,{optional:!0})===`NoopAnimations`?`di-disabled`:(fr??=b(Ot).matchMedia(`(prefers-reduced-motion)`).matches,fr?`reduced-motion`:`enabled`)}function ie(){return Za()!==`enabled`}function te(i){return i==null?``:typeof i==`string`?i:`${i}px`}function Jt(i){return i!=null&&`${i}`!=`false`}var Re=(function(i){return i[i.FADING_IN=0]=`FADING_IN`,i[i.VISIBLE=1]=`VISIBLE`,i[i.FADING_OUT=2]=`FADING_OUT`,i[i.HIDDEN=3]=`HIDDEN`,i})(Re||{});var ki=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Re.HIDDEN;constructor(o,e,t,n=!1){this._renderer=o,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}};var pr=Et({passive:!0,capture:!0});var Ei=class{_events=new Map;addHandler(o,e,t,n){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(n):r.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),o.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,pr)})}removeHandler(o,e,t){let n=this._events.get(o);if(!n)return;let r=n.get(e);r&&(r.delete(t),r.size===0&&n.delete(e),n.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,pr)))}_delegateEventHandler=o=>{let e=de(o);e&&this._events.get(o.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(r=>r.handleEvent(o))})}};var en={enterDuration:225,exitDuration:150};var $a=800;var gr=Et({passive:!0,capture:!0});var _r=[`mousedown`,`touchstart`];var br=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Qa=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})();var tn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ei;constructor(o,e,t,n,r){this._target=o,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=Ue(t)),r&&r.get(fe).load(Qa)}fadeInRipple(o,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=U(U({},en),t.animation);t.centered&&(o=n.left+n.width/2,e=n.top+n.height/2);let a=t.radius||Ja(o,e,n),l=o-n.left,m=e-n.top,f=r.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${l-a}px`,u.style.top=`${m-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${f}ms`,this._containerElement.appendChild(u);let g=window.getComputedStyle(u),N=g.transitionProperty,R=g.transitionDuration,J=N===`none`||R===`0s`||R===`0s, 0s`||n.width===0&&n.height===0,$=new ki(this,u,t,J);u.style.transform=`scale3d(1, 1, 1)`,$.state=Re.FADING_IN,t.persistent||(this._mostRecentTransientRipple=$);let oe=null;return!J&&(f||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ce=()=>{oe&&(oe.fallbackTimer=null),clearTimeout(so),this._finishRippleTransition($)},xt=()=>this._destroyRipple($),so=setTimeout(xt,f+100);u.addEventListener(`transitionend`,ce),u.addEventListener(`transitioncancel`,xt),oe={onTransitionEnd:ce,onTransitionCancel:xt,fallbackTimer:so}}),this._activeRipples.set($,oe),(J||!f)&&this._finishRippleTransition($),$}fadeOutRipple(o){if(o.state===Re.FADING_OUT||o.state===Re.HIDDEN)return;let e=o.element,t=U(U({},en),o.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity=`0`,o.state=Re.FADING_OUT,(o._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let e=Ue(o);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,_r.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(o){o.type===`mousedown`?this._onMousedown(o):o.type===`touchstart`?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{br.forEach(e=>{this._triggerElement.addEventListener(e,this,gr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===Re.FADING_IN?this._startFadeOutTransition(o):o.state===Re.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let e=o===this._mostRecentTransientRipple,{persistent:t}=o.config;o.state=Re.VISIBLE,!t&&(!e||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let e=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=Re.HIDDEN,e!==null&&(o.element.removeEventListener(`transitionend`,e.onTransitionEnd),o.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),o.element.remove()}_onMousedown(o){let e=lt(o),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+$a;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!dt(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=o.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let e=o.state===Re.VISIBLE||o.config.terminateOnPointerUp&&o.state===Re.FADING_IN;!o.config.persistent&&e&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(_r.forEach(e=>i._eventManager.removeHandler(e,o,this)),this._pointerUpEventsRegistered&&(br.forEach(e=>o.removeEventListener(e,this,gr)),this._pointerUpEventsRegistered=!1))}};function Ja(i,o,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(o-e.top),Math.abs(o-e.bottom));return Math.sqrt(t*t+n*n)}var Ri=new N(`mat-ripple-global-options`);var An=(()=>{class i{_elementRef=b(vr$1);_animationsDisabled=ie();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=b(be),t=b(G),n=b(Ri,{optional:!0}),r=b(he);this._globalOptions=n||{},this._rippleRenderer=new tn(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:U(U(U({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,t,U(U({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,U(U({},this.rippleConfig),e))}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(t,n){t&2&&Gp(`mat-ripple-unbounded`,n.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return i})();var es={capture:!0};var ts=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Oi=`mat-ripple-loader-uninitialized`;var Ti=`mat-ripple-loader-class-name`;var vr=`mat-ripple-loader-centered`;var Fn=`mat-ripple-loader-disabled`;var yr=(()=>{class i{_document=b(nr$1);_animationsDisabled=ie();_globalRippleOptions=b(Ri,{optional:!0});_platform=b(G);_ngZone=b(be);_injector=b(he);_eventCleanups;_hosts=new Map;constructor(){let e=b(pr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ts.map(t=>e.listen(this._document,t,this._onInteraction,es)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Oi,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(Ti))&&e.setAttribute(Ti,t.className||``),t.centered&&e.setAttribute(vr,``),t.disabled&&e.setAttribute(Fn,``)}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(Fn,``):e.removeAttribute(Fn)}_onInteraction=e=>{let t=de(e);if(t instanceof HTMLElement){let n=t.closest(`[${Oi}="${this._globalRippleOptions?.namespace??``}"]`);n&&this._createRipple(n)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(Ti)),e.append(t);let n=this._globalRippleOptions,r=this._animationsDisabled?0:n?.animation?.enterDuration??en.enterDuration,a=this._animationsDisabled?0:n?.animation?.exitDuration??en.exitDuration,l={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(Fn),rippleConfig:{centered:e.hasAttribute(vr),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},m=new tn(l,this._ngZone,t,this._platform,this._injector),f=!l.rippleDisabled;f&&m.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:m,hasSetUpEvents:f}),e.removeAttribute(Oi)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var it=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();var ns=[`*`,[[``,`progressIndicator`,``]]];var is=[`*`,`[progressIndicator]`];function os(i,o){i&1&&(Rc(0,`div`,1),QE(1,1),kc())}var rs=new N(`MAT_BUTTON_CONFIG`);function Sr(i){return i==null?void 0:DF(i)}var as=(()=>{class i{_elementRef=b(vr$1);_ngZone=b(be);_animationsDisabled=ie();_config=b(rs,{optional:!0});_focusMonitor=b(Ye);_cleanupClick;_renderer=b(Ra$1);_rippleLoader=b(yr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=hF(!1,{transform:EF});constructor(){b(fe).load(it);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(t,n){t&2&&(Sp(`disabled`,n._getDisabledAttribute())(`aria-disabled`,n._getAriaDisabled())(`tabindex`,n._getTabIndex()),uD(n.color?`mat-`+n.color:``),Gp(`mat-mdc-button-progress-indicator-shown`,n.showProgress())(`mat-mdc-button-disabled`,n.disabled)(`mat-mdc-button-disabled-interactive`,n.disabledInteractive)(`mat-unthemed`,!n.color)(`_mat-animation-noopable`,n._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,EF],disabled:[2,`disabled`,`disabled`,EF],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,EF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,EF],tabIndex:[2,`tabIndex`,`tabIndex`,Sr],_tabindex:[2,`tabindex`,`_tabindex`,Sr],showProgress:[1,`showProgress`]}})}return i})();var xr=(()=>{class i extends as{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Dp],ngContentSelectors:is,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,n){t&1&&(zE(ns),Op(0,`span`,0),QE(1),ME(2,os,2,0,`div`,1),Op(3,`span`,2)(4,`span`,3)),t&2&&(Mv(2),NE(n.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();var ss=new N(`cdk-dir-doc`,{providedIn:`root`,factory:()=>b(nr$1)});var ls=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function wr(i){let o=i?.toLowerCase()||``;return o===`auto`&&typeof navigator<`u`&&navigator?.language?ls.test(navigator.language)?`rtl`:`ltr`:o===`rtl`?`rtl`:`ltr`}var De=(()=>{class i{get value(){return this.valueSignal()}valueSignal=Vo(`ltr`);change=new Fe$1;constructor(){let e=b(ss,{optional:!0});if(e){let t=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(wr(t||n||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var K=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({})}return i})();var It=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[K]})}return i})();var Ln=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[It,K]})}return i})();var nn=class{_attachedHost=null;attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;o!=null&&(this._attachedHost=null,o.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o}};var on=class extends nn{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(o,e,t,n,r,a){super(),this.component=o,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=r||null,this.directives=a||null}};var ut=class extends nn{templateRef;viewContainerRef;context;injector;constructor(o,e,t,n){super(),this.templateRef=o,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(o,e=this.context){return this.context=e,super.attach(o)}detach(){return this.context=void 0,super.detach()}};var Ii=class extends nn{element;constructor(o){super(),this.element=o instanceof vr$1?o.nativeElement:o}};var Pi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(o){if(o instanceof on)return this._attachedPortal=o,this.attachComponentPortal(o);if(o instanceof ut)return this._attachedPortal=o,this.attachTemplatePortal(o);if(this.attachDomPortal&&o instanceof Ii)return this._attachedPortal=o,this.attachDomPortal(o)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(o){this._disposeFn=o}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var rn=class extends Pi{outletElement;_appRef;_defaultInjector;constructor(o,e,t){super(),this.outletElement=o,this._appRef=e,this._defaultInjector=t}attachComponentPortal(o){let e;if(o.viewContainerRef){let t=o.injector||o.viewContainerRef.injector,n=t.get(wn,null,{optional:!0})||void 0;e=o.viewContainerRef.createComponent(o.component,{index:o.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0,directives:o.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=o.injector||this._defaultInjector||he.NULL,r=n.get(ae,t.injector);e=TF(o.component,{elementInjector:n,environmentInjector:r,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0,directives:o.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=o,e}attachTemplatePortal(o){let e=o.viewContainerRef,t=e.createEmbeddedView(o.templateRef,o.context,{injector:o.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=o,t}attachDomPortal=o=>{let e=o.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=o,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(o){return o.hostView.rootNodes[0]}};var Cr=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({})}return i})();var an=class{};function sn(i){return i&&typeof i.connect==`function`&&!(i instanceof Ji$1)}var Ae=(function(i){return i[i.REPLACED=0]=`REPLACED`,i[i.INSERTED=1]=`INSERTED`,i[i.MOVED=2]=`MOVED`,i[i.REMOVED=3]=`REMOVED`,i})(Ae||{});var zn=class{viewCacheSize=20;_viewCache=[];applyChanges(o,e,t,n,r){o.forEachOperation((a,l,m)=>{let f,u;if(a.previousIndex==null){let g=()=>t(a,l,m);f=this._insertView(g,m,e,n(a)),u=f?Ae.INSERTED:Ae.REPLACED}else m==null?(this._detachAndCacheView(l,e),u=Ae.REMOVED):(f=this._moveView(l,m,e,n(a)),u=Ae.MOVED);r&&r({context:f?.context,operation:u,record:a})})}detach(){for(let o of this._viewCache)o.destroy();this._viewCache=[]}_insertView(o,e,t,n){let r=this._insertViewFromCache(e,t);if(r){r.context.$implicit=n;return}let a=o();return t.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(o,e){let t=e.detach(o);this._maybeCacheView(t,e)}_moveView(o,e,t,n){let r=t.get(o);return t.move(r,e),r.context.$implicit=n,r}_maybeCacheView(o,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(o);else{let t=e.indexOf(o);t===-1?o.destroy():e.remove(t)}}_insertViewFromCache(o,e){let t=this._viewCache.pop();return t&&e.insert(t,o),t||null}};var ms=20;var ht=(()=>{class i{_ngZone=b(be);_platform=b(G);_renderer=b(pr$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Z;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ms){return this._platform.isBrowser?new _(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(ag(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Gh()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(en$1(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let n=Ue(t),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var us=20;var Fe=(()=>{class i{_platform=b(G);_listeners;_viewportSize=null;_change=new Z;_document=b(nr$1);constructor(){let e=b(be),t=b(pr$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[t.listen(`window`,`resize`,n),t.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,left:-r.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0}}change(e=us){return e>0?this._change.pipe(ag(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var Mr=new N(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var Je=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({})}return i})();var ln=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[K,Je,K,Je]})}return i})();var Nr=hr();function Pr(i){return new Bn(i.get(Fe),i.get(nr$1))}var Bn=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(o,e){this._viewportRuler=o,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let o=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=o.style.left||``,this._previousHTMLStyles.top=o.style.top||``,o.style.left=te(-this._previousScrollPosition.left),o.style.top=te(-this._previousScrollPosition.top),o.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let o=this._document.documentElement,e=this._document.body,t=o.style,n=e.style,r=t.scrollBehavior||``,a=n.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,o.classList.remove(`cdk-global-scrollblock`),Nr&&(t.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Nr&&(t.scrollBehavior=r,n.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Ar(i,o){return new Vn(i.get(ht),i.get(be),i.get(Fe),o)}var Vn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(o,e,t,n){this._scrollDispatcher=o,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(this._scrollSubscription)return;let o=this._scrollDispatcher.scrolled(0).pipe(en$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=o.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=o.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var dn=class{enable(){}disable(){}attach(){}};function Fi(i,o){return o.some(e=>{let t=i.bottom<e.top,n=i.top>e.bottom,r=i.right<e.left,a=i.left>e.right;return t||n||r||a})}function kr(i,o){return o.some(e=>{let t=i.top<e.top,n=i.bottom>e.bottom,r=i.left<e.left,a=i.right>e.right;return t||n||r||a})}function et(i,o){return new Hn(i.get(ht),i.get(Fe),i.get(be),o)}var Hn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(o,e,t,n){this._scrollDispatcher=o,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(!this._scrollSubscription){let o=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(o).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();Fi(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Fr=(()=>{class i{_injector=b(he);noop=()=>new dn;close=e=>Ar(this._injector,e);block=()=>Pr(this._injector);reposition=e=>et(this._injector,e);static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var pt=class{positionStrategy;scrollStrategy=new dn;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(o){if(o){let e=Object.keys(o);for(let t of e)o[t]!==void 0&&(this[t]=o[t])}}};var jn=class{connectionPair;scrollableViewProperties;constructor(o,e){this.connectionPair=o,this.scrollableViewProperties=e}};var Lr=(()=>{class i{_attachedOverlays=[];_document=b(nr$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var zr=(()=>{class i extends Lr{_ngZone=b(be);_renderer=b(pr$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let r=t[n];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var Br=(()=>{class i extends Lr{_platform=b(G);_ngZone=b(be);_renderer=b(pr$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,`pointerdown`,this._pointerDownListener,n),r.listen(t,`click`,this._clickListener,n),r.listen(t,`auxclick`,this._clickListener,n),r.listen(t,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=de(e)};_clickListener=e=>{let t=de(e),n=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let l=r[a],m=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,m))){if(Er(l.overlayElement,t)||Er(l.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>m.next(e)):m.next(e)}}};static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();function Er(i,o){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=o;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Vr=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})();var Hr=(()=>{class i{_platform=b(G);_containerElement;_document=b(nr$1);_styleLoader=b(fe);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||Ni()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let t=this._document.createElement(`div`);t.classList.add(e),Ni()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Vr)}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var Li=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(o,e,t,n){this._renderer=e,this._ngZone=t,this.element=o.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let o=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(o,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),o.style.pointerEvents=`none`,o.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function zi(i){return i&&i.nodeType===1}var Ai=new Set;var Wn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Z;_attachments=new Z;_detachments=new Z;_positionStrategy;_scrollStrategy;_locationChanges=V.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Z;_outsidePointerEvents=new Z;_afterNextRenderRef;constructor(o,e,t,n,r,a,l,m,f,u=!1,g,N){this._portalOutlet=o,this._host=e,this._pane=t,this._config=n,this._ngZone=r,this._keyboardDispatcher=a,this._document=l,this._location=m,this._outsideClickDispatcher=f,this._animationsDisabled=u,this._injector=g,this._renderer=N,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(o){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(o);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Ai.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=nv(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let o=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),Ai.delete(this),o}dispose(){if(this._disposed)return;let o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,o&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Ai.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()))}updateSize(o){this._config=U(U({},this._config),o),this._updateElementSize()}setDirection(o){this._config=q(U({},this._config),{direction:o}),this._updateElementDirection()}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!0)}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!1)}getDirection(){let o=this._config.direction;return o?typeof o==`string`?o:o.value:`ltr`}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let o=this._pane.style;o.width=te(this._config.width),o.height=te(this._config.height),o.minWidth=te(this._config.minWidth),o.minHeight=te(this._config.minHeight),o.maxWidth=te(this._config.maxWidth),o.maxHeight=te(this._config.maxHeight)}_togglePointerEvents(o){this._pane.style.pointerEvents=o?``:`none`}_attachHost(){if(!this._host.parentElement){let o=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;zi(o)?o.after(this._host):o?.type===`parent`?o.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let o=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Li(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(o))}):this._backdropRef.element.classList.add(o)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(o,e,t){let n=Rt(e||[]).filter(r=>!!r);n.length&&(t?o.classList.add(...n):o.classList.remove(...n))}_detachContentWhenEmpty(){let o=!1;try{this._detachContentAfterRenderRef=nv(()=>{o=!0,this._detachContent()},{injector:this._injector})}catch(e){if(o)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let o=this._scrollStrategy;o?.disable(),o?.detach?.()}};var Rr=`cdk-overlay-connected-position-bounding-box`;var hs=/([A-Za-z%]+)$/;function gt(i,o){return new Un(o,i.get(Fe),i.get(nr$1),i.get(G),i.get(Hr))}var Un=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Z;_resizeSubscription=V.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(o,e,t,n,r){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=r,this.setOrigin(o)}attach(o){this._overlayRef&&this._overlayRef,this._validatePositions(),o.hostElement.classList.add(Rr),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let o=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,r=[],a;for(let l of this._preferredPositions){let m=this._getOriginPoint(o,n,l),f=this._getOverlayPoint(m,e,l),u=this._getOverlayFit(f,e,t,l);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,m);return}if(this._canFitWithFlexibleDimensions(u,f,t)){r.push({position:l,origin:m,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(m,l)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:f,originPoint:m,position:l,overlayRect:e})}if(r.length){let l=null,m=-1;for(let f of r){let u=f.boundingBoxRect.width*f.boundingBoxRect.height*(f.position.weight||1);u>m&&(m=u,l=f)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ft(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Rr),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let o=this._lastPosition;o?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(o,this._getOriginPoint(this._originRect,this._containerRect,o))):this.apply()}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,o.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=!0){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=!0){return this._growAfterOpen=o,this}withPush(o=!0){return this._canPush=o,this}withLockedPosition(o=!0){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}withPopoverLocation(o){return this._popoverLocation=o,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof vr$1?this._origin.nativeElement:zi(this._origin)?this._origin:null}_getOriginPoint(o,e,t){let n;if(t.originX==`center`)n=o.left+o.width/2;else{let a=this._isRtl()?o.right:o.left,l=this._isRtl()?o.left:o.right;n=t.originX==`start`?a:l}e.left<0&&(n-=e.left);let r;return t.originY==`center`?r=o.top+o.height/2:r=t.originY==`top`?o.top:o.bottom,e.top<0&&(r-=e.top),{x:n,y:r}}_getOverlayPoint(o,e,t){let n;t.overlayX==`center`?n=-e.width/2:t.overlayX===`start`?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let r;return t.overlayY==`center`?r=-e.height/2:r=t.overlayY==`top`?0:-e.height,{x:o.x+n,y:o.y+r}}_getOverlayFit(o,e,t,n){let r=Tr(e),{x:a,y:l}=o,m=this._getOffset(n,`x`),f=this._getOffset(n,`y`);m&&(a+=m),f&&(l+=f);let u=0-a,g=a+r.width-t.width,N=0-l,R=l+r.height-t.height,J=this._subtractOverflows(r.width,u,g),$=this._subtractOverflows(r.height,N,R),oe=J*$;return{visibleArea:oe,isCompletelyWithinViewport:r.width*r.height===oe,fitsInViewportVertically:$===r.height,fitsInViewportHorizontally:J==r.width}}_canFitWithFlexibleDimensions(o,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,r=t.right-e.x,a=Or(this._overlayRef.getConfig().minHeight),l=Or(this._overlayRef.getConfig().minWidth),m=o.fitsInViewportVertically||a!=null&&a<=n,f=o.fitsInViewportHorizontally||l!=null&&l<=r;return m&&f}return!1}_pushOverlayOnScreen(o,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};let n=Tr(e),r=this._viewportRect,a=Math.max(o.x+n.width-r.width,0),l=Math.max(o.y+n.height-r.height,0),m=Math.max(r.top-t.top-o.y,0),f=Math.max(r.left-t.left-o.x,0),u=0,g=0;return n.width<=r.width?u=f||-a:u=o.x<this._getViewportMarginStart()?r.left-t.left-o.x:0,n.height<=r.height?g=m||-l:g=o.y<this._getViewportMarginTop()?r.top-t.top-o.y:0,this._previousPushAmount={x:u,y:g},{x:o.x+u,y:o.y+g}}_applyPosition(o,e){if(this._setTransformOrigin(o),this._setOverlayElementStyles(e,o),this._setBoundingBoxStyles(e,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(o!==this._lastPosition||!this._lastScrollVisibility||!fs(this._lastScrollVisibility,t)){let n=new jn(o,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=o,this._isInitialRender=!1}_setTransformOrigin(o){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=o.overlayY;o.overlayX===`center`?t=`center`:this._isRtl()?t=o.overlayX===`start`?`right`:`left`:t=o.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(o,e){let t=this._viewportRect,n=this._isRtl(),r,a,l;if(e.overlayY===`top`)a=o.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=t.height-o.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else{let R=Math.min(t.bottom-o.y+t.top,o.y),J=this._lastBoundingBoxSize.height;r=R*2,a=o.y-R,r>J&&!this._isInitialRender&&!this._growAfterOpen&&(a=o.y-J/2)}let m=e.overlayX===`start`&&!n||e.overlayX===`end`&&n,f=e.overlayX===`end`&&!n||e.overlayX===`start`&&n,u,g,N;if(f)N=t.width-o.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=o.x-this._getViewportMarginStart();else if(m)g=o.x,u=t.right-o.x-this._getViewportMarginEnd();else{let R=Math.min(t.right-o.x+t.left,o.x),J=this._lastBoundingBoxSize.width;u=R*2,g=o.x-R,u>J&&!this._isInitialRender&&!this._growAfterOpen&&(g=o.x-J/2)}return{top:a,left:g,bottom:l,right:N,width:u,height:r}}_setBoundingBoxStyles(o,e){let t=this._calculateBoundingBoxRect(o,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;n.width=te(t.width),n.height=te(t.height),n.top=te(t.top)||`auto`,n.bottom=te(t.bottom)||`auto`,n.left=te(t.left)||`auto`,n.right=te(t.right)||`auto`,e.overlayX===`center`?n.alignItems=`center`:n.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(n.maxHeight=te(r)),a&&(n.maxWidth=te(a))}this._lastBoundingBoxSize=t,ft(this._boundingBox.style,n)}_resetBoundingBoxStyles(){ft(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){ft(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(o,e){let t={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(n){let u=this._viewportRuler.getViewportScrollPosition();ft(t,this._getExactOverlayY(e,o,u)),ft(t,this._getExactOverlayX(e,o,u))}else t.position=`static`;let l=``,m=this._getOffset(e,`x`),f=this._getOffset(e,`y`);m&&(l+=`translateX(${m}px) `),f&&(l+=`translateY(${f}px)`),t.transform=l.trim(),a.maxHeight&&(n?t.maxHeight=te(a.maxHeight):r&&(t.maxHeight=``)),a.maxWidth&&(n?t.maxWidth=te(a.maxWidth):r&&(t.maxWidth=``)),ft(this._pane.style,t)}_getExactOverlayY(o,e,t){let n={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,o);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),o.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else n.top=te(r.y);return n}_getExactOverlayX(o,e,t){let n={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,o);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=o.overlayX===`end`?`left`:`right`:a=o.overlayX===`end`?`right`:`left`,a===`right`)n.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else n.left=te(r.x);return n}_getScrollVisibility(){let o=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:kr(o,t),isOriginOutsideView:Fi(o,t),isOverlayClipped:kr(e,t),isOverlayOutsideView:Fi(e,t)}}_subtractOverflows(o,...e){return e.reduce((t,n)=>t-Math.max(n,0),o)}_getNarrowedViewportRect(){let o=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+o-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:o-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(o,e){return e===`x`?o.offsetX==null?this._offsetX:o.offsetX:o.offsetY==null?this._offsetY:o.offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&Rt(o).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let o=this._origin;if(o instanceof vr$1)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();let e=o.width||0,t=o.height||0;return{top:o.y,bottom:o.y+t,left:o.x,right:o.x+e,height:t,width:e}}_getContainerRect(){let o=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();o&&(e.style.display=`block`);let t=e.getBoundingClientRect();return o&&(e.style.display=``),t}};function ft(i,o){for(let e in o)o.hasOwnProperty(e)&&(i[e]=o[e]);return i}function Or(i){if(typeof i!=`number`&&i!=null){let[o,e]=i.split(hs);return!e||e===`px`?parseFloat(o):null}return i||null}function Tr(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function fs(i,o){return i===o?!0:i.isOriginClipped===o.isOriginClipped&&i.isOriginOutsideView===o.isOriginOutsideView&&i.isOverlayClipped===o.isOverlayClipped&&i.isOverlayOutsideView===o.isOverlayOutsideView}var Ir=`cdk-global-overlay-wrapper`;function jr(i){return new Yn}var Yn=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(o){let e=o.getConfig();this._overlayRef=o,this._width&&!e.width&&o.updateSize({width:this._width}),this._height&&!e.height&&o.updateSize({height:this._height}),o.hostElement.classList.add(Ir),this._isDisposed=!1}top(o=``){return this._bottomOffset=``,this._topOffset=o,this._alignItems=`flex-start`,this}left(o=``){return this._xOffset=o,this._xPosition=`left`,this}bottom(o=``){return this._topOffset=``,this._bottomOffset=o,this._alignItems=`flex-end`,this}right(o=``){return this._xOffset=o,this._xPosition=`right`,this}start(o=``){return this._xOffset=o,this._xPosition=`start`,this}end(o=``){return this._xOffset=o,this._xPosition=`end`,this}width(o=``){return this._overlayRef?this._overlayRef.updateSize({width:o}):this._width=o,this}height(o=``){return this._overlayRef?this._overlayRef.updateSize({height:o}):this._height=o,this}centerHorizontally(o=``){return this.left(o),this._xPosition=`center`,this}centerVertically(o=``){return this.top(o),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:n,height:r,maxWidth:a,maxHeight:l}=this._overlayRef.getConfig(),m=(n===`100%`||n===`100vw`)&&(!a||a===`100%`||a===`100vw`),f=(r===`100%`||r===`100vh`)&&(!l||l===`100%`||l===`100vh`),u=this._xPosition,g=this._xOffset,N=this._overlayRef.getConfig().direction===`rtl`,R=``,J=``,$=``;m?$=`flex-start`:u===`center`?($=`center`,N?J=g:R=g):N?u===`left`||u===`end`?($=`flex-end`,R=g):(u===`right`||u===`start`)&&($=`flex-start`,J=g):u===`left`||u===`start`?($=`flex-start`,R=g):(u===`right`||u===`end`)&&($=`flex-end`,J=g),o.position=this._cssPosition,o.marginLeft=m?`0`:R,o.marginTop=f?`0`:this._topOffset,o.marginBottom=this._bottomOffset,o.marginRight=m?`0`:J,e.justifyContent=$,e.alignItems=f?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Ir),t.justifyContent=t.alignItems=o.marginTop=o.marginBottom=o.marginLeft=o.marginRight=o.position=``,this._overlayRef=null,this._isDisposed=!0}};var Wr=(()=>{class i{_injector=b(he);global(){return jr()}flexibleConnectedTo(e){return gt(this._injector,e)}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var cn=new N(`OVERLAY_DEFAULT_CONFIG`);function _t(i,o){i.get(fe).load(Vr);let e=i.get(Hr),t=i.get(nr$1),n=i.get(pe),r=i.get(xi$1),a=i.get(De),l=i.get(Ra$1,null,{optional:!0})||i.get(pr$1).createRenderer(null,null),m=new pt(o),f=i.get(cn,null,{optional:!0})?.usePopover??!0;m.direction=m.direction||a.value,!t.body||!(`showPopover`in t.body)?m.usePopover=!1:m.usePopover=o?.usePopover??f;let u=t.createElement(`div`),g=t.createElement(`div`);u.id=n.getId(`cdk-overlay-`),u.classList.add(`cdk-overlay-pane`),g.appendChild(u),m.usePopover&&(g.setAttribute(`popover`,`manual`),g.classList.add(`cdk-overlay-popover`));let N=m.usePopover?m.positionStrategy?.getPopoverInsertionPoint?.():null;return zi(N)?N.after(g):N?.type===`parent`?N.element.appendChild(g):e.getContainerElement().appendChild(g),new Wn(new rn(u,r,i),g,u,m,i.get(be),i.get(zr),t,i.get(de$1),i.get(Br),o?.disableAnimations??i.get(im,null,{optional:!0})===`NoopAnimations`,i.get(ae),l)}var Ur=(()=>{class i{scrollStrategies=b(Fr);_positionBuilder=b(Wr);_injector=b(he);create(e){return _t(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var ps=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var gs=new N(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=b(he);return()=>et(i)}});var Pt=(()=>{class i{elementRef=b(vr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return i})();var Yr=new N(`cdk-connected-overlay-default-config`);var Gn=(()=>{class i{_dir=b(De,{optional:!0});_injector=b(he);_overlayRef;_templatePortal;_backdropSubscription=V.EMPTY;_attachSubscription=V.EMPTY;_detachSubscription=V.EMPTY;_positionSubscription=V.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=b(gs);_ngZone=b(be);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new Fe$1;positionChange=new Fe$1;attach=new Fe$1;detach=new Fe$1;overlayKeydown=new Fe$1;overlayOutsideClick=new Fe$1;constructor(){let e=b(fr$1),t=b(Si$1),n=b(Yr,{optional:!0}),r=b(cn,{optional:!0});this.usePopover=r?.usePopover===!1?null:`global`,this._templatePortal=new ut(e,t),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=ps);let e=this._overlayRef=_t(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ce(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let n=this._getOriginElement(),r=de(t);(!n||n!==r&&!n.contains(r))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new pt({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=gt(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Pt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Pt?this.origin.elementRef.nativeElement:this.origin instanceof vr$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Dg(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,EF],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,EF],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,EF],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,EF],push:[2,`cdkConnectedOverlayPush`,`push`,EF],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,EF],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,EF],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[Dm]})}return i})();var bt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({providers:[Ur],imports:[K,Cr,ln,ln]})}return i})();var _s=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var bs=[`mat-icon, [matMenuItemIcon]`,`*`];function vs(i,o){i&1&&(xu(),mi(0,`svg`,2),Ap(1,`polygon`,3),Oc())}var ys=[`*`];function Ss(i,o){if(i&1){let e=FE();Rc(0,`div`,0),jp(`click`,function(){mu(e);return yu(WE().closed.emit(`click`))})(`animationstart`,function(n){mu(e);return yu(WE()._onAnimationStart(n.animationName))})(`animationend`,function(n){mu(e);return yu(WE()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){mu(e);return yu(WE()._onAnimationDone(n.animationName))}),Rc(1,`div`,1),QE(2),kc()()}if(i&2){let e=WE();uD(e._classList),Gp(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),Lp(`id`,e.panelId),Sp(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var Vi=new N(`MAT_MENU_PANEL`);var mn=(()=>{class i{_elementRef=b(vr$1);_document=b(nr$1);_focusMonitor=b(Ye);_parentMenu=b(Vi,{optional:!0});_changeDetectorRef=b(vF);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new Z;_focused=new Z;_highlighted=!1;_triggersSubmenu=!1;constructor(){b(fe).load(it),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&Fp(`click`,function(a){return n._checkDisabled(a)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Sp(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),Gp(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,EF],disableRipple:[2,`disableRipple`,`disableRipple`,EF]},exportAs:[`matMenuItem`],ngContentSelectors:bs,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(zE(_s),QE(0),mi(1,`span`,0),QE(2,1),Oc(),Ap(3,`div`,1),ME(4,vs,2,0,`:svg:svg`,2)),t&2&&(Mv(3),xp(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),Mv(),NE(n._triggersSubmenu?4:-1))},dependencies:[An],encapsulation:2})}return i})();var xs=new N(`MatMenuContent`);var ws=new N(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var Bi=`_mat-menu-enter`;var Xn=`_mat-menu-exit`;var Lt=(()=>{class i{_elementRef=b(vr$1);_changeDetectorRef=b(vF);_injector=b(he);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ie();_allItems;_directDescendantItems=new ri$1;_classList={};_panelAnimationState=`void`;_animationDone=new Z;_isAnimating=Vo(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=U({},this._classList);t&&t.length&&t.split(` `).forEach(r=>{n[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Fe$1;close=this.closed;panelId=b(pe).getId(`mat-menu-panel-`);constructor(){let e=b(ws);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Qt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(jl$1(this._directDescendantItems),Ig(e=>sg(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(jl$1(this._directDescendantItems),Ig(t=>sg(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Ce(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=nv(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=q(U({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Xn;(t||e===Bi)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Bi||e===Xn)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Xn),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Bi:Xn)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(jl$1(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`mat-menu`]],contentQueries:function(t,n,r){if(t&1&&Hp(r,xs,5)(r,mn,5)(r,mn,4),t&2){let a;YE(a=KE())&&(n.lazyContent=a.first),YE(a=KE())&&(n._allItems=a),YE(a=KE())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&Bp(fr$1,5),t&2){let r;YE(r=KE())&&(n.templateRef=r.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Sp(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,EF],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:EF(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[OD([{provide:Vi,useExisting:i}])],ngContentSelectors:ys,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(zE(),Cp(0,Ss,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return i})();var Cs=new N(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=b(he);return()=>et(i)}});var Ft=new WeakMap;var Ds=(()=>{class i{_canHaveBackdrop;_element=b(vr$1);_viewContainerRef=b(Si$1);_menuItemInstance=b(mn,{optional:!0,self:!0});_dir=b(De,{optional:!0});_focusMonitor=b(Ye);_ngZone=b(be);_injector=b(he);_scrollStrategy=b(Cs);_changeDetectorRef=b(vF);_animationsDisabled=ie();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=V.EMPTY;_menuCloseSubscription=V.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=b(Vi,{optional:!0});this._parentMaterialMenu=t instanceof Lt?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Ft.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=Ft.get(t);Ft.set(t,this),n&&n!==this&&n._closeMenu();let r=this._createOverlay(t),a=r.getConfig(),l=a.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof Lt&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Eg(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof Lt&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(rs$1(1)).subscribe(()=>{t.detach(),Ft.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&Ft.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=_t(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof Lt&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new pt({positionStrategy:gt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let r=n.connectionPair.overlayX===`start`?`after`:`before`,a=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(r,a)})})}_setPosition(e,t){let[n,r]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[a,l]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[m,f]=[a,l],[u,g]=[n,r],N=0;if(this._triggersSubmenu()){if(g=n=e.xPosition===`before`?`start`:`end`,r=u=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let R=this._parentMaterialMenu.items.first;this._parentInnerPadding=R?R._getHostElement().offsetTop:0}N=a===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(m=a===`top`?`bottom`:`top`,f=l===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:m,overlayX:u,overlayY:a,offsetY:N},{originX:r,originY:m,overlayX:g,overlayY:a,offsetY:N},{originX:n,originY:f,overlayX:u,overlayY:l,offsetY:-N},{originX:r,originY:f,overlayX:g,overlayY:l,offsetY:-N}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return sg(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:Gh(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(en$1(a=>this._menuOpen&&a!==this._menuItemInstance)):Gh(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ut(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Ft.get(e)===this}_triggerIsAriaDisabled(){return EF(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){wI()};static ɵdir=lE({type:i})}return i})();var Gr=(()=>{class i extends Ds{_cleanupTouchstart;_hoverSubscription=V.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Fe$1;onMenuOpen=this.menuOpened;menuClosed=new Fe$1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=b(Ra$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{dt(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){lt(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Fp(`click`,function(a){return n._handleClick(a)})(`mousedown`,function(a){return n._handleMousedown(a)})(`keydown`,function(a){return n._handleKeydown(a)}),t&2&&Sp(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Dp]})}return i})();var Xr=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[It,bt,K,Je]})}return i})();var Hi=class{_box;_destroyed=new Z;_resizeSubject=new Z;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new _(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),t.unsubscribe(),this._elementObservables.delete(o)}}).pipe(en$1(e=>e.some(t=>t.target===o)),yg({bufferSize:1,refCount:!0}),Eg(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Kr=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=b(be);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||`content-box`;return this._observers.has(n)||this._observers.set(n,new Hi(n)),this._observers.get(n).observe(e)}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var Ns=[`notch`];var ks=[`*`];var qr=[`iconPrefixContainer`];var Zr=[`textPrefixContainer`];var $r=[`iconSuffixContainer`];var Qr=[`textSuffixContainer`];var Es=[`textField`];var Rs=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var Os=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function Ts(i,o){i&1&&Ap(0,`span`,21)}function Is(i,o){if(i&1&&(mi(0,`label`,20),QE(1,1),ME(2,Ts,1,0,`span`,21),Oc()),i&2){let e=WE(2);xp(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Sp(`for`,e._control.disableAutomaticLabeling?null:e._control.id),Mv(2),NE(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ps(i,o){if(i&1&&ME(0,Is,3,5,`label`,20),i&2)NE(WE()._hasFloatingLabel()?0:-1)}function As(i,o){i&1&&Ap(0,`div`,7)}function Fs(i,o){}function Ls(i,o){if(i&1&&Tp(0,Fs,0,0,`ng-template`,13),i&2){WE(2);xp(`ngTemplateOutlet`,XE(1))}}function zs(i,o){if(i&1&&(mi(0,`div`,9),ME(1,Ls,1,1,null,13),Oc()),i&2){let e=WE();xp(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),Mv(),NE(e._forceDisplayInfixLabel()?-1:1)}}function Bs(i,o){i&1&&(mi(0,`div`,10,2),QE(2,2),Oc())}function Vs(i,o){i&1&&(mi(0,`div`,11,3),QE(2,3),Oc())}function Hs(i,o){}function js(i,o){if(i&1&&Tp(0,Hs,0,0,`ng-template`,13),i&2){WE();xp(`ngTemplateOutlet`,XE(1))}}function Ws(i,o){i&1&&(mi(0,`div`,14,4),QE(2,4),Oc())}function Us(i,o){i&1&&(mi(0,`div`,15,5),QE(2,5),Oc())}function Ys(i,o){i&1&&Ap(0,`div`,16)}function Gs(i,o){i&1&&(mi(0,`div`,18),QE(1,6),Oc())}function Xs(i,o){if(i&1&&(mi(0,`mat-hint`,22),wD(1),Oc()),i&2){let e=WE(2);xp(`id`,e._hintLabelId),Mv(),Kp(e.hintLabel)}}function Ks(i,o){if(i&1&&(mi(0,`div`,19),ME(1,Xs,2,2,`mat-hint`,22),QE(2,7),Ap(3,`div`,23),QE(4,8),Oc()),i&2){let e=WE();Mv(),NE(e.hintLabel?1:-1)}}var ji=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[`mat-label`]]})}return i})();var qs=new N(`MatError`);var Wi=(()=>{class i{align=`start`;id=b(pe).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,n){t&2&&(Lp(`id`,n.id),Sp(`align`,null),Gp(`mat-mdc-form-field-hint-end`,n.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var Zs=new N(`MatPrefix`);var $s=new N(`MatSuffix`);var ra=new N(`FloatingLabelParent`);var Jr=(()=>{class i{_elementRef=b(vr$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=b(Kr);_ngZone=b(be);_parent=b(ra);_resizeSubscription=new V;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Qs(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,n){t&2&&Gp(`mdc-floating-label--float-above`,n.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function Qs(i){let o=i;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var ea=`mdc-line-ripple--active`;var Kn=`mdc-line-ripple--deactivating`;var ta=(()=>{class i{_elementRef=b(vr$1);_cleanupTransitionEnd;constructor(){let e=b(be),t=b(Ra$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Kn),e.add(ea)}deactivate(){this._elementRef.nativeElement.classList.add(Kn)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(Kn);e.propertyName===`opacity`&&n&&t.remove(ea,Kn)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var na=(()=>{class i{_elementRef=b(vr$1);_ngZone=b(be);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(t,n){if(t&1&&Bp(Ns,5),t&2){let r;YE(r=KE())&&(n._notch=r.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(t,n){t&2&&Gp(`mdc-notched-outline--notched`,n.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:ks,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(t,n){t&1&&(zE(),Op(0,`div`,1),Rc(1,`div`,2,0),QE(3),kc(),Op(4,`div`,3))},encapsulation:2})}return i})();var Ui=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i})}return i})();var Yi=new N(`MatFormField`);var Js=new N(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ia=`fill`;var el=`auto`;var oa=`fixed`;var tl=`translateY(-50%)`;var qn=(()=>{class i{_elementRef=b(vr$1);_changeDetectorRef=b(vF);_platform=b(G);_idGenerator=b(pe);_ngZone=b(be);_defaults=b(Js,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=gF(`iconPrefixContainer`);_textPrefixContainerSignal=gF(`textPrefixContainer`);_iconSuffixContainerSignal=gF(`iconSuffixContainer`);_textSuffixContainerSignal=gF(`textSuffixContainer`);_prefixSuffixContainers=qD(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=mF(ji);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Jt(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||el}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||ia;this._appearanceSignal.set(t)}_appearanceSignal=Vo(ia);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||oa}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||oa}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Z;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ie();constructor(){let e=this._defaults,t=b(De);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Hu(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=qD(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,n=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(jl$1([void 0,void 0]),et$1(()=>[t.errorState,t.userAriaDescribedBy]),mg(),en$1(([[r,a],[l,m]])=>r!==l||a!==m)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Eg(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),sg(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){wF({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=qD(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let r=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,a=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,n;if(t){let r=this._describedByIds||e;n=e.concat(t.filter(a=>a&&!r.includes(a)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,m=n?.getBoundingClientRect().width??0,f=r?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${tl} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+l+m+f]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`mat-form-field`]],contentQueries:function(t,n,r){if(t&1&&($p(r,n._labelChild,ji,5),Hp(r,Ui,5)(r,Zs,5)(r,$s,5)(r,qs,5)(r,Wi,5)),t&2){JE();let a;YE(a=KE())&&(n._formFieldControl=a.first),YE(a=KE())&&(n._prefixChildren=a),YE(a=KE())&&(n._suffixChildren=a),YE(a=KE())&&(n._errorChildren=a),YE(a=KE())&&(n._hintChildren=a)}},viewQuery:function(t,n){if(t&1&&(Up(n._iconPrefixContainerSignal,qr,5)(n._textPrefixContainerSignal,Zr,5)(n._iconSuffixContainerSignal,$r,5)(n._textSuffixContainerSignal,Qr,5),Bp(Es,5)(qr,5)(Zr,5)($r,5)(Qr,5)(Jr,5)(na,5)(ta,5)),t&2){JE(4);let r;YE(r=KE())&&(n._textField=r.first),YE(r=KE())&&(n._iconPrefixContainer=r.first),YE(r=KE())&&(n._textPrefixContainer=r.first),YE(r=KE())&&(n._iconSuffixContainer=r.first),YE(r=KE())&&(n._textSuffixContainer=r.first),YE(r=KE())&&(n._floatingLabel=r.first),YE(r=KE())&&(n._notchedOutline=r.first),YE(r=KE())&&(n._lineRipple=r.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(t,n){t&2&&Gp(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._control.errorState)(`mat-form-field-disabled`,n._control.disabled)(`mat-form-field-autofilled`,n._control.autofilled)(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[OD([{provide:Yi,useExisting:i},{provide:ra,useExisting:i}])],ngContentSelectors:Os,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(t,n){if(t&1&&(zE(Rs),Tp(0,Ps,1,1,`ng-template`,null,0,HD),mi(2,`div`,6,1),Fp(`click`,function(a){return n._control.onContainerClick(a)}),ME(4,As,1,0,`div`,7),mi(5,`div`,8),ME(6,zs,2,2,`div`,9),ME(7,Bs,3,0,`div`,10),ME(8,Vs,3,0,`div`,11),mi(9,`div`,12),ME(10,js,1,1,null,13),QE(11),Oc(),ME(12,Ws,3,0,`div`,14),ME(13,Us,3,0,`div`,15),Oc(),ME(14,Ys,1,0,`div`,16),Oc(),mi(15,`div`,17),ME(16,Gs,2,0,`div`,18)(17,Ks,5,1,`div`,19),Oc()),t&2){let r;Mv(2),Gp(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,n._control.disabled)(`mdc-text-field--invalid`,n._control.errorState),Mv(2),NE(!n._hasOutline()&&!n._control.disabled?4:-1),Mv(2),NE(n._hasOutline()?6:-1),Mv(),NE(n._hasIconPrefix?7:-1),Mv(),NE(n._hasTextPrefix?8:-1),Mv(2),NE(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),Mv(2),NE(n._hasTextSuffix?12:-1),Mv(),NE(n._hasIconSuffix?13:-1),Mv(),NE(n._hasOutline()?-1:14),Mv(),Gp(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let a=n._getSubscriptMessageType();Mv(),NE((r=a)===`error`?16:r===`hint`?17:-1)}},dependencies:[Jr,na,Ds$1,ta,Wi],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return i})();var un=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Z;bulk={select:o=>this._select(o),deselect:o=>this._deselect(o),setSelection:o=>this._setSelection(o)};constructor(o=!1,e,t=!0,n){this._multiple=o,this._emitChanges=t,this.compareWith=n,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){return this._select(o)}deselect(...o){return this._deselect(o)}setSelection(...o){return this._setSelection(o)}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_select(o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var Zn=class{applyChanges(o,e,t,n,r){o.forEachOperation((a,l,m)=>{let f,u;if(a.previousIndex==null){let g=t(a,l,m);f=e.createEmbeddedView(g.templateRef,g.context,g.index),u=Ae.INSERTED}else m==null?(e.remove(l),u=Ae.REMOVED):(f=e.get(l),e.move(f,m),u=Ae.MOVED);r&&r({context:f?.context,operation:u,record:a})})}detach(){}};var aa=new N(``);var sa=(()=>{class i{_animationsDisabled=ie();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,n){t&2&&Gp(`mat-pseudo-checkbox-indeterminate`,n.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,n.state===`checked`)(`mat-pseudo-checkbox-disabled`,n.disabled)(`mat-pseudo-checkbox-minimal`,n.appearance===`minimal`)(`mat-pseudo-checkbox-full`,n.appearance===`full`)(`_mat-animation-noopable`,n._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var nl=[`text`];var il=[[[`mat-icon`]],`*`];var ol=[`mat-icon`,`*`];function rl(i,o){if(i&1&&Ap(0,`mat-pseudo-checkbox`,1),i&2){let e=WE();xp(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function al(i,o){if(i&1&&Ap(0,`mat-pseudo-checkbox`,3),i&2)xp(`disabled`,WE().disabled)}function sl(i,o){if(i&1&&(mi(0,`span`,4),wD(1),Oc()),i&2){let e=WE();Mv(),Fc(`(`,e.group.label,`)`)}}var Xi=new N(`MAT_OPTION_PARENT_COMPONENT`);var Ki=new N(`MatOptgroup`);var Gi=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}};var ot=(()=>{class i{_element=b(vr$1);_changeDetectorRef=b(vF);_parent=b(Xi,{optional:!0});group=b(Ki,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=b(pe).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Vo(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Fe$1;_text;_stateChanges=new Z;constructor(){let e=b(fe);e.load(it),e.load(Gt),this._signalDisableRipple=!!this._parent&&$o$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus==`function`&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ce(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Gi(this,e))}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`mat-option`]],viewQuery:function(t,n){if(t&1&&Bp(nl,7),t&2){let r;YE(r=KE())&&(n._text=r.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,n){t&1&&Fp(`click`,function(){return n._selectViaInteraction()})(`keydown`,function(a){return n._handleKeydown(a)}),t&2&&(Lp(`id`,n.id),Sp(`aria-selected`,n.selected)(`aria-disabled`,n.disabled.toString()),Gp(`mdc-list-item--selected`,n.selected)(`mat-mdc-option-multiple`,n.multiple)(`mat-mdc-option-active`,n.active)(`mdc-list-item--disabled`,n.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,EF]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:ol,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,n){t&1&&(zE(il),ME(0,rl,1,2,`mat-pseudo-checkbox`,1),QE(1),mi(2,`span`,2,0),QE(4,1),Oc(),ME(5,al,1,1,`mat-pseudo-checkbox`,3),ME(6,sl,2,1,`span`,4),Ap(7,`div`,5)),t&2&&(NE(n.multiple?0:-1),Mv(5),NE(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),Mv(),NE(n.group&&n.group._inert?6:-1),Mv(),xp(`matRippleTrigger`,n._getHostElement())(`matRippleDisabled`,n.disabled||n.disableRipple))},dependencies:[sa,An],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return i})();function la(i,o,e){if(e.length){let t=o.toArray(),n=e.toArray(),r=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===n[r]&&r++;return r}return 0}function da(i,o,e,t){return i<e?i:i+o>e+t?Math.max(0,i-t+o):e}var ca=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),n=e().touched();return t&&n}static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var $n=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(o,e,t,n,r){this._defaultMatcher=o,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=r,e?$o$1(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let o=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==o&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(o){if(this.formField&&o?.isSignalErrorState)return o.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return o?.isErrorState(t,e)??!1}};var ma=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[Rn,qn,K]})}return i})();var ua=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[K]})}return i})();var qi=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[It,ua,ot,K]})}return i})();var ll=[`trigger`];var dl=[`panel`];var cl=[[[`mat-select-trigger`]],`*`];var ml=[`mat-select-trigger`,`*`];function ul(i,o){if(i&1&&(mi(0,`span`,4),wD(1),Oc()),i&2){let e=WE();Mv(),Kp(e.placeholder)}}function hl(i,o){i&1&&QE(0)}function fl(i,o){if(i&1&&(mi(0,`span`,11),wD(1),Oc()),i&2){let e=WE(2);Mv(),Kp(e.triggerValue)}}function pl(i,o){if(i&1&&(mi(0,`span`,5),ME(1,hl,1,0)(2,fl,2,1,`span`,11),Oc()),i&2){let e=WE();Mv(),NE(e.customTrigger?1:2)}}function gl(i,o){if(i&1){let e=FE();mi(0,`div`,12,1),Fp(`keydown`,function(n){mu(e);return yu(WE()._handleKeydown(n))}),QE(2,1),Oc()}if(i&2){let e=WE();uD(e.panelClass),Gp(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Sp(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var _l=new N(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=b(he);return()=>et(i)}});var bl=new N(`MAT_SELECT_CONFIG`);var vl=new N(`MatSelectTrigger`);var Zi=class{source;value;constructor(o,e){this.source=o,this.value=e}};var Qn=(()=>{class i{_viewportRuler=b(Fe);_changeDetectorRef=b(vF);_elementRef=b(vr$1);_dir=b(De,{optional:!0});_idGenerator=b(pe);_renderer=b(Ra$1);_parentFormField=b(Yi,{optional:!0});ngControl=b(M,{self:!0,optional:!0});_liveAnnouncer=b(wi);_defaultOptions=b(bl,{optional:!0});_animationsDisabled=ie();_popoverLocation;_initialized=new Z;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,r=la(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&r===1?n.scrollTop=0:n.scrollTop=da(a.offsetTop,a.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Zi(this,e)}_scrollStrategyFactory=b(_l);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Z;_errorStateTracker;stateChanges=new Z;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Vo(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ie$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=og(()=>{let e=this.options;return e?e.changes.pipe(jl$1(e),Ig(()=>sg(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ig(()=>this.optionSelectionChanges))});openedChange=new Fe$1;_openedStream=this.openedChange.pipe(en$1(e=>e),et$1(()=>{}));_closedStream=this.openedChange.pipe(en$1(e=>!e),et$1(()=>{}));selectionChange=new Fe$1;valueChange=new Fe$1;constructor(){let e=b(ca),t=b(Ut$1,{optional:!0}),n=b($t$1,{optional:!0}),r=b(new lh(`tabindex`),{optional:!0}),a=b(cn,{optional:!0}),l=b(aa,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new $n(e,l||this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new un(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Eg(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Eg(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(jl$1(null),Eg(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute(`aria-labelledby`,e):n.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(rs$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,r=>{r.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,r=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&r&&!Ce(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;a.onKeydown(e);let m=this.selected;m&&l!==m&&this._liveAnnouncer.announce(m.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,r=n===40||n===38,a=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(n===13||n===32)&&t.activeItem&&!Ce(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(m=>!m.disabled&&!m.selected);this.options.forEach(m=>{m.disabled||(l?m.select():m.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ce(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Pt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new $t(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=sg(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Eg(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),sg(...this.options.map(t=>t._stateChanges)).pipe(Eg(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=de(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`mat-select`]],contentQueries:function(t,n,r){if(t&1&&Hp(r,vl,5)(r,ot,5)(r,Ki,5),t&2){let a;YE(a=KE())&&(n.customTrigger=a.first),YE(a=KE())&&(n.options=a),YE(a=KE())&&(n.optionGroups=a)}},viewQuery:function(t,n){if(t&1&&Bp(ll,5)(dl,5)(Gn,5),t&2){let r;YE(r=KE())&&(n.trigger=r.first),YE(r=KE())&&(n.panel=r.first),YE(r=KE())&&(n._overlayDir=r.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,n){t&1&&Fp(`keydown`,function(a){return n._handleKeydown(a)})(`focus`,function(){return n._onFocus()})(`blur`,function(){return n._onBlur()}),t&2&&(Sp(`id`,n.id)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n.panelOpen?n.id+`-panel`:null)(`aria-expanded`,n.panelOpen)(`aria-label`,n.ariaLabel||null)(`aria-required`,n.required.toString())(`aria-disabled`,n.disabled.toString())(`aria-invalid`,n.errorState)(`aria-activedescendant`,n._getAriaActiveDescendant()),Gp(`mat-mdc-select-disabled`,n.disabled)(`mat-mdc-select-invalid`,n.errorState)(`mat-mdc-select-required`,n.required)(`mat-mdc-select-empty`,n.empty)(`mat-mdc-select-multiple`,n.multiple)(`mat-select-open`,n.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,EF],disableRipple:[2,`disableRipple`,`disableRipple`,EF],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:DF(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,EF],placeholder:`placeholder`,required:[2,`required`,`required`,EF],multiple:[2,`multiple`,`multiple`,EF],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,EF],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,DF],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,EF]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[OD([{provide:Ui,useExisting:i},{provide:Xi,useExisting:i}]),Dm],ngContentSelectors:ml,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,n){if(t&1&&(zE(cl),mi(0,`div`,2,0),Fp(`click`,function(){return n.open()}),mi(3,`div`,3),ME(4,ul,2,1,`span`,4)(5,pl,3,1,`span`,5),Oc(),mi(6,`div`,6)(7,`div`,7),xu(),mi(8,`svg`,8),Ap(9,`path`,9),Oc()()()(),Tp(10,gl,3,16,`ng-template`,10),Fp(`detach`,function(){return n.close()})(`backdropClick`,function(){return n.close()})(`overlayKeydown`,function(a){return n._handleOverlayKeydown(a)})),t&2){let r=XE(1);Mv(3),Sp(`id`,n._valueId),Mv(),NE(n.empty?4:5),Mv(6),xp(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,n._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,n._scrollStrategy)(`cdkConnectedOverlayOrigin`,n._preferredOverlayOrigin||r)(`cdkConnectedOverlayPositions`,n._positions)(`cdkConnectedOverlayWidth`,n._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,n._popoverLocation)}},dependencies:[Pt,Gn],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return i})();var Jn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[bt,qi,K,Je,ma,qi]})}return i})();var Sl=[`tooltip`];var xl=20;var wl=new N(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=b(he);return()=>et(i,{scrollThrottle:xl})}});var Cl=new N(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var ha=`tooltip-panel`;var Dl={passive:!0};var Ml=8;var Nl=8;var kl=24;var El=200;var fa=(()=>{class i{_elementRef=b(vr$1);_ngZone=b(be);_platform=b(G);_ariaDescriber=b(Pn);_focusMonitor=b(Ye);_dir=b(De);_injector=b(he);_viewContainerRef=b(Si$1);_mediaMatcher=b(Ot);_document=b(nr$1);_renderer=b(Ra$1);_animationsDisabled=ie();_defaultOptions=b(Cl,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Rl;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Jt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Jt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Ut(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Ut(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Z;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Ml}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Eg(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new on(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=n.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(Eg(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof vr$1)return this._overlayRef;this._detach()}let t=this._injector.get(ht).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${ha}`,r=gt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return r.positionChanges.pipe(Eg(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=_t(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(wl)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Eg(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Eg(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Eg(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Eg(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(U(U({},n.main),r.main)),this._addOffset(U(U({},n.fallback),r.fallback))])}_addOffset(e){let t=Nl,n=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=n?-t:t:e.originX===`end`&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`||t==`below`?n={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={originX:`end`,originY:`center`});let{x:r,y:a}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`?n={overlayX:`center`,overlayY:`bottom`}:t==`below`?n={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={overlayX:`start`,overlayY:`center`});let{x:r,y:a}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),nv(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:r}=e,a;if(t===`center`?this._dir&&this._dir.value===`rtl`?a=n===`end`?`left`:`right`:a=n===`start`?`left`:`right`:a=t===`bottom`&&r===`top`?`above`:`below`,a!==this._currentPosition){let l=this._overlayRef;if(l){let m=`${this._cssClassPrefix}-${ha}-`;l.removePanelClass(m+this._currentPosition),l.addPanelClass(m+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Dl))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,n=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(n.webkitUserDrag=`none`),n.touchAction=`none`,n.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||nv({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!Ce(e):!0;static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,n){t&2&&Gp(`mat-mdc-tooltip-disabled`,n.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return i})();var Rl=(()=>{class i{_changeDetectorRef=b(vF);_elementRef=b(vr$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ie();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Z;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>kl&&e.width>=El}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:n),t.classList.add(e?n:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let a=getComputedStyle(t);(a.getPropertyValue(`animation-duration`)===`0s`||a.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,n){if(t&1&&Bp(Sl,7),t&2){let r;YE(r=KE())&&(n._tooltip=r.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,n){t&1&&Fp(`mouseleave`,function(a){return n._handleMouseLeave(a)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,n){t&1&&(Rc(0,`div`,1,0),jp(`animationend`,function(a){return n._handleAnimationEnd(a)}),Rc(2,`div`,2),wD(3),kc()()),t&2&&(uD(n.tooltipClass),Gp(`mdc-tooltip--multiline`,n._isMultiline),Mv(3),Kp(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return i})();var pa=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[Ci,bt,K,Je]})}return i})();function Ol(i,o){if(i&1&&(mi(0,`mat-option`,17),wD(1),Oc()),i&2){let e=o.$implicit;xp(`value`,e),Mv(),Fc(` `,e,` `)}}function Tl(i,o){if(i&1){let e=FE();mi(0,`mat-form-field`,14)(1,`mat-select`,16,0),Fp(`selectionChange`,function(n){mu(e);return yu(WE(2)._changePageSize(n.value))}),xE(3,Ol,2,2,`mat-option`,17,SE),Oc(),mi(5,`div`,18),Fp(`click`,function(){mu(e);return yu(XE(2).open())}),Oc()()}if(i&2){let e=WE(2);xp(`appearance`,e._formFieldAppearance)(`color`,e.color),Mv(),xp(`value`,e.pageSize)(`disabled`,e.disabled),Np(`aria-labelledby`,e._pageSizeLabelId),xp(`panelClass`,e.selectConfig.panelClass||``)(`disableOptionCentering`,e.selectConfig.disableOptionCentering),Mv(2),AE(e._displayedPageSizeOptions)}}function Il(i,o){if(i&1&&(mi(0,`div`,15),wD(1),Oc()),i&2){let e=WE(2);Mv(),Kp(e.pageSize)}}function Pl(i,o){if(i&1&&(mi(0,`div`,3)(1,`div`,13),wD(2),Oc(),ME(3,Tl,6,7,`mat-form-field`,14),ME(4,Il,2,1,`div`,15),Oc()),i&2){let e=WE();Mv(),Sp(`id`,e._pageSizeLabelId),Mv(),Fc(` `,e._intl.itemsPerPageLabel,` `),Mv(),NE(e._displayedPageSizeOptions.length>1?3:-1),Mv(),NE(e._displayedPageSizeOptions.length<=1?4:-1)}}function Al(i,o){if(i&1){let e=FE();mi(0,`button`,19),Fp(`click`,function(){mu(e);let n=WE();return yu(n._buttonClicked(0,n._previousButtonsDisabled()))}),xu(),mi(1,`svg`,8),Ap(2,`path`,20),Oc()()}if(i&2){let e=WE();xp(`matTooltip`,e._intl.firstPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),Sp(`aria-label`,e._intl.firstPageLabel)}}function Fl(i,o){if(i&1){let e=FE();mi(0,`button`,21),Fp(`click`,function(){mu(e);let n=WE();return yu(n._buttonClicked(n.getNumberOfPages()-1,n._nextButtonsDisabled()))}),xu(),mi(1,`svg`,8),Ap(2,`path`,22),Oc()()}if(i&2){let e=WE();xp(`matTooltip`,e._intl.lastPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),Sp(`aria-label`,e._intl.lastPageLabel)}}var Ll=(()=>{class i{changes=new Z;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,n)=>{if(n==0||t==0)return`0 of ${n}`;n=Math.max(n,0);let r=e*t,a=r<n?Math.min(r+t,n):r+t;return`${r+1} \u2013 ${a} of ${n}`};static ɵfac=function(t){return new(t||i)};static ɵprov=yr$1({token:i,factory:i.ɵfac})}return i})();var zl=50;var Bl=new N(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var hn=(()=>{class i{_intl=b(Ll);_changeDetectorRef=b(vF);_formFieldAppearance;_pageSizeLabelId=b(pe).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new Rn$1(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>DF(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new Fe$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=b(Bl,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:n,pageSizeOptions:r,hidePageSize:a,showFirstLastButtons:l}=t;n!=null&&(this._pageSize=n),r!=null&&(this._pageSizeOptions=r),a!=null&&(this.hidePageSize=a),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,n=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(n)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:zl),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,DF],length:[2,`length`,`length`,DF],pageSize:[2,`pageSize`,`pageSize`,DF],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,EF],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,EF],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,EF]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(t,n){t&1&&(mi(0,`div`,1)(1,`div`,2),ME(2,Pl,5,4,`div`,3),mi(3,`div`,4)(4,`div`,5),wD(5),Oc(),ME(6,Al,3,5,`button`,6),mi(7,`button`,7),Fp(`click`,function(){return n._buttonClicked(n.pageIndex-1,n._previousButtonsDisabled())}),xu(),mi(8,`svg`,8),Ap(9,`path`,9),Oc()(),Au(),mi(10,`button`,10),Fp(`click`,function(){return n._buttonClicked(n.pageIndex+1,n._nextButtonsDisabled())}),xu(),mi(11,`svg`,8),Ap(12,`path`,11),Oc()(),ME(13,Fl,3,5,`button`,12),Oc()()()),t&2&&(Mv(2),NE(n.hidePageSize?-1:2),Mv(3),Fc(` `,n._intl.getRangeLabel(n.pageIndex,n.pageSize,n.length),` `),Mv(),NE(n.showFirstLastButtons?6:-1),Mv(),xp(`matTooltip`,n._intl.previousPageLabel)(`matTooltipDisabled`,n._previousButtonsDisabled())(`disabled`,n._previousButtonsDisabled())(`tabindex`,n._previousButtonsDisabled()?-1:null),Sp(`aria-label`,n._intl.previousPageLabel),Mv(3),xp(`matTooltip`,n._intl.nextPageLabel)(`matTooltipDisabled`,n._nextButtonsDisabled())(`disabled`,n._nextButtonsDisabled())(`tabindex`,n._nextButtonsDisabled()?-1:null),Sp(`aria-label`,n._intl.nextPageLabel),Mv(3),NE(n.showFirstLastButtons?13:-1))},dependencies:[qn,Qn,ot,xr,fa],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return i})();var ga=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[Ln,Jn,pa,hn]})}return i})();var Hl=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var jl=[`caption`,`colgroup, col`,`*`];function Wl(i,o){i&1&&QE(0,2)}function Ul(i,o){i&1&&(mi(0,`thead`,0),kp(1,1),Oc(),mi(2,`tbody`,0),kp(3,2)(4,3),Oc(),mi(5,`tfoot`,0),kp(6,4),Oc())}function Yl(i,o){i&1&&kp(0,1)(1,2)(2,3)(3,4)}var Le=new N(`CDK_TABLE`);var ni=(()=>{class i{template=b(fr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`cdkCellDef`,``]]})}return i})();var ii=(()=>{class i{template=b(fr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`cdkHeaderCellDef`,``]]})}return i})();var ya=(()=>{class i{template=b(fr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`cdkFooterCellDef`,``]]})}return i})();var rt=(()=>{class i{_table=b(Le,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,n,r){if(t&1&&Hp(r,ni,5)(r,ii,5)(r,ya,5),t&2){let a;YE(a=KE())&&(n.cell=a.first),YE(a=KE())&&(n.headerCell=a.first),YE(a=KE())&&(n.footerCell=a.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,EF],stickyEnd:[2,`stickyEnd`,`stickyEnd`,EF]}})}return i})();var ti=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}};var Sa=(()=>{class i extends ti{constructor(){super(b(rt),b(vr$1))}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Dp]})}return i})();var xa=(()=>{class i extends ti{constructor(){let e=b(rt),t=b(vr$1);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute(`role`,n)}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Dp]})}return i})();var Qi=(()=>{class i{template=b(fr$1);_differs=b(XD);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof pn?e.headerCell.template:this instanceof Ji?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,features:[Dm]})}return i})();var pn=(()=>{class i extends Qi{_table=b(Le,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,EF]},features:[Dp,Dm]})}return i})();var Ji=(()=>{class i extends Qi{_table=b(Le,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,EF]},features:[Dp,Dm]})}return i})();var oi=(()=>{class i extends Qi{_table=b(Le,{optional:!0});when;static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Dp]})}return i})();var St=(()=>{class i{_viewContainer=b(Si$1);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`cdkCellOutlet`,``]]})}return i})();var eo=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&kp(0,0)},dependencies:[St],encapsulation:2,changeDetection:1})}return i})();var to=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&kp(0,0)},dependencies:[St],encapsulation:2,changeDetection:1})}return i})();var ri=(()=>{class i{templateRef=b(fr$1);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return i})();var _a=[`top`,`bottom`,`left`,`right`];var $i=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,n=!0,r,a,l){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=r,this._positionListener=a,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let n of o)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));nv({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,n=!0,r=!0){if(!o.length||!this._isBrowser||!(e.some(oe=>oe)||t.some(oe=>oe))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=o[0],l=a.children.length,m=this.direction===`rtl`,f=m?`right`:`left`,u=m?`left`:`right`,g=e.lastIndexOf(!0),N=t.indexOf(!0),R,J,$;r&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),nv({earlyRead:()=>{R=this._getCellWidths(a,n),J=this._getStickyStartColumnPositions(R,e),$=this._getStickyEndColumnPositions(R,t)},write:()=>{for(let oe of o)for(let ce=0;ce<l;ce++){let xt=oe.children[ce];e[ce]&&this._addStickyStyle(xt,f,J[ce],ce===g),t[ce]&&this._addStickyStyle(xt,u,$[ce],ce===N)}this._positionListener&&R.some(oe=>!!oe)&&(this._positionListener.stickyColumnsUpdated({sizes:g===-1?[]:R.slice(0,g+1).map((oe,ce)=>e[ce]?oe:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:N===-1?[]:R.slice(N).map((oe,ce)=>t[ce+N]?oe:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let n=t===`bottom`?o.slice().reverse():o,r=t===`bottom`?e.slice().reverse():e,a=[],l=[],m=[];nv({earlyRead:()=>{for(let f=0,u=0;f<n.length;f++){if(!r[f])continue;a[f]=u;let g=n[f];m[f]=this._isNativeHtmlTable?Array.from(g.children):[g];let N=this._retrieveElementSize(g).height;u+=N,l[f]=N}},write:()=>{let f=r.lastIndexOf(!0);for(let u=0;u<n.length;u++){if(!r[u])continue;let g=a[u],N=u===f;for(let R of m[u])this._addStickyStyle(R,t,g,N)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:m}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:m})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&nv({write:()=>{let t=o.querySelector(`tfoot`);t&&(e.some(n=>!n)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let n of e)o.style[n]=``,o.classList.remove(this._borderCellCss[n]);_a.some(n=>e.indexOf(n)===-1&&o.style[n])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex=``,this._needsPositionStickyOnElement&&(o.style.position=``),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,n){o.classList.add(this._stickCellCss),n&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of _a)o.style[n]&&(t+=e[n]);return t?`${t}`:``}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=o.children;for(let r=0;r<n.length;r++){let a=n[r];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],n=0;for(let r=0;r<o.length;r++)e[r]&&(t[r]=n,n+=o[r]);return t}_getStickyEndColumnPositions(o,e){let t=[],n=0;for(let r=o.length;r>0;r--)e[r]&&(t[r]=n,n+=o[r]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,n),this._resizeObserver.observe(o,{box:`border-box`})),n}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&Gl(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Gl(i){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(o=>i.classList.contains(o))}function ba(i){return Error(`Could not find column with id "${i}".`)}var fn=new N(`STICKY_POSITIONING_LISTENER`);var no=(()=>{class i{viewContainer=b(Si$1);elementRef=b(vr$1);constructor(){let e=b(Le);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`rowOutlet`,``]]})}return i})();var io=(()=>{class i{viewContainer=b(Si$1);elementRef=b(vr$1);constructor(){let e=b(Le);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`headerRowOutlet`,``]]})}return i})();var oo=(()=>{class i{viewContainer=b(Si$1);elementRef=b(vr$1);constructor(){let e=b(Le);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`footerRowOutlet`,``]]})}return i})();var ro=(()=>{class i{viewContainer=b(Si$1);elementRef=b(vr$1);constructor(){let e=b(Le);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[``,`noDataRowOutlet`,``]]})}return i})();var ao=(()=>{class i{_differs=b(XD);_changeDetectorRef=b(vF);_elementRef=b(vr$1);_dir=b(De,{optional:!0});_platform=b(G);_viewRepeater;_viewportRuler=b(Fe);_injector=b(he);_virtualScrollViewport=b(Mr,{optional:!0,host:!0});_positionListener=b(fn,{optional:!0})||b(fn,{optional:!0,skipSelf:!0});_document=b(nr$1);_data;_renderedRange;_onDestroy=new Z;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new Z;_footerRowStickyUpdates=new Z;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new Z;_dataStream=new Z;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Fe$1;viewChange=new An$1({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){b(new lh(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Eg(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new zn:new Zn,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),sn(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,r,a)=>this._getEmbeddedViewArgs(n.item,a),n=>n.item.data,n=>{n.operation===Ae.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let r=t.get(n.currentIndex);r.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=va(this._headerRowOutlet,`thead`);n&&(n.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=va(this._footerRowOutlet,`tfoot`);n&&(n.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{let a=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===r&&a.push(t[l]);this._addStickyColumnStyles(a,r)}),n.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let a=this._data[r],l=this._getRenderRowsForData(a,r,n.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let m=0;m<l.length;m++){let f=l[m],u=this._cachedRenderRowsMap.get(f.data);u.has(f.rowDef)?u.get(f.rowDef).push(f):u.set(f.rowDef,[f]),e.push(f)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(a=>{let l=n&&n.has(a)?n.get(a):[];if(l.length){let m=l.shift();return m.dataIndex=t,m}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),ei(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=ei(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=ei(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=ei(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,l)=>{let m=!!l.getColumnsDiff();return a||m},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||n||r}_switchDataSource(e){this._data=[],sn(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;sn(this.dataSource)?e=this.dataSource.connect(this):Qh(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Gh(this.dataSource)),this._renderChangeSubscription=ng([e,this.viewChange]).pipe(Eg(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(l=>{let m=this._columnDefsByName.get(l);if(!m)throw ba(l);return m}),r=n.map(l=>l.sticky),a=n.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let r=e.viewContainer.get(n);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;r&&n.push(r)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,r={$implicit:e.data};return{templateRef:n.template,context:r,index:t}}_renderRow(e,t,n,r={}){let a=e.viewContainer.createEmbeddedView(t.template,r,n);return this._renderCellTemplateForItem(t,r),a}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))St.mostRecentCellOutlet&&St.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let a=e.get(t).context;a.count=n,a.first=t===0,a.last=t===n-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);if(!n)throw ba(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new $i(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Gh()).pipe(Eg(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?jh:Fh;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(ag(0,t),Eg(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,r)=>this._measureRangeSize(n,r)}),ng([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Eg(this._onDestroy)).subscribe(([n,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let l=r.elements[a];if(l){let m=r.offsets[a],f=n!==0?Math.max(n-m,m):-m;for(let u of l)u.style.top=`${-f}px`}}}),ng([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Eg(this._onDestroy)).subscribe(([n,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let l=r.elements[a];if(l)for(let m of l)m.style.bottom=`${n+r.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let r=n.createEmbeddedView(e.templateRef),a=r.rootNodes[0];if(r.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute(`role`,`row`),a.classList.add(...e._contentClassNames);let l=a.querySelectorAll(e._cellSelector);for(let m=0;m<l.length;m++)l[m].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let n=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<n.start||(e.end,n.end);let a=e.start-n.start,l=e.end-e.start,m,f;for(let N=0;N<l;N++){let R=r.get(N+a);if(R&&R.rootNodes.length){m=f=R.rootNodes[0];break}}for(let N=l-1;N>-1;N--){let R=r.get(N+a);if(R&&R.rootNodes.length){f=R.rootNodes[R.rootNodes.length-1];break}}let u=m?.getBoundingClientRect?.(),g=f?.getBoundingClientRect?.();return u&&g?g.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,n,r){if(t&1&&Hp(r,ri,5)(r,rt,5)(r,oi,5)(r,pn,5)(r,Ji,5),t&2){let a;YE(a=KE())&&(n._noDataRow=a.first),YE(a=KE())&&(n._contentColumnDefs=a),YE(a=KE())&&(n._contentRowDefs=a),YE(a=KE())&&(n._contentHeaderRowDefs=a),YE(a=KE())&&(n._contentFooterRowDefs=a)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,n){t&2&&Gp(`cdk-table-fixed-layout`,n.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,EF],fixedLayout:[2,`fixedLayout`,`fixedLayout`,EF],recycleRows:[2,`recycleRows`,`recycleRows`,EF]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[OD([{provide:Le,useExisting:i},{provide:fn,useValue:null}])],ngContentSelectors:jl,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(zE(Hl),QE(0),QE(1,1),ME(2,Wl,1,0),ME(3,Ul,7,0)(4,Yl,4,0)),t&2&&(Mv(2),NE(n._isServer?2:-1),Mv(),NE(n._isNativeHtmlTable?3:4))},dependencies:[io,no,ro,oo],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return i})();function ei(i,o){return i.concat(Array.from(o))}function va(i,o){let e=o.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n===`TABLE`)break;t=t.parentNode}return null}var wa=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[ln]})}return i})();var Xl=[`*`,[[``,`matSortHeaderIcon`,``]]];var Kl=[`*`,`[matSortHeaderIcon]`];function ql(i,o){i&1&&(xu(),Rc(0,`svg`,3),Op(1,`path`,4),kc())}function Zl(i,o){i&1&&(Rc(0,`div`,2),QE(1,1,null,ql,2,0),kc())}var Ca=new N(`MAT_SORT_DEFAULT_OPTIONS`);var gn=(()=>{class i{_defaultOptions;_initializedStream=new Rn$1(1);sortables=new Map;_stateChanges=new Z;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new Fe$1;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,n=$l(e.start||this.start,t),r=n.indexOf(this.direction)+1;return r>=n.length&&(r=0),n[r]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(t){return new(t||i)(Cr$1(Ca,8))};static ɵdir=lE({type:i,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,EF],disabled:[2,`matSortDisabled`,`disabled`,EF]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[Dm]})}return i})();function $l(i,o){let e=[`asc`,`desc`];return i==`desc`&&e.reverse(),o||e.push(``),e}var Da=(()=>{class i{_sort=b(gn,{optional:!0});_columnDef=b(rt,{optional:!0});_changeDetectorRef=b(vF);_focusMonitor=b(Ye);_elementRef=b(vr$1);_ariaDescriber=b(Pn,{optional:!0});_renderChanges;_animationsDisabled=ie();_recentlyCleared=Vo(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){b(fe).load(it);let e=b(Ca,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=sg(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(t){return new(t||i)};static ɵcmp=oE({type:i,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(t,n){t&1&&Fp(`click`,function(){return n._toggleOnInteraction()})(`keydown`,function(a){return n._handleKeydown(a)})(`mouseleave`,function(){return n._recentlyCleared.set(null)}),t&2&&(Sp(`aria-sort`,n._getAriaSortAttribute()),Gp(`mat-sort-header-disabled`,n._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,EF],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,EF]},exportAs:[`matSortHeader`],ngContentSelectors:Kl,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(t,n){t&1&&(zE(Xl),Rc(0,`div`,0)(1,`div`,1),QE(2),kc(),ME(3,Zl,3,0,`div`,2),kc()),t&2&&(Gp(`mat-sort-header-sorted`,n._isSorted())(`mat-sort-header-position-before`,n.arrowPosition===`before`)(`mat-sort-header-descending`,n._sort.direction===`desc`)(`mat-sort-header-ascending`,n._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,n._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,n._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,n._animationsDisabled),Sp(`tabindex`,n._isDisabled()?null:0)(`role`,n._isDisabled()?null:`button`),Mv(3),NE(n._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return i})();var Ma=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[K]})}return i})();var Jl=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var ed=[`caption`,`colgroup, col`,`*`];function td(i,o){i&1&&QE(0,2)}function nd(i,o){i&1&&(mi(0,`thead`,0),kp(1,1),Oc(),mi(2,`tbody`,2),kp(3,3)(4,4),Oc(),mi(5,`tfoot`,0),kp(6,5),Oc())}function id(i,o){i&1&&kp(0,1)(1,3)(2,4)(3,5)}var Na=(()=>{class i extends ao{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵcmp=oE({type:i,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,n){t&2&&Gp(`mat-table-fixed-layout`,n.fixedLayout)},exportAs:[`matTable`],features:[OD([{provide:ao,useExisting:i},{provide:Le,useExisting:i},{provide:fn,useValue:null}]),Dp],ngContentSelectors:ed,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(zE(Jl),QE(0),QE(1,1),ME(2,td,1,0),ME(3,nd,7,0)(4,id,4,0)),t&2&&(Mv(2),NE(n._isServer?2:-1),Mv(),NE(n._isNativeHtmlTable?3:4))},dependencies:[io,no,ro,oo],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return i})();var ka=(()=>{class i extends ni{static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[``,`matCellDef`,``]],features:[OD([{provide:ni,useExisting:i}]),Dp]})}return i})();var Ea=(()=>{class i extends ii{static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[``,`matHeaderCellDef`,``]],features:[OD([{provide:ii,useExisting:i}]),Dp]})}return i})();var Ra=(()=>{class i extends rt{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[OD([{provide:rt,useExisting:i}]),Dp]})}return i})();var Oa=(()=>{class i extends Sa{static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Dp]})}return i})();var Ta=(()=>{class i extends xa{static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Dp]})}return i})();var Ia=(()=>{class i extends pn{static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,EF]},features:[OD([{provide:pn,useExisting:i}]),Dp]})}return i})();var Pa=(()=>{class i extends oi{static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵdir=lE({type:i,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[OD([{provide:oi,useExisting:i}]),Dp]})}return i})();var Aa=(()=>{class i extends eo{static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵcmp=oE({type:i,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[OD([{provide:eo,useExisting:i}]),Dp],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&kp(0,0)},dependencies:[St],encapsulation:2,changeDetection:1})}return i})();var Fa=(()=>{class i extends to{static ɵfac=(()=>{let e;return function(n){return(e||(e=Hm(i)))(n||i)}})();static ɵcmp=oE({type:i,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[OD([{provide:to,useExisting:i}]),Dp],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&kp(0,0)},dependencies:[St],encapsulation:2,changeDetection:1})}return i})();var La=(()=>{class i extends ri{_cellSelector=`td, mat-cell, [mat-cell], .mat-cell`;constructor(){super(),this._contentClassNames.push(`mat-mdc-no-data-row`,`mat-mdc-row`,`mdc-data-table__row`),this._cellClassNames.push(`mat-mdc-cell`,`mdc-data-table__cell`,`mat-no-data-cell`)}static ɵfac=function(t){return new(t||i)};static ɵdir=lE({type:i,selectors:[[`ng-template`,`matNoDataRow`,``]],features:[OD([{provide:ri,useExisting:i}]),Dp]})}return i})();var za=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=sE({type:i});static ɵinj=Wl$1({imports:[wa,K]})}return i})();var od=9007199254740991;var ai=class extends an{_data;_renderData=new An$1([]);_filter=new An$1(``);_internalPageChanges=new Z;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(o){o=Array.isArray(o)?o:[],this._data.next(o),this._renderChangesSubscription||this._filterData(o)}get filter(){return this._filter.value}set filter(o){this._filter.next(o),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(o){this._sort=o,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(o){this._paginator=o,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(o,e)=>{let t=o[e];if(Mn(t)){let n=Number(t);return n<od?n:t}return t};sortData=(o,e)=>{let t=e.active,n=e.direction;return!t||n==``?o:o.sort((r,a)=>{let l=this.sortingDataAccessor(r,t),m=this.sortingDataAccessor(a,t),f=typeof l,u=typeof m;f!==u&&(f===`number`&&(l+=``),u===`number`&&(m+=``));let g=0;return l!=null&&m!=null?l>m?g=1:l<m&&(g=-1):l!=null?g=1:m!=null&&(g=-1),g*(n==`asc`?1:-1)})};filterPredicate=(o,e)=>{let t=e.trim().toLowerCase();return Object.values(o).some(n=>`${n}`.toLowerCase().includes(t))};constructor(o=[]){super(),this._data=new An$1(o),this._updateChangeSubscription()}_updateChangeSubscription(){let o=this._sort?sg(this._sort.sortChange,this._sort.initialized):Gh(null),e=this._paginator?sg(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Gh(null),t=this._data,a=ng([ng([ng([t,this._filter]).pipe(et$1(([l])=>this._filterData(l))),o]).pipe(et$1(([l])=>this._orderData(l))),e]).pipe(et$1(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(l=>this._renderData.next(l))}_filterData(o){return this.filteredData=this.filter==null||this.filter===``?o:o.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(o){return this.sort?this.sortData(o.slice(),this.sort):o}_pageData(o){if(!this.paginator)return o;let e=this.paginator.pageIndex*this.paginator.pageSize;return o.slice(e,e+this.paginator.pageSize)}_updatePaginator(o){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=o,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,n=Math.min(e.pageIndex,t);n!==e.pageIndex&&(e.pageIndex=n,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var ad=()=>[7,10,25];function sd(i,o){if(i&1){let e=FE();mi(0,`section`,5)(1,`div`,7),Ap(2,`img`,8),Oc(),mi(3,`h2`),wD(4,`Hi Sarah! Welcome aboard`),Oc(),mi(5,`p`),wD(6,`We'll notify you as soon as your first charge is available so you can get started.`),Oc(),mi(7,`button`,9),Fp(`click`,function(){mu(e);return yu(WE().showChargesListing())}),Ap(8,`img`,10),wD(9,` Refresh for New Charges `),Oc()()}}function ld(i,o){i&1&&(mi(0,`div`,11)(1,`span`,62),wD(2,`!`),Oc(),wD(3,` We're having trouble syncing with Athena. Data on this screen may be out of date. `),Oc())}function dd(i,o){i&1&&(mi(0,`th`,63),wD(1,`Charge ID`),Oc())}function cd(i,o){i&1&&(mi(0,`span`),wD(1,`Unmatched`),Oc())}function md(i,o){if(i&1&&(mi(0,`td`,64)(1,`div`,65)(2,`strong`),wD(3),Oc(),ME(4,cd,2,0,`span`),Oc()()),i&2){let e=o.$implicit;Mv(3),Kp(e.id),Mv(),NE(e.unmatched?4:-1)}}function ud(i,o){i&1&&(mi(0,`th`,63),wD(1,`Date of Service`),Oc())}function hd(i,o){if(i&1&&(mi(0,`td`,64),wD(1),Oc()),i&2){let e=o.$implicit;Mv(),Kp(e.dateOfService)}}function fd(i,o){i&1&&(mi(0,`th`,63),wD(1,`Rendering Physician`),Oc())}function pd(i,o){if(i&1&&(mi(0,`td`,64),wD(1),Oc()),i&2){let e=o.$implicit;Mv(),Kp(e.renderingPhysician)}}function gd(i,o){i&1&&(mi(0,`th`,63),wD(1,`Charge Value`),Oc())}function _d(i,o){if(i&1&&(mi(0,`td`,64),wD(1),PD(2,`currency`),Oc()),i&2){let e=o.$implicit;Mv(),Kp(VD(2,1,e.chargeValue,`USD`,`symbol`,`1.2-2`))}}function bd(i,o){i&1&&(mi(0,`th`,63),wD(1,`Charge Status`),Oc())}function vd(i,o){if(i&1&&(mi(0,`small`),wD(1),Oc()),i&2){let e=WE().$implicit;Mv(),Kp(e.statusNote)}}function yd(i,o){if(i&1&&(mi(0,`td`,64)(1,`div`,66)(2,`span`,67),wD(3),Oc(),ME(4,vd,2,1,`small`),Oc()()),i&2){let e=o.$implicit,t=WE(2);Mv(2),uD(`charge-status charge-status--`+t.getStatusTone(e.status)),Mv(),Fc(` `,e.status,` `),Mv(),NE(e.statusNote?4:-1)}}function Sd(i,o){i&1&&(mi(0,`th`,63),wD(1,`Date of Admission`),Oc())}function xd(i,o){if(i&1&&(mi(0,`td`,64),wD(1),Oc()),i&2){let e=o.$implicit;Mv(),Kp(e.dateOfAdmission)}}function wd(i,o){i&1&&(mi(0,`th`,68),wD(1,`Actions`),Oc())}function Cd(i,o){if(i&1&&(mi(0,`td`,64)(1,`button`,69),Ap(2,`span`)(3,`span`)(4,`span`),Oc()()),i&2){let e=o.$implicit;WE();let t=XE(111);Mv(),xp(`matMenuTriggerFor`,t),Sp(`aria-label`,`Actions for `+e.id)}}function Dd(i,o){i&1&&Ap(0,`tr`,70)}function Md(i,o){i&1&&Ap(0,`tr`,71)}function Nd(i,o){i&1&&(mi(0,`div`,74),Ap(1,`span`,76),mi(2,`strong`),wD(3,`Applying filters`),Oc()())}function kd(i,o){i&1&&(mi(0,`div`,75),Ap(1,`img`,77),mi(2,`strong`),wD(3,`No Charges found`),Oc(),mi(4,`span`),wD(5,`Try adjusting your filters or check back later.`),Oc()())}function Ed(i,o){if(i&1&&(mi(0,`tr`,72)(1,`td`,73),ME(2,Nd,4,0,`div`,74)(3,kd,6,0,`div`,75),Oc()()),i&2){let e=WE(2);Mv(),Sp(`colspan`,e.displayedColumns.length),Mv(),NE(e.filtersLoading()?2:e.filtersApplied()?3:-1)}}function Rd(i,o){if(i&1&&(mi(0,`div`,61),Ap(1,`mat-paginator`,78),mi(2,`div`,79)(3,`mat-select`,80)(4,`mat-option`,81),wD(5,`Select File Format`),Oc(),mi(6,`mat-option`,82),wD(7,`Export CSV`),Oc(),mi(8,`mat-option`,83),wD(9,`Export XLSX`),Oc()(),mi(10,`button`,84),wD(11,`Export`),Oc()()()),i&2){let e=WE(2);Mv(),xp(`length`,e.totalCharges)(`pageSize`,7)(`pageSizeOptions`,RD(3,ad))}}function Od(i,o){if(i&1){let e=FE();mi(0,`section`,6),ME(1,ld,4,0,`div`,11),mi(2,`section`,12)(3,`button`,13),Fp(`click`,function(){mu(e);return yu(WE().toggleFilters())}),mi(4,`span`),wD(5,`Filters`),Oc(),Ap(6,`img`,14),Oc(),mi(7,`div`,15)(8,`div`,16)(9,`span`),wD(10,`Date Range`),Oc(),mi(11,`mat-select`,17),Xp(`ngModelChange`,function(n){mu(e);let r=WE();return MD(r.dateRange,n)||(r.dateRange=n),yu(n)}),mi(12,`mat-option`,18),wD(13,`Previous Week`),Oc(),mi(14,`mat-option`,19),wD(15,`This Week`),Oc(),mi(16,`mat-option`,20),wD(17,`This Month`),Oc(),mi(18,`mat-option`,21),wD(19,`Custom Range`),Oc()(),hI(),Oc(),mi(20,`div`,16)(21,`span`),wD(22,`Rendering Physician`),Oc(),mi(23,`mat-select`,17),Xp(`ngModelChange`,function(n){mu(e);let r=WE();return MD(r.renderingPhysician,n)||(r.renderingPhysician=n),yu(n)}),mi(24,`mat-option`,22),wD(25,`All Physicians (Multi)`),Oc(),mi(26,`mat-option`,23),wD(27,`Dr. Sarah Jenkins, MD`),Oc(),mi(28,`mat-option`,24),wD(29,`Dr. Alan Vance, MD`),Oc(),mi(30,`mat-option`,25),wD(31,`Dr. Robert Chen, MD`),Oc()(),hI(),Oc(),mi(32,`div`,16)(33,`span`),wD(34,`Supervising Physician`),Oc(),mi(35,`mat-select`,17),Xp(`ngModelChange`,function(n){mu(e);let r=WE();return MD(r.supervisingPhysician,n)||(r.supervisingPhysician=n),yu(n)}),mi(36,`mat-option`,26),wD(37,`All Physicians`),Oc(),mi(38,`mat-option`,23),wD(39,`Dr. Sarah Jenkins, MD`),Oc(),mi(40,`mat-option`,24),wD(41,`Dr. Alan Vance, MD`),Oc()(),hI(),Oc(),mi(42,`div`,16)(43,`span`),wD(44,`Service Department`),Oc(),mi(45,`mat-select`,17),Xp(`ngModelChange`,function(n){mu(e);let r=WE();return MD(r.serviceDepartment,n)||(r.serviceDepartment=n),yu(n)}),mi(46,`mat-option`,27),wD(47,`Nephrology Clinic`),Oc(),mi(48,`mat-option`,28),wD(49,`Dialysis Center`),Oc(),mi(50,`mat-option`,29),wD(51,`Hospital Rounding`),Oc()(),hI(),Oc(),mi(52,`div`,16)(53,`span`),wD(54,`Patient Department`),Oc(),mi(55,`mat-select`,17),Xp(`ngModelChange`,function(n){mu(e);let r=WE();return MD(r.patientDepartment,n)||(r.patientDepartment=n),yu(n)}),mi(56,`mat-option`,28),wD(57,`Dialysis Inpatient`),Oc(),mi(58,`mat-option`,30),wD(59,`Outpatient`),Oc(),mi(60,`mat-option`,31),wD(61,`Acute Care`),Oc()(),hI(),Oc(),mi(62,`div`,16)(63,`span`),wD(64,`Procedure Codes`),Oc(),mi(65,`input`,32),Xp(`ngModelChange`,function(n){mu(e);let r=WE();return MD(r.procedureCodes,n)||(r.procedureCodes=n),yu(n)}),Oc(),hI(),Oc(),mi(66,`div`,16)(67,`span`),wD(68,`Insurance Package ID`),Oc(),mi(69,`mat-select`,17),Xp(`ngModelChange`,function(n){mu(e);let r=WE();return MD(r.insurancePackage,n)||(r.insurancePackage=n),yu(n)}),mi(70,`mat-option`,26),wD(71,`All Insurances`),Oc(),mi(72,`mat-option`,33),wD(73,`Medicare`),Oc(),mi(74,`mat-option`,34),wD(75,`Commercial`),Oc()(),hI(),Oc(),mi(76,`div`,16)(77,`span`),wD(78,`Net Activity / Net AR`),Oc(),mi(79,`input`,35),Xp(`ngModelChange`,function(n){mu(e);let r=WE();return MD(r.netActivity,n)||(r.netActivity=n),yu(n)}),Oc(),hI(),Oc(),mi(80,`div`,36)(81,`button`,37),Fp(`click`,function(){mu(e);return yu(WE().toggleFilterResults())}),wD(82),Oc()()()(),mi(83,`section`,38)(84,`div`,39)(85,`table`,40),Lc(86,41),Tp(87,dd,2,0,`th`,42)(88,md,5,2,`td`,43),Pc(),Lc(89,44),Tp(90,ud,2,0,`th`,42)(91,hd,2,1,`td`,43),Pc(),Lc(92,45),Tp(93,fd,2,0,`th`,42)(94,pd,2,1,`td`,43),Pc(),Lc(95,46),Tp(96,gd,2,0,`th`,42)(97,_d,3,6,`td`,43),Pc(),Lc(98,47),Tp(99,bd,2,0,`th`,42)(100,yd,5,4,`td`,43),Pc(),Lc(101,48),Tp(102,Sd,2,0,`th`,42)(103,xd,2,1,`td`,43),Pc(),Lc(104,49),Tp(105,wd,2,0,`th`,50)(106,Cd,5,2,`td`,43),Pc(),Tp(107,Dd,1,0,`tr`,51)(108,Md,1,0,`tr`,52)(109,Ed,4,2,`tr`,53),Oc()(),mi(110,`mat-menu`,54,0)(112,`button`,55),Ap(113,`img`,56),mi(114,`span`),wD(115,`Mark Paid`),Oc()(),mi(116,`button`,55),Ap(117,`img`,57),mi(118,`span`),wD(119,`Log Refund`),Oc()(),mi(120,`button`,58),Ap(121,`img`,59),mi(122,`span`),wD(123,`Void Claim`),Oc()(),mi(124,`button`,55),Ap(125,`img`,60),mi(126,`span`),wD(127,`View History`),Oc()()(),ME(128,Rd,12,4,`div`,61),Oc()()}if(i&2){let e=WE();Mv(),NE(e.showSyncWarning()?1:-1),Mv(),Gp(`charges-filters--collapsed`,!e.filtersOpen()),Mv(),Sp(`aria-expanded`,e.filtersOpen()),Mv(8),Jp(`ngModel`,e.dateRange),mI(),Mv(12),Jp(`ngModel`,e.renderingPhysician),mI(),Mv(12),Jp(`ngModel`,e.supervisingPhysician),mI(),Mv(10),Jp(`ngModel`,e.serviceDepartment),mI(),Mv(10),Jp(`ngModel`,e.patientDepartment),mI(),Mv(10),Jp(`ngModel`,e.procedureCodes),mI(),Mv(4),Jp(`ngModel`,e.insurancePackage),mI(),Mv(10),Jp(`ngModel`,e.netActivity),mI(),Mv(2),xp(`disabled`,e.filtersLoading()),Mv(),Fc(` `,e.filtersApplied()?`Reset Filters`:`Apply Filters`,` `),Mv(3),xp(`dataSource`,e.dataSource),Mv(22),xp(`matHeaderRowDef`,e.displayedColumns)(`matHeaderRowDefSticky`,!0),Mv(),xp(`matRowDefColumns`,e.displayedColumns),Mv(20),NE(!e.filtersLoading()&&!e.filtersApplied()?128:-1)}}var Ba=class i{sort;paginator;filterTimer;set matSort(o){this.sort=o,this.syncTableControls()}set matPaginator(o){this.paginator=o,this.syncTableControls()}totalCharges=7;showListing=Vo(!1);showSyncWarning=Vo(!1);filtersOpen=Vo(!0);filtersLoading=Vo(!1);filtersApplied=Vo(!1);displayedColumns=[`id`,`dateOfService`,`renderingPhysician`,`chargeValue`,`status`,`dateOfAdmission`,`actions`];charges=[{id:`CHG-98420`,dateOfService:`2023-10-24`,renderingPhysician:`Dr. Sarah Jenkins, MD`,chargeValue:420,status:`Reviewed by Physician - Yes`,dateOfAdmission:`-`},{id:`CHG-98419`,dateOfService:`2023-10-23`,renderingPhysician:`Dr. Alan Vance, MD`,chargeValue:420,status:`Reviewed by Physician - No`,dateOfAdmission:`2023-10-20`},{id:`CHG-98418`,dateOfService:`2023-10-23`,renderingPhysician:`Dr. Robert Chen, MD`,chargeValue:420,status:`Reviewed by Physician - No`,dateOfAdmission:`-`},{id:`CHG-98417`,dateOfService:`2023-10-22`,renderingPhysician:`Dr. Sarah Jenkins, MD`,chargeValue:420,status:`Voided`,statusNote:`Voided by S. Mitchell - Oct 22, 2023`,dateOfAdmission:`-`,unmatched:!0},{id:`CHG-98416`,dateOfService:`2023-10-22`,renderingPhysician:`Dr. Alan Vance, MD`,chargeValue:420,status:`Draft`,dateOfAdmission:`2023-10-18`},{id:`CHG-98415`,dateOfService:`2023-10-21`,renderingPhysician:`Dr. Robert Chen, MD`,chargeValue:420,status:`Reviewed by Physician - No`,dateOfAdmission:`-`},{id:`CHG-98414`,dateOfService:`2023-10-21`,renderingPhysician:`Dr. Sarah Jenkins, MD`,chargeValue:420,status:`Reviewed by Physician - Yes`,dateOfAdmission:`2023-10-19`}];dataSource=new ai(this.charges);dateRange=`previous-week`;renderingPhysician=`all-multi`;supervisingPhysician=`all`;serviceDepartment=`nephrology`;patientDepartment=`dialysis`;insurancePackage=`all`;procedureCodes=`90960, 90961`;netActivity=`e.g., 0.00`;warningTimer;ngAfterViewInit(){this.syncTableControls()}ngOnDestroy(){this.warningTimer&&clearTimeout(this.warningTimer),this.filterTimer&&clearTimeout(this.filterTimer)}showChargesListing(){this.showListing.set(!0),this.showSyncWarning.set(!0),this.warningTimer&&clearTimeout(this.warningTimer),this.warningTimer=setTimeout(()=>this.showSyncWarning.set(!1),6e4),setTimeout(()=>this.syncTableControls())}toggleFilters(){this.filtersOpen.update(o=>!o)}toggleFilterResults(){if(this.filtersApplied()){this.resetFilters();return}this.applyFilters()}getStatusTone(o){return o===`Reviewed by Physician - Yes`?`success`:o===`Draft`?`draft`:`danger`}syncTableControls(){this.sort&&(this.dataSource.sort=this.sort),this.paginator&&(this.dataSource.paginator=this.paginator)}applyFilters(){this.filterTimer&&clearTimeout(this.filterTimer),this.filtersApplied.set(!1),this.filtersLoading.set(!0),this.dataSource.data=[],this.paginator?.firstPage(),this.filterTimer=setTimeout(()=>{this.filtersLoading.set(!1),this.filtersApplied.set(!0),this.paginator?.firstPage()},2e3)}resetFilters(){this.filterTimer&&clearTimeout(this.filterTimer),this.filtersLoading.set(!1),this.filtersApplied.set(!1),this.dataSource.data=this.charges,this.paginator?.firstPage()}static ɵfac=function(e){return new(e||i)};static ɵcmp=oE({type:i,selectors:[[`app-charges`]],viewQuery:function(e,t){if(e&1&&Bp(gn,5)(hn,5),e&2){let n;YE(n=KE())&&(t.matSort=n.first),YE(n=KE())&&(t.matPaginator=n.first)}},decls:8,vars:1,consts:[[`chargeActions`,`matMenu`],[1,`charges-page`],[`aria-label`,`Charges and claims`,1,`billing-tabs`],[`routerLink`,`/billing-coordinator/charges`,`routerLinkActive`,`billing-tabs__link--active`,1,`billing-tabs__link`],[`routerLink`,`/billing-coordinator/claims`,`routerLinkActive`,`billing-tabs__link--active`,1,`billing-tabs__link`],[`aria-live`,`polite`,1,`billing-empty`],[1,`charges-listing`],[`aria-hidden`,`true`,1,`billing-empty__icon`],[`src`,`assets/billing-coordinator/empty-clipboard.svg`,`alt`,``,`width`,`24`,`height`,`24`],[`type`,`button`,1,`app-button`,`app-button--primary`,`billing-empty__button`,3,`click`],[`src`,`assets/billing-coordinator/refresh-cw.svg`,`alt`,``,`width`,`16`,`height`,`16`,`aria-hidden`,`true`],[`role`,`status`,1,`charges-sync-alert`],[1,`charges-filters`],[`type`,`button`,1,`charges-filters__header`,3,`click`],[`src`,`assets/billing-coordinator/chevron-right.svg`,`alt`,``,`width`,`14`,`height`,`14`],[1,`charges-filters__body`,`row`],[1,`charges-filter`,`col-12`,`col-md-6`,`col-xl-3`,`mb-3`,`mb-sm-4`],[`panelClass`,`billing-select-panel`,1,`billing-mat-select`,3,`ngModelChange`,`ngModel`],[`value`,`previous-week`],[`value`,`this-week`],[`value`,`this-month`],[`value`,`custom`],[`value`,`all-multi`],[`value`,`jenkins`],[`value`,`vance`],[`value`,`chen`],[`value`,`all`],[`value`,`nephrology`],[`value`,`dialysis`],[`value`,`hospital`],[`value`,`outpatient`],[`value`,`acute`],[`placeholder`,`Enter procedure codes`,`type`,`text`,3,`ngModelChange`,`ngModel`],[`value`,`medicare`],[`value`,`commercial`],[`placeholder`,`Enter net activity / net AR`,`type`,`text`,3,`ngModelChange`,`ngModel`],[1,`col-12`,`d-flex`,`align-items-end`,`justify-content-xl-end`],[`type`,`button`,1,`app-button`,`app-button--primary`,`charges-filters__apply`,3,`click`,`disabled`],[1,`charges-table-shell`],[1,`charges-table-scroll`],[`mat-table`,``,`matSort`,``,3,`dataSource`],[`matColumnDef`,`id`],[`mat-header-cell`,``,`mat-sort-header`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`dateOfService`],[`matColumnDef`,`renderingPhysician`],[`matColumnDef`,`chargeValue`],[`matColumnDef`,`status`],[`matColumnDef`,`dateOfAdmission`],[`matColumnDef`,`actions`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`,`matHeaderRowDefSticky`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`class`,`mat-row charges-empty-table-row`,4,`matNoDataRow`],[`panelClass`,`charges-action-menu`,`xPosition`,`before`,`yPosition`,`below`],[`mat-menu-item`,``],[`src`,`assets/billing-coordinator/paid-outline.svg`,`alt`,``,`width`,`16`,`height`,`16`,1,`charges-menu-icon`],[`src`,`assets/billing-coordinator/refund.svg`,`alt`,``,`width`,`16`,`height`,`16`,1,`charges-menu-icon`],[`mat-menu-item`,``,1,`charges-menu-danger`],[`src`,`assets/billing-coordinator/trash.svg`,`alt`,``,`width`,`16`,`height`,`16`,1,`charges-menu-icon`],[`src`,`assets/billing-coordinator/clock.svg`,`alt`,``,`width`,`16`,`height`,`16`,1,`charges-menu-icon`],[1,`charges-table-footer`],[`aria-hidden`,`true`],[`mat-header-cell`,``,`mat-sort-header`,``],[`mat-cell`,``],[1,`charge-id-cell`],[1,`charge-status-cell`],[1,`charge-status`],[`mat-header-cell`,``],[`type`,`button`,1,`charges-action-button`,3,`matMenuTriggerFor`],[`mat-header-row`,``],[`mat-row`,``],[1,`mat-row`,`charges-empty-table-row`],[1,`mat-cell`,`charges-empty-table-cell`],[`role`,`status`,`aria-live`,`polite`,1,`charges-loading-state`],[`role`,`status`,`aria-live`,`polite`,1,`charges-no-results`],[`aria-hidden`,`true`,1,`charges-loading-spinner`],[`src`,`assets/billing-coordinator/no-charges-found.svg`,`alt`,``,`width`,`48`,`height`,`48`,`aria-hidden`,`true`,1,`charges-no-results__icon`],[`showFirstLastButtons`,``,`aria-label`,`Charges pagination`,3,`length`,`pageSize`,`pageSizeOptions`],[1,`charges-export`],[`panelClass`,`billing-select-panel`,`value`,`selectFormate`,`aria-label`,`Export format`,1,`billing-mat-select`,`billing-mat-select--export`],[`value`,`selectFormate`],[`value`,`csv`],[`value`,`xlsx`],[`type`,`button`,`disabled`,``,1,`app-button`,`app-button--primary`,`charges-export__button`]],template:function(e,t){e&1&&(mi(0,`div`,1)(1,`nav`,2)(2,`a`,3),wD(3,` Charges `),Oc(),mi(4,`a`,4),wD(5,` Claims `),Oc()(),ME(6,sd,10,0,`section`,5)(7,Od,129,19,`section`,6),Oc()),e&2&&(Mv(6),NE(t.showListing()?7:6))},dependencies:[Vn$1,Pe,vn,zt,Ln,Xr,Lt,mn,Gr,ga,hn,Jn,Qn,ot,Ma,gn,Da,za,Na,Ea,Ia,Ra,ka,Pa,Oa,Ta,Aa,Fa,La,Tn$1,Mu,ws$1],styles:[`[_nghost-%COMP%]{display:block}.charges-page[_ngcontent-%COMP%]{min-height:calc(100dvh - 64px);background:#fff}.billing-tabs[_ngcontent-%COMP%]{display:flex;height:40px;align-items:center;padding:0 32px}.billing-tabs__link[_ngcontent-%COMP%]{display:inline-flex;height:40px;align-items:center;justify-content:center;padding:0 12px;border-bottom:1px solid transparent;color:#505050;font-size:16px;font-weight:600;line-height:18px;text-decoration:none}.billing-tabs__link--active[_ngcontent-%COMP%]{border-bottom-color:#0032a0;background:linear-gradient(180deg,#ffffff1a,#0b5cc91a);color:#0032a0}.billing-empty[_ngcontent-%COMP%]{display:flex;min-height:calc(100dvh - 104px);flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:0 32px 32px;text-align:center}.billing-empty__icon[_ngcontent-%COMP%]{display:inline-flex;width:48px;height:48px;align-items:center;justify-content:center;border-radius:16px;background:#0b5cc91a}.billing-empty__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .billing-empty__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.billing-empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:var(--%NS%color-ink);font-size:22px;font-weight:700}.billing-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:520px;margin:-8px 0 0;color:var(--%NS%color-muted);font-size:14px;line-height:1.5}.billing-empty__button[_ngcontent-%COMP%]{gap:8px;width:auto;min-width:208px;padding:10px 20px;border-radius:6px}.charges-listing[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding:8px 32px 24px}.charges-sync-alert[_ngcontent-%COMP%]{display:flex;min-height:36px;align-items:center;gap:10px;padding:8px 12px;border:1px solid #ea580c;border-radius:6px;background:#fff7ed;color:#c2410c;font-size:13px}.charges-sync-alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;width:16px;height:16px;align-items:center;justify-content:center;border:1px solid currentColor;border-radius:50%;font-size:11px;font-weight:700}.charges-filters[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #CEDBEB;border-radius:8px;background:#f8fafc}.charges-filters__header[_ngcontent-%COMP%]{display:flex;width:100%;height:unset;align-items:center;justify-content:space-between;border:0;padding:19px 16px;background:transparent;color:var(--%NS%color-primary);font-size:14px;font-weight:600}.charges-filters__header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:transform .22s ease}.charges-filters__body[_ngcontent-%COMP%]{max-height:220px;margin:0;padding:0 6px 16px;transition:max-height .26s ease,padding .26s ease,opacity .2s ease}.charges-filters--collapsed[_ngcontent-%COMP%]   .charges-filters__header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:rotate(180deg)}.charges-filters--collapsed[_ngcontent-%COMP%]   .charges-filters__body[_ngcontent-%COMP%]{overflow:hidden;max-height:0;padding-top:0;padding-bottom:0;opacity:0}.charges-filters__apply[_ngcontent-%COMP%]{width:auto;min-width:96px;min-height:36px;padding:8px 16px;border-radius:6px;font-size:13px}.charges-table-shell[_ngcontent-%COMP%]{overflow:hidden;border:1px solid #d9e2ef;border-radius:8px;background:#fff}.charges-table-scroll[_ngcontent-%COMP%]{max-height:calc(100dvh - 350px);min-height:308px;overflow:auto;scrollbar-color:rgba(100,116,139,.42) transparent;scrollbar-width:thin}.charges-table-shell[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;min-width:1160px;table-layout:fixed}.charges-table-shell[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .charges-table-shell[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{overflow:hidden}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-id[_ngcontent-%COMP%]{width:160px}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-dateOfService[_ngcontent-%COMP%], .charges-table-shell[_ngcontent-%COMP%]   .mat-column-dateOfAdmission[_ngcontent-%COMP%]{width:148px}.charges-table-shell[_ngcontent-%COMP%]   td.mat-column-id[_ngcontent-%COMP%], .charges-table-shell[_ngcontent-%COMP%]   td.mat-column-dateOfService[_ngcontent-%COMP%], .charges-table-shell[_ngcontent-%COMP%]   td.mat-column-dateOfAdmission[_ngcontent-%COMP%]{font-family:IBM Plex Mono,monospace}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-renderingPhysician[_ngcontent-%COMP%]{width:250px}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-chargeValue[_ngcontent-%COMP%]{width:144px;font-feature-settings:"tnum"}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{width:210px}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-actions[_ngcontent-%COMP%]{width:92px;text-align:center}.charges-empty-table-cell[_ngcontent-%COMP%]{height:415px;padding:0;border-bottom:0}.charges-loading-state[_ngcontent-%COMP%], .charges-no-results[_ngcontent-%COMP%]{display:flex;min-height:415px;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--%NS%color-muted);text-align:center}.charges-loading-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .charges-no-results[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--%NS%color-ink);font-size:18px;font-weight:600}.charges-no-results[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--%NS%color-muted);font-size:14px}.charges-no-results__icon[_ngcontent-%COMP%]{width:48px;height:48px;display:block}.charges-loading-spinner[_ngcontent-%COMP%]{width:44px;height:44px;border:4px solid #dbeafe;border-top-color:var(--%NS%color-primary);border-radius:50%;animation:_ngcontent-%COMP%_charges-spin .8s linear infinite}@keyframes _ngcontent-%COMP%_charges-spin{to{transform:rotate(360deg)}}.charge-id-cell[_ngcontent-%COMP%], .charge-status-cell[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:4px}.charge-id-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--%NS%color-primary);font-family:IBM Plex Mono,monospace;font-size:13px;font-weight:700}.charge-id-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:fit-content;padding:2px 6px;border:1px solid #f59e0b;border-radius:4px;background:#f59e0b21;color:#f59e0b;font-size:9px;font-weight:700;text-transform:uppercase}.charge-status[_ngcontent-%COMP%]{width:fit-content;padding:3px 8px;border-radius:999px;font-size:11px;font-weight:700}.charge-status[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:6px;height:6px;margin-right:6px;border-radius:50%;background:currentColor}.charge-status--success[_ngcontent-%COMP%]{background:#ecfdf5;color:#166534}.charge-status--danger[_ngcontent-%COMP%]{background:#fee2e2;color:#c0392b}.charge-status--draft[_ngcontent-%COMP%]{background:#f3f4f6;color:#475569}.charge-status-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#64748b;font-size:11px;opacity:.72}.charges-action-button[_ngcontent-%COMP%]{display:inline-flex;width:32px;height:32px;flex-direction:column;align-items:center;justify-content:center;gap:3px;border:0;border-radius:6px;background:transparent}.charges-action-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:3px;height:3px;border-radius:50%;background:var(--%NS%color-primary)}.charges-table-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:14px 16px;border-top:1px solid #e2e8f0;background:#f8fafc}.charges-export[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.billing-mat-select--export[_ngcontent-%COMP%]{width:150px}.charges-export__button[_ngcontent-%COMP%]{width:auto;min-height:36px;border-radius:6px;padding:0 20px;font-size:13px}.charges-menu-icon[_ngcontent-%COMP%]{display:inline-flex;width:16px;height:16px;align-items:center;justify-content:center;margin-right:10px;color:var(--%NS%color-primary);font-size:13px}.charges-menu-danger[_ngcontent-%COMP%], .charges-menu-danger[_ngcontent-%COMP%]   .charges-menu-icon[_ngcontent-%COMP%]{color:#ef4444}  .cdk-overlay-container{z-index:10000}  .cdk-overlay-pane:has(.billing-select-panel),   .cdk-overlay-pane:has(.charges-action-menu){z-index:10001}@media(max-width:1199.98px){.charges-filters__body[_ngcontent-%COMP%]{max-height:360px}}@media(min-width:1280px){.charges-table-scroll[_ngcontent-%COMP%]{overflow-x:hidden}.charges-table-shell[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{min-width:100%}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-id[_ngcontent-%COMP%], .charges-table-shell[_ngcontent-%COMP%]   .mat-column-dateOfService[_ngcontent-%COMP%], .charges-table-shell[_ngcontent-%COMP%]   .mat-column-dateOfAdmission[_ngcontent-%COMP%]{width:13%}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-chargeValue[_ngcontent-%COMP%]{width:12%}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-renderingPhysician[_ngcontent-%COMP%], .charges-table-shell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{width:21%}.charges-table-shell[_ngcontent-%COMP%]   .mat-column-actions[_ngcontent-%COMP%]{width:7%}}@media(max-width:767.98px){.billing-tabs[_ngcontent-%COMP%], .charges-listing[_ngcontent-%COMP%]{padding-right:16px;padding-left:16px}.billing-tabs[_ngcontent-%COMP%]{overflow-x:auto}.billing-empty[_ngcontent-%COMP%]{padding:0 16px 32px}.billing-empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.charges-filters__body[_ngcontent-%COMP%]{max-height:620px}.charges-filters__apply[_ngcontent-%COMP%]{width:100%}.charges-table-footer[_ngcontent-%COMP%]{align-items:stretch;flex-direction:column}.charges-export[_ngcontent-%COMP%]{justify-content:space-between}}`]})};export{Ba as Charges};