exports.id=96,exports.ids=[96],exports.modules={7562:e=>{e.exports={header:"main-navigation_header__CJ_tj",navi:"main-navigation_navi__uGlrs",new:"main-navigation_new__vFD6K",imagest:"main-navigation_imagest__K0il8",loginnav:"main-navigation_loginnav__FsBwG",mainnav:"main-navigation_mainnav__HpZ2O",btn:"main-navigation_btn__qd8su",anch:"main-navigation_anch__lRsYj"}},2068:e=>{e.exports={btn:"Button_btn__pWvy7"}},8626:e=>{e.exports={loader:"Loading_loader__2NHPb",jimuprimaryloading:"Loading_jimuprimaryloading__IK7Ye","loading-keys-app-loading":"Loading_loading-keys-app-loading__be4CY"}},9658:e=>{e.exports={content:"event-content_content__AtZze"}},9657:e=>{e.exports={logistics:"event-logistics_logistics__UIA8Y",image:"event-logistics_image__blJib",list:"event-logistics_list__J2CgQ",spaner:"event-logistics_spaner__kCxOb",icon:"event-logistics_icon__z_IOq"}},1277:e=>{e.exports={summary:"event-summary_summary__Cp5_z"}},6003:e=>{e.exports={item:"logistics-item_item__qTZLY",icon:"logistics-item_icon__QEZN9"}},6002:(e,n,s)=>{"use strict";s.d(n,{Z:()=>l});var i=s(997);s(6689);var t=s(2068),a=s.n(t);let l=e=>i.jsx("button",{role:"button",className:a().btn,children:e.content})},1758:(e,n,s)=>{"use strict";s.d(n,{Z:()=>l});var i=s(997);s(6689);var t=s(8626),a=s.n(t);let l=function(){return i.jsx("div",{className:a().loader,children:i.jsx("div",{className:`${a().justifycontentcenter} ${a().jimuprimaryloading}`})})}},2395:(e,n,s)=>{"use strict";s.d(n,{Z:()=>l});var i=s(997),t=s(9658),a=s.n(t);let l=function(e){return i.jsx("section",{className:a().content,children:e.children})}},7357:(e,n,s)=>{"use strict";s.d(n,{Z:()=>m});var i=s(997),t=s(6003),a=s.n(t);let l=function(e){return i.jsx("li",{className:a().item,children:i.jsx("span",{className:a().content,children:e.children})})};var r=s(9657),c=s.n(r),o=s(6689),d=s(968),h=s.n(d),x=s(6907);let m=function(e){let{Type:n,Category:s,Title:t,Date,ReducedImg:a}=e;return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsxs)(h(),{children:[i.jsx("title",{children:t}),i.jsx("meta",{name:"description",content:t}),i.jsx("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/font-awesome.min.css",rel:"stylesheet"})]}),(0,i.jsxs)("section",{className:c().logistics,children:[i.jsx("div",{className:c().image,children:i.jsx("img",{src:a,alt:t,width:400,height:400})}),(0,i.jsxs)("ul",{className:c().list,children:[(0,i.jsxs)(l,{children:[i.jsx("span",{className:c().spaner,children:i.jsx(x.TodayOutline,{color:"#00000",beat:!0,height:"25px",width:"25px"})}),i.jsx("time",{children:(0,i.jsxs)("span",{className:c().timer,children:[" ",Date]})})]}),(0,i.jsxs)(l,{children:[i.jsx("span",{className:c().spaner,children:i.jsx(x.MenuOutline,{color:"#00000",beat:!0,height:"25px",width:"25px"})}),i.jsx("div",{children:n})]}),(0,i.jsxs)(l,{children:[i.jsx("span",{className:c().spaner,children:i.jsx(x.GridOutline,{color:"#00000",beat:!0,height:"25px",width:"25px"})}),i.jsx("div",{children:s})]})]})]})]})}},6702:(e,n,s)=>{"use strict";s.d(n,{Z:()=>l});var i=s(997),t=s(1277),a=s.n(t);let l=function(e){let{Title:n}=e;return i.jsx("section",{className:a().summary,children:i.jsx("h1",{children:n})})}},5285:(e,n,s)=>{"use strict";s.d(n,{EP:()=>c});var i=s(8013);let{ObjectId:t}=s(8013),a=null,l=!1;async function r(){let e;if(l)return console.log("return already stored client"),a;try{e=await i.MongoClient.connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/Production?retryWrites=true&w=majority",{useUnifiedTopology:!0,useNewUrlParser:!0,connectTimeoutMS:3e4,poolSize:10})}catch(e){console.error("Error connecting to the database:",e)}return e.on("close",()=>{console.log("Connection closed. Reconnecting..."),r()}),l||(a=e,l=!0,console.log("return new client")),e}async function c(e){let n=await r(),s=n.db().collection("PostedItem"),i=new t(e),a=await s.findOne({_id:i});return a}},4709:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>m});var i=s(997),t=s(1649),a=s(6689),l=s(1664),r=s.n(l),c=s(7562),o=s.n(c),d=s(6002);let h=function(){let{data:e,status:n}=(0,t.useSession)();return i.jsx("header",{className:o().header,children:(0,i.jsxs)("div",{className:o().navi,children:[i.jsx(r(),{href:"/",className:o().imgdiv,legacyBehavior:!0,children:(0,i.jsxs)("div",{className:o().new,children:[i.jsx("img",{src:"/images/logos.png",alt:"logoimg",className:o().imagest}),i.jsx("h5",{children:"LostNest"})]})}),i.jsx("nav",{className:o().mainnav,children:(0,i.jsxs)("ul",{className:o().loginnav,children:["authenticated"===n&&(0,i.jsxs)(i.Fragment,{children:[i.jsx("li",{style:{padding:"5px"},className:o().anch,children:i.jsx(r(),{href:"/dashboard",children:"Feed"})}),i.jsx("li",{style:{padding:"5px"},className:o().anch,children:i.jsx(r(),{href:"/postlostitem",children:"Lost Item?"})}),i.jsx("li",{style:{padding:"5px"},className:o().anch,children:i.jsx(r(),{href:"/postfounditem",children:"Found Item?"})}),i.jsx("li",{style:{padding:"5px"},className:o().anch,children:i.jsx(r(),{href:"/mylistings",children:"My Listings"})}),i.jsx("li",{style:{padding:"5px"},className:o().anch,children:i.jsx(r(),{href:"/responses",children:"Response"})}),i.jsx("li",{style:{padding:"5px"},className:o().anch,children:i.jsx(r(),{href:"/profile",children:"Profile"})}),i.jsx("li",{children:i.jsx("button",{onClick:function(e){e.preventDefault(),(0,t.signOut)()},className:o().btn,children:"Logout"})})]}),"authenticated"!==n&&i.jsx("li",{style:{padding:"5px"},className:o().anch,children:i.jsx(r(),{href:"/stats",children:"Stats"})}),"authenticated"!==n&&i.jsx("li",{children:i.jsx(r(),{href:"/auth",legacyBehavior:!0,children:i.jsx("a",{children:i.jsx(d.Z,{content:"Login"})})})})]})})]})})},x=function(e){return(0,i.jsxs)(a.Fragment,{children:[i.jsx(h,{}),i.jsx("main",{children:e.children})]})};s(6764);let m=function({Component:e,pageProps:n}){return i.jsx(t.SessionProvider,{session:n.session,children:i.jsx(x,{children:i.jsx(e,{...n})})})}},4003:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>r});var i=s(997),t=s(6859),a=s.n(t);class l extends a(){render(){return(0,i.jsxs)(t.Html,{lang:"en",children:[i.jsx(t.Head,{}),(0,i.jsxs)("body",{children:[i.jsx(t.Main,{}),i.jsx(t.NextScript,{}),i.jsx("div",{id:"Questions"}),i.jsx("div",{id:"Answers"}),i.jsx("div",{id:"Notification"}),i.jsx("div",{id:"Loading"})]})]})}}let r=l},6764:()=>{}};