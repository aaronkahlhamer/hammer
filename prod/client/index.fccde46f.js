import{a as r,b as t,c as a,d as s,e,f as h,g as n,h as o,i as l,j as c,k as u,l as f,m as i,z as m}from"./chunk.7f0e2e98.js";import{a as d,b as p}from"./chunk.d66520ed.js";function v(r,t,a){const s=Object.create(r);return s.author=t[a],s}function g(r){var t,a,m,d,p=r.author.name;return{c(){t=s("li"),a=s("a"),m=e(p),d=h(),this.h()},l(r){t=n(r,"LI",{},!1);var s=o(t);a=n(s,"A",{rel:!0,href:!0},!1);var e=o(a);m=l(e,p),e.forEach(c),d=l(s,"\n\t\t"),s.forEach(c),this.h()},h(){a.rel="prefetch",a.href="authors/"+r.author.id},m(r,s){u(r,t,s),f(t,a),f(a,m),f(t,d)},p:i,d(r){r&&c(t)}}}function j(r){for(var t,a,d,p,j,k=b,A=[],E=0;E<k.length;E+=1)A[E]=g(v(r,k,E));return{c(){t=h(),a=s("h1"),d=e("Authors"),p=h(),j=s("ul");for(var r=0;r<A.length;r+=1)A[r].c();this.h()},l(r){t=l(r,"\n\n"),a=n(r,"H1",{},!1);var s=o(a);d=l(s,"Authors"),s.forEach(c),p=l(r,"\n\n"),j=n(r,"UL",{class:!0},!1);for(var e=o(j),h=0;h<A.length;h+=1)A[h].l(e);e.forEach(c),this.h()},h(){document.title="Authors",j.className="svelte-64kjjb"},m(r,s){u(r,t,s),u(r,a,s),f(a,d),u(r,p,s),u(r,j,s);for(var e=0;e<A.length;e+=1)A[e].m(j,null)},p(r,t){if(r.authors){k=b;for(var a=0;a<k.length;a+=1){const s=v(t,k,a);A[a]?A[a].p(r,s):(A[a]=g(s),A[a].c(),A[a].m(j,null))}for(;a<A.length;a+=1)A[a].d(1);A.length=k.length}},i:i,o:i,d(r){r&&(c(t),c(a),c(p),c(j)),m(A,r)}}}let b;async function k({params:r,query:t}){b=await d(this,"",p.users)}export default class extends r{constructor(r){super(),t(this,r,null,j,a,[])}}export{b as authors,k as preload};
//# sourceMappingURL=index.fccde46f.js.map