"use strict";(()=>{var e={};e.id=913,e.ids=[913],e.modules={8013:e=>{e.exports=require("mongodb")},2113:e=>{e.exports=require("next-auth/next")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},1512:(e,t,n)=>{n.r(t),n.d(t,{config:()=>w,default:()=>f,routeModule:()=>m});var r={};n.r(r),n.d(r,{default:()=>p});var o=n(1802),a=n(7153),s=n(6249),i=n(2113),l=n(5152),u=n(5427),c=n(4637);async function d(e,t){if("PATCH"!==e.method)return;let n=await (0,i.getServerSession)(e,t,l.authOptions);if(!n){t.status(401).json({message:"Not authenticated!"});return}let r=n.user.email,o=e.body.oldPassword,a=e.body.newPassword,s=await (0,c.vO)(),d=s.db().collection("users"),p=await d.findOne({email:r});if(!p){t.status(404).json({message:"User not found."});return}let f=p.password,w=await (0,u.G)(o,f);if(!w){t.status(403).json({message:"Invalid password."});return}let m=await (0,u.c)(a);await d.updateOne({email:r},{$set:{password:m}}),t.status(200).json({message:"Password updated!"})}let p=d,f=(0,s.l)(r,"default"),w=(0,s.l)(r,"config"),m=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/user/change-password",pathname:"/api/user/change-password",bundlePath:"",filename:""},userland:r})},5427:(e,t,n)=>{n.d(t,{c:()=>o,G:()=>a});let r=require("bcryptjs");async function o(e){let t=await (0,r.hash)(e,12);return t}async function a(e,t){let n=await (0,r.compare)(e,t);return n}},4637:(e,t,n)=>{n.d(t,{Bd:()=>l,GP:()=>u,kc:()=>c,vO:()=>i});var r=n(8013);let{ObjectId:o}=n(8013),a=null,s=!1;async function i(){let e;if(s)return console.log("return already stored client"),a;try{e=await r.MongoClient.connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/Production?retryWrites=true&w=majority",{useUnifiedTopology:!0,useNewUrlParser:!0,connectTimeoutMS:3e4,poolSize:10})}catch(e){if(console.error("Error connecting to the database:",e),"Topology is closed, please connect"===e.message){console.log("Topology is closed. Reconnecting..."),i();return}}return e.on("close",()=>{console.log("Connection closed. Reconnecting..."),i()}),s||(a=e,s=!0,console.log("return new client")),e}async function l(){let e=await i(),t=e.db(),n=await t.collection("PostedItem").find({}).toArray();return n}async function u(e){let t=await i(),n=t.db().collection("QAnswers"),r=await n.find({PostID:e}).toArray();return r}async function c(){let e=await i(),t=e.db().collection("users"),n=await t.find({},{projection:{password:0,name:0,_id:0}}).toArray();return n}},5152:(e,t,n)=>{n.r(t),n.d(t,{authOptions:()=>u,default:()=>c});let r=require("next-auth");var o=n.n(r);let a=require("next-auth/providers/credentials");var s=n.n(a),i=n(5427),l=n(4637);let u={providers:[s()({name:"Credentials",async authorize(e){let t=await (0,l.vO)(),n=t.db().collection("users"),r=await n.findOne({email:e.email});if(!r)throw Error("User does not exist");let o=await (0,i.G)(e.password,r.password);if(!o)throw Error("Incorrect password");return{email:r.email}}})],session:{maxAge:300}},c=o()(u)},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=1512);module.exports=n})();