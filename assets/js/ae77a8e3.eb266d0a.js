"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[5924],{3905:(e,a,l)=>{l.d(a,{Zo:()=>p,kt:()=>c});var t=l(7294);function n(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function i(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function s(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?i(Object(l),!0).forEach((function(a){n(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function r(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)l=i[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)l=i[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=t.createContext({}),u=function(e){var a=t.useContext(o),l=a;return e&&(l="function"==typeof e?e(a):s(s({},a),e)),l},p=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var l=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(l),h=n,c=d["".concat(o,".").concat(h)]||d[h]||m[h]||i;return l?t.createElement(c,s(s({ref:a},p),{},{components:l})):t.createElement(c,s({ref:a},p))}));function c(e,a){var l=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=l.length,s=new Array(i);s[0]=h;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[d]="string"==typeof e?e:n,s[1]=r;for(var u=2;u<i;u++)s[u]=l[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,l)}h.displayName="MDXCreateElement"},801:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var t=l(7462),n=(l(7294),l(3905));const i={},s="Extra Utilities & Fixes",r={unversionedId:"fixes",id:"fixes",title:"Extra Utilities & Fixes",description:"---",source:"@site/docs/fixes.md",sourceDirName:".",slug:"/fixes",permalink:"/docs/fixes",draft:!1,editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/edit/main/docs/fixes.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"User Interface & HUD",permalink:"/docs/ui"}},o={},u=[{value:"Separator:",id:"separator",level:4},{value:"Extra Utilities",id:"extra-utilities",level:2},{value:"JIP LN NVSE Plugin - Unreleased Update File <sup>Vanilla +</sup>",id:"jip-ln-nvse-plugin---unreleased-update-file-vanilla-",level:3},{value:"Installation:",id:"installation",level:4},{value:"AnhNVSE <sup>Vanilla +</sup>",id:"anhnvse-vanilla-",level:3},{value:"SUP NVSE <sup>Vanilla +</sup>",id:"sup-nvse-vanilla-",level:3},{value:"zlib Updated - NVSE <sup>Vanilla +</sup>",id:"zlib-updated---nvse-vanilla-",level:3},{value:"Keywords <sup>Vanilla +</sup>",id:"keywords-vanilla-",level:3},{value:"Climate Control NVSE <sup>Vanilla +</sup>",id:"climate-control-nvse-vanilla-",level:3},{value:"Stewie Tweaks - Custom INI <sup>Vanilla +</sup>",id:"stewie-tweaks---custom-ini-vanilla-",level:3},{value:"Faster Main Menu <sup>Vanilla +</sup>",id:"faster-main-menu-vanilla-",level:3},{value:"Faster Sleep-Wait <sup>Vanilla +</sup>",id:"faster-sleep-wait-vanilla-",level:3},{value:"Installation:",id:"installation-1",level:4},{value:"Auto-Save Manager <sup>Vanilla +</sup>",id:"auto-save-manager-vanilla-",level:3},{value:"Smooth True Iron Sights Camera <sup>Vanilla +</sup>",id:"smooth-true-iron-sights-camera-vanilla-",level:3},{value:"Installation:",id:"installation-2",level:4},{value:"Fixes",id:"fixes",level:2},{value:"Depth of Field Fix <sup>Vanilla +</sup>",id:"depth-of-field-fix-vanilla-",level:3},{value:"External Emittance Fix <sup>Vanilla +</sup>",id:"external-emittance-fix-vanilla-",level:3},{value:"Fallout Alpha Rendering Tweaks <sup>Vanilla +</sup>",id:"fallout-alpha-rendering-tweaks-vanilla-",level:3},{value:"Muzzle Flash Light Fix <sup>Vanilla +</sup>",id:"muzzle-flash-light-fix-vanilla-",level:3},{value:"Pip-Boy Shading Fix <sup>Vanilla +</sup>",id:"pip-boy-shading-fix-vanilla-",level:3},{value:"Viewmodel Shading Fix <sup>Vanilla +</sup>",id:"viewmodel-shading-fix-vanilla-",level:3},{value:"Viewmodel Shake Fix <sup>Vanilla +</sup>",id:"viewmodel-shake-fix-vanilla-",level:3},{value:"Consistent Spread - Firearms Accuracy and Wobble Fix <sup>Vanilla +</sup>",id:"consistent-spread---firearms-accuracy-and-wobble-fix-vanilla-",level:3},{value:"Ammo Script Fixes <sup>Vanilla +</sup>",id:"ammo-script-fixes-vanilla-",level:3},{value:"Critical and Effects - Fixes and Tweaks <sup>Vanilla +</sup>",id:"critical-and-effects---fixes-and-tweaks-vanilla-",level:3},{value:"Equip and Movement Speed Fix - ESPless <sup>Vanilla +</sup>",id:"equip-and-movement-speed-fix---espless-vanilla-",level:3},{value:"Installation:",id:"installation-3",level:4},{value:"NPCa - NPC Prevention of Chem addiction - ESPless <sup>Vanilla +</sup>",id:"npca---npc-prevention-of-chem-addiction---espless-vanilla-",level:3},{value:"Swimming Creatures Fix - ESPless <sup>Vanilla +</sup>",id:"swimming-creatures-fix---espless-vanilla-",level:3},{value:"Tranquility Lane Pipboy Glove and Custom Race Fix <sup>Vanilla +</sup>",id:"tranquility-lane-pipboy-glove-and-custom-race-fix-vanilla-",level:3},{value:"Mostly Fixed FaceGen Tints (NV or TTW) <sup>Vanilla +</sup>",id:"mostly-fixed-facegen-tints-nv-or-ttw-vanilla-",level:3},{value:"Installation:",id:"installation-4",level:4},{value:"Weapon Mod Description Fix (TTW) <sup>Vanilla +</sup>",id:"weapon-mod-description-fix-ttw-vanilla-",level:3}],p={toc:u},d="wrapper";function m(e){let{components:a,...l}=e;return(0,n.kt)(d,(0,t.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"extra-utilities--fixes"},"Extra Utilities & Fixes"),(0,n.kt)("hr",null),(0,n.kt)("h4",{id:"separator"},"Separator:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Right-click the empty space in the left pane of MO2 and select ",(0,n.kt)("strong",{parentName:"li"},"Create separator"),"."),(0,n.kt)("li",{parentName:"ul"},"Name the separator ",(0,n.kt)("strong",{parentName:"li"},"Extra Utilities & Fixes"),".")),(0,n.kt)("h2",{id:"extra-utilities"},"Extra Utilities"),(0,n.kt)("h3",{id:"jip-ln-nvse-plugin---unreleased-update-file-vanilla-"},"JIP LN NVSE Plugin - Unreleased Update File ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"UNRELEASED")," update file for JIP LN NVSE. The current version available on Nexus and directed to by The Best of Times guide has a ",(0,n.kt)("strong",{parentName:"p"},"CRITICAL BUG")," that is prone to crashes. This version addresses said crashes. "),(0,n.kt)("admonition",{title:"CRITICAL UPDATE! DO NOT SKIP!",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This version was created and uploaded by the ",(0,n.kt)("strong",{parentName:"p"},"original author, JazzIsParis"),", however he has since gone on hiatus and has not formally uploaded it to Nexus.")),(0,n.kt)("h4",{id:"installation"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main FIle - ",(0,n.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1NOyL4u6HPVUurtaX3P3XU13qeN3O6G_b/view?usp=drivesdk"},"jip_nvse.dll")),(0,n.kt)("li",{parentName:"ul"},"This must be manually installed.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Right click the JIP LN NVSE Plugin mod in your Utilities seperator in MO2."),(0,n.kt)("li",{parentName:"ul"},"Select open in explorer."),(0,n.kt)("li",{parentName:"ul"},"Open the NVSE folder, then the Plugins folder. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To confirm you are in the correct folder, you should see a file titled jip_nvse.dll (the same name as the file you downloaded earlier)."))),(0,n.kt)("li",{parentName:"ul"},"Drag the new jip_nvse.dll file from your downloads folder into the JIP Plugins folder."),(0,n.kt)("li",{parentName:"ul"},"When prompted, select replace original file.")))),(0,n.kt)("h3",{id:"anhnvse-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/74012"},"AnhNVSE")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"A script extender plugin that adds many new functions, required by some of the mods in the guide. "),(0,n.kt)("h3",{id:"sup-nvse-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/73160"},"SUP NVSE")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Another script extender plugin that adds new functions to the game. "),(0,n.kt)("h3",{id:"zlib-updated---nvse-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/85267"},"zlib Updated - NVSE")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Updates zlib to the latest version for faster loading and less stutter."),(0,n.kt)("h3",{id:"keywords-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/83088"},"Keywords")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Implements a framework to create and automatically load keywords in a simple user-friendly way, via use of INI config files."),(0,n.kt)("h3",{id:"climate-control-nvse-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77205"},"Climate Control NVSE")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes bugs and adds utilities for weather mods."),(0,n.kt)("h3",{id:"stewie-tweaks---custom-ini-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/79005?tab=requirements&file_id=1000131285&nmm=1"},"Stewie Tweaks - Custom INI")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"A custom INI file for Stewie's Tweaks that enables many useful gameplay and QoL tweaks."),(0,n.kt)("h3",{id:"faster-main-menu-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/67811"},"Faster Main Menu")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Makes the games main menu load faster."),(0,n.kt)("h3",{id:"faster-sleep-wait-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/66785"},"Faster Sleep-Wait")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Decreases the delay between hours while waiting or sleeping."),(0,n.kt)("h4",{id:"installation-1"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Faster Sleep Wait")),(0,n.kt)("h3",{id:"auto-save-manager-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/67248"},"Auto-Save Manager")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Lightweight mod adding timed autosaves, save slots and incremental/full save hotkeys."),(0,n.kt)("h3",{id:"smooth-true-iron-sights-camera-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/69074"},"Smooth True Iron Sights Camera")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Aim down sights without the camera snapping to place."),(0,n.kt)("h4",{id:"installation-2"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Smooth True Ironsights")),(0,n.kt)("h2",{id:"fixes"},"Fixes"),(0,n.kt)("h3",{id:"depth-of-field-fix-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/81200"},"Depth of Field Fix")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fix for depth of field bleeding over onto player's viewmodel."),(0,n.kt)("h3",{id:"external-emittance-fix-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/80443"},"External Emittance Fix")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes a bug that would cause certain particles to appear black."),(0,n.kt)("h3",{id:"fallout-alpha-rendering-tweaks-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/80316"},"Fallout Alpha Rendering Tweaks")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes some alpha rendering issues like broken effects when using Transparency Multisampling."),(0,n.kt)("h3",{id:"muzzle-flash-light-fix-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/81201"},"Muzzle Flash Light Fix")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes muzzle flash lights not being culled after firing, which would cause the game to continue using them for illumination."),(0,n.kt)("h3",{id:"pip-boy-shading-fix-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77957"},"Pip-Boy Shading Fix")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes a bug that caused the Pip-Boy to ignore external lights and appear oddly dark, especially in interiors."),(0,n.kt)("h3",{id:"viewmodel-shading-fix-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/84781"},"Viewmodel Shading Fix")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes incorrect specular lighting and lack of muzzle flash lights on viewmodel."),(0,n.kt)("h3",{id:"viewmodel-shake-fix-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/84443"},"Viewmodel Shake Fix")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fix for massive shaking during aiming caused by floating point precision loss."),(0,n.kt)("h3",{id:"consistent-spread---firearms-accuracy-and-wobble-fix-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77974"},"Consistent Spread - Firearms Accuracy and Wobble Fix")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes firearms inconsistent accuracy caused by vanilla weapon wobble and bugged character spread settings."),(0,n.kt)("h3",{id:"ammo-script-fixes-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/63997"},"Ammo Script Fixes")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes several problems at a fundamental level with how ammo scripts and effects work, plus some tweaks for consistency and fun."),(0,n.kt)("h3",{id:"critical-and-effects---fixes-and-tweaks-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/69200"},"Critical and Effects - Fixes and Tweaks")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,'Fixes damage dealing critical effects of most vanilla weapons so that they cannot cause you to miss "killcounts" and other proc effects, plus some personal tweaks.'),(0,n.kt)("h3",{id:"equip-and-movement-speed-fix---espless-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/71774"},"Equip and Movement Speed Fix - ESPless")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes animation speed not updating correctly while in-game for weapon drawing, weapon holstering, and running."),(0,n.kt)("h4",{id:"installation-3"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Equip and Movement Speed Fix - ESPless")),(0,n.kt)("h3",{id:"npca---npc-prevention-of-chem-addiction---espless-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/73622"},"NPCa - NPC Prevention of Chem addiction - ESPless")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Prevents NPCs from gaining addiction effects when using chems or alcohol, as they do not attempt to resolve said debuffs."),(0,n.kt)("h3",{id:"swimming-creatures-fix---espless-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/83094"},"Swimming Creatures Fix - ESPless")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,'Gives the "swim" movement flag to the few vanilla creatures that have associated animations, meaning they can now pursue you through water.'),(0,n.kt)("h3",{id:"tranquility-lane-pipboy-glove-and-custom-race-fix-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77018"},"Tranquility Lane Pipboy Glove and Custom Race Fix")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Stops Tranquility Lane from de-aging you to a child, which breaks multiple race replacers and alternative Pip-Boy replacers."),(0,n.kt)("h3",{id:"mostly-fixed-facegen-tints-nv-or-ttw-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/71577"},"Mostly Fixed FaceGen Tints (NV or TTW)")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Fixes vanilla FaceGen tints."),(0,n.kt)("h4",{id:"installation-4"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - FaceGen Tint Fixes for TTW")),(0,n.kt)("h3",{id:"weapon-mod-description-fix-ttw-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/85957"},"Weapon Mod Description Fix (TTW)")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Certain weapon mods have an empty line above the description. This simple fix rectifies that issue."))}m.isMDXComponent=!0}}]);