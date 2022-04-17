(this["webpackJsonplogin-app"]=this["webpackJsonplogin-app"]||[]).push([[0],[,,,function(e,n,t){e.exports={login:"Login_login__3qBvA",actions:"Login_actions__243Di"}},,function(e,n,t){e.exports={control:"Input_control__36daS",invalid:"Input_invalid__9h8Nd"}},,function(e,n,t){e.exports={card:"Card_card__SoIsF"}},function(e,n,t){e.exports={button:"Button_button__2-Hkz"}},function(e,n,t){e.exports={home:"Home_home__2FmaJ"}},function(e,n,t){e.exports={nav:"Navigation_nav__3nR-I"}},function(e,n,t){e.exports={"main-header":"MainHeader_main-header__wGYh5"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),i=t(6),o=t.n(i),l=(t(16),t(2)),s=t(7),r=t.n(s),u=t(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})},j=t(3),b=t.n(j),f=t(8),v=t.n(f),g=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(v.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},h=a.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,n){}}),O=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),a=t[0],i=t[1];Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&i(!0)}),[]);return Object(u.jsx)(h.Provider,{value:{isLoggedIn:a,onLogin:function(e,n){localStorage.setItem("isLoggedIn","1"),i(!0)},onLogout:function(){localStorage.removeItem("isLoggedIn"),i(!1)}},children:e.children})},x=h,m=t(5),p=t.n(m),_=a.a.forwardRef((function(e,n){var t=Object(c.useRef)(),a=function(){t.current.focus()};return Object(c.useImperativeHandle)(n,(function(){return{focus:a}})),Object(u.jsxs)("div",{className:"".concat(p.a.control," ").concat(!1===e.isValid?p.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:e.id,children:e.label}),Object(u.jsx)("input",{ref:t,type:e.type,id:e.id,value:e.value,onChange:e.onChange,onBlur:e.onBlur})]})})),I=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.includes("@")}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.includes("@")}:{value:"",isValid:!1}},L=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.trim().length>6}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.trim().length>6}:{value:"",isValid:!1}},N=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),a=t[0],i=t[1],o=Object(c.useContext)(x),s=Object(c.useRef)(),r=Object(c.useRef)(),j=Object(c.useReducer)(I,{value:"",isValid:null}),f=Object(l.a)(j,2),v=f[0],h=f[1],O=Object(c.useReducer)(L,{value:"",isValid:null}),m=Object(l.a)(O,2),p=m[0],N=m[1],y=v.isValid,U=p.isValid;Object(c.useEffect)((function(){var e=setTimeout((function(){i(y&&U)}),500);return function(){clearTimeout(e)}}),[y,U]);return Object(u.jsx)(d,{className:b.a.login,children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a?o.onLogin(v.value,p.value):y?r.current.focus():s.current.focus()},children:[Object(u.jsx)(_,{ref:s,id:"email",label:"E-Mail",type:"email",isValid:y,value:v.value,onChange:function(e){h({type:"USER_INPUT",val:e.target.value})},onBlur:function(){h({type:"INPUT_BLUR"})}}),Object(u.jsx)(_,{ref:r,id:"password",label:"Password",type:"password",isValid:U,value:p.value,onChange:function(e){N({type:"USER_INPUT",val:e.target.value})},onBlur:function(){N({type:"INPUT_BLUR"})}}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)(g,{type:"submit",className:b.a.btn,children:"Login"})})]})})},y=t(9),U=t.n(y),R=function(e){return Object(u.jsx)(d,{className:U.a.home,children:Object(u.jsx)("h1",{children:"Welcome back!"})})},V=t(10),C=t.n(V),S=function(e){var n=Object(c.useContext)(x);return Object(u.jsx)("nav",{className:C.a.nav,children:Object(u.jsxs)("ul",{children:[n.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),n.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),n.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:n.onLogout,children:"Logout"})})]})})},B=t(11),P=t.n(B),T=function(e){return Object(u.jsxs)("header",{className:P.a["main-header"],children:[Object(u.jsx)("h1",{children:"A Typical Page"}),Object(u.jsx)(S,{})]})};var E=function(){var e=Object(c.useContext)(x);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(T,{}),Object(u.jsxs)("main",{children:[!e.isLoggedIn&&Object(u.jsx)(N,{}),e.isLoggedIn&&Object(u.jsx)(R,{})]})]})};o.a.render(Object(u.jsx)(O,{children:Object(u.jsx)(E,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.404f51fd.chunk.js.map