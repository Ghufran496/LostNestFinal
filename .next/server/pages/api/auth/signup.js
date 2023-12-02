"use strict";(()=>{var e={};e.id=11,e.ids=[11],e.modules={8013:e=>{e.exports=require("mongodb")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},8358:(e,t,n)=>{n.r(t),n.d(t,{config:()=>f,default:()=>d,routeModule:()=>p});var o={};n.r(o),n.d(o,{default:()=>c});var r=n(1802),a=n(7153),s=n(6249),i=n(5427),l=n(4637);async function u(e,t){if("POST"!==e.method)return;let n=e.body,{email:o,password:r,enteredName:a}=n;if(!a){t.status(422).json({message:"Username not entered"});return}if(!o||!o.includes("@")){t.status(422).json({message:"Invalid Email"});return}if(!r||r.trim().length<7){t.status(422).json({message:"Invalid input - password should also be at least 7 characters long."});return}let s=await (0,l.vO)(),u=s.db(),c=await u.collection("users").findOne({email:o});if(c){t.status(422).json({message:"User exists already!"});return}let d=await (0,i.c)(r);await u.collection("users").insertOne({name:a,email:o,password:d}),t.status(201).json({message:"Created user!"})}let c=u,d=(0,s.l)(o,"default"),f=(0,s.l)(o,"config"),p=new r.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/auth/signup",pathname:"/api/auth/signup",bundlePath:"",filename:""},userland:o})},5427:(e,t,n)=>{n.d(t,{c:()=>r,G:()=>a});let o=require("bcryptjs");async function r(e){let t=await (0,o.hash)(e,12);return t}async function a(e,t){let n=await (0,o.compare)(e,t);return n}},4637:(e,t,n)=>{n.d(t,{Bd:()=>l,GP:()=>u,kc:()=>c,vO:()=>i});var o=n(8013);let{ObjectId:r}=n(8013),a=null,s=!1;async function i(){let e;if(s)return console.log("return already stored client"),a;try{e=await o.MongoClient.connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/Production?retryWrites=true&w=majority",{useUnifiedTopology:!0,useNewUrlParser:!0,connectTimeoutMS:3e4,poolSize:10})}catch(e){if(console.error("Error connecting to the database:",e),"Topology is closed, please connect"===e.message){console.log("Topology is closed. Reconnecting..."),i();return}}return e.on("close",()=>{console.log("Connection closed. Reconnecting..."),i()}),s||(a=e,s=!0,console.log("return new client")),e}async function l(){let e=await i(),t=e.db(),n=await t.collection("PostedItem").find({}).toArray();return n}async function u(e){let t=await i(),n=t.db().collection("QAnswers"),o=await n.find({PostID:e}).toArray();return o}async function c(){let e=await i(),t=e.db().collection("users"),n=await t.find({},{projection:{password:0,name:0,_id:0}}).toArray();return n}},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=8358);module.exports=n})();