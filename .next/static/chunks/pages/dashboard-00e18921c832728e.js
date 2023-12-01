(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{91015:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(41450)}])},1671:function(e,t,n){"use strict";var r=n(85893),s=n(67294),i=n(9008),o=n.n(i),a=n(35150),l=n.n(a),c=n(41664),d=n.n(c),h=n(76002);t.Z=function(e){return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Lost Nest"}),(0,r.jsx)("meta",{name:"Error Page",content:"Page is lost due to some issue"}),(0,r.jsx)("link",{rel:"icon",href:"/images/logos.png"})]}),(0,r.jsx)("section",{className:l().sec,children:(0,r.jsxs)("div",{className:l().div1,children:[(0,r.jsx)("h1",{className:l().heading1,children:"404"}),(0,r.jsx)("p",{className:l().para1,children:e.errorData}),(0,r.jsx)("p",{className:l().para2,children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),(0,r.jsx)(d(),{href:"/",legacyBehavior:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(h.Z,{content:"Back to Homepage"})})})]})})]})}},21758:function(e,t,n){"use strict";var r=n(85893);n(67294);var s=n(71543),i=n.n(s);t.Z=function(){return(0,r.jsx)("div",{className:i().loader,children:(0,r.jsx)("div",{className:"".concat(i().justifycontentcenter," ").concat(i().jimuprimaryloading)})})}},41450:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return g},default:function(){return j}});var r=n(85893),s=n(67294),i=n(74482),o=n.n(i),a=n(76002),l=n(41664),c=n.n(l),d=function(e){let{_id:t,Type:n,Category:s,Title:i,Description:l,Question:d,Date,ReducedImg:h}=e.data;return(0,r.jsxs)("li",{className:o().item,children:[(0,r.jsx)("div",{className:o().imgdiv,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)("img",{src:h,alt:i,width:250,height:160,style:{overflow:"scroll"}})}),(0,r.jsxs)("div",{className:o().content,children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[(0,r.jsx)("h1",{style:{backgroundColor:"#311465",padding:"5px 30px",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",borderLeft:"1px solid black",borderRight:"1px solid black",fontSize:"1.5rem",fontWeight:"lighter",textTransform:"uppercase",color:"white"},children:n}),(0,r.jsx)("h3",{style:{fontSize:"1.5rem"},children:Date})]}),(0,r.jsxs)("div",{style:{marginTop:"2rem",marginBottom:"1rem",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,r.jsxs)("h2",{style:{textTransform:"capitalize"},children:["Category: ",s]}),(0,r.jsxs)("h2",{style:{textTransform:"capitalize"},children:["Item Name: ",i]})]}),(0,r.jsxs)("h3",{style:{textTransform:"capitalize",overflow:"hidden"},children:[(0,r.jsx)("span",{style:{fontWeight:"bolder",fontSize:"1.5rem"},children:"Description:\xa0"}),l]})]}),(0,r.jsx)("div",{className:o().actions,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(c(),{href:"/dashboard/".concat(t),legacyBehavior:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(a.Z,{content:"View Details"})})})})]})},h=n(21758),m=function(e){let{data:t}=e;return Array.isArray(t)?(0,r.jsx)("ul",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem"},children:t.map(e=>(0,r.jsx)(d,{data:e},e._id))}):(0,r.jsx)(h.Z,{})},x=n(1671),p=function(){let[e,t]=(0,s.useState)(""),[n,i]=(0,s.useState)(!1),[o,a]=(0,s.useState)(!1),[l,c]=(0,s.useState)("Sorry but the page you are looking for does not exist.");return((0,s.useEffect)(()=>{let e=!0;return i(!0),fetch("/api/post/postitem").then(e=>e.json()).then(n=>{e&&(t(n),n.message&&(c(n.message),a(!0)),i(!1))}).catch(t=>{e&&(a(!0),c("An error occurred while fetching data."),i(!1)),console.error("Fetch error:",t)}),()=>{e=!1}},[]),o)?(0,r.jsx)(x.Z,{errorData:l}):(0,r.jsxs)("div",{children:[0!==e.length||n?(0,r.jsx)(m,{data:e}):(0,r.jsx)("p",{style:{fontSize:"2rem",display:"flex",marginTop:"1rem",justifyContent:"center",alignItems:"center"},children:"No Posts Found..."}),n&&(0,r.jsx)(h.Z,{})]})},u=n(4298),f=n.n(u),g=!0,j=()=>(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(f(),{children:[(0,r.jsx)("title",{children:"Dashboard"}),(0,r.jsx)("meta",{name:"description",content:"All Posted items who are either Lost or Found"}),(0,r.jsx)("link",{rel:"icon",href:"/images/logos.png"})]}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem"},children:[(0,r.jsx)("h1",{style:{fontSize:"4rem"},children:"Welcome To LostNest"}),(0,r.jsx)("h3",{children:"Thank You for being a part of LostNest community and helping each other."}),(0,r.jsx)("h6",{style:{color:"#2e186a",margin:"auto",fontSize:"2.575rem",padding:"0.5rem 0",borderBottom:"3px solid #2e186a",width:"15rem",textAlign:"center"},children:"Posted Items"})]}),(0,r.jsx)(p,{})]})},35150:function(e){e.exports={sec:"ErrorComp_sec__wgAhN",heading1:"ErrorComp_heading1__Mh5h7",div1:"ErrorComp_div1__t1XSG",para1:"ErrorComp_para1__pagyw",para2:"ErrorComp_para2__sAiD0"}},71543:function(e){e.exports={loader:"Loading_loader__2NHPb",jimuprimaryloading:"Loading_jimuprimaryloading__IK7Ye","loading-keys-app-loading":"Loading_loading-keys-app-loading__be4CY"}},74482:function(e){e.exports={item:"PostItem_item__dbARK",content:"PostItem_content__cJqHW"}},9008:function(e,t,n){e.exports=n(79201)},4298:function(e,t,n){e.exports=n(85354)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=91015)}),_N_E=e.O()}]);