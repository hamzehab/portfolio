import{f as k,m as S,h as f,g as I,D as j,a5 as N,r as C,U as z,V as p,a6 as B,a0 as _,X as s,W as h,a2 as y,a1 as w,Y as b,_ as v,$ as r,L as x,a7 as E,T as L,a3 as D,a8 as O,a9 as P,y as V,aa as G,ab as H,i as U,j as J}from"./index.002bdaab.js";const W={dark:{type:Boolean,default:null}};function K(e,a){return k(()=>e.dark===null?a.dark.isActive:e.dark)}const X={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},M={xs:2,sm:4,md:8,lg:16,xl:24};var Y=S({name:"QSeparator",props:{...W,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=I(),m=K(e,a.proxy.$q),c=k(()=>e.vertical===!0?"vertical":"horizontal"),n=k(()=>` q-separator--${c.value}`),u=k(()=>e.inset!==!1?`${n.value}-${X[e.inset]}`:""),g=k(()=>`q-separator${n.value}${u.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(m.value===!0?" q-separator--dark":"")),d=k(()=>{const t={};if(e.size!==void 0&&(t[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const l=e.spaced===!0?`${M.md}px`:e.spaced in M?`${M[e.spaced]}px`:e.spaced,i=e.vertical===!0?["Left","Right"]:["Top","Bottom"];t[`margin${i[0]}`]=t[`margin${i[1]}`]=l}return t});return()=>f("hr",{class:g.value,style:d.value,"aria-orientation":c.value})}});let $=[],q=[];function F(e){q=q.filter(a=>a!==e)}function Ae(e){F(e),q.push(e)}function Me(e){F(e),q.length===0&&$.length!==0&&($[$.length-1](),$=[])}function De(e){q.length===0?e():$.push(e)}function Se(e){$=$.filter(a=>a!==e)}function T(){return j(N)}const Z={class:"gt-sm"},ee={class:"row justify-end"},te={class:"row q-mx-md q-mt-sm q-px-md col"},se=["src"],ae=["onClick"],ie={class:"q-mx-md q-mt-sm q-px-md"},le={class:"lt-md"},ne={class:"row justify-between"},oe={class:"row"},re=["src"],ce={key:0,class:"text-center menu-contents"},ue=["onClick"],Le={__name:"NavBar",setup(e){const a=T(),m=()=>{a.dark.toggle()},c=C(!1),n=["PROJECTS","CONTACT"],u=C("static/logoDarkMode.png"),g=()=>{window.open("static/Hamzeh Resume.pdf")};return z(()=>{a.dark.isActive?u.value="static/logoDarkMode.png":u.value="static/logo.png"}),(d,t)=>(p(),B(L,{appear:"","enter-active-class":"animated fadeInDown"},{default:_(()=>[s("div",{class:v(["full-width q-pa-lg fixed",r(a).dark.isActive?"custom-darkmode-navbar":"custom-navbar"])},[s("div",Z,[s("div",ee,[s("div",te,[s("img",{class:"cursor-pointer",width:"85",height:"30",src:u.value,onClick:t[0]||(t[0]=l=>d.$router.push("/"))},null,8,se)]),(p(),h(w,null,y(n,l=>s("div",{class:v(["cursor-pointer",r(a).dark.isActive?"nav-link":"nav-link-LM"]),key:l,onClick:i=>d.$router.push(`/${l.toLowerCase()}`)},[s("div",ie,D(l),1)],10,ae)),64)),s("div",{class:"pdf-button cursor-pointer q-pa-sm q-mx-md",onClick:g}," Resume "),b(x,{class:v(["q-mt-sm q-ml-md cursor-pointer",r(a).dark.isActive?"text-white":"text-black"]),name:r(a).dark.isActive?"fa-solid fa-circle-half-stroke":"fa-solid fa-circle-half-stroke fa-rotate-180",size:"30px",onClick:m},null,8,["class","name"])])]),s("div",le,[s("div",ne,[s("div",oe,[b(x,{class:"cursor-pointer",name:"menu",size:"41px",onClick:t[1]||(t[1]=l=>c.value=!c.value)}),s("img",{class:"cursor-pointer q-ml-lg",width:"85",height:"30",src:u.value,onClick:t[2]||(t[2]=l=>d.$router.push("/"))},null,8,re)]),b(x,{class:v(["q-mt-sm q-ml-md cursor-pointer",r(a).dark.isActive?"text-white":"text-black"]),name:r(a).dark.isActive?"fa-solid fa-circle-half-stroke":"fa-solid fa-circle-half-stroke fa-rotate-180",size:"30px",onClick:m},null,8,["class","name"])]),b(L,{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"},{default:_(()=>[c.value?(p(),h("div",ce,[s("div",null,[(p(),h(w,null,y(n,l=>s("div",{class:v(["q-pa-lg q-mx-*",r(a).dark.isActive?"nav-link":"nav-link-LM"]),key:l},[s("span",{class:"cursor-pointer q-pa-lg",onClick:i=>d.$router.push(`/${l.toLowerCase()}`)},D(l),9,ue)],2)),64)),s("div",{class:"pdf-button cursor-pointer q-py-sm q-mx-auto",style:{width:"100px"},onClick:g}," Resume ")])])):E("",!0)]),_:1})])],2)]),_:1}))}};var de=S({name:"QBreadcrumbsEl",props:{...O,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:a}){const{linkTag:m,linkAttrs:c,linkClass:n,navigateOnClick:u}=P(),g=k(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+n.value:"q-breadcrumbs__el--disable"),...c.value,onClick:u})),d=k(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const t=[];return e.icon!==void 0&&t.push(f(x,{class:d.value,name:e.icon})),e.label!==void 0&&t.push(e.label),f(m.value,{...g.value},V(a.default,t))}}});const ve=["",!0];var me=S({name:"QBreadcrumbs",props:{...G,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:a}){const m=H(e),c=k(()=>`flex items-center ${m.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),n=k(()=>e.separatorColor?` text-${e.separatorColor}`:""),u=k(()=>` text-${e.activeColor}`);return()=>{const g=U(J(a.default));if(g.length===0)return;let d=1;const t=[],l=g.filter(o=>o.type!==void 0&&o.type.name==="QBreadcrumbsEl").length,i=a.separator!==void 0?a.separator:()=>e.separator;return g.forEach(o=>{if(o.type!==void 0&&o.type.name==="QBreadcrumbsEl"){const A=d<l,R=o.props!==null&&ve.includes(o.props.disable),Q=(A===!0?"":" q-breadcrumbs--last")+(R!==!0&&A===!0?u.value:"");d++,t.push(f("div",{class:`flex items-center${Q}`},[o])),A===!0&&t.push(f("div",{class:"q-breadcrumbs__separator"+n.value},i()))}else t.push(o)}),f("div",{class:"q-breadcrumbs"},[f("div",{class:c.value},t)])}}});const ge=["onMouseover","onMouseleave"],ke=["src","alt"],pe={class:"flex flex-center"},he=["src"],fe={class:"row justify-between text-weight-medium text-body1"},be={class:"q-mt-md"},$e={class:"row q-mx-xl"},Ce=["onClick","onMouseover","onMouseleave","src","alt"],_e={class:"text-weight-medium text-body1 q-py-lg"},we={class:"text-center"},xe={class:"flex flex-center"},qe=["src"],ze={__name:"FooterComponent",setup(e){const a=T(),m=C(null),c=C("static/logoDarkMode.png"),n=C([{src:"static/socials/instagram/ig.png",alt:"Instagram"},{src:"static/socials/github/githubDarkMode.png",alt:"GitHub"},{src:"static/socials/linkedin/linkedinDarkMode.png",alt:"LinkedIn"},{src:"static/socials/gmail/gmailDarkMode.png",alt:"Gmail"}]),u=(t,l)=>{const i=n.value.findIndex(o=>o.alt===t);if(l)m.value=t,i==0?n.value[i].src="static/socials/instagram/igColor.png":n.value[i].src=`static/socials/${t.toLowerCase()}/${t.toLowerCase()}Color.png`;else{m.value=null;const o=a.dark.isActive;i==0?n.value[i].src=o?"static/socials/instagram/igDarkMode.png":"static/socials/instagram/ig.png":n.value[i].src=o?`static/socials/${t.toLowerCase()}/${t.toLowerCase()}DarkMode.png`:`static/socials/${t.toLowerCase()}/${t.toLowerCase()}.png`}},g=t=>{switch(t){case"Instagram":window.open("https://www.instagram.com/hazmeh_/","_blank");break;case"GitHub":window.open("https://github.com/hamzehab","_blank_");break;case"LinkedIn":window.open("https://www.linkedin.com/in/hamzeh-abdallah/","_blank_");break;case"Gmail":window.location.href="mailto:hamzehhabdallah@gmail.com";break}},d=()=>{window.open("static/Hamzeh Resume.pdf")};return z(()=>{a.dark.isActive?(n.value[0].src="static/socials/instagram/igDarkMode.png",n.value[1].src="static/socials/github/githubDarkMode.png",n.value[2].src="static/socials/linkedin/linkedinDarkMode.png",n.value[3].src="static/socials/gmail/gmailDarkMode.png",c.value="static/logoDarkMode.png"):(n.value[0].src="static/socials/instagram/ig.png",n.value[1].src="static/socials/github/github.png",n.value[2].src="static/socials/linkedin/linkedin.png",n.value[3].src="static/socials/gmail/gmail.png",c.value="static/logo.png")}),(t,l)=>(p(),h(w,null,[b(Y),s("div",{class:v(["gt-xs q-pa-xl",r(a).dark.isActive?"bg-black":"bg-grey-2"])},[b(me,{class:"row justify-center text-h3"},{separator:_(()=>[b(x,{size:"1.2em",name:"horizontal_rule"})]),default:_(()=>[(p(!0),h(w,null,y(n.value,i=>(p(),B(de,{class:"cursor-pointer",key:i,onClick:o=>g(i.alt)},{default:_(()=>[s("div",{onMouseover:o=>u(i.alt,!0),onMouseleave:o=>u(i.alt,!1)},[s("img",{class:"q-mb-lg",src:i.src,alt:i.alt},null,8,ke)],40,ge),m.value===i.alt?(p(),h("div",{key:0,class:v(["text-center text-bold absolute-bottom text-body2",r(a).dark.isActive?"text-white":"text-black"])},D(m.value),3)):E("",!0)]),_:2},1032,["onClick"]))),128))]),_:1}),s("div",pe,[s("img",{class:"cursor-pointer",width:"170",height:"60",src:c.value,onClick:l[0]||(l[0]=i=>t.$router.push("/"))},null,8,he)]),s("div",fe,[s("div",be,[s("span",{class:v(["q-mx-xl",r(a).dark.isActive?"footer-links-dm":"footer-links-lm"]),onClick:d}," RESUME ",2),s("span",{class:v(r(a).dark.isActive?"footer-links-dm":"footer-links-lm"),onClick:l[1]||(l[1]=i=>t.$router.push("/projects"))}," PROJECTS ",2)]),s("div",$e,[s("span",{class:v(["q-mt-md q-mr-lg",r(a).dark.isActive?"footer-links-dm":"footer-links-lm"]),onClick:l[2]||(l[2]=i=>t.$router.push("/contact"))}," CONTACT ME ",2)])])],2),s("div",{class:v(["lt-sm q-pa-xl",r(a).dark.isActive?"bg-black":"bg-grey-2"])},[(p(!0),h(w,null,y(n.value,i=>(p(),h("div",{key:i,class:"row justify-around"},[s("div",null,[s("img",{onClick:o=>g(i.alt),onMouseover:o=>u(i.alt,!0),onMouseleave:o=>u(i.alt,!1),class:"cursor-pointer",src:i.src,alt:i.alt},null,40,Ce)])]))),128)),s("div",_e,[s("div",we,[s("div",{class:v(["q-my-md",r(a).dark.isActive?"text-amber":"text-indigo"]),onClick:l[3]||(l[3]=i=>t.$router.push("/projects"))}," PROJECTS ",2),s("div",{class:v(["q-my-md",r(a).dark.isActive?"text-amber":"text-indigo"]),onClick:l[4]||(l[4]=i=>t.$router.push("/contact"))}," CONTACT ",2),s("div",{class:v(["q-my-md",r(a).dark.isActive?"text-amber":"text-indigo"]),onClick:d}," RESUME ",2)])]),s("div",xe,[s("img",{class:"cursor-pointer",width:"170",height:"60",src:c.value,onClick:l[5]||(l[5]=i=>t.$router.push("/"))},null,8,qe)])],2)],64))}};export{Y as Q,Le as _,K as a,De as b,T as c,ze as d,Ae as e,Se as f,me as g,de as h,Me as r,W as u};