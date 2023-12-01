(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[661],{80885:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/responses",function(){return n(24823)}])},1671:function(e,s,n){"use strict";var r=n(85893),t=n(67294),a=n(9008),i=n.n(a),o=n(35150),l=n.n(o),c=n(41664),d=n.n(c),p=n(76002);s.Z=function(e){return(0,r.jsxs)(t.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Lost Nest"}),(0,r.jsx)("meta",{name:"Error Page",content:"Page is lost due to some issue"}),(0,r.jsx)("link",{rel:"icon",href:"/images/logos.png"})]}),(0,r.jsx)("section",{className:l().sec,children:(0,r.jsxs)("div",{className:l().div1,children:[(0,r.jsx)("h1",{className:l().heading1,children:"404"}),(0,r.jsx)("p",{className:l().para1,children:e.errorData}),(0,r.jsx)("p",{className:l().para2,children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),(0,r.jsx)(d(),{href:"/",legacyBehavior:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(p.Z,{content:"Back to Homepage"})})})]})})]})}},21758:function(e,s,n){"use strict";var r=n(85893);n(67294);var t=n(71543),a=n.n(t);s.Z=function(){return(0,r.jsx)("div",{className:a().loader,children:(0,r.jsx)("div",{className:"".concat(a().justifycontentcenter," ").concat(a().jimuprimaryloading)})})}},24823:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSP:function(){return h},default:function(){return m}});var r=n(85893),t=n(67294),a=n(1671),i=n(21758),o=n(74962),l=n.n(o),c=e=>{let{_id:s,enteredContact:n,ItemTitle:a,PostID:i,PosterID:o,Question:c,ValidatorDateTime:d,Answer:p}=e.data,[h,m]=(0,t.useState)(!1),[u,x]=(0,t.useState)(!1);async function g(e){try{let s=await fetch("/api/answers/deleteResponse",{method:"DELETE",body:JSON.stringify({DeleteResponse:e}),headers:{"Content-Type":"application/json"}});if(!s.ok){let e=await s.text();throw Error("HTTP error! Status: ".concat(s.status,", Message: ").concat(e))}let n=await s.json();return n}catch(e){throw console.error("Error deleting response:",e.message),e}}let j=()=>{m(!h)},f=async()=>{x(!0);try{await g(s),window.location.reload(),x(!1)}catch(e){console.error("Error deleting response:",e.message),x(!1)}};return u?(0,r.jsx)("p",{style:{fontSize:"1.5rem",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"},children:"Item Is Being Deleted..."}):(0,r.jsxs)("li",{style:{fontSize:"1.5rem",border:"1px solid #311465",padding:"2rem",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",fontWeight:"400",borderRadius:"1rem",position:"relative",overflow:"hidden"},children:[(0,r.jsx)("div",{style:{background:"#311465",height:"100%",width:"4px",position:"absolute",left:0,top:0}}),(0,r.jsxs)("div",{style:{marginLeft:"4rem"},children:[(0,r.jsxs)("h3",{children:["Item ID: ",(0,r.jsx)("span",{className:l().spaner,children:i})]}),(0,r.jsxs)("h3",{children:["Item Name: ",(0,r.jsx)("span",{className:l().spaner,children:a})]}),(0,r.jsxs)("h3",{children:["Question? ",(0,r.jsx)("span",{className:l().spaner,children:c})]}),(0,r.jsxs)("h3",{children:["Your Answer: ",(0,r.jsx)("span",{className:l().spaner,children:p})]}),(0,r.jsxs)("h3",{children:["Time: ",(0,r.jsx)("span",{className:l().spaner,children:d})]}),(0,r.jsx)("div",{style:{textAlign:"center",marginTop:"2rem"},children:h||(0,r.jsx)("button",{className:l().btn,onClick:j,children:"Show Response"})}),h&&(0,r.jsxs)("div",{style:{padding:"1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"1rem",background:"#f4f4f4"},children:[(0,r.jsxs)("h4",{children:["Response :"," ",(0,r.jsx)("span",{style:{color:"#311465"},children:n})]}),(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"1rem"},children:[(0,r.jsx)("button",{className:l().btn,onClick:j,children:"Close"}),(0,r.jsx)("button",{className:l().btn,onClick:f,children:"Delete"})]})]})]})]})},d=e=>{let{data:s}=e;return Array.isArray(s)?(0,r.jsx)("ul",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",listStyle:"none",padding:"1rem",margin:"1.5rem",gap:"2rem"},children:s.map(e=>(0,r.jsx)(c,{data:e},e._id))}):(0,r.jsx)(i.Z,{})},p=()=>{let[e,s]=(0,t.useState)(""),[n,o]=(0,t.useState)(!1),[l,c]=(0,t.useState)(!1),[p,h]=(0,t.useState)("Sorry but the page you are looking for does not exist.");return((0,t.useEffect)(()=>{let e=!0;return o(!0),fetch("/api/answers/sendResponse").then(e=>e.json()).then(n=>{e&&(s(n),n.message&&(h(n.message),c(!0)),o(!1))}).catch(s=>{e&&(c(!0),h("An error occurred while fetching data."),o(!1)),console.error("Fetch error:",s)}),()=>{e=!1}},[]),l)?(0,r.jsx)(a.Z,{errorData:p}):(0,r.jsxs)("div",{children:[0!==e.length||n?(0,r.jsx)(d,{data:e}):(0,r.jsx)("p",{style:{fontSize:"2rem",display:"flex",marginTop:"1rem",justifyContent:"center",alignItems:"center"},children:"No Responses Found..."}),n&&(0,r.jsx)(i.Z,{})]})},h=!0,m=()=>(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)("h6",{style:{color:"#2e186a",margin:"auto",fontSize:"2.4rem",padding:"0.5rem 0",borderBottom:"3px solid #2e186a",width:"15rem",textAlign:"center"},children:"My Responses"}),(0,r.jsx)(p,{})]})},74962:function(e){e.exports={spaner:"ResponseItem_spaner__M4y76",btn:"ResponseItem_btn__e657s"}},35150:function(e){e.exports={sec:"ErrorComp_sec__wgAhN",heading1:"ErrorComp_heading1__Mh5h7",div1:"ErrorComp_div1__t1XSG",para1:"ErrorComp_para1__pagyw",para2:"ErrorComp_para2__sAiD0"}},71543:function(e){e.exports={loader:"Loading_loader__2NHPb",jimuprimaryloading:"Loading_jimuprimaryloading__IK7Ye","loading-keys-app-loading":"Loading_loading-keys-app-loading__be4CY"}},9008:function(e,s,n){e.exports=n(79201)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=80885)}),_N_E=e.O()}]);