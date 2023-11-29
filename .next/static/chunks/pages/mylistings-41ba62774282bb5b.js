(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[690],{33527:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mylistings",function(){return i(68334)}])},1671:function(e,n,i){"use strict";var s=i(85893),r=i(67294),t=i(9008),a=i.n(t),c=i(35150),o=i.n(c),d=i(41664),l=i.n(d),h=i(76002);n.Z=function(e){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"Lost Nest"}),(0,s.jsx)("meta",{name:"Error Page",content:"Page is lost due to some issue"}),(0,s.jsx)("link",{rel:"icon",href:"/images/logos.png"})]}),(0,s.jsx)("section",{className:o().sec,children:(0,s.jsxs)("div",{className:o().div1,children:[(0,s.jsx)("h1",{className:o().heading1,children:"404"}),(0,s.jsx)("p",{className:o().para1,children:e.errorData}),(0,s.jsx)("p",{className:o().para2,children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)("a",{children:(0,s.jsx)(h.Z,{content:"Back to Homepage"})})})]})})]})}},21758:function(e,n,i){"use strict";var s=i(85893);i(67294);var r=i(71543),t=i.n(r);n.Z=function(){return(0,s.jsx)("div",{className:t().loader,children:(0,s.jsx)("div",{className:"".concat(t().justifycontentcenter," ").concat(t().jimuprimaryloading)})})}},68334:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSP:function(){return f},default:function(){return j}});var s=i(85893),r=i(67294),t=i(1671),a=i(21758),c=i(53451),o=i.n(c),d=i(76002),l=i(41664),h=i.n(l),m=function(e){let{_id:n,Type:i,Category:r,Title:t,Description:a,Question:c,Date,ReducedImg:l,posterEmail:m}=e.data;return(0,s.jsxs)("li",{className:o().item,children:[(0,s.jsx)("div",{className:o().imgdiv,children:(0,s.jsx)("img",{src:l,alt:t,width:250,height:160,style:{overflow:"scroll"}})}),(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsxs)("div",{className:o().nestedContainer,children:[(0,s.jsx)("h1",{className:o().head1,children:i}),(0,s.jsx)("h3",{className:o().head3,children:Date})]}),(0,s.jsxs)("div",{className:o().diverr1,children:[(0,s.jsxs)("h2",{className:o().head2,children:[(0,s.jsx)("i",{children:"Category:"})," ",r]}),(0,s.jsxs)("h2",{className:o().head2,children:[(0,s.jsx)("i",{children:"Item Name:"})," ",t]})]})]}),(0,s.jsx)("div",{className:o().anchordiv,children:(0,s.jsx)(h(),{href:"/mylistings/".concat(n),legacyBehavior:!0,children:(0,s.jsx)("a",{children:(0,s.jsx)(d.Z,{content:"Check Response"})})})})]})},_=e=>{let{data:n}=e;return Array.isArray(n)?(0,s.jsx)("ul",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem"},children:n.map(e=>(0,s.jsx)(m,{data:e},e._id))}):(0,s.jsx)(a.Z,{})},p=function(){let[e,n]=(0,r.useState)(""),[i,c]=(0,r.useState)(!1),[o,d]=(0,r.useState)(!1),[l,h]=(0,r.useState)("Sorry but the page you are looking for does not exist.");return((0,r.useEffect)(()=>{let e=!0;return c(!0),fetch("/api/myposts/fetchmypost").then(e=>e.json()).then(i=>{if(e){let e=Array.isArray(i)?i:[i];n(e),i.message&&(h(i.message),d(!0)),c(!1)}}).catch(n=>{e&&(d(!0),h("An error occurred while fetching data."),c(!1)),console.error("Fetch error:",n)}),()=>{e=!1}},[]),o)?(0,s.jsx)(t.Z,{errorData:l}):(0,s.jsxs)("div",{children:[0!==e.length||i?(0,s.jsx)(_,{data:e}):(0,s.jsx)("p",{style:{fontSize:"2rem",display:"flex",marginTop:"1rem",justifyContent:"center",alignItems:"center"},children:"You have not Listed any Posts"}),i&&(0,s.jsx)(a.Z,{})]})},u=i(64923),x=i.n(u),f=!0,j=()=>(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)("h6",{className:x().head6,children:"My Listings"}),(0,s.jsx)(p,{})]})},35150:function(e){e.exports={sec:"ErrorComp_sec__wgAhN",heading1:"ErrorComp_heading1__Mh5h7",div1:"ErrorComp_div1__t1XSG",para1:"ErrorComp_para1__pagyw",para2:"ErrorComp_para2__sAiD0"}},71543:function(e){e.exports={loader:"Loading_loader__2NHPb",jimuprimaryloading:"Loading_jimuprimaryloading__IK7Ye","loading-keys-app-loading":"Loading_loading-keys-app-loading__be4CY"}},53451:function(e){e.exports={item:"SpecificItem_item__RbdNF",content:"SpecificItem_content__nGztS",imgdiv:"SpecificItem_imgdiv__KmwL1",container:"SpecificItem_container__AmkyH",nestedContainer:"SpecificItem_nestedContainer__8ILEc",head1:"SpecificItem_head1__XTJF4",head3:"SpecificItem_head3__mB7zn",head2:"SpecificItem_head2__tIm_O",diverr1:"SpecificItem_diverr1__ijexk",anchordiv:"SpecificItem_anchordiv__jzQHy"}},64923:function(e){e.exports={head6:"indexmain_head6__TvGCs"}},9008:function(e,n,i){e.exports=i(79201)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=33527)}),_N_E=e.O()}]);