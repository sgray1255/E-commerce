(this["webpackJsonpe-commerce-app"]=this["webpackJsonpe-commerce-app"]||[]).push([[0],{35:function(e,t,c){e.exports={background:"Products_background__1niy-",ProductsList:"Products_ProductsList__1gb6L",ProductsHeader:"Products_ProductsHeader__1RJjO",h1:"Products_h1__1LnvQ",h2:"Products_h2__2d9Ji"}},38:function(e,t,c){e.exports={NavBar:"NavBar_NavBar__Cqnef",link:"NavBar_link__3U1xr",Brand:"NavBar_Brand__2eKYr"}},43:function(e,t,c){e.exports={Product:"Product_Product__2BWh0",Product__img:"Product_Product__img__2ePDi",Product__name:"Product_Product__name__2aGrq",Product__type:"Product_Product__type__3X4Y0",Product__des:"Product_Product__des__2ZwYf"}},52:function(e,t,c){e.exports={Quantity:"Quantity_Quantity__2L8om",button:"Quantity_button__2OB7a"}},53:function(e,t,c){e.exports={Models:"Models_Models__39lb6",Models__img:"Models_Models__img__1gzup",Models__header:"Models_Models__header__B8lSZ"}},54:function(e,t,c){e.exports={Favorite:"Favorite_Favorite__3DWsr",Favorite__btn:"Favorite_Favorite__btn__6cms-",Favorited:"Favorite_Favorited__3nJ0U"}},57:function(e,t,c){e.exports={ProductCard:"ProductCard_ProductCard__AONIr",img:"ProductCard_img__1F5lw",qty:"ProductCard_qty__Ps6XX",favorites:"ProductCard_favorites__2vv_u"}},61:function(e,t,c){e.exports={SearchBar:"SearchBar_SearchBar__pF83I",button:"SearchBar_button__9hR9D"}},62:function(e,t,c){e.exports={CarouselList:"CarouselList_CarouselList__1FjUQ"}},67:function(e,t,c){e.exports={Header:"Header_Header__HQIlZ","material-icons":"Header_material-icons__33qwd"}},69:function(e,t,c){e.exports={background:"Home_background__3FT1O",Home:"Home_Home__2by4c",Models:"Home_Models__3hB6m"}},78:function(e,t,c){},79:function(e,t,c){},87:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(32),s=c.n(a),o=(c(78),c(79),c(1)),i=c.n(o),u=c(5),l=c(14),d=c(57),j=c.n(d),b=(c(56),c(37)),p=c(9),h=c(59);c(94);h.a.initializeApp({apiKey:"AIzaSyBjCK6XUoe6Vc7ZAyL34TC2WYMnpiOksB4",authDomain:"e-commerce-project-a0fa5.firebaseapp.com",projectId:"e-commerce-project-a0fa5",storageBucket:"e-commerce-project-a0fa5.appspot.com",messagingSenderId:"501588215241",appId:"1:501588215241:web:9307e965d913bf760e5418"});var f,C,O=h.a.firestore(),m=function(e){return Object(p.a)({productID:e.id},e.data())},_=function(e){return e.docs.map(m)},x=function(){var e=Object(u.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.collection("products"),e.next=3,t.get();case 3:return c=e.sent,e.abrupt("return",_(c));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(i.a.mark((function e(t){var c,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=O.collection("products"),r=c.doc(t),e.next=4,r.get();case 4:return n=e.sent,e.abrupt("return",m(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=c(52),y=c.n(g),P=c(3),w=function(e){var t=e.onChange,c=Object(r.useState)(1),n=Object(l.a)(c,2),a=n[0],s=n[1];Object(r.useEffect)((function(){t(a)}),[a]);return console.log(a),Object(P.jsxs)("div",{className:y.a.Quantity,children:[Object(P.jsx)("button",{onClick:function(e){0!==a&&s(a-1)},className:y.a.button,children:"-"}),Object(P.jsx)("span",{children:a}),Object(P.jsx)("button",{onClick:function(e){s(a+1)},className:y.a.button,children:"+"})]})},N=c(30),k=function(e){var t=e.product;return Object(P.jsx)("div",{className:j.a.ProductCard,children:Object(P.jsxs)(b.a,{style:{width:"18rem",height:"26rem",padding:"5px"},children:[Object(P.jsx)(b.a.Img,{variant:"top",src:t.img}),Object(P.jsxs)(b.a.Body,{children:[Object(P.jsx)(b.a.Title,{style:{font:"arial"},children:t.productName}),Object(P.jsxs)(b.a.Text,{children:["Price: $",t.price]}),Object(P.jsx)(N.b,{to:"/products/".concat(t.productID),children:"See Product"})]})]})})},B=Object(r.createContext)(),F=function(e){var t=e.children,c=Object(r.useState)(""),n=Object(l.a)(c,2),a=n[0],s=n[1];console.log(a);var o={search:a,setSearch:s};return Object(P.jsx)(B.Provider,{value:o,children:t})},S=function(e){var t=e.products,c=Object(r.useContext)(B).search;if(null===t||void 0===t)return Object(P.jsx)(P.Fragment,{});var n=t.filter((function(e){return e.productName.includes(c)}));return Object(P.jsx)(P.Fragment,{children:n.map((function(e,t){return Object(P.jsx)(k,{product:e},t)}))})},I=c(35),L=c.n(I),M=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(c),Object(P.jsxs)("div",{className:L.a.background,children:[Object(P.jsxs)("div",{className:L.a.ProductsHeader,children:[Object(P.jsx)("h1",{className:L.a.h1,children:"To Boldly Go..."}),Object(P.jsx)("h2",{className:L.a.h2,children:"straight to your cart."})]}),Object(P.jsx)("div",{className:L.a.ProductsList,children:Object(P.jsx)(S,{products:c})})]})},E=c(38),D=c.n(E),T=["title","titleId"];function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r])}return e},H.apply(this,arguments)}function Z(e,t){if(null==e)return{};var c,r,n=function(e,t){if(null==e)return{};var c,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function Q(e,t){var c=e.title,n=e.titleId,a=Z(e,T);return r.createElement("svg",H({width:1208,height:1466,viewBox:"0 0 1208 1466",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),c?r.createElement("title",{id:n},c):null,f||(f=r.createElement("path",{d:"M283.573 718.3C282.673 716.8 290.173 690.6 300.173 660C352.673 500.2 400.173 386.7 484.373 220.3C533.773 122.6 604.973 4 614.273 4C621.073 4 658.473 56.4 707.973 135.6C744.373 193.8 810.373 329.1 836.973 400.2C840.973 411 845.473 422.6 846.973 425.9C865.073 467.6 899.272 567.9 924.672 653.8C933.672 684.3 941.073 711.9 941.073 715C941.073 720.3 938.473 720.8 906.273 720.8C887.173 720.8 871.473 720.2 871.473 719.5C871.473 718.8 863.373 691.2 853.473 658.3C812.473 521.4 766.072 399 712.672 286.6C693.472 246.2 643.073 154.7 624.073 125.6L613.573 109.6L606.872 119.6C595.372 136.7 552.973 214.9 524.473 271.7C463.173 393.8 415.373 509.7 369.273 648.2L345.573 719.3L315.373 720.2C298.773 720.6 284.473 719.8 283.573 718.3ZM677.872 783.7C672.672 776.5 659.473 756 648.473 738.1C637.473 720.2 626.872 704.2 624.872 702.5C622.172 700.3 615.773 708.2 600.573 732.8C576.573 771.5 565.072 785.1 557.672 783.7C552.872 782.8 552.372 777.4 552.372 725.5V668.3L532.672 657.9C484.172 632.3 469.173 622.8 469.173 617.6C469.173 612.3 476.573 608.8 523.573 592.1C534.373 588.3 549.573 582.4 557.273 579.1L571.273 573.1L574.773 543.3C576.673 526.9 579.572 502 581.172 487.8C584.672 457.7 591.173 406.1 597.473 359.3C600.573 335.9 603.672 312.5 606.672 289.1C613.072 239.4 616.972 229.8 627.672 237.7C630.872 240 633.872 248.8 635.672 261C640.272 292 647.473 346.9 652.073 386.5C669.073 531.8 674.572 570.5 678.672 574.4C680.672 576.3 697.973 583.6 717.073 590.7C760.473 606.8 774.573 613.8 774.573 619.2C774.573 623.3 753.173 637.4 709.573 662.1C685.173 675.9 686.872 668.3 692.872 735.8C698.472 798.8 695.472 808.1 677.872 783.7ZM1051.67 1137.4C1049.37 1129.1 1043.87 1096.3 1041.97 1080.2L1039.97 1063L1055.67 1039.3C1076.57 1007.7 1104.97 949.6 1116.27 915C1121.37 899.6 1128.97 869.7 1133.27 848.5C1140.27 814.3 1141.07 802.8 1141.17 746.4C1141.17 689.6 1140.37 678.8 1133.27 644.5C1128.97 623.4 1122.67 597.3 1119.27 586.5C1083.37 470.4 1002.27 362.9 898.273 293.9C878.273 280.6 817.473 249.7 795.473 241.5C785.573 237.9 780.172 233.6 776.672 226.8C773.972 221.5 765.573 205.7 758.073 191.7C750.573 177.7 745.372 165.2 746.672 164C752.372 158.6 841.472 190.6 883.372 213.1C1037.97 296 1144.47 433.2 1188.87 606.8C1208.07 681.9 1209.37 800.4 1191.67 872.1C1186.97 891.2 1168.07 954.1 1164.87 961.3C1163.37 964.6 1156.47 980.3 1149.57 996.1C1132.87 1034.2 1109.17 1074 1081.27 1111C1059.17 1140.4 1053.87 1145.2 1051.67 1137.4ZM146.073 1133.4C122.973 1108.2 90.5725 1060 70.7725 1021.4C27.5725 937.2 8.47254 865.5 4.67254 774.3C0.17254 665.3 18.0725 577.4 63.8725 483.4C95.6725 418 131.073 369.8 186.873 315.4C244.773 259.1 301.573 221.1 369.473 193.3C380.273 188.9 391.873 184 395.173 182.5C416.573 172.8 492.673 153.5 496.073 156.9C497.073 157.9 490.373 173.2 481.273 191L464.673 223.3L432.873 234.1C275.573 287.8 143.373 420.6 91.6725 577.1C75.1725 627.2 63.9725 695.3 63.9725 746.4C63.9725 800.2 78.1725 881 95.8725 928.1C108.173 960.9 138.373 1018.3 159.673 1049.6C181.173 1081.2 182.673 1087.1 176.073 1114C174.673 1119.8 172.573 1131 171.473 1139C170.373 1146.9 168.373 1153.4 166.973 1153.4C165.473 1153.3 156.073 1144.3 146.073 1133.4ZM516.073 1340.8C474.873 1334.4 449.573 1328.3 414.173 1316.4C381.073 1305.2 342.173 1287.6 342.173 1283.8C342.173 1281.6 359.073 1261.3 378.473 1239.9C379.773 1238.5 392.873 1242.1 407.573 1248C438.773 1260.4 477.573 1271.5 515.973 1279C554.673 1286.5 653.372 1286.6 691.372 1279C776.872 1262.1 834.573 1238.7 903.073 1193.2C923.073 1179.9 940.472 1169.7 941.672 1170.4C944.472 1172.1 968.073 1218.4 968.073 1222.4C968.073 1227.5 909.673 1264.1 869.773 1284C829.773 1304 774.772 1324.2 736.672 1332.9C673.372 1347.5 580.373 1350.8 516.073 1340.8ZM165.573 1457C160.073 1442.8 166.973 1286 175.673 1225.9C177.273 1215.1 179.273 1198.8 180.273 1189.6C182.173 1172.1 189.173 1123.9 194.073 1095.8C204.673 1034.3 215.673 976.2 221.373 952.1C222.973 945.4 226.973 927.8 230.473 912.8C244.773 850.2 273.273 742.3 277.173 736.1C279.173 732.8 336.773 731.4 339.973 734.5C340.873 735.4 339.173 744 336.173 753.6C327.173 782.6 302.773 877 293.573 918.8C288.773 940.4 282.773 967.6 280.173 979.3C267.673 1035.2 251.373 1134.8 243.973 1200.1C241.573 1221.7 238.773 1242.8 237.973 1247C236.073 1256.1 237.773 1254.3 301.573 1181.9C419.673 1047.8 521.073 952.4 604.273 896.8C637.973 874.3 666.273 860 699.273 848.9C721.673 841.3 729.373 840.2 759.773 840.2C792.473 840.2 795.772 840.8 814.672 849.7C843.872 863.5 885.773 907.2 928.273 968.4C931.273 972.7 932.273 964.4 929.773 956C928.073 950.5 924.673 936.4 922.073 924.8C912.073 880.1 904.273 847.3 891.273 795.4C883.873 765.8 877.773 739.6 877.773 737.1C877.773 733.3 883.373 732.7 913.073 733.4L948.372 734.3L957.973 772.1C973.173 832.2 988.573 897.6 997.073 938.4C1001.37 959.2 1006.97 985.7 1009.47 997.4C1027.27 1080.5 1037.17 1138.5 1051.57 1245.4C1062.27 1324.8 1065.27 1380.7 1059.07 1384.6C1051.27 1389.4 1050.07 1387 1009.17 1281.7C958.972 1152.3 882.173 1017.4 824.273 956.5C793.873 924.5 781.572 918.4 754.172 921.5C708.672 926.6 642.472 963.8 569.172 1025.5C540.072 1050 413.973 1175.5 384.273 1209.6C322.373 1280.7 282.473 1328.5 234.873 1388.9C175.273 1464.3 170.273 1469.2 165.573 1457Z",fill:"url(#paint0_linear_2:3)",stroke:"#020202",strokeOpacity:.14,strokeWidth:6.8})),C||(C=r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_2:3",x1:604.076,y1:4,x2:604.076,y2:1462.11,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{offset:.109953,stopColor:"#FFD12C",stopOpacity:0}),r.createElement("stop",{offset:.582501,stopColor:"#E6C656"})))))}var G=r.forwardRef(Q),q=(c.p,c(87),function(){return Object(P.jsxs)("div",{className:D.a.NavBar,children:[Object(P.jsx)("div",{className:D.a.Brand,children:Object(P.jsx)(G,{fill:"current",width:"100",height:"50"})}),Object(P.jsx)(N.b,{className:(D.a.link,D.a.Brand),to:"/",children:"TenForward"}),Object(P.jsx)(N.b,{className:D.a.link,to:"/products",children:"Products"}),Object(P.jsx)(N.b,{className:D.a.link,to:"/makefirstcontact",children:"FirstContact"})]})}),A=c(61),U=c.n(A),J=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(r.useContext)(B).setSearch;return Object(P.jsxs)("div",{className:U.a.SearchBar,children:[Object(P.jsx)("input",{value:c,onChange:function(e){n(e.target.value)},type:"text"}),Object(P.jsx)("button",{className:U.a.button,onClick:function(e){a(c),n("")},type:"submit",children:Object(P.jsx)("i",{className:"fa fa-search"})})]})},W=c(67),z=c.n(W),X=c(68),Y=c.n(X),K=function(){return Object(P.jsxs)("div",{className:z.a.Header,children:[Object(P.jsx)(q,{}),Object(P.jsx)(J,{}),Object(P.jsx)(Y.a,{style:{fill:"white",fontSize:"large"}})]})},R=c(19),V=c(69),$=c.n(V),ee=c(36),te=c(62),ce=c.n(te),re=function(e){e.products;return Object(P.jsx)("div",{className:ce.a.CarouselList,children:Object(P.jsxs)(ee.a,{className:ce.a.Carousel,children:[Object(P.jsxs)(ee.a.Item,{interval:2e3,children:[Object(P.jsx)("img",{style:{height:"300px"},className:"d-block w-100",src:"https://www.herocollector.com/uploads/media/Build-Ent-D-below.jpg",alt:"Image One"}),Object(P.jsxs)(ee.a.Caption,{children:[Object(P.jsx)("h3",{children:"Models"}),Object(P.jsx)("p",{children:"Build the Enterprise 1701-D, The Defiant, and more!"})]})]}),Object(P.jsxs)(ee.a.Item,{interval:2e3,children:[Object(P.jsx)("img",{style:{height:"300px"},className:"d-block w-100",src:"https://blog.trekcore.com/wp-content/uploads/2018/07/defiant5.jpg",alt:"Image Two"}),Object(P.jsxs)(ee.a.Caption,{children:[Object(P.jsx)("h3",{children:"Memorabilia"}),Object(P.jsx)("p",{children:"Get the props used in your favourite Star Trek episodes!"})]})]}),Object(P.jsxs)(ee.a.Item,{interval:2e3,children:[Object(P.jsx)("img",{style:{height:"300px"},className:"d-block w-100",src:"https://canary.contestimg.wish.com/api/webimage/5a07dfc57298d91974dead4b-large.jpg?cache_buster=b812add267fc9932e08f36a4ae6a4f67",alt:"Image Three"}),Object(P.jsxs)(ee.a.Caption,{children:[Object(P.jsx)("h3",{children:"Merchandise"}),Object(P.jsx)("p",{children:"Find the coolest Star Trek merch in the Alpha Quadrant!"})]})]})]})})},ne=c(53),ae=c.n(ne),se=function(e){var t=e.products;if(null===t||void 0===t)return Object(P.jsx)(P.Fragment,{});var c=t.filter((function(e){return e.productName.includes("Model")}));return Object(P.jsxs)("div",{children:[Object(P.jsx)("h3",{className:ae.a.Models__header,children:"Best Sellers in Models"}),Object(P.jsx)("div",{className:ae.a.Models,children:c.map((function(e,t){return Object(P.jsx)(N.b,{to:"/products/".concat(e.productID),children:Object(P.jsx)("img",{className:ae.a.Models__img,src:e.img},e.productID)})}))})]})},oe=function(){var e=function(e){return Object(p.a)({productID:e.id},e.data())},t=function(){var t=Object(u.a)(i.a.mark((function t(){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=O.collection("products"),t.next=3,c.get();case 3:return r=t.sent,t.abrupt("return",r.docs.map(e));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=Object(r.useState)(null),n=Object(l.a)(c,2),a=n[0],s=n[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:c=e.sent,s(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(a),Object(P.jsxs)("div",{className:$.a.background,children:[Object(P.jsx)("div",{children:Object(P.jsx)(re,{})}),Object(P.jsx)(se,{products:a})]})},ie=oe,ue=c(54),le=c.n(ue),de=function(e){var t=e.onChange,c=Object(r.useState)(!1),n=Object(l.a)(c,2),a=n[0],s=n[1];Object(r.useEffect)((function(){t(!a)}),[a]);return Object(P.jsx)("div",{className:le.a.Favorite,children:Object(P.jsx)("button",{className:a?le.a.Favorited:le.a.Favorite__btn,onClick:function(){s(!a),console.log(a)},children:a?"Favourited":"Add to Favourites"})})},je=c(43),be=c.n(je);function pe(){return(pe=Object(u.a)(i.a.mark((function e(t,c){var r,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return console.log(t),console.log(c),r={qty:c},console.log(r),n=O.collection("products"),a=n.doc(t),console.log(a),e.next=10,a.update(r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return(he=Object(u.a)(i.a.mark((function e(t,c){var r,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return r={isFavorite:c},console.log(r),n=O.collection("products"),a=n.doc(t),console.log(a),e.next=8,a.update(r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fe=function(e){var t=e.productID,c=Object(R.f)().id,n=Object(r.useState)(null),a=Object(l.a)(n,2),s=a[0],o=a[1],d=Object(r.useState)(0),j=Object(l.a)(d,2),b=j[0],p=j[1],h=Object(r.useState)(!1),f=Object(l.a)(h,2),C=f[0],O=f[1];return Object(r.useEffect)((function(){console.log(c),console.log(C),function(e,t){he.apply(this,arguments)}(c,!C)}),[C]),Object(r.useEffect)((function(){console.log(c),console.log(b),function(e,t){pe.apply(this,arguments)}(c,b)}),[b]),Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(c);case 2:t=e.sent,console.log(c),p(b),o(t),O(!C);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]),s?(console.log(b),Object(P.jsxs)("div",{className:be.a.Product,children:[Object(P.jsx)("img",{className:be.a.Product__img,src:s.img}),Object(P.jsx)("h2",{className:be.a.Product__name,children:s.productName}),Object(P.jsx)("h3",{className:be.a.Product__type,children:s.productType}),Object(P.jsx)("p",{className:be.a.Product__des,children:s.description}),Object(P.jsx)(w,{value:b,onChange:p}),Object(P.jsx)(de,{onChange:O})]})):Object(P.jsxs)("h1",{children:["Product with id: ",t," could not be found"]})},Ce=c(111),Oe=c(110),me=function(){return Object(P.jsxs)(Ce.a,{children:[Object(P.jsxs)(Ce.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(P.jsx)(Ce.a.Label,{children:"Email address"}),Object(P.jsx)(Ce.a.Control,{type:"email",placeholder:"Enter email"}),Object(P.jsx)(Ce.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(P.jsxs)(Ce.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(P.jsx)(Ce.a.Label,{children:"Password"}),Object(P.jsx)(Ce.a.Control,{type:"password",placeholder:"Password"})]}),Object(P.jsx)(Ce.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(P.jsx)(Ce.a.Check,{type:"checkbox",label:"Check me out"})}),Object(P.jsx)(Oe.a,{variant:"primary",type:"submit",children:"Submit"})]})};var _e=function(){return Object(P.jsx)(N.a,{children:Object(P.jsxs)(F,{children:[Object(P.jsx)(K,{}),Object(P.jsxs)(R.c,{children:[Object(P.jsx)(R.a,{path:"/products/:id",children:Object(P.jsx)(fe,{})}),Object(P.jsx)(R.a,{path:"/products",children:Object(P.jsx)(M,{className:L.a.Products})}),Object(P.jsx)(R.a,{path:"/",children:Object(P.jsx)(ie,{})}),Object(P.jsx)(R.a,{path:"/makefirstcontact",children:Object(P.jsx)(me,{})})]})]})})},xe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,112)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(P.jsx)(n.a.StrictMode,{children:Object(P.jsx)(_e,{})}),document.getElementById("root")),xe()}},[[93,1,2]]]);
//# sourceMappingURL=main.456fd8d0.chunk.js.map