import{g as L,r as w,o as p,c as f,a as e,n as V,h as u,t as A,p as C,f as S,_ as k,i as D,j as oe,k as se,l as j,b as o,w as a,m as B,q as T,T as x,s as b,v as ne,x as ae,y as le,z as I,d as r,A as ce,B as O,C as H,D as G,E as re,F as ue}from"./entry.y0noYkgv.js";import{u as de}from"./svg_animator.D1qdGtzD.js";const F=n=>(C("data-v-6d3c5968"),n=n(),S(),n),pe={class:"container"},_e={class:"wrapper"},me=F(()=>e("button",{"aria-label":"Business mode",class:"w-full text-center text-label md:text-body"}," Hai un'attività? ",-1)),fe=[me],he=F(()=>e("button",{"aria-label":"User mode",class:"h-full text-center text-label md:text-body"}," Sei un appassionato? ",-1)),ve=[he],ge=L({__name:"switcher",props:{businessMode:{type:Boolean}},emits:["toggle"],setup(n,{emit:_}){const c=w(n.businessMode),s=_;function t(){c.value=!c.value,s("toggle",c.value)}return(h,v)=>(p(),f("div",pe,[e("div",_e,[e("div",{class:"relative flex h-full w-full items-center"},[e("div",{onClick:t,class:"text-back-400 flex h-full w-full cursor-pointer justify-start pl-4 text-center"},fe),e("div",{onClick:t,class:"text-back-400 flex h-full w-full cursor-pointer justify-center pr-4"},ve)]),e("span",{class:V(["switcher",{"text-white left-[50%] font-semibold ":!u(c),"text-white left-0 font-semibold":u(c)}])},A(u(c)?"Business":"Utente"),3)])]))}}),be=k(ge,[["__scopeId","data-v-6d3c5968"]]),xe={class:"gradient-clipper"},ye={class:"content"},Y=8,Le=L({__name:"parallax_card",props:{animDelay:{type:String,requirec:!1,default:"0ms"},animDuration:{type:String,requirec:!1,default:"400ms"},animXTrasl:{type:String,requirec:!1,default:"0px"},animYTrasl:{type:String,requirec:!1,default:"0px"},padding:{type:String,required:!1,default:"p-8"}},emits:["click"],setup(n,{emit:_}){const i=w(null),c=w(!1);function s($){K("click",$)}D(()=>{c.value=!0});const t=oe({rotateX:0,rotateY:0,mouseX:0,mouseY:0,gradientOpacity:0}),{x:h,y:v,top:y,right:g,bottom:z,left:d,width:q,height:E}=se(i),M=n,K=_;function W($){t.gradientOpacity=1}function Z($){t.rotateX=0,t.rotateY=0,t.gradientOpacity=0}function ee($){let N=h.value+q.value/2,ie=v.value+E.value/2,P=($.x-N)/(q.value/2),X=($.y-ie)/(E.value/2);t.rotateX=P*Y,t.rotateY=X*Y,t.mouseX=100*(P+1)/2,t.mouseY=100*(X+1)/2}const te=j(()=>({"--delay-tr":M.animDelay,"--duration-tr":M.animDuration,"--x-tr":M.animXTrasl,"--y-tr":M.animYTrasl}));return($,N)=>u(c)?(p(),f("div",{key:0,onClick:s,class:"cursor-pointer"},[o(x,{ref_key:"el",ref:i,name:"join",appear:"",tag:"div"},{default:a(()=>[e("div",{class:"card-wrapper",style:B(u(te))},[e("div",{style:B({"--rotate-x":u(t).rotateY+"deg","--rotate-y":-u(t).rotateX+"deg"}),class:"card",onMousemove:ee,onMouseleave:Z,onMouseenter:W},[e("div",xe,[e("div",{class:"gradient",style:B({"--x":u(t).mouseX+"%","--y":u(t).mouseY+"%","--opacity":u(t).gradientOpacity})},null,4)]),e("div",ye,[T($.$slots,"default",{},void 0,!0)])],36)],4)]),_:3},512)])):b("",!0)}}),Q=k(Le,[["__scopeId","data-v-c25d434c"]]),$e=""+globalThis.__publicAssetsURL("phone.svg"),U=n=>(C("data-v-37800caa"),n=n(),S(),n),we={class:"relative flex justify-center"},ze=U(()=>e("img",{src:$e,alt:"Phone contextualized notifications"},null,-1)),ke={id:"animated",class:"notification overflow-clip p-2 text-neutral/75"},Ae={class:"flex flex-row items-center justify-between"},Ce={class:"flex flex-row items-center space-x-1"},Se=U(()=>e("img",{src:ne,alt:"Phone notification",class:"size-4"},null,-1)),Me={class:"text-[0.5rem]"},Te=U(()=>e("div",{class:"mr-[0.3rem] h-[0.65rem] w-[0.65rem] animate-ping rounded-full bg-accent duration-700"},null,-1)),Ie={class:"mt-[0.35rem] text-[0.7rem] font-semibold leading-[0.85rem] text-neutral"},je=["innerHTML"],Re=L({__name:"phone_notification_display",setup(n){const _=[{title:"Aperitivo? 🤔",body:"Alla Malga Prealpi hai il <b>10%</b> di sconto! Raggiungi la malga per festeggiare l'itinerario appena completato!"},{title:"Hai fame? 🍲",body:"Che ne dici di una tipica cena con prodotti tipici locali?<br/> Il ristorante <b>Gusto di Montagna</b> ti aspetta!"},{title:"Rinnova la tua attrezzatura 🏔️",body:"Hai appena completato una ferrata incredibile!<br/>Passa al negozio di attrezzatura e riscatta il tuo sconto del <b>20%!</b>"},{title:"Si è fatto tardi 🌃",body:"Oggi sei andato per le lunghe!<br/>L'hotel <b>Dolomiti</b> ha già preparato un letto caldo per te!"},{title:"Ancora in quota? 🏡",body:"Ehi scalatore, è piuttosto tardi, il rifugio <b>Roccia Bianca</b> è sempre pronto ad accoglierti! "}],i=j(()=>document.getElementById("animated")),c=w(!1),s=w(0),t=w({title:"",body:""});let h=null;function v(){_.length>0&&(s.value=(s.value+1)%_.length,t.value=_[s.value],t.value.time=Math.round(Math.random()*58+1)+" m")}D(()=>{z()});function y(d){h!==null&&clearTimeout(h),c?g():z()}function g(){if(!c)return;let d=i.value;d!==void 0&&(d==null||d.classList.remove("anim-enter"),d==null||d.classList.add("anim-exit"),c.value=!1,h=setTimeout(z,500))}function z(){if(c.value)return;let d=i.value;d!==void 0&&(v(),d==null||d.classList.remove("anim-exit"),d==null||d.classList.add("anim-enter"),c.value=!0,h=setTimeout(g,Math.round(Math.random()*2500+5e3)))}return(d,q)=>(p(),f("div",we,[ze,e("div",{onClick:y,class:"absolute left-[13.5%] top-[11.5%] h-[80%] w-[60.5%] cursor-pointer overflow-clip rounded-[1rem]"},[e("div",ke,[e("div",Ae,[e("div",Ce,[Se,e("p",Me,"Atera ● "+A(u(t).time),1)]),Te]),e("p",Ie,A(u(t).title),1),e("p",{innerHTML:u(t).body,class:"mt-[0.15rem] text-[0.6rem] leading-[0.8rem]"},null,8,je)])])]))}}),qe=k(Re,[["__scopeId","data-v-37800caa"]]),Be=L({__name:"secondary_button",emits:["click"],setup(n,{emit:_}){const i=_;return(c,s)=>(p(),f("button",{"aria-label":"Secondary button",class:"btn",onClick:s[0]||(s[0]=t=>i("click"))},[e("p",null,[T(c.$slots,"default",{},void 0,!0)])]))}}),De=k(Be,[["__scopeId","data-v-c4677e03"]]),Oe={class:"flex w-full flex-col items-center justify-center gap-[4rem] pt-4 lg:flex-row"},Ue={class:"font-semibold text-accent"},Ee={class:"font-bold"},Ne={key:0},Pe={class:""},Xe={class:"basis-[60%]"},J=L({__name:"topic",props:{title:{type:String,require:!0},subtitle:{type:String,require:!0},buttonText:{type:String,require:!0},inverted:{type:Boolean,require:!1,default:!1}},emits:["click"],setup(n,{emit:_}){const i=_,c=ae(le),s=j(()=>c.smallerOrEqual("lg").value?!1:t.inverted),t=n;return(h,v)=>{const y=De;return p(),I(x,{name:"join",appear:"",tag:"div"},{default:a(()=>{var g;return[e("div",Oe,[e("div",{class:V(["basis-[40%]",{"order-last":u(s)}])},[e("h3",Ue,A(t.subtitle),1),e("h1",Ee,A(t.title),1),T(h.$slots,"body"),((g=n.buttonText??"")==null?void 0:g.length)>0?(p(),f("div",Ne,[o(y,{onClick:v[0]||(v[0]=z=>i("click")),class:"mt-4"},{default:a(()=>[r(A(t.buttonText),1)]),_:1})])):b("",!0)],2),e("div",Pe,[e("div",Xe,[T(h.$slots,"content")])])])]}),_:3})}}}),R=n=>(C("data-v-5bd72601"),n=n(),S(),n),Ye={class:"relative"},Ve=R(()=>e("svg",{viewBox:"0 0 143 212",width:"100%",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{id:"map-path",d:"M23.7045 15.8152L34.0459 2.51246L35.5783 6.40997L38.5856 6.69049L42.3448 7.04115L46.6127 10.0675L53.3792 10.6986L56.3866 10.9792L59.4921 14.2725L55.6574 18.7957L59.0407 19.1113L58.7282 22.4613L63.6151 22.9171L63.3027 26.2671L74.5802 27.3191L84.0068 31.953L88.5465 36.131L94.7288 38.9604L104.879 39.9072L112.981 38.4102L116.364 38.7258L123.449 31.8775L132.847 32.7542L134.756 36.6868L129.521 39.9531L134.408 40.4089L134.2 42.6423L129.313 42.1864L137.508 47.8317L131.493 47.2707L140.85 52.649L131.314 53.2613L140.191 59.7212L139.357 68.6544L133.51 70.3618L134.904 75.7481L136.61 77.7846L138.281 80.1932L137.448 89.1264L132.682 99.5701L131.883 108.131L130.911 118.553L126.631 123.786L120.737 134.124L120.251 139.335L122.397 144.792L128.689 142.375L128.133 148.331L132.448 142.726L133.5 147.705L132.841 154.777L128.971 159.673L119.897 171.592L113.13 170.961L110.29 172.948L103.171 185.169L102.719 190.008L102.164 195.963L94.2288 199.729L90.4696 199.378L84.7031 203.747L81.1115 205.664L78.9195 208.839L70.8863 209.592L63.6518 201.783L60.0602 198.701L59.7477 202.051L53.3572 201.455L51.6225 195.661L46.5272 197.438L40.2001 200.227L37.7135 194.364L28.4832 195.755L25.9152 198.895L25.7763 200.384L18.5585 204.591L8.24713 197.247L10.8558 189.606L7.09667 189.255L2.35463 183.181L5.30454 175.947L8.58964 173.25L13.0085 166.528L15.8602 156.281L13.2001 152.279L15.057 144.567L14.3806 139.623L15.7861 136.751L12.0269 136.4L12.4783 131.561L7.21547 131.07L9.71401 128.675L6.09372 126.835L6.64925 120.88",stroke:"rgba(var(--outline), 1)","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),He={key:0,class:"animate-pop absolute left-[78%] top-[86%] h-[2%] w-[5%] bg-accent"},Ge={key:0,style:{"--y-tr":"20px","--duration-tr":"250ms"},class:"point-label left-[76%] top-[92%]"},Fe=R(()=>e("p",{class:"font-semibold"},"Hotel",-1)),Qe={key:1,class:"animate-pop absolute left-[14%] top-[55%] h-[4%] w-[5%] bg-accent"},Je={key:0,style:{"--y-tr":"20px","--duration-tr":"250ms"},class:"point-label left-[4%] top-[43%]"},Ke=R(()=>e("p",{class:"font-semibold"},"Rifugio",-1)),We={key:2,class:"animate-pop absolute left-[68%] top-[12%] h-[3%] w-[8%] bg-accent"},Ze={key:0,style:{"--y-tr":"20px","--duration-tr":"250ms"},class:"point-label left-[54%] top-[0%]"},et=R(()=>e("p",{class:"font-semibold"},"Negozio",-1)),tt=L({__name:"map_display",setup(n){const _=w();ce(_,t=>{t[0].isIntersecting&&c()});const i=de("#map-path");function c(){i.animator.stop(),i.animator.start({currentDuration:8e3,easingCallback:s})}j(()=>{let t=i.animator.percentage.value;return`${t};${t}`}),D(()=>{i.preload()});function s(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}return(t,h)=>{const v=O;return p(),f("div",{ref_key:"elementRef",ref:_,onClick:c,class:"rounded-card relative flex cursor-pointer justify-center border-[4px] border-outline p-12 lg:min-w-[32rem]"},[e("div",Ye,[Ve,u(i).animator.percentage.value>=.65?(p(),f("div",He)):b("",!0),o(x,{name:"join",appear:"",mode:"out-in"},{default:a(()=>[u(i).animator.percentage.value>=.7?(p(),f("div",Ge,[o(v,{class:"size-8 text-accent",name:"material-symbols:hotel"}),Fe])):b("",!0)]),_:1}),u(i).animator.percentage.value>=.95?(p(),f("div",Qe)):b("",!0),o(x,{name:"join",appear:"",mode:"out-in"},{default:a(()=>[u(i).animator.percentage.value>=.975?(p(),f("div",Je,[o(v,{class:"size-8 text-accent",name:"material-symbols:house-siding-rounded"}),Ke])):b("",!0)]),_:1}),u(i).animator.percentage.value>=.15?(p(),f("div",We)):b("",!0),o(x,{name:"join",appear:"",mode:"out-in"},{default:a(()=>[u(i).animator.percentage.value>=.2?(p(),f("div",Ze,[o(v,{class:"size-8 text-accent",name:"material-symbols:shopping-bag"}),et])):b("",!0)]),_:1})])],512)}}}),it=k(tt,[["__scopeId","data-v-5bd72601"]]),ot=""+globalThis.__publicAssetsURL("context.svg"),st=""+globalThis.__publicAssetsURL("conversione.svg"),nt=""+globalThis.__publicAssetsURL("local_shelter.svg"),m=n=>(C("data-v-23955f85"),n=n(),S(),n),at={key:0,class:"flex w-full flex-col items-center gap-[var(--content-padding)]"},lt={class:"flex w-full flex-row flex-wrap justify-center gap-8 sm:gap-12"},ct=m(()=>e("div",{class:"wrapper"},[e("div",null,[e("h2",null,"Contesto"),e("p",null," Raggiungi gli appassionati durante le loro attività nel tuo territorio, in modo efficace e non intrusivo ")]),e("div",{class:"h-0 w-full flex-1 p-0"},[e("img",{src:ot,alt:"Contextualized marketing",class:"h-full w-full object-contain"})])],-1)),rt=m(()=>e("div",{class:"wrapper"},[e("section",null,[e("h2",null,"Conversione"),e("p",null," Incentiva le conversioni tramite promozioni contestualizzate ed adattate al tuo business ")]),e("div",{class:"h-0 w-full flex-1 p-4"},[e("img",{src:st,alt:"Conversions",class:"h-full w-full object-contain"})])],-1)),ut=m(()=>e("div",{class:"wrapper"},[e("section",null,[e("h2",null,"Visibilità"),e("p",null," Aumenta la visibiltà della tua realtà economica tramite inserzioni personalizzate e perfettamente integrate ")]),e("div",{class:"h-0 w-full flex-1 p-0"},[e("img",{src:nt,alt:"Visibility",class:"h-full w-full scale-[110%] object-contain"})])],-1)),dt={class:"accent-card group"},pt=m(()=>e("h2",null,"Entra a far parte di Atera",-1)),_t=m(()=>e("p",null," Compila ora il modulo di contatto con le informazioni relative al tuo business. ",-1)),mt=m(()=>e("p",{class:"font-semibold text-accent"}," Iscriviti ora ",-1)),ft=m(()=>e("br",null,null,-1)),ht=m(()=>e("br",null,null,-1)),vt=m(()=>e("br",null,null,-1)),gt=m(()=>e("br",null,null,-1)),bt={ref:"conversionEl",id:"conversion",class:"w-full text-center"},xt=m(()=>e("h1",null,"Conversione",-1)),yt={ref:"conversionEl",class:"flex flex-row flex-wrap justify-center gap-[3rem] pt-8"},Lt={class:"interactive-cell group"},$t=m(()=>e("h2",null,"Coupon sconto",-1)),wt=m(()=>e("p",null," Aumenta il traffico fornendo agli utenti sconti riscattabili direttamente in app ",-1)),zt={class:"interactive-cell group"},kt=m(()=>e("h2",null,"Promozioni a tempo",-1)),At=m(()=>e("p",null," Comunica agli utenti interessati le promozioni attive nella tua attività economica ",-1)),Ct={class:"interactive-cell group"},St=m(()=>e("h2",null,"Offerte contestualizzate",-1)),Mt=m(()=>e("p",null," Massimizza le conversioni tramite annunci che fanno leva sulle attività di ogni singolo utente ",-1)),Tt=m(()=>e("br",null,null,-1)),It=m(()=>e("br",null,null,-1)),jt=m(()=>e("br",null,null,-1)),Rt=L({__name:"business_view",setup(n){const _=H();function i(c,s){let t=document.getElementById(s);t!==null&&(t.scrollIntoView({behavior:"smooth"}),console.log(s))}return(c,s)=>{const t=Q,h=G,v=qe,y=J,g=O,z=it;return u(_)?(p(),f("div",at,[e("div",lt,[o(t,{class:"card-size",onClick:s[0]||(s[0]=d=>i(d,"context")),key:"0","anim-delay":"150ms","anim-y-trasl":"30px","anim-x-trasl":"0px"},{default:a(()=>[ct]),_:1}),o(t,{class:"card-size",key:"0",onClick:s[1]||(s[1]=d=>i(d,"conversion")),"anim-delay":"50ms","anim-y-trasl":"30px","anim-x-trasl":"0px"},{default:a(()=>[rt]),_:1}),o(t,{class:"card-size",onClick:s[2]||(s[2]=d=>i(d,"visibility")),key:"0","anim-delay":"150ms","anim-y-trasl":"30px","anim-x-trasl":"0px"},{default:a(()=>[ut]),_:1}),o(x,{name:"join",appear:""},{default:a(()=>[e("div",dt,[pt,_t,o(h,{class:"pt-4"},{default:a(()=>[mt]),_:1})])]),_:1})]),o(y,{id:"context",title:"Contesto",subtitle:"Raggiungi gli utenti giusti al momento giusto"},{content:a(()=>[o(v)]),body:a(()=>[r(" In Atera gli annunci sono contestualizzati. "),ft,r(" Oltre alle preferenze dell'utente, ogni inserzione tiene conto anche degli itinerari svolti dall'utente in un determinato posto ad una specifica ora. Gli annunci emessi al termine di un escursione ad esempio, ottengono conversioni maggiori."),ht,vt,r(" Atera integra perfettamente gli annunci con lo stile e l'esperienza d'uso dell'utente. "),gt,r("Niente più pubblicità fastidiosa ed intrusiva: gli annunci sono a tutti gli effetti dei consigli, sarà l'utente stesso a ricercarli. ")]),default:a(()=>[r(" >")]),_:1}),e("div",bt,[xt,e("div",yt,[e("div",Lt,[o(g,{class:"icon group-hover:scale-[120%]",name:"icon-park-outline:shopping-bag-one"}),$t,wt]),e("div",zt,[o(g,{class:"icon group-hover:scale-[120%]",name:"material-symbols:auto-timer-rounded"}),kt,At]),e("div",Ct,[o(g,{class:"icon group-hover:scale-[120%]",name:"zondicons:radar"}),St,Mt])],512)],512),o(y,{id:"visibility",title:"Visibilità",inverted:"",subtitle:"Ottieni visibilità tramite campagne ottimizzate ed integrate"},{content:a(()=>[o(z)]),body:a(()=>[r(" In Atera sono disponibili spazi pubblicitari di vario tipo."),Tt,r(" Ottenendo un piazzamento pubblicitario nella scheda di un itinerario vicino alla propria attività economica, è possibile aumentare la visibilità e raggiungere gli utenti di una specifica area."),It,jt,r(" Gli appassionati che ricercano e visualizzano l'itinerario, entrano a conoscenza della realtà economica in maniera automatica e perfettamente integrata con l'esperienza d'uso. ")]),default:a(()=>[r(" >")]),_:1})])):b("",!0)}}}),qt=k(Rt,[["__scopeId","data-v-23955f85"]]),Bt=""+globalThis.__publicAssetsURL("appstore.svg"),Dt=""+globalThis.__publicAssetsURL("google_play.svg"),Ot=""+globalThis.__publicAssetsURL("phone2.svg"),Ut=""+globalThis.__publicAssetsURL("attestation.svg"),Et=""+globalThis.__publicAssetsURL("coupon.svg"),Nt={},l=n=>(C("data-v-7904976a"),n=n(),S(),n),Pt={class:"flex w-full flex-col items-center justify-stretch gap-[var(--content-padding)]"},Xt={class:"w-[100%] lg:w-[48rem]"},Yt=l(()=>e("h2",{style:{"--y-tr":"10px","--delay-tr":"200ms","--duration-tr":"500ms"},class:"text-center"}," Scarica ora Atera! ",-1)),Vt={class:"flex flex-row flex-wrap justify-stretch gap-4 sm:gap-8"},Ht=l(()=>e("a",{href:"https://apps.apple.com/it/app/Atera-ferrate-trekking/id6449359062",target:"_blank"},[e("div",{class:"image-button"},[e("img",{src:Bt,alt:"Apple store link",class:"h-full w-full"})])],-1)),Gt=l(()=>e("a",{href:"https://play.google.com/store/apps/details?id=com.Ateraworld.Atera",target:"_blank"},[e("div",{class:"image-button"},[e("img",{alt:"Google Play Store link",src:Dt,class:"h-full w-full"})])],-1)),Ft={class:"accent-card group mt-10 w-full"},Qt=l(()=>e("h2",null,"Hai gia scaricato Atera?",-1)),Jt=l(()=>e("p",null,[r(" Compila ora il modulo di feedback per farci sapere cosa ne pensi."),e("br"),r(" Il tuo aiuto è fondamentale per migliorare sempre di più Atera! ")],-1)),Kt=l(()=>e("p",{class:"font-semibold text-accent"}," Dicci ciò che pensi ",-1)),Wt={class:"w-full text-center"},Zt=l(()=>e("h2",null,"Per chi vuole di più, avendo solo l'essenziale",-1)),ei={class:"flex flex-row flex-wrap justify-center gap-[3rem] pt-12"},ti={class:"interactive-cell group"},ii=l(()=>e("h2",null,"Mappe",-1)),oi=l(()=>e("p",null," Mappe offline per i tuoi itinerari, dettagliate e semplici da utilizzare ",-1)),si={class:"interactive-cell group"},ni=l(()=>e("h2",null,"Turismo",-1)),ai=l(()=>e("p",null," Scopri nuovi itinerari e attività con sistemi di ricerca avanzati ",-1)),li={class:"interactive-cell group"},ci=l(()=>e("h2",null,"Qualità e coerenza",-1)),ri=l(()=>e("p",null," Informazioni coerenti e controllate dal team per le tue attività ",-1)),ui={class:"interactive-cell group"},di=l(()=>e("h2",null,"Sconti e benefici",-1)),pi=l(()=>e("p",null," Negozi, rifugi, ristoranti e molto altro: ottieni sconti e benefici facendo ciò che ami ",-1)),_i={class:"interactive-cell group"},mi=l(()=>e("h2",null,"Consigli e offerte",-1)),fi=l(()=>e("p",null," Fatti consigliare le migliori offerte in base ai tuoi interessi ed itinerari ",-1)),hi=l(()=>e("img",{class:"max-h-[34rem]",alt:"Offline maps",src:Ot},null,-1)),vi=l(()=>e("br",null,null,-1)),gi=l(()=>e("br",null,null,-1)),bi=l(()=>e("br",null,null,-1)),xi=l(()=>e("br",null,null,-1)),yi=l(()=>e("br",null,null,-1)),Li=l(()=>e("img",{class:"max-h-[26rem]",alt:"Activities attestation",src:Ut},null,-1)),$i=l(()=>e("br",null,null,-1)),wi=l(()=>e("br",null,null,-1)),zi=l(()=>e("br",null,null,-1)),ki=l(()=>e("br",null,null,-1)),Ai=l(()=>e("div",{class:"p-[4rem]"},[e("img",{class:"max-h-[16rem]",alt:"Discounts and benefits",src:Et})],-1)),Ci=l(()=>e("br",null,null,-1)),Si=l(()=>e("br",null,null,-1)),Mi=l(()=>e("br",null,null,-1)),Ti=l(()=>e("br",null,null,-1));function Ii(n,_){const i=Q,c=G,s=O,t=J;return p(),f("div",Pt,[e("div",Xt,[o(x,{name:"join",appear:"",mode:"out-in"},{default:a(()=>[Yt]),_:1}),e("div",Vt,[o(i,{class:"flex-1",key:"0","anim-x-trasl":"-30px"},{default:a(()=>[Ht]),_:1}),o(i,{class:"flex-1",key:"0","anim-x-trasl":"30px"},{default:a(()=>[Gt]),_:1})]),o(x,{name:"join",appear:""},{default:a(()=>[e("div",Ft,[Qt,Jt,o(c,{class:"pt-4"},{default:a(()=>[Kt]),_:1})])]),_:1})]),e("div",Wt,[Zt,e("div",ei,[e("div",ti,[o(s,{class:"icon group-hover:scale-[120%]",name:"material-symbols-light:map"}),ii,oi]),e("div",si,[o(s,{class:"icon group-hover:scale-[120%]",name:"ph:magnifying-glass-bold"}),ni,ai]),e("div",li,[o(s,{class:"icon group-hover:scale-[120%]",name:"material-symbols:bar-chart-4-bars-rounded"}),ci,ri]),e("div",ui,[o(s,{class:"icon group-hover:scale-[120%]",name:"streamline:discount-percent-coupon-solid"}),di,pi]),e("div",_i,[o(s,{class:"icon group-hover:scale-[120%]",name:"zondicons:radar"}),mi,fi])])]),o(t,{title:"Solo ciò che conta",subtitle:"Goditi la natura, sapendo di avere in tasca un fedele compagno"},{content:a(()=>[hi]),body:a(()=>[r(" Atera ti fornisce l'essenziale per permetterti di godere al meglio la natura. "),vi,r(" Le mappe disponibili sono estremamente semplici da usare."),gi,r(" All'interno puoi trovare tutti i punti d'interesse come rifugi, bivacchi, punti panoramici e perfino panchine e fonti d'acqua!"),bi,r(" Le mappe sono scaricabili offline, così potrai utilizzarle in qualunque situazione."),xi,yi,r(" Atera non pretende di digitalizzare tutto il mondo delle attività all'aperto, ma di integrarlo. ")]),default:a(()=>[r(" >")]),_:1}),o(t,{inverted:"",title:"Raggiungi i tuoi obiettivi",subtitle:"Tieni traccia dei tuoi itinerari e salva le mappe"},{content:a(()=>[Li]),body:a(()=>[r(" Attesta il completamento delle attività e sali di livello! "),$i,r(" Con Atera salvi i tuoi itinerari preferiti cosi da poter accedere alle informazioni ed alla mappa in qualunque situazione, anche in assenza di rete."),wi,r(" Tieni traccia di tutte le attività che hai completato e trovane di nuove grazie ai sistemi di ricerca avanzati."),zi,r("Porsi degli obiettivi è il primo passo per completarli!"),ki]),default:a(()=>[r(" >")]),_:1}),o(t,{title:"Fatti consigliare da Atera",subtitle:"Scopri offerte personalizzate e riscatta sconti e benefici"},{content:a(()=>[Ai]),body:a(()=>[r(" Atera ti consiglia come concludere i tuoi itinerari al meglio. "),Ci,r(" Grazie alla tecnologia di Atera, sei sempre a conoscenza delle migliori offerte nei dintorni."),Si,Mi,r(" Hai appena completato un itinerario faticoso?"),Ti,r(" Che sia il posto perfetto dove passare la notte, un ristorante tipico dove sfamarti o semplicemente il posto più panoramico dove fare aperitivo, Atera ti suggerisce le opzioni migliori! ")]),default:a(()=>[r(" >")]),_:1})])}const ji=k(Nt,[["render",Ii],["__scopeId","data-v-7904976a"]]),Ri={key:0,class:"flex w-full flex-col items-center justify-start px-6 sm:px-8"},qi={class:"flex w-full max-w-[var(--content-width)] flex-col"},Bi={class:"flex flex-col items-center text-center"},Di={key:0,style:{"--y-tr":"8px"}},Oi={key:1,style:{"--y-tr":"-8px"}},Ui=e("h1",{class:"text-4xl text-accent"},"Un'unica piattaforma.",-1),Ei={key:0,class:"max-w-[48rem]",style:{"--y-tr":"-4px"}},Ni={key:1,class:"max-w-[48rem]",style:{"--y-tr":"4px"}},Pi={class:"flex w-full pt-12"},Xi=L({__name:"content",setup(n){const _=H(),i=re();function c(s){i.$state.businessMode=s}return(s,t)=>{const h=be,v=qt,y=ji;return u(_)?(p(),f("div",Ri,[e("div",qi,[e("div",Bi,[o(x,{name:"join",class:"flex min-h-[14rem] items-end sm:min-h-[12rem] md:min-h-[8rem]",mode:"out-in",appear:""},{default:a(()=>[u(i).$state.businessMode?(p(),f("h1",Di," Raggiungi più appassionati, aumenta le conversioni. ")):(p(),f("h1",Oi," Dal trekking turistico al climbing tecnico. "))]),_:1}),Ui,o(x,{class:"min-h-[2rem]",name:"join",mode:"out-in",appear:""},{default:a(()=>[u(i).$state.businessMode?(p(),f("p",Ei," La piattaforma dedicata alle escursioni outdoor che mette in contatto gli appassionati con gli imprenditori del settore ")):(p(),f("p",Ni," Scopri gli itinerari più adatti a te, attesta il completamento delle attività ed ottieni sconti semplicemente facendo ciò che ami. "))]),_:1}),o(h,{class:"self-center pt-8","business-mode":u(i).$state.businessMode,onToggle:c},null,8,["business-mode"])]),e("div",Pi,[u(i).$state.businessMode?(p(),I(v,{key:0})):(p(),I(y,{key:1}))])])])):b("",!0)}}}),Hi=L({__name:"index",setup(n){const _=w(!1);ue();function i(c){_.value=c}return(c,s)=>{const t=Xi;return p(),I(t,{onModeChanged:i})}}});export{Hi as default};
