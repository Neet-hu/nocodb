"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[1730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),c=s(r),f=l,m=c["".concat(d,".").concat(f)]||c[f]||u[f]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=f;var n={};for(var d in t)hasOwnProperty.call(t,d)&&(n[d]=t[d]);n.originalType=e,n[c]="string"==typeof e?e:l,i[1]=n;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>s});var a=r(87462),l=(r(67294),r(3905));const o={title:"Barcode",description:"This article explains how to create & work with a Barcode field.",tags:["Fields","Field types","Custom types","Barcode"],keywords:["Fields","Field types","Custom types","Barcode","Create barcode field"]},i=void 0,n={unversionedId:"fields/field-types/custom-types/barcode",id:"fields/field-types/custom-types/barcode",title:"Barcode",description:"This article explains how to create & work with a Barcode field.",source:"@site/docs/070.fields/040.field-types/050.custom-types/050.barcode.md",sourceDirName:"070.fields/040.field-types/050.custom-types",slug:"/fields/field-types/custom-types/barcode",permalink:"/fields/field-types/custom-types/barcode",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/050.custom-types/050.barcode.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Custom types",permalink:"/tags/custom-types"},{label:"Barcode",permalink:"/tags/barcode"}],version:"current",sidebarPosition:50,frontMatter:{title:"Barcode",description:"This article explains how to create & work with a Barcode field.",tags:["Fields","Field types","Custom types","Barcode"],keywords:["Fields","Field types","Custom types","Barcode","Create barcode field"]},sidebar:"tutorialSidebar",previous:{title:"QR code",permalink:"/fields/field-types/custom-types/QR-code"},next:{title:"Geometry",permalink:"/fields/field-types/custom-types/geometry"}},d={},s=[{value:"Create a barcode field",id:"create-a-barcode-field",level:2},{value:"Cell display",id:"cell-display",level:3},{value:"Supported barcode types",id:"supported-barcode-types",level:3},{value:"Related fields",id:"related-fields",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,l.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Barcode")," is a custom field type that allows you to generate a barcode from a string value. This is useful for generating barcodes for things like URLs, phone numbers, or other data that can be represented as a string."),(0,l.kt)("p",null,"The following field types are supported for the for reference field:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Formula"),(0,l.kt)("li",{parentName:"ul"},"Single Line Text"),(0,l.kt)("li",{parentName:"ul"},"Long Text"),(0,l.kt)("li",{parentName:"ul"},"Phone Number"),(0,l.kt)("li",{parentName:"ul"},"URL"),(0,l.kt)("li",{parentName:"ul"},"Email")),(0,l.kt)("h2",{id:"create-a-barcode-field"},"Create a barcode field"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,l.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,l.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,l.kt)("li",{parentName:"ol"},"Select the field type as ",(0,l.kt)("inlineCode",{parentName:"li"},"Barcode")," from the dropdown."),(0,l.kt)("li",{parentName:"ol"},"Select the field to be used as the source for the barcode."),(0,l.kt)("li",{parentName:"ol"},"Select the barcode type from the dropdown."),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:r(53726).Z,width:"2878",height:"1294"})),(0,l.kt)("h3",{id:"cell-display"},"Cell display"),(0,l.kt)("p",null,"Cell displays the barcode generated from the source field. Click on the cell to open enlarged view of the QR code."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:r(35997).Z,width:"948",height:"546"}),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("img",{alt:"image",src:r(81022).Z,width:"946",height:"386"}),"  "),(0,l.kt)("h3",{id:"supported-barcode-types"},"Supported barcode types"),(0,l.kt)("p",null,"NocoDB supports the following barcode types for the barcode field type."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CODE128 "),(0,l.kt)("li",{parentName:"ul"},"EAN"),(0,l.kt)("li",{parentName:"ul"},"EAN-13"),(0,l.kt)("li",{parentName:"ul"},"EAN-8"),(0,l.kt)("li",{parentName:"ul"},"EAN-5"),(0,l.kt)("li",{parentName:"ul"},"EAN-2"),(0,l.kt)("li",{parentName:"ul"},"UPC (A)"),(0,l.kt)("li",{parentName:"ul"},"CODE39"),(0,l.kt)("li",{parentName:"ul"},"ITF-14"),(0,l.kt)("li",{parentName:"ul"},"MSI"),(0,l.kt)("li",{parentName:"ul"},"Pharma code"),(0,l.kt)("li",{parentName:"ul"},"Coda bar")),(0,l.kt)("h2",{id:"related-fields"},"Related fields"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fields/field-types/custom-types/QR-code"},"QR code"))))}u.isMDXComponent=!0},35997:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/barcode-cell-5e6612ed1460a61d5e51629f7b068d35.png"},81022:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/barcode-expand-29f49619f7b7dd014841681482c8a8af.png"},53726:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/barcode-a4164f41826b6ad850b8672d09f0457c.png"}}]);