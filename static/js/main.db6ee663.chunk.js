(this["webpackJsonpokta-test"]=this["webpackJsonpokta-test"]||[]).push([[0],{30:function(t,n,e){},49:function(t,n,e){},50:function(t,n,e){"use strict";e.r(n);var r=e(0),c=e.n(r),o=e(21),i=e.n(o),a=(e(30),e(8)),u=e(4),s=e.n(u),j=e(13),b=e(2),l=e(9),d=e(11),h=e(1),f=function(){var t=Object(b.g)(),n=Object(l.d)(),e=n.oktaAuth,r=n.authState;if(r.isPending)return null;var c=function(){var n=Object(j.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.push("/login"));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var t=Object(j.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.signOut());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=r.isAuthenticated?Object(h.jsx)("button",{onClick:o,children:"Logout"}):Object(h.jsx)("button",{onClick:c,children:"Login"});return Object(h.jsxs)("div",{children:[Object(h.jsx)(a.b,{to:"/",children:"Home"}),Object(h.jsx)("br",{}),Object(h.jsx)(a.b,{to:"/protected",children:"Protected"}),Object(h.jsx)("br",{}),i]})},p=e(25),O=e.n(p),g=(e(48),function(t){var n=t.config,e=t.onSuccess,c=t.onError,o=Object(r.useRef)();return Object(r.useEffect)((function(){if(!o.current)return!1;var t=new O.a(n);return t.showSignInToGetTokens({el:o.current}).then(e).catch(c),function(){return t.remove()}}),[n,e,c]),Object(h.jsx)("div",{ref:o})}),x=function(t){var n=t.config,e=Object(l.d)(),r=e.oktaAuth,c=e.authState;return c.isPending?null:c.isAuthenticated?Object(h.jsx)(b.a,{to:{pathname:"/"}}):Object(h.jsx)(g,{config:n,onSuccess:function(t){r.handleLoginRedirect(t)},onError:function(t){console.log("error logging in",t)}})},k=function(){return Object(h.jsx)("h3",{children:"Protected"})},v={issuer:"https://dev-46947239.okta.com/oauth2/default",clientId:"0oag6szs6zMWTYitD5d6",redirectUri:window.location.origin+"/login/callback"},w={baseUrl:"https://dev-46947239.okta.com",clientId:"0oag6szs6zMWTYitD5d6",redirectUri:window.location.origin+"/login/callback",authParams:{}},m=new d.OktaAuth(v),A=function(){var t=Object(b.g)(),n=function(){var n=Object(j.a)(s.a.mark((function n(e,r){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.replace(Object(d.toRelativeUrl)(r,window.location.origin));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();return Object(h.jsx)(l.c,{oktaAuth:m,onAuthRequired:function(){t.push("/login")},restoreOriginalUri:n,children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",exact:!0,component:f}),Object(h.jsx)(l.b,{path:"/protected",component:k}),Object(h.jsx)(b.b,{path:"/login",render:function(){return Object(h.jsx)(x,{config:w})}}),Object(h.jsx)(b.b,{path:"/login/callback",component:l.a})]})})},S=(e(49),function(){return Object(h.jsx)(a.a,{children:Object(h.jsx)(A,{})})});i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.db6ee663.chunk.js.map