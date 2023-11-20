"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[825],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(o,".").concat(m)]||u[m]||k[m]||l;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6170:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return k}});var n=r(3117),a=r(102),l=(r(7294),r(4137)),i=["components"],d={title:"Oversigt",sidebar_position:1},o=void 0,s={unversionedId:"private-dns/overview",id:"private-dns/overview",title:"Oversigt",description:"Med AdGuard DNS kan der ops\xe6ttes egne private DNS-servere til at opl\xf8se DNS-foresp\xf8rgsler og blokere annoncer, trackere og ondsindede dom\xe6ner, f\xf8r de n\xe5r enheden",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/private-dns/overview.md",sourceDirName:"private-dns",slug:"/private-dns/overview",permalink:"/KnowledgeBaseDNS/da/private-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Oversigt",sidebar_position:1},sidebar:"sidebar",previous:{title:"S\xe5dan t\xf8mmes DNS-cache",permalink:"/KnowledgeBaseDNS/da/public-dns/solving-problems/how-to-flush-dns-cache"},next:{title:"Oversigt",permalink:"/KnowledgeBaseDNS/da/private-dns/api/overview"}},p={},k=[{value:"Hvad er Private AdGuard DNS?",id:"hvad-er-private-adguard-dns",level:2},{value:"Hvorfor man beh\xf8ver Private AdGuard DNS",id:"hvorfor-man-beh\xf8ver-private-adguard-dns",level:2},{value:"Forskellene mellem Private og Public AdGuard DNS",id:"forskellene-mellem-private-og-public-adguard-dns",level:2},{value:"S\xe5dan ops\xe6ttes Private AdGuard DNS",id:"s\xe5dan-ops\xe6ttes-private-adguard-dns",level:2},{value:"Linket IP",id:"linket-ip",level:2},{value:"Private AdGuard DNS-funktioner",id:"private-adguard-dns-funktioner",level:2},{value:"H\xe5ndtering af sortlister",id:"h\xe5ndtering-af-sortlister",level:3},{value:"Brugerregler",id:"brugerregler",level:3},{value:"Statistikker",id:"statistikker",level:3},{value:"Trafikdestination",id:"trafikdestination",level:3},{value:"Virksomheder",id:"virksomheder",level:3},{value:"Foresp\xf8rgselslog",id:"foresp\xf8rgselslog",level:3},{value:"For\xe6ldrekontrol",id:"for\xe6ldrekontrol",level:3}],u={toc:k};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Med AdGuard DNS kan der ops\xe6ttes egne private DNS-servere til at opl\xf8se DNS-foresp\xf8rgsler og blokere annoncer, trackere og ondsindede dom\xe6ner, f\xf8r de n\xe5r enheden"),(0,l.kt)("p",{parentName:"div"},"Hurtigt link: ",(0,l.kt)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"Pr\xf8v AdGuard DNS")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png",alt:"Private AdGuard DNS-hovedkontrolpanel"})),(0,l.kt)("h2",{id:"hvad-er-private-adguard-dns"},"Hvad er Private AdGuard DNS?"),(0,l.kt)("iframe",{width:"560",height:"315",class:"youtube-video",src:"https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M",title:"YouTube-videoafspiller",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,l.kt)("p",null,"Ud over fordelene ved en offentlig DNS-server (s\xe5som trafikkryptering og dom\xe6neblokeringslister) tilbyder Private AdGuard DNS funktioner s\xe5som fleksibel tilpasning, DNS-statistik og for\xe6ldrekontrol samt er nem at h\xe5ndtere via et praktisk kontrolpanel."),(0,l.kt)("h2",{id:"hvorfor-man-beh\xf8ver-private-adguard-dns"},"Hvorfor man beh\xf8ver Private AdGuard DNS"),(0,l.kt)("p",null,"I dag kan alt tilsluttes internet: TV, k\xf8leskabe, k\xf8leskabe, smarte p\xe6rer eller h\xf8jttalere. Men sammen med de ubestridelige bekvemmeligheder kommer trackere og annoncer. En simpel browserbaseret adblocker yder ikke beskyttelse i dette tilf\xe6lde, hvorimod AdGuard DNS \u2014 som kan ops\xe6ttes til at filtrere trafik, blokere indhold og trackere \u2014 fungerer p\xe5 systemniveau."),(0,l.kt)("p",null,"Vi har allerede ",(0,l.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/da/public-dns/overview"},"Public AdGuard DNS")," og ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdGuard Home"),". Disse l\xf8sninger fungerer fint for visse brugere, mens andre savner ops\xe6tningsfleksibilitet i den offentlige AdGuard DNS og enkelhed i AdGuard Home. Det er h\xe9r, at Private AdGuard DNS kommer ind i billedet. Den har det bedste fra begge verdener: Den tilbyder tilpasningsmuligheder, styring og information \u2014 alt sammen via et enkelt, brugervenligt kontrolpanel."),(0,l.kt)("h2",{id:"forskellene-mellem-private-og-public-adguard-dns"},"Forskellene mellem Private og Public AdGuard DNS"),(0,l.kt)("p",null,"Her er en simpel sammenligning af funktioner tilg\xe6ngelige i Public AdGuard DNS- og Private AdGuard DNS-servere."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offentlig AdGuard DNS"),(0,l.kt)("th",{parentName:"tr",align:null},"Privat AdGuard DNS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DNS-trafikkryptering"),(0,l.kt)("td",{parentName:"tr",align:null},"DNS-trafikkryptering")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forudbestemte dom\xe6nesortlister"),(0,l.kt)("td",{parentName:"tr",align:null},"Tilpasselige dom\xe6nesortlister")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Tilpasselige DNS-filtreringsregler med import-/eksportfunktion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Anmod om statistik (se m\xe5l for DNS-forep\xf8rgsler: Hvilke lande, virksomheder mv.)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Detaljeret foresp\xf8rgselslog")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"For\xe6ldrekontrol")))),(0,l.kt)("h2",{id:"s\xe5dan-ops\xe6ttes-private-adguard-dns"},"S\xe5dan ops\xe6ttes Private AdGuard DNS"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"G\xe5 til ",(0,l.kt)("a",{parentName:"li",href:"https://agrd.io/download-dns"},"AdGuard DNS-betjeningspanelet")," (hvis ikke indlogget, log ind via din AdGuard-konto)"),(0,l.kt)("li",{parentName:"ol"},'Klik p\xe5 "Tilslut enhed", og f\xf8lg sk\xe6rmvejledningen')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Underst\xf8ttede platforme:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Android"),(0,l.kt)("li",{parentName:"ul"},"iOS"),(0,l.kt)("li",{parentName:"ul"},"Windows"),(0,l.kt)("li",{parentName:"ul"},"Mac"),(0,l.kt)("li",{parentName:"ul"},"Linux"),(0,l.kt)("li",{parentName:"ul"},"Routere"),(0,l.kt)("li",{parentName:"ul"},"Spillekonsoller"),(0,l.kt)("li",{parentName:"ul"},"Smart TV'er")))),(0,l.kt)("p",null,"Hver enhed, der tilf\xf8jes i AdGuard DNS-panelet, har sin egen unikke adresse, der kan bruges, hvis enheden underst\xf8tter moderne, krypterede DNS-protokoller (DoH, DoT og DoQ)."),(0,l.kt)("h2",{id:"linket-ip"},"Linket IP"),(0,l.kt)("p",null,'Underst\xf8tter enheden ikke krypteret DNS, og alm. DNS derfor m\xe5 bruges, findes en anden m\xe5de, med hvilken AdGuard DNS kan genkende enheden \u2014 link dens IP-adresse. I s\xe5 tilf\xe6lde t\xe6ller AdGuard DNS alle alm. DNS-foresp\xf8rgsler fra den p\xe5g\xe6ldende IP-adresse til den p\xe5g\xe6ldende "enhed".'),(0,l.kt)("p",null,"Eneste krav for at linke en IP, er, at ",(0,l.kt)("strong",{parentName:"p"},"det skal v\xe6re en privat/hjemme IP-adresse"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"En hjemme IP-adresse er en IP-adresse tildelt en enhed, der er tilsluttet en privat internetudbyder. Den er typisk knyttet til en fysisk placering og tildeles individuelle boliger/lejligheder. Hjemme IP-adresser bruges af alm. internetbrugere til deres daglige onlineaktiviteter, s\xe5som at surfe p\xe5 nettet, f\xe5 adgang til sociale medieplatforme, sende e-mails eller streame indhold."))),(0,l.kt)("p",null,"Fors\xf8ges en hjemme IP-adresse linket uden at AdGuard DNS vil tillader dette, bedes vores supportteam kontaktet via ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,l.kt)("h2",{id:"private-adguard-dns-funktioner"},"Private AdGuard DNS-funktioner"),(0,l.kt)("h3",{id:"h\xe5ndtering-af-sortlister"},"H\xe5ndtering af sortlister"),(0,l.kt)("p",null,'Der kan med funktionen "Sortlister" ops\xe6ttes dom\xe6ner, som skal blokeres, og dom\xe6ner, som ikke skal. V\xe6lg mellem et bredt udvalg af sortlister til forskellige form\xe5l.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png",alt:"Private AdGuard DNS-kontrolpanel, sortlister"})),(0,l.kt)("h3",{id:"brugerregler"},"Brugerregler"),(0,l.kt)("p",null,"Til situationer, hvor pr\xe6installerede ",(0,l.kt)("em",{parentName:"p"},"Sortlister"),' med tusindvis af regler ikke er nok, findes en funktion kaldet "Brugerregler". Her kan der manuelt tilf\xf8jes tilpassede regler for at blokere/afblokere et bestemt dom\xe6ne eller importere tilpassede regellister (tjek ',(0,l.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/da/general/dns-filtering-syntax"},"syntaks for DNS-filtreringsregler")," ud). Listerne kan eksporteres."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png",alt:"Private AdGuard DNS-kontrolpanel, brugerregler"})),(0,l.kt)("h3",{id:"statistikker"},"Statistikker"),(0,l.kt)("p",null,"P\xe5 fanen ",(0,l.kt)("em",{parentName:"p"},"Statistik")," fremg\xe5r alle de opsummerede statistikker om DNS-foresp\xf8rgsler foretaget af enheder tilsluttet Private AdGuard DNS. Den viser det samlede antal samt geografi for foresp\xf8rgsler, antallet af blokerede foresp\xf8rgsler, en liste over virksomhederne, som var m\xe5lene for foresp\xf8rgslerne, foresp\xf8rgselstyper og hyppigst forespurgte dom\xe6ner."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png",alt:"Private AdGuard DNS-kontrolpanel, statistikker"})),(0,l.kt)("h3",{id:"trafikdestination"},"Trafikdestination"),(0,l.kt)("p",null,"Denne funktion viser m\xe5lene for enhedernes DNS-foresp\xf8rgsler. Ud over at se et kort over foresp\xf8rgselsm\xe5l/-destinationer, kan oplysningerne filtreres efter dato, enhed og land."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png",alt:"Private AdGuard DNS-kontrolpanel, trafik"})),(0,l.kt)("h3",{id:"virksomheder"},"Virksomheder"),(0,l.kt)("p",null,"Denne fane muligg\xf8r hurtigt at tjekke, hvilke virksomheder, som sender flest foresp\xf8rgsler, og hvilke, som har flest blokerede foresp\xf8rgsler."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png",alt:"Private AdGuard DNS-kontrolpanel, virksomheder"})),(0,l.kt)("h3",{id:"foresp\xf8rgselslog"},"Foresp\xf8rgselslog"),(0,l.kt)("p",null,"Dette er en detaljeret log, hvori man kan tjekke oplysningerne om hver enkelt foresp\xf8rgsel samt sortere foresp\xf8rgsler efter status, type, virksomhed, enhed, tid, land."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png",alt:"Private AdGuard DNS-kontrolpanel, foresp\xf8rgselslog"})),(0,l.kt)("h3",{id:"for\xe6ldrekontrol"},"For\xe6ldrekontrol"),(0,l.kt)("p",null,"For at beskytte sit barn mod onlineindhold, man finder upassende, ops\xe6t og aktiv\xe9r funktionen ",(0,l.kt)("em",{parentName:"p"},"For\xe6ldrekontrol"),'. Ud over muligheder s\xe5som blokering af "voksenindhold" og sikker s\xf8gning, har vi tilf\xf8jet muligheden for manuelt at angive dom\xe6ner til blokering samt ops\xe6tte en tidsplan for, hvorn\xe5r ',(0,l.kt)("em",{parentName:"p"},"For\xe6ldrekontrol")," skal v\xe6re aktiv."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png",alt:"Private AdGuard DNS-kontrolpanel, For\xe6lderkontrol"})),(0,l.kt)("p",null,"Har man endnu ikke Private AdGuard DNS, kan den f\xe5s via det officielle websted ",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io/"}),"."))}m.isMDXComponent=!0}}]);