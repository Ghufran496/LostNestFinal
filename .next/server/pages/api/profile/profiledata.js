"use strict";(()=>{var e={};e.id=327,e.ids=[327],e.modules={8013:e=>{e.exports=require("mongodb")},2113:e=>{e.exports=require("next-auth/next")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2994:(e,t,r)=>{r.r(t),r.d(t,{config:()=>p,default:()=>f,routeModule:()=>m});var n={};r.r(n),r.d(n,{default:()=>d});var o=r(1802),a=r(7153),i=r(6249),s=r(2113),l=r(5152),u=r(4637);async function c(e,t){if("GET"!==e.method)return t.status(405).json({message:"Method Not Allowed"});let r=await (0,u.vO)();try{let n=await (0,s.getServerSession)(e,t,l.authOptions);if(!n)return t.status(401).json({message:"Not authenticated!"});let o=n.user.email,a=r.db().collection("users"),i=await a.findOne({email:o},{projection:{password:0}});if(!i)return t.status(404).json({message:"User not found."});return t.status(200).json(i)}catch(e){return console.error("Error handling profile data:",e),t.status(500).json({message:"Internal Server Error"})}}let d=c,f=(0,i.l)(n,"default"),p=(0,i.l)(n,"config"),m=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/profile/profiledata",pathname:"/api/profile/profiledata",bundlePath:"",filename:""},userland:n})},5427:(e,t,r)=>{r.d(t,{c:()=>o,G:()=>a});let n=require("bcryptjs");async function o(e){let t=await (0,n.hash)(e,12);return t}async function a(e,t){let r=await (0,n.compare)(e,t);return r}},4637:(e,t,r)=>{r.d(t,{Bd:()=>l,GP:()=>u,kc:()=>c,vO:()=>s});var n=r(8013);let{ObjectId:o}=r(8013),a=null,i=!1;async function s(){let e;if(i)return console.log("return already stored client"),a;try{e=await n.MongoClient.connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/Production?retryWrites=true&w=majority",{useUnifiedTopology:!0,useNewUrlParser:!0,connectTimeoutMS:3e4,poolSize:10})}catch(e){if(console.error("Error connecting to the database:",e),"Topology is closed, please connect"===e.message){console.log("Topology is closed. Reconnecting..."),s();return}}return e.on("close",()=>{console.log("Connection closed. Reconnecting..."),s()}),i||(a=e,i=!0,console.log("return new client")),e}async function l(){let e=await s(),t=e.db(),r=await t.collection("PostedItem").find({}).toArray();return r}async function u(e){let t=await s(),r=t.db().collection("QAnswers"),n=await r.find({PostID:e}).toArray();return n}async function c(){let e=await s(),t=e.db().collection("users"),r=await t.find({},{projection:{password:0,name:0,_id:0}}).toArray();return r}},5152:(e,t,r)=>{r.r(t),r.d(t,{authOptions:()=>u,default:()=>c});let n=require("next-auth");var o=r.n(n);let a=require("next-auth/providers/credentials");var i=r.n(a),s=r(5427),l=r(4637);let u={providers:[i()({name:"Credentials",async authorize(e){let t=await (0,l.vO)(),r=t.db().collection("users"),n=await r.findOne({email:e.email});if(!n)throw Error("User does not exist");let o=await (0,s.G)(e.password,n.password);if(!o)throw Error("Incorrect password");return{email:n.email}}})],session:{maxAge:300}},c=o()(u)},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=t(t.s=2994);module.exports=r})();