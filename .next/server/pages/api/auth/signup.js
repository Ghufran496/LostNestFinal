"use strict";(()=>{var e={};e.id=11,e.ids=[11],e.modules={8013:e=>{e.exports=require("mongodb")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},8358:(e,t,n)=>{n.r(t),n.d(t,{config:()=>f,default:()=>d,routeModule:()=>p});var r={};n.r(r),n.d(r,{default:()=>c});var o=n(1802),a=n(7153),i=n(6249),s=n(5427),u=n(4637);async function l(e,t){if("POST"!==e.method)return;let n=e.body,{email:r,password:o,enteredName:a}=n;if(!a){t.status(422).json({message:"Username not entered"});return}if(!r||!r.includes("@")){t.status(422).json({message:"Invalid Email"});return}if(!o||o.trim().length<7){t.status(422).json({message:"Invalid input - password should also be at least 7 characters long."});return}let i=await (0,u.vO)(),l=i.db(),c=await l.collection("users").findOne({email:r});if(c){t.status(422).json({message:"User exists already!"}),i.close();return}let d=await (0,s.c)(o);await l.collection("users").insertOne({name:a,email:r,password:d}),t.status(201).json({message:"Created user!"}),i.close()}let c=l,d=(0,i.l)(r,"default"),f=(0,i.l)(r,"config"),p=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/auth/signup",pathname:"/api/auth/signup",bundlePath:"",filename:""},userland:r})},5427:(e,t,n)=>{n.d(t,{c:()=>o,G:()=>a});let r=require("bcryptjs");async function o(e){let t=await (0,r.hash)(e,12);return t}async function a(e,t){let n=await (0,r.compare)(e,t);return n}},4637:(e,t,n)=>{n.d(t,{Bd:()=>u,GP:()=>l,kc:()=>c,vO:()=>s});var r=n(8013);let{ObjectId:o}=n(8013),a=null,i=!1;async function s(){let e;if(i)return console.log("return already stored client"),a;try{e=await r.MongoClient.connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/Production?retryWrites=true&w=majority",{useUnifiedTopology:!0,useNewUrlParser:!0,connectTimeoutMS:3e4,poolSize:10})}catch(e){console.error("Error connecting to the database:",e)}return e.on("close",()=>{console.log("Connection closed. Reconnecting..."),s()}),i||(a=e,i=!0,console.log("return new client")),e}async function u(){let e=await s(),t=e.db(),n=await t.collection("PostedItem").find({}).toArray();return n}async function l(e){let t=await s(),n=t.db().collection("QAnswers"),r=await n.find({PostID:e}).toArray();return r}async function c(){let e=await s(),t=e.db().collection("users"),n=await t.find({},{projection:{password:0,name:0,_id:0}}).toArray();return n}},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=8358);module.exports=n})();