(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(t,e,n){t.exports=n.p+"static/media/taxi.4ba539d0.svg"},19:function(t,e,n){t.exports=n(48)},24:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),i=(n(24),n(18)),l=n(1),s=n(2),u=n(4),p=n(3),h=n(5),f=n(16),m=n.n(f),d=n(17),g=n.n(d),v=(n(46),function(t){function e(t){return Object(l.a)(this,e),Object(u.a)(this,Object(p.a)(e).call(this,t))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("img",{src:g.a,className:"marker"})}}]),e}(a.a.Component)),b=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).miMap=null,n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"renderMarkers",value:function(t,e){t.panTo({lat:this.props.lat,lng:this.props.lon}),this.miMap=t}},{key:"componentDidUpdate",value:function(){this.miMap&&this.miMap.panTo({lat:this.props.lat,lng:this.props.lon})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{height:"100vh",width:"100%",alt:"google map of that tracks the taxi driver location"},alt:"lo que sea"},a.a.createElement(m.a,{bootstrapURLKeys:{key:"AIzaSyBQGovuMsVwP-HAiTWrNAVND5JfnikoPZ8"},defaultCenter:{lat:this.props.lat,lng:this.props.lon},defaultZoom:17,onGoogleApiLoaded:function(e){var n=e.map,o=e.maps;return t.renderMarkers(n,o)},yesIWantToUseGoogleMapApiInternals:!0},a.a.createElement(v,{lat:this.props.lat,lng:this.props.lon})))}}]),e}(o.Component);n(47);var w=function(){var t=Object(o.useState)({lat:0,lon:0}),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(o.useEffect)((function(){var t=new WebSocket("wss://wheres-my-taxi.herokuapp.com");t.onopen=function(){console.log("open my ws"),t.onmessage=function(t){console.log(t),r(JSON.parse(t.data))}};var e=new URLSearchParams(window.location.search).get("conductor");console.log(e),fetch("location?conductor="+e).then((function(t){return t.json()})).then((function(t){t.err?console.log(t):r(t)})).catch((function(t){return console.log(t)}))}),[]),a.a.createElement("div",null,a.a.createElement(b,{lat:n.lat,lon:n.lon}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e948768d.chunk.js.map