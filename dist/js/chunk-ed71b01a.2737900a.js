(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed71b01a"],{"057f":function(e,a,r){var t=r("fc6a"),n=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(a){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?s(e):n(t(e))}},"1a64":function(e,a,r){"use strict";var t=r("d208"),n=r.n(t);n.a},"1dde":function(e,a,r){var t=r("d039"),n=r("b622"),o=r("2d00"),i=n("species");e.exports=function(e){return o>=51||!t((function(){var a=[],r=a.constructor={};return r[i]=function(){return{foo:1}},1!==a[e](Boolean).foo}))}},"277d":function(e,a,r){var t=r("23e7"),n=r("e8b5");t({target:"Array",stat:!0},{isArray:n})},"3ca3":function(e,a,r){"use strict";var t=r("6547").charAt,n=r("69f3"),o=r("7dd0"),i="String Iterator",s=n.set,l=n.getterFor(i);o(String,"String",(function(e){s(this,{type:i,string:String(e),index:0})}),(function(){var e,a=l(this),r=a.string,n=a.index;return n>=r.length?{value:void 0,done:!0}:(e=t(r,n),a.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,a,r){"use strict";var t=r("0366"),n=r("7b0b"),o=r("9bdd"),i=r("e95a"),s=r("50c4"),l=r("8418"),u=r("35a1");e.exports=function(e){var a,r,d,c,f,m,b=n(e),v="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,h=void 0!==g,y=u(b),w=0;if(h&&(g=t(g,p>2?arguments[2]:void 0,2)),void 0==y||v==Array&&i(y))for(a=s(b.length),r=new v(a);a>w;w++)m=h?g(b[w],w):b[w],l(r,w,m);else for(c=y.call(b),f=c.next,r=new v;!(d=f.call(c)).done;w++)m=h?o(c,g,[d.value,w],!0):d.value,l(r,w,m);return r.length=w,r}},6547:function(e,a,r){var t=r("a691"),n=r("1d80"),o=function(e){return function(a,r){var o,i,s=String(n(a)),l=t(r),u=s.length;return l<0||l>=u?e?"":void 0:(o=s.charCodeAt(l),o<55296||o>56319||l+1===u||(i=s.charCodeAt(l+1))<56320||i>57343?e?s.charAt(l):o:e?s.slice(l,l+2):i-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"746f":function(e,a,r){var t=r("428f"),n=r("5135"),o=r("e538"),i=r("9bf2").f;e.exports=function(e){var a=t.Symbol||(t.Symbol={});n(a,e)||i(a,e,{value:o.f(e)})}},8418:function(e,a,r){"use strict";var t=r("c04e"),n=r("9bf2"),o=r("5c6c");e.exports=function(e,a,r){var i=t(a);i in e?n.f(e,i,o(0,r)):e[i]=r}},a4d3:function(e,a,r){"use strict";var t=r("23e7"),n=r("da84"),o=r("d066"),i=r("c430"),s=r("83ab"),l=r("4930"),u=r("fdbf"),d=r("d039"),c=r("5135"),f=r("e8b5"),m=r("861d"),b=r("825a"),v=r("7b0b"),p=r("fc6a"),g=r("c04e"),h=r("5c6c"),y=r("7c73"),w=r("df75"),S=r("241c"),$=r("057f"),k=r("7418"),A=r("06cf"),N=r("9bf2"),P=r("d1e7"),_=r("9112"),x=r("6eeb"),C=r("5692"),I=r("f772"),q=r("d012"),R=r("90e3"),M=r("b622"),O=r("e538"),B=r("746f"),j=r("d44e"),T=r("69f3"),E=r("b727").forEach,G=I("hidden"),L="Symbol",F="prototype",U=M("toPrimitive"),z=T.set,D=T.getterFor(L),K=Object[F],H=n.Symbol,J=o("JSON","stringify"),V=A.f,Y=N.f,W=$.f,Z=P.f,Q=C("symbols"),X=C("op-symbols"),ee=C("string-to-symbol-registry"),ae=C("symbol-to-string-registry"),re=C("wks"),te=n.QObject,ne=!te||!te[F]||!te[F].findChild,oe=s&&d((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,a,r){var t=V(K,a);t&&delete K[a],Y(e,a,r),t&&e!==K&&Y(K,a,t)}:Y,ie=function(e,a){var r=Q[e]=y(H[F]);return z(r,{type:L,tag:e,description:a}),s||(r.description=a),r},se=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof H},le=function(e,a,r){e===K&&le(X,a,r),b(e);var t=g(a,!0);return b(r),c(Q,t)?(r.enumerable?(c(e,G)&&e[G][t]&&(e[G][t]=!1),r=y(r,{enumerable:h(0,!1)})):(c(e,G)||Y(e,G,h(1,{})),e[G][t]=!0),oe(e,t,r)):Y(e,t,r)},ue=function(e,a){b(e);var r=p(a),t=w(r).concat(be(r));return E(t,(function(a){s&&!ce.call(r,a)||le(e,a,r[a])})),e},de=function(e,a){return void 0===a?y(e):ue(y(e),a)},ce=function(e){var a=g(e,!0),r=Z.call(this,a);return!(this===K&&c(Q,a)&&!c(X,a))&&(!(r||!c(this,a)||!c(Q,a)||c(this,G)&&this[G][a])||r)},fe=function(e,a){var r=p(e),t=g(a,!0);if(r!==K||!c(Q,t)||c(X,t)){var n=V(r,t);return!n||!c(Q,t)||c(r,G)&&r[G][t]||(n.enumerable=!0),n}},me=function(e){var a=W(p(e)),r=[];return E(a,(function(e){c(Q,e)||c(q,e)||r.push(e)})),r},be=function(e){var a=e===K,r=W(a?X:p(e)),t=[];return E(r,(function(e){!c(Q,e)||a&&!c(K,e)||t.push(Q[e])})),t};if(l||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,a=R(e),r=function(e){this===K&&r.call(X,e),c(this,G)&&c(this[G],a)&&(this[G][a]=!1),oe(this,a,h(1,e))};return s&&ne&&oe(K,a,{configurable:!0,set:r}),ie(a,e)},x(H[F],"toString",(function(){return D(this).tag})),x(H,"withoutSetter",(function(e){return ie(R(e),e)})),P.f=ce,N.f=le,A.f=fe,S.f=$.f=me,k.f=be,O.f=function(e){return ie(M(e),e)},s&&(Y(H[F],"description",{configurable:!0,get:function(){return D(this).description}}),i||x(K,"propertyIsEnumerable",ce,{unsafe:!0}))),t({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:H}),E(w(re),(function(e){B(e)})),t({target:L,stat:!0,forced:!l},{for:function(e){var a=String(e);if(c(ee,a))return ee[a];var r=H(a);return ee[a]=r,ae[r]=a,r},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(c(ae,e))return ae[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),t({target:"Object",stat:!0,forced:!l,sham:!s},{create:de,defineProperty:le,defineProperties:ue,getOwnPropertyDescriptor:fe}),t({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:me,getOwnPropertySymbols:be}),t({target:"Object",stat:!0,forced:d((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(v(e))}}),J){var ve=!l||d((function(){var e=H();return"[null]"!=J([e])||"{}"!=J({a:e})||"{}"!=J(Object(e))}));t({target:"JSON",stat:!0,forced:ve},{stringify:function(e,a,r){var t,n=[e],o=1;while(arguments.length>o)n.push(arguments[o++]);if(t=a,(m(a)||void 0!==e)&&!se(e))return f(a)||(a=function(e,a){if("function"==typeof t&&(a=t.call(this,e,a)),!se(a))return a}),n[1]=a,J.apply(null,n)}})}H[F][U]||_(H[F],U,H[F].valueOf),j(H,L),q[G]=!0},a630:function(e,a,r){var t=r("23e7"),n=r("4df4"),o=r("1c7e"),i=!o((function(e){Array.from(e)}));t({target:"Array",stat:!0,forced:i},{from:n})},d208:function(e,a,r){},d28b:function(e,a,r){var t=r("746f");t("iterator")},ddb0:function(e,a,r){var t=r("da84"),n=r("fdbc"),o=r("e260"),i=r("9112"),s=r("b622"),l=s("iterator"),u=s("toStringTag"),d=o.values;for(var c in n){var f=t[c],m=f&&f.prototype;if(m){if(m[l]!==d)try{i(m,l,d)}catch(v){m[l]=d}if(m[u]||i(m,u,c),n[c])for(var b in o)if(m[b]!==o[b])try{i(m,b,o[b])}catch(v){m[b]=o[b]}}}},e01a:function(e,a,r){"use strict";var t=r("23e7"),n=r("83ab"),o=r("da84"),i=r("5135"),s=r("861d"),l=r("9bf2").f,u=r("e893"),d=o.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var c={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),a=this instanceof f?new d(e):void 0===e?d():d(e);return""===e&&(c[a]=!0),a};u(f,d);var m=f.prototype=d.prototype;m.constructor=f;var b=m.toString,v="Symbol(test)"==String(d("test")),p=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,a=b.call(e);if(i(c,e))return"";var r=v?a.slice(7,-1):a.replace(p,"$1");return""===r?void 0:r}}),t({global:!0,forced:!0},{Symbol:f})}},e538:function(e,a,r){var t=r("b622");a.f=t},eaff:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Register")]),r("b-form",{on:{submit:function(a){return a.preventDefault(),e.onRegister(a)},reset:function(a){return a.preventDefault(),e.onReset(a)}}},[r("b-form-group",{attrs:{id:"input-group-username","label-cols-sm":"3",label:"Username:","label-for":"username"}},[r("b-form-input",{staticClass:"bforminp",attrs:{id:"username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(a){e.$set(e.$v.form.username,"$model",a)},expression:"$v.form.username.$model"}}),e.$v.form.username.required?e.$v.form.username.length?e._e():r("b-form-invalid-feedback",[e._v(" Username length should be between 3-8 characters long ")]):r("b-form-invalid-feedback",[e._v(" Username is required ")]),e.$v.form.username.alpha?e._e():r("b-form-invalid-feedback",[e._v(" Username should only contain letters ")])],1),r("b-form-group",{attrs:{id:"input-group-firstname","label-cols-sm":"3",label:"Firstname:","label-for":"firstName"}},[r("b-form-input",{attrs:{id:"firstname",type:"text",state:e.validateState("firstName")},model:{value:e.$v.form.firstName.$model,callback:function(a){e.$set(e.$v.form.firstName,"$model",a)},expression:"$v.form.firstName.$model"}}),e.$v.form.firstName.required?e._e():r("b-form-invalid-feedback",[e._v(" First name is required ")]),e.$v.form.firstName.alpha?e._e():r("b-form-invalid-feedback",[e._v(" First name should only contain letters ")])],1),r("b-form-group",{attrs:{id:"input-group-lastname","label-cols-sm":"3",label:"Lastname:","label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",type:"text",state:e.validateState("lastName")},model:{value:e.$v.form.lastName.$model,callback:function(a){e.$set(e.$v.form.lastName,"$model",a)},expression:"$v.form.lastName.$model"}}),e.$v.form.lastName.required?e._e():r("b-form-invalid-feedback",[e._v(" Last name is required ")]),e.$v.form.lastName.alpha?e._e():r("b-form-invalid-feedback",[e._v(" Last name should only contain letters ")])],1),r("b-form-group",{attrs:{id:"input-group-country","label-cols-sm":"3",label:"Country:","label-for":"country"}},[r("b-form-select",{attrs:{id:"country",options:e.countries,state:e.validateState("country")},model:{value:e.$v.form.country.$model,callback:function(a){e.$set(e.$v.form.country,"$model",a)},expression:"$v.form.country.$model"}}),r("b-form-invalid-feedback",[e._v(" Country is required ")])],1),r("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(a){e.$set(e.$v.form.password,"$model",a)},expression:"$v.form.password.$model"}}),e.$v.form.password.required?e.$v.form.password.$error?r("b-form-text",{attrs:{"text-variant":"info"}},[e._v(" Your password should be "),r("strong",[e._v("strong")]),e._v(". "),r("br"),e._v(" For that, your password should also be: ")]):e._e():r("b-form-invalid-feedback",[e._v(" Password is required ")]),e.$v.form.password.required&&!e.$v.form.password.length?r("b-form-invalid-feedback",[e._v(" Have length between 5-10 characters long ")]):e._e(),e.$v.form.password.required&&!e.$v.form.password.containsNumber?r("b-form-invalid-feedback",[e._v(" Have at least one number ")]):e._e(),e.$v.form.password.required&&!e.$v.form.password.containsSpecial?r("b-form-invalid-feedback",[e._v(" Have at least one special letter ")]):e._e()],1),r("b-form-group",{attrs:{id:"input-group-confirmedPassword","label-cols-sm":"3",label:"Confirm Password:","label-for":"confirmedPassword"}},[r("b-form-input",{attrs:{id:"confirmedPassword",type:"password",state:e.validateState("confirmedPassword")},model:{value:e.$v.form.confirmedPassword.$model,callback:function(a){e.$set(e.$v.form.confirmedPassword,"$model",a)},expression:"$v.form.confirmedPassword.$model"}}),e.$v.form.confirmedPassword.required?e.$v.form.confirmedPassword.sameAsPassword?e._e():r("b-form-invalid-feedback",[e._v(" The confirmed password is not equal to the original password ")]):r("b-form-invalid-feedback",[e._v(" Password confirmation is required ")])],1),r("b-form-group",{attrs:{id:"input-group-email","label-cols-sm":"3",label:"Email:","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"text",state:e.validateState("email")},model:{value:e.$v.form.email.$model,callback:function(a){e.$set(e.$v.form.email,"$model",a)},expression:"$v.form.email.$model"}}),e.$v.form.email.required?e._e():r("b-form-invalid-feedback",[e._v(" Email is required ")]),e.$v.form.email.email?e._e():r("b-form-invalid-feedback",[e._v(" Email should be in format: fdsds@ggafo.fmksaf ")])],1),r("b-button",{staticStyle:{height:"60px",width:"69px","background-color":"rgb(224, 113, 113)"},attrs:{type:"reset",variant:"danger"}},[e._v("Reset")]),r("b-button",{staticClass:"ml-5 w-75",staticStyle:{"text-align":"center","background-color":"#efc58b","font-family":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","font-weight":"bold","border-color":"black",border:"557px",height:"60px","font-size":"25px"},attrs:{type:"submit",variant:"primary"}},[e._v("Register!")]),r("div",{staticClass:"mt-2"},[e._v(" You have an account already? "),r("router-link",{attrs:{to:"login"}},[e._v(" Log in here")])],1)],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Register failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},n=[],o=(r("96cf"),r("1da1"));r("277d");function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var r=0,t=new Array(a);r<a;r++)t[r]=e[r];return t}function s(e){if(Array.isArray(e))return i(e)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function l(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r("fb6a"),r("0d03"),r("b0c0"),r("25f0");function u(e,a){if(e){if("string"===typeof e)return i(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,a):void 0}}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return s(e)||l(e)||u(e)||d()}var f=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],m=r("b5ae"),b={name:"Register",data:function(){return{form:{username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:"",submitError:void 0},countries:[{value:null,text:"",disabled:!0}],errors:[],validated:!1}},validations:{form:{username:{required:m["required"],length:function(e){return Object(m["minLength"])(3)(e)&&Object(m["maxLength"])(8)(e)},alpha:m["alpha"]},country:{required:m["required"]},firstName:{required:m["required"]},lastName:{required:m["required"]},password:{required:m["required"],length:function(e){return Object(m["minLength"])(5)(e)&&Object(m["maxLength"])(10)(e)},containsNumber:function(e){return/[0-9]/.test(e)},containsSpecial:function(e){return/[#?!@$%^&*-]/.test(e)}},confirmedPassword:{required:m["required"],sameAsPassword:Object(m["sameAs"])("password")},email:{required:m["required"]}}},mounted:function(){var e;(e=this.countries).push.apply(e,c(f))},methods:{validateState:function(e){var a=this.$v.form[e],r=a.$dirty,t=a.$error;return r?!t:null},Register:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.axios.post("https://RecipesProjBGU.cs.bgu.ac.il/Register",{username:e.form.username,password:e.form.password,firstName:e.form.firstName,lastName:e.form.lastName,email:e.form.email});case 3:a.sent,e.$router.push("/login"),a.next=11;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0.response),e.form.submitError=a.t0.response.data.message;case 11:case"end":return a.stop()}}),a,null,[[0,7]])})))()},onRegister:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Register()},onReset:function(){var e=this;this.form={username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:""},this.$nextTick((function(){e.$v.$reset()}))}}},v=b,p=(r("1a64"),r("2877")),g=Object(p["a"])(v,t,n,!1,null,"ce840f72",null);a["default"]=g.exports},fb6a:function(e,a,r){"use strict";var t=r("23e7"),n=r("861d"),o=r("e8b5"),i=r("23cb"),s=r("50c4"),l=r("fc6a"),u=r("8418"),d=r("b622"),c=r("1dde"),f=r("ae40"),m=c("slice"),b=f("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),p=[].slice,g=Math.max;t({target:"Array",proto:!0,forced:!m||!b},{slice:function(e,a){var r,t,d,c=l(this),f=s(c.length),m=i(e,f),b=i(void 0===a?f:a,f);if(o(c)&&(r=c.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(c,m,b);for(t=new(void 0===r?Array:r)(g(b-m,0)),d=0;m<b;m++,d++)m in c&&u(t,d,c[m]);return t.length=d,t}})}}]);
//# sourceMappingURL=chunk-ed71b01a.2737900a.js.map