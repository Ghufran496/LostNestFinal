"use strict";(()=>{var e={};e.id=327,e.ids=[327],e.modules={8013:e=>{e.exports=require("mongodb")},1649:e=>{e.exports=require("next-auth/react")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},2994:(e,t,n)=>{n.r(t),n.d(t,{config:()=>f,default:()=>d,routeModule:()=>p});var r={};n.r(r),n.d(r,{default:()=>c});var o=n(1802),a=n(7153),i=n(6249),s=n(1649),l=n(4637);async function u(e,t){if("GET"!==e.method)return t.status(405).json({message:"Method Not Allowed"});let n=await (0,l.vO)();try{let r=await (0,s.getSession)({req:e});if(!r)return t.status(401).json({message:"Not authenticated!"});let o=r.user.email;console.log(i);let a=n.db().collection("users"),i=await a.findOne({email:o},{projection:{password:0}});if(!i)return t.status(404).json({message:"User not found."});return t.status(200).json(i)}catch(e){return console.error("Error handling profile data:",e),t.status(500).json({message:"Internal Server Error"})}}let c=u,d=(0,i.l)(r,"default"),f=(0,i.l)(r,"config"),p=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/profile/profiledata",pathname:"/api/profile/profiledata",bundlePath:"",filename:""},userland:r})},4637:(e,t,n)=>{n.d(t,{Bd:()=>l,GP:()=>u,kc:()=>c,vO:()=>s});var r=n(8013);let{ObjectId:o}=n(8013),a=null,i=!1;async function s(){let e;if(i)return console.log("return already stored client"),a;try{e=await r.MongoClient.connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/Production?retryWrites=true&w=majority",{useUnifiedTopology:!0,useNewUrlParser:!0,connectTimeoutMS:3e4,poolSize:10})}catch(e){console.error("Error connecting to the database:",e)}return e.on("close",()=>{console.log("Connection closed. Reconnecting..."),s()}),i||(a=e,i=!0,console.log("return new client")),e}async function l(){let e=await s(),t=e.db(),n=await t.collection("PostedItem").find({}).toArray();return n}async function u(e){let t=await s(),n=t.db().collection("QAnswers"),r=await n.find({PostID:e}).toArray();return r}async function c(){let e=await s(),t=e.db().collection("users"),n=await t.find({},{projection:{password:0,name:0,_id:0}}).toArray();return n}},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=2994);module.exports=n})();