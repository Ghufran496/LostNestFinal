(()=>{var e={};e.id=690,e.ids=[690,888,660],e.modules={1323:(e,s)=>{"use strict";Object.defineProperty(s,"l",{enumerable:!0,get:function(){return function e(s,t){return t in s?s[t]:"then"in s&&"function"==typeof s.then?s.then(s=>e(s,t)):"function"==typeof s&&"default"===t?s:void 0}}})},7562:e=>{e.exports={header:"main-navigation_header__CJ_tj",navi:"main-navigation_navi__uGlrs",new:"main-navigation_new__vFD6K",imagest:"main-navigation_imagest__K0il8",loginnav:"main-navigation_loginnav__FsBwG",mainnav:"main-navigation_mainnav__HpZ2O",btn:"main-navigation_btn__qd8su",anch:"main-navigation_anch__lRsYj"}},2068:e=>{e.exports={btn:"Button_btn__pWvy7"}},4752:e=>{e.exports={sec:"ErrorComp_sec__wgAhN",heading1:"ErrorComp_heading1__Mh5h7",div1:"ErrorComp_div1__t1XSG",para1:"ErrorComp_para1__pagyw",para2:"ErrorComp_para2__sAiD0"}},8626:e=>{e.exports={loader:"Loading_loader__2NHPb",jimuprimaryloading:"Loading_jimuprimaryloading__IK7Ye","loading-keys-app-loading":"Loading_loading-keys-app-loading__be4CY"}},1953:e=>{e.exports={item:"Specificitem_item__xNVTS",content:"Specificitem_content__3aLyR",imgdiv:"Specificitem_imgdiv__bbsyQ",container:"Specificitem_container__Qqg9m",nestedContainer:"Specificitem_nestedContainer__8Bdkn",head1:"Specificitem_head1__U6Fez",head3:"Specificitem_head3__5K4MR",head2:"Specificitem_head2__QLtIW",diverr1:"Specificitem_diverr1__3Qy9s",anchordiv:"Specificitem_anchordiv__rRgvb"}},3272:e=>{e.exports={head6:"indexmain_head6__TvGCs"}},7320:(e,s,t)=>{"use strict";t.r(s),t.d(s,{config:()=>L,default:()=>A,getServerSideProps:()=>w,getStaticPaths:()=>E,getStaticProps:()=>C,reportWebVitals:()=>q,routeModule:()=>R,unstable_getServerProps:()=>Z,unstable_getServerSideProps:()=>I,unstable_getStaticParams:()=>F,unstable_getStaticPaths:()=>k,unstable_getStaticProps:()=>G});var i={};t.r(i),t.d(i,{default:()=>b,getServerSideProps:()=>N});var n=t(7093),a=t(5244),r=t(1323),l=t(4003),c=t(4709),d=t(997),o=t(6689),h=t(1671),m=t(1758),x=t(1953),u=t.n(x),p=t(6002),g=t(1664),_=t.n(g);let j=function(e){let{_id:s,Type:t,Category:i,Title:n,Description:a,Question:r,Date,ReducedImg:l,posterEmail:c}=e.data,o=`/mylistings/${s}`;return(0,d.jsxs)("li",{className:u().item,children:[d.jsx("div",{className:u().imgdiv,children:d.jsx("img",{src:l,alt:n,width:250,height:160,style:{overflow:"scroll"}})}),(0,d.jsxs)("div",{className:u().container,children:[(0,d.jsxs)("div",{className:u().nestedContainer,children:[d.jsx("h1",{className:u().head1,children:t}),d.jsx("h3",{className:u().head3,children:Date})]}),(0,d.jsxs)("div",{className:u().diverr1,children:[(0,d.jsxs)("h2",{className:u().head2,children:[d.jsx("i",{children:"Category:"})," ",i]}),(0,d.jsxs)("h2",{className:u().head2,children:[d.jsx("i",{children:"Item Name:"})," ",n]})]})]}),d.jsx("div",{className:u().anchordiv,children:d.jsx(_(),{href:o,legacyBehavior:!0,children:d.jsx("a",{children:d.jsx(p.Z,{content:"Check Response"})})})})]})},v=e=>{let{data:s}=e;return Array.isArray(s)?d.jsx("ul",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem"},children:s.map(e=>d.jsx(j,{data:e},e._id))}):d.jsx(m.Z,{})},f=function(){let[e,s]=(0,o.useState)(""),[t,i]=(0,o.useState)(!1),[n,a]=(0,o.useState)(!1),[r,l]=(0,o.useState)("Sorry but the page you are looking for does not exist.");return((0,o.useEffect)(()=>{let e=!0;return i(!0),fetch("/api/myposts/fetchmypost").then(e=>e.json()).then(t=>{if(e){let e=Array.isArray(t)?t:[t];s(e),t.message&&(l(t.message),a(!0)),i(!1)}}).catch(s=>{e&&(a(!0),l("An error occurred while fetching data."),i(!1)),console.error("Fetch error:",s)}),()=>{e=!1}},[]),n)?d.jsx(h.Z,{errorData:r}):(0,d.jsxs)("div",{children:[0!==e.length||t?d.jsx(v,{data:e}):d.jsx("p",{style:{fontSize:"2rem",display:"flex",marginTop:"1rem",justifyContent:"center",alignItems:"center"},children:"You have not Listed any Posts"}),t&&d.jsx(m.Z,{})]})};var y=t(1649),S=t(3272),P=t.n(S);async function N(e){let s=await (0,y.getSession)({req:e.req});return s?{props:{session:s}}:{redirect:{destination:"/auth",permanent:!1}}}let b=()=>(0,d.jsxs)(o.Fragment,{children:[d.jsx("h6",{className:P().head6,children:"My Listings"}),d.jsx(f,{})]}),A=(0,r.l)(i,"default"),C=(0,r.l)(i,"getStaticProps"),E=(0,r.l)(i,"getStaticPaths"),w=(0,r.l)(i,"getServerSideProps"),L=(0,r.l)(i,"config"),q=(0,r.l)(i,"reportWebVitals"),G=(0,r.l)(i,"unstable_getStaticProps"),k=(0,r.l)(i,"unstable_getStaticPaths"),F=(0,r.l)(i,"unstable_getStaticParams"),Z=(0,r.l)(i,"unstable_getServerProps"),I=(0,r.l)(i,"unstable_getServerSideProps"),R=new n.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/mylistings",pathname:"/mylistings",bundlePath:"",filename:""},components:{App:c.default,Document:l.default},userland:i})},6002:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var i=t(997);t(6689);var n=t(2068),a=t.n(n);let r=e=>i.jsx("button",{role:"button",className:a().btn,children:e.content})},1671:(e,s,t)=>{"use strict";t.d(s,{Z:()=>m});var i=t(997),n=t(6689),a=t(968),r=t.n(a),l=t(4752),c=t.n(l),d=t(1664),o=t.n(d),h=t(6002);let m=function(e){return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsxs)(r(),{children:[i.jsx("title",{children:"Lost Nest"}),i.jsx("meta",{name:"Error Page",content:"Page is lost due to some issue"}),i.jsx("link",{rel:"icon",href:"/images/logos.png"})]}),i.jsx("section",{className:c().sec,children:(0,i.jsxs)("div",{className:c().div1,children:[i.jsx("h1",{className:c().heading1,children:"404"}),i.jsx("p",{className:c().para1,children:e.errorData}),i.jsx("p",{className:c().para2,children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),i.jsx(o(),{href:"/",children:i.jsx("a",{children:i.jsx(h.Z,{content:"Back to Homepage"})})})]})})]})}},1758:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var i=t(997);t(6689);var n=t(8626),a=t.n(n);let r=function(){return i.jsx("div",{className:a().loader,children:i.jsx("div",{className:`${a().justifycontentcenter} ${a().jimuprimaryloading}`})})}},4709:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var i=t(997),n=t(1649),a=t(6689),r=t(1664),l=t.n(r),c=t(7562),d=t.n(c),o=t(6002);let h=function(){let{data:e,status:s}=(0,n.useSession)();return i.jsx("header",{className:d().header,children:(0,i.jsxs)("div",{className:d().navi,children:[i.jsx(l(),{href:"/",className:d().imgdiv,legacyBehavior:!0,children:(0,i.jsxs)("div",{className:d().new,children:[i.jsx("img",{src:"/images/logos.png",alt:"logoimg",className:d().imagest}),i.jsx("h5",{children:"LostNest"})]})}),i.jsx("nav",{className:d().mainnav,children:(0,i.jsxs)("ul",{className:d().loginnav,children:["authenticated"===s&&(0,i.jsxs)(i.Fragment,{children:[i.jsx("li",{style:{padding:"5px"},className:d().anch,children:i.jsx(l(),{href:"/dashboard",children:"Feed"})}),i.jsx("li",{style:{padding:"5px"},className:d().anch,children:i.jsx(l(),{href:"/postlostitem",children:"Lost Item?"})}),i.jsx("li",{style:{padding:"5px"},className:d().anch,children:i.jsx(l(),{href:"/postfounditem",children:"Found Item?"})}),i.jsx("li",{style:{padding:"5px"},className:d().anch,children:i.jsx(l(),{href:"/mylistings",children:"My Listings"})}),i.jsx("li",{style:{padding:"5px"},className:d().anch,children:i.jsx(l(),{href:"/responses",children:"Response"})}),i.jsx("li",{style:{padding:"5px"},className:d().anch,children:i.jsx(l(),{href:"/profile",children:"Profile"})}),i.jsx("li",{children:i.jsx("button",{onClick:function(e){e.preventDefault(),(0,n.signOut)()},className:d().btn,children:"Logout"})})]}),"authenticated"!==s&&i.jsx("li",{style:{padding:"5px"},className:d().anch,children:i.jsx(l(),{href:"/stats",children:"Stats"})}),"authenticated"!==s&&i.jsx("li",{children:i.jsx(l(),{href:"/auth",legacyBehavior:!0,children:i.jsx("a",{children:i.jsx(o.Z,{content:"Login"})})})})]})})]})})},m=function(e){return(0,i.jsxs)(a.Fragment,{children:[i.jsx(h,{}),i.jsx("main",{children:e.children})]})};t(6764);let x=function({Component:e,pageProps:s}){return i.jsx(n.SessionProvider,{session:s.session,children:i.jsx(m,{children:i.jsx(e,{...s})})})}},4003:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var i=t(997),n=t(6859),a=t.n(n);class r extends a(){render(){return(0,i.jsxs)(n.Html,{lang:"en",children:[i.jsx(n.Head,{}),(0,i.jsxs)("body",{children:[i.jsx(n.Main,{}),i.jsx(n.NextScript,{}),i.jsx("div",{id:"Questions"}),i.jsx("div",{id:"Answers"}),i.jsx("div",{id:"Notification"}),i.jsx("div",{id:"Loading"})]})]})}}let l=r},6764:()=>{},5244:(e,s)=>{"use strict";var t;Object.defineProperty(s,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1649:e=>{"use strict";e.exports=require("next-auth/react")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),i=s.X(0,[556,859,664],()=>t(7320));module.exports=i})();