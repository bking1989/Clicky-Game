(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=a(8),l=a(1),o=a(2),u=a(4),m=a(3),h=a(5),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-dark"},r.a.createElement("ul",{className:"navbar-nav w-100 text-white d-flex justify-content-around"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("b",null,"Current Score:")," ",this.props.currentScore),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h3",null,"Clicky Game!")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("b",null,"High Score:")," ",this.props.highScore)))}}]),t}(r.a.Component);var S=function(e){return r.a.createElement("div",Object.assign({className:"container"},e))};var p=function(e){return r.a.createElement("div",Object.assign({className:"row d-flex justify-content-center"},e))},f={height:"250px",width:"250px"};var b=function(e){return r.a.createElement("div",Object.assign({className:"card bg-dark m-2",style:f},e))},d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={highScore:0,currentScore:0,previousClicks:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this,a=[],n=function(e){e.preventDefault();var a=e.target.getAttribute("value");t.state.previousClicks.indexOf(a)>-1&&(t.state.currentScore>t.state.highScore?(t.setState({highScore:t.state.currentScore}),t.setState({previousClicks:[]}),t.setState({currentScore:0})):(t.setState({previousClicks:[]}),t.setState({currentScore:0}))),-1===t.state.previousClicks.indexOf(a)&&(t.setState({previousClicks:[].concat(Object(s.a)(t.state.previousClicks),[a])}),t.setState({currentScore:t.state.currentScore+1}))};return e=["Ned Stark","Arya Stark","Sansa Stark","Jon Snow","Joffrey Baratheon","Cersei Lannister","Tyrion Lannister","Petyr Baelish","Daenarys Targaryen"],a.length=0,a=e.map(function(e){return e}).sort(function(){return.5-Math.random()}),r.a.createElement("div",null,r.a.createElement(v,{currentScore:this.state.currentScore,highScore:this.state.highScore}),r.a.createElement(S,null,r.a.createElement(p,null,a.slice(0,3).map(function(e){return r.a.createElement(b,{value:e,key:e.toString(),onClick:n})})),r.a.createElement(p,null,a.slice(3,6).map(function(e){return r.a.createElement(b,{value:e,key:e.toString(),onClick:n})})),r.a.createElement(p,null,a.slice(6,9).map(function(e){return r.a.createElement(b,{value:e,key:e.toString(),onClick:n})}))))}}]),t}(r.a.Component);a(15);i.a.render(r.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f058475c.chunk.js.map