(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{31969:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return i(88247)}])},1671:function(e,r,i){"use strict";var n=i(85893),o=i(67294),s=i(9008),a=i.n(s),t=i(35150),c=i.n(t),l=i(41664),p=i.n(l),_=i(76002);r.Z=function(e){return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Lost Nest"}),(0,n.jsx)("meta",{name:"Error Page",content:"Page is lost due to some issue"}),(0,n.jsx)("link",{rel:"icon",href:"/images/logos.png"})]}),(0,n.jsx)("section",{className:c().sec,children:(0,n.jsxs)("div",{className:c().div1,children:[(0,n.jsx)("h1",{className:c().heading1,children:"404"}),(0,n.jsx)("p",{className:c().para1,children:e.errorData}),(0,n.jsx)("p",{className:c().para2,children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),(0,n.jsx)(p(),{href:"/",legacyBehavior:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(_.Z,{content:"Back to Homepage"})})})]})})]})}},21758:function(e,r,i){"use strict";var n=i(85893);i(67294);var o=i(71543),s=i.n(o);r.Z=function(){return(0,n.jsx)("div",{className:s().loader,children:(0,n.jsx)("div",{className:"".concat(s().justifycontentcenter," ").concat(s().jimuprimaryloading)})})}},88247:function(e,r,i){"use strict";i.r(r),i.d(r,{__N_SSP:function(){return u},default:function(){return m}});var n=i(85893),o=i(67294),s=i(4298),a=i.n(s),t=i(21758),c=i(11558),l=i.n(c);i(56239),i(41664);var p=function(e){return e.id,(0,n.jsx)(o.Fragment,{children:(0,n.jsxs)("aside",{className:l().profilecard,children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"/images/profileuser.png",className:l().hoverZoomLink})}),(0,n.jsxs)("h1",{children:["ID : ",e.id]}),(0,n.jsx)("h2",{children:e.name})]}),(0,n.jsxs)("div",{className:l().profilebio,children:[(0,n.jsxs)("p",{children:["Email : ",e.email]}),(0,n.jsx)("p",{style:{textDecoration:"underline",textTransform:"capitalize",fontSize:"13px"},children:'"You are enough just as you are."'})]})]})})},_=i(1671),d=function(){let[e,r]=(0,o.useState)(""),[i,s]=(0,o.useState)(!1),[a,c]=(0,o.useState)(!1),[l,d]=(0,o.useState)("Sorry but the page you are looking for does not exist.");return((0,o.useEffect)(()=>{s(!0),fetch("/api/profile/profiledata").then(e=>e.json()).then(e=>{r(e),e.message&&(d(e.message),c(!0)),s(!1)}).catch(e=>{console.error("Error fetching data:",e),s(!1)})},[r,c,d]),i)?(0,n.jsx)(t.Z,{}):a?(0,n.jsx)(_.Z,{errorData:l}):(0,n.jsx)(o.Fragment,{children:(0,n.jsx)(p,{name:e.name,id:e._id,email:e.email})})},u=!0,m=function(){return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Your Profile"}),(0,n.jsx)("meta",{name:"description",content:"Your Profile content"}),(0,n.jsx)("link",{rel:"icon",href:"/images/logos.png"})]}),(0,n.jsx)(d,{})]})}},35150:function(e){e.exports={sec:"ErrorComp_sec__wgAhN",heading1:"ErrorComp_heading1__Mh5h7",div1:"ErrorComp_div1__t1XSG",para1:"ErrorComp_para1__pagyw",para2:"ErrorComp_para2__sAiD0"}},71543:function(e){e.exports={loader:"Loading_loader__2NHPb",jimuprimaryloading:"Loading_jimuprimaryloading__IK7Ye","loading-keys-app-loading":"Loading_loading-keys-app-loading__be4CY"}},11558:function(e){e.exports={profilecard:"userprofile-comp_profilecard__b_Xbh",init:"userprofile-comp_init__piR2I",moveDown:"userprofile-comp_moveDown__1QTlK",moveUp:"userprofile-comp_moveUp__EQw_r",materia:"userprofile-comp_materia__LUghx",moveIn:"userprofile-comp_moveIn__BRvjh",profilebio:"userprofile-comp_profilebio__VgGnk",puff:"userprofile-comp_puff___J4X5",borderRadius:"userprofile-comp_borderRadius__XCNju",scaleIn:"userprofile-comp_scaleIn__wbO9_",ripple:"userprofile-comp_ripple__l1Uvx"}}},function(e){e.O(0,[683,636,774,888,179],function(){return e(e.s=31969)}),_N_E=e.O()}]);