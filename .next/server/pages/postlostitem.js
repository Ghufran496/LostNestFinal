(()=>{var e={};e.id=446,e.ids=[446,888,660],e.modules={7562:e=>{e.exports={header:"main-navigation_header__CJ_tj",navi:"main-navigation_navi__uGlrs",new:"main-navigation_new__vFD6K",imagest:"main-navigation_imagest__K0il8",loginnav:"main-navigation_loginnav__FsBwG",mainnav:"main-navigation_mainnav__HpZ2O",btn:"main-navigation_btn__qd8su",anch:"main-navigation_anch__lRsYj"}},2068:e=>{e.exports={btn:"Button_btn__pWvy7"}},4752:e=>{e.exports={sec:"ErrorComp_sec__wgAhN",heading1:"ErrorComp_heading1__Mh5h7",div1:"ErrorComp_div1__t1XSG",para1:"ErrorComp_para1__pagyw",para2:"ErrorComp_para2__sAiD0"}},2447:e=>{e.exports={loadingcontainer:"Loadings_loadingcontainer__JsUTc",slideIn:"Loadings_slideIn__fnhBy",bouncingdots:"Loadings_bouncingdots__xlI1z",loadingText:"Loadings_loadingText__Tc_r8",dot:"Loadings_dot__yP_ic",bounce:"Loadings_bounce__lwnFQ"}},3425:e=>{e.exports={notification:"noti_notification__fiHED",tick:"noti_tick__sZe3f",show:"noti_show__FFupf"}},2607:e=>{e.exports={formstyle3:"PostNewItem_formstyle3__dO7Po",divider:"PostNewItem_divider__WYILU",center:"PostNewItem_center__JtHGf",customselect:"PostNewItem_customselect__PDM1A",required:"PostNewItem_required__X_gvY"}},1100:e=>{e.exports={center:"PostItem_center__2KZMn"}},6505:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>D,default:()=>P,getServerSideProps:()=>q,getStaticPaths:()=>L,getStaticProps:()=>w,reportWebVitals:()=>I,routeModule:()=>T,unstable_getServerProps:()=>k,unstable_getServerSideProps:()=>R,unstable_getStaticParams:()=>E,unstable_getStaticPaths:()=>F,unstable_getStaticProps:()=>C});var a={};s.r(a),s.d(a,{default:()=>b,getServerSideProps:()=>S});var n=s(7093),i=s(5244),r=s(1323),l=s(4003),o=s(4709),d=s(997),c=s(6689),u=s(1100),h=s.n(u),m=s(1649),x=s(4298),p=s.n(x),g=s(2607),j=s.n(g),_=s(6002),f=s(1671),v=s(2496),N=s(4377);let y=function(){let[e,t]=(0,c.useState)(!1),[s,a]=(0,c.useState)(""),[n,i]=(0,c.useState)(!1),[r,l]=(0,c.useState)("Sorry but the page you are looking for does not exist."),[o,u]=(0,c.useState)(!1),h=(0,c.useRef)(),m=(0,c.useRef)(),x=(0,c.useRef)(),p=(0,c.useRef)(),g=(0,c.useRef)(),y=(0,c.useRef)();async function S(e,t){let s=await fetch("/api/email/sendEmail",{method:"POST",body:JSON.stringify({subject:e,message:t}),headers:{"Content-Type":"application/json"}});s.ok||console.error(`Error sending email. Status: ${s.status}`);let a=await s.json();return a.success&&u(!0),a}async function b(e,s,a,n,r,o,d){let c=await fetch("/api/post/postitem",{method:"POST",body:JSON.stringify({Type:e,Category:s,Title:a,Description:n,Question:r,Date:o,ReducedImg:d}),headers:{"Content-Type":"application/json"}});u(!1),c.ok||(l(h.message),t(!1),i(!0));let h=await c.json();return h}let P=async e=>{e.preventDefault(),t(!0);let n=h.current.value,i=m.current.value,r=x.current.value,l=p.current.value,o=g.current.value,d=y.current.value,c=new Date(d).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),j=`${n} ${i}
  
Item Name: ${r}
Date: ${c}
Description: ${l}

If you have any information about the ${n} item, kindly visit the LostNest web application.

Thank you
`,_=`${n} : ${r}`;await S(_,j),await b(n,i,r,l,o,c,s),e.target.reset(),a(""),t(!1),u(!1)};return n?d.jsx(f.Z,{errorData:r}):(0,d.jsxs)(c.Fragment,{children:[d.jsx("div",{className:j().formstyle3,children:(0,d.jsxs)("form",{onSubmit:P,children:[(0,d.jsxs)("fieldset",{children:[d.jsx("legend",{children:"Data"}),(0,d.jsxs)("div",{className:j().divider,children:[d.jsx("select",{name:"item",className:j().inputfield,ref:h,children:d.jsx("option",{value:"Lost",children:"Lost"})}),(0,d.jsxs)("select",{defaultValue:"Category",name:"category",className:j().inputfield,ref:m,required:!0,children:[d.jsx("option",{value:"Category",disabled:!0,children:"Category"}),d.jsx("option",{value:"Wallet",children:"Wallet"}),d.jsx("option",{value:"ID Card / Student Card",children:"ID Card / Student Card"}),d.jsx("option",{value:"Smart Phone / Laptop",children:"Smart Phone / Laptop"}),d.jsx("option",{value:"Keys",children:"Keys"}),d.jsx("option",{value:"Others",children:"Others"})]})]}),(0,d.jsxs)("label",{htmlFor:"field3",children:[(0,d.jsxs)("span",{children:["Item Name ",d.jsx("span",{className:j().required,children:"*"})]}),d.jsx("input",{type:"text",name:"field3",placeholder:"Title",className:j().inputfield,ref:x,required:!0})]}),(0,d.jsxs)("label",{htmlFor:"field4",children:[(0,d.jsxs)("span",{children:["Enter question based on an item.",d.jsx("span",{className:j().required,children:"*"})]}),d.jsx("input",{type:"text",name:"field4",placeholder:"Ex:- What is the color of the phone?",className:j().inputfield,ref:g,required:!0})]}),(0,d.jsxs)("label",{htmlFor:"date",children:[(0,d.jsxs)("span",{children:["Select a Date: ",d.jsx("span",{className:j().required,children:"*"})]}),d.jsx("input",{type:"date",name:"date",id:"date",className:j().customselect,ref:y,required:!0})]})]}),(0,d.jsxs)("fieldset",{children:[d.jsx("legend",{children:"Details"}),(0,d.jsxs)("label",{htmlFor:"description",children:[(0,d.jsxs)("span",{children:["Description ",d.jsx("span",{className:j().required,children:"*"})]}),d.jsx("textarea",{type:"text",name:"description",placeholder:"Description about item (like location etc...)",className:j().textareafield,ref:p,required:!0})]}),d.jsx("input",{type:"file",id:"image",name:"image",accept:"image/*",className:j().customselect,style:{width:"100%"},onChange:function(e){var t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=()=>{a(t.result)},t.onerror=()=>{console.log("error",error)}},required:!0}),d.jsx("div",{className:j().center,children:d.jsx(_.Z,{content:"Post"})})]})]})}),o&&d.jsx(v.Z,{data:"Email Successfully Sent to LostNest Registered Users!"}),e&&d.jsx(N.Z,{})]})};async function S(e){let t=await (0,m.getSession)({req:e.req});return t?{props:{session:t}}:{redirect:{destination:"/auth",permanent:!1}}}let b=function(){return(0,d.jsxs)(c.Fragment,{children:[(0,d.jsxs)(p(),{children:[d.jsx("title",{children:"Post Lost Item"}),d.jsx("meta",{name:"description",content:"If you have Lost anything post here"}),d.jsx("link",{rel:"icon",href:"/images/logos.png"})]}),d.jsx("div",{className:h().center,children:d.jsx(y,{})})]})},P=(0,r.l)(a,"default"),w=(0,r.l)(a,"getStaticProps"),L=(0,r.l)(a,"getStaticPaths"),q=(0,r.l)(a,"getServerSideProps"),D=(0,r.l)(a,"config"),I=(0,r.l)(a,"reportWebVitals"),C=(0,r.l)(a,"unstable_getStaticProps"),F=(0,r.l)(a,"unstable_getStaticPaths"),E=(0,r.l)(a,"unstable_getStaticParams"),k=(0,r.l)(a,"unstable_getServerProps"),R=(0,r.l)(a,"unstable_getServerSideProps"),T=new n.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/postlostitem",pathname:"/postlostitem",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:a})},6002:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(997);s(6689);var n=s(2068),i=s.n(n);let r=e=>a.jsx("button",{role:"button",className:i().btn,children:e.content})},1671:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var a=s(997),n=s(6689),i=s(968),r=s.n(i),l=s(4752),o=s.n(l),d=s(1664),c=s.n(d),u=s(6002);let h=function(e){return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsxs)(r(),{children:[a.jsx("title",{children:"Lost Nest"}),a.jsx("meta",{name:"Error Page",content:"Page is lost due to some issue"}),a.jsx("link",{rel:"icon",href:"/images/logos.png"})]}),a.jsx("section",{className:o().sec,children:(0,a.jsxs)("div",{className:o().div1,children:[a.jsx("h1",{className:o().heading1,children:"404"}),a.jsx("p",{className:o().para1,children:e.errorData}),a.jsx("p",{className:o().para2,children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),a.jsx(c(),{href:"/",children:a.jsx("a",{children:a.jsx(u.Z,{content:"Back to Homepage"})})})]})})]})}},4377:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(997);s(6689);var n=s(6405),i=s(2447),r=s.n(i);let l=()=>(0,n.createPortal)(a.jsx("div",{className:r().loadingcontainer,children:(0,a.jsxs)("div",{className:r().bouncingdots,children:[a.jsx("div",{className:r().loadingText,children:"Loading"}),a.jsx("div",{className:r().dot}),a.jsx("div",{className:r().dot}),a.jsx("div",{className:r().dot})]})}),document.getElementById("Loading"))},2496:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n}),s(997);var a=s(6689);s(6405),s(3425);let n=e=>{let[t,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{s(!0);let e=setTimeout(()=>{s(!1)},3e3);return()=>clearTimeout(e)},[]),null}},4709:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var a=s(997),n=s(1649),i=s(6689),r=s(1664),l=s.n(r),o=s(7562),d=s.n(o),c=s(6002);let u=function(){let{data:e,status:t}=(0,n.useSession)();return a.jsx("header",{className:d().header,children:(0,a.jsxs)("div",{className:d().navi,children:[a.jsx(l(),{href:"/",className:d().imgdiv,legacyBehavior:!0,children:(0,a.jsxs)("div",{className:d().new,children:[a.jsx("img",{src:"/images/logos.png",alt:"logoimg",className:d().imagest}),a.jsx("h5",{children:"LostNest"})]})}),a.jsx("nav",{className:d().mainnav,children:(0,a.jsxs)("ul",{className:d().loginnav,children:["authenticated"===t&&(0,a.jsxs)(a.Fragment,{children:[a.jsx("li",{style:{padding:"5px"},className:d().anch,children:a.jsx(l(),{href:"/dashboard",children:"Feed"})}),a.jsx("li",{style:{padding:"5px"},className:d().anch,children:a.jsx(l(),{href:"/postlostitem",children:"Lost Item?"})}),a.jsx("li",{style:{padding:"5px"},className:d().anch,children:a.jsx(l(),{href:"/postfounditem",children:"Found Item?"})}),a.jsx("li",{style:{padding:"5px"},className:d().anch,children:a.jsx(l(),{href:"/mylistings",children:"My Listings"})}),a.jsx("li",{style:{padding:"5px"},className:d().anch,children:a.jsx(l(),{href:"/responses",children:"Response"})}),a.jsx("li",{style:{padding:"5px"},className:d().anch,children:a.jsx(l(),{href:"/profile",children:"Profile"})}),a.jsx("li",{children:a.jsx("button",{onClick:function(e){e.preventDefault(),(0,n.signOut)()},className:d().btn,children:"Logout"})})]}),"authenticated"!==t&&a.jsx("li",{style:{padding:"5px"},className:d().anch,children:a.jsx(l(),{href:"/stats",children:"Stats"})}),"authenticated"!==t&&a.jsx("li",{children:a.jsx(l(),{href:"/auth",legacyBehavior:!0,children:a.jsx("a",{children:a.jsx(c.Z,{content:"Login"})})})})]})})]})})},h=function(e){return(0,a.jsxs)(i.Fragment,{children:[a.jsx(u,{}),a.jsx("main",{children:e.children})]})};s(6764);let m=function({Component:e,pageProps:t}){return a.jsx(n.SessionProvider,{session:t.session,children:a.jsx(h,{children:a.jsx(e,{...t})})})}},4003:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(997),n=s(6859),i=s.n(n);class r extends i(){render(){return(0,a.jsxs)(n.Html,{lang:"en",children:[a.jsx(n.Head,{}),(0,a.jsxs)("body",{children:[a.jsx(n.Main,{}),a.jsx(n.NextScript,{}),a.jsx("div",{id:"Questions"}),a.jsx("div",{id:"Answers"}),a.jsx("div",{id:"Notification"}),a.jsx("div",{id:"Loading"})]})]})}}let l=r},6764:()=>{},1649:e=>{"use strict";e.exports=require("next-auth/react")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[556,859,664,235],()=>s(6505));module.exports=a})();