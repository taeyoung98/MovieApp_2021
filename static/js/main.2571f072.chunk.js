(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{59:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),s=a.n(i),r=a(29),c=a.n(r),o=a(9),l=a(2),u=a(17),d=a.n(u),m=a(30),j=a(11),b=a(12),h=a(14),v=a(13),p=a(31),g=a.n(p),O=a(4),x=a.n(O);a(59);function f(e){var t=e.id,a=e.year,i=e.title,s=e.summary,r=e.poster,c=e.genres,l=e.language,u=e.rating,d=e.booking,m=e.audience,j=e.ranking;return Object(n.jsx)("div",{className:"movie",children:Object(n.jsxs)(o.b,{className:"movie__link",to:{pathname:"/movie/".concat(t),state:{year:a,title:i,summary:s,poster:r,genres:c}},children:[Object(n.jsx)("div",{className:"movie__ranking",children:j}),Object(n.jsx)("img",{src:r,alt:i,title:i}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h4",{className:"movie__title",children:i}),Object(n.jsxs)("h5",{className:"movie__year",children:[a," \u2022 ",l]}),Object(n.jsxs)("h5",{className:"movie__rating",children:["\uc608\uc0c1\u2605",Math.floor(.5*u*10)/10]}),Object(n.jsxs)("h6",{className:"movie__book",children:["\uc608\ub9e4\uc728",d,"% \u2022 \ub204\uc801 \uad00\uac55 ",m,"\ub9cc\uba85"]})]})]})})}f.protoTypes={id:x.a.number.isRequired,year:x.a.number.isRequired,title:x.a.string.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired,rating:x.a.number.isRequired,language:x.a.string.isRequired,booking:x.a.number.isRequired,audience:x.a.number.isRequired,ranking:x.a.number.isRequired};var y=f,_=(a(63),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:a.map((function(e){return Object(n.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,rating:e.rating,language:e.language,booking:23,audience:104,ranking:1},e.id)}))})})}}]),a}(s.a.Component));a(64);var k=function(e){return console.log(e),Object(n.jsxs)("div",{className:"about__container",children:[Object(n.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(n.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},N=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader_text",children:e.state.title})}):null}}]),a}(s.a.Component);a(65);var q=function(){return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",children:"About"})]})};a(66);var R=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(q,{}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:_}),Object(n.jsx)(l.a,{path:"/about",component:k}),Object(n.jsx)(l.a,{path:"/movie/:id",component:N})]})};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.2571f072.chunk.js.map