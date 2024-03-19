import{a as he}from"./chunk-FI7CWAPY.js";import{X as fe,Y as ge,Z as we,_ as ye,aa as _e,b as K,c as Q,d as q,da as ve,e as ee,ea as be,f as te,fa as Ce,g as re,i as oe,ia as u,k as ie,l as p,m as ne,o as ae,q as v,s as se,t as le,v as de,w as me,x as ce,y as pe,z as ue}from"./chunk-KPDGMDFH.js";import{$ as G,Db as _,Hb as S,Pa as w,Ra as V,Ta as W,V as L,Va as z,Xa as $,Yb as I,_ as C,_a as X,a as N,b as O,cc as Z,ec as c,fb as T,hb as x,ia as g,ja as B,la as J,lb as D,mb as m,n as b,nb as h,oa as d,ob as y,pa as U,r as F,sa as f,t as E,ta as a,ub as Y,v as j,va as H}from"./chunk-NTYRYQ7B.js";var P=new J("JWT_OPTIONS"),Ie=(()=>{class o{constructor(e=null){this.tokenGetter=e&&e.tokenGetter||function(){}}urlBase64Decode(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:{t+="==";break}case 3:{t+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(t)}b64decode(e){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="";if(e=String(e).replace(/=+$/,""),e.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let n=0,s,l,M=0;l=e.charAt(M++);~l&&(s=n%4?s*64+l:l,n++%4)?i+=String.fromCharCode(255&s>>(-2*n&6)):0)l=t.indexOf(l);return i}b64DecodeUnicode(e){return decodeURIComponent(Array.prototype.map.call(this.b64decode(e),t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._decodeToken(t)):this._decodeToken(e)}_decodeToken(e){if(!e||e==="")return null;let t=e.split(".");if(t.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let i=this.urlBase64Decode(t[1]);if(!i)throw new Error("Cannot decode the token.");return JSON.parse(i)}getTokenExpirationDate(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._getTokenExpirationDate(t)):this._getTokenExpirationDate(e)}_getTokenExpirationDate(e){let t;if(t=this.decodeToken(e),!t||!t.hasOwnProperty("exp"))return null;let i=new Date(0);return i.setUTCSeconds(t.exp),i}isTokenExpired(e=this.tokenGetter(),t){return e instanceof Promise?e.then(i=>this._isTokenExpired(i,t)):this._isTokenExpired(e,t)}_isTokenExpired(e,t){if(!e||e==="")return!0;let i=this.getTokenExpirationDate(e);return t=t||0,i===null?!1:!(i.valueOf()>new Date().valueOf()+t*1e3)}getAuthScheme(e,t){return typeof e=="function"?e(t):e}}return o.\u0275fac=function(e){return new(e||o)(f(P))},o.\u0275prov=g({token:o,factory:o.\u0275fac}),o})(),Se=o=>o instanceof Promise?j(()=>o):b(o),Ne=(()=>{class o{constructor(e,t,i){this.jwtHelper=t,this.document=i,this.standardPorts=["80","443"],this.tokenGetter=e.tokenGetter,this.headerName=e.headerName||"Authorization",this.authScheme=e.authScheme||e.authScheme===""?e.authScheme:"Bearer ",this.allowedDomains=e.allowedDomains||[],this.disallowedRoutes=e.disallowedRoutes||[],this.throwNoTokenError=e.throwNoTokenError||!1,this.skipWhenExpired=e.skipWhenExpired}isAllowedDomain(e){let t=new URL(e.url,this.document.location.origin);if(t.host===this.document.location.host)return!0;let i=`${t.hostname}${t.port&&!this.standardPorts.includes(t.port)?":"+t.port:""}`;return this.allowedDomains.findIndex(n=>typeof n=="string"?n===i:n instanceof RegExp?n.test(i):!1)>-1}isDisallowedRoute(e){let t=new URL(e.url,this.document.location.origin);return this.disallowedRoutes.findIndex(i=>{if(typeof i=="string"){let n=new URL(i,this.document.location.origin);return n.hostname===t.hostname&&n.pathname===t.pathname}return i instanceof RegExp?i.test(e.url):!1})>-1}handleInterception(e,t,i){let n=this.jwtHelper.getAuthScheme(this.authScheme,t);if(!e&&this.throwNoTokenError)throw new Error("Could not get token from tokenGetter function.");let s=b(!1);return this.skipWhenExpired&&(s=e?Se(this.jwtHelper.isTokenExpired(e)):b(!0)),e?s.pipe(F(l=>l&&this.skipWhenExpired?t.clone():t.clone({setHeaders:{[this.headerName]:`${n}${e}`}})),E(l=>i.handle(l))):i.handle(t)}intercept(e,t){if(!this.isAllowedDomain(e)||this.isDisallowedRoute(e))return t.handle(e);let i=this.tokenGetter(e);return Se(i).pipe(E(n=>this.handleInterception(n,e,t)))}}return o.\u0275fac=function(e){return new(e||o)(f(P),f(Ie),f(I))},o.\u0275prov=g({token:o,factory:o.\u0275fac}),o})(),Me=(()=>{class o{constructor(e){if(e)throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.")}static forRoot(e){return{ngModule:o,providers:[{provide:K,useClass:Ne,multi:!0},e.jwtOptionsProvider||{provide:P,useValue:e.config},Ie]}}}return o.\u0275fac=function(e){return new(e||o)(f(o,12))},o.\u0275mod=G({type:o}),o.\u0275inj=B({}),o})();var Ee=(()=>{let r=class r{constructor(){this.title="approval-flow-application"}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=C({type:r,selectors:[["app-root"]],standalone:!0,features:[S],decls:1,vars:0,template:function(i,n){i&1&&y(0,"router-outlet")},dependencies:[ie,Me],styles:["table[_ngcontent-%COMP%]{width:100%}"]});let o=r;return o})();function Oe(o,r){o&1&&(m(0,"mat-hint",9),_(1," Esse campo \xE9 obrigat\xF3rio, preencha corretamente. "),h())}function Fe(o,r){o&1&&(m(0,"mat-hint",9),_(1," Esse campo \xE9 obrigat\xF3rio, preencha corretamente. "),h())}var Te=(()=>{let r=class r{constructor(){this.formBuilder=a(pe),this.loginService=a(u),this.router=a(p),this.isLoggedIn=!1,this.form=this.formBuilder.nonNullable.group({username:["",[v.email,v.required]],password:["",[v.required,v.minLength(6)]]})}navigateToRoutes(t){t.role==="requester"?this.router.navigateByUrl("solicitations"):t.role==="warehouseman"?this.router.navigateByUrl("warehouseman"):t.role==="admin"&&this.router.navigateByUrl("admins")}onSubmit(){this.form.valid&&this.loginService.login(this.form.getRawValue()).subscribe(t=>{localStorage.setItem("access_token",t.token),localStorage.setItem("user",JSON.stringify(t.user)),this.navigateToRoutes(t.user)})}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=C({type:r,selectors:[["app-login"]],standalone:!0,features:[S],decls:13,vars:4,consts:[[1,"login__mat__card"],[1,"login__card__content"],[1,"login__title"],["autocomplete","off",1,"login__form",3,"formGroup","ngSubmit"],[1,"login__fields"],["matInput","","placeholder","E-mail","type","email","formControlName","username"],["class","login__error__message"],["matInput","","placeholder","Senha","type","password","formControlName","password"],["color","primary","mat-raised-button","","type","submit",1,"login__button",3,"disabled"],[1,"login__error__message"]],template:function(i,n){i&1&&(m(0,"mat-card",0)(1,"mat-card-content",1)(2,"mat-card-title",2),_(3,"Fa\xE7a o login"),h(),m(4,"form",3),Y("ngSubmit",function(){return n.onSubmit()}),m(5,"mat-form-field",4),y(6,"input",5),T(7,Oe,2,0,"mat-hint",6),h(),m(8,"mat-form-field",4),y(9,"input",7),T(10,Fe,2,0,"mat-hint",6),h(),m(11,"button",8),_(12," Acessar "),h()()()()),i&2&&(w(4),x("formGroup",n.form),w(3),D(7,n.form.controls.username.invalid&&n.form.controls.username.touched?7:-1),w(3),D(10,n.form.controls.password.invalid&&n.form.controls.password.touched?10:-1),w(),x("disabled",!n.form.valid))},dependencies:[Z,ye,fe,we,ge,ve,be,Ce,ue,de,ae,se,le,me,ce,_e],styles:[".login__title[_ngcontent-%COMP%]{border-bottom:3px solid #673ab7;padding:1.3rem;font-size:1.5rem;-webkit-font-smoothing:antialiased;font-weight:600;color:#673ab7;margin-bottom:2rem}.login__mat__card[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;justify-content:center;align-items:center}.login__card__content[_ngcontent-%COMP%]{border:1px solid #e0e0e0;border-radius:5px;padding:2rem!important;display:flex;flex-direction:column;justify-content:center;min-width:30vw;text-align:center}.login__form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.login__fields[_ngcontent-%COMP%]{padding-bottom:2rem}.login__button[_ngcontent-%COMP%]{width:100%}.login__error__message[_ngcontent-%COMP%]{color:red;font-size:.8rem;padding-bottom:1rem}"]});let o=r;return o})();var xe=()=>{let o=a(p),r=a(d);if(!c(r))return!0;let e=JSON.parse(localStorage.getItem("user"));return a(u).isLoggedIn&&e.role==="requester"?!0:(o.navigate(["/login"]),!1)};var De=()=>{let o=a(p),r=a(d);if(!c(r))return!0;let e=JSON.parse(localStorage.getItem("user"));return a(u).isLoggedIn&&e.role==="admin"?!0:(o.navigate(["/login"]),!1)};var Re=()=>{let o=a(p),r=a(d);if(!c(r))return!0;let e=JSON.parse(localStorage.getItem("user"));return a(u).isLoggedIn&&e.role==="warehouseman"?!0:(o.navigate(["/login"]),!1)};var Pe=[{path:"admins",loadChildren:()=>import("./chunk-R4VQN3JU.js"),canActivate:[De]},{path:"warehouseman",loadChildren:()=>import("./chunk-CUVCW7WD.js"),canActivate:[Re]},{path:"solicitations",loadChildren:()=>import("./chunk-IHX6WTYM.js"),canActivate:[xe]},{path:"**",pathMatch:"full",redirectTo:"login"},{path:"login",component:Te}];var je="@",Le=(()=>{let r=class r{constructor(t,i,n,s,l){this.doc=t,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=a(W,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-LSUIFSU2.js")).catch(i=>{throw new L(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,i){let n=this.delegate.createRenderer(t,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new k(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let M=l.createRenderer(t,i);s.use(M)}).catch(l=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};r.\u0275fac=function(i){V()},r.\u0275prov=g({token:r,factory:r.\u0275fac});let o=r;return o})(),k=class{constructor(r){this.delegate=r,this.replay=[],this.\u0275type=1}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,t,i){this.delegate.insertBefore(r,e,t,i)}removeChild(r,e,t){this.delegate.removeChild(r,e,t)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,t,i){this.delegate.setAttribute(r,e,t,i)}removeAttribute(r,e,t){this.delegate.removeAttribute(r,e,t)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,t,i){this.delegate.setStyle(r,e,t,i)}removeStyle(r,e,t){this.delegate.removeStyle(r,e,t)}setProperty(r,e,t){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(r,e,t)),this.delegate.setProperty(r,e,t)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,t){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(r,e,t)),this.delegate.listen(r,e,t)}shouldReplay(r){return this.replay!==null&&r.startsWith(je)}};function ke(o="animations"){return $("NgAsyncAnimations"),H([{provide:z,useFactory:(r,e,t)=>new Le(r,e,t,o),deps:[I,te,X]},{provide:U,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ae=(o,r)=>{let e=a(d),t=c(e)?localStorage.getItem("access_token"):"";return t&&(o=o.clone({setHeaders:{Authorization:`Bearer ${t}`}})),r(o)};var A={providers:[oe(),ke(),ne(Pe),Q(ee(),q([Ae]))]};re(Ee,O(N({},A),{providers:[...A.providers,he()]})).catch(o=>console.error(o));
