"use strict";(self.webpackChunkmovie_verse_16=self.webpackChunkmovie_verse_16||[]).push([[915],{1915:(k,m,o)=>{o.r(m),o.d(m,{MoviesModule:()=>$});var c=o(6814),s=o(2466),f=o(8014),x=o(95),C=o(8641),e=o(9468);let Z=(()=>{var t;class l{}return(t=l).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,s.IJ,f.ND,x.UX,C.ud]}),l})();var r=o(776);let P=(()=>{var t;class l{}return(t=l).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-nav"]],decls:2,vars:0,template:function(i,a){1&i&&(e.TgZ(0,"p"),e._uU(1,"nav works!"),e.qZA())}}),l})(),b=(()=>{var t;class l{}return(t=l).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-layout"]],decls:2,vars:0,template:function(i,a){1&i&&e._UZ(0,"app-nav")(1,"router-outlet")},dependencies:[P,r.lC]}),l})();var p=o(9862);const u_apiKey="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmQxN2E1MjdkNmMzMThlM2VhZmNiOWMxYTE4MTNhYyIsInN1YiI6IjVjZmE4MzAyOTI1MTQxNjczN2MxZWM1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fjGIjIuVoHVrG1by8RjJ2g2rAzIxXOCEzkKV9AHPqg";let d=(()=>{var t;class l{constructor(i){this.http=i,this.apiUrl="https://api.themoviedb.org/3"}obtenerPeliculas(){const i={headers:new p.WM({Authorization:`Bearer ${u_apiKey}`})};return this.http.get(`${this.apiUrl}/trending/movie/day?language=en-US`,i)}obtenerDetalle(i){const a={headers:new p.WM({Authorization:`Bearer ${u_apiKey}`})};return this.http.get(`${this.apiUrl}/movie/${i}?language=en-US`,a)}obtenerImagenes(i){const a={headers:new p.WM({Authorization:`Bearer ${u_apiKey}`})};return this.http.get(`${this.apiUrl}/movie/${i}/images`,a)}obtenerSimilares(i){const a={headers:new p.WM({Authorization:`Bearer ${u_apiKey}`})};return this.http.get(`${this.apiUrl}/movie/${i}/similar?language=en-US&page=1`,a)}}return(t=l).\u0275fac=function(i){return new(i||t)(e.LFG(p.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),l})();function y(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"div")(1,"h2"),e._uU(2),e.qZA(),e.TgZ(3,"h4"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"button",1),e.NdJ("click",function(){const g=e.CHM(n).$implicit,z=e.oxw();return e.KtG(z.verDetalle(g.id))}),e._uU(10,"Ver detalle"),e.qZA(),e._UZ(11,"hr"),e.qZA()}if(2&t){const n=l.$implicit;e.xp6(2),e.Oqu(n.title),e.xp6(2),e.Oqu(n.overview),e.xp6(2),e.hij("Porcentaje de aprobaci\xf3n: ",n.vote_average,""),e.xp6(2),e.hij("Id pel\xedcula: ",n.id,"")}}let T=(()=>{var t;class l{constructor(i,a){this.peliculasService=i,this.router=a,this.peliculas=[]}ngOnInit(){this.peliculasService.obtenerPeliculas().subscribe({next:i=>{this.peliculas=i.results}})}verDetalle(i){this.router.navigate([`/pelicula/${i}`]).then()}}return(t=l).\u0275fac=function(i){return new(i||t)(e.Y36(d),e.Y36(r.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-peliculas"]],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"click"]],template:function(i,a){1&i&&(e.TgZ(0,"p"),e._uU(1,"peliculas works!"),e.qZA(),e.YNc(2,y,12,4,"div",0)),2&i&&(e.xp6(2),e.Q6J("ngForOf",a.peliculas))},dependencies:[c.sg]}),l})();var h=o(9397),_=o(6306),v=o(2096);function M(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"div",1),e._UZ(1,"img",2),e.TgZ(2,"div",3)(3,"h5",4),e._uU(4),e.qZA(),e.TgZ(5,"p",5),e._uU(6),e.qZA(),e.TgZ(7,"a",6),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.abrirPelicula())}),e._uU(8,"Ver detalles"),e.qZA()()()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("src","https://image.tmdb.org/t/p/original/"+n.pelicula.poster_path,e.LSH)("alt","description"),e.xp6(3),e.Oqu(n.pelicula.original_title),e.xp6(2),e.Oqu(n.pelicula.overview)}}let O=(()=>{var t;class l{set changePelicula(i){this.pelicula=i}constructor(i){this.router=i,this.pelicula=null}abrirPelicula(){this.router.navigate([`/pelicula/${this.pelicula?.id}`]).then(()=>{window.location.reload()})}}return(t=l).\u0275fac=function(i){return new(i||t)(e.Y36(r.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-card-pelicula"]],inputs:{changePelicula:["pelicula","changePelicula"]},decls:1,vars:1,consts:[["class","card",4,"ngIf"],[1,"card"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"click"]],template:function(i,a){1&i&&e.YNc(0,M,9,4,"div",0),2&i&&e.Q6J("ngIf",a.pelicula)},dependencies:[c.O5],styles:['@charset "UTF-8";.card[_ngcontent-%COMP%]{width:18rem;margin-bottom:20px;box-shadow:0 4px 6px #0000001a}.card-img-top[_ngcontent-%COMP%]{height:300px;object-fit:cover}.card-title[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:.5rem}.card-text[_ngcontent-%COMP%]{font-size:1rem;color:#6c757d;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}']}),l})();function U(t,l){1&t&&e._UZ(0,"app-card-pelicula",5),2&t&&e.Q6J("pelicula",l.$implicit)}function A(t,l){if(1&t&&(e.TgZ(0,"div",3),e.YNc(1,U,1,1,"app-card-pelicula",4),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",n)}}function S(t,l){1&t&&(e.ynx(0),e.YNc(1,A,2,1,"ng-template",2),e.BQk())}let w=(()=>{var t;class l{set changePeliculas(i){this.peliculas=i}constructor(){this.peliculas=[],this.peliculasGrupos=[]}ngOnInit(){if(console.log(this.peliculas.length),this.peliculas.length>0){console.log(this.peliculas.length);for(let i=0;i<this.peliculas.length;i+=4)this.peliculasGrupos.push(this.peliculas.slice(i,i+4))}}}return(t=l).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-peliculas-similares"]],inputs:{changePeliculas:["peliculas","changePeliculas"]},decls:2,vars:3,consts:[[3,"interval","showNavigationArrows"],[4,"ngFor","ngForOf"],["ngbSlide",""],[1,"peliculas-container"],[3,"pelicula",4,"ngFor","ngForOf"],[3,"pelicula"]],template:function(i,a){1&i&&(e.TgZ(0,"ngb-carousel",0),e.YNc(1,S,2,0,"ng-container",1),e.qZA()),2&i&&(e.Q6J("interval",0)("showNavigationArrows",!1),e.xp6(1),e.Q6J("ngForOf",a.peliculasGrupos))},dependencies:[c.sg,s.uo,s.xl,O],styles:['@charset "UTF-8";.peliculas-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:20px;background:linear-gradient(to bottom right,#2a0c3a,#000000);padding:50px}']}),l})();function F(t,l){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.Oqu(n.name)}}function N(t,l){if(1&t&&(e.TgZ(0,"li"),e._UZ(1,"img",12),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.s9C("src","https://image.tmdb.org/t/p/original/"+n.logo_path,e.LSH),e.s9C("alt",n.name)}}function q(t,l){if(1&t&&(e.TgZ(0,"div")(1,"div",4),e._UZ(2,"img",5),e.TgZ(3,"div",6)(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"p",7),e._uU(7),e.qZA(),e.TgZ(8,"p",8),e._uU(9),e.qZA(),e.TgZ(10,"div",9)(11,"strong"),e._uU(12,"Genres: "),e.qZA(),e.YNc(13,F,2,1,"span",3),e.qZA(),e.TgZ(14,"p")(15,"strong"),e._uU(16,"Release Date: "),e.qZA(),e._uU(17),e.qZA(),e.TgZ(18,"p")(19,"strong"),e._uU(20,"Runtime: "),e.qZA(),e._uU(21),e.qZA(),e.TgZ(22,"p")(23,"strong"),e._uU(24,"Rating: "),e.qZA(),e._uU(25),e.qZA(),e.TgZ(26,"p")(27,"strong"),e._uU(28,"Production Companies: "),e.qZA()(),e.TgZ(29,"ul",10),e.YNc(30,N,2,2,"li",3),e.qZA(),e.TgZ(31,"p")(32,"strong"),e._uU(33,"Homepage: "),e.qZA(),e.TgZ(34,"a",11),e._uU(35),e.qZA()()()()()),2&t){const n=e.oxw();e.xp6(2),e.s9C("src","https://image.tmdb.org/t/p/original/"+n.pelicula.poster_path,e.LSH),e.s9C("alt",n.pelicula.title),e.xp6(3),e.Oqu(n.pelicula.title),e.xp6(2),e.Oqu(n.pelicula.tagline),e.xp6(2),e.Oqu(n.pelicula.overview),e.xp6(4),e.Q6J("ngForOf",n.pelicula.genres),e.xp6(4),e.hij(" ",n.pelicula.release_date,""),e.xp6(4),e.hij(" ",n.pelicula.runtime," minutes"),e.xp6(4),e.hij(" ",n.pelicula.vote_average,""),e.xp6(5),e.Q6J("ngForOf",n.pelicula.production_companies),e.xp6(4),e.Q6J("href",n.pelicula.homepage,e.LSH),e.xp6(1),e.hij("",n.pelicula.title," Website")}}function J(t,l){if(1&t&&(e.TgZ(0,"div")(1,"h4"),e._uU(2,"Peliculas similares"),e.qZA(),e._UZ(3,"app-peliculas-similares",13),e.qZA()),2&t){const n=e.oxw();e.xp6(3),e.Q6J("peliculas",n.peliculasSimilares)}}function I(t,l){if(1&t&&(e._UZ(0,"div",15),e.TgZ(1,"div",16),e._UZ(2,"img",17),e.qZA()),2&t){const n=e.oxw(),i=n.$implicit,a=n.index;e.xp6(2),e.Q6J("src","https://image.tmdb.org/t/p/original/"+i.file_path,e.LSH)("alt","Slide "+(a+1)+" description")}}function j(t,l){1&t&&e.YNc(0,I,3,2,"ng-template",14)}const Q=[{path:"",component:b,children:[{path:"peliculas",component:T},{path:"",redirectTo:"peliculas",pathMatch:"full"},{path:"pelicula/:id",component:(()=>{var t;class l{constructor(i,a,g){this.route=i,this.router=a,this.peliculasService=g,this.pelicula=null,this.peliculasSimilares=[],this.backdrops=[]}ngOnInit(){this.route.params.subscribe({next:i=>{const a=i.id;a&&!isNaN(a)?(this.obtenerDetalle(a),this.obtenerImagenes(a),this.obtenerPeliculasSimilares(a)):this.router.navigate(["/peliculas"])},error:i=>{console.log(i)}})}obtenerDetalle(i){this.peliculasService.obtenerDetalle(i).pipe((0,h.b)(a=>this.pelicula=a),(0,_.K)(a=>(console.error("Error al obtener detalle de la pel\xedcula:",a),(0,v.of)(null)))).subscribe()}obtenerImagenes(i){this.peliculasService.obtenerImagenes(i).pipe((0,h.b)(a=>this.backdrops=a.backdrops),(0,_.K)(a=>(console.error("Error al obtener im\xe1genes de la pel\xedcula:",a),(0,v.of)({posters:[]})))).subscribe()}obtenerPeliculasSimilares(i){this.peliculasService.obtenerSimilares(i).subscribe({next:a=>{this.peliculasSimilares=a.results},error:a=>console.error(a)})}}return(t=l).\u0275fac=function(i){return new(i||t)(e.Y36(r.gz),e.Y36(r.F0),e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pelicula"]],decls:8,vars:4,consts:[[4,"ngIf"],[1,"my-carousel",3,"interval"],["carouselImg",""],[4,"ngFor","ngForOf"],[1,"pelicula-details"],[1,"poster-image",3,"src","alt"],[1,"pelicula-info"],[1,"tagline"],[1,"overview"],[1,"genres"],[1,"production-companies"],["target","_blank",3,"href"],[1,"company-logo",3,"src","alt"],[3,"peliculas"],["ngbSlide",""],[1,"carousel-caption"],[1,"picsum-img-wrapper"],[3,"src","alt"]],template:function(i,a){1&i&&(e.YNc(0,q,36,12,"div",0),e.YNc(1,J,4,1,"div",0),e.TgZ(2,"div")(3,"h4"),e._uU(4,"Imagenes"),e.qZA(),e.TgZ(5,"ngb-carousel",1,2),e.YNc(7,j,1,0,null,3),e.qZA()()),2&i&&(e.Q6J("ngIf",a.pelicula),e.xp6(1),e.Q6J("ngIf",a.peliculasSimilares.length>0),e.xp6(4),e.Q6J("interval",1e4),e.xp6(2),e.Q6J("ngForOf",a.backdrops))},dependencies:[c.sg,c.O5,w,s.uo,s.xl],styles:[".pelicula-details[_ngcontent-%COMP%]{display:flex;gap:20px}.poster-image[_ngcontent-%COMP%]{max-width:300px;height:auto}.movie-info[_ngcontent-%COMP%]{flex:1}.tagline[_ngcontent-%COMP%]{font-style:italic;margin-top:5px;color:#666}.genres[_ngcontent-%COMP%]{margin-top:10px}.genres[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.production-companies[_ngcontent-%COMP%]{list-style:none;padding:0;display:flex;gap:20px;margin-top:10px}.company-logo[_ngcontent-%COMP%]{max-width:60px;height:auto}a[_ngcontent-%COMP%]{color:#007bff;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.my-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]{background-color:#000;width:100%;height:500px;overflow:hidden;display:flex;justify-content:center}.my-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70%;height:auto;object-fit:cover}"]}),l})()}]}];let Y=(()=>{var t;class l{}return(t=l).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild(Q),r.Bz]}),l})(),$=(()=>{var t;class l{}return(t=l).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,Z,Y,s.mH]}),l})()}}]);