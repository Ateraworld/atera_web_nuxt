import{g as L,r as y,h as fe,o as f,c as h,a as e,n as te,i as u,t as M,p as P,f as B,_ as I,j as G,k as ve,l as re,m as T,b as a,w as o,q as E,s as W,T as $,v as w,x as C,y as he,z as ie,A as oe,B as U,d as t,C as ge,D,E as be,F as xe,G as ae,H as ye,I as ze,J as $e,K as Le}from"./lTBzBtgr.js";import{u as we}from"./Dpr1bb3Z.js";const ce=c=>(P("data-v-6cbbae21"),c=c(),B(),c),ke={class:"container"},Ce={class:"wrapper"},Ie=ce(()=>e("button",{"aria-label":"Business mode",class:"w-full text-center text-label md:text-body"}," Hai un'attività? ",-1)),Se=[Ie],We=ce(()=>e("button",{"aria-label":"User mode",class:"h-full text-center text-label md:text-body"}," Sei un appassionato? ",-1)),qe=[We],Me=L({__name:"switcher",props:{businessMode:{type:Boolean}},emits:["toggle"],setup(c,{emit:p}){const d=y(c.businessMode);fe();const l=p;function i(){d.value=!d.value,l("toggle",d.value)}return(n,v)=>(f(),h("div",ke,[e("div",Ce,[e("div",{class:"relative flex h-full w-full items-center"},[e("div",{onClick:i,class:"text-back-400 flex h-full w-full cursor-pointer justify-start pl-4 text-center"},Se),e("div",{onClick:i,class:"text-back-400 flex h-full w-full cursor-pointer justify-center pr-4"},qe)]),e("span",{class:te(["switcher",{"text-white left-[50%] font-semibold ":!u(d),"text-white left-0 font-semibold":u(d)}])},M(u(d)?"Business":"Utente"),3)])]))}}),Te=I(Me,[["__scopeId","data-v-6cbbae21"]]),je={class:"gradient-clipper"},Ae={class:"content group-hover:scale-[102%]"},se=8,Ee=L({__name:"parallax_card",props:{animDelay:{type:String,requirec:!1,default:"0ms"},animDuration:{type:String,requirec:!1,default:"400ms"},animXTrasl:{type:String,requirec:!1,default:"0px"},animYTrasl:{type:String,requirec:!1,default:"0px"}},emits:["click"],setup(c,{emit:p}){const s=y(null),d=y(!1);function l(k){Y("click",k)}G(()=>{d.value=!0});const i=ve({rotateX:0,rotateY:0,mouseX:0,mouseY:0,gradientOpacity:0}),{x:n,y:v,top:g,right:b,bottom:z,left:m,width:O,height:Q}=re(s),j=c,Y=p;function X(k){i.gradientOpacity=1}function K(k){i.rotateX=0,i.rotateY=0,i.gradientOpacity=0}function J(k){let R=n.value+O.value/2,q=v.value+Q.value/2,N=(k.x-R)/(O.value/2),V=(k.y-q)/(Q.value/2);i.rotateX=N*se,i.rotateY=V*se,i.mouseX=100*(N+1)/2,i.mouseY=100*(V+1)/2}const Z=T(()=>({"--delay-tr":j.animDelay,"--duration-tr":j.animDuration,"--x-tr":j.animXTrasl,"--y-tr":j.animYTrasl}));return(k,R)=>u(d)?(f(),h("div",{key:0,onClick:l,class:"cursor-pointer"},[a($,{ref_key:"el",ref:s,name:"join",appear:"",tag:"div"},{default:o(()=>[e("div",{class:"card-wrapper group",style:E(u(Z))},[e("div",{style:E({"--rotate-x":u(i).rotateY+"deg","--rotate-y":-u(i).rotateX+"deg"}),class:"card",onMousemove:J,onMouseleave:K,onMouseenter:X},[e("div",je,[e("div",{class:"gradient",style:E({"--x":u(i).mouseX+"%","--y":u(i).mouseY+"%","--opacity":u(i).gradientOpacity})},null,4)]),e("div",Ae,[W(k.$slots,"default",{},void 0,!0)])],36)],4)]),_:3},512)])):w("",!0)}}),De=I(Ee,[["__scopeId","data-v-af2fa404"]]),Pe=C("/phone.svg"),ne=c=>(P("data-v-4ac5a17e"),c=c(),B(),c),Be={class:"relative flex justify-center"},Oe=ne(()=>e("img",{src:Pe,alt:"Phone contextualized notifications"},null,-1)),Ye={id:"animated",class:"notification overflow-clip p-2 text-neutral/75"},Xe={class:"flex flex-row items-center justify-between"},Re={class:"flex flex-row items-center space-x-1"},Ne=ne(()=>e("img",{src:he,alt:"Phone notification",class:"size-4"},null,-1)),Ve={class:"text-[0.5rem]"},He=ne(()=>e("div",{class:"mr-[0.3rem] h-[0.65rem] w-[0.65rem] animate-ping rounded-full bg-accent duration-700"},null,-1)),Ue={class:"mt-[0.35rem] text-[0.7rem] font-semibold leading-[0.85rem] text-neutral"},Ge=["innerHTML"],Fe=L({__name:"phone_notification_display",setup(c){const p=[{title:"Aperitivo? 🤔",body:"Alla Malga Prealpi hai il <b>10%</b> di sconto! Raggiungi la malga per festeggiare l'itinerario appena completato!"},{title:"Hai fame? 🍲",body:"Che ne dici di una tipica cena con prodotti tipici locali?<br/> Il ristorante <b>Gusto di Montagna</b> ti aspetta!"},{title:"Rinnova la tua attrezzatura 🏔️",body:"Hai appena completato una ferrata incredibile!<br/>Passa al negozio di attrezzatura e riscatta il tuo sconto del <b>20%!</b>"},{title:"Si è fatto tardi 🌃",body:"Oggi sei andato per le lunghe!<br/>L'hotel <b>Dolomiti</b> ha già preparato un letto caldo per te!"},{title:"Ancora in quota? 🏡",body:"Ehi scalatore, è piuttosto tardi, il rifugio <b>Roccia Bianca</b> è sempre pronto ad accoglierti! "}],s=T(()=>document.getElementById("animated")),d=y(!1),l=y(0),i=y({title:"",body:""});let n=null;function v(){p.length>0&&(l.value=(l.value+1)%p.length,i.value=p[l.value],i.value.time=Math.round(Math.random()*58+1)+" m")}G(()=>{z()});function g(m){n!==null&&clearTimeout(n),d?b():z()}function b(){if(!d)return;let m=s.value;m!==void 0&&(m==null||m.classList.remove("anim-enter"),m==null||m.classList.add("anim-exit"),d.value=!1,n=setTimeout(z,500))}function z(){if(d.value)return;let m=s.value;m!==void 0&&(v(),m==null||m.classList.remove("anim-exit"),m==null||m.classList.add("anim-enter"),d.value=!0,n=setTimeout(b,Math.round(Math.random()*2500+5e3)))}return(m,O)=>(f(),h("div",Be,[Oe,e("div",{onClick:g,class:"absolute left-[13.5%] top-[11.5%] h-[80%] w-[60.5%] cursor-pointer overflow-clip rounded-[1rem]"},[e("div",Ye,[e("div",Xe,[e("div",Re,[Ne,e("p",Ve," Wildspace ● "+M(u(i).time),1)]),He]),e("p",Ue,M(u(i).title),1),e("p",{innerHTML:u(i).body,class:"mt-[0.15rem] text-[0.6rem] leading-[0.8rem]"},null,8,Ge)])])]))}}),Qe=I(Fe,[["__scopeId","data-v-4ac5a17e"]]),Ke=L({__name:"secondary_button",emits:["click"],setup(c,{emit:p}){const s=p;return(d,l)=>(f(),h("button",{"aria-label":"Secondary button",class:"btn",onClick:l[0]||(l[0]=i=>s("click"))},[e("p",null,[W(d.$slots,"default",{},void 0,!0)])]))}}),Je=I(Ke,[["__scopeId","data-v-c4677e03"]]),Ze={class:"flex w-full flex-col items-center justify-center gap-[4rem] pt-4 lg:flex-row"},et={class:"font-semibold text-accent"},tt={class:"font-bold"},it={key:0},ot={class:""},at={class:"basis-[60%]"},de=L({__name:"topic",props:{title:{type:String,require:!0},subtitle:{type:String,require:!0},buttonText:{type:String,require:!0},inverted:{type:Boolean,require:!1,default:!1}},emits:["click"],setup(c,{emit:p}){const s=p,d=ie(oe),l=T(()=>d.smallerOrEqual("lg").value?!1:i.inverted),i=c;return(n,v)=>{const g=Je;return f(),U($,{name:"join",appear:"",tag:"div"},{default:o(()=>{var b;return[e("div",Ze,[e("div",{class:te(["basis-[40%]",{"order-last":u(l)}])},[e("h3",et,M(i.subtitle),1),e("h1",tt,M(i.title),1),W(n.$slots,"body"),((b=c.buttonText??"")==null?void 0:b.length)>0?(f(),h("div",it,[a(g,{onClick:v[0]||(v[0]=z=>s("click")),class:"mt-4"},{default:o(()=>[t(M(i.buttonText),1)]),_:1})])):w("",!0)],2),e("div",ot,[e("div",at,[W(n.$slots,"content")])])])]}),_:3})}}}),F=c=>(P("data-v-0824b011"),c=c(),B(),c),nt={class:"relative"},st=F(()=>e("svg",{viewBox:"0 0 143 212",width:"100%",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{id:"map-path",d:"M23.7045 15.8152L34.0459 2.51246L35.5783 6.40997L38.5856 6.69049L42.3448 7.04115L46.6127 10.0675L53.3792 10.6986L56.3866 10.9792L59.4921 14.2725L55.6574 18.7957L59.0407 19.1113L58.7282 22.4613L63.6151 22.9171L63.3027 26.2671L74.5802 27.3191L84.0068 31.953L88.5465 36.131L94.7288 38.9604L104.879 39.9072L112.981 38.4102L116.364 38.7258L123.449 31.8775L132.847 32.7542L134.756 36.6868L129.521 39.9531L134.408 40.4089L134.2 42.6423L129.313 42.1864L137.508 47.8317L131.493 47.2707L140.85 52.649L131.314 53.2613L140.191 59.7212L139.357 68.6544L133.51 70.3618L134.904 75.7481L136.61 77.7846L138.281 80.1932L137.448 89.1264L132.682 99.5701L131.883 108.131L130.911 118.553L126.631 123.786L120.737 134.124L120.251 139.335L122.397 144.792L128.689 142.375L128.133 148.331L132.448 142.726L133.5 147.705L132.841 154.777L128.971 159.673L119.897 171.592L113.13 170.961L110.29 172.948L103.171 185.169L102.719 190.008L102.164 195.963L94.2288 199.729L90.4696 199.378L84.7031 203.747L81.1115 205.664L78.9195 208.839L70.8863 209.592L63.6518 201.783L60.0602 198.701L59.7477 202.051L53.3572 201.455L51.6225 195.661L46.5272 197.438L40.2001 200.227L37.7135 194.364L28.4832 195.755L25.9152 198.895L25.7763 200.384L18.5585 204.591L8.24713 197.247L10.8558 189.606L7.09667 189.255L2.35463 183.181L5.30454 175.947L8.58964 173.25L13.0085 166.528L15.8602 156.281L13.2001 152.279L15.057 144.567L14.3806 139.623L15.7861 136.751L12.0269 136.4L12.4783 131.561L7.21547 131.07L9.71401 128.675L6.09372 126.835L6.64925 120.88",stroke:"rgba(var(--outline), 1)","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),lt={key:0,class:"animate-pop absolute left-[78%] top-[86%] h-[2%] w-[5%] bg-accent"},rt={key:0,style:{"--y-tr":"20px","--duration-tr":"250ms"},class:"point-label left-[76%] top-[92%]"},ct=F(()=>e("p",{class:"font-semibold"},"Hotel",-1)),dt={key:1,class:"animate-pop absolute left-[14%] top-[55%] h-[4%] w-[5%] bg-accent"},ut={key:0,style:{"--y-tr":"20px","--duration-tr":"250ms"},class:"point-label left-[4%] top-[43%]"},pt=F(()=>e("p",{class:"font-semibold"},"Rifugio",-1)),mt={key:2,class:"animate-pop absolute left-[68%] top-[12%] h-[3%] w-[8%] bg-accent"},_t={key:0,style:{"--y-tr":"20px","--duration-tr":"250ms"},class:"point-label left-[54%] top-[0%]"},ft=F(()=>e("p",{class:"font-semibold"},"Negozio",-1)),vt=L({__name:"map_display",setup(c){const p=y();ge(p,l=>{l[0].isIntersecting&&d()});const s=we("#map-path");function d(){s.animator.stop(),s.animator.start({currentDuration:7e3})}return T(()=>{let l=s.animator.percentage.value;return`${l};${l}`}),G(()=>{s.preload()}),(l,i)=>{const n=D;return f(),h("div",{ref_key:"elementRef",ref:p,onClick:d,class:"rounded-card relative flex cursor-pointer justify-center border-[4px] border-outline p-12 lg:min-w-[32rem]"},[e("div",nt,[st,u(s).animator.percentage.value>=.65?(f(),h("div",lt)):w("",!0),a($,{name:"join",appear:"",mode:"out-in"},{default:o(()=>[u(s).animator.percentage.value>=.7?(f(),h("div",rt,[a(n,{class:"size-8 text-accent",name:"material-symbols:hotel"}),ct])):w("",!0)]),_:1}),u(s).animator.percentage.value>=.95?(f(),h("div",dt)):w("",!0),a($,{name:"join",appear:"",mode:"out-in"},{default:o(()=>[u(s).animator.percentage.value>=.975?(f(),h("div",ut,[a(n,{class:"size-8 text-accent",name:"material-symbols:house-siding-rounded"}),pt])):w("",!0)]),_:1}),u(s).animator.percentage.value>=.15?(f(),h("div",mt)):w("",!0),a($,{name:"join",appear:"",mode:"out-in"},{default:o(()=>[u(s).animator.percentage.value>=.2?(f(),h("div",_t,[a(n,{class:"size-8 text-accent",name:"material-symbols:shopping-bag"}),ft])):w("",!0)]),_:1})])],512)}}}),ht=I(vt,[["__scopeId","data-v-0824b011"]]),gt={class:"rounded-default flex w-full flex-col items-stretch border-[1.5px] border-outline bg-surface"},bt={class:"flex w-full flex-row items-center"},xt={class:"flex w-full flex-row items-center justify-stretch"},yt={class:"flex-1 font-bold"},zt={class:"p-4"},$t=L({__name:"accordion",setup(c){const p=y(!1);function s(i){let n=i;if(!n)return;n.style.height="auto";const v=getComputedStyle(n).height;n.style.height="0px",getComputedStyle(n).height,setTimeout(()=>{n.style.height=v})}function d(i){let n=i;n&&(n.style.height="auto")}function l(i){let n=i;n&&(n.style.height=getComputedStyle(i).height,getComputedStyle(i),setTimeout(()=>{n.style.height="0px"}))}return(i,n)=>{const v=D;return f(),h("div",gt,[e("div",{class:"cursor-pointer p-4",onClick:n[0]||(n[0]=g=>p.value=!u(p))},[e("div",bt,[e("div",xt,[e("div",yt,[W(i.$slots,"title",{},void 0,!0)]),a(v,{class:te(["size-8 transition-all duration-150 ease-out",{"rotate-180":u(p),"rotate-0":!u(p)}]),name:"material-symbols:expand-more-rounded"},null,8,["class"])])])]),a($,{name:"expand",onEnter:s,onAfterEnter:d,onLeave:l},{default:o(()=>[be(e("div",null,[e("div",zt,[W(i.$slots,"content",{},void 0,!0)])],512),[[xe,u(p)]])]),_:3})])}}}),ue=I($t,[["__scopeId","data-v-fa0c4840"]]),Lt=C("/context.svg"),wt=C("/conversione.svg"),kt=C("/local_shelter.svg"),Ct=C("/conf.png"),It=C("/ttg.png"),_=c=>(P("data-v-ed7bcc22"),c=c(),B(),c),St={key:0,class:"flex w-full flex-col items-center gap-[var(--content-padding)]"},Wt={class:"flex flex-col justify-center gap-8 sm:gap-12"},qt={class:"flex w-full flex-row flex-wrap justify-center gap-8 sm:gap-12"},Mt=_(()=>e("div",{class:"wrapper"},[e("div",null,[e("h2",null,"Contesto"),e("p",null," Raggiungi gli appassionati durante le loro attività nel tuo territorio, in modo efficace e non intrusivo ")]),e("div",{class:"h-0 w-full flex-1 p-0"},[e("img",{src:Lt,alt:"Contextualized marketing",class:"h-full w-full object-contain"})])],-1)),Tt=_(()=>e("div",{class:"wrapper"},[e("section",null,[e("h2",null,"Conversione"),e("p",null," Incentiva le conversioni tramite promozioni contestualizzate ed adattate al tuo business ")]),e("div",{class:"h-0 w-full flex-1 p-4"},[e("img",{src:wt,alt:"Conversions",class:"h-full w-full object-contain"})])],-1)),jt=_(()=>e("div",{class:"wrapper"},[e("section",null,[e("h2",null,"Visibilità"),e("p",null," Aumenta la visibiltà della tua realtà economica tramite inserzioni personalizzate e perfettamente integrate ")]),e("div",{class:"h-0 w-full flex-1 p-0"},[e("img",{src:kt,alt:"Visibility",class:"h-full w-full scale-[110%] object-contain"})])],-1)),At=_(()=>e("div",{class:"flex w-full flex-row flex-wrap justify-center gap-4 opacity-60"},[e("img",{class:"h-[10rem] transition-all duration-200 ease-out hover:scale-[105%]",src:Ct}),e("img",{class:"h-[10rem] transition-all duration-200 ease-out hover:scale-[105%]",src:It})],-1)),Et=_(()=>e("br",null,null,-1)),Dt=_(()=>e("br",null,null,-1)),Pt=_(()=>e("br",null,null,-1)),Bt=_(()=>e("br",null,null,-1)),Ot={ref:"conversionEl",id:"conversion",class:"w-full text-center"},Yt=_(()=>e("h1",null,"Conversione",-1)),Xt={ref:"conversionEl",class:"flex flex-row flex-wrap justify-center gap-[3rem] pt-8"},Rt={class:"interactive-cell group"},Nt=_(()=>e("h2",null,"Coupon sconto",-1)),Vt=_(()=>e("p",null," Aumenta il traffico fornendo agli utenti sconti riscattabili direttamente in app ",-1)),Ht={class:"interactive-cell group"},Ut=_(()=>e("h2",null,"Promozioni a tempo",-1)),Gt=_(()=>e("p",null," Comunica agli utenti interessati le promozioni attive nella tua attività economica ",-1)),Ft={class:"interactive-cell group"},Qt=_(()=>e("h2",null,"Offerte contestualizzate",-1)),Kt=_(()=>e("p",null," Massimizza le conversioni tramite annunci che fanno leva sulle attività di ogni singolo utente ",-1)),Jt=_(()=>e("br",null,null,-1)),Zt=_(()=>e("br",null,null,-1)),ei=_(()=>e("br",null,null,-1)),ti={class:"flex w-full flex-col items-center justify-stretch gap-2 lg:w-[65%]"},ii=_(()=>e("h2",null,"FAQ",-1)),oi={class:"flex w-full flex-col gap-2"},ai=_(()=>e("p",null,"Come faccio ad iscrivere la mia attività?",-1)),ni=_(()=>e("div",{class:"flex flex-col gap-4"},[e("p",null,[e("span",{class:"font-semibold text-accent"},"Wildspace è in fase di raccolta fondi. "),e("br"),t("Una volta raggiunto il capitale che permetterà di fare il lancio sul mercato, ci sarà la possibilità di provare l’ecosistema e quindi la piattaforma web per le attività economiche. "),e("br"),t("Tra poco verrà abilitato il sistema di preregistrazione per gli early adopters tramite la compilazione del form apposito! "),e("br"),t("Coloro che effettuano la preregistrazione a Wildspace, potranno beneficiare di sconti personalizzati e avranno la possibilità di provare il prodotto in anteprima, fornire feedback e quindi entrare a far parte integrante del progetto. ")])],-1)),si=_(()=>e("p",null,"Come posso raggiungere potenziali clienti?",-1)),li=_(()=>e("p",null,[t(" Wildpsace permette agli imprenditori di raggiungere potenziali clienti interessati e nel momento più opportuno."),e("br"),t(" Il prodotto per le attività economiche permette di effettuare campagne marketing all’interno della piattaforma per far conoscere la propria attività agli utenti interessati. Ad esempio, tramite la piattaforma web, è possibile direzionare annunci specifici e personalizzati ad utenti che stanno completando un itinerario vicino."),e("br"),e("br"),t("Una delle particolarità di Wildspace è il modo in cui gli annunci vengono presentati agli utenti. Essi sono perfettamente integrati, questo porta ogni utente a considerare i piazzamenti come consigli da parte dell’applicazione, massimizzando le conversioni ")],-1)),ri=_(()=>e("p",null,"Come fa Wildspace a potenziare la mia attività?",-1)),ci=_(()=>e("p",null,[t(" Iscrivendo al propria attività a Wildspace si ottengono delle funzionalità fondamentali per la crescita e la fidelizzazione della propria clientela. "),e("br"),e("span",{class:"font-semibold"},"Il tutto gestibile da un'unica piattaforma web semplice ed intuitiva."),e("br"),e("br"),t(" ● "),e("span",{class:"font-semibold text-accent"},"Marketing Contestualizzato:"),t(" Possibilità di raggiungere gli utenti al posto giusto nel momento giusto grazie al sistema di contesto. "),e("br"),e("br"),t("● "),e("span",{class:"font-semibold text-accent"},"Fidelizzazione:"),t(" Pianificazione delle campagne di offerte ed incremento conversioni tramite Intelligenza Artificiale e ottimizzazione dei processi. "),e("br"),e("br"),t("● "),e("span",{class:"font-semibold text-accent"},"Analisi dei KPI"),t(" Analitiche delle campagne, delle conversioni e del mercato basate su dati reali. ")],-1)),di=_(()=>e("p",null," Come capisco se la mia attività economica è adeguata per Wildspace? ",-1)),ui=_(()=>e("p",null,[t(" In linea di massima ogni attività che opera nel "),e("span",{class:"font-semibold"},"mercato dell'accomodazione, dello sport e dei servizi"),t(" è adeguata ad entrare a far parte di Wildspace."),e("br"),t(" Tuttavia, è importante tenere conto che le attività economiche che ottengono maggiori benefici sono quelle che operano nel settore turistico sportivo o che comunque si trovano in località ricche di itinerari."),e("br"),t(" Un utente che ha appena completato un itinerario faticoso, sarà certamente più incline nell'aquistare un rinfresco in un locale vicino, soprattutto se viene annesso uno sconto. La capacità di proporre ciò che l'utente sta cercando e nel momento più opportuno, è la forza di Wildspace. Da questo esempio di comprende il beneficio che si ottiene quando ci si trova in aree con molti itinerari vicino."),e("br"),e("br"),t("Wildspace però permette anche a chi ha un e-commerce di entrare a far parte del proprio ecosistema. I sistemi di ottimizzazione delle campagne di offerte e del marketing interno alla piattaforma sono fondamentali per far conoscere la propria attività ad un comparto utenti mirato e con alte conversioni. ")],-1)),pi=L({__name:"business_view",setup(c){const p=ae();function s(d,l){let i=document.getElementById(l);i!==null&&(i.scrollIntoView({behavior:"smooth"}),console.log(l))}return(d,l)=>{const i=De,n=Qe,v=de,g=D,b=ht,z=ue;return u(p)?(f(),h("div",St,[e("div",Wt,[e("div",qt,[a(i,{class:"card-size",onClick:l[0]||(l[0]=m=>s(m,"context")),key:"0","anim-delay":"150ms","anim-y-trasl":"30px","anim-x-trasl":"0px"},{default:o(()=>[Mt]),_:1}),a(i,{class:"card-size",key:"0",onClick:l[1]||(l[1]=m=>s(m,"conversion")),"anim-delay":"50ms","anim-y-trasl":"30px","anim-x-trasl":"0px"},{default:o(()=>[Tt]),_:1}),a(i,{class:"card-size",onClick:l[2]||(l[2]=m=>s(m,"visibility")),key:"0","anim-delay":"150ms","anim-y-trasl":"30px","anim-x-trasl":"0px"},{default:o(()=>[jt]),_:1})]),At]),a(v,{id:"context",title:"Contesto",subtitle:"Raggiungi gli utenti giusti al momento giusto"},{content:o(()=>[a(n)]),body:o(()=>[t(" In Wildspace gli annunci sono contestualizzati. "),Et,t(" Oltre alle preferenze dell'utente, ogni inserzione tiene conto anche degli itinerari svolti dall'utente in un determinato posto ad una specifica ora. Gli annunci emessi al termine di un escursione ad esempio, ottengono conversioni maggiori."),Dt,Pt,t(" Wildspace integra perfettamente gli annunci con lo stile e l'esperienza d'uso dell'utente. "),Bt,t("Niente più pubblicità fastidiosa ed intrusiva: gli annunci sono a tutti gli effetti dei consigli, sarà l'utente stesso a ricercarli. ")]),default:o(()=>[t(" > ")]),_:1}),e("div",Ot,[Yt,e("div",Xt,[e("div",Rt,[a(g,{class:"icon group-hover:scale-[120%]",name:"icon-park-outline:shopping-bag-one"}),Nt,Vt]),e("div",Ht,[a(g,{class:"icon group-hover:scale-[120%]",name:"material-symbols:auto-timer-rounded"}),Ut,Gt]),e("div",Ft,[a(g,{class:"icon group-hover:scale-[120%]",name:"zondicons:radar"}),Qt,Kt])],512)],512),a(v,{id:"visibility",title:"Visibilità",inverted:"",subtitle:"Ottieni visibilità tramite campagne ottimizzate ed integrate"},{content:o(()=>[a(b)]),body:o(()=>[t(" In Wildspace sono disponibili spazi pubblicitari di vario tipo."),Jt,t(" Ottenendo un piazzamento pubblicitario nella scheda di un itinerario vicino alla propria attività economica, è possibile aumentare la visibilità e raggiungere gli utenti di una specifica area."),Zt,ei,t(" Gli appassionati che ricercano e visualizzano l'itinerario, entrano a conoscenza della realtà economica in maniera automatica e perfettamente integrata con l'esperienza d'uso. ")]),default:o(()=>[t(" > ")]),_:1}),e("div",ti,[ii,e("ul",oi,[a(z,null,{title:o(()=>[ai]),content:o(()=>[ni]),_:1}),a(z,null,{title:o(()=>[si]),content:o(()=>[li]),_:1}),a(z,null,{title:o(()=>[ri]),content:o(()=>[ci]),_:1}),a(z,null,{title:o(()=>[di]),content:o(()=>[ui]),_:1})])])])):w("",!0)}}}),mi=I(pi,[["__scopeId","data-v-ed7bcc22"]]),_i={class:"content"},le=16,fi=L({__name:"parallax_image",props:{animDelay:{type:String,requirec:!1,default:"0ms"},animDuration:{type:String,requirec:!1,default:"400ms"},animXTrasl:{type:String,requirec:!1,default:"0px"},animYTrasl:{type:String,requirec:!1,default:"0px"}},emits:["click"],setup(c,{emit:p}){const s=ie(oe),d=y(null),l=ye(),i=y(0),n=y(0),v=y(0),g=y(0),{x:b,y:z,top:m,right:O,bottom:Q,left:j,width:Y,height:X}=re(d);function K(x,S,A){return Math.min(Math.max(x,S),A)}function J(){return s.smallerOrEqual("md").value?40:120}function Z(x,S,A,H,ee){return H+(ee-H)/(A-S)*(x-S)}G(()=>{i.value=1-m.value/l.height.value});const k=T(()=>(console.log({"--translate-y":-g.value+"px","--translate-x":n.value+"px"}),{"--translate-y":-g.value+"px","--translate-x":n.value+"px"}));function R(x){N("click",x)}ze(m,()=>{let x=K(Z(1-m.value/l.height.value,i.value,1,-1,1),-1,1);v.value=x*J()});const q=c,N=p;function V(x){}function pe(x){n.value=0,g.value=0}function me(x){let S=b.value+Y.value/2,A=z.value+X.value/2,H=(x.x-S)/(Y.value/2),ee=(x.y-A)/(X.value/2);n.value=H*le,g.value=-ee*le}const _e=T(()=>({"--delay-tr":q.animDelay,"--duration-tr":q.animDuration,"--x-tr":q.animXTrasl,"--y-tr":q.animYTrasl}));return(x,S)=>(f(),h("div",{onClick:R,class:"cursor-pointer"},[a($,{ref_key:"el",ref:d,name:"join",appear:"",tag:"div"},{default:o(()=>[e("div",{class:"card-wrapper group",style:E(u(_e))},[e("div",{style:E(u(k)),onMousemove:me,onMouseleave:pe,onMouseenter:V,class:"card"},[e("div",_i,[W(x.$slots,"default",{},void 0,!0)])],36)],4)]),_:3},512)]))}}),vi=I(fi,[["__scopeId","data-v-4a9948e6"]]),hi=C("/brenta.webp"),gi=C("/phone2.svg"),bi=C("/attestation.svg"),xi=C("/coupon.svg"),r=c=>(P("data-v-8d1bf599"),c=c(),B(),c),yi={key:0,class:"flex w-full flex-col items-center justify-stretch gap-[var(--content-padding)]"},zi={class:"flex w-[100%] flex-col justify-start gap-8"},$i={class:"flex flex-col items-center"},Li=r(()=>e("h2",{class:"text-center"}," Scarica ora Wildspace, il tuo fedele compagno di avventura ",-1)),wi={class:"h-[20rem] max-w-[100%] md:h-[24rem] lg:w-[70rem]",style:{"--duration-tr":"400ms"}},ki={class:"rounded-card relative translate-y-[-0%] scale-[125%] overflow-clip md:translate-y-[-5%] md:scale-[110%]"},Ci=["height"],Ii={class:"text-text flex flex-row items-center gap-2 pt-2 text-label font-bold text-neutral/50"},Si=r(()=>e("p",null,"Dolomiti di Brenta",-1)),Wi={class:"relative flex flex-row justify-center gap-12"},qi={href:"https://apps.apple.com/it/app/Atera-ferrate-trekking/id6449359062",target:"_blank",style:{"--y-tr":"0px","--x-tr":"-30px","--duration-tr":"400ms"}},Mi={class:"accent-card group size-[8rem] items-center justify-center"},Ti={href:"https://play.google.com/store/apps/details?id=com.ateraworld.atera",target:"_blank",style:{"--y-tr":"0px","--x-tr":"30px","--duration-tr":"400ms"}},ji={class:"accent-card group size-[8rem] items-center justify-center"},Ai={class:"w-full text-center"},Ei=r(()=>e("h2",null,"Per chi vuole di più, avendo solo l'essenziale",-1)),Di={class:"flex flex-row flex-wrap justify-center gap-[3rem] pt-12"},Pi={class:"interactive-cell group"},Bi=r(()=>e("h2",null,"Mappe",-1)),Oi=r(()=>e("p",null," Mappe offline per i tuoi itinerari, dettagliate e semplici da utilizzare ",-1)),Yi={class:"interactive-cell group"},Xi=r(()=>e("h2",null,"Turismo",-1)),Ri=r(()=>e("p",null," Scopri nuovi itinerari e attività con sistemi di ricerca avanzati ",-1)),Ni={class:"interactive-cell group"},Vi=r(()=>e("h2",null,"Qualità e coerenza",-1)),Hi=r(()=>e("p",null," Informazioni coerenti e controllate dal team per le tue attività ",-1)),Ui={class:"interactive-cell group"},Gi=r(()=>e("h2",null,"Sconti e benefici",-1)),Fi=r(()=>e("p",null," Negozi, rifugi, ristoranti e molto altro: ottieni sconti e benefici facendo ciò che ami ",-1)),Qi={class:"interactive-cell group"},Ki=r(()=>e("h2",null,"Consigli e offerte",-1)),Ji=r(()=>e("p",null," Fatti consigliare le migliori offerte in base ai tuoi interessi ed itinerari ",-1)),Zi=r(()=>e("img",{class:"max-h-[34rem]",height:"544px",alt:"Offline maps",src:gi},null,-1)),eo=r(()=>e("br",null,null,-1)),to=r(()=>e("br",null,null,-1)),io=r(()=>e("br",null,null,-1)),oo=r(()=>e("br",null,null,-1)),ao=r(()=>e("br",null,null,-1)),no=r(()=>e("img",{class:"max-h-[26rem]",alt:"Activities attestation",src:bi},null,-1)),so=r(()=>e("br",null,null,-1)),lo=r(()=>e("br",null,null,-1)),ro=r(()=>e("br",null,null,-1)),co=r(()=>e("br",null,null,-1)),uo=r(()=>e("div",{class:"p-[4rem]"},[e("img",{class:"max-h-[16rem]",alt:"Discounts and benefits",src:xi})],-1)),po=r(()=>e("br",null,null,-1)),mo=r(()=>e("br",null,null,-1)),_o=r(()=>e("br",null,null,-1)),fo=r(()=>e("br",null,null,-1)),vo={class:"flex w-full flex-col items-center justify-stretch gap-2 lg:w-[65%]"},ho=r(()=>e("h2",null,"FAQ",-1)),go={class:"flex w-full flex-col gap-2"},bo=r(()=>e("p",null,"Ancora un'altra applicazione di mappe e itinerari outdoor?",-1)),xo=r(()=>e("div",{class:"flex flex-col gap-4"},[e("p",null,[e("span",{class:"font-semibold text-accent"},"Wildspace è molto di più di una semplice applicazione di itinerari. "),e("br"),e("br"),t("In Wildspace, ogni funzionalità viene introdotta nell'applicazione solo a seguito di attente analisi, questo per mantenere l'applicazione snella e funzionale."),e("br"),e("span",{class:"font-semibold"},"La nostra visione non è quella di digitalizzare le attività all'aperto, ma di integrarle fornendo all'utente una piattaforma che possa aiutarlo nei momenti di bisogno."),e("br"),t("Il sistema di contesto funziona a tutti gli effetti come una guida per l'utente che si avventura in zone nuove. Wildspace propone opportunità vicine all'utente in base alle sue attività."),e("br"),t("Immagina di aver appena completato una faticosissima ferrata in una zona di montagna che hai deciso di esplorare. Proprio durante il rientro, Wildspace ti propone in maniera non invasiva e personalizzata un rinfresco in un locale tipico vicino, con sconto annesso: che fai rifiuti 😁?"),e("br"),e("br"),t("Infine, in Wildspace gli utenti non possono inserire itinerari in autonomia, le informazioni degli itinerari sono curate ed aggiornate dal team e da un gruppo selezionato di collaboratori: i Contributori Wildspace. Seppur possa sembrare una limitazione a prima vista, questa scelta permette di "),e("span",{class:"font-semibold"},"mantenere una coerenza e omogeneità delle informazioni senza precedenti.")])],-1)),yo=r(()=>e("p",null,"Che tipi di sconti posso ottenere?",-1)),zo=r(()=>e("p",null,[t(" I partner di Wildspace possono comprendere varie categorie: hotel, rifugi, ristoranti tipici, negozi di attrezzatura e molto altro. "),e("br"),t(" Gli sconti disponibili nell'applicazione sono di varia natura. Ci sono offerte messe a disposizione degli utenti per un periodo di tempo limitato dai partner di Wildspace ma anche offerte che vengono proposte agli utenti che completano un itinerario nella zona di un'attività economica."),e("br"),t(" Ad esempio, in base agli interessi degli utenti, un ristorante tipico potrebbe decidere di mandare offerte mirate a coloro che completano un itinerario vicino. Di solito questo tipo di offerte permette di ottenere benefici economici maggiori."),e("br"),e("br"),t("Su Wildspace sono presenti anche sconti su e-commerce partner, in modo tale di permettere agli utenti di rinnovare la propria attrezzatura ad un prezzo vantaggioso."),e("br"),e("br"),e("span",{class:"font-semibold text-accent"},"In Wildspace più attività completi mettendoti in gioco, più scopri nuove opportunita e benefici!")],-1)),$o=r(()=>e("p",null," È possibile contribuire inserendo itinerari, informazioni e foto? ",-1)),Lo=r(()=>e("p",null,[t(" Assolutamente si, ci sono varie metodologie per aiutarci a costruire il database di attività in maniera curata e controllata. "),e("br"),t("Ad esempio, per contribuire con delle foto, è possibile contattare il team e mandare le foto tramite email. Inoltre, i sistemi di segnalazione di inagibilità o consigli sono già presenti in app. "),e("br"),e("br"),t(" Tuttavia, se sei un appassionato e vuoi condividere informazioni più dettagliate come relazioni di attività non ancora presenti, puoi contattarci per diventare un "),e("span",{class:"font-semibold text-accent"},"Contributore Wildspace. "),e("br"),t(" I Contributori hanno la possibilità di accedere ad una piattaforma web dedicata che può essere usata per integrare le informazioni esistenti aggiustando le relazioni, aggiungendo foto o scrivendo una nuova relazione da zero."),e("br"),t(" I Contributori ottengono dei benefici come ringraziamento del loro aiuto. In particolare, in base alle contribuzioni effettuate, sarà possibile riscattare periodi gratuiti di Wildspace Premium."),e("br"),t(" Inoltre, a coloro che forniranno un contributo sostanziale al database di Wildspace, sarà riconosciuto l'abbonamento "),e("span",{class:"font-semibold"}," Wildspace Premium a vita gratuitamente"),t(". ")],-1)),wo=r(()=>e("p",null,"Che tipi di itinerari posso trovare su Wildspace?",-1)),ko=r(()=>e("p",null,[t(" Su Wildspace sono presenti itinerari di tutti i tipi."),e("br"),t(" Ovviamente con il passare del tempo, grazie all'aiuto dei Contributori Wildspace, il database crescerà e verranno introdotte nuove categorie di attività."),e("br"),t(" Partendo da attività più tecniche come "),e("span",{class:"font-semibold"}," vie ferrate, vie normali, falesie fino ad arrivare ad attività più turistiche come trekking di tutti i tipi e punti di interesse come punti panoramici e punti di interesse culturale"),t(", su Wildspace ogni utente può trovare l'attività più adeguata."),e("br"),t(" I sistemi di ricerca avanzati permettono di filtrare per caratteristiche dell'attività, utilizzando la difficoltà e le altre metriche disponibili."),e("br"),e("br"),e("span",{class:"font-semibold text-accent"}," Wildspace punta in alto."),e("br"),t(" Abbiamo già in piano di integrare altre categorie di attività come "),e("span",{class:"font-semibold"}," percorsi di sci alpino e di fondo, trekking invernali e ciaspolate."),e("br"),t(" Wildspace non punta solo alla montagna. Tra i nostri piani a lungo termine, c'è anche l'idea di integrare i "),e("span",{class:"font-semibold"}," punti di immersione subacquea nei laghi e in mare, per i nostri amici subacquei."),e("br"),t(" Essendo anche noi stessi subacquei, sappiamo che al momento informazioni relative ad itinerari di questo tipo sono veramente difficili da reperire."),e("br"),t(" Proprio per questo motivo siamo coscienti dell'incredibile utilità che l'integrazione di questo tipo di attività porterebbe ai nostri utenti sportivi. ")],-1)),Co=L({__name:"user_view",setup(c){const p=ae(),s=ie(oe);return(d,l)=>{const i=vi,n=D,v=D,g=de,b=ue;return u(p)?(f(),h("div",yi,[e("div",zi,[e("div",$i,[Li,a($,{name:"fade",mode:"out-in",appear:""},{default:o(()=>[e("div",wi,[a(i,{class:"rounded-card h-full w-full overflow-clip"},{default:o(()=>[e("div",ki,[e("img",{height:u(s).smallerOrEqual("sm")?"320px":u(s).smallerOrEqual("md")?"384px":"1120px",src:hi},null,8,Ci)])]),_:1})])]),_:1}),e("div",Ii,[a(n,{class:"size-4",name:"material-symbols:photo-camera-rounded"}),Si])]),e("div",Wi,[a($,{name:"join",appear:"",mode:"out-in"},{default:o(()=>[e("a",qi,[e("div",Mi,[a(n,{class:"size-[4rem] transition-all duration-200 ease-out group-hover:scale-[120%]",name:"ic:baseline-apple"})])])]),_:1}),a($,{name:"join",appear:"",mode:"out-in"},{default:o(()=>[e("a",Ti,[e("div",ji,[a(n,{class:"size-[3rem] transition-all duration-200 ease-out group-hover:scale-[120%]",name:"logos:google-play-icon"})])])]),_:1})])]),e("div",Ai,[Ei,e("div",Di,[e("div",Pi,[a(v,{class:"icon group-hover:scale-[120%]",name:"material-symbols-light:map"}),Bi,Oi]),e("div",Yi,[a(v,{class:"icon group-hover:scale-[120%]",name:"ph:magnifying-glass-bold"}),Xi,Ri]),e("div",Ni,[a(v,{class:"icon group-hover:scale-[120%]",name:"material-symbols:bar-chart-4-bars-rounded"}),Vi,Hi]),e("div",Ui,[a(v,{class:"icon group-hover:scale-[120%]",name:"streamline:discount-percent-coupon-solid"}),Gi,Fi]),e("div",Qi,[a(v,{class:"icon group-hover:scale-[120%]",name:"zondicons:radar"}),Ki,Ji])])]),a(g,{title:"Solo ciò che conta",subtitle:"Goditi la natura, sapendo di avere in tasca un fedele compagno"},{content:o(()=>[Zi]),body:o(()=>[t(" Wildspace ti fornisce l'essenziale per permetterti di godere al meglio la natura. "),eo,t(" Le mappe disponibili sono estremamente semplici da usare."),to,t(" All'interno puoi trovare tutti i punti d'interesse come rifugi, bivacchi, punti panoramici e perfino panchine e fonti d'acqua!"),io,t(" Le mappe sono scaricabili offline, così potrai utilizzarle in qualunque situazione."),oo,ao,t(" Wildspace non pretende di digitalizzare tutto il mondo delle attività all'aperto, ma di integrarlo. ")]),default:o(()=>[t(" >")]),_:1}),a(g,{inverted:"",title:"Raggiungi i tuoi obiettivi",subtitle:"Tieni traccia dei tuoi itinerari e salva le mappe"},{content:o(()=>[no]),body:o(()=>[t(" Attesta il completamento delle attività e sali di livello! "),so,t(" Con Wildspace salvi i tuoi itinerari preferiti cosi da poter accedere alle informazioni ed alla mappa in qualunque situazione, anche in assenza di rete."),lo,t(" Tieni traccia di tutte le attività che hai completato e trovane di nuove grazie ai sistemi di ricerca avanzati."),ro,t("Porsi degli obiettivi è il primo passo per completarli!"),co]),default:o(()=>[t(" >")]),_:1}),a(g,{title:"Fatti consigliare da Wildspace",subtitle:"Scopri offerte personalizzate e riscatta sconti e benefici"},{content:o(()=>[uo]),body:o(()=>[t(" Wildspace ti consiglia come concludere i tuoi itinerari al meglio. "),po,t(" Grazie alla tecnologia di Wildspace, sei sempre a conoscenza delle migliori offerte nei dintorni."),mo,_o,t(" Hai appena completato un itinerario faticoso?"),fo,t(" Che sia il posto perfetto dove passare la notte, un ristorante tipico dove sfamarti o semplicemente il posto più panoramico dove fare aperitivo, Wildspace ti suggerisce le opzioni migliori! ")]),default:o(()=>[t(" >")]),_:1}),e("div",vo,[ho,e("ul",go,[a(b,null,{title:o(()=>[bo]),content:o(()=>[xo]),_:1}),a(b,null,{title:o(()=>[yo]),content:o(()=>[zo]),_:1}),a(b,null,{title:o(()=>[$o]),content:o(()=>[Lo]),_:1}),a(b,null,{title:o(()=>[wo]),content:o(()=>[ko]),_:1})])])])):w("",!0)}}}),Io=I(Co,[["__scopeId","data-v-8d1bf599"]]),So={key:0,class:"flex w-full flex-col items-center justify-start px-6 sm:px-8"},Wo={class:"flex w-full max-w-[var(--content-width)] flex-col"},qo={class:"flex flex-col items-center text-center"},Mo={key:0,style:{"--y-tr":"8px"}},To={key:1,style:{"--y-tr":"-8px"}},jo=e("h1",{class:"text-4xl text-accent"},"Un'unica piattaforma.",-1),Ao={key:0,class:"max-w-[48rem]",style:{"--y-tr":"-4px"}},Eo={key:1,class:"max-w-[48rem]",style:{"--y-tr":"4px"}},Do={class:"flex w-full pt-10"},Po=L({__name:"content",setup(c){const p=ae(),s=$e();function d(l){s.$state.businessMode=l}return(l,i)=>{const n=Te,v=mi,g=Io;return u(p)?(f(),h("div",So,[e("div",Wo,[e("div",qo,[a($,{name:"join",class:"flex min-h-[14rem] items-end sm:min-h-[12rem] md:min-h-[8rem]",mode:"out-in",appear:""},{default:o(()=>[u(s).$state.businessMode?(f(),h("h1",Mo," Raggiungi più appassionati, aumenta le conversioni. ")):(f(),h("h1",To," Dal trekking turistico al climbing tecnico. "))]),_:1}),jo,a($,{class:"min-h-[2rem]",name:"join",mode:"out-in",appear:""},{default:o(()=>[u(s).$state.businessMode?(f(),h("p",Ao," La piattaforma dedicata alle escursioni outdoor che mette in contatto gli appassionati con gli imprenditori del settore ")):(f(),h("p",Eo," Scopri gli itinerari più adatti a te, attesta il completamento delle attività ed ottieni sconti semplicemente facendo ciò che ami. "))]),_:1}),a(n,{class:"self-center pt-8","business-mode":u(s).$state.businessMode,onToggle:d},null,8,["business-mode"])]),e("div",Do,[u(s).$state.businessMode?(f(),U(v,{key:0})):(f(),U(g,{key:1}))])])])):w("",!0)}}}),Yo=L({__name:"index",setup(c){const p=y(!1);Le();function s(d){p.value=d}return(d,l)=>{const i=Po;return f(),U(i,{onModeChanged:s})}}});export{Yo as default};
