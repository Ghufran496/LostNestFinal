(()=>{var e={};e.id=690,e.ids=[690],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4752:e=>{e.exports={sec:"ErrorComp_sec__wgAhN",heading1:"ErrorComp_heading1__Mh5h7",div1:"ErrorComp_div1__t1XSG",para1:"ErrorComp_para1__pagyw",para2:"ErrorComp_para2__sAiD0"}},8626:e=>{e.exports={loader:"Loading_loader__2NHPb",jimuprimaryloading:"Loading_jimuprimaryloading__IK7Ye","loading-keys-app-loading":"Loading_loading-keys-app-loading__be4CY"}},9105:e=>{e.exports={item:"SpecificItem_item__RbdNF",content:"SpecificItem_content__nGztS",imgdiv:"SpecificItem_imgdiv__KmwL1",container:"SpecificItem_container__AmkyH",nestedContainer:"SpecificItem_nestedContainer__8ILEc",head1:"SpecificItem_head1__XTJF4",head3:"SpecificItem_head3__mB7zn",head2:"SpecificItem_head2__tIm_O",diverr1:"SpecificItem_diverr1__ijexk",anchordiv:"SpecificItem_anchordiv__jzQHy"}},3272:e=>{e.exports={head6:"indexmain_head6__TvGCs"}},7320:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>k,default:()=>I,getServerSideProps:()=>q,getStaticPaths:()=>C,getStaticProps:()=>E,reportWebVitals:()=>w,routeModule:()=>O,unstable_getServerProps:()=>D,unstable_getServerSideProps:()=>F,unstable_getStaticParams:()=>Z,unstable_getStaticPaths:()=>L,unstable_getStaticProps:()=>G});var s={};r.r(s),r.d(s,{default:()=>A,getServerSideProps:()=>N});var i=r(7093),a=r(5244),n=r(1323),c=r(4003),o=r(4709),l=r(997),d=r(6689),u=r(1671),h=r(1758),p=r(9105),m=r.n(p),x=r(6002),_=r(1664),g=r.n(_);let j=function(e){let{_id:t,Type:r,Category:s,Title:i,Description:a,Question:n,Date,ReducedImg:c,posterEmail:o}=e.data,d=`/mylistings/${t}`;return(0,l.jsxs)("li",{className:m().item,children:[l.jsx("div",{className:m().imgdiv,children:l.jsx("img",{src:c,alt:i,width:250,height:160,style:{overflow:"scroll"}})}),(0,l.jsxs)("div",{className:m().container,children:[(0,l.jsxs)("div",{className:m().nestedContainer,children:[l.jsx("h1",{className:m().head1,children:r}),l.jsx("h3",{className:m().head3,children:Date})]}),(0,l.jsxs)("div",{className:m().diverr1,children:[(0,l.jsxs)("h2",{className:m().head2,children:[l.jsx("i",{children:"Category:"})," ",s]}),(0,l.jsxs)("h2",{className:m().head2,children:[l.jsx("i",{children:"Item Name:"})," ",i]})]})]}),l.jsx("div",{className:m().anchordiv,children:l.jsx(g(),{href:d,legacyBehavior:!0,children:l.jsx("a",{children:l.jsx(x.Z,{content:"Check Response"})})})})]})},f=e=>{let{data:t}=e;return Array.isArray(t)?l.jsx("ul",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem"},children:t.map(e=>l.jsx(j,{data:e},e._id))}):l.jsx(h.Z,{})},S=function(){let[e,t]=(0,d.useState)(""),[r,s]=(0,d.useState)(!1),[i,a]=(0,d.useState)(!1),[n,c]=(0,d.useState)("Sorry but the page you are looking for does not exist.");return((0,d.useEffect)(()=>{let e=!0;return s(!0),fetch("/api/myposts/fetchmypost").then(e=>e.json()).then(r=>{if(e){let e=Array.isArray(r)?r:[r];t(e),r.message&&(c(r.message),a(!0)),s(!1)}}).catch(t=>{e&&(a(!0),c("An error occurred while fetching data."),s(!1)),console.error("Fetch error:",t)}),()=>{e=!1}},[]),i)?l.jsx(u.Z,{errorData:n}):(0,l.jsxs)("div",{children:[0!==e.length||r?l.jsx(f,{data:e}):l.jsx("p",{style:{fontSize:"2rem",display:"flex",marginTop:"1rem",justifyContent:"center",alignItems:"center"},children:"You have not Listed any Posts"}),r&&l.jsx(h.Z,{})]})};var v=r(2113),P=r(9093),y=r(3272),b=r.n(y);async function N(e){let t=await (0,v.getServerSession)(e.req,e.res,P.L);return t?{props:{}}:{redirect:{destination:"/auth",permanent:!1}}}let A=()=>(0,l.jsxs)(d.Fragment,{children:[l.jsx("h6",{className:b().head6,children:"My Listings"}),l.jsx(S,{})]}),I=(0,n.l)(s,"default"),E=(0,n.l)(s,"getStaticProps"),C=(0,n.l)(s,"getStaticPaths"),q=(0,n.l)(s,"getServerSideProps"),k=(0,n.l)(s,"config"),w=(0,n.l)(s,"reportWebVitals"),G=(0,n.l)(s,"unstable_getStaticProps"),L=(0,n.l)(s,"unstable_getStaticPaths"),Z=(0,n.l)(s,"unstable_getStaticParams"),D=(0,n.l)(s,"unstable_getServerProps"),F=(0,n.l)(s,"unstable_getServerSideProps"),O=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/mylistings",pathname:"/mylistings",bundlePath:"",filename:""},components:{App:o.default,Document:c.default},userland:s})},1671:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var s=r(997),i=r(6689),a=r(968),n=r.n(a),c=r(4752),o=r.n(c),l=r(1664),d=r.n(l),u=r(6002);let h=function(e){return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsxs)(n(),{children:[s.jsx("title",{children:"Lost Nest"}),s.jsx("meta",{name:"Error Page",content:"Page is lost due to some issue"}),s.jsx("link",{rel:"icon",href:"/images/logos.png"})]}),s.jsx("section",{className:o().sec,children:(0,s.jsxs)("div",{className:o().div1,children:[s.jsx("h1",{className:o().heading1,children:"404"}),s.jsx("p",{className:o().para1,children:e.errorData}),s.jsx("p",{className:o().para2,children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),s.jsx(d(),{href:"/",children:s.jsx("a",{children:s.jsx(u.Z,{content:"Back to Homepage"})})})]})})]})}},1758:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(997);r(6689);var i=r(8626),a=r.n(i);let n=function(){return s.jsx("div",{className:a().loader,children:s.jsx("div",{className:`${a().justifycontentcenter} ${a().jimuprimaryloading}`})})}},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8432:e=>{"use strict";e.exports=require("bcryptjs")},8013:e=>{"use strict";e.exports=require("mongodb")},3227:e=>{"use strict";e.exports=require("next-auth")},2113:e=>{"use strict";e.exports=require("next-auth/next")},7449:e=>{"use strict";e.exports=require("next-auth/providers/credentials")},1649:e=>{"use strict";e.exports=require("next-auth/react")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[556,859,664,972],()=>r(7320));module.exports=s})();