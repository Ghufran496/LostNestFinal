(()=>{var e={};e.id=277,e.ids=[277,888,660],e.modules={7562:e=>{e.exports={header:"main-navigation_header__CJ_tj",navi:"main-navigation_navi__uGlrs",new:"main-navigation_new__vFD6K",imagest:"main-navigation_imagest__K0il8",loginnav:"main-navigation_loginnav__FsBwG",mainnav:"main-navigation_mainnav__HpZ2O",btn:"main-navigation_btn__qd8su",anch:"main-navigation_anch__lRsYj"}},2068:e=>{e.exports={btn:"Button_btn__pWvy7"}},4752:e=>{e.exports={sec:"ErrorComp_sec__wgAhN",heading1:"ErrorComp_heading1__Mh5h7",div1:"ErrorComp_div1__t1XSG",para1:"ErrorComp_para1__pagyw",para2:"ErrorComp_para2__sAiD0"}},8626:e=>{e.exports={loader:"Loading_loader__2NHPb",jimuprimaryloading:"Loading_jimuprimaryloading__IK7Ye","loading-keys-app-loading":"Loading_loading-keys-app-loading__be4CY"}},4255:e=>{e.exports={profilecard:"userprofile-comp_profilecard__b_Xbh",init:"userprofile-comp_init__piR2I",moveDown:"userprofile-comp_moveDown__1QTlK",moveUp:"userprofile-comp_moveUp__EQw_r",materia:"userprofile-comp_materia__LUghx",moveIn:"userprofile-comp_moveIn__BRvjh",profilebio:"userprofile-comp_profilebio__VgGnk",puff:"userprofile-comp_puff___J4X5",borderRadius:"userprofile-comp_borderRadius__XCNju",scaleIn:"userprofile-comp_scaleIn__wbO9_",ripple:"userprofile-comp_ripple__l1Uvx"}},5702:(e,s,r)=>{"use strict";r.r(s),r.d(s,{config:()=>L,default:()=>P,getServerSideProps:()=>C,getStaticPaths:()=>q,getStaticProps:()=>w,reportWebVitals:()=>k,routeModule:()=>R,unstable_getServerProps:()=>I,unstable_getServerSideProps:()=>Z,unstable_getStaticParams:()=>F,unstable_getStaticPaths:()=>D,unstable_getStaticProps:()=>E});var i={};r.r(i),r.d(i,{default:()=>y,getServerSideProps:()=>N});var a=r(7093),t=r(5244),n=r(1323),l=r(4003),o=r(4709),c=r(997),d=r(1649),p=r(6689),h=r(4298),u=r.n(h),m=r(1758),x=r(4255),g=r.n(x),_=r(6907),j=r(1664),f=r.n(j);let v=function(e){let s=`/profile/${e.id}`;return c.jsx(p.Fragment,{children:(0,c.jsxs)("aside",{className:g().profilecard,children:[(0,c.jsxs)("header",{children:[c.jsx("div",{children:c.jsx("img",{src:"/images/profileuser.png",className:g().hoverZoomLink})}),(0,c.jsxs)("h1",{children:["ID : ",e.id]}),c.jsx("h2",{children:e.name})]}),(0,c.jsxs)("div",{className:g().profilebio,children:[(0,c.jsxs)("p",{children:["Email : ",e.email]}),c.jsx("div",{style:{marginTop:"1rem"},children:c.jsx(f(),{href:s,legacyBehavior:!0,children:c.jsx("a",{children:(0,c.jsxs)("div",{className:g().new,children:[c.jsx("p",{style:{fontSize:"15px"},children:"Change Password"}),c.jsx(_.ReloadCircleSharp,{color:"#00000",rotate:!0,height:"40px",width:"40px"})]})})})}),c.jsx("p",{style:{textDecoration:"underline",textTransform:"capitalize",fontSize:"13px"},children:'"You are enough just as you are."'})]})]})})};var S=r(1671);let b=function(){let[e,s]=(0,p.useState)(""),[r,i]=(0,p.useState)(!1),[a,t]=(0,p.useState)(!1),[n,l]=(0,p.useState)("Sorry but the page you are looking for does not exist.");return((0,p.useEffect)(()=>{i(!0),fetch("/api/profile/profiledata").then(e=>e.json()).then(e=>{s(e),e.message&&(l(e.message),t(!0)),i(!1)}).catch(e=>{console.error("Error fetching data:",e),i(!1)})},[s,t,l]),r)?c.jsx(m.Z,{}):a?c.jsx(S.Z,{errorData:n}):c.jsx(p.Fragment,{children:c.jsx(v,{name:e.name,id:e._id,email:e.email})})};async function N(e){let s=await (0,d.getSession)({req:e.req});return s?{props:{session:s}}:{redirect:{destination:"/auth",permanent:!1}}}let y=function(){return(0,c.jsxs)(p.Fragment,{children:[(0,c.jsxs)(u(),{children:[c.jsx("title",{children:"Your Profile"}),c.jsx("meta",{name:"description",content:"Your Profile content"}),c.jsx("link",{rel:"icon",href:"/images/logos.png"})]}),c.jsx(b,{})]})},P=(0,n.l)(i,"default"),w=(0,n.l)(i,"getStaticProps"),q=(0,n.l)(i,"getStaticPaths"),C=(0,n.l)(i,"getServerSideProps"),L=(0,n.l)(i,"config"),k=(0,n.l)(i,"reportWebVitals"),E=(0,n.l)(i,"unstable_getStaticProps"),D=(0,n.l)(i,"unstable_getStaticPaths"),F=(0,n.l)(i,"unstable_getStaticParams"),I=(0,n.l)(i,"unstable_getServerProps"),Z=(0,n.l)(i,"unstable_getServerSideProps"),R=new a.PagesRouteModule({definition:{kind:t.x.PAGES,page:"/profile",pathname:"/profile",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:i})},6002:(e,s,r)=>{"use strict";r.d(s,{Z:()=>n});var i=r(997);r(6689);var a=r(2068),t=r.n(a);let n=e=>i.jsx("button",{role:"button",className:t().btn,children:e.content})},1671:(e,s,r)=>{"use strict";r.d(s,{Z:()=>h});var i=r(997),a=r(6689),t=r(968),n=r.n(t),l=r(4752),o=r.n(l),c=r(1664),d=r.n(c),p=r(6002);let h=function(e){return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsxs)(n(),{children:[i.jsx("title",{children:"Lost Nest"}),i.jsx("meta",{name:"Error Page",content:"Page is lost due to some issue"}),i.jsx("link",{rel:"icon",href:"/images/logos.png"})]}),i.jsx("section",{className:o().sec,children:(0,i.jsxs)("div",{className:o().div1,children:[i.jsx("h1",{className:o().heading1,children:"404"}),i.jsx("p",{className:o().para1,children:e.errorData}),i.jsx("p",{className:o().para2,children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),i.jsx(d(),{href:"/",children:i.jsx("a",{children:i.jsx(p.Z,{content:"Back to Homepage"})})})]})})]})}},1758:(e,s,r)=>{"use strict";r.d(s,{Z:()=>n});var i=r(997);r(6689);var a=r(8626),t=r.n(a);let n=function(){return i.jsx("div",{className:t().loader,children:i.jsx("div",{className:`${t().justifycontentcenter} ${t().jimuprimaryloading}`})})}},4709:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>u});var i=r(997),a=r(1649),t=r(6689),n=r(1664),l=r.n(n),o=r(7562),c=r.n(o),d=r(6002);let p=function(){let{data:e,status:s}=(0,a.useSession)();return i.jsx("header",{className:c().header,children:(0,i.jsxs)("div",{className:c().navi,children:[i.jsx(l(),{href:"/",className:c().imgdiv,legacyBehavior:!0,children:(0,i.jsxs)("div",{className:c().new,children:[i.jsx("img",{src:"/images/logos.png",alt:"logoimg",className:c().imagest}),i.jsx("h5",{children:"LostNest"})]})}),i.jsx("nav",{className:c().mainnav,children:(0,i.jsxs)("ul",{className:c().loginnav,children:["authenticated"===s&&(0,i.jsxs)(i.Fragment,{children:[i.jsx("li",{style:{padding:"5px"},className:c().anch,children:i.jsx(l(),{href:"/dashboard",children:"Feed"})}),i.jsx("li",{style:{padding:"5px"},className:c().anch,children:i.jsx(l(),{href:"/postlostitem",children:"Lost Item?"})}),i.jsx("li",{style:{padding:"5px"},className:c().anch,children:i.jsx(l(),{href:"/postfounditem",children:"Found Item?"})}),i.jsx("li",{style:{padding:"5px"},className:c().anch,children:i.jsx(l(),{href:"/mylistings",children:"My Listings"})}),i.jsx("li",{style:{padding:"5px"},className:c().anch,children:i.jsx(l(),{href:"/responses",children:"Response"})}),i.jsx("li",{style:{padding:"5px"},className:c().anch,children:i.jsx(l(),{href:"/profile",children:"Profile"})}),i.jsx("li",{children:i.jsx("button",{onClick:function(e){e.preventDefault(),(0,a.signOut)()},className:c().btn,children:"Logout"})})]}),"authenticated"!==s&&i.jsx("li",{style:{padding:"5px"},className:c().anch,children:i.jsx(l(),{href:"/stats",children:"Stats"})}),"authenticated"!==s&&i.jsx("li",{children:i.jsx(l(),{href:"/auth",legacyBehavior:!0,children:i.jsx("a",{children:i.jsx(d.Z,{content:"Login"})})})})]})})]})})},h=function(e){return(0,i.jsxs)(t.Fragment,{children:[i.jsx(p,{}),i.jsx("main",{children:e.children})]})};r(6764);let u=function({Component:e,pageProps:s}){return i.jsx(a.SessionProvider,{session:s.session,children:i.jsx(h,{children:i.jsx(e,{...s})})})}},4003:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>l});var i=r(997),a=r(6859),t=r.n(a);class n extends t(){render(){return(0,i.jsxs)(a.Html,{lang:"en",children:[i.jsx(a.Head,{}),(0,i.jsxs)("body",{children:[i.jsx(a.Main,{}),i.jsx(a.NextScript,{}),i.jsx("div",{id:"Questions"}),i.jsx("div",{id:"Answers"}),i.jsx("div",{id:"Notification"}),i.jsx("div",{id:"Loading"})]})]})}}let l=n},6764:()=>{},1649:e=>{"use strict";e.exports=require("next-auth/react")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},6907:e=>{"use strict";e.exports=require("react-ionicons")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var s=require("../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),i=s.X(0,[556,859,664,235],()=>r(5702));module.exports=i})();