import{_ as p,r as d,o as r,c as l,a as e,w as o,b as s,t as n,d as a,s as g}from"./index-nQTF7lmM.js";const u={props:{image:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0}}},k={class:"card"},f=["src","alt"],j={class:"card__description"};function h(_,m,t,x,y,C){const c=d("router-link");return r(),l("div",k,[e(c,{to:`/work/${t.name}`},{default:o(()=>[s("img",{src:`/images/projects/${t.image}`,alt:t.name},null,8,f)]),_:1},8,["to"]),s("div",j,n(t.description),1),e(c,{to:`/work/${t.name}`},{default:o(()=>[a(n(t.link),1)]),_:1},8,["to"])])}const i=p(u,[["render",h]]),w={class:"projects"},v=s("div",{class:"projects__title"},[a(" Selection of "),s("span",{class:"second-font"},"exciting"),a(" projects. ")],-1),b={class:"projects__container"},V={__name:"WorkView",setup(_){return g("Work"),(m,t)=>(r(),l("div",w,[v,s("div",b,[e(i,{class:"projects__item",name:"wish",image:"wish.gif",link:"Wish x Young Glory entrance",description:"Christmas COVID special"}),e(i,{class:"projects__item",name:"jbl",image:"jbl.webp",link:"JBL 75 years",description:"Digital special"}),e(i,{class:"projects__item",name:"kia",image:"kia.webp",link:"KIa MOHAVE",description:"Celebrity endorsement"}),e(i,{class:"projects__item",name:"afcon",image:"afcon.webp",link:"AFCON",description:"Social impact"}),e(i,{class:"projects__item",name:"pepsico",image:"pepsico.webp",link:"Domik v derevne (Pepsico)",description:"Packaging activation"}),e(i,{class:"projects__item",name:"meller",image:"meller.gif",link:"Meller film",description:"OLV"})])]))}};export{V as default};
