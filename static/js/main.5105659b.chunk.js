(this["webpackJsonpsimbirsoft-test"]=this["webpackJsonpsimbirsoft-test"]||[]).push([[0],{29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(20),r=c.n(i),l=c(4),o=c(3),j=a.a.createContext(),m=c(10),d=c(21),b=c(5),h=[{pathname:"/competitions",filters:["areas","plan","search"],dataType:"listOfCompetitions"},{pathname:"/competitions/:id",filters:[],dataType:"competition"},{pathname:"/competitions/:id/teams",filters:["season","stage","search"],dataType:"listOfTeams"},{pathname:"/competitions/:id/standings",filters:["standingType"],dataType:"standings"},{pathname:"/competitions/:id/matches",filters:["date","stage","status","matchday","group","season","search"],dataType:"listOfMatches"},{pathname:"/competitions/:id/scorers",filters:["limit"],dataType:"scorers"},{pathname:"/matches",filters:["competitions","date","status","search"],dataType:"listOfMatches"},{pathname:"/teams/:id/matches",filters:["date","status","venue","limit","search"],dataType:"listOfMatches"},{pathname:"/teams",filters:["search"],dataType:"listOfTeams"},{pathname:"/teams/:id",filters:[],dataType:"team"},{pathname:"/areas",filters:["search"],dataType:"listOfAreas"},{pathname:"/areas/:id",filters:[],dataType:"area"},{pathname:"/players/:id",filters:[],dataType:"player"},{pathname:"/players/:id/matches",filters:["date","status","competitions","limit","search"],dataType:"listOfMatches"}],O=[{name:"id",type:"Input",list:null,comment:"The id of a resource",pattern:"[0-9]+"},{name:"matchday",type:"Input",list:null,comment:"",pattern:"[1-4]+[0-9]*"},{name:"season",type:"Input",list:null,comment:"The starting year of a season e.g. 2017 or 2016",pattern:"YYYY"},{name:"status",type:"Enum",list:["SCHEDULED","LIVE","IN_PLAY","PAUSED","FINISHED","POSTPONED","SUSPENDED","CANCELED"],comment:"The status of a match",pattern:"[A-Z]+"},{name:"venue",type:"Enum",list:["HOME","AWAY"],comment:"Defines the venue (type)",pattern:"[A-Z]+"},{name:"dateFrom",type:"Input",list:null,comment:"e.g. 2018-06-22",pattern:"YYYY-MM-dd"},{name:"dateTo",type:"Input",list:null,comment:"e.g. 2018-06-22",pattern:"YYYY-MM-dd"},{name:"stage",type:"Input",list:null,comment:"Check the season node for available stages of a particular competition/season",pattern:"[A-Z]+"},{name:"plan",type:"Enum",list:["TIER_ONE","TIER_TWO","TIER_THREE","TIER_FOUR"],comment:"",pattern:"[A-Z]+"},{name:"competitions",type:"Input",list:null,comment:"Comma separated list of competition ids.",pattern:"d+,d+"},{name:"group",type:"Input",list:null,comment:"Allows filtering for groupings in a competition",pattern:"[A-Z]+"},{name:"limit",type:"Input",list:null,comment:"Limits your result set to the given number. Defaults to 10",pattern:"d+"},{name:"standingType",type:"Enum",list:["TOTAL","HOME","AWAY"],comment:"TOTAL (default) | HOME | AWAY",pattern:"[A-Z]+"},{name:"search",type:"Input",list:null,comment:"Text search in input data",pattern:"[0-9A-Z]+"},{name:"date",type:"Date",list:null,comment:"calendar input",pattern:"YYYY-MM-dd"}];function u(e){var t=e.filter,c=e.setFilters,a=Object(s.useContext)(j).params,i=Object(s.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1];return Object(s.useEffect)((function(){d("")}),[a]),Object(n.jsxs)("div",{className:"filters__item",children:[Object(n.jsx)("div",{className:"filter__item__name",children:t.name}),Object(n.jsx)("input",{className:"filter__item__value",type:"text",maxlength:"20",placeholder:t.comment,title:t.comment,pattern:t.pattern,onChange:function(e){d(e.target.value)},value:o,onBlur:function(e){c((function(c){return e.target.value?[].concat(Object(m.a)(c.filter((function(e){return e.type!==t.name}))),[{type:t.name,value:e.target.value}]):Object(m.a)(c.filter((function(e){return e.type!==t.name})))}))}})]})}function x(e){var t=e.filter,c=e.setFilters,a=Object(s.useState)("null"),i=Object(l.a)(a,2),r=i[0],o=i[1],d=Object(s.useContext)(j).params;return Object(s.useEffect)((function(){o("null")}),[d]),Object(n.jsxs)("div",{className:"filters__item",children:[Object(n.jsx)("div",{className:"filter__item__name",children:t.name}),Object(n.jsxs)("select",{className:"filter__item__value",value:r,onChange:function(e){return o(e.target.value)},onBlur:function(e){c((function(c){return"null"!==e.target.value?[].concat(Object(m.a)(c.filter((function(e){return e.type!==t.name}))),[{type:t.name,value:e.target.value}]):c}))},children:[Object(n.jsx)("option",{value:"null"}),t.list.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))]})]})}var _=c(23);c(29);function f(e){var t=e.filter,c=e.setFilters,a=Object(s.useContext)(j).params,i=Object(s.useState)(!1),r=Object(l.a)(i,2),o=r[0],d=r[1],b=Object(s.useState)(void 0),h=Object(l.a)(b,2),O=h[0],u=h[1];Object(s.useEffect)((function(){setTimeout((function(){return d(!1)}),300),O&&c((function(e){return[].concat(Object(m.a)(e.filter((function(e){return-1===e.type.indexOf("date")}))),[{type:"dateFrom",value:x(O[0])},{type:"dateTo",value:x(O[1])}])}))}),[O]),Object(s.useEffect)((function(){u(void 0)}),[a]);var x=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)};return Object(n.jsxs)("div",{className:"filters__item",children:[Object(n.jsx)("div",{className:"filter__item__name",children:t.name}),!0===o?Object(n.jsx)(_.a,{selectRange:!0,returnValue:"end",onChange:u,on:!0}):Object(n.jsx)("input",{className:"filter__item__value",pattern:t.pattern,onClick:function(){return d(!0)},value:O?x(O[0])+", "+x(O[1]):""})]})}function p(e){var t=e.param,c=Object(s.useContext)(j).setParams,a=Object(b.g)();return Object(n.jsxs)("div",{className:"filters__applied-item",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{className:"filters__applied-item__name",children:[t.type," :"]}),Object(n.jsx)("span",{className:"filters__applied-item__value",children:t.value})]}),Object(n.jsx)(o.b,{to:{pathname:a.pathname,search:function(){var e=new URL(window.location);return-1!==t.type.indexOf("date")?(e.searchParams.delete("dateTo"),e.searchParams.delete("dateFrom")):e.searchParams.delete(t.type),e.search}()},className:"filters__applied-item__remove-button",onClick:function(){c((function(e){return-1!==t.type.indexOf("date")?e.filter((function(e){return-1===e.type.indexOf("date")})):e.filter((function(e){return e.type!==t.type}))}))},children:"\xd7"})]})}c(35);function v(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(s.useContext)(j),r=i.setParams,_=i.params,v=Object(b.g)();Object(s.useEffect)((function(){var e,t=new URL(window.location),c=[],n=Object(d.a)(t.searchParams);try{for(n.s();!(e=n.n()).done;){var s=Object(l.a)(e.value,2),a=s[0],i=s[1];c=[].concat(Object(m.a)(c),[{type:a,value:i}])}}catch(o){n.e(o)}finally{n.f()}r(c)}),[v.pathname]);return Object(n.jsx)("div",{className:"filter-search-block",children:Object(n.jsxs)("form",{className:"filters",children:[Object(n.jsx)("h2",{className:"filters__header",children:"Filters"}),Object(n.jsx)("div",{className:"params-list",children:_.map((function(e){return Object(n.jsx)(p,{param:e},e.type)}))}),Object(n.jsx)("hr",{}),h.map((function(e){return Object(b.f)(v.pathname,{path:e.pathname,exact:!0,strict:!1})?e.filters.map((function(e){return O.map((function(t){if(t.name!==e)return null;switch(t.type){default:return null;case"Input":return Object(n.jsx)(u,{filter:t,setFilters:a},t.name);case"Enum":return Object(n.jsx)(x,{filter:t,setFilters:a},t.name);case"Date":return Object(n.jsx)(f,{filter:t,setFilters:a},t.name)}}))})):null})),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"filters__button-section",children:[Object(n.jsx)(o.b,{to:{pathname:v.pathname,search:c.length?function(){var e=new URL(window.location);return c.forEach((function(t){return e.searchParams.set(t.type,t.value)})),e.search}():window.location.search},className:"filters__button-section__button",onClick:function(){c.length&&(r((function(e){return e.filter((function(e){return-1===c.findIndex((function(t){return t.type===e.type}))})).concat(c)})),a([]))},children:"Apply"}),Object(n.jsx)(o.b,{to:{pathname:v.pathname},className:"filters__button-section__button",onClick:function(){_.length&&r([])},children:"Clear all"})]})]})})}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c="https://api.football-data.org/",n=new URL(c+"v2"+t.pathname+t.search);return n.searchParams.delete("search"),console.log("!fetch sendRequest url:",n.toString()),fetch(n.toString(),{headers:{"X-Auth-Token":"8c4f30d4f4354979ac043901839c7664"},dataType:"json",type:"GET"}).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(t){e({message:t.toString()})}))}c(36);function g(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(s.useContext)(j).params,r=Object(b.g)();if(Object(s.useEffect)((function(){N(a,r)}),[r]),void 0===c)return null;if(c.message)return Object(n.jsx)("div",{className:"content__message",children:c.message});var m="";i.forEach((function(e){"search"===e.type&&(m=e.value.toLocaleLowerCase())}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"content__count",children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e: ",m?function(){var e=0;return c.competitions.forEach((function(t){-1!==t.name.toLocaleLowerCase().indexOf(m)&&++e})),e}():c.count]}),c.competitions.map((function(e){return-1!==e.name.toLocaleLowerCase().indexOf(m)?Object(n.jsx)(o.b,{to:"competitions/".concat(e.id),className:"content-item competition-item",children:Object(n.jsxs)("div",{className:"content-item__inner content-item__link",children:[Object(n.jsx)("div",{className:"content-item__name content-item__name--small",children:e.name}),Object(n.jsx)("div",{className:"content-item__info",children:Object(n.jsxs)("div",{children:["Area: ",e.area.countryCode," (",e.area.name,")"]})})]})},e.id):null}))]})}function y(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(s.useContext)(j).params,r=Object(b.g)();if(Object(s.useEffect)((function(){N(a,r)}),[r]),void 0===c)return null;if(c.message)return Object(n.jsx)("div",{className:"content__message",children:c.message});var m="";i.forEach((function(e){"search"===e.type&&(m=e.value.toLocaleLowerCase())}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"content__count",children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e: ",m?function(){var e=0;return c.matches.forEach((function(t){-1===t.homeTeam.name.toLocaleLowerCase().indexOf(m)&&-1===t.awayTeam.name.toLocaleLowerCase().indexOf(m)||++e})),e}():c.count]}),c.matches.map((function(e){return-1!==e.homeTeam.name.toLocaleLowerCase().indexOf(m)||-1!==e.awayTeam.name.toLocaleLowerCase().indexOf(m)?Object(n.jsx)("div",{className:"content-item match",children:Object(n.jsxs)("div",{className:"content-item__inner",children:[Object(n.jsxs)("div",{className:"match__section match__section--flex",children:[Object(n.jsx)(o.b,{to:"/teams/".concat(e.homeTeam.id),className:"button button__name match__teams",children:e.homeTeam.name}),Object(n.jsxs)("div",{className:"match__score",children:[Object(n.jsx)("div",{children:e.score.fullTime.homeTeam}),Object(n.jsx)("div",{children:"FINISHED"!==e.status?" - ":" : "}),Object(n.jsx)("div",{children:e.score.fullTime.awayTeam})]}),Object(n.jsx)(o.b,{to:"/teams/".concat(e.awayTeam.id),className:"button button__name match__teams match__teams--away",children:e.awayTeam.name})]}),Object(n.jsxs)("div",{className:"match__section match__section--flex",children:[Object(n.jsxs)("div",{children:["Date: ",Object(n.jsx)("b",{children:new Date(e.utcDate).toLocaleString()})]}),Object(n.jsxs)("div",{children:["Status: ",Object(n.jsx)("b",{children:e.status})]})]}),Object(n.jsxs)("div",{className:"match__section match__section--flex",children:[Object(n.jsxs)("div",{className:"content-item__info",children:[Object(n.jsx)("div",{children:void 0!==e.competition?"Competition: "+e.competition.name:null}),Object(n.jsxs)("div",{children:["Stage: ",e.stage]}),Object(n.jsxs)("div",{children:["Group: ",e.group]})]}),Object(n.jsxs)(o.b,{to:"/matches/".concat(e.id),className:"match__details",children:["Details ",">"]})]})]})},e.id):null}))]})}c(37);function T(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(s.useContext)(j).params,r=Object(b.g)();if(Object(s.useEffect)((function(){N(a,r)}),[r]),void 0===c)return null;if(c.message)return Object(n.jsx)("div",{className:"content__message",children:c.message});var m="";i.forEach((function(e){"search"===e.type&&(m=e.value.toLocaleLowerCase())}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"content__count",children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e: ",m?function(){var e=0;return c.teams.forEach((function(t){-1!==t.name.toLocaleLowerCase().indexOf(m)&&++e})),e}():c.count]}),c.teams.map((function(e){return-1!==e.name.toLocaleLowerCase().indexOf(m)?Object(n.jsx)(o.b,{to:"/teams/".concat(e.id),className:"content-item team-item",children:Object(n.jsxs)("div",{className:"content-item__inner content-item__link",children:[Object(n.jsxs)("div",{className:"team-item__title",children:[Object(n.jsx)("img",{className:"team-item__img",src:e.crestUrl,alt:"".concat(e.name," img")}),Object(n.jsx)("div",{className:"content-item__name",children:e.shortName})]}),Object(n.jsxs)("div",{className:"content-item__info content-item__info--small",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Name: "}),e.name]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Area: "}),e.area.name]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"tla: "}),e.tla]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Address: "}),e.address]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Phone: "}),e.phone]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Website: "}),e.website]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"email: "}),e.email]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Founded: "}),e.founded]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"ClubColors: "}),e.clubColors]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Venue: "}),e.venue]})]})]})},e.id):null}))]})}c(38);function w(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(s.useContext)(j).params,r=Object(b.g)();if(Object(s.useEffect)((function(){N(a,r)}),[r]),void 0===c)return null;if(c.message)return Object(n.jsx)("div",{className:"content__message",children:c.message});var m="";i.forEach((function(e){"search"===e.type&&(m=e.value.toLocaleLowerCase())})),console.log("---ListOfAreas--- search",m);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"content__count",children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e: ",m?function(){var e=0;return c.areas.forEach((function(t){-1!==t.name.toLocaleLowerCase().indexOf(m)&&++e})),e}():c.count]}),c.areas.map((function(e){return-1!==e.name.toLocaleLowerCase().indexOf(m)?Object(n.jsx)(o.b,{to:"/areas/".concat(e.id),className:"content-item area-item",children:Object(n.jsxs)("div",{className:"content-item__inner content-item__link",children:[Object(n.jsxs)("div",{className:"area__container",children:[e.ensignUrl?Object(n.jsx)("img",{className:"area__img",src:e.ensignUrl,alt:"img"}):null,Object(n.jsx)("div",{className:"content-item__name content-item__name--small",children:e.name})]}),Object(n.jsxs)("div",{className:"content-item__info",children:[Object(n.jsxs)("div",{children:["CountryCode: ",e.countryCode]}),Object(n.jsxs)("div",{children:["ParentArea: ",e.parentArea]})]})]})},e.id):null}))]})}c(39);function C(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(b.g)();return Object(s.useEffect)((function(){N(a,i)}),[i]),Object(s.useEffect)((function(){N(a)}),[i]),void 0===c?null:c.message?Object(n.jsx)("div",{className:"content__message",children:c.message}):Object(n.jsx)("div",{className:"content-item competition",children:Object(n.jsxs)("div",{className:"content-item__inner",children:[Object(n.jsxs)("div",{className:"competition__container",children:[c.emblemUrl?Object(n.jsx)("img",{className:"competition__img",src:c.emblemUrl,alt:"img"}):null,Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"content-item__name",children:c.name}),Object(n.jsxs)("div",{className:"content-item__info",children:["Code: ",c.code]}),Object(n.jsxs)("div",{className:"content-item__info",children:["Area: ",c.area.name]}),Object(n.jsxs)("div",{className:"content-item__info",children:["Plan: ",c.plan]})]})]}),Object(n.jsx)(o.b,{to:"/competitions/".concat(c.id,"/teams"),className:"button",children:Object(n.jsx)("div",{className:"button__name",children:"Teams"})}),Object(n.jsx)(o.b,{to:{pathname:"/competitions/".concat(c.id,"/standings"),search:"standingType=TOTAL"},className:"button",children:Object(n.jsx)("div",{className:"button__name",children:"Standings"})}),Object(n.jsx)(o.b,{to:"/competitions/".concat(c.id,"/matches"),className:"button",children:Object(n.jsx)("div",{className:"button__name",children:"Matches"})}),Object(n.jsx)(o.b,{to:"/competitions/".concat(c.id,"/scorers"),className:"button",children:Object(n.jsx)("div",{className:"button__name",children:"Scorers"})})]})})}c(40);function E(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(b.g)();return Object(s.useEffect)((function(){N(a,i)}),[i]),void 0===c?null:c.message?Object(n.jsx)("div",{className:"content__message",children:c.message}):Object(n.jsx)("div",{className:"content-item player",children:Object(n.jsxs)("div",{className:"content-item__inner",children:[Object(n.jsx)("div",{className:"content-item__name",children:c.name}),Object(n.jsxs)("div",{className:"content-item__info",children:["FirstName: ",c.firstName]}),Object(n.jsxs)("div",{className:"content-item__info",children:["LastName: ",c.lastName?c.lastName:""]}),Object(n.jsxs)("div",{className:"content-item__info",children:["DateOfBirth: ",c.dateOfBirth]}),Object(n.jsxs)("div",{className:"content-item__info",children:["CountryOfBirth: ",c.countryOfBirth]}),Object(n.jsxs)("div",{className:"content-item__info",children:["Nationality: ",c.nationality]}),Object(n.jsxs)("div",{className:"content-item__info",children:["Position: ",c.position]}),Object(n.jsxs)("div",{className:"content-item__info",children:["ShirtNumber: ",c.shirtNumber?c.position:""]}),Object(n.jsx)(o.b,{to:"/players/".concat(c.id,"/matches"),className:"button button__name",children:"Player matches"})]})})}c(41);function L(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(b.g)();return Object(s.useEffect)((function(){N(a,i)}),[i]),void 0===c?null:c.message?Object(n.jsx)("div",{className:"content__message",children:c.message}):Object(n.jsx)("div",{className:"content-item area",children:Object(n.jsxs)("div",{className:"content-item__inner",children:[Object(n.jsxs)("div",{className:"area-info__container",children:[c.ensignUrl?Object(n.jsx)("img",{className:"area-info__img",src:c.ensignUrl,alt:"img"}):null,Object(n.jsx)("div",{className:"content-item__name",children:c.name})]}),Object(n.jsxs)("div",{className:"content-item__info",children:["CountryCode: ",c.countryCode]}),Object(n.jsx)("div",{className:"content-item__info",children:"ParentArea:"}),c.parentAreaId?Object(n.jsx)(o.b,{to:"/areas/".concat(c.parentAreaId),className:"button button__name",children:c.parentArea}):"",Object(n.jsxs)("div",{className:"content-item__info",children:["ChildAreas:",c.childAreas?c.childAreas.map((function(e){return Object(n.jsx)(o.b,{to:"/areas/".concat(e.id),className:"button button__name",children:e.name})})):""]})]})})}c(42);function S(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(b.g)();return Object(s.useEffect)((function(){N(a,i)}),[i]),void 0===c?null:c.message?Object(n.jsx)("div",{className:"content__message",children:c.message}):Object(n.jsx)("div",{className:"content-item match",children:Object(n.jsxs)("div",{className:"content-item__inner",children:[Object(n.jsxs)("div",{className:"match__section match__section--flex",children:[Object(n.jsx)(o.b,{to:"/teams/".concat(c.match.homeTeam.id),className:"button button__name match__teams",children:c.match.homeTeam.name}),Object(n.jsxs)("div",{className:"match__score",children:[Object(n.jsx)("div",{children:c.match.score.fullTime.homeTeam}),Object(n.jsx)("div",{children:"FINISHED"!==c.match.status?" - ":" : "}),Object(n.jsx)("div",{children:c.match.score.fullTime.awayTeam})]}),Object(n.jsx)(o.b,{to:"/teams/".concat(c.match.awayTeam.id),className:"button button__name match__teams match__teams--away",children:c.match.awayTeam.name})]}),Object(n.jsxs)("div",{className:"match__section",children:[Object(n.jsx)("b",{children:"Match info"}),Object(n.jsx)("table",{className:"content-item__info",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Date"}),Object(n.jsx)("td",{children:new Date(c.match.utcDate).toLocaleString()})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Status"}),Object(n.jsx)("td",{children:c.match.status})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Competition"}),Object(n.jsx)("td",{children:void 0!==c.match.competition?c.match.competition.name:""})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Venue:"}),Object(n.jsx)("td",{children:c.match.venue})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Stage:"}),Object(n.jsx)("td",{children:c.match.stage})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Group:"}),Object(n.jsxs)("td",{children:[" ",c.match.group]})]})]})}),Object(n.jsxs)("div",{className:"content-item__info",children:["Referees:",Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Role"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Nationality"})]})}),Object(n.jsx)("tbody",{children:c.match.referees.map((function(e){return Object(n.jsxs)("tr",{className:"content-item__info content-item__info--small",children:[Object(n.jsx)("td",{children:e.role}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.nationality})]},e.name)}))})]})]})]}),Object(n.jsxs)("div",{className:"match__section",children:[Object(n.jsx)("b",{children:"Head to head info"}),Object(n.jsxs)("table",{className:"content-item__info",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Matches:"}),Object(n.jsx)("td",{children:c.head2head.numberOfMatches})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Total Goals:"}),Object(n.jsx)("td",{children:c.head2head.totalGoals})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Wins:"}),Object(n.jsxs)("td",{children:[c.head2head.homeTeam.wins," - ",c.head2head.awayTeam.wins]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Draws:"}),Object(n.jsxs)("td",{children:[c.head2head.homeTeam.draws," - ",c.head2head.awayTeam.draws]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Losses:"}),Object(n.jsxs)("td",{children:[c.head2head.homeTeam.losses," - ",c.head2head.awayTeam.losses]})]})]})]})]})})}c(43);function A(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(b.g)();return Object(s.useEffect)((function(){N(a,i)}),[i]),void 0===c?null:c.message?Object(n.jsx)("div",{className:"content__message",children:c.message}):Object(n.jsx)("div",{className:"content-item team",children:Object(n.jsxs)("div",{className:"content-item__inner",children:[Object(n.jsxs)("div",{className:"team__header",children:[Object(n.jsx)("img",{className:"team__img",src:c.crestUrl,alt:"".concat(c.name," img")}),Object(n.jsxs)("div",{className:"content-item__info",children:[Object(n.jsx)("div",{className:"content-item__name",children:c.name}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Area: "}),Object(n.jsx)(o.b,{to:"/areas/".concat(c.area.id),children:c.area.name})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Address:"})," ",c.address]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Phone:"})," ",c.phone]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Website:"})," ",c.website]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Email:"})," ",c.email]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Founded:"})," ",c.founded]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Club colors:"})," ",c.clubColors]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Venue:"})," ",c.venue]})]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{children:"Active Competitions:"}),Object(n.jsx)("div",{className:"team__active-competitions",children:c.activeCompetitions.map((function(e){return Object(n.jsxs)(o.b,{to:"/competitions/".concat(e.id),className:"button team__competition",children:[Object(n.jsx)("div",{className:"button__name",children:e.name}),Object(n.jsxs)("div",{className:"button__info",children:["Area: ",e.area.name]}),Object(n.jsxs)("div",{className:"button__info",children:["Plan: ",e.plan]})]},e.id)}))}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{children:"Matches:"}),Object(n.jsx)(o.b,{to:"/teams/".concat(c.id,"/matches"),className:"button",children:Object(n.jsx)("div",{className:"button__name",children:"Click to show list of matches"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{children:"Squad:"}),Object(n.jsx)("div",{className:"team__squad",children:c.squad.map((function(e,t){return Object(n.jsxs)(o.b,{to:"/players/".concat(e.id),className:"button team__player",children:[Object(n.jsx)("div",{className:"button__name",children:e.name}),Object(n.jsxs)("div",{className:"button__info button__info--small",children:["Position: ",e.position]}),Object(n.jsxs)("div",{className:"button__info button__info--small",children:["Date of birth:"," ",new Date(e.dateOfBirth).toLocaleDateString()]}),Object(n.jsxs)("div",{className:"button__info button__info--small",children:["Country of birth: ",e.countryOfBirth]}),Object(n.jsxs)("div",{className:"button__info button__info--small",children:["Nationality: ",e.nationality]}),Object(n.jsxs)("div",{className:"button__info button__info--small",children:["Shirt number: ",e.shirtNumber]}),Object(n.jsxs)("div",{className:"button__info button__info--small",children:["Role: ",e.role]})]},e.id+t)}))})]})})}c(44);function D(e){var t=e.info;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"scorers__goals",children:t.numberOfGoals}),Object(n.jsx)("td",{className:"scorers__player-name",children:Object(n.jsx)(o.b,{to:"/players/".concat(t.player.id),className:"scorers__player-name",children:t.player.name})}),Object(n.jsxs)("td",{className:"scorers__player-info",children:[Object(n.jsxs)("div",{children:["Date of birth: ",t.player.dateOfBirth]}),Object(n.jsxs)("div",{children:["Nationality: ",t.player.nationality]}),Object(n.jsxs)("div",{children:["Position: ",t.player.position]})]}),Object(n.jsx)("td",{children:Object(n.jsx)(o.b,{to:"/teams/".concat(t.team.id),className:"scorers__team",children:t.team.name})})]})}function k(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(b.g)();return Object(s.useEffect)((function(){N(a,i)}),[i]),void 0===c?null:c.message?Object(n.jsx)("div",{className:"content__message",children:c.message}):Object(n.jsx)("div",{className:"content-item scorers",children:Object(n.jsxs)("div",{className:"content-item__inner",children:[Object(n.jsxs)("div",{className:"scorers__container",children:[Object(n.jsx)("div",{className:"content-item__name content-item__name--small",children:"Competition:"}),Object(n.jsx)(o.b,{to:"/competitions/".concat(c.competition.id),children:c.competition.name})]}),Object(n.jsxs)("div",{className:"scorers__container",children:[Object(n.jsx)("div",{className:"content-item__name content-item__name--small",children:"Season:"}),Object(n.jsx)("div",{children:new Date(c.season.startDate).getFullYear()})]}),Object(n.jsx)("div",{className:"content-item__name content-item__name--small",children:"Scorers:"}),Object(n.jsxs)("table",{className:"scorers__table",children:[Object(n.jsxs)("tr",{className:"scorers__table-header",children:[Object(n.jsx)("th",{children:"Goals"}),Object(n.jsx)("th",{children:"Player"}),Object(n.jsx)("th",{children:"Player info"}),Object(n.jsx)("th",{children:"Player team"})]}),c.scorers.map((function(e){return Object(n.jsx)(D,{info:e},e.id)}))]})]})})}c(45);function F(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(b.g)();return Object(s.useEffect)((function(){N(a,i)}),[i]),void 0===c?null:c.message?Object(n.jsx)("div",{className:"content__message",children:c.message}):Object(n.jsx)("div",{className:"content-item match",children:Object(n.jsxs)("div",{className:"content-item__inner standings",children:[Object(n.jsx)("div",{className:"content-item__name",children:c.competition.name}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Area: "}),Object(n.jsx)(o.b,{to:"/areas/".concat(c.competition.area.id),children:c.competition.area.name})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Season: "}),new Date(c.season.startDate).getFullYear(),new Date(c.season.endDate).getFullYear()!==new Date(c.season.startDate).getFullYear()?" - ".concat(new Date(c.season.endDate).getFullYear()):""]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Standings:"}),c.standings.map((function(e){return Object(n.jsxs)("div",{className:"standings__item",children:[Object(n.jsxs)("div",{className:"content-item__info",children:["Type: ",Object(n.jsx)("b",{children:e.type})]}),Object(n.jsxs)("div",{className:"content-item__info",children:["Stage: ",Object(n.jsx)("b",{children:e.stage})]}),Object(n.jsxs)("table",{className:"standings__table",children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:"Team"}),Object(n.jsx)("th",{children:"G"}),Object(n.jsx)("th",{children:"W"}),Object(n.jsx)("th",{children:"D"}),Object(n.jsx)("th",{children:"L"}),Object(n.jsx)("th",{children:"GF"}),Object(n.jsx)("th",{children:"GA"}),Object(n.jsx)("th",{children:"GD"}),Object(n.jsx)("th",{children:"P"}),Object(n.jsx)("th",{children:"Last 5"})]}),Object(n.jsx)("tbody",{children:e.table.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.position}),Object(n.jsxs)("td",{className:"standings__table__team",children:[Object(n.jsx)("img",{className:"standings__table__team-img",src:e.team.crestUrl,alt:"img"}),Object(n.jsx)(o.b,{to:"/teams/".concat(e.team.id),className:"standings__table__team-name",children:e.team.name})]}),Object(n.jsx)("td",{children:e.playedGames}),Object(n.jsx)("td",{children:e.won}),Object(n.jsx)("td",{children:e.draw}),Object(n.jsx)("td",{children:e.lost}),Object(n.jsx)("td",{children:e.goalsFor}),Object(n.jsx)("td",{children:e.goalsAgainst}),Object(n.jsx)("td",{children:e.goalDifference}),Object(n.jsx)("td",{children:e.points}),Object(n.jsx)("td",{children:e.form})]},e.team.id)}))})]})]},e.type)}))]})]})})}c(46);function I(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(s.useContext)(j),r=i.token,o=i.setToken;return Object(n.jsx)("div",{className:"content-item",children:Object(n.jsxs)("div",{className:"content-item__inner home-page",children:[Object(n.jsxs)("h2",{className:"home-page__text",children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0435 \u0444\u0443\u0442\u0431\u043e\u043b\u044c\u043d\u044b\u0445 \u043b\u0438\u0433 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0433\u043e API",Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://www.football-data.org/",target:"blank",children:"https://www.football-data.org/"})})]}),Object(n.jsx)("h3",{className:"home-page__text",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 X-Auth-Token, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043d\u0430 \u0432\u044b\u0448\u0435\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u0441\u0430\u0439\u0442\u0435"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{className:"home-page__input",type:"text",value:c,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("button",{className:"home-page__button",onClick:function(e){e.preventDefault(),o(c),localStorage.setItem("token",c),a("")},children:"\u0412\u0432\u0435\u0441\u0442\u0438"})]}),Object(n.jsxs)("h4",{children:["\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0442\u043e\u043a\u0435\u043d:"," ",Object(n.jsx)("span",{className:"home-page__curent-token",children:r})]}),Object(n.jsxs)("h4",{className:"home-page__text",children:["\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u0435\u0441\u043b\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c) \u0441\u0430\u0439\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0442\u043e\u043a\u0435\u043d, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u0440\u043e\u043c \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430:"," ",Object(n.jsx)("div",{className:"home-page__autor-token",onClick:function(){return a("8c4f30d4f4354979ac043901839c7664")},children:"8c4f30d4f4354979ac043901839c7664"})]})]})})}function P(){return Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/",component:I}),Object(n.jsx)(b.b,{path:"/competitions",component:Y}),Object(n.jsx)(b.b,{path:"/matches",component:G}),Object(n.jsx)(b.b,{path:"/teams",component:U}),Object(n.jsx)(b.b,{path:"/areas",component:H}),Object(n.jsx)(b.b,{path:"/players/:id",component:B}),Object(n.jsx)(b.a,{to:"/"})]})})}var Y=function(){return Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/competitions",component:g}),Object(n.jsx)(b.b,{path:"/competitions/:id",component:M})]})},M=function(){return Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/competitions/:id",component:C}),Object(n.jsx)(b.b,{path:"/competitions/:id/teams",component:T}),Object(n.jsx)(b.b,{path:"/competitions/:id/matches",component:y}),Object(n.jsx)(b.b,{path:"/competitions/:id/scorers",component:k}),Object(n.jsx)(b.b,{path:"/competitions/:id/standings",component:F})]})},U=function(){return Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/teams",component:T}),Object(n.jsx)(b.b,{path:"/teams/:id",component:R})]})},R=function(){return Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/teams/:id",component:A}),Object(n.jsx)(b.b,{path:"/teams/:id/matches",component:y})]})},G=function(){return Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/matches",component:y}),Object(n.jsx)(b.b,{path:"/matches/:id",component:S})]})},B=function(){return Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/players/:id",component:E}),Object(n.jsx)(b.b,{path:"/players/:id/matches",component:y})]})},H=function(){return Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/areas",component:w}),Object(n.jsx)(b.b,{path:"/areas/:id",component:L})]})},W=c.p+"static/media/user.28f8f469.svg",Z=c.p+"static/media/phone.cd7d6fc2.svg",V=c.p+"static/media/mail.a49efc5e.svg";c(47);function q(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("div",{className:"footer__info-block",children:[Object(n.jsxs)("div",{className:"footer__item",children:[Object(n.jsx)("img",{className:"footer__item__icon",src:W,alt:"user"}),Object(n.jsx)("span",{className:"footer__item__text",children:"Lipatnikov Sergey"})]}),Object(n.jsxs)("a",{className:"footer__item",href:"mailto:sv.lipatnikov@mail.com",title:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c",children:[Object(n.jsx)("img",{className:"footer__item__icon",src:V,alt:"mail"}),Object(n.jsx)("span",{className:"footer__item__text footer__item__link",children:"sv.lipatnikov@gmail.com"})]}),Object(n.jsxs)("a",{className:"footer__item",href:"tel:+79603737340",title:"\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c",children:[Object(n.jsx)("img",{className:"footer__item__icon",src:Z,alt:"phone"}),Object(n.jsx)("span",{className:"footer__item__text footer__item__link",children:"+7(960)373-73-40"})]})]})})}c(48);var J=c.p+"static/media/ball.050653a5.png";function X(){return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsxs)(o.b,{to:"/",className:"header__site-logo",children:[Object(n.jsx)("img",{className:"header__site-logo__img",alt:"Logo",src:J}),Object(n.jsx)("h1",{className:"header__site-logo__text",children:"Football leagues statistics"})]}),Object(n.jsxs)("div",{className:"header__nav-menu",children:[Object(n.jsx)(o.b,{to:"/competitions",className:"header__nav-menu__item",children:"Competitions"}),Object(n.jsx)(o.b,{to:"/matches",className:"header__nav-menu__item",children:"Matches"}),Object(n.jsx)(o.b,{to:"/teams",className:"header__nav-menu__item",children:"Teams"}),Object(n.jsx)(o.b,{to:"/areas",className:"header__nav-menu__item",children:"Areas"})]})]})}function z(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)("8c4f30d4f4354979ac043901839c7664"),r=Object(l.a)(i,2),m=r[0],d=r[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("token");e&&d(e)}),[]),Object(n.jsx)(j.Provider,{value:{params:c,setParams:a,token:m,setToken:d},children:Object(n.jsxs)(o.a,{basename:"/simbirsoft-test",children:[Object(n.jsx)(X,{}),Object(n.jsxs)("div",{className:"data-block",children:[Object(n.jsx)(v,{}),Object(n.jsx)(P,{})]}),Object(n.jsx)(q,{})]})})}c(49);r.a.render(Object(n.jsx)(z,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.5105659b.chunk.js.map