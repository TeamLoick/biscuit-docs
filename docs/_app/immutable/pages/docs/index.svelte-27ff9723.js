import{S as Dl,i as Pl,s as Sl,l,u as d,a as f,m as a,p as s,v as h,h as t,c as u,q as r,b as W,J as e,n as gl,K as xl,w as Al}from"../../chunks/index-67f76a52.js";import{p as Ll}from"../../chunks/docs-a936db8f.js";import{b as Fe}from"../../chunks/paths-1c47712a.js";function kl(E,i,c){const p=E.slice();p[2]=i[c];const m=Ll(p[2].location);return p[3]=m,p}function yl(E,i,c){const p=E.slice();p[6]=i[c];const m=Ll(p[6].location);return p[3]=m,p}function wl(E){let i,c,p=E[6].name+"",m,b,y;return{c(){i=l("li"),c=l("a"),m=d(p),y=f(),this.h()},l(_){i=a(_,"LI",{class:!0});var v=s(i);c=a(v,"A",{class:!0,href:!0});var I=s(c);m=h(I,p),I.forEach(t),y=u(v),v.forEach(t),this.h()},h(){r(c,"class","block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"),r(c,"href",b=`${Fe}/docs/${E[3]}/function/${E[6].name}`),r(i,"class","relative")},m(_,v){W(_,i,v),e(i,c),e(c,m),e(i,y)},p(_,v){v&1&&p!==(p=_[6].name+"")&&Al(m,p),v&1&&b!==(b=`${Fe}/docs/${_[3]}/function/${_[6].name}`)&&r(c,"href",b)},d(_){_&&t(i)}}}function Il(E){let i,c,p=E[2].name+"",m,b,y;return{c(){i=l("li"),c=l("a"),m=d(p),y=f(),this.h()},l(_){i=a(_,"LI",{class:!0});var v=s(i);c=a(v,"A",{class:!0,href:!0});var I=s(c);m=h(I,p),I.forEach(t),y=u(v),v.forEach(t),this.h()},h(){r(c,"class","block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"),r(c,"href",b=`${Fe}/docs/${E[3]}/class/${E[2].name}`),r(i,"class","relative")},m(_,v){W(_,i,v),e(i,c),e(c,m),e(i,y)},p(_,v){v&2&&p!==(p=_[2].name+"")&&Al(m,p),v&2&&b!==(b=`${Fe}/docs/${_[3]}/class/${_[2].name}`)&&r(c,"href",b)},d(_){_&&t(i)}}}function Ul(E){let i,c,p,m,b,y,_,v,I,Ge,ge,Ke,J,A,xe,H,S,Q,Oe,z,We,Je,X,Qe,ze,Z,ee,te,Xe,Ze,ke,M,U,le,et,ae,tt,lt,se,at,st,Y,rt,ye,j,V,re,ot,oe,nt,it,ne,ct,dt,F,Te,G,K,q,ie,ft,ht,ce,ut,pt,C,we,vt,bt,N,R,_t,$,mt,Et,gt,He,xt,L,Ie,kt,yt,Ae,wt,It,Le,At,Lt,T,de,Dt,Pt,Me,St,k,fe,B,Ut,Vt,Ct,De,Nt,Tt,Pe,Ht,Mt,Se,jt,qt,Ue,Rt,he=E[0],g=[];for(let o=0;o<he.length;o+=1)g[o]=wl(yl(E,he,o));let ue=E[1],x=[];for(let o=0;o<ue.length;o+=1)x[o]=Il(kl(E,ue,o));return{c(){i=l("head"),c=l("title"),p=d("Documentation - Biscuit"),m=f(),b=l("div"),y=l("div"),_=f(),v=l("div"),I=l("div"),Ge=f(),ge=l("div"),Ke=f(),J=l("nav"),A=l("ul"),xe=l("li"),H=l("details"),S=l("summary"),Q=l("span"),Oe=d("-"),z=l("span"),We=d("+"),Je=f(),X=l("h2"),Qe=d("General"),ze=f(),Z=l("ul"),ee=l("li"),te=l("span"),Xe=d("Introduction"),Ze=f(),ke=l("li"),M=l("details"),U=l("summary"),le=l("span"),et=d("-"),ae=l("span"),tt=d("+"),lt=f(),se=l("h2"),at=d("Functions"),st=f(),Y=l("ul");for(let o=0;o<g.length;o+=1)g[o].c();rt=f(),ye=l("li"),j=l("details"),V=l("summary"),re=l("span"),ot=d("-"),oe=l("span"),nt=d("+"),it=f(),ne=l("h2"),ct=d("Classes"),dt=f(),F=l("ul");for(let o=0;o<x.length;o+=1)x[o].c();Te=f(),G=l("div"),K=l("article"),q=l("header"),ie=l("p"),ft=d("biscuit"),ht=f(),ce=l("h1"),ut=d("Introduction"),pt=f(),C=l("div"),we=l("p"),vt=d(`The biscuit Discord library is built ontop of Discordeno and
				webspec APIs, we aim to provide portability.`),bt=f(),N=l("div"),R=l("h2"),_t=d("Installation (for "),$=l("a"),mt=d("node 18.+"),Et=d(")"),gt=f(),He=l("p"),xt=f(),L=l("blockquote"),Ie=l("p"),kt=d("npm install @oasisjs/biscuit"),yt=f(),Ae=l("p"),wt=d("pnpm add @oasisjs/biscuit"),It=f(),Le=l("p"),At=d("yarn add @oasisjs/biscuit"),Lt=f(),T=l("div"),de=l("h2"),Dt=d("Why biscuit?"),Pt=f(),Me=l("p"),St=f(),k=l("ul"),fe=l("li"),B=l("a"),Ut=d("Minimal"),Vt=d(", non feature-rich!"),Ct=f(),De=l("li"),Nt=d("Crossplatform"),Tt=f(),Pe=l("li"),Ht=d("Consistent"),Mt=f(),Se=l("li"),jt=d("Performant"),qt=f(),Ue=l("li"),Rt=d("Small bundles"),this.h()},l(o){i=a(o,"HEAD",{});var w=s(i);c=a(w,"TITLE",{});var n=s(c);p=h(n,"Documentation - Biscuit"),n.forEach(t),w.forEach(t),m=u(o),b=a(o,"DIV",{class:!0});var D=s(b);y=a(D,"DIV",{class:!0}),s(y).forEach(t),_=u(D),v=a(D,"DIV",{class:!0});var pe=s(v);I=a(pe,"DIV",{class:!0}),s(I).forEach(t),Ge=u(pe),ge=a(pe,"DIV",{class:!0}),s(ge).forEach(t),Ke=u(pe),J=a(pe,"NAV",{class:!0});var Bt=s(J);A=a(Bt,"UL",{class:!0});var ve=s(A);xe=a(ve,"LI",{});var Yt=s(xe);H=a(Yt,"DETAILS",{});var je=s(H);S=a(je,"SUMMARY",{class:!0});var Ve=s(S);Q=a(Ve,"SPAN",{class:!0});var Ft=s(Q);Oe=h(Ft,"-"),Ft.forEach(t),z=a(Ve,"SPAN",{class:!0});var Gt=s(z);We=h(Gt,"+"),Gt.forEach(t),Je=u(Ve),X=a(Ve,"H2",{class:!0});var Kt=s(X);Qe=h(Kt,"General"),Kt.forEach(t),Ve.forEach(t),ze=u(je),Z=a(je,"UL",{class:!0});var Ot=s(Z);ee=a(Ot,"LI",{class:!0});var Wt=s(ee);te=a(Wt,"SPAN",{class:!0});var Jt=s(te);Xe=h(Jt,"Introduction"),Jt.forEach(t),Wt.forEach(t),Ot.forEach(t),je.forEach(t),Yt.forEach(t),Ze=u(ve),ke=a(ve,"LI",{});var Qt=s(ke);M=a(Qt,"DETAILS",{});var qe=s(M);U=a(qe,"SUMMARY",{class:!0});var Ce=s(U);le=a(Ce,"SPAN",{class:!0});var zt=s(le);et=h(zt,"-"),zt.forEach(t),ae=a(Ce,"SPAN",{class:!0});var Xt=s(ae);tt=h(Xt,"+"),Xt.forEach(t),lt=u(Ce),se=a(Ce,"H2",{class:!0});var Zt=s(se);at=h(Zt,"Functions"),Zt.forEach(t),Ce.forEach(t),st=u(qe),Y=a(qe,"UL",{class:!0});var el=s(Y);for(let O=0;O<g.length;O+=1)g[O].l(el);el.forEach(t),qe.forEach(t),Qt.forEach(t),rt=u(ve),ye=a(ve,"LI",{});var tl=s(ye);j=a(tl,"DETAILS",{});var Re=s(j);V=a(Re,"SUMMARY",{class:!0});var Ne=s(V);re=a(Ne,"SPAN",{class:!0});var ll=s(re);ot=h(ll,"-"),ll.forEach(t),oe=a(Ne,"SPAN",{class:!0});var al=s(oe);nt=h(al,"+"),al.forEach(t),it=u(Ne),ne=a(Ne,"H2",{class:!0});var sl=s(ne);ct=h(sl,"Classes"),sl.forEach(t),Ne.forEach(t),dt=u(Re),F=a(Re,"UL",{class:!0});var rl=s(F);for(let O=0;O<x.length;O+=1)x[O].l(rl);rl.forEach(t),Re.forEach(t),tl.forEach(t),ve.forEach(t),Bt.forEach(t),pe.forEach(t),D.forEach(t),Te=u(o),G=a(o,"DIV",{class:!0});var ol=s(G);K=a(ol,"ARTICLE",{});var $e=s(K);q=a($e,"HEADER",{class:!0});var Be=s(q);ie=a(Be,"P",{class:!0});var nl=s(ie);ft=h(nl,"biscuit"),nl.forEach(t),ht=u(Be),ce=a(Be,"H1",{class:!0});var il=s(ce);ut=h(il,"Introduction"),il.forEach(t),Be.forEach(t),pt=u($e),C=a($e,"DIV",{});var be=s(C);we=a(be,"P",{});var cl=s(we);vt=h(cl,`The biscuit Discord library is built ontop of Discordeno and
				webspec APIs, we aim to provide portability.`),cl.forEach(t),bt=u(be),N=a(be,"DIV",{});var _e=s(N);R=a(_e,"H2",{class:!0});var Ye=s(R);_t=h(Ye,"Installation (for "),$=a(Ye,"A",{href:!0,target:!0,class:!0});var dl=s($);mt=h(dl,"node 18.+"),dl.forEach(t),Et=h(Ye,")"),Ye.forEach(t),gt=u(_e),He=a(_e,"P",{}),s(He).forEach(t),xt=u(_e),L=a(_e,"BLOCKQUOTE",{class:!0});var me=s(L);Ie=a(me,"P",{});var fl=s(Ie);kt=h(fl,"npm install @oasisjs/biscuit"),fl.forEach(t),yt=u(me),Ae=a(me,"P",{});var hl=s(Ae);wt=h(hl,"pnpm add @oasisjs/biscuit"),hl.forEach(t),It=u(me),Le=a(me,"P",{});var ul=s(Le);At=h(ul,"yarn add @oasisjs/biscuit"),ul.forEach(t),me.forEach(t),_e.forEach(t),Lt=u(be),T=a(be,"DIV",{});var Ee=s(T);de=a(Ee,"H2",{class:!0});var pl=s(de);Dt=h(pl,"Why biscuit?"),pl.forEach(t),Pt=u(Ee),Me=a(Ee,"P",{}),s(Me).forEach(t),St=u(Ee),k=a(Ee,"UL",{class:!0});var P=s(k);fe=a(P,"LI",{});var $t=s(fe);B=a($t,"A",{href:!0,target:!0,class:!0});var vl=s(B);Ut=h(vl,"Minimal"),vl.forEach(t),Vt=h($t,", non feature-rich!"),$t.forEach(t),Ct=u(P),De=a(P,"LI",{});var bl=s(De);Nt=h(bl,"Crossplatform"),bl.forEach(t),Tt=u(P),Pe=a(P,"LI",{});var _l=s(Pe);Ht=h(_l,"Consistent"),_l.forEach(t),Mt=u(P),Se=a(P,"LI",{});var ml=s(Se);jt=h(ml,"Performant"),ml.forEach(t),qt=u(P),Ue=a(P,"LI",{});var El=s(Ue);Rt=h(El,"Small bundles"),El.forEach(t),P.forEach(t),Ee.forEach(t),be.forEach(t),$e.forEach(t),ol.forEach(t),this.h()},h(){r(y,"class","absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"),r(I,"class","absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"),r(ge,"class","absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"),r(Q,"class","open-icon"),r(z,"class","closed-icon"),r(X,"class","font-display font-medium text-slate-900 dark:text-white"),r(S,"class","list-none w-full cursor-pointer"),r(te,"class","block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-nova-500 before:bg-nova-500"),r(ee,"class","relative"),r(Z,"class","mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"),H.open=!0,r(le,"class","open-icon"),r(ae,"class","closed-icon"),r(se,"class","font-display font-medium text-slate-900 dark:text-white"),r(U,"class","list-none w-full cursor-pointer"),r(Y,"class","mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"),M.open=!0,r(re,"class","open-icon"),r(oe,"class","closed-icon"),r(ne,"class","font-display font-medium text-slate-900 dark:text-white"),r(V,"class","list-none w-full cursor-pointer"),r(F,"class","mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"),j.open=!0,r(A,"class","space-y-9"),r(J,"class","text-base lg:text-sm w-70 pr-8 xl:w-72 xl:pr-16"),r(v,"class","sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5"),r(b,"class","hidden lg:relative lg:block lg:flex-none"),r(ie,"class","font-display text-sm font-medium text-nova-600"),r(ce,"class","font-display text-3xl tracking-tight text-slate-900 dark:text-white"),r(q,"class","mb-9 space-y-1"),r($,"href","https://nodejs.org/en/download/"),r($,"target","_blank"),r($,"class","font-bold text-nova-500"),r(R,"class","font-display text-2xl mt-5 tracking-tight text-slate-900 dark:text-white"),r(L,"class","relative p-4 text-lg mt-2 italic border-l-4 bg-neutral-100 text-nova-600 border-nova-500 quote"),r(de,"class","font-display text-2xl mt-5 tracking-tight text-slate-900 dark:text-white"),r(B,"href","https://en.wikipedia.org/wiki/Unix_philosophy"),r(B,"target","_blank"),r(B,"class","text-nova-500"),r(k,"class","list-disc"),r(G,"class","min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16")},m(o,w){W(o,i,w),e(i,c),e(c,p),W(o,m,w),W(o,b,w),e(b,y),e(b,_),e(b,v),e(v,I),e(v,Ge),e(v,ge),e(v,Ke),e(v,J),e(J,A),e(A,xe),e(xe,H),e(H,S),e(S,Q),e(Q,Oe),e(S,z),e(z,We),e(S,Je),e(S,X),e(X,Qe),e(H,ze),e(H,Z),e(Z,ee),e(ee,te),e(te,Xe),e(A,Ze),e(A,ke),e(ke,M),e(M,U),e(U,le),e(le,et),e(U,ae),e(ae,tt),e(U,lt),e(U,se),e(se,at),e(M,st),e(M,Y);for(let n=0;n<g.length;n+=1)g[n].m(Y,null);e(A,rt),e(A,ye),e(ye,j),e(j,V),e(V,re),e(re,ot),e(V,oe),e(oe,nt),e(V,it),e(V,ne),e(ne,ct),e(j,dt),e(j,F);for(let n=0;n<x.length;n+=1)x[n].m(F,null);W(o,Te,w),W(o,G,w),e(G,K),e(K,q),e(q,ie),e(ie,ft),e(q,ht),e(q,ce),e(ce,ut),e(K,pt),e(K,C),e(C,we),e(we,vt),e(C,bt),e(C,N),e(N,R),e(R,_t),e(R,$),e($,mt),e(R,Et),e(N,gt),e(N,He),e(N,xt),e(N,L),e(L,Ie),e(Ie,kt),e(L,yt),e(L,Ae),e(Ae,wt),e(L,It),e(L,Le),e(Le,At),e(C,Lt),e(C,T),e(T,de),e(de,Dt),e(T,Pt),e(T,Me),e(T,St),e(T,k),e(k,fe),e(fe,B),e(B,Ut),e(fe,Vt),e(k,Ct),e(k,De),e(De,Nt),e(k,Tt),e(k,Pe),e(Pe,Ht),e(k,Mt),e(k,Se),e(Se,jt),e(k,qt),e(k,Ue),e(Ue,Rt)},p(o,[w]){if(w&1){he=o[0];let n;for(n=0;n<he.length;n+=1){const D=yl(o,he,n);g[n]?g[n].p(D,w):(g[n]=wl(D),g[n].c(),g[n].m(Y,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=he.length}if(w&2){ue=o[1];let n;for(n=0;n<ue.length;n+=1){const D=kl(o,ue,n);x[n]?x[n].p(D,w):(x[n]=Il(D),x[n].c(),x[n].m(F,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=ue.length}},i:gl,o:gl,d(o){o&&t(i),o&&t(m),o&&t(b),xl(g,o),xl(x,o),o&&t(Te),o&&t(G)}}}function Vl(E,i,c){let{functions:p=[]}=i,{classes:m=[]}=i;return E.$$set=b=>{"functions"in b&&c(0,p=b.functions),"classes"in b&&c(1,m=b.classes)},[p,m]}class Hl extends Dl{constructor(i){super(),Pl(this,i,Vl,Ul,Sl,{functions:0,classes:1})}}export{Hl as default};