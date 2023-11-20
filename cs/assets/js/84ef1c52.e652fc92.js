"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[945],{4137:function(e,o,r){r.d(o,{Zo:function(){return u},kt:function(){return v}});var n=r(7294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function l(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),p=function(e){var o=n.useContext(i),r=o;return e&&(r="function"==typeof e?e(o):d(d({},o),e)),r},u=function(e){var o=p(e.components);return n.createElement(i.Provider,{value:o},e.children)},s={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},c=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),v=t,y=c["".concat(i,".").concat(v)]||c[v]||s[v]||a;return r?n.createElement(y,d(d({ref:o},u),{},{components:r})):n.createElement(y,d({ref:o},u))}));function v(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=r.length,d=new Array(a);d[0]=c;var l={};for(var i in o)hasOwnProperty.call(o,i)&&(l[i]=o[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,d[1]=l;for(var p=2;p<a;p++)d[p]=r[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8460:function(e,o,r){r.r(o),r.d(o,{assets:function(){return u},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(3117),t=r(102),a=(r(7294),r(4137)),d=["components"],l={title:"P\u0159ehled",sidebar_position:1},i=void 0,p={unversionedId:"public-dns/overview",id:"public-dns/overview",title:"P\u0159ehled",description:"Co je AdGuard DNS?",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/public-dns/overview.md",sourceDirName:"public-dns",slug:"/public-dns/overview",permalink:"/KnowledgeBaseDNS/cs/public-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"P\u0159ehled",sidebar_position:1},sidebar:"sidebar",previous:{title:"Zn\xe1m\xed poskytovatel\xe9 DNS",permalink:"/KnowledgeBaseDNS/cs/general/dns-providers"},next:{title:"Jak vypr\xe1zdnit mezipam\u011b\u0165 DNS",permalink:"/KnowledgeBaseDNS/cs/public-dns/solving-problems/how-to-flush-dns-cache"}},u={},s=[{value:"Co je AdGuard DNS?",id:"co-je-adguard-dns",level:2},{value:"Ve\u0159ejn\xe9 servery DNS AdGuard",id:"ve\u0159ejn\xe9-servery-dns-adguard",level:2},{value:"Protokoly AdGuard DNS",id:"protokoly-adguard-dns",level:2},{value:"DNSCrypt",id:"dnscrypt",level:3},{value:"DNS-over-HTTPS (DoH) a DNS-over-TLS (DoT)",id:"dns-over-https-doh-a-dns-over-tls-dot",level:3},{value:"DNS-over-QUIC (DoQ)",id:"dns-over-quic-doq",level:3}],c={toc:s};function v(e){var o=e.components,r=(0,t.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"co-je-adguard-dns"},"Co je AdGuard DNS?"),(0,a.kt)("p",null,"AdGuard DNS je bezplatn\xfd DNS \u0159e\u0161itel zam\u011b\u0159en\xfd na ochranu soukrom\xed, kter\xfd poskytuje bezpe\u010dn\xe9 p\u0159ipojen\xed a tak\xe9 dok\xe1\u017ee blokovat sl\xeddi\u010de, reklamy, kr\xe1de\u017e identity a obsah pro dosp\u011bl\xe9 (voliteln\u011b). AdGuard DNS nevy\u017eaduje instalaci \u017e\xe1dn\xe9 aplikace. Snadno se pou\u017e\xedv\xe1 a lze jej snadno nastavit na jak\xe9mkoli za\u0159\xedzen\xed (chytr\xe9 telefony, stoln\xed po\u010d\xedta\u010de, routery, hern\xed konzole atd.)."),(0,a.kt)("h2",{id:"ve\u0159ejn\xe9-servery-dns-adguard"},"Ve\u0159ejn\xe9 servery DNS AdGuard"),(0,a.kt)("p",null,'AdGuard DNS m\xe1 t\u0159i r\u016fzn\xe9 typy ve\u0159ejn\xfdch server\u016f. "V\xfdchoz\xed" server slou\u017e\xed k blokov\xe1n\xed reklam, sl\xeddi\u010d\u016f, malwaru a kr\xe1de\u017ee identity. "Ochrana rodiny" d\u011bl\xe1 tot\xe9\u017e, ale tak\xe9 blokuje weby s obsahem pro dosp\u011bl\xe9 a vynucuje mo\u017enost "Bezpe\u010dn\xe9 vyhled\xe1v\xe1n\xed" v prohl\xed\u017ee\u010d\xedch, kter\xe9 ji poskytuj\xed. "Bez filtrov\xe1n\xed" poskytuje bezpe\u010dn\xe9 a spolehliv\xe9 p\u0159ipojen\xed, ale nic neblokuje. Podrobn\xe9 pokyny k nastaven\xed AdGuard DNS na libovoln\xe9m za\u0159\xedzen\xed najdete na ',(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/public-dns.html"},"na\u0161ich str\xe1nk\xe1ch"),". Ka\u017ed\xfd server podporuje jin\xe9 zabezpe\u010den\xe9 protokoly: DNSCrypt, DNS-over-HTTPS (DoH), DNS skrze TLS (DoT) a DNS-over-QUIC (DoQ)."),(0,a.kt)("h2",{id:"protokoly-adguard-dns"},"Protokoly AdGuard DNS"),(0,a.kt)("p",null,"Krom\u011b b\u011b\u017en\xe9ho DNS (IPv4 i IPv6) podporuje AdGuard DNS r\u016fzn\xe9 \u0161ifrovan\xe9 protokoly, tak\u017ee si m\u016f\u017eete vybrat ten, kter\xfd v\xe1m nejl\xe9pe vyhovuje."),(0,a.kt)("h3",{id:"dnscrypt"},"DNSCrypt"),(0,a.kt)("p",null,"AdGuard DNS umo\u017e\u0148uje pou\u017e\xedvat specifick\xfd \u0161ifrovan\xfd protokol \u2014 DNSCrypt. D\xedky tomu jsou v\u0161echny DNS po\u017eadavky \u0161ifrov\xe1ny, co\u017e v\xe1s chr\xe1n\xed p\u0159ed mo\u017en\xfdm zachycen\xedm po\u017eadavk\u016f a n\xe1sledn\xfdm odposlechem a/nebo zm\u011bnou. Ve srovn\xe1n\xed s protokoly DoH, DoT a DoQ je v\u0161ak DNSCrypt pova\u017eov\xe1n za zastaral\xfd a pokud je to mo\u017en\xe9, doporu\u010dujeme pou\u017e\xedvat tyto protokoly."),(0,a.kt)("h3",{id:"dns-over-https-doh-a-dns-over-tls-dot"},"DNS-over-HTTPS (DoH) a DNS-over-TLS (DoT)"),(0,a.kt)("p",null,"DoH a DoT jsou modern\xed bezpe\u010dn\xe9 protokoly DNS, kter\xe9 z\xedsk\xe1vaj\xed st\xe1le v\u011bt\u0161\xed popularitu a v dohledn\xe9 budoucnosti se stanou pr\u016fmyslov\xfdmi standardy. Oba jsou spolehliv\u011bj\u0161\xed ne\u017e DNSCrypt a oba jsou podporov\xe1ny AdGuard DNS."),(0,a.kt)("h3",{id:"dns-over-quic-doq"},"DNS-over-QUIC (DoQ)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/blog/dns-over-quic.html"},"DNS-over-QUIC je nov\xfd \u0161ifrovac\xed protokol DNS")," a AdGuard DNS je prvn\xed ve\u0159ejn\xfd \u0159e\u0161itel, kter\xfd jej podporuje. Na rozd\xedl od DoH a DoT pou\u017e\xedv\xe1 jako transportn\xed protokol QUIC a kone\u010dn\u011b vrac\xed DNS k jeho ko\u0159en\u016fm \u2014 pracuje p\u0159es UDP. P\u0159in\xe1\u0161\xed v\u0161echny dobr\xe9 vlastnosti, kter\xe9 nab\xedz\xed QUIC \u2014 v\xfdchoz\xed \u0161ifrov\xe1n\xed, zkr\xe1cen\xed doby p\u0159ipojen\xed, lep\u0161\xed v\xfdkon p\u0159i ztr\xe1t\u011b datov\xfdch paket\u016f. Krom\u011b toho m\xe1 b\xfdt QUIC protokolem na transportn\xed \xfarovni a nehroz\xed zde \u017e\xe1dn\xe9 riziko \xfaniku metadat, k n\u011bmu\u017e by mohlo doj\xedt v p\u0159\xedpad\u011b DoH."))}v.isMDXComponent=!0}}]);