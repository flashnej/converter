(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],[,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/mintbean.cf18b629.png"},,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),u=n.n(c),o=(n(2),n(1));n(4);var l=function(e){var t,n,c=Object(a.useState)(""),u=Object(o.a)(c,2),l=u[0],i=u[1],s=[r.a.createElement("option",{key:"",value:""}," ")];if(e.rates&&Object.keys(e.rates).forEach((function(e){s.push(r.a.createElement("option",{key:e,value:e},e))})),""!=l){var m=parseFloat(e.quantity).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),p=(parseFloat(e.rates["".concat(l)])*e.quantity).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");t="".concat(m," ").concat(e.currency," is equivalent to ").concat(p," ").concat(l)}return 1!=s.length&&(n=r.a.createElement("form",{onChange:function(e){i(e.target.value)}},r.a.createElement("label",null," Convert to:",r.a.createElement("select",{id:"currency",className:"newCurrency"},s)))),r.a.createElement("div",null,n,r.a.createElement("div",{className:"result"},t))};var i=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),s=i[0],m=i[1],p=Object(a.useState)({currency:"none"}),h=Object(o.a)(p,2),f=h[0],v=h[1],E=function(e){e.preventDefault(),"quantity"===e.currentTarget.id?c(e.currentTarget.value):"currency"===e.currentTarget.id&&m(e.currentTarget.value)};return f.base&&f.rates.EUR,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Currency Converter "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),"USD"===s?fetch("https://api.exchangerate-api.com/v4/latest/USD").then((function(e){return e.ok?e:e={error:"bad fetch"}})).then((function(e){return e.json()})).then((function(e){v(e)})):"EU"===s?fetch("https://api.exchangerate-api.com/v4/latest/EUR").then((function(e){return e.ok?e:e={error:"bad fetch"}})).then((function(e){return e.json()})).then((function(e){v(e)})):"INR"===s?fetch("https://api.exchangerate-api.com/v4/latest/INR").then((function(e){return e.ok?e:e={error:"bad fetch"}})).then((function(e){return e.json()})).then((function(e){v(e)})):"CAD"===s&&fetch("https://api.exchangerate-api.com/v4/latest/CAD").then((function(e){return e.ok?e:e={error:"bad fetch"}})).then((function(e){return e.json()})).then((function(e){v(e)}))}},r.a.createElement("label",null,"Starting with:",r.a.createElement("input",{className:"numberInput",type:"number",id:"quantity",onChange:E,value:n})),r.a.createElement("label",null,r.a.createElement("select",{id:"currency",onChange:E,className:"startingCurrency"},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"EU"},"EU"),r.a.createElement("option",{value:"INR"},"INR"),r.a.createElement("option",{value:"CAD"},"CAD"))),r.a.createElement("input",{className:"button",type:"submit",value:"Submit"})),r.a.createElement(l,{currency:s,quantity:n,rates:f.rates}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.e35ad48d.chunk.js.map