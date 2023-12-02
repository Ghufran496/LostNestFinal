(()=>{var e={};e.id=26,e.ids=[26],e.modules={4752:e=>{e.exports={sec:"ErrorComp_sec__wgAhN",heading1:"ErrorComp_heading1__Mh5h7",div1:"ErrorComp_div1__t1XSG",para1:"ErrorComp_para1__pagyw",para2:"ErrorComp_para2__sAiD0"}},8626:e=>{e.exports={loader:"Loading_loader__2NHPb",jimuprimaryloading:"Loading_jimuprimaryloading__IK7Ye","loading-keys-app-loading":"Loading_loading-keys-app-loading__be4CY"}},4456:e=>{e.exports={item:"PostItem_item__dbARK",content:"PostItem_content__cJqHW"}},1391:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>A,default:()=>C,getServerSideProps:()=>T,getStaticPaths:()=>k,getStaticProps:()=>q,reportWebVitals:()=>D,routeModule:()=>R,unstable_getServerProps:()=>E,unstable_getServerSideProps:()=>Z,unstable_getStaticParams:()=>z,unstable_getStaticPaths:()=>L,unstable_getStaticProps:()=>I});var s={};r.r(s),r.d(s,{default:()=>w,getServerSideProps:()=>N});var i=r(7093),a=r(5244),n=r(1323),o=r(4003),l=r(4709),c=r(997),d=r(6689),p=r(2113),u=r(9093),h=r(4456),m=r.n(h),x=r(6002),g=r(1664),j=r.n(g);let f=function(e){let{_id:t,Type:r,Category:s,Title:i,Description:a,Question:n,Date,ReducedImg:o}=e.data,l=`/dashboard/${t}`;return(0,c.jsxs)("li",{className:m().item,children:[c.jsx("div",{className:m().imgdiv,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:c.jsx("img",{src:o,alt:i,width:250,height:160,style:{overflow:"scroll"}})}),(0,c.jsxs)("div",{className:m().content,children:[(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[c.jsx("h1",{style:{backgroundColor:"#311465",padding:"5px 30px",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",borderLeft:"1px solid black",borderRight:"1px solid black",fontSize:"1.5rem",fontWeight:"lighter",textTransform:"uppercase",color:"white"},children:r}),c.jsx("h3",{style:{fontSize:"1.5rem"},children:Date})]}),(0,c.jsxs)("div",{style:{marginTop:"2rem",marginBottom:"1rem",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,c.jsxs)("h2",{style:{textTransform:"capitalize"},children:["Category: ",s]}),(0,c.jsxs)("h2",{style:{textTransform:"capitalize"},children:["Item Name: ",i]})]}),(0,c.jsxs)("h3",{style:{textTransform:"capitalize",overflow:"hidden"},children:[c.jsx("span",{style:{fontWeight:"bolder",fontSize:"1.5rem"},children:"Description:\xa0"}),a]})]}),c.jsx("div",{className:m().actions,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:c.jsx(j(),{href:l,legacyBehavior:!0,children:c.jsx("a",{children:c.jsx(x.Z,{content:"View Details"})})})})]})};var y=r(1758);let _=function(e){let{data:t}=e;return Array.isArray(t)?c.jsx("ul",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem"},children:t.map(e=>c.jsx(f,{data:e},e._id))}):c.jsx(y.Z,{})};var v=r(1671);let S=function(){let[e,t]=(0,d.useState)(""),[r,s]=(0,d.useState)(!1),[i,a]=(0,d.useState)(!1),[n,o]=(0,d.useState)("Sorry but the page you are looking for does not exist.");return((0,d.useEffect)(()=>{let e=!0;return s(!0),fetch("/api/post/postitem").then(e=>e.json()).then(r=>{e&&(t(r),r.message&&(o(r.message),a(!0)),s(!1))}).catch(t=>{e&&(a(!0),o("An error occurred while fetching data."),s(!1)),console.error("Fetch error:",t)}),()=>{e=!1}},[]),i)?c.jsx(v.Z,{errorData:n}):(0,c.jsxs)("div",{children:[0!==e.length||r?c.jsx(_,{data:e}):c.jsx("p",{style:{fontSize:"2rem",display:"flex",marginTop:"1rem",justifyContent:"center",alignItems:"center"},children:"No Posts Found..."}),r&&c.jsx(y.Z,{})]})};var b=r(968),P=r.n(b);async function N(e){let t=await (0,p.getServerSession)(e.req,e.res,u.L);return t?{props:{}}:{redirect:{destination:"/auth",permanent:!1}}}let w=()=>(0,c.jsxs)(d.Fragment,{children:[(0,c.jsxs)(P(),{children:[c.jsx("title",{children:"Dashboard"}),c.jsx("meta",{name:"description",content:"All Posted items who are either Lost or Found"}),c.jsx("link",{rel:"icon",href:"/images/logos.png"})]}),(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem"},children:[c.jsx("h1",{style:{fontSize:"4rem"},children:"Welcome To LostNest"}),c.jsx("h3",{children:"Thank You for being a part of LostNest community and helping each other."}),c.jsx("h6",{style:{color:"#2e186a",margin:"auto",fontSize:"2.575rem",padding:"0.5rem 0",borderBottom:"3px solid #2e186a",width:"15rem",textAlign:"center"},children:"Posted Items"})]}),c.jsx(S,{})]}),C=(0,n.l)(s,"default"),q=(0,n.l)(s,"getStaticProps"),k=(0,n.l)(s,"getStaticPaths"),T=(0,n.l)(s,"getServerSideProps"),A=(0,n.l)(s,"config"),D=(0,n.l)(s,"reportWebVitals"),I=(0,n.l)(s,"unstable_getStaticProps"),L=(0,n.l)(s,"unstable_getStaticPaths"),z=(0,n.l)(s,"unstable_getStaticParams"),E=(0,n.l)(s,"unstable_getServerProps"),Z=(0,n.l)(s,"unstable_getServerSideProps"),R=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/dashboard",pathname:"/dashboard",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:s})},1671:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(997),i=r(6689),a=r(968),n=r.n(a),o=r(4752),l=r.n(o),c=r(1664),d=r.n(c),p=r(6002);let u=function(e){return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsxs)(n(),{children:[s.jsx("title",{children:"Lost Nest"}),s.jsx("meta",{name:"Error Page",content:"Page is lost due to some issue"}),s.jsx("link",{rel:"icon",href:"/images/logos.png"})]}),s.jsx("section",{className:l().sec,children:(0,s.jsxs)("div",{className:l().div1,children:[s.jsx("h1",{className:l().heading1,children:"404"}),s.jsx("p",{className:l().para1,children:e.errorData}),s.jsx("p",{className:l().para2,children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),s.jsx(d(),{href:"/",legacyBehavior:!0,children:s.jsx("a",{children:s.jsx(p.Z,{content:"Back to Homepage"})})})]})})]})}},1758:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(997);r(6689);var i=r(8626),a=r.n(i);let n=function(){return s.jsx("div",{className:a().loader,children:s.jsx("div",{className:`${a().justifycontentcenter} ${a().jimuprimaryloading}`})})}},8432:e=>{"use strict";e.exports=require("bcryptjs")},8013:e=>{"use strict";e.exports=require("mongodb")},3227:e=>{"use strict";e.exports=require("next-auth")},2113:e=>{"use strict";e.exports=require("next-auth/next")},7449:e=>{"use strict";e.exports=require("next-auth/providers/credentials")},1649:e=>{"use strict";e.exports=require("next-auth/react")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[556,859,664,124],()=>r(1391));module.exports=s})();