(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},32:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),o=a(7),l=(a(31),a(17)),u=a(18),m=a(25),s=a(24),d=(a(32),a(1)),h=function(e){var t=e.data.list[0].main.temp.toFixed(),a=e.data.list[0].main.feels_like.toFixed();return r.a.createElement("div",{className:"currentWeather"},r.a.createElement("div",null,"Current Temp: ",t," \xb0C"),r.a.createElement("div",null,"Feels Like: ",a," \xb0C"),r.a.createElement("div",null,"humidity: ",e.data.list[0].main.humidity," %"))},f=function(e){var t=e.cityName;return r.a.createElement("h1",{className:"title"},"Hello! This is the weather in ",t)},E=a(9),v=function(e){var t=e.onSearch,a=Object(n.useState)(""),c=Object(E.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i)},className:"searchForm"},r.a.createElement("input",{type:"text",onChange:function(e){o(e.target.value)},className:"inputText"}),r.a.createElement("input",{type:"submit",value:"Search !",className:"inputSubmit"}))},p=a(19),g=a.n(p),b=function(e){var t=e.main.temp.toFixed(),a=e.main.feels_like.toFixed();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dayDiv"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement(g.a,{format:"ddd MMMM Do"},e.dt_txt)),r.a.createElement("div",null,"Temperature ",t,"\xb0C"),r.a.createElement("div",null,"Feels Like ",a,"\xb0C"),r.a.createElement("div",null,"Humidity ",e.main.humidity,"%"))))},y=function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),c=a[0],i=a[1];Object(n.useEffect)((function(){return o()}),[e]);var o=function(){i(e.data.list.filter((function(e){return e.dt_txt.includes("12:00:00")})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"weeklyTitle"},"Weekly Weather in ",e.data.cityName),r.a.createElement("div",{className:"dayList"},c.map((function(e){return r.a.createElement(b,Object.assign({},e,{key:e.dt_txt}))}))))},w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{onSearch:e.onSearch}),r.a.createElement(f,{cityName:e.cityName}),r.a.createElement(h,{data:e}),r.a.createElement(y,{data:e}))},N=function(){return r.a.createElement("div",{className:"contact"},"coming soon !")},j=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",null,r.a.createElement(o.b,{activeClassName:"active",exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{activeClassName:"active",to:"/contact"},"Contact"))))},S=function(){return r.a.createElement("div",{className:"footer"},"Footer TBD")},k=a(21),x=a(22),C=a.n(x),O=a(11);function F(){var e=Object(k.a)(["\n  margin: 30% auto 30% auto;\n"]);return F=function(){return e},e}var D=Object(O.css)(F()),L=function(e){var t=e.isLoading;return r.a.createElement(C.a,{loading:t,height:5,width:250,color:"#EC6D4C",css:D})},T=function(){return r.a.createElement("div",{className:"error"},"Error ! You have to allow your geolocation :)")},M=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getLocation=function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude;n.fetchData(t,a)}),(function(){return n.setState({error:!0})}))},n.fetchData=function(e,t){fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e,"&lon=").concat(t,"&appid=").concat("b913ade44a014ad9e219c08ba75281bf","&units=metric")).then((function(e){return e.json()})).then((function(e){n.setState({data:e})}))},n.onSearch=function(e){fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&appid=").concat("b913ade44a014ad9e219c08ba75281bf","&units=metric")).then((function(e){return e.json()})).then((function(e){n.setState({data:e})}))},n.state={data:null,error:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){var e=this,t=this.state.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return t?r.a.createElement(w,Object.assign({},t,{onSearch:e.onSearch,cityName:t.city.name})):e.state.error?r.a.createElement(T,null):r.a.createElement(L,{isLoading:!e.state.data})}}),r.a.createElement(d.a,{path:"/contact",component:N})),r.a.createElement(S,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.55899c22.chunk.js.map