(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,r){},18:function(e,t,r){},21:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),c=r(12),a=r.n(c),l=(r(17),r(18),r(3)),i=r(0);var d=function(){return Object(i.jsx)("header",{className:"text-gray-600 body-font",children:Object(i.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(i.jsxs)("a",{className:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:[Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-10 h-10 text-white p-2 bg-red-500 rounded-full",viewBox:"0 0 24 24"}),Object(i.jsx)("span",{className:"ml-3 text-xl font-bold",children:"EventApp"})]}),Object(i.jsxs)("nav",{className:"md:ml-20 flex flex-wrap items-center text-base justify-center",children:[Object(i.jsx)(l.b,{to:"/",className:"mr-5 hover:text-gray-900",children:"Home"}),Object(i.jsx)(l.b,{to:"/events",className:"mr-5 hover:text-gray-900",children:"Events"})]}),Object(i.jsx)("nav",{className:"md:ml-auto flex flex-wrap items-center text-base justify-center",children:Object(i.jsx)(l.b,{to:"/add-event",className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",children:"Create Event \u2014"})})]})})},o=r(2);var x=function(){return Object(i.jsx)("section",{className:"text-gray-600 body-font",children:Object(i.jsxs)("div",{className:"container mx-auto flex px-5 py-24 items-center justify-center flex-col",children:[Object(i.jsx)("img",{className:"lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-3xl",alt:"hero",src:"https://source.unsplash.com/720x600/?calendar/"}),Object(i.jsxs)("div",{className:"text-center lg:w-2/3 w-full",children:[Object(i.jsx)("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",children:"Event App"}),Object(i.jsx)("p",{className:"mb-8 leading-relaxed",children:"The Covid epidemic has affected the way we do several things nowadays, mostly because of the severe health and safety procedures that we must follow. This application will facilitate public gatherers to register for functions or events online before they can attend."}),Object(i.jsxs)("div",{className:"flex justify-center",children:[Object(i.jsx)(l.b,{to:"/events",className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-3",children:"All Events \u2014"}),Object(i.jsx)(l.b,{to:"/add-event",className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full",children:"Create a new Event \u2014"})]})]})]})})},b=r(7),j=r.n(b),u=r(9),f=r(4);var h=function(){Object(n.useEffect)((function(){c()}),[]);var e=Object(n.useState)([]),t=Object(f.a)(e,2),r=t[0],s=t[1],c=function(){var e=Object(u.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/events");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,s(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)("section",{class:"text-gray-600 body-font",children:Object(i.jsxs)("div",{class:"container px-5 mx-auto py-24",children:[Object(i.jsxs)("div",{class:"flex flex-col w-full mb-20",children:[Object(i.jsx)("h2",{class:"text-xs text-red-500 tracking-widest font-medium title-font mb-1 text-left font-bold",children:"BROWSE"}),Object(i.jsx)("h1",{class:"sm:text-3xl text-2xl font-medium title-font text-gray-900 text-left font-bold",children:"All Events"})]}),Object(i.jsx)("div",{class:"flex flex-wrap -m-4",children:r.map((function(e){return Object(i.jsx)("div",{class:"p-4 md:w-1/4",children:Object(i.jsxs)("div",{class:"flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-md text-left",children:[Object(i.jsx)("h2",{class:"text-gray-900 text-lg title-font font-medium font-bold",children:e.event}),Object(i.jsxs)("small",{class:"text-left text-xs mb-3",children:[Object(i.jsx)("span",{class:"text-red-500",children:"By - "})," ",e.author," | ",Object(i.jsx)("span",{class:"text-red-500",children:"Date - "}),e.date]}),Object(i.jsxs)("div",{class:"flex-grow",children:[Object(i.jsx)("p",{class:"leading-relaxed text-base",children:e.description}),Object(i.jsx)(l.b,{to:{pathname:"/events/".concat(e.id),data:e},class:"mr-2 text-xs mt-3 text-white-500 inline-flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",children:"Event Details"}),Object(i.jsx)(l.b,{to:{pathname:"/event-register/".concat(e.id),data:e},class:"mr-2 text-xs mt-3 text-white-500 inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full",children:"Register for this event"})]})]})})}))})]})})};var g=function(){var e=Object(o.g)().id;Object(n.useEffect)((function(){q()}),[]);var t=Object(n.useState)([]),r=Object(f.a)(t,2),s=r[0],c=r[1],a=Object(n.useState)([]),d=Object(f.a)(a,2),x=d[0],b=d[1],h=Object(n.useState)([]),g=Object(f.a)(h,2),m=g[0],p=g[1],O=Object(n.useState)([]),v=Object(f.a)(O,2),y=(v[0],v[1],Object(n.useState)([])),w=Object(f.a)(y,2),N=w[0],k=w[1];function C(e){return e[0].capacity-e[0].attendants.length}function E(e){return e[0].attendants.length}function S(e){return e[0].capacity}var q=function(){var t=Object(u.a)(j.a.mark((function t(){var r,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/events/".concat(e));case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,c(n),b(C(n)),p(E(n)),k(S(n));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.jsx)("section",{class:"text-gray-600 body-font",children:s.map((function(e,t){return Object(i.jsxs)("div",{class:"container px-5 py-24 mx-auto",children:[Object(i.jsxs)("div",{class:"text-center",children:[Object(i.jsx)("h1",{class:"sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 font-bold",children:e.event}),Object(i.jsx)("p",{class:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s",children:e.description}),Object(i.jsx)("div",{class:"flex mt-6 justify-center",children:Object(i.jsx)("div",{class:"w-16 h-1 rounded-full bg-red-500 inline-flex"})})]}),Object(i.jsxs)("div",{class:"flex flex-wrap -m-4 text-center py-10 justify-center",children:[Object(i.jsx)("div",{class:"p-4 md:w-1/4 sm:w-1/2 w-full",children:Object(i.jsxs)("div",{class:"border-2 border-gray-200 px-4 py-6 rounded-lg",children:[Object(i.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"text-red-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:[Object(i.jsx)("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),Object(i.jsx)("circle",{cx:"9",cy:"7",r:"4"}),Object(i.jsx)("path",{d:"M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"})]}),Object(i.jsx)("h2",{class:"title-font font-medium text-3xl text-gray-900 font-bold",children:N}),Object(i.jsx)("p",{class:"leading-relaxed",children:"seats available in this event"})]})}),Object(i.jsx)("div",{class:"p-4 md:w-1/4 sm:w-1/2 w-full",children:Object(i.jsxs)("div",{class:"border-2 border-gray-200 px-4 py-6 rounded-lg",children:[Object(i.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"text-red-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:[Object(i.jsx)("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),Object(i.jsx)("circle",{cx:"9",cy:"7",r:"4"}),Object(i.jsx)("path",{d:"M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"})]}),Object(i.jsx)("h2",{class:"title-font font-medium text-3xl text-gray-900 font-bold",children:m}),Object(i.jsx)("p",{class:"leading-relaxed",children:"occupied seats"})]})}),Object(i.jsx)("div",{class:"p-4 md:w-1/4 sm:w-1/2 w-full",children:Object(i.jsxs)("div",{class:"border-2 border-gray-200 px-4 py-6 rounded-lg",children:[Object(i.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"text-red-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:[Object(i.jsx)("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),Object(i.jsx)("circle",{cx:"9",cy:"7",r:"4"}),Object(i.jsx)("path",{d:"M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"})]}),Object(i.jsx)("h2",{class:"title-font font-medium text-3xl text-gray-900 font-bold",children:x}),Object(i.jsx)("p",{class:"leading-relaxed",children:"spots left"})]})})]}),Object(i.jsxs)("div",{class:"lg:w-2/3 w-full mx-auto overflow-auto",children:[Object(i.jsxs)("table",{class:"table-auto w-full text-left whitespace-no-wrap",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{class:"px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl",children:"Full Name"}),Object(i.jsx)("th",{class:"px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100",children:"Email"}),Object(i.jsx)("th",{class:"px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100",children:"Date Registered"}),Object(i.jsx)("th",{class:"w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"})]})}),Object(i.jsx)("tbody",{children:e.attendants.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{class:"px-4 py-3",children:e.fullName}),Object(i.jsx)("td",{class:"px-4 py-3",children:e.email}),Object(i.jsx)("td",{class:"px-4 py-3",children:e.date})]})}))})]}),Object(i.jsx)("h3",{class:"mt-60",children:"do you want to be part of this event?"}),Object(i.jsx)(l.b,{to:{pathname:"/event-register/".concat(e.id)},class:"mr-2 mt-2 text-white-500 inline-flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",children:"Register for this event \u2014"})]})]},t)}))})},m=r(8),p=r(6);var O=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),r=t[0],s=t[1],c=Object(o.f)(),a=function(e){var t=e.target.name,n=e.target.value,c=Object(p.a)({},t,n),a=Object(m.a)(Object(m.a)({},r),c);s(a)};return Object(i.jsx)("section",{class:"text-gray-600 body-font relative",children:Object(i.jsxs)("div",{class:"container px-5 py-24 mx-auto",children:[Object(i.jsxs)("div",{class:"flex flex-col text-center w-full mb-12",children:[Object(i.jsx)("h1",{class:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-bold",children:"Add Event"}),Object(i.jsx)("p",{class:"lg:w-2/3 mx-auto leading-relaxed text-base",children:"Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify."})]}),Object(i.jsx)("form",{onSubmit:function(e){new Date;var t={id:100*Math.random(),author:r.organizer,capacity:r.capacity,event:r.eventName,venue:r.venue,date:r.date,description:r.description};fetch("/add-event",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){c("/events")})),e.preventDefault()},children:Object(i.jsx)("div",{class:"lg:w-1/2 md:w-2/3 mx-auto",children:Object(i.jsxs)("div",{class:"flex flex-wrap -m-2",children:[Object(i.jsx)("div",{class:"p-2 w-full",children:Object(i.jsxs)("div",{class:"relative",children:[Object(i.jsx)("label",{for:"eventName",class:"leading-7 text-sm text-gray-600 text-left",children:"Event Name"}),Object(i.jsx)("input",{type:"text",id:"name",name:"eventName",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl",onChange:a,required:"required"})]})}),Object(i.jsx)("div",{class:"p-2 w-full",children:Object(i.jsxs)("div",{class:"relative",children:[Object(i.jsx)("label",{for:"venue",class:"leading-7 text-sm text-gray-600 text-left",children:"Venue"}),Object(i.jsx)("input",{type:"text",id:"venue",name:"venue",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl",onChange:a,required:"required"})]})}),Object(i.jsx)("div",{class:"p-2 w-1/2",children:Object(i.jsxs)("div",{class:"relative",children:[Object(i.jsx)("label",{for:"date",class:"leading-7 text-sm text-gray-600",children:"Event date"}),Object(i.jsx)("input",{type:"datetime-local",id:"date",name:"date",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl",onChange:a,required:"required"})]})}),Object(i.jsx)("div",{class:"p-2 w-1/2",children:Object(i.jsxs)("div",{class:"relative",children:[Object(i.jsx)("label",{for:"capacity",class:"leading-7 text-sm text-gray-600",children:"Capacity"}),Object(i.jsx)("input",{type:"number",id:"capacity",name:"capacity",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl",onChange:a,required:"required"})]})}),Object(i.jsx)("div",{class:"p-2 w-full",children:Object(i.jsxs)("div",{class:"relative",children:[Object(i.jsx)("label",{for:"description",class:"leading-7 text-sm text-gray-600",children:"Description"}),Object(i.jsx)("textarea",{id:"description",name:"description",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out rounded-2xl",onChange:a,required:"required"})]})}),Object(i.jsx)("div",{class:"p-2 w-full",children:Object(i.jsxs)("div",{class:"relative",children:[Object(i.jsx)("label",{for:"organizer",class:"leading-7 text-sm text-gray-600 text-left",children:"Organizer (Who is creating this event?)"}),Object(i.jsx)("input",{type:"text",id:"name",name:"organizer",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl",onChange:a,required:"required"})]})}),Object(i.jsx)("div",{class:"p-2 w-full",children:Object(i.jsx)("button",{type:"submit",class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-3",children:"Add Event \u2014"})})]})})})]})})};var v=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),r=t[0],s=t[1],c=Object(o.g)().id,a=Object(o.f)(),l=function(e){var t=e.target.name,n=e.target.value,c=Object(p.a)({},t,n),a=Object(m.a)(Object(m.a)({},r),c);s(a)};return Object(i.jsx)("section",{class:"text-gray-600 body-font relative",children:Object(i.jsxs)("div",{class:"container px-5 py-24 mx-auto",children:[Object(i.jsxs)("div",{class:"flex flex-col text-center w-full mb-12",children:[Object(i.jsx)("h1",{class:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-bold",children:"Register for Event"}),Object(i.jsx)("p",{class:"lg:w-2/3 mx-auto leading-relaxed text-base",children:"Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify."})]}),Object(i.jsx)("form",{onSubmit:function(e){var t=new Date,n={id:100*Math.random(),fullName:r.fullName,email:r.email,date:t.toLocaleDateString("en-US")};fetch("/event-register/".concat(c),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(){a("/events/".concat(c))})),e.preventDefault()},children:Object(i.jsx)("div",{class:"lg:w-1/2 md:w-2/3 mx-auto",children:Object(i.jsxs)("div",{class:"flex flex-wrap -m-2",children:[Object(i.jsx)("div",{class:"p-2 w-full",children:Object(i.jsxs)("div",{class:"relative",children:[Object(i.jsx)("label",{for:"fullName",class:"leading-7 text-sm text-gray-600 text-left",children:"Full Name"}),Object(i.jsx)("input",{type:"text",id:"name",name:"fullName",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl",onChange:l,required:"required"})]})}),Object(i.jsx)("div",{class:"p-2 w-full",children:Object(i.jsxs)("div",{class:"relative",children:[Object(i.jsx)("label",{for:"email",class:"leading-7 text-sm text-gray-600",children:"Email"}),Object(i.jsx)("input",{type:"email",id:"email",name:"email",class:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl",onChange:l,required:"required"})]})}),Object(i.jsx)("div",{class:"p-2 w-full",children:Object(i.jsx)("button",{type:"submit",class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-3",children:"Register for Event \u2014"})})]})})})]})})};var y=function(){return Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/",element:Object(i.jsx)(x,{})}),Object(i.jsx)(o.a,{path:"/events",element:Object(i.jsx)(h,{})}),Object(i.jsx)(o.a,{path:"/events/:id",element:Object(i.jsx)(g,{})}),Object(i.jsx)(o.a,{path:"/add-event",element:Object(i.jsx)(O,{})}),Object(i.jsx)(o.a,{path:"/event-register/:id",element:Object(i.jsx)(v,{})})]})};var w=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{}),Object(i.jsx)(y,{})]})},N=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,22)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),c(e),a(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(l.a,{children:Object(i.jsx)(w,{})})}),document.getElementById("root")),N()}},[[21,1,2]]]);
//# sourceMappingURL=main.5bc85fb7.chunk.js.map