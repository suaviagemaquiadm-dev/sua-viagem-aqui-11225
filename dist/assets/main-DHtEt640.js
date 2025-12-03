function md(n){const e=document.getElementById(`${n}-toggle`),t=document.getElementById(`${n}-widget`),r=document.getElementById(`${n}-close`),s=document.getElementById(`${n}-messages`),i=document.getElementById(`${n}-input-form`),a=document.getElementById(`${n}-input`),c=document.getElementById(`${n}-suggestions`),d=n==="lua"?"Olá! Eu sou a Luá, sua assistente de viagens. Como posso te ajudar a planejar sua próxima aventura?":"Olá! Eu sou o Victor, especialista em parcerias. Como posso ajudar a impulsionar o seu negócio em nossa plataforma?",m=n==="lua"?["Quais os destinos mais procurados?","Quero uma viagem para a praia","Ideias de roteiro para a família","Quanto custa viajar para o Jalapão?"]:["Como anunciar meu negócio?","Quais são os planos e preços?","Vantagens do plano Premium","Como falar com um consultor?"];function T(S,C,O=!1){const B=document.createElement("div");B.classList.add("chat-message",`chat-message-${S}`),O?B.innerHTML=C:B.textContent=C,s.appendChild(B),s.scrollTop=s.scrollHeight}function I(){c.innerHTML="",m.forEach(S=>{const C=document.createElement("button");C.className="chat-suggestion-btn",C.textContent=S,C.onclick=()=>{a.value=S,i.dispatchEvent(new Event("submit"))},c.appendChild(C)})}e.addEventListener("click",S=>{S.stopPropagation();const C=t.classList.contains("hidden");document.querySelectorAll('[id$="-widget"]').forEach(O=>{O.id!==t.id&&(O.classList.add("hidden","scale-95","opacity-0"),O.classList.remove("scale-100","opacity-100"))}),t.classList.toggle("hidden"),setTimeout(()=>{C?(t.classList.remove("scale-95","opacity-0"),t.classList.add("scale-100","opacity-100"),a.focus(),s.children.length===0&&(T("bot",d),I())):(t.classList.remove("scale-100","opacity-100"),t.classList.add("scale-95","opacity-0"))},10)}),r.addEventListener("click",()=>{t.classList.remove("scale-100","opacity-100"),t.classList.add("scale-95","opacity-0"),setTimeout(()=>t.classList.add("hidden"),300)}),document.addEventListener("keydown",S=>{S.key==="Escape"&&!t.classList.contains("hidden")&&r.click()}),document.addEventListener("click",S=>{!t.contains(S.target)&&!e.contains(S.target)&&!t.classList.contains("hidden")&&r.click()}),i.addEventListener("submit",async S=>{S.preventDefault();const C=a.value.trim();if(!C)return;T("user",C),a.value="",c.innerHTML="";const O=document.createElement("div");O.classList.add("chat-message","chat-message-bot","typing-indicator"),O.innerHTML="<span></span><span></span><span></span>",s.appendChild(O),s.scrollTop=s.scrollHeight,setTimeout(()=>{s.removeChild(O),T("bot",`Resposta para: "${C}"`)},1e3)})}var Op=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gd={exports:{}};(function(n){(function(){function e(u){var _={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(u===!1)return JSON.parse(JSON.stringify(_));var f={};for(var p in _)_.hasOwnProperty(p)&&(f[p]=_[p].defaultValue);return f}function t(){var u=e(!0),_={};for(var f in u)u.hasOwnProperty(f)&&(_[f]=!0);return _}var r={},s={},i={},a=e(!0),c="vanilla",d={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:e(!0),allOn:t()};r.helper={},r.extensions={},r.setOption=function(u,_){return a[u]=_,this},r.getOption=function(u){return a[u]},r.getOptions=function(){return a},r.resetOptions=function(){a=e(!0)},r.setFlavor=function(u){if(!d.hasOwnProperty(u))throw Error(u+" flavor was not found");r.resetOptions();var _=d[u];c=u;for(var f in _)_.hasOwnProperty(f)&&(a[f]=_[f])},r.getFlavor=function(){return c},r.getFlavorOptions=function(u){if(d.hasOwnProperty(u))return d[u]},r.getDefaultOptions=function(u){return e(u)},r.subParser=function(u,_){if(r.helper.isString(u))if(typeof _<"u")s[u]=_;else{if(s.hasOwnProperty(u))return s[u];throw Error("SubParser named "+u+" not registered!")}},r.extension=function(u,_){if(!r.helper.isString(u))throw Error("Extension 'name' must be a string");if(u=r.helper.stdExtName(u),r.helper.isUndefined(_)){if(!i.hasOwnProperty(u))throw Error("Extension named "+u+" is not registered!");return i[u]}else{typeof _=="function"&&(_=_()),r.helper.isArray(_)||(_=[_]);var f=m(_,u);if(f.valid)i[u]=_;else throw Error(f.error)}},r.getAllExtensions=function(){return i},r.removeExtension=function(u){delete i[u]},r.resetExtensions=function(){i={}};function m(u,_){var f=_?"Error in "+_+" extension->":"Error in unnamed extension",p={valid:!0,error:""};r.helper.isArray(u)||(u=[u]);for(var g=0;g<u.length;++g){var y=f+" sub-extension "+g+": ",w=u[g];if(typeof w!="object")return p.valid=!1,p.error=y+"must be an object, but "+typeof w+" given",p;if(!r.helper.isString(w.type))return p.valid=!1,p.error=y+'property "type" must be a string, but '+typeof w.type+" given",p;var E=w.type=w.type.toLowerCase();if(E==="language"&&(E=w.type="lang"),E==="html"&&(E=w.type="output"),E!=="lang"&&E!=="output"&&E!=="listener")return p.valid=!1,p.error=y+"type "+E+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',p;if(E==="listener"){if(r.helper.isUndefined(w.listeners))return p.valid=!1,p.error=y+'. Extensions of type "listener" must have a property called "listeners"',p}else if(r.helper.isUndefined(w.filter)&&r.helper.isUndefined(w.regex))return p.valid=!1,p.error=y+E+' extensions must define either a "regex" property or a "filter" method',p;if(w.listeners){if(typeof w.listeners!="object")return p.valid=!1,p.error=y+'"listeners" property must be an object but '+typeof w.listeners+" given",p;for(var A in w.listeners)if(w.listeners.hasOwnProperty(A)&&typeof w.listeners[A]!="function")return p.valid=!1,p.error=y+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+A+" must be a function but "+typeof w.listeners[A]+" given",p}if(w.filter){if(typeof w.filter!="function")return p.valid=!1,p.error=y+'"filter" must be a function, but '+typeof w.filter+" given",p}else if(w.regex){if(r.helper.isString(w.regex)&&(w.regex=new RegExp(w.regex,"g")),!(w.regex instanceof RegExp))return p.valid=!1,p.error=y+'"regex" property must either be a string or a RegExp object, but '+typeof w.regex+" given",p;if(r.helper.isUndefined(w.replace))return p.valid=!1,p.error=y+'"regex" extensions must implement a replace string or function',p}}return p}r.validateExtension=function(u){var _=m(u,null);return _.valid?!0:(console.warn(_.error),!1)},r.hasOwnProperty("helper")||(r.helper={}),r.helper.isString=function(u){return typeof u=="string"||u instanceof String},r.helper.isFunction=function(u){var _={};return u&&_.toString.call(u)==="[object Function]"},r.helper.isArray=function(u){return Array.isArray(u)},r.helper.isUndefined=function(u){return typeof u>"u"},r.helper.forEach=function(u,_){if(r.helper.isUndefined(u))throw new Error("obj param is required");if(r.helper.isUndefined(_))throw new Error("callback param is required");if(!r.helper.isFunction(_))throw new Error("callback param must be a function/closure");if(typeof u.forEach=="function")u.forEach(_);else if(r.helper.isArray(u))for(var f=0;f<u.length;f++)_(u[f],f,u);else if(typeof u=="object")for(var p in u)u.hasOwnProperty(p)&&_(u[p],p,u);else throw new Error("obj does not seem to be an array or an iterable object")},r.helper.stdExtName=function(u){return u.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function T(u,_){var f=_.charCodeAt(0);return"¨E"+f+"E"}r.helper.escapeCharactersCallback=T,r.helper.escapeCharacters=function(u,_,f){var p="(["+_.replace(/([\[\]\\])/g,"\\$1")+"])";f&&(p="\\\\"+p);var g=new RegExp(p,"g");return u=u.replace(g,T),u},r.helper.unescapeHTMLEntities=function(u){return u.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var I=function(u,_,f,p){var g=p||"",y=g.indexOf("g")>-1,w=new RegExp(_+"|"+f,"g"+g.replace(/g/g,"")),E=new RegExp(_,g.replace(/g/g,"")),A=[],v,L,U,R,V;do for(v=0;U=w.exec(u);)if(E.test(U[0]))v++||(L=w.lastIndex,R=L-U[0].length);else if(v&&!--v){V=U.index+U[0].length;var $={left:{start:R,end:L},match:{start:L,end:U.index},right:{start:U.index,end:V},wholeMatch:{start:R,end:V}};if(A.push($),!y)return A}while(v&&(w.lastIndex=L));return A};r.helper.matchRecursiveRegExp=function(u,_,f,p){for(var g=I(u,_,f,p),y=[],w=0;w<g.length;++w)y.push([u.slice(g[w].wholeMatch.start,g[w].wholeMatch.end),u.slice(g[w].match.start,g[w].match.end),u.slice(g[w].left.start,g[w].left.end),u.slice(g[w].right.start,g[w].right.end)]);return y},r.helper.replaceRecursiveRegExp=function(u,_,f,p,g){if(!r.helper.isFunction(_)){var y=_;_=function(){return y}}var w=I(u,f,p,g),E=u,A=w.length;if(A>0){var v=[];w[0].wholeMatch.start!==0&&v.push(u.slice(0,w[0].wholeMatch.start));for(var L=0;L<A;++L)v.push(_(u.slice(w[L].wholeMatch.start,w[L].wholeMatch.end),u.slice(w[L].match.start,w[L].match.end),u.slice(w[L].left.start,w[L].left.end),u.slice(w[L].right.start,w[L].right.end))),L<A-1&&v.push(u.slice(w[L].wholeMatch.end,w[L+1].wholeMatch.start));w[A-1].wholeMatch.end<u.length&&v.push(u.slice(w[A-1].wholeMatch.end)),E=v.join("")}return E},r.helper.regexIndexOf=function(u,_,f){if(!r.helper.isString(u))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(_ instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var p=u.substring(f||0).search(_);return p>=0?p+(f||0):p},r.helper.splitAtIndex=function(u,_){if(!r.helper.isString(u))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[u.substring(0,_),u.substring(_)]},r.helper.encodeEmailAddress=function(u){var _=[function(f){return"&#"+f.charCodeAt(0)+";"},function(f){return"&#x"+f.charCodeAt(0).toString(16)+";"},function(f){return f}];return u=u.replace(/./g,function(f){if(f==="@")f=_[Math.floor(Math.random()*2)](f);else{var p=Math.random();f=p>.9?_[2](f):p>.45?_[1](f):_[0](f)}return f}),u},r.helper.padEnd=function(_,f,p){return f=f>>0,p=String(p||" "),_.length>f?String(_):(f=f-_.length,f>p.length&&(p+=p.repeat(f/p.length)),String(_)+p.slice(0,f))},typeof console>"u"&&(console={warn:function(u){alert(u)},log:function(u){alert(u)},error:function(u){throw u}}),r.helper.regexes={asteriskDashAndColon:/([*_:~])/g},r.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},r.Converter=function(u){var _={},f=[],p=[],g={},y=c,w={parsed:{},raw:"",format:""};E();function E(){u=u||{};for(var R in a)a.hasOwnProperty(R)&&(_[R]=a[R]);if(typeof u=="object")for(var V in u)u.hasOwnProperty(V)&&(_[V]=u[V]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof u+" was passed instead.");_.extensions&&r.helper.forEach(_.extensions,A)}function A(R,V){if(V=V||null,r.helper.isString(R))if(R=r.helper.stdExtName(R),V=R,r.extensions[R]){console.warn("DEPRECATION WARNING: "+R+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),v(r.extensions[R],R);return}else if(!r.helper.isUndefined(i[R]))R=i[R];else throw Error('Extension "'+R+'" could not be loaded. It was either not found or is not a valid extension.');typeof R=="function"&&(R=R()),r.helper.isArray(R)||(R=[R]);var $=m(R,V);if(!$.valid)throw Error($.error);for(var W=0;W<R.length;++W){switch(R[W].type){case"lang":f.push(R[W]);break;case"output":p.push(R[W]);break}if(R[W].hasOwnProperty("listeners"))for(var ie in R[W].listeners)R[W].listeners.hasOwnProperty(ie)&&L(ie,R[W].listeners[ie])}}function v(R,V){typeof R=="function"&&(R=R(new r.Converter)),r.helper.isArray(R)||(R=[R]);var $=m(R,V);if(!$.valid)throw Error($.error);for(var W=0;W<R.length;++W)switch(R[W].type){case"lang":f.push(R[W]);break;case"output":p.push(R[W]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function L(R,V){if(!r.helper.isString(R))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof R+" given");if(typeof V!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof V+" given");g.hasOwnProperty(R)||(g[R]=[]),g[R].push(V)}function U(R){var V=R.match(/^\s*/)[0].length,$=new RegExp("^\\s{0,"+V+"}","gm");return R.replace($,"")}this._dispatch=function(V,$,W,ie){if(g.hasOwnProperty(V))for(var z=0;z<g[V].length;++z){var Ie=g[V][z](V,$,this,W,ie);Ie&&typeof Ie<"u"&&($=Ie)}return $},this.listen=function(R,V){return L(R,V),this},this.makeHtml=function(R){if(!R)return R;var V={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:f,outputModifiers:p,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return R=R.replace(/¨/g,"¨T"),R=R.replace(/\$/g,"¨D"),R=R.replace(/\r\n/g,`
`),R=R.replace(/\r/g,`
`),R=R.replace(/\u00A0/g,"&nbsp;"),_.smartIndentationFix&&(R=U(R)),R=`

`+R+`

`,R=r.subParser("detab")(R,_,V),R=R.replace(/^[ \t]+$/mg,""),r.helper.forEach(f,function($){R=r.subParser("runExtension")($,R,_,V)}),R=r.subParser("metadata")(R,_,V),R=r.subParser("hashPreCodeTags")(R,_,V),R=r.subParser("githubCodeBlocks")(R,_,V),R=r.subParser("hashHTMLBlocks")(R,_,V),R=r.subParser("hashCodeTags")(R,_,V),R=r.subParser("stripLinkDefinitions")(R,_,V),R=r.subParser("blockGamut")(R,_,V),R=r.subParser("unhashHTMLSpans")(R,_,V),R=r.subParser("unescapeSpecialChars")(R,_,V),R=R.replace(/¨D/g,"$$"),R=R.replace(/¨T/g,"¨"),R=r.subParser("completeHTMLDocument")(R,_,V),r.helper.forEach(p,function($){R=r.subParser("runExtension")($,R,_,V)}),w=V.metadata,R},this.makeMarkdown=this.makeMd=function(R,V){if(R=R.replace(/\r\n/g,`
`),R=R.replace(/\r/g,`
`),R=R.replace(/>[ \t]+</,">¨NBSP;<"),!V)if(window&&window.document)V=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var $=V.createElement("div");$.innerHTML=R;var W={preList:Fe($)};le($);for(var ie=$.childNodes,z="",Ie=0;Ie<ie.length;Ie++)z+=r.subParser("makeMarkdown.node")(ie[Ie],W);function le(re){for(var _e=0;_e<re.childNodes.length;++_e){var Ae=re.childNodes[_e];Ae.nodeType===3?!/\S/.test(Ae.nodeValue)&&!/^[ ]+$/.test(Ae.nodeValue)?(re.removeChild(Ae),--_e):(Ae.nodeValue=Ae.nodeValue.split(`
`).join(" "),Ae.nodeValue=Ae.nodeValue.replace(/(\s)+/g,"$1")):Ae.nodeType===1&&le(Ae)}}function Fe(re){for(var _e=re.querySelectorAll("pre"),Ae=[],Te=0;Te<_e.length;++Te)if(_e[Te].childElementCount===1&&_e[Te].firstChild.tagName.toLowerCase()==="code"){var Ht=_e[Te].firstChild.innerHTML.trim(),qt=_e[Te].firstChild.getAttribute("data-language")||"";if(qt==="")for(var $n=_e[Te].firstChild.className.split(" "),Gt=0;Gt<$n.length;++Gt){var ct=$n[Gt].match(/^language-(.+)$/);if(ct!==null){qt=ct[1];break}}Ht=r.helper.unescapeHTMLEntities(Ht),Ae.push(Ht),_e[Te].outerHTML='<precode language="'+qt+'" precodenum="'+Te.toString()+'"></precode>'}else Ae.push(_e[Te].innerHTML),_e[Te].innerHTML="",_e[Te].setAttribute("prenum",Te.toString());return Ae}return z},this.setOption=function(R,V){_[R]=V},this.getOption=function(R){return _[R]},this.getOptions=function(){return _},this.addExtension=function(R,V){V=V||null,A(R,V)},this.useExtension=function(R){A(R)},this.setFlavor=function(R){if(!d.hasOwnProperty(R))throw Error(R+" flavor was not found");var V=d[R];y=R;for(var $ in V)V.hasOwnProperty($)&&(_[$]=V[$])},this.getFlavor=function(){return y},this.removeExtension=function(R){r.helper.isArray(R)||(R=[R]);for(var V=0;V<R.length;++V){for(var $=R[V],W=0;W<f.length;++W)f[W]===$&&f.splice(W,1);for(var ie=0;ie<p.length;++ie)p[ie]===$&&p.splice(ie,1)}},this.getAllExtensions=function(){return{language:f,output:p}},this.getMetadata=function(R){return R?w.raw:w.parsed},this.getMetadataFormat=function(){return w.format},this._setMetadataPair=function(R,V){w.parsed[R]=V},this._setMetadataFormat=function(R){w.format=R},this._setMetadataRaw=function(R){w.raw=R}},r.subParser("anchors",function(u,_,f){u=f.converter._dispatch("anchors.before",u,_,f);var p=function(g,y,w,E,A,v,L){if(r.helper.isUndefined(L)&&(L=""),w=w.toLowerCase(),g.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)E="";else if(!E)if(w||(w=y.toLowerCase().replace(/ ?\n/g," ")),E="#"+w,!r.helper.isUndefined(f.gUrls[w]))E=f.gUrls[w],r.helper.isUndefined(f.gTitles[w])||(L=f.gTitles[w]);else return g;E=E.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var U='<a href="'+E+'"';return L!==""&&L!==null&&(L=L.replace(/"/g,"&quot;"),L=L.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),U+=' title="'+L+'"'),_.openLinksInNewWindow&&!/^#/.test(E)&&(U+=' rel="noopener noreferrer" target="¨E95Eblank"'),U+=">"+y+"</a>",U};return u=u.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,p),u=u.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,p),u=u.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,p),u=u.replace(/\[([^\[\]]+)]()()()()()/g,p),_.ghMentions&&(u=u.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(g,y,w,E,A){if(w==="\\")return y+E;if(!r.helper.isString(_.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var v=_.ghMentionsLink.replace(/\{u}/g,A),L="";return _.openLinksInNewWindow&&(L=' rel="noopener noreferrer" target="¨E95Eblank"'),y+'<a href="'+v+'"'+L+">"+E+"</a>"})),u=f.converter._dispatch("anchors.after",u,_,f),u});var S=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,C=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,O=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,B=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,F=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,J=function(u){return function(_,f,p,g,y,w,E){p=p.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var A=p,v="",L="",U=f||"",R=E||"";return/^www\./i.test(p)&&(p=p.replace(/^www\./i,"http://www.")),u.excludeTrailingPunctuationFromURLs&&w&&(v=w),u.openLinksInNewWindow&&(L=' rel="noopener noreferrer" target="¨E95Eblank"'),U+'<a href="'+p+'"'+L+">"+A+"</a>"+v+R}},Y=function(u,_){return function(f,p,g){var y="mailto:";return p=p||"",g=r.subParser("unescapeSpecialChars")(g,u,_),u.encodeEmails?(y=r.helper.encodeEmailAddress(y+g),g=r.helper.encodeEmailAddress(g)):y=y+g,p+'<a href="'+y+'">'+g+"</a>"}};r.subParser("autoLinks",function(u,_,f){return u=f.converter._dispatch("autoLinks.before",u,_,f),u=u.replace(O,J(_)),u=u.replace(F,Y(_,f)),u=f.converter._dispatch("autoLinks.after",u,_,f),u}),r.subParser("simplifiedAutoLinks",function(u,_,f){return _.simplifiedAutoLink&&(u=f.converter._dispatch("simplifiedAutoLinks.before",u,_,f),_.excludeTrailingPunctuationFromURLs?u=u.replace(C,J(_)):u=u.replace(S,J(_)),u=u.replace(B,Y(_,f)),u=f.converter._dispatch("simplifiedAutoLinks.after",u,_,f)),u}),r.subParser("blockGamut",function(u,_,f){return u=f.converter._dispatch("blockGamut.before",u,_,f),u=r.subParser("blockQuotes")(u,_,f),u=r.subParser("headers")(u,_,f),u=r.subParser("horizontalRule")(u,_,f),u=r.subParser("lists")(u,_,f),u=r.subParser("codeBlocks")(u,_,f),u=r.subParser("tables")(u,_,f),u=r.subParser("hashHTMLBlocks")(u,_,f),u=r.subParser("paragraphs")(u,_,f),u=f.converter._dispatch("blockGamut.after",u,_,f),u}),r.subParser("blockQuotes",function(u,_,f){u=f.converter._dispatch("blockQuotes.before",u,_,f),u=u+`

`;var p=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return _.splitAdjacentBlockquotes&&(p=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),u=u.replace(p,function(g){return g=g.replace(/^[ \t]*>[ \t]?/gm,""),g=g.replace(/¨0/g,""),g=g.replace(/^[ \t]+$/gm,""),g=r.subParser("githubCodeBlocks")(g,_,f),g=r.subParser("blockGamut")(g,_,f),g=g.replace(/(^|\n)/g,"$1  "),g=g.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(y,w){var E=w;return E=E.replace(/^  /mg,"¨0"),E=E.replace(/¨0/g,""),E}),r.subParser("hashBlock")(`<blockquote>
`+g+`
</blockquote>`,_,f)}),u=f.converter._dispatch("blockQuotes.after",u,_,f),u}),r.subParser("codeBlocks",function(u,_,f){u=f.converter._dispatch("codeBlocks.before",u,_,f),u+="¨0";var p=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return u=u.replace(p,function(g,y,w){var E=y,A=w,v=`
`;return E=r.subParser("outdent")(E,_,f),E=r.subParser("encodeCode")(E,_,f),E=r.subParser("detab")(E,_,f),E=E.replace(/^\n+/g,""),E=E.replace(/\n+$/g,""),_.omitExtraWLInCodeBlocks&&(v=""),E="<pre><code>"+E+v+"</code></pre>",r.subParser("hashBlock")(E,_,f)+A}),u=u.replace(/¨0/,""),u=f.converter._dispatch("codeBlocks.after",u,_,f),u}),r.subParser("codeSpans",function(u,_,f){return u=f.converter._dispatch("codeSpans.before",u,_,f),typeof u>"u"&&(u=""),u=u.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(p,g,y,w){var E=w;return E=E.replace(/^([ \t]*)/g,""),E=E.replace(/[ \t]*$/g,""),E=r.subParser("encodeCode")(E,_,f),E=g+"<code>"+E+"</code>",E=r.subParser("hashHTMLSpans")(E,_,f),E}),u=f.converter._dispatch("codeSpans.after",u,_,f),u}),r.subParser("completeHTMLDocument",function(u,_,f){if(!_.completeHTMLDocument)return u;u=f.converter._dispatch("completeHTMLDocument.before",u,_,f);var p="html",g=`<!DOCTYPE HTML>
`,y="",w=`<meta charset="utf-8">
`,E="",A="";typeof f.metadata.parsed.doctype<"u"&&(g="<!DOCTYPE "+f.metadata.parsed.doctype+`>
`,p=f.metadata.parsed.doctype.toString().toLowerCase(),(p==="html"||p==="html5")&&(w='<meta charset="utf-8">'));for(var v in f.metadata.parsed)if(f.metadata.parsed.hasOwnProperty(v))switch(v.toLowerCase()){case"doctype":break;case"title":y="<title>"+f.metadata.parsed.title+`</title>
`;break;case"charset":p==="html"||p==="html5"?w='<meta charset="'+f.metadata.parsed.charset+`">
`:w='<meta name="charset" content="'+f.metadata.parsed.charset+`">
`;break;case"language":case"lang":E=' lang="'+f.metadata.parsed[v]+'"',A+='<meta name="'+v+'" content="'+f.metadata.parsed[v]+`">
`;break;default:A+='<meta name="'+v+'" content="'+f.metadata.parsed[v]+`">
`}return u=g+"<html"+E+`>
<head>
`+y+w+A+`</head>
<body>
`+u.trim()+`
</body>
</html>`,u=f.converter._dispatch("completeHTMLDocument.after",u,_,f),u}),r.subParser("detab",function(u,_,f){return u=f.converter._dispatch("detab.before",u,_,f),u=u.replace(/\t(?=\t)/g,"    "),u=u.replace(/\t/g,"¨A¨B"),u=u.replace(/¨B(.+?)¨A/g,function(p,g){for(var y=g,w=4-y.length%4,E=0;E<w;E++)y+=" ";return y}),u=u.replace(/¨A/g,"    "),u=u.replace(/¨B/g,""),u=f.converter._dispatch("detab.after",u,_,f),u}),r.subParser("ellipsis",function(u,_,f){return _.ellipsis&&(u=f.converter._dispatch("ellipsis.before",u,_,f),u=u.replace(/\.\.\./g,"…"),u=f.converter._dispatch("ellipsis.after",u,_,f)),u}),r.subParser("emoji",function(u,_,f){if(!_.emoji)return u;u=f.converter._dispatch("emoji.before",u,_,f);var p=/:([\S]+?):/g;return u=u.replace(p,function(g,y){return r.helper.emojis.hasOwnProperty(y)?r.helper.emojis[y]:g}),u=f.converter._dispatch("emoji.after",u,_,f),u}),r.subParser("encodeAmpsAndAngles",function(u,_,f){return u=f.converter._dispatch("encodeAmpsAndAngles.before",u,_,f),u=u.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),u=u.replace(/<(?![a-z\/?$!])/gi,"&lt;"),u=u.replace(/</g,"&lt;"),u=u.replace(/>/g,"&gt;"),u=f.converter._dispatch("encodeAmpsAndAngles.after",u,_,f),u}),r.subParser("encodeBackslashEscapes",function(u,_,f){return u=f.converter._dispatch("encodeBackslashEscapes.before",u,_,f),u=u.replace(/\\(\\)/g,r.helper.escapeCharactersCallback),u=u.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,r.helper.escapeCharactersCallback),u=f.converter._dispatch("encodeBackslashEscapes.after",u,_,f),u}),r.subParser("encodeCode",function(u,_,f){return u=f.converter._dispatch("encodeCode.before",u,_,f),u=u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,r.helper.escapeCharactersCallback),u=f.converter._dispatch("encodeCode.after",u,_,f),u}),r.subParser("escapeSpecialCharsWithinTagAttributes",function(u,_,f){u=f.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",u,_,f);var p=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,g=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return u=u.replace(p,function(y){return y.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),u=u.replace(g,function(y){return y.replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),u=f.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",u,_,f),u}),r.subParser("githubCodeBlocks",function(u,_,f){return _.ghCodeBlocks?(u=f.converter._dispatch("githubCodeBlocks.before",u,_,f),u+="¨0",u=u.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(p,g,y,w){var E=_.omitExtraWLInCodeBlocks?"":`
`;return w=r.subParser("encodeCode")(w,_,f),w=r.subParser("detab")(w,_,f),w=w.replace(/^\n+/g,""),w=w.replace(/\n+$/g,""),w="<pre><code"+(y?' class="'+y+" language-"+y+'"':"")+">"+w+E+"</code></pre>",w=r.subParser("hashBlock")(w,_,f),`

¨G`+(f.ghCodeBlocks.push({text:p,codeblock:w})-1)+`G

`}),u=u.replace(/¨0/,""),f.converter._dispatch("githubCodeBlocks.after",u,_,f)):u}),r.subParser("hashBlock",function(u,_,f){return u=f.converter._dispatch("hashBlock.before",u,_,f),u=u.replace(/(^\n+|\n+$)/g,""),u=`

¨K`+(f.gHtmlBlocks.push(u)-1)+`K

`,u=f.converter._dispatch("hashBlock.after",u,_,f),u}),r.subParser("hashCodeTags",function(u,_,f){u=f.converter._dispatch("hashCodeTags.before",u,_,f);var p=function(g,y,w,E){var A=w+r.subParser("encodeCode")(y,_,f)+E;return"¨C"+(f.gHtmlSpans.push(A)-1)+"C"};return u=r.helper.replaceRecursiveRegExp(u,p,"<code\\b[^>]*>","</code>","gim"),u=f.converter._dispatch("hashCodeTags.after",u,_,f),u}),r.subParser("hashElement",function(u,_,f){return function(p,g){var y=g;return y=y.replace(/\n\n/g,`
`),y=y.replace(/^\n/,""),y=y.replace(/\n+$/g,""),y=`

¨K`+(f.gHtmlBlocks.push(y)-1)+`K

`,y}}),r.subParser("hashHTMLBlocks",function(u,_,f){u=f.converter._dispatch("hashHTMLBlocks.before",u,_,f);var p=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],g=function(R,V,$,W){var ie=R;return $.search(/\bmarkdown\b/)!==-1&&(ie=$+f.converter.makeHtml(V)+W),`

¨K`+(f.gHtmlBlocks.push(ie)-1)+`K

`};_.backslashEscapesHTMLTags&&(u=u.replace(/\\<(\/?[^>]+?)>/g,function(R,V){return"&lt;"+V+"&gt;"}));for(var y=0;y<p.length;++y)for(var w,E=new RegExp("^ {0,3}(<"+p[y]+"\\b[^>]*>)","im"),A="<"+p[y]+"\\b[^>]*>",v="</"+p[y]+">";(w=r.helper.regexIndexOf(u,E))!==-1;){var L=r.helper.splitAtIndex(u,w),U=r.helper.replaceRecursiveRegExp(L[1],g,A,v,"im");if(U===L[1])break;u=L[0].concat(U)}return u=u.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(u,_,f)),u=r.helper.replaceRecursiveRegExp(u,function(R){return`

¨K`+(f.gHtmlBlocks.push(R)-1)+`K

`},"^ {0,3}<!--","-->","gm"),u=u.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(u,_,f)),u=f.converter._dispatch("hashHTMLBlocks.after",u,_,f),u}),r.subParser("hashHTMLSpans",function(u,_,f){u=f.converter._dispatch("hashHTMLSpans.before",u,_,f);function p(g){return"¨C"+(f.gHtmlSpans.push(g)-1)+"C"}return u=u.replace(/<[^>]+?\/>/gi,function(g){return p(g)}),u=u.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(g){return p(g)}),u=u.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(g){return p(g)}),u=u.replace(/<[^>]+?>/gi,function(g){return p(g)}),u=f.converter._dispatch("hashHTMLSpans.after",u,_,f),u}),r.subParser("unhashHTMLSpans",function(u,_,f){u=f.converter._dispatch("unhashHTMLSpans.before",u,_,f);for(var p=0;p<f.gHtmlSpans.length;++p){for(var g=f.gHtmlSpans[p],y=0;/¨C(\d+)C/.test(g);){var w=RegExp.$1;if(g=g.replace("¨C"+w+"C",f.gHtmlSpans[w]),y===10){console.error("maximum nesting of 10 spans reached!!!");break}++y}u=u.replace("¨C"+p+"C",g)}return u=f.converter._dispatch("unhashHTMLSpans.after",u,_,f),u}),r.subParser("hashPreCodeTags",function(u,_,f){u=f.converter._dispatch("hashPreCodeTags.before",u,_,f);var p=function(g,y,w,E){var A=w+r.subParser("encodeCode")(y,_,f)+E;return`

¨G`+(f.ghCodeBlocks.push({text:g,codeblock:A})-1)+`G

`};return u=r.helper.replaceRecursiveRegExp(u,p,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),u=f.converter._dispatch("hashPreCodeTags.after",u,_,f),u}),r.subParser("headers",function(u,_,f){u=f.converter._dispatch("headers.before",u,_,f);var p=isNaN(parseInt(_.headerLevelStart))?1:parseInt(_.headerLevelStart),g=_.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,y=_.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;u=u.replace(g,function(A,v){var L=r.subParser("spanGamut")(v,_,f),U=_.noHeaderId?"":' id="'+E(v)+'"',R=p,V="<h"+R+U+">"+L+"</h"+R+">";return r.subParser("hashBlock")(V,_,f)}),u=u.replace(y,function(A,v){var L=r.subParser("spanGamut")(v,_,f),U=_.noHeaderId?"":' id="'+E(v)+'"',R=p+1,V="<h"+R+U+">"+L+"</h"+R+">";return r.subParser("hashBlock")(V,_,f)});var w=_.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;u=u.replace(w,function(A,v,L){var U=L;_.customizedHeaderId&&(U=L.replace(/\s?\{([^{]+?)}\s*$/,""));var R=r.subParser("spanGamut")(U,_,f),V=_.noHeaderId?"":' id="'+E(L)+'"',$=p-1+v.length,W="<h"+$+V+">"+R+"</h"+$+">";return r.subParser("hashBlock")(W,_,f)});function E(A){var v,L;if(_.customizedHeaderId){var U=A.match(/\{([^{]+?)}\s*$/);U&&U[1]&&(A=U[1])}return v=A,r.helper.isString(_.prefixHeaderId)?L=_.prefixHeaderId:_.prefixHeaderId===!0?L="section-":L="",_.rawPrefixHeaderId||(v=L+v),_.ghCompatibleHeaderId?v=v.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():_.rawHeaderId?v=v.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():v=v.replace(/[^\w]/g,"").toLowerCase(),_.rawPrefixHeaderId&&(v=L+v),f.hashLinkCounts[v]?v=v+"-"+f.hashLinkCounts[v]++:f.hashLinkCounts[v]=1,v}return u=f.converter._dispatch("headers.after",u,_,f),u}),r.subParser("horizontalRule",function(u,_,f){u=f.converter._dispatch("horizontalRule.before",u,_,f);var p=r.subParser("hashBlock")("<hr />",_,f);return u=u.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,p),u=u.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,p),u=u.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,p),u=f.converter._dispatch("horizontalRule.after",u,_,f),u}),r.subParser("images",function(u,_,f){u=f.converter._dispatch("images.before",u,_,f);var p=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,g=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,y=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,w=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,E=/!\[([^\[\]]+)]()()()()()/g;function A(L,U,R,V,$,W,ie,z){return V=V.replace(/\s/g,""),v(L,U,R,V,$,W,ie,z)}function v(L,U,R,V,$,W,ie,z){var Ie=f.gUrls,le=f.gTitles,Fe=f.gDimensions;if(R=R.toLowerCase(),z||(z=""),L.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)V="";else if(V===""||V===null)if((R===""||R===null)&&(R=U.toLowerCase().replace(/ ?\n/g," ")),V="#"+R,!r.helper.isUndefined(Ie[R]))V=Ie[R],r.helper.isUndefined(le[R])||(z=le[R]),r.helper.isUndefined(Fe[R])||($=Fe[R].width,W=Fe[R].height);else return L;U=U.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),V=V.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var re='<img src="'+V+'" alt="'+U+'"';return z&&r.helper.isString(z)&&(z=z.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),re+=' title="'+z+'"'),$&&W&&($=$==="*"?"auto":$,W=W==="*"?"auto":W,re+=' width="'+$+'"',re+=' height="'+W+'"'),re+=" />",re}return u=u.replace(w,v),u=u.replace(y,A),u=u.replace(g,v),u=u.replace(p,v),u=u.replace(E,v),u=f.converter._dispatch("images.after",u,_,f),u}),r.subParser("italicsAndBold",function(u,_,f){u=f.converter._dispatch("italicsAndBold.before",u,_,f);function p(g,y,w){return y+g+w}return _.literalMidWordUnderscores?(u=u.replace(/\b___(\S[\s\S]*?)___\b/g,function(g,y){return p(y,"<strong><em>","</em></strong>")}),u=u.replace(/\b__(\S[\s\S]*?)__\b/g,function(g,y){return p(y,"<strong>","</strong>")}),u=u.replace(/\b_(\S[\s\S]*?)_\b/g,function(g,y){return p(y,"<em>","</em>")})):(u=u.replace(/___(\S[\s\S]*?)___/g,function(g,y){return/\S$/.test(y)?p(y,"<strong><em>","</em></strong>"):g}),u=u.replace(/__(\S[\s\S]*?)__/g,function(g,y){return/\S$/.test(y)?p(y,"<strong>","</strong>"):g}),u=u.replace(/_([^\s_][\s\S]*?)_/g,function(g,y){return/\S$/.test(y)?p(y,"<em>","</em>"):g})),_.literalMidWordAsterisks?(u=u.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(g,y,w){return p(w,y+"<strong><em>","</em></strong>")}),u=u.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(g,y,w){return p(w,y+"<strong>","</strong>")}),u=u.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(g,y,w){return p(w,y+"<em>","</em>")})):(u=u.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(g,y){return/\S$/.test(y)?p(y,"<strong><em>","</em></strong>"):g}),u=u.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(g,y){return/\S$/.test(y)?p(y,"<strong>","</strong>"):g}),u=u.replace(/\*([^\s*][\s\S]*?)\*/g,function(g,y){return/\S$/.test(y)?p(y,"<em>","</em>"):g})),u=f.converter._dispatch("italicsAndBold.after",u,_,f),u}),r.subParser("lists",function(u,_,f){function p(w,E){f.gListLevel++,w=w.replace(/\n{2,}$/,`
`),w+="¨0";var A=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,v=/\n[ \t]*\n(?!¨0)/.test(w);return _.disableForced4SpacesIndentedSublists&&(A=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),w=w.replace(A,function(L,U,R,V,$,W,ie){ie=ie&&ie.trim()!=="";var z=r.subParser("outdent")($,_,f),Ie="";return W&&_.tasklists&&(Ie=' class="task-list-item" style="list-style-type: none;"',z=z.replace(/^[ \t]*\[(x|X| )?]/m,function(){var le='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return ie&&(le+=" checked"),le+=">",le})),z=z.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(le){return"¨A"+le}),U||z.search(/\n{2,}/)>-1?(z=r.subParser("githubCodeBlocks")(z,_,f),z=r.subParser("blockGamut")(z,_,f)):(z=r.subParser("lists")(z,_,f),z=z.replace(/\n$/,""),z=r.subParser("hashHTMLBlocks")(z,_,f),z=z.replace(/\n\n+/g,`

`),v?z=r.subParser("paragraphs")(z,_,f):z=r.subParser("spanGamut")(z,_,f)),z=z.replace("¨A",""),z="<li"+Ie+">"+z+`</li>
`,z}),w=w.replace(/¨0/g,""),f.gListLevel--,E&&(w=w.replace(/\s+$/,"")),w}function g(w,E){if(E==="ol"){var A=w.match(/^ *(\d+)\./);if(A&&A[1]!=="1")return' start="'+A[1]+'"'}return""}function y(w,E,A){var v=_.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,L=_.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,U=E==="ul"?v:L,R="";if(w.search(U)!==-1)(function $(W){var ie=W.search(U),z=g(w,E);ie!==-1?(R+=`

<`+E+z+`>
`+p(W.slice(0,ie),!!A)+"</"+E+`>
`,E=E==="ul"?"ol":"ul",U=E==="ul"?v:L,$(W.slice(ie))):R+=`

<`+E+z+`>
`+p(W,!!A)+"</"+E+`>
`})(w);else{var V=g(w,E);R=`

<`+E+V+`>
`+p(w,!!A)+"</"+E+`>
`}return R}return u=f.converter._dispatch("lists.before",u,_,f),u+="¨0",f.gListLevel?u=u.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(w,E,A){var v=A.search(/[*+-]/g)>-1?"ul":"ol";return y(E,v,!0)}):u=u.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(w,E,A,v){var L=v.search(/[*+-]/g)>-1?"ul":"ol";return y(A,L,!1)}),u=u.replace(/¨0/,""),u=f.converter._dispatch("lists.after",u,_,f),u}),r.subParser("metadata",function(u,_,f){if(!_.metadata)return u;u=f.converter._dispatch("metadata.before",u,_,f);function p(g){f.metadata.raw=g,g=g.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),g=g.replace(/\n {4}/g," "),g.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(y,w,E){return f.metadata.parsed[w]=E,""})}return u=u.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(g,y,w){return p(w),"¨M"}),u=u.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(g,y,w){return y&&(f.metadata.format=y),p(w),"¨M"}),u=u.replace(/¨M/g,""),u=f.converter._dispatch("metadata.after",u,_,f),u}),r.subParser("outdent",function(u,_,f){return u=f.converter._dispatch("outdent.before",u,_,f),u=u.replace(/^(\t|[ ]{1,4})/gm,"¨0"),u=u.replace(/¨0/g,""),u=f.converter._dispatch("outdent.after",u,_,f),u}),r.subParser("paragraphs",function(u,_,f){u=f.converter._dispatch("paragraphs.before",u,_,f),u=u.replace(/^\n+/g,""),u=u.replace(/\n+$/g,"");for(var p=u.split(/\n{2,}/g),g=[],y=p.length,w=0;w<y;w++){var E=p[w];E.search(/¨(K|G)(\d+)\1/g)>=0?g.push(E):E.search(/\S/)>=0&&(E=r.subParser("spanGamut")(E,_,f),E=E.replace(/^([ \t]*)/g,"<p>"),E+="</p>",g.push(E))}for(y=g.length,w=0;w<y;w++){for(var A="",v=g[w],L=!1;/¨(K|G)(\d+)\1/.test(v);){var U=RegExp.$1,R=RegExp.$2;U==="K"?A=f.gHtmlBlocks[R]:L?A=r.subParser("encodeCode")(f.ghCodeBlocks[R].text,_,f):A=f.ghCodeBlocks[R].codeblock,A=A.replace(/\$/g,"$$$$"),v=v.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,A),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(v)&&(L=!0)}g[w]=v}return u=g.join(`
`),u=u.replace(/^\n+/g,""),u=u.replace(/\n+$/g,""),f.converter._dispatch("paragraphs.after",u,_,f)}),r.subParser("runExtension",function(u,_,f,p){if(u.filter)_=u.filter(_,p.converter,f);else if(u.regex){var g=u.regex;g instanceof RegExp||(g=new RegExp(g,"g")),_=_.replace(g,u.replace)}return _}),r.subParser("spanGamut",function(u,_,f){return u=f.converter._dispatch("spanGamut.before",u,_,f),u=r.subParser("codeSpans")(u,_,f),u=r.subParser("escapeSpecialCharsWithinTagAttributes")(u,_,f),u=r.subParser("encodeBackslashEscapes")(u,_,f),u=r.subParser("images")(u,_,f),u=r.subParser("anchors")(u,_,f),u=r.subParser("autoLinks")(u,_,f),u=r.subParser("simplifiedAutoLinks")(u,_,f),u=r.subParser("emoji")(u,_,f),u=r.subParser("underline")(u,_,f),u=r.subParser("italicsAndBold")(u,_,f),u=r.subParser("strikethrough")(u,_,f),u=r.subParser("ellipsis")(u,_,f),u=r.subParser("hashHTMLSpans")(u,_,f),u=r.subParser("encodeAmpsAndAngles")(u,_,f),_.simpleLineBreaks?/\n\n¨K/.test(u)||(u=u.replace(/\n+/g,`<br />
`)):u=u.replace(/  +\n/g,`<br />
`),u=f.converter._dispatch("spanGamut.after",u,_,f),u}),r.subParser("strikethrough",function(u,_,f){function p(g){return _.simplifiedAutoLink&&(g=r.subParser("simplifiedAutoLinks")(g,_,f)),"<del>"+g+"</del>"}return _.strikethrough&&(u=f.converter._dispatch("strikethrough.before",u,_,f),u=u.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(g,y){return p(y)}),u=f.converter._dispatch("strikethrough.after",u,_,f)),u}),r.subParser("stripLinkDefinitions",function(u,_,f){var p=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,g=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;u+="¨0";var y=function(w,E,A,v,L,U,R){return E=E.toLowerCase(),u.toLowerCase().split(E).length-1<2?w:(A.match(/^data:.+?\/.+?;base64,/)?f.gUrls[E]=A.replace(/\s/g,""):f.gUrls[E]=r.subParser("encodeAmpsAndAngles")(A,_,f),U?U+R:(R&&(f.gTitles[E]=R.replace(/"|'/g,"&quot;")),_.parseImgDimensions&&v&&L&&(f.gDimensions[E]={width:v,height:L}),""))};return u=u.replace(g,y),u=u.replace(p,y),u=u.replace(/¨0/,""),u}),r.subParser("tables",function(u,_,f){if(!_.tables)return u;var p=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,g=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function y(L){return/^:[ \t]*--*$/.test(L)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(L)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(L)?' style="text-align:center;"':""}function w(L,U){var R="";return L=L.trim(),(_.tablesHeaderId||_.tableHeaderId)&&(R=' id="'+L.replace(/ /g,"_").toLowerCase()+'"'),L=r.subParser("spanGamut")(L,_,f),"<th"+R+U+">"+L+`</th>
`}function E(L,U){var R=r.subParser("spanGamut")(L,_,f);return"<td"+U+">"+R+`</td>
`}function A(L,U){for(var R=`<table>
<thead>
<tr>
`,V=L.length,$=0;$<V;++$)R+=L[$];for(R+=`</tr>
</thead>
<tbody>
`,$=0;$<U.length;++$){R+=`<tr>
`;for(var W=0;W<V;++W)R+=U[$][W];R+=`</tr>
`}return R+=`</tbody>
</table>
`,R}function v(L){var U,R=L.split(`
`);for(U=0;U<R.length;++U)/^ {0,3}\|/.test(R[U])&&(R[U]=R[U].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(R[U])&&(R[U]=R[U].replace(/\|[ \t]*$/,"")),R[U]=r.subParser("codeSpans")(R[U],_,f);var V=R[0].split("|").map(function(re){return re.trim()}),$=R[1].split("|").map(function(re){return re.trim()}),W=[],ie=[],z=[],Ie=[];for(R.shift(),R.shift(),U=0;U<R.length;++U)R[U].trim()!==""&&W.push(R[U].split("|").map(function(re){return re.trim()}));if(V.length<$.length)return L;for(U=0;U<$.length;++U)z.push(y($[U]));for(U=0;U<V.length;++U)r.helper.isUndefined(z[U])&&(z[U]=""),ie.push(w(V[U],z[U]));for(U=0;U<W.length;++U){for(var le=[],Fe=0;Fe<ie.length;++Fe)r.helper.isUndefined(W[U][Fe]),le.push(E(W[U][Fe],z[Fe]));Ie.push(le)}return A(ie,Ie)}return u=f.converter._dispatch("tables.before",u,_,f),u=u.replace(/\\(\|)/g,r.helper.escapeCharactersCallback),u=u.replace(p,v),u=u.replace(g,v),u=f.converter._dispatch("tables.after",u,_,f),u}),r.subParser("underline",function(u,_,f){return _.underline&&(u=f.converter._dispatch("underline.before",u,_,f),_.literalMidWordUnderscores?(u=u.replace(/\b___(\S[\s\S]*?)___\b/g,function(p,g){return"<u>"+g+"</u>"}),u=u.replace(/\b__(\S[\s\S]*?)__\b/g,function(p,g){return"<u>"+g+"</u>"})):(u=u.replace(/___(\S[\s\S]*?)___/g,function(p,g){return/\S$/.test(g)?"<u>"+g+"</u>":p}),u=u.replace(/__(\S[\s\S]*?)__/g,function(p,g){return/\S$/.test(g)?"<u>"+g+"</u>":p})),u=u.replace(/(_)/g,r.helper.escapeCharactersCallback),u=f.converter._dispatch("underline.after",u,_,f)),u}),r.subParser("unescapeSpecialChars",function(u,_,f){return u=f.converter._dispatch("unescapeSpecialChars.before",u,_,f),u=u.replace(/¨E(\d+)E/g,function(p,g){var y=parseInt(g);return String.fromCharCode(y)}),u=f.converter._dispatch("unescapeSpecialChars.after",u,_,f),u}),r.subParser("makeMarkdown.blockquote",function(u,_){var f="";if(u.hasChildNodes())for(var p=u.childNodes,g=p.length,y=0;y<g;++y){var w=r.subParser("makeMarkdown.node")(p[y],_);w!==""&&(f+=w)}return f=f.trim(),f="> "+f.split(`
`).join(`
> `),f}),r.subParser("makeMarkdown.codeBlock",function(u,_){var f=u.getAttribute("language"),p=u.getAttribute("precodenum");return"```"+f+`
`+_.preList[p]+"\n```"}),r.subParser("makeMarkdown.codeSpan",function(u){return"`"+u.innerHTML+"`"}),r.subParser("makeMarkdown.emphasis",function(u,_){var f="";if(u.hasChildNodes()){f+="*";for(var p=u.childNodes,g=p.length,y=0;y<g;++y)f+=r.subParser("makeMarkdown.node")(p[y],_);f+="*"}return f}),r.subParser("makeMarkdown.header",function(u,_,f){var p=new Array(f+1).join("#"),g="";if(u.hasChildNodes()){g=p+" ";for(var y=u.childNodes,w=y.length,E=0;E<w;++E)g+=r.subParser("makeMarkdown.node")(y[E],_)}return g}),r.subParser("makeMarkdown.hr",function(){return"---"}),r.subParser("makeMarkdown.image",function(u){var _="";return u.hasAttribute("src")&&(_+="!["+u.getAttribute("alt")+"](",_+="<"+u.getAttribute("src")+">",u.hasAttribute("width")&&u.hasAttribute("height")&&(_+=" ="+u.getAttribute("width")+"x"+u.getAttribute("height")),u.hasAttribute("title")&&(_+=' "'+u.getAttribute("title")+'"'),_+=")"),_}),r.subParser("makeMarkdown.links",function(u,_){var f="";if(u.hasChildNodes()&&u.hasAttribute("href")){var p=u.childNodes,g=p.length;f="[";for(var y=0;y<g;++y)f+=r.subParser("makeMarkdown.node")(p[y],_);f+="](",f+="<"+u.getAttribute("href")+">",u.hasAttribute("title")&&(f+=' "'+u.getAttribute("title")+'"'),f+=")"}return f}),r.subParser("makeMarkdown.list",function(u,_,f){var p="";if(!u.hasChildNodes())return"";for(var g=u.childNodes,y=g.length,w=u.getAttribute("start")||1,E=0;E<y;++E)if(!(typeof g[E].tagName>"u"||g[E].tagName.toLowerCase()!=="li")){var A="";f==="ol"?A=w.toString()+". ":A="- ",p+=A+r.subParser("makeMarkdown.listItem")(g[E],_),++w}return p+=`
<!-- -->
`,p.trim()}),r.subParser("makeMarkdown.listItem",function(u,_){for(var f="",p=u.childNodes,g=p.length,y=0;y<g;++y)f+=r.subParser("makeMarkdown.node")(p[y],_);return/\n$/.test(f)?f=f.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):f+=`
`,f}),r.subParser("makeMarkdown.node",function(u,_,f){f=f||!1;var p="";if(u.nodeType===3)return r.subParser("makeMarkdown.txt")(u,_);if(u.nodeType===8)return"<!--"+u.data+`-->

`;if(u.nodeType!==1)return"";var g=u.tagName.toLowerCase();switch(g){case"h1":f||(p=r.subParser("makeMarkdown.header")(u,_,1)+`

`);break;case"h2":f||(p=r.subParser("makeMarkdown.header")(u,_,2)+`

`);break;case"h3":f||(p=r.subParser("makeMarkdown.header")(u,_,3)+`

`);break;case"h4":f||(p=r.subParser("makeMarkdown.header")(u,_,4)+`

`);break;case"h5":f||(p=r.subParser("makeMarkdown.header")(u,_,5)+`

`);break;case"h6":f||(p=r.subParser("makeMarkdown.header")(u,_,6)+`

`);break;case"p":f||(p=r.subParser("makeMarkdown.paragraph")(u,_)+`

`);break;case"blockquote":f||(p=r.subParser("makeMarkdown.blockquote")(u,_)+`

`);break;case"hr":f||(p=r.subParser("makeMarkdown.hr")(u,_)+`

`);break;case"ol":f||(p=r.subParser("makeMarkdown.list")(u,_,"ol")+`

`);break;case"ul":f||(p=r.subParser("makeMarkdown.list")(u,_,"ul")+`

`);break;case"precode":f||(p=r.subParser("makeMarkdown.codeBlock")(u,_)+`

`);break;case"pre":f||(p=r.subParser("makeMarkdown.pre")(u,_)+`

`);break;case"table":f||(p=r.subParser("makeMarkdown.table")(u,_)+`

`);break;case"code":p=r.subParser("makeMarkdown.codeSpan")(u,_);break;case"em":case"i":p=r.subParser("makeMarkdown.emphasis")(u,_);break;case"strong":case"b":p=r.subParser("makeMarkdown.strong")(u,_);break;case"del":p=r.subParser("makeMarkdown.strikethrough")(u,_);break;case"a":p=r.subParser("makeMarkdown.links")(u,_);break;case"img":p=r.subParser("makeMarkdown.image")(u,_);break;default:p=u.outerHTML+`

`}return p}),r.subParser("makeMarkdown.paragraph",function(u,_){var f="";if(u.hasChildNodes())for(var p=u.childNodes,g=p.length,y=0;y<g;++y)f+=r.subParser("makeMarkdown.node")(p[y],_);return f=f.trim(),f}),r.subParser("makeMarkdown.pre",function(u,_){var f=u.getAttribute("prenum");return"<pre>"+_.preList[f]+"</pre>"}),r.subParser("makeMarkdown.strikethrough",function(u,_){var f="";if(u.hasChildNodes()){f+="~~";for(var p=u.childNodes,g=p.length,y=0;y<g;++y)f+=r.subParser("makeMarkdown.node")(p[y],_);f+="~~"}return f}),r.subParser("makeMarkdown.strong",function(u,_){var f="";if(u.hasChildNodes()){f+="**";for(var p=u.childNodes,g=p.length,y=0;y<g;++y)f+=r.subParser("makeMarkdown.node")(p[y],_);f+="**"}return f}),r.subParser("makeMarkdown.table",function(u,_){var f="",p=[[],[]],g=u.querySelectorAll("thead>tr>th"),y=u.querySelectorAll("tbody>tr"),w,E;for(w=0;w<g.length;++w){var A=r.subParser("makeMarkdown.tableCell")(g[w],_),v="---";if(g[w].hasAttribute("style")){var L=g[w].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(L){case"text-align:left;":v=":---";break;case"text-align:right;":v="---:";break;case"text-align:center;":v=":---:";break}}p[0][w]=A.trim(),p[1][w]=v}for(w=0;w<y.length;++w){var U=p.push([])-1,R=y[w].getElementsByTagName("td");for(E=0;E<g.length;++E){var V=" ";typeof R[E]<"u"&&(V=r.subParser("makeMarkdown.tableCell")(R[E],_)),p[U].push(V)}}var $=3;for(w=0;w<p.length;++w)for(E=0;E<p[w].length;++E){var W=p[w][E].length;W>$&&($=W)}for(w=0;w<p.length;++w){for(E=0;E<p[w].length;++E)w===1?p[w][E].slice(-1)===":"?p[w][E]=r.helper.padEnd(p[w][E].slice(-1),$-1,"-")+":":p[w][E]=r.helper.padEnd(p[w][E],$,"-"):p[w][E]=r.helper.padEnd(p[w][E],$);f+="| "+p[w].join(" | ")+` |
`}return f.trim()}),r.subParser("makeMarkdown.tableCell",function(u,_){var f="";if(!u.hasChildNodes())return"";for(var p=u.childNodes,g=p.length,y=0;y<g;++y)f+=r.subParser("makeMarkdown.node")(p[y],_,!0);return f.trim()}),r.subParser("makeMarkdown.txt",function(u){var _=u.nodeValue;return _=_.replace(/ +/g," "),_=_.replace(/¨NBSP;/g," "),_=r.helper.unescapeHTMLEntities(_),_=_.replace(/([*_~|`])/g,"\\$1"),_=_.replace(/^(\s*)>/g,"\\$1>"),_=_.replace(/^#/gm,"\\#"),_=_.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),_=_.replace(/^( {0,3}\d+)\./gm,"$1\\."),_=_.replace(/^( {0,3})([+-])/gm,"$1\\$2"),_=_.replace(/]([\s]*)\(/g,"\\]$1\\("),_=_.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),_});var X=this;n.exports?n.exports=r:X.showdown=r}).call(Op)})(gd);var Mp=gd.exports;const Vp=Lp(Mp);/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:_d,setPrototypeOf:vc,isFrozen:Up,getPrototypeOf:Fp,getOwnPropertyDescriptor:xp}=Object;let{freeze:tt,seal:Et,create:ya}=Object,{apply:wa,construct:Ea}=typeof Reflect<"u"&&Reflect;tt||(tt=function(e){return e});Et||(Et=function(e){return e});wa||(wa=function(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),i=2;i<r;i++)s[i-2]=arguments[i];return e.apply(t,s)});Ea||(Ea=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return new e(...r)});const Ti=nt(Array.prototype.forEach),Bp=nt(Array.prototype.lastIndexOf),bc=nt(Array.prototype.pop),ps=nt(Array.prototype.push),jp=nt(Array.prototype.splice),Di=nt(String.prototype.toLowerCase),Yo=nt(String.prototype.toString),Jo=nt(String.prototype.match),ms=nt(String.prototype.replace),zp=nt(String.prototype.indexOf),$p=nt(String.prototype.trim),It=nt(Object.prototype.hasOwnProperty),Je=nt(RegExp.prototype.test),gs=Hp(TypeError);function nt(n){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return wa(n,e,r)}}function Hp(n){return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Ea(n,t)}}function oe(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Di;vc&&vc(n,null);let r=e.length;for(;r--;){let s=e[r];if(typeof s=="string"){const i=t(s);i!==s&&(Up(e)||(e[r]=i),s=i)}n[s]=!0}return n}function qp(n){for(let e=0;e<n.length;e++)It(n,e)||(n[e]=null);return n}function Jt(n){const e=ya(null);for(const[t,r]of _d(n))It(n,t)&&(Array.isArray(r)?e[t]=qp(r):r&&typeof r=="object"&&r.constructor===Object?e[t]=Jt(r):e[t]=r);return e}function _s(n,e){for(;n!==null;){const r=xp(n,e);if(r){if(r.get)return nt(r.get);if(typeof r.value=="function")return nt(r.value)}n=Fp(n)}function t(){return null}return t}const Ic=tt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Zo=tt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ea=tt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Gp=tt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ta=tt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Wp=tt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ac=tt(["#text"]),Rc=tt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),na=tt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Sc=tt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),vi=tt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Kp=Et(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Qp=Et(/<%[\w\W]*|[\w\W]*%>/gm),Xp=Et(/\$\{[\w\W]*/gm),Yp=Et(/^data-[\-\w.\u00B7-\uFFFF]+$/),Jp=Et(/^aria-[\-\w]+$/),yd=Et(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Zp=Et(/^(?:\w+script|data):/i),em=Et(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),wd=Et(/^html$/i),tm=Et(/^[a-z][.\w]*(-[.\w]+)+$/i);var kc=Object.freeze({__proto__:null,ARIA_ATTR:Jp,ATTR_WHITESPACE:em,CUSTOM_ELEMENT:tm,DATA_ATTR:Yp,DOCTYPE_NAME:wd,ERB_EXPR:Qp,IS_ALLOWED_URI:yd,IS_SCRIPT_OR_DATA:Zp,MUSTACHE_EXPR:Kp,TMPLIT_EXPR:Xp});const ys={element:1,text:3,progressingInstruction:7,comment:8,document:9},nm=function(){return typeof window>"u"?null:window},rm=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(r=t.getAttribute(s));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Pc=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Ed(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:nm();const e=K=>Ed(K);if(e.version="3.3.0",e.removed=[],!n||!n.document||n.document.nodeType!==ys.document||!n.Element)return e.isSupported=!1,e;let{document:t}=n;const r=t,s=r.currentScript,{DocumentFragment:i,HTMLTemplateElement:a,Node:c,Element:d,NodeFilter:m,NamedNodeMap:T=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:I,DOMParser:S,trustedTypes:C}=n,O=d.prototype,B=_s(O,"cloneNode"),F=_s(O,"remove"),J=_s(O,"nextSibling"),Y=_s(O,"childNodes"),X=_s(O,"parentNode");if(typeof a=="function"){const K=t.createElement("template");K.content&&K.content.ownerDocument&&(t=K.content.ownerDocument)}let u,_="";const{implementation:f,createNodeIterator:p,createDocumentFragment:g,getElementsByTagName:y}=t,{importNode:w}=r;let E=Pc();e.isSupported=typeof _d=="function"&&typeof X=="function"&&f&&f.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:A,ERB_EXPR:v,TMPLIT_EXPR:L,DATA_ATTR:U,ARIA_ATTR:R,IS_SCRIPT_OR_DATA:V,ATTR_WHITESPACE:$,CUSTOM_ELEMENT:W}=kc;let{IS_ALLOWED_URI:ie}=kc,z=null;const Ie=oe({},[...Ic,...Zo,...ea,...ta,...Ac]);let le=null;const Fe=oe({},[...Rc,...na,...Sc,...vi]);let re=Object.seal(ya(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),_e=null,Ae=null;const Te=Object.seal(ya(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ht=!0,qt=!0,$n=!1,Gt=!0,ct=!1,Hn=!0,Wt=!1,qn=!1,Gn=!1,Kt=!1,ke=!1,De=!1,Wn=!0,si=!1;const ii="user-content-";let Xr=!0,vt=!1,Qt={},Xt=null;const _r=oe({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let oi=null;const ai=oe({},["audio","video","img","source","image","track"]);let yr=null;const Yr=oe({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ct="http://www.w3.org/1998/Math/MathML",hn="http://www.w3.org/2000/svg",lt="http://www.w3.org/1999/xhtml";let rt=lt,wr=!1,fn=null;const ui=oe({},[Ct,hn,lt],Yo);let Nt=oe({},["mi","mo","mn","ms","mtext"]),Kn=oe({},["annotation-xml"]);const $e=oe({},["title","style","font","a","script"]);let pn=null;const Qn=["application/xhtml+xml","text/html"],Xn="text/html";let Oe=null,mn=null;const gn=t.createElement("form"),ci=function(k){return k instanceof RegExp||k instanceof Function},Jr=function(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(mn&&mn===k)){if((!k||typeof k!="object")&&(k={}),k=Jt(k),pn=Qn.indexOf(k.PARSER_MEDIA_TYPE)===-1?Xn:k.PARSER_MEDIA_TYPE,Oe=pn==="application/xhtml+xml"?Yo:Di,z=It(k,"ALLOWED_TAGS")?oe({},k.ALLOWED_TAGS,Oe):Ie,le=It(k,"ALLOWED_ATTR")?oe({},k.ALLOWED_ATTR,Oe):Fe,fn=It(k,"ALLOWED_NAMESPACES")?oe({},k.ALLOWED_NAMESPACES,Yo):ui,yr=It(k,"ADD_URI_SAFE_ATTR")?oe(Jt(Yr),k.ADD_URI_SAFE_ATTR,Oe):Yr,oi=It(k,"ADD_DATA_URI_TAGS")?oe(Jt(ai),k.ADD_DATA_URI_TAGS,Oe):ai,Xt=It(k,"FORBID_CONTENTS")?oe({},k.FORBID_CONTENTS,Oe):_r,_e=It(k,"FORBID_TAGS")?oe({},k.FORBID_TAGS,Oe):Jt({}),Ae=It(k,"FORBID_ATTR")?oe({},k.FORBID_ATTR,Oe):Jt({}),Qt=It(k,"USE_PROFILES")?k.USE_PROFILES:!1,Ht=k.ALLOW_ARIA_ATTR!==!1,qt=k.ALLOW_DATA_ATTR!==!1,$n=k.ALLOW_UNKNOWN_PROTOCOLS||!1,Gt=k.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ct=k.SAFE_FOR_TEMPLATES||!1,Hn=k.SAFE_FOR_XML!==!1,Wt=k.WHOLE_DOCUMENT||!1,Kt=k.RETURN_DOM||!1,ke=k.RETURN_DOM_FRAGMENT||!1,De=k.RETURN_TRUSTED_TYPE||!1,Gn=k.FORCE_BODY||!1,Wn=k.SANITIZE_DOM!==!1,si=k.SANITIZE_NAMED_PROPS||!1,Xr=k.KEEP_CONTENT!==!1,vt=k.IN_PLACE||!1,ie=k.ALLOWED_URI_REGEXP||yd,rt=k.NAMESPACE||lt,Nt=k.MATHML_TEXT_INTEGRATION_POINTS||Nt,Kn=k.HTML_INTEGRATION_POINTS||Kn,re=k.CUSTOM_ELEMENT_HANDLING||{},k.CUSTOM_ELEMENT_HANDLING&&ci(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(re.tagNameCheck=k.CUSTOM_ELEMENT_HANDLING.tagNameCheck),k.CUSTOM_ELEMENT_HANDLING&&ci(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(re.attributeNameCheck=k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),k.CUSTOM_ELEMENT_HANDLING&&typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(re.allowCustomizedBuiltInElements=k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ct&&(qt=!1),ke&&(Kt=!0),Qt&&(z=oe({},Ac),le=[],Qt.html===!0&&(oe(z,Ic),oe(le,Rc)),Qt.svg===!0&&(oe(z,Zo),oe(le,na),oe(le,vi)),Qt.svgFilters===!0&&(oe(z,ea),oe(le,na),oe(le,vi)),Qt.mathMl===!0&&(oe(z,ta),oe(le,Sc),oe(le,vi))),k.ADD_TAGS&&(typeof k.ADD_TAGS=="function"?Te.tagCheck=k.ADD_TAGS:(z===Ie&&(z=Jt(z)),oe(z,k.ADD_TAGS,Oe))),k.ADD_ATTR&&(typeof k.ADD_ATTR=="function"?Te.attributeCheck=k.ADD_ATTR:(le===Fe&&(le=Jt(le)),oe(le,k.ADD_ATTR,Oe))),k.ADD_URI_SAFE_ATTR&&oe(yr,k.ADD_URI_SAFE_ATTR,Oe),k.FORBID_CONTENTS&&(Xt===_r&&(Xt=Jt(Xt)),oe(Xt,k.FORBID_CONTENTS,Oe)),Xr&&(z["#text"]=!0),Wt&&oe(z,["html","head","body"]),z.table&&(oe(z,["tbody"]),delete _e.tbody),k.TRUSTED_TYPES_POLICY){if(typeof k.TRUSTED_TYPES_POLICY.createHTML!="function")throw gs('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof k.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw gs('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');u=k.TRUSTED_TYPES_POLICY,_=u.createHTML("")}else u===void 0&&(u=rm(C,s)),u!==null&&typeof _=="string"&&(_=u.createHTML(""));tt&&tt(k),mn=k}},Yn=oe({},[...Zo,...ea,...Gp]),Zr=oe({},[...ta,...Wp]),li=function(k){let x=X(k);(!x||!x.tagName)&&(x={namespaceURI:rt,tagName:"template"});const G=Di(k.tagName),he=Di(x.tagName);return fn[k.namespaceURI]?k.namespaceURI===hn?x.namespaceURI===lt?G==="svg":x.namespaceURI===Ct?G==="svg"&&(he==="annotation-xml"||Nt[he]):!!Yn[G]:k.namespaceURI===Ct?x.namespaceURI===lt?G==="math":x.namespaceURI===hn?G==="math"&&Kn[he]:!!Zr[G]:k.namespaceURI===lt?x.namespaceURI===hn&&!Kn[he]||x.namespaceURI===Ct&&!Nt[he]?!1:!Zr[G]&&($e[G]||!Yn[G]):!!(pn==="application/xhtml+xml"&&fn[k.namespaceURI]):!1},st=function(k){ps(e.removed,{element:k});try{X(k).removeChild(k)}catch{F(k)}},dt=function(k,x){try{ps(e.removed,{attribute:x.getAttributeNode(k),from:x})}catch{ps(e.removed,{attribute:null,from:x})}if(x.removeAttribute(k),k==="is")if(Kt||ke)try{st(x)}catch{}else try{x.setAttribute(k,"")}catch{}},di=function(k){let x=null,G=null;if(Gn)k="<remove></remove>"+k;else{const Re=Jo(k,/^[\r\n\t ]+/);G=Re&&Re[0]}pn==="application/xhtml+xml"&&rt===lt&&(k='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+k+"</body></html>");const he=u?u.createHTML(k):k;if(rt===lt)try{x=new S().parseFromString(he,pn)}catch{}if(!x||!x.documentElement){x=f.createDocument(rt,"template",null);try{x.documentElement.innerHTML=wr?_:he}catch{}}const Le=x.body||x.documentElement;return k&&G&&Le.insertBefore(t.createTextNode(G),Le.childNodes[0]||null),rt===lt?y.call(x,Wt?"html":"body")[0]:Wt?x.documentElement:Le},bt=function(k){return p.call(k.ownerDocument||k,k,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT|m.SHOW_PROCESSING_INSTRUCTION|m.SHOW_CDATA_SECTION,null)},Er=function(k){return k instanceof I&&(typeof k.nodeName!="string"||typeof k.textContent!="string"||typeof k.removeChild!="function"||!(k.attributes instanceof T)||typeof k.removeAttribute!="function"||typeof k.setAttribute!="function"||typeof k.namespaceURI!="string"||typeof k.insertBefore!="function"||typeof k.hasChildNodes!="function")},es=function(k){return typeof c=="function"&&k instanceof c};function ht(K,k,x){Ti(K,G=>{G.call(e,k,x,mn)})}const Tr=function(k){let x=null;if(ht(E.beforeSanitizeElements,k,null),Er(k))return st(k),!0;const G=Oe(k.nodeName);if(ht(E.uponSanitizeElement,k,{tagName:G,allowedTags:z}),Hn&&k.hasChildNodes()&&!es(k.firstElementChild)&&Je(/<[/\w!]/g,k.innerHTML)&&Je(/<[/\w!]/g,k.textContent)||k.nodeType===ys.progressingInstruction||Hn&&k.nodeType===ys.comment&&Je(/<[/\w]/g,k.data))return st(k),!0;if(!(Te.tagCheck instanceof Function&&Te.tagCheck(G))&&(!z[G]||_e[G])){if(!_e[G]&&hi(G)&&(re.tagNameCheck instanceof RegExp&&Je(re.tagNameCheck,G)||re.tagNameCheck instanceof Function&&re.tagNameCheck(G)))return!1;if(Xr&&!Xt[G]){const he=X(k)||k.parentNode,Le=Y(k)||k.childNodes;if(Le&&he){const Re=Le.length;for(let He=Re-1;He>=0;--He){const gt=B(Le[He],!0);gt.__removalCount=(k.__removalCount||0)+1,he.insertBefore(gt,J(k))}}}return st(k),!0}return k instanceof d&&!li(k)||(G==="noscript"||G==="noembed"||G==="noframes")&&Je(/<\/no(script|embed|frames)/i,k.innerHTML)?(st(k),!0):(ct&&k.nodeType===ys.text&&(x=k.textContent,Ti([A,v,L],he=>{x=ms(x,he," ")}),k.textContent!==x&&(ps(e.removed,{element:k.cloneNode()}),k.textContent=x)),ht(E.afterSanitizeElements,k,null),!1)},ts=function(k,x,G){if(Wn&&(x==="id"||x==="name")&&(G in t||G in gn))return!1;if(!(qt&&!Ae[x]&&Je(U,x))){if(!(Ht&&Je(R,x))){if(!(Te.attributeCheck instanceof Function&&Te.attributeCheck(x,k))){if(!le[x]||Ae[x]){if(!(hi(k)&&(re.tagNameCheck instanceof RegExp&&Je(re.tagNameCheck,k)||re.tagNameCheck instanceof Function&&re.tagNameCheck(k))&&(re.attributeNameCheck instanceof RegExp&&Je(re.attributeNameCheck,x)||re.attributeNameCheck instanceof Function&&re.attributeNameCheck(x,k))||x==="is"&&re.allowCustomizedBuiltInElements&&(re.tagNameCheck instanceof RegExp&&Je(re.tagNameCheck,G)||re.tagNameCheck instanceof Function&&re.tagNameCheck(G))))return!1}else if(!yr[x]){if(!Je(ie,ms(G,$,""))){if(!((x==="src"||x==="xlink:href"||x==="href")&&k!=="script"&&zp(G,"data:")===0&&oi[k])){if(!($n&&!Je(V,ms(G,$,"")))){if(G)return!1}}}}}}}return!0},hi=function(k){return k!=="annotation-xml"&&Jo(k,W)},ns=function(k){ht(E.beforeSanitizeAttributes,k,null);const{attributes:x}=k;if(!x||Er(k))return;const G={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:le,forceKeepAttr:void 0};let he=x.length;for(;he--;){const Le=x[he],{name:Re,namespaceURI:He,value:gt}=Le,Yt=Oe(Re),Jn=gt;let Pe=Re==="value"?Jn:$p(Jn);if(G.attrName=Yt,G.attrValue=Pe,G.keepAttr=!0,G.forceKeepAttr=void 0,ht(E.uponSanitizeAttribute,k,G),Pe=G.attrValue,si&&(Yt==="id"||Yt==="name")&&(dt(Re,k),Pe=ii+Pe),Hn&&Je(/((--!?|])>)|<\/(style|title|textarea)/i,Pe)){dt(Re,k);continue}if(Yt==="attributename"&&Jo(Pe,"href")){dt(Re,k);continue}if(G.forceKeepAttr)continue;if(!G.keepAttr){dt(Re,k);continue}if(!Gt&&Je(/\/>/i,Pe)){dt(Re,k);continue}ct&&Ti([A,v,L],ss=>{Pe=ms(Pe,ss," ")});const rs=Oe(k.nodeName);if(!ts(rs,Yt,Pe)){dt(Re,k);continue}if(u&&typeof C=="object"&&typeof C.getAttributeType=="function"&&!He)switch(C.getAttributeType(rs,Yt)){case"TrustedHTML":{Pe=u.createHTML(Pe);break}case"TrustedScriptURL":{Pe=u.createScriptURL(Pe);break}}if(Pe!==Jn)try{He?k.setAttributeNS(He,Re,Pe):k.setAttribute(Re,Pe),Er(k)?st(k):bc(e.removed)}catch{dt(Re,k)}}ht(E.afterSanitizeAttributes,k,null)},$o=function K(k){let x=null;const G=bt(k);for(ht(E.beforeSanitizeShadowDOM,k,null);x=G.nextNode();)ht(E.uponSanitizeShadowNode,x,null),Tr(x),ns(x),x.content instanceof i&&K(x.content);ht(E.afterSanitizeShadowDOM,k,null)};return e.sanitize=function(K){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=null,G=null,he=null,Le=null;if(wr=!K,wr&&(K="<!-->"),typeof K!="string"&&!es(K))if(typeof K.toString=="function"){if(K=K.toString(),typeof K!="string")throw gs("dirty is not a string, aborting")}else throw gs("toString is not a function");if(!e.isSupported)return K;if(qn||Jr(k),e.removed=[],typeof K=="string"&&(vt=!1),vt){if(K.nodeName){const gt=Oe(K.nodeName);if(!z[gt]||_e[gt])throw gs("root node is forbidden and cannot be sanitized in-place")}}else if(K instanceof c)x=di("<!---->"),G=x.ownerDocument.importNode(K,!0),G.nodeType===ys.element&&G.nodeName==="BODY"||G.nodeName==="HTML"?x=G:x.appendChild(G);else{if(!Kt&&!ct&&!Wt&&K.indexOf("<")===-1)return u&&De?u.createHTML(K):K;if(x=di(K),!x)return Kt?null:De?_:""}x&&Gn&&st(x.firstChild);const Re=bt(vt?K:x);for(;he=Re.nextNode();)Tr(he),ns(he),he.content instanceof i&&$o(he.content);if(vt)return K;if(Kt){if(ke)for(Le=g.call(x.ownerDocument);x.firstChild;)Le.appendChild(x.firstChild);else Le=x;return(le.shadowroot||le.shadowrootmode)&&(Le=w.call(r,Le,!0)),Le}let He=Wt?x.outerHTML:x.innerHTML;return Wt&&z["!doctype"]&&x.ownerDocument&&x.ownerDocument.doctype&&x.ownerDocument.doctype.name&&Je(wd,x.ownerDocument.doctype.name)&&(He="<!DOCTYPE "+x.ownerDocument.doctype.name+`>
`+He),ct&&Ti([A,v,L],gt=>{He=ms(He,gt," ")}),u&&De?u.createHTML(He):He},e.setConfig=function(){let K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Jr(K),qn=!0},e.clearConfig=function(){mn=null,qn=!1},e.isValidAttribute=function(K,k,x){mn||Jr({});const G=Oe(K),he=Oe(k);return ts(G,he,x)},e.addHook=function(K,k){typeof k=="function"&&ps(E[K],k)},e.removeHook=function(K,k){if(k!==void 0){const x=Bp(E[K],k);return x===-1?void 0:jp(E[K],x,1)[0]}return bc(E[K])},e.removeHooks=function(K){E[K]=[]},e.removeAllHooks=function(){E=Pc()},e}var sm=Ed();function Td({idPrefix:n,name:e,avatarUrl:t,position:r,placeholderText:s}){const i={"bottom-left":{toggle:"bottom-6 left-6",widget:"bottom-24 left-6 origin-bottom-left"},"bottom-right":{toggle:"bottom-6 right-6",widget:"bottom-24 right-6 origin-bottom-right"}},a=i[r]||i["bottom-left"];return`
        <!-- Botão flutuante para abrir o chat -->
        <button id="${n}-toggle" class="fixed ${a.toggle} w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-[9999] transition-transform hover:scale-110" aria-label="Abrir assistente ${e}">
            <img src="${t}" alt="Assistente ${e}" class="w-full h-full rounded-full object-cover">
        </button>

        <!-- Janela do Chatbot -->
        <div id="${n}-widget" class="hidden fixed ${a.widget} w-full max-w-sm h-[70vh] max-h-[600px] bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700 flex flex-col z-[9998] transition-all duration-300">
            <!-- Cabeçalho -->
            <div class="flex-shrink-0 flex justify-between items-center p-4 border-b border-slate-700">
                <h3 class="text-lg font-bold text-white flex items-center"><img src="${t}" class="w-8 h-8 rounded-full mr-3">Assistente ${e}</h3>
                <button id="${n}-close" class="text-slate-400 hover:text-white" aria-label="Fechar assistente"><i class="fas fa-times text-xl"></i></button>
            </div>

            <!-- Mensagens -->
            <div id="${n}-messages" class="flex-grow p-4 space-y-4 overflow-y-auto">
                <!-- Mensagens serão inseridas aqui -->
            </div>

            <!-- Sugestões -->
            <div id="${n}-suggestions" class="flex-shrink-0 p-4 pt-0 flex flex-wrap gap-2">
                <!-- Sugestões de perguntas serão inseridas aqui -->
            </div>

            <!-- Formulário de Input -->
            <div class="flex-shrink-0 p-4 border-t border-slate-700">
                <form id="${n}-input-form" class="flex items-center gap-2">
                    <input type="text" id="${n}-input" placeholder="${s}" class="form-input flex-grow" autocomplete="off" required>
                    <button type="submit" class="bg-amber-500 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" aria-label="Enviar mensagem">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    `}const im=()=>{};var Cc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},om=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],d=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,d=s+2<n.length,m=d?n[s+2]:0,T=i>>2,I=(i&3)<<4|c>>4;let S=(c&15)<<2|m>>6,C=m&63;d||(C=64,a||(S=64)),r.push(t[T],t[I],t[S],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):om(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const I=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||m==null||I==null)throw new am;const S=i<<2|c>>4;if(r.push(S),m!==64){const C=c<<4&240|m>>2;if(r.push(C),I!==64){const O=m<<6&192|I;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class am extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const um=function(n){const e=vd(n);return bd.encodeByteArray(e,!0)},$i=function(n){return um(n).replace(/\./g,"")},Id=function(n){try{return bd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=()=>cm().__FIREBASE_DEFAULTS__,dm=()=>{if(typeof process>"u"||typeof Cc>"u")return;const n=Cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Id(n[1]);return e&&JSON.parse(e)},po=()=>{try{return im()||lm()||dm()||hm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ad=n=>{var e,t;return(t=(e=po())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ka=n=>{const e=Ad(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Rd=()=>{var n;return(n=po())==null?void 0:n.config},Sd=n=>{var e;return(e=po())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mo(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[$i(JSON.stringify(t)),$i(JSON.stringify(a)),""].join(".")}const Rs={};function pm(){const n={prod:[],emulator:[]};for(const e of Object.keys(Rs))Rs[e]?n.emulator.push(e):n.prod.push(e);return n}function mm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Nc=!1;function go(n,e){if(typeof window>"u"||typeof document>"u"||!zt(window.location.host)||Rs[n]===e||Rs[n]||Nc)return;Rs[n]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",i=pm().prod.length>0;function a(){const S=document.getElementById(r);S&&S.remove()}function c(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function d(S,C){S.setAttribute("width","24"),S.setAttribute("id",C),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function m(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Nc=!0,a()},S}function T(S,C){S.setAttribute("id",C),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function I(){const S=mm(r),C=t("text"),O=document.getElementById(C)||document.createElement("span"),B=t("learnmore"),F=document.getElementById(B)||document.createElement("a"),J=t("preprendIcon"),Y=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const X=S.element;c(X),T(F,B);const u=m();d(Y,J),X.append(Y,O,F,u),document.body.appendChild(X)}i?(O.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function _m(){var e;const n=(e=po())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ym(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Em(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tm(){const n=Ye();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vm(){return!_m()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bm(){try{return typeof indexedDB=="object"}catch{return!1}}function Im(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="FirebaseError";class Pt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Am,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Rm(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Pt(s,c,r)}}function Rm(n,e){return n.replace(Sm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Sm=/\{\$([^}]+)}/g;function km(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ar(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Dc(i)&&Dc(a)){if(!ar(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Dc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Es(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ts(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Pm(n,e){const t=new Cm(n,e);return t.subscribe.bind(t)}class Cm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Nm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ra),s.error===void 0&&(s.error=ra),s.complete===void 0&&(s.complete=ra);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ra(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n){return n&&n._delegate?n._delegate:n}class sn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new fm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lm(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Om(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Om(n){return n===nr?void 0:n}function Lm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const Vm={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Um=ae.INFO,Fm={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},xm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Fm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=Um,this._logHandler=xm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Bm=(n,e)=>e.some(t=>n instanceof t);let Oc,Lc;function jm(){return Oc||(Oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zm(){return Lc||(Lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pd=new WeakMap,Ta=new WeakMap,Cd=new WeakMap,sa=new WeakMap,Xa=new WeakMap;function $m(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Pn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Pd.set(t,n)}).catch(()=>{}),Xa.set(e,n),e}function Hm(n){if(Ta.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ta.set(n,e)}let va={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ta.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qm(n){va=n(va)}function Gm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ia(this),e,...t);return Cd.set(r,e.sort?e.sort():[e]),Pn(r)}:zm().includes(n)?function(...e){return n.apply(ia(this),e),Pn(Pd.get(this))}:function(...e){return Pn(n.apply(ia(this),e))}}function Wm(n){return typeof n=="function"?Gm(n):(n instanceof IDBTransaction&&Hm(n),Bm(n,jm())?new Proxy(n,va):n)}function Pn(n){if(n instanceof IDBRequest)return $m(n);if(sa.has(n))return sa.get(n);const e=Wm(n);return e!==n&&(sa.set(n,e),Xa.set(e,n)),e}const ia=n=>Xa.get(n);function Km(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Pn(a);return r&&a.addEventListener("upgradeneeded",d=>{r(Pn(a.result),d.oldVersion,d.newVersion,Pn(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{i&&d.addEventListener("close",()=>i()),s&&d.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const Qm=["get","getKey","getAll","getAllKeys","count"],Xm=["put","add","delete","clear"],oa=new Map;function Mc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Xm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qm.includes(t)))return;const i=async function(a,...c){const d=this.transaction(a,s?"readwrite":"readonly");let m=d.store;return r&&(m=m.index(c.shift())),(await Promise.all([m[t](...c),s&&d.done]))[0]};return oa.set(e,i),i}qm(n=>({...n,get:(e,t,r)=>Mc(e,t)||n.get(e,t,r),has:(e,t)=>!!Mc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Jm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ba="@firebase/app",Vc="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new Qa("@firebase/app"),Zm="@firebase/app-compat",eg="@firebase/analytics-compat",tg="@firebase/analytics",ng="@firebase/app-check-compat",rg="@firebase/app-check",sg="@firebase/auth",ig="@firebase/auth-compat",og="@firebase/database",ag="@firebase/data-connect",ug="@firebase/database-compat",cg="@firebase/functions",lg="@firebase/functions-compat",dg="@firebase/installations",hg="@firebase/installations-compat",fg="@firebase/messaging",pg="@firebase/messaging-compat",mg="@firebase/performance",gg="@firebase/performance-compat",_g="@firebase/remote-config",yg="@firebase/remote-config-compat",wg="@firebase/storage",Eg="@firebase/storage-compat",Tg="@firebase/firestore",vg="@firebase/ai",bg="@firebase/firestore-compat",Ig="firebase",Ag="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="[DEFAULT]",Rg={[ba]:"fire-core",[Zm]:"fire-core-compat",[tg]:"fire-analytics",[eg]:"fire-analytics-compat",[rg]:"fire-app-check",[ng]:"fire-app-check-compat",[sg]:"fire-auth",[ig]:"fire-auth-compat",[og]:"fire-rtdb",[ag]:"fire-data-connect",[ug]:"fire-rtdb-compat",[cg]:"fire-fn",[lg]:"fire-fn-compat",[dg]:"fire-iid",[hg]:"fire-iid-compat",[fg]:"fire-fcm",[pg]:"fire-fcm-compat",[mg]:"fire-perf",[gg]:"fire-perf-compat",[_g]:"fire-rc",[yg]:"fire-rc-compat",[wg]:"fire-gcs",[Eg]:"fire-gcs-compat",[Tg]:"fire-fst",[bg]:"fire-fst-compat",[vg]:"fire-vertex","fire-js":"fire-js",[Ig]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Map,Sg=new Map,Aa=new Map;function Uc(n,e){try{n.container.addComponent(e)}catch(t){on.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function On(n){const e=n.name;if(Aa.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;Aa.set(e,n);for(const t of Hi.values())Uc(t,n);for(const t of Sg.values())Uc(t,n);return!0}function qs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function et(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new $s("app","Firebase",kg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=Ag;function Nd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ia,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Cn.create("bad-app-name",{appName:String(s)});if(t||(t=Rd()),!t)throw Cn.create("no-options");const i=Hi.get(s);if(i){if(ar(t,i.options)&&ar(r,i.config))return i;throw Cn.create("duplicate-app",{appName:s})}const a=new Mm(s);for(const d of Aa.values())a.addComponent(d);const c=new Pg(t,r,a);return Hi.set(s,c),c}function _o(n=Ia){const e=Hi.get(n);if(!e&&n===Ia&&Rd())return Nd();if(!e)throw Cn.create("no-app",{appName:n});return e}function yt(n,e,t){let r=Rg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(a.join(" "));return}On(new sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="firebase-heartbeat-database",Ng=1,Os="firebase-heartbeat-store";let aa=null;function Dd(){return aa||(aa=Km(Cg,Ng,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Os)}catch(t){console.warn(t)}}}}).catch(n=>{throw Cn.create("idb-open",{originalErrorMessage:n.message})})),aa}async function Dg(n){try{const t=(await Dd()).transaction(Os),r=await t.objectStore(Os).get(Od(n));return await t.done,r}catch(e){if(e instanceof Pt)on.warn(e.message);else{const t=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});on.warn(t.message)}}}async function Fc(n,e){try{const r=(await Dd()).transaction(Os,"readwrite");await r.objectStore(Os).put(e,Od(n)),await r.done}catch(t){if(t instanceof Pt)on.warn(t.message);else{const r=Cn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});on.warn(r.message)}}}function Od(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=1024,Lg=30;class Mg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ug(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Lg){const a=Fg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){on.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xc(),{heartbeatsToSend:r,unsentEntries:s}=Vg(this._heartbeatsCache.heartbeats),i=$i(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return on.warn(t),""}}}function xc(){return new Date().toISOString().substring(0,10)}function Vg(n,e=Og){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Bc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Bc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ug{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bm()?Im().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Dg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bc(n){return $i(JSON.stringify({version:2,heartbeats:n})).length}function Fg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n){On(new sn("platform-logger",e=>new Ym(e),"PRIVATE")),On(new sn("heartbeat",e=>new Mg(e),"PRIVATE")),yt(ba,Vc,n),yt(ba,Vc,"esm2020"),yt("fire-js","")}xg("");var Bg="firebase",jg="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(Bg,jg,"app");function Ld(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zg=Ld,Md=new $s("auth","Firebase",Ld());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Qa("@firebase/auth");function $g(n,...e){qi.logLevel<=ae.WARN&&qi.warn(`Auth (${fr}): ${n}`,...e)}function Oi(n,...e){qi.logLevel<=ae.ERROR&&qi.error(`Auth (${fr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,...e){throw Ja(n,...e)}function Rt(n,...e){return Ja(n,...e)}function Ya(n,e,t){const r={...zg(),[e]:t};return new $s("auth","Firebase",r).create(e,{appName:n.name})}function tn(n){return Ya(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(n,"argument-error"),Ya(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ja(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Md.create(n,...e)}function Z(n,e,...t){if(!n)throw Ja(e,...t)}function Zt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Oi(e),new Error(e)}function an(n,e){n||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function qg(){return jc()==="http:"||jc()==="https:"}function jc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qg()||wm()||"connection"in navigator)?navigator.onLine:!0}function Wg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,an(t>e,"Short delay should be less than long delay!"),this.isMobile=gm()||Em()}get(){return Gg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n,e){an(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xg=new Gs(3e4,6e4);function ln(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function $t(n,e,t,r,s={}){return Ud(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Hs({key:n.config.apiKey,...a}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const m={method:e,headers:d,...i};return ym()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&zt(n.emulatorConfig.host)&&(m.credentials="include"),Vd.fetch()(await Fd(n,n.config.apiHost,t,c),m)})}async function Ud(n,e,t){n._canInitEmulator=!1;const r={...Kg,...e};try{const s=new Jg(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw bi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[d,m]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw bi(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw bi(n,"user-disabled",a);const T=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Ya(n,T,m);Tt(n,T)}}catch(s){if(s instanceof Pt)throw s;Tt(n,"network-request-failed",{message:String(s)})}}async function Ws(n,e,t,r,s={}){const i=await $t(n,e,t,r,s);return"mfaPendingCredential"in i&&Tt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Fd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Za(n.config,s):`${n.config.apiScheme}://${s}`;return Qg.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Yg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),Xg.get())})}}function bi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Rt(n,e,r);return s.customData._tokenResponse=t,s}function zc(n){return n!==void 0&&n.enterprise!==void 0}class Zg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Yg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function e_(n,e){return $t(n,"GET","/v2/recaptchaConfig",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(n,e){return $t(n,"POST","/v1/accounts:delete",e)}async function Gi(n,e){return $t(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n_(n,e=!1){const t=ge(n),r=await t.getIdToken(e),s=eu(r);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ss(ua(s.auth_time)),issuedAtTime:Ss(ua(s.iat)),expirationTime:Ss(ua(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ua(n){return Number(n)*1e3}function eu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Id(t);return s?JSON.parse(s):(Oi("Failed to decode base64 JWT payload"),null)}catch(s){return Oi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $c(n){const e=eu(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Pt&&r_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function r_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ss(this.lastLoginAt),this.creationTime=Ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(n){var I;const e=n.auth,t=await n.getIdToken(),r=await Mr(n,Gi(e,{idToken:t}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(I=s.providerUserInfo)!=null&&I.length?xd(s.providerUserInfo):[],a=o_(n.providerData,i),c=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),m=c?d:!1,T={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sa(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(n,T)}async function i_(n){const e=ge(n);await Wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(n,e){const t=await Ud(n,{},async()=>{const r=Hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Fd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:c,body:r};return n.emulatorConfig&&zt(n.emulatorConfig.host)&&(d.credentials="include"),Vd.fetch()(a,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function u_(n,e){return $t(n,"POST","/v2/accounts:revokeToken",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const t=$c(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await a_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Cr;return r&&(Z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new s_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Mr(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return n_(this,e)}reload(){return i_(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Wi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await Mr(this,t_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,d=t._redirectEventId??void 0,m=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:I,emailVerified:S,isAnonymous:C,providerData:O,stsTokenManager:B}=t;Z(I&&B,e,"internal-error");const F=Cr.fromJSON(this.name,B);Z(typeof I=="string",e,"internal-error"),vn(r,e.name),vn(s,e.name),Z(typeof S=="boolean",e,"internal-error"),Z(typeof C=="boolean",e,"internal-error"),vn(i,e.name),vn(a,e.name),vn(c,e.name),vn(d,e.name),vn(m,e.name),vn(T,e.name);const J=new At({uid:I,auth:e,email:s,emailVerified:S,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:F,createdAt:m,lastLoginAt:T});return O&&Array.isArray(O)&&(J.providerData=O.map(Y=>({...Y}))),d&&(J._redirectEventId=d),J}static async _fromIdTokenResponse(e,t,r=!1){const s=new Cr;s.updateFromServerResponse(t);const i=new At({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Cr;c.updateFromIdToken(r);const d=new At({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Sa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(d,m),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Map;function en(n){an(n instanceof Function,"Expected a class definition");let e=Hc.get(n);return e?(an(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bd.type="NONE";const qc=Bd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n,e,t){return`firebase:${n}:${e}:${t}`}class Nr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Li(this.userKey,s.apiKey,i),this.fullPersistenceKey=Li("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gi(this.auth,{idToken:e}).catch(()=>{});return t?At._fromGetAccountInfoResponse(this.auth,t,e):null}return At._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Nr(en(qc),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let i=s[0]||en(qc);const a=Li(r,e.config.apiKey,e.name);let c=null;for(const m of t)try{const T=await m._get(a);if(T){let I;if(typeof T=="string"){const S=await Gi(e,{idToken:T}).catch(()=>{});if(!S)break;I=await At._fromGetAccountInfoResponse(e,S,T)}else I=At._fromJSON(e,T);m!==i&&(c=I),i=m;break}}catch{}const d=s.filter(m=>m._shouldAllowMigration);return!i._shouldAllowMigration||!d.length?new Nr(i,e,r):(i=d[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async m=>{if(m!==i)try{await m._remove(a)}catch{}})),new Nr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gd(e))return"Blackberry";if(Wd(e))return"Webos";if(zd(e))return"Safari";if((e.includes("chrome/")||$d(e))&&!e.includes("edge/"))return"Chrome";if(qd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jd(n=Ye()){return/firefox\//i.test(n)}function zd(n=Ye()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $d(n=Ye()){return/crios\//i.test(n)}function Hd(n=Ye()){return/iemobile/i.test(n)}function qd(n=Ye()){return/android/i.test(n)}function Gd(n=Ye()){return/blackberry/i.test(n)}function Wd(n=Ye()){return/webos/i.test(n)}function tu(n=Ye()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function c_(n=Ye()){var e;return tu(n)&&!!((e=window.navigator)!=null&&e.standalone)}function l_(){return Tm()&&document.documentMode===10}function Kd(n=Ye()){return tu(n)||qd(n)||Wd(n)||Gd(n)||/windows phone/i.test(n)||Hd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n,e=[]){let t;switch(n){case"Browser":t=Gc(Ye());break;case"Worker":t=`${Gc(Ye())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const d=e(i);a(d)}catch(d){c(d)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(n,e={}){return $t(n,"GET","/v2/passwordPolicy",ln(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=6;class p_{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??f_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wc(this),this.idTokenSubscription=new Wc(this),this.beforeStateQueue=new d_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Md,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=en(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Nr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gi(this,{idToken:e}),r=await At._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===c)&&(d!=null&&d.user)&&(r=d.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(tn(this));const t=e?ge(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h_(this),t=new p_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await u_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&en(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[en(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,s);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$g(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dn(n){return ge(n)}class Wc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pm(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g_(n){yo=n}function Xd(n){return yo.loadJS(n)}function __(){return yo.recaptchaEnterpriseScript}function y_(){return yo.gapiScript}function w_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class E_{constructor(){this.enterprise=new T_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class T_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const v_="recaptcha-enterprise",Yd="NO_RECAPTCHA";class b_{constructor(e){this.type=v_,this.auth=dn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{e_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const m=new Zg(d);return i.tenantId==null?i._agentRecaptchaConfig=m:i._tenantRecaptchaConfigs[i.tenantId]=m,a(m.siteKey)}}).catch(d=>{c(d)})})}function s(i,a,c){const d=window.grecaptcha;zc(d)?d.enterprise.ready(()=>{d.enterprise.execute(i,{action:e}).then(m=>{a(m)}).catch(()=>{a(Yd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new E_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&zc(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=__();d.length!==0&&(d+=c),Xd(d).then(()=>{s(c,i,a)}).catch(m=>{a(m)})}}).catch(c=>{a(c)})})}}async function Kc(n,e,t,r=!1,s=!1){const i=new b_(n);let a;if(s)a=Yd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const d=c.phoneEnrollmentInfo.phoneNumber,m=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:m,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const d=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ki(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Kc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Kc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n,e){const t=qs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ar(i,e??{}))return s;Tt(s,"already-initialized")}return t.initialize({options:e})}function A_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(en);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R_(n,e,t){const r=dn(n);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Jd(e),{host:a,port:c}=S_(e),d=c===null?"":`:${c}`,m={url:`${i}//${a}${d}/`},T=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(ar(m,r.config.emulator)&&ar(T,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=T,r.settings.appVerificationDisabledForTesting=!0,zt(a)?(mo(`${i}//${a}${d}`),go("Auth",!0)):k_()}function Jd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function S_(n){const e=Jd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Qc(a)}}}function Qc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function k_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,t){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function P_(n,e){return $t(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(n,e){return Ws(n,"POST","/v1/accounts:signInWithPassword",ln(n,e))}async function N_(n,e){return $t(n,"POST","/v1/accounts:sendOobCode",ln(n,e))}async function D_(n,e){return N_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(n,e){return Ws(n,"POST","/v1/accounts:signInWithEmailLink",ln(n,e))}async function L_(n,e){return Ws(n,"POST","/v1/accounts:signInWithEmailLink",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends nu{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ls(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ls(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ki(e,t,"signInWithPassword",C_);case"emailLink":return O_(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ki(e,r,"signUpPassword",P_);case"emailLink":return L_(e,{idToken:t,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(n,e){return Ws(n,"POST","/v1/accounts:signInWithIdp",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="http://localhost";class ur extends nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new ur(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Dr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Dr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dr(e,t)}buildRequest(){const e={requestUri:M_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U_(n){const e=Es(Ts(n)).link,t=e?Es(Ts(e)).deep_link_id:null,r=Es(Ts(n)).deep_link_id;return(r?Es(Ts(r)).link:null)||r||t||e||n}class ru{constructor(e){const t=Es(Ts(e)),r=t.apiKey??null,s=t.oobCode??null,i=V_(t.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=U_(e);try{return new ru(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.providerId=$r.PROVIDER_ID}static credential(e,t){return Ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ru.parseLink(t);return Z(r,"argument-error"),Ls._fromEmailAndCode(e,r.code,r.tenantId)}}$r.PROVIDER_ID="password";$r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ks{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ur._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return In.credential(t,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ks{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ks{constructor(){super("twitter.com")}static credential(e,t){return ur._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(n,e){return Ws(n,"POST","/v1/accounts:signUp",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await At._fromIdTokenResponse(e,r,s),a=Xc(r);return new cr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Xc(r);return new cr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Xc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Pt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Qi(e,t,r,s)}}function Zd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(n,i,e,r):i})}async function x_(n,e,t=!1){const r=await Mr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return cr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(n,e,t=!1){const{auth:r}=n;if(et(r.app))return Promise.reject(tn(r));const s="reauthenticate";try{const i=await Mr(n,Zd(r,s,e,n),t);Z(i.idToken,r,"internal-error");const a=eu(i.idToken);Z(a,r,"internal-error");const{sub:c}=a;return Z(n.uid===c,r,"user-mismatch"),cr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(n,e,t=!1){if(et(n.app))return Promise.reject(tn(n));const r="signIn",s=await Zd(n,r,e),i=await cr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function j_(n,e){return eh(dn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(n){const e=dn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aI(n,e,t){const r=dn(n);await Ki(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",D_)}async function uI(n,e,t){if(et(n.app))return Promise.reject(tn(n));const r=dn(n),a=await Ki(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",F_).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&th(n),d}),c=await cr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function cI(n,e,t){return et(n.app)?Promise.reject(tn(n)):j_(ge(n),$r.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&th(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,e){return $t(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ge(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Mr(r,z_(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:d})=>d==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function $_(n,e,t,r){return ge(n).onIdTokenChanged(e,t,r)}function H_(n,e,t){return ge(n).beforeAuthStateChanged(e,t)}function q_(n,e,t,r){return ge(n).onAuthStateChanged(e,t,r)}function dI(n){return ge(n).signOut()}const Xi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xi,"1"),this.storage.removeItem(Xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=1e3,W_=10;class rh extends nh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,d)=>{this.notifyListeners(a,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);l_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,W_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},G_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rh.type="LOCAL";const K_=rh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh extends nh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sh.type="SESSION";const ih=sh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new wo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async m=>m(t.origin,i)),d=await Q_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,d)=>{const m=iu("",20);s.port1.start();const T=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(I){const S=I;if(S.data.eventId===m)switch(S.data.status){case"ack":clearTimeout(T),i=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(S.data.response);break;default:clearTimeout(T),clearTimeout(i),d(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function Y_(n){Vt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function J_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function ey(){return oh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="firebaseLocalStorageDb",ty=1,Yi="firebaseLocalStorage",uh="fbase_key";class Qs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Eo(n,e){return n.transaction([Yi],e?"readwrite":"readonly").objectStore(Yi)}function ny(){const n=indexedDB.deleteDatabase(ah);return new Qs(n).toPromise()}function ka(){const n=indexedDB.open(ah,ty);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Yi,{keyPath:uh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Yi)?e(r):(r.close(),await ny(),e(await ka()))})})}async function Yc(n,e,t){const r=Eo(n,!0).put({[uh]:e,value:t});return new Qs(r).toPromise()}async function ry(n,e){const t=Eo(n,!1).get(e),r=await new Qs(t).toPromise();return r===void 0?null:r.value}function Jc(n,e){const t=Eo(n,!0).delete(e);return new Qs(t).toPromise()}const sy=800,iy=3;class ch{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ka(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>iy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wo._getInstance(ey()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await J_(),!this.activeServiceWorker)return;this.sender=new X_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ka();return await Yc(e,Xi,"1"),await Jc(e,Xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ry(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Eo(s,!1).getAll();return new Qs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ch.type="LOCAL";const oy=ch;new Gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n,e){return e?en(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ay(n){return eh(n.auth,new ou(n),n.bypassAuthState)}function uy(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),B_(t,new ou(n),n.bypassAuthState)}async function cy(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),x_(t,new ou(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ay;case"linkViaPopup":case"linkViaRedirect":return cy;case"reauthViaPopup":case"reauthViaRedirect":return uy;default:Tt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new Gs(2e3,1e4);async function hI(n,e,t){if(et(n.app))return Promise.reject(Rt(n,"operation-not-supported-in-this-environment"));const r=dn(n);Hg(n,e,su);const s=lh(r,t);return new rr(r,"signInViaPopup",e,s).executeNotNull()}class rr extends dh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ly.get())};e()}}rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="pendingRedirect",Mi=new Map;class hy extends dh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const r=await fy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fy(n,e){const t=gy(e),r=my(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function py(n,e){Mi.set(n._key(),e)}function my(n){return en(n._redirectPersistence)}function gy(n){return Li(dy,n.config.apiKey,n.name)}async function _y(n,e,t=!1){if(et(n.app))return Promise.reject(tn(n));const r=dn(n),s=lh(r,e),a=await new hy(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=10*60*1e3;class wy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ey(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!hh(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Rt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zc(e))}saveEventToCache(e){this.cachedEventUids.add(Zc(e)),this.lastProcessedEventTime=Date.now()}}function Zc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ey(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(n,e={}){return $t(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,by=/^https?/;async function Iy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ty(n);for(const t of e)try{if(Ay(t))return}catch{}Tt(n,"unauthorized-domain")}function Ay(n){const e=Ra(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!by.test(t))return!1;if(vy.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new Gs(3e4,6e4);function el(){const n=Vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sy(n){return new Promise((e,t)=>{var s,i,a;function r(){el(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{el(),t(Rt(n,"network-request-failed"))},timeout:Ry.get()})}if((i=(s=Vt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Vt().gapi)!=null&&a.load)r();else{const c=w_("iframefcb");return Vt()[c]=()=>{gapi.load?r():t(Rt(n,"network-request-failed"))},Xd(`${y_()}?onload=${c}`).catch(d=>t(d))}}).catch(e=>{throw Vi=null,e})}let Vi=null;function ky(n){return Vi=Vi||Sy(n),Vi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new Gs(5e3,15e3),Cy="__/auth/iframe",Ny="emulator/auth/iframe",Dy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Oy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ly(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Za(e,Ny):`https://${n.config.authDomain}/${Cy}`,r={apiKey:e.apiKey,appName:n.name,v:fr},s=Oy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Hs(r).slice(1)}`}async function My(n){const e=await ky(n),t=Vt().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:Ly(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Rt(n,"network-request-failed"),c=Vt().setTimeout(()=>{i(a)},Py.get());function d(){Vt().clearTimeout(c),s(r)}r.ping(d).then(d,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uy=500,Fy=600,xy="_blank",By="http://localhost";class tl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jy(n,e,t,r=Uy,s=Fy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d={...Vy,width:r.toString(),height:s.toString(),top:i,left:a},m=Ye().toLowerCase();t&&(c=$d(m)?xy:t),jd(m)&&(e=e||By,d.scrollbars="yes");const T=Object.entries(d).reduce((S,[C,O])=>`${S}${C}=${O},`,"");if(c_(m)&&c!=="_self")return zy(e||"",c),new tl(null);const I=window.open(e||"",c,T);Z(I,n,"popup-blocked");try{I.focus()}catch{}return new tl(I)}function zy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="__/auth/handler",Hy="emulator/auth/handler",qy=encodeURIComponent("fac");async function nl(n,e,t,r,s,i){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:fr,eventId:s};if(e instanceof su){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",km(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,I]of Object.entries({}))a[T]=I}if(e instanceof Ks){const T=e.getScopes().filter(I=>I!=="");T.length>0&&(a.scopes=T.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const T of Object.keys(c))c[T]===void 0&&delete c[T];const d=await n._getAppCheckToken(),m=d?`#${qy}=${encodeURIComponent(d)}`:"";return`${Gy(n)}?${Hs(c).slice(1)}${m}`}function Gy({config:n}){return n.emulator?Za(n,Hy):`https://${n.authDomain}/${$y}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="webStorageSupport";class Wy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ih,this._completeRedirectFn=_y,this._overrideRedirectResult=py}async _openPopup(e,t,r,s){var a;an((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await nl(e,t,r,Ra(),s);return jy(e,i,iu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await nl(e,t,r,Ra(),s);return Y_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(an(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await My(e),r=new wy(e);return t.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ca,{type:ca},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[ca];i!==void 0&&t(!!i),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Iy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kd()||zd()||tu()}}const Ky=Wy;var rl="@firebase/auth",sl="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yy(n){On(new sn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;Z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qd(n)},m=new m_(r,s,i,d);return A_(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),On(new sn("auth-internal",e=>{const t=dn(e.getProvider("auth").getImmediate());return(r=>new Qy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(rl,sl,Xy(n)),yt(rl,sl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=5*60,Zy=Sd("authIdTokenMaxAge")||Jy;let il=null;const ew=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Zy)return;const s=t==null?void 0:t.token;il!==s&&(il=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tw(n=_o()){const e=qs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=I_(n,{popupRedirectResolver:Ky,persistence:[oy,K_,ih]}),r=Sd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=ew(i.toString());H_(t,a,()=>a(t.currentUser)),$_(t,c=>a(c))}}const s=Ad("auth");return s&&R_(t,`http://${s}`),t}function nw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}g_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Rt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",nw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yy("Browser");var ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nn,fh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(p,g){function y(){}y.prototype=g.prototype,p.F=g.prototype,p.prototype=new y,p.prototype.constructor=p,p.D=function(w,E,A){for(var v=Array(arguments.length-2),L=2;L<arguments.length;L++)v[L-2]=arguments[L];return g.prototype[E].apply(w,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(p,g,y){y||(y=0);const w=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)w[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;E<16;++E)w[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=p.g[0],y=p.g[1],E=p.g[2];let A=p.g[3],v;v=g+(A^y&(E^A))+w[0]+3614090360&4294967295,g=y+(v<<7&4294967295|v>>>25),v=A+(E^g&(y^E))+w[1]+3905402710&4294967295,A=g+(v<<12&4294967295|v>>>20),v=E+(y^A&(g^y))+w[2]+606105819&4294967295,E=A+(v<<17&4294967295|v>>>15),v=y+(g^E&(A^g))+w[3]+3250441966&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(A^y&(E^A))+w[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=A+(E^g&(y^E))+w[5]+1200080426&4294967295,A=g+(v<<12&4294967295|v>>>20),v=E+(y^A&(g^y))+w[6]+2821735955&4294967295,E=A+(v<<17&4294967295|v>>>15),v=y+(g^E&(A^g))+w[7]+4249261313&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(A^y&(E^A))+w[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=A+(E^g&(y^E))+w[9]+2336552879&4294967295,A=g+(v<<12&4294967295|v>>>20),v=E+(y^A&(g^y))+w[10]+4294925233&4294967295,E=A+(v<<17&4294967295|v>>>15),v=y+(g^E&(A^g))+w[11]+2304563134&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(A^y&(E^A))+w[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=A+(E^g&(y^E))+w[13]+4254626195&4294967295,A=g+(v<<12&4294967295|v>>>20),v=E+(y^A&(g^y))+w[14]+2792965006&4294967295,E=A+(v<<17&4294967295|v>>>15),v=y+(g^E&(A^g))+w[15]+1236535329&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(E^A&(y^E))+w[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=A+(y^E&(g^y))+w[6]+3225465664&4294967295,A=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(A^g))+w[11]+643717713&4294967295,E=A+(v<<14&4294967295|v>>>18),v=y+(A^g&(E^A))+w[0]+3921069994&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^A&(y^E))+w[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=A+(y^E&(g^y))+w[10]+38016083&4294967295,A=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(A^g))+w[15]+3634488961&4294967295,E=A+(v<<14&4294967295|v>>>18),v=y+(A^g&(E^A))+w[4]+3889429448&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^A&(y^E))+w[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=A+(y^E&(g^y))+w[14]+3275163606&4294967295,A=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(A^g))+w[3]+4107603335&4294967295,E=A+(v<<14&4294967295|v>>>18),v=y+(A^g&(E^A))+w[8]+1163531501&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^A&(y^E))+w[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=A+(y^E&(g^y))+w[2]+4243563512&4294967295,A=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(A^g))+w[7]+1735328473&4294967295,E=A+(v<<14&4294967295|v>>>18),v=y+(A^g&(E^A))+w[12]+2368359562&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(y^E^A)+w[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=A+(g^y^E)+w[8]+2272392833&4294967295,A=g+(v<<11&4294967295|v>>>21),v=E+(A^g^y)+w[11]+1839030562&4294967295,E=A+(v<<16&4294967295|v>>>16),v=y+(E^A^g)+w[14]+4259657740&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^A)+w[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=A+(g^y^E)+w[4]+1272893353&4294967295,A=g+(v<<11&4294967295|v>>>21),v=E+(A^g^y)+w[7]+4139469664&4294967295,E=A+(v<<16&4294967295|v>>>16),v=y+(E^A^g)+w[10]+3200236656&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^A)+w[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=A+(g^y^E)+w[0]+3936430074&4294967295,A=g+(v<<11&4294967295|v>>>21),v=E+(A^g^y)+w[3]+3572445317&4294967295,E=A+(v<<16&4294967295|v>>>16),v=y+(E^A^g)+w[6]+76029189&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^A)+w[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=A+(g^y^E)+w[12]+3873151461&4294967295,A=g+(v<<11&4294967295|v>>>21),v=E+(A^g^y)+w[15]+530742520&4294967295,E=A+(v<<16&4294967295|v>>>16),v=y+(E^A^g)+w[2]+3299628645&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(E^(y|~A))+w[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=A+(y^(g|~E))+w[7]+1126891415&4294967295,A=g+(v<<10&4294967295|v>>>22),v=E+(g^(A|~y))+w[14]+2878612391&4294967295,E=A+(v<<15&4294967295|v>>>17),v=y+(A^(E|~g))+w[5]+4237533241&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~A))+w[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=A+(y^(g|~E))+w[3]+2399980690&4294967295,A=g+(v<<10&4294967295|v>>>22),v=E+(g^(A|~y))+w[10]+4293915773&4294967295,E=A+(v<<15&4294967295|v>>>17),v=y+(A^(E|~g))+w[1]+2240044497&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~A))+w[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=A+(y^(g|~E))+w[15]+4264355552&4294967295,A=g+(v<<10&4294967295|v>>>22),v=E+(g^(A|~y))+w[6]+2734768916&4294967295,E=A+(v<<15&4294967295|v>>>17),v=y+(A^(E|~g))+w[13]+1309151649&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~A))+w[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=A+(y^(g|~E))+w[11]+3174756917&4294967295,A=g+(v<<10&4294967295|v>>>22),v=E+(g^(A|~y))+w[2]+718787259&4294967295,E=A+(v<<15&4294967295|v>>>17),v=y+(A^(E|~g))+w[9]+3951481745&4294967295,p.g[0]=p.g[0]+g&4294967295,p.g[1]=p.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,p.g[2]=p.g[2]+E&4294967295,p.g[3]=p.g[3]+A&4294967295}r.prototype.v=function(p,g){g===void 0&&(g=p.length);const y=g-this.blockSize,w=this.C;let E=this.h,A=0;for(;A<g;){if(E==0)for(;A<=y;)s(this,p,A),A+=this.blockSize;if(typeof p=="string"){for(;A<g;)if(w[E++]=p.charCodeAt(A++),E==this.blockSize){s(this,w),E=0;break}}else for(;A<g;)if(w[E++]=p[A++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var p=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);p[0]=128;for(var g=1;g<p.length-8;++g)p[g]=0;g=this.o*8;for(var y=p.length-8;y<p.length;++y)p[y]=g&255,g/=256;for(this.v(p),p=Array(16),g=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)p[g++]=this.g[y]>>>w&255;return p};function i(p,g){var y=c;return Object.prototype.hasOwnProperty.call(y,p)?y[p]:y[p]=g(p)}function a(p,g){this.h=g;const y=[];let w=!0;for(let E=p.length-1;E>=0;E--){const A=p[E]|0;w&&A==g||(y[E]=A,w=!1)}this.g=y}var c={};function d(p){return-128<=p&&p<128?i(p,function(g){return new a([g|0],g<0?-1:0)}):new a([p|0],p<0?-1:0)}function m(p){if(isNaN(p)||!isFinite(p))return I;if(p<0)return F(m(-p));const g=[];let y=1;for(let w=0;p>=y;w++)g[w]=p/y|0,y*=4294967296;return new a(g,0)}function T(p,g){if(p.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(p.charAt(0)=="-")return F(T(p.substring(1),g));if(p.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=m(Math.pow(g,8));let w=I;for(let A=0;A<p.length;A+=8){var E=Math.min(8,p.length-A);const v=parseInt(p.substring(A,A+E),g);E<8?(E=m(Math.pow(g,E)),w=w.j(E).add(m(v))):(w=w.j(y),w=w.add(m(v)))}return w}var I=d(0),S=d(1),C=d(16777216);n=a.prototype,n.m=function(){if(B(this))return-F(this).m();let p=0,g=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);p+=(w>=0?w:4294967296+w)*g,g*=4294967296}return p},n.toString=function(p){if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(O(this))return"0";if(B(this))return"-"+F(this).toString(p);const g=m(Math.pow(p,6));var y=this;let w="";for(;;){const E=u(y,g).g;y=J(y,E.j(g));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(p);if(y=E,O(y))return A+w;for(;A.length<6;)A="0"+A;w=A+w}},n.i=function(p){return p<0?0:p<this.g.length?this.g[p]:this.h};function O(p){if(p.h!=0)return!1;for(let g=0;g<p.g.length;g++)if(p.g[g]!=0)return!1;return!0}function B(p){return p.h==-1}n.l=function(p){return p=J(this,p),B(p)?-1:O(p)?0:1};function F(p){const g=p.g.length,y=[];for(let w=0;w<g;w++)y[w]=~p.g[w];return new a(y,~p.h).add(S)}n.abs=function(){return B(this)?F(this):this},n.add=function(p){const g=Math.max(this.g.length,p.g.length),y=[];let w=0;for(let E=0;E<=g;E++){let A=w+(this.i(E)&65535)+(p.i(E)&65535),v=(A>>>16)+(this.i(E)>>>16)+(p.i(E)>>>16);w=v>>>16,A&=65535,v&=65535,y[E]=v<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function J(p,g){return p.add(F(g))}n.j=function(p){if(O(this)||O(p))return I;if(B(this))return B(p)?F(this).j(F(p)):F(F(this).j(p));if(B(p))return F(this.j(F(p)));if(this.l(C)<0&&p.l(C)<0)return m(this.m()*p.m());const g=this.g.length+p.g.length,y=[];for(var w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<p.g.length;E++){const A=this.i(w)>>>16,v=this.i(w)&65535,L=p.i(E)>>>16,U=p.i(E)&65535;y[2*w+2*E]+=v*U,Y(y,2*w+2*E),y[2*w+2*E+1]+=A*U,Y(y,2*w+2*E+1),y[2*w+2*E+1]+=v*L,Y(y,2*w+2*E+1),y[2*w+2*E+2]+=A*L,Y(y,2*w+2*E+2)}for(p=0;p<g;p++)y[p]=y[2*p+1]<<16|y[2*p];for(p=g;p<2*g;p++)y[p]=0;return new a(y,0)};function Y(p,g){for(;(p[g]&65535)!=p[g];)p[g+1]+=p[g]>>>16,p[g]&=65535,g++}function X(p,g){this.g=p,this.h=g}function u(p,g){if(O(g))throw Error("division by zero");if(O(p))return new X(I,I);if(B(p))return g=u(F(p),g),new X(F(g.g),F(g.h));if(B(g))return g=u(p,F(g)),new X(F(g.g),g.h);if(p.g.length>30){if(B(p)||B(g))throw Error("slowDivide_ only works with positive integers.");for(var y=S,w=g;w.l(p)<=0;)y=_(y),w=_(w);var E=f(y,1),A=f(w,1);for(w=f(w,2),y=f(y,2);!O(w);){var v=A.add(w);v.l(p)<=0&&(E=E.add(y),A=v),w=f(w,1),y=f(y,1)}return g=J(p,E.j(g)),new X(E,g)}for(E=I;p.l(g)>=0;){for(y=Math.max(1,Math.floor(p.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),A=m(y),v=A.j(g);B(v)||v.l(p)>0;)y-=w,A=m(y),v=A.j(g);O(A)&&(A=S),E=E.add(A),p=J(p,v)}return new X(E,p)}n.B=function(p){return u(this,p).h},n.and=function(p){const g=Math.max(this.g.length,p.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)&p.i(w);return new a(y,this.h&p.h)},n.or=function(p){const g=Math.max(this.g.length,p.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)|p.i(w);return new a(y,this.h|p.h)},n.xor=function(p){const g=Math.max(this.g.length,p.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)^p.i(w);return new a(y,this.h^p.h)};function _(p){const g=p.g.length+1,y=[];for(let w=0;w<g;w++)y[w]=p.i(w)<<1|p.i(w-1)>>>31;return new a(y,p.h)}function f(p,g){const y=g>>5;g%=32;const w=p.g.length-y,E=[];for(let A=0;A<w;A++)E[A]=g>0?p.i(A+y)>>>g|p.i(A+y+1)<<32-g:p.i(A+y);return new a(E,p.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,fh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=m,a.fromString=T,Nn=a}).apply(typeof ol<"u"?ol:typeof self<"u"?self:typeof window<"u"?window:{});var Ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ph,vs,mh,Ui,Pa,gh,_h,yh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ii=="object"&&Ii];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var b=0;b<o.length-1;b++){var P=o[b];if(!(P in h))break e;h=h[P]}o=o[o.length-1],b=h[o],l=l(b),l!=b&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],b;for(b in l)Object.prototype.hasOwnProperty.call(l,b)&&h.push([b,l[b]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function d(o,l,h){return o.call.apply(o.bind,arguments)}function m(o,l,h){return m=d,m.apply(null,arguments)}function T(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var b=h.slice();return b.push.apply(b,arguments),o.apply(this,b)}}function I(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(b,P,N){for(var j=Array(arguments.length-2),se=2;se<arguments.length;se++)j[se-2]=arguments[se];return l.prototype[P].apply(b,j)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function C(o){const l=o.length;if(l>0){const h=Array(l);for(let b=0;b<l;b++)h[b]=o[b];return h}return[]}function O(o,l){for(let b=1;b<arguments.length;b++){const P=arguments[b];var h=typeof P;if(h=h!="object"?h:P?Array.isArray(P)?"array":h:"null",h=="array"||h=="object"&&typeof P.length=="number"){h=o.length||0;const N=P.length||0;o.length=h+N;for(let j=0;j<N;j++)o[h+j]=P[j]}else o.push(P)}}class B{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(o){a.setTimeout(()=>{throw o},0)}function J(){var o=p;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Y{constructor(){this.h=this.g=null}add(l,h){const b=X.get();b.set(l,h),this.h?this.h.next=b:this.g=b,this.h=b}}var X=new B(()=>new u,o=>o.reset());class u{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let _,f=!1,p=new Y,g=()=>{const o=Promise.resolve(void 0);_=()=>{o.then(y)}};function y(){for(var o;o=J();){try{o.h.call(o.g)}catch(h){F(h)}var l=X;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}f=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function v(o){return/^[\s\xa0]*$/.test(o)}function L(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}I(L,E),L.prototype.init=function(o,l){const h=this.type=o.type,b=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&L.Z.h.call(this)},L.prototype.h=function(){L.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var U="closure_listenable_"+(Math.random()*1e6|0),R=0;function V(o,l,h,b,P){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!b,this.ha=P,this.key=++R,this.da=this.fa=!1}function $(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function W(o,l,h){for(const b in o)l.call(h,o[b],b,o)}function ie(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function z(o){const l={};for(const h in o)l[h]=o[h];return l}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(o,l){let h,b;for(let P=1;P<arguments.length;P++){b=arguments[P];for(h in b)o[h]=b[h];for(let N=0;N<Ie.length;N++)h=Ie[N],Object.prototype.hasOwnProperty.call(b,h)&&(o[h]=b[h])}}function Fe(o){this.src=o,this.g={},this.h=0}Fe.prototype.add=function(o,l,h,b,P){const N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);const j=_e(o,l,b,P);return j>-1?(l=o[j],h||(l.fa=!1)):(l=new V(l,this.src,N,!!b,P),l.fa=h,o.push(l)),l};function re(o,l){const h=l.type;if(h in o.g){var b=o.g[h],P=Array.prototype.indexOf.call(b,l,void 0),N;(N=P>=0)&&Array.prototype.splice.call(b,P,1),N&&($(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function _e(o,l,h,b){for(let P=0;P<o.length;++P){const N=o[P];if(!N.da&&N.listener==l&&N.capture==!!h&&N.ha==b)return P}return-1}var Ae="closure_lm_"+(Math.random()*1e6|0),Te={};function Ht(o,l,h,b,P){if(Array.isArray(l)){for(let N=0;N<l.length;N++)Ht(o,l[N],h,b,P);return null}return h=Kt(h),o&&o[U]?o.J(l,h,c(b)?!!b.capture:!1,P):qt(o,l,h,!1,b,P)}function qt(o,l,h,b,P,N){if(!l)throw Error("Invalid event type");const j=c(P)?!!P.capture:!!P;let se=qn(o);if(se||(o[Ae]=se=new Fe(o)),h=se.add(l,h,b,j,N),h.proxy)return h;if(b=$n(),h.proxy=b,b.src=o,b.listener=h,o.addEventListener)A||(P=j),P===void 0&&(P=!1),o.addEventListener(l.toString(),b,P);else if(o.attachEvent)o.attachEvent(Hn(l.toString()),b);else if(o.addListener&&o.removeListener)o.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $n(){function o(h){return l.call(o.src,o.listener,h)}const l=Wt;return o}function Gt(o,l,h,b,P){if(Array.isArray(l))for(var N=0;N<l.length;N++)Gt(o,l[N],h,b,P);else b=c(b)?!!b.capture:!!b,h=Kt(h),o&&o[U]?(o=o.i,N=String(l).toString(),N in o.g&&(l=o.g[N],h=_e(l,h,b,P),h>-1&&($(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[N],o.h--)))):o&&(o=qn(o))&&(l=o.g[l.toString()],o=-1,l&&(o=_e(l,h,b,P)),(h=o>-1?l[o]:null)&&ct(h))}function ct(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[U])re(l.i,o);else{var h=o.type,b=o.proxy;l.removeEventListener?l.removeEventListener(h,b,o.capture):l.detachEvent?l.detachEvent(Hn(h),b):l.addListener&&l.removeListener&&l.removeListener(b),(h=qn(l))?(re(h,o),h.h==0&&(h.src=null,l[Ae]=null)):$(o)}}}function Hn(o){return o in Te?Te[o]:Te[o]="on"+o}function Wt(o,l){if(o.da)o=!0;else{l=new L(l,this);const h=o.listener,b=o.ha||o.src;o.fa&&ct(o),o=h.call(b,l)}return o}function qn(o){return o=o[Ae],o instanceof Fe?o:null}var Gn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Kt(o){return typeof o=="function"?o:(o[Gn]||(o[Gn]=function(l){return o.handleEvent(l)}),o[Gn])}function ke(){w.call(this),this.i=new Fe(this),this.M=this,this.G=null}I(ke,w),ke.prototype[U]=!0,ke.prototype.removeEventListener=function(o,l,h,b){Gt(this,o,l,h,b)};function De(o,l){var h,b=o.G;if(b)for(h=[];b;b=b.G)h.push(b);if(o=o.M,b=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var P=l;l=new E(b,o),le(l,P)}P=!0;let N,j;if(h)for(j=h.length-1;j>=0;j--)N=l.g=h[j],P=Wn(N,b,!0,l)&&P;if(N=l.g=o,P=Wn(N,b,!0,l)&&P,P=Wn(N,b,!1,l)&&P,h)for(j=0;j<h.length;j++)N=l.g=h[j],P=Wn(N,b,!1,l)&&P}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let b=0;b<h.length;b++)$(h[b]);delete o.g[l],o.h--}}this.G=null},ke.prototype.J=function(o,l,h,b){return this.i.add(String(o),l,!1,h,b)},ke.prototype.K=function(o,l,h,b){return this.i.add(String(o),l,!0,h,b)};function Wn(o,l,h,b){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let P=!0;for(let N=0;N<l.length;++N){const j=l[N];if(j&&!j.da&&j.capture==h){const se=j.listener,xe=j.ha||j.src;j.fa&&re(o.i,j),P=se.call(xe,b)!==!1&&P}}return P&&!b.defaultPrevented}function si(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function ii(o){o.g=si(()=>{o.g=null,o.i&&(o.i=!1,ii(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Xr extends w{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ii(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(o){w.call(this),this.h=o,this.g={}}I(vt,w);var Qt=[];function Xt(o){W(o.g,function(l,h){this.g.hasOwnProperty(h)&&ct(l)},o),o.g={}}vt.prototype.N=function(){vt.Z.N.call(this),Xt(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _r=a.JSON.stringify,oi=a.JSON.parse,ai=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function yr(){}function Yr(){}var Ct={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function hn(){E.call(this,"d")}I(hn,E);function lt(){E.call(this,"c")}I(lt,E);var rt={},wr=null;function fn(){return wr=wr||new ke}rt.Ia="serverreachability";function ui(o){E.call(this,rt.Ia,o)}I(ui,E);function Nt(o){const l=fn();De(l,new ui(l))}rt.STAT_EVENT="statevent";function Kn(o,l){E.call(this,rt.STAT_EVENT,o),this.stat=l}I(Kn,E);function $e(o){const l=fn();De(l,new Kn(l,o))}rt.Ja="timingevent";function pn(o,l){E.call(this,rt.Ja,o),this.size=l}I(pn,E);function Qn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function Xn(){this.g=!0}Xn.prototype.ua=function(){this.g=!1};function Oe(o,l,h,b,P,N){o.info(function(){if(o.g)if(N){var j="",se=N.split("&");for(let pe=0;pe<se.length;pe++){var xe=se[pe].split("=");if(xe.length>1){const je=xe[0];xe=xe[1];const Ot=je.split("_");j=Ot.length>=2&&Ot[1]=="type"?j+(je+"="+xe+"&"):j+(je+"=redacted&")}}}else j=null;else j=N;return"XMLHTTP REQ ("+b+") [attempt "+P+"]: "+l+`
`+h+`
`+j})}function mn(o,l,h,b,P,N,j){o.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+P+"]: "+l+`
`+h+`
`+N+" "+j})}function gn(o,l,h,b){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Jr(o,h)+(b?" "+b:"")})}function ci(o,l){o.info(function(){return"TIMEOUT: "+l})}Xn.prototype.info=function(){};function Jr(o,l){if(!o.g)return l;if(!l)return null;try{const N=JSON.parse(l);if(N){for(o=0;o<N.length;o++)if(Array.isArray(N[o])){var h=N[o];if(!(h.length<2)){var b=h[1];if(Array.isArray(b)&&!(b.length<1)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(let j=1;j<b.length;j++)b[j]=""}}}}return _r(N)}catch{return l}}var Yn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},li;function st(){}I(st,yr),st.prototype.g=function(){return new XMLHttpRequest},li=new st;function dt(o){return encodeURIComponent(String(o))}function di(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function bt(o,l,h,b){this.j=o,this.i=l,this.l=h,this.S=b||1,this.V=new vt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Er}function Er(){this.i=null,this.g="",this.h=!1}var es={},ht={};function Tr(o,l,h){o.M=1,o.A=fi(Dt(l)),o.u=h,o.R=!0,ts(o,null)}function ts(o,l){o.F=Date.now(),K(o),o.B=Dt(o.A);var h=o.B,b=o.S;Array.isArray(b)||(b=[String(b)]),ec(h.i,"t",b),o.C=0,h=o.j.L,o.h=new Er,o.g=yc(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Xr(m(o.Y,o,o.g),o.P)),l=o.V,h=o.g,b=o.ba;var P="readystatechange";Array.isArray(P)||(P&&(Qt[0]=P.toString()),P=Qt);for(let N=0;N<P.length;N++){const j=Ht(h,P[N],b||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=o.J?z(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Nt(),Oe(o.i,o.v,o.B,o.l,o.S,o.u)}bt.prototype.ba=function(o){o=o.target;const l=this.O;l&&wn(o)==3?l.j():this.Y(o)},bt.prototype.Y=function(o){try{if(o==this.g)e:{const se=wn(this.g),xe=this.g.ya(),pe=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||ac(this.g)))){this.K||se!=4||xe==7||(xe==8||pe<=0?Nt(3):Nt(2)),x(this);var l=this.g.ca();this.X=l;var h=hi(this);if(this.o=l==200,mn(this.i,this.v,this.B,this.l,this.S,se,l),this.o){if(this.U&&!this.L){t:{if(this.g){var b,P=this.g;if((b=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(b)){var N=b;break t}}N=null}if(o=N)gn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Le(this,o);else{this.o=!1,this.m=3,$e(12),he(this),G(this);break e}}if(this.R){o=!0;let je;for(;!this.K&&this.C<h.length;)if(je=$o(this,h),je==ht){se==4&&(this.m=4,$e(14),o=!1),gn(this.i,this.l,null,"[Incomplete Response]");break}else if(je==es){this.m=4,$e(15),gn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else gn(this.i,this.l,je,null),Le(this,je);if(ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||h.length!=0||this.h.h||(this.m=1,$e(16),o=!1),this.o=this.o&&o,!o)gn(this.i,this.l,h,"[Invalid Chunked Response]"),he(this),G(this);else if(h.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Qo(j),j.P=!0,$e(11))}}else gn(this.i,this.l,h,null),Le(this,h);se==4&&he(this),this.o&&!this.K&&(se==4?pc(this.j,this):(this.o=!1,K(this)))}else Np(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,$e(12)):(this.m=0,$e(13)),he(this),G(this)}}}catch{}finally{}};function hi(o){if(!ns(o))return o.g.la();const l=ac(o.g);if(l==="")return"";let h="";const b=l.length,P=wn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return he(o),G(o),"";o.h.i=new a.TextDecoder}for(let N=0;N<b;N++)o.h.h=!0,h+=o.h.i.decode(l[N],{stream:!(P&&N==b-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function ns(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function $o(o,l){var h=o.C,b=l.indexOf(`
`,h);return b==-1?ht:(h=Number(l.substring(h,b)),isNaN(h)?es:(b+=1,b+h>l.length?ht:(l=l.slice(b,b+h),o.C=b+h,l)))}bt.prototype.cancel=function(){this.K=!0,he(this)};function K(o){o.T=Date.now()+o.H,k(o,o.H)}function k(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Qn(m(o.aa,o),l)}function x(o){o.D&&(a.clearTimeout(o.D),o.D=null)}bt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(ci(this.i,this.B),this.M!=2&&(Nt(),$e(17)),he(this),this.m=2,G(this)):k(this,this.T-o)};function G(o){o.j.I==0||o.K||pc(o.j,o)}function he(o){x(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Xt(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Le(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Jn(h.h,o))){if(!o.L&&Jn(h.h,o)&&h.I==3){try{var b=h.Ba.g.parse(l)}catch{b=null}if(Array.isArray(b)&&b.length==3){var P=b;if(P[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)yi(h),gi(h);else break e;Ko(h),$e(18)}}else h.xa=P[1],0<h.xa-h.K&&P[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Qn(m(h.Va,h),6e3));Yt(h.h)<=1&&h.ta&&(h.ta=void 0)}else er(h,11)}else if((o.L||h.g==o)&&yi(h),!v(l))for(P=h.Ba.g.parse(l),l=0;l<P.length;l++){let pe=P[l];const je=pe[0];if(!(je<=h.K))if(h.K=je,pe=pe[1],h.I==2)if(pe[0]=="c"){h.M=pe[1],h.ba=pe[2];const Ot=pe[3];Ot!=null&&(h.ka=Ot,h.j.info("VER="+h.ka));const tr=pe[4];tr!=null&&(h.za=tr,h.j.info("SVER="+h.za));const En=pe[5];En!=null&&typeof En=="number"&&En>0&&(b=1.5*En,h.O=b,h.j.info("backChannelRequestTimeoutMs_="+b)),b=h;const Tn=o.g;if(Tn){const Ei=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ei){var N=b.h;N.g||Ei.indexOf("spdy")==-1&&Ei.indexOf("quic")==-1&&Ei.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Pe(N,N.h),N.h=null))}if(b.G){const Xo=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Xo&&(b.wa=Xo,ye(b.J,b.G,Xo))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),b=h;var j=o;if(b.na=_c(b,b.L?b.ba:null,b.W),j.L){rs(b.h,j);var se=j,xe=b.O;xe&&(se.H=xe),se.D&&(x(se),K(se)),b.g=j}else hc(b);h.i.length>0&&_i(h)}else pe[0]!="stop"&&pe[0]!="close"||er(h,7);else h.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?er(h,7):Wo(h):pe[0]!="noop"&&h.l&&h.l.qa(pe),h.A=0)}}Nt(4)}catch{}}var Re=class{constructor(o,l){this.g=o,this.map=l}};function He(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function gt(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Yt(o){return o.h?1:o.g?o.g.size:0}function Jn(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Pe(o,l){o.g?o.g.add(l):o.h=l}function rs(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}He.prototype.cancel=function(){if(this.i=ss(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ss(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return C(o.i)}var Qu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wp(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const b=o[h].indexOf("=");let P,N=null;b>=0?(P=o[h].substring(0,b),N=o[h].substring(b+1)):P=o[h],l(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function _n(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof _n?(this.l=o.l,is(this,o.j),this.o=o.o,this.g=o.g,os(this,o.u),this.h=o.h,Ho(this,tc(o.i)),this.m=o.m):o&&(l=String(o).match(Qu))?(this.l=!1,is(this,l[1]||"",!0),this.o=as(l[2]||""),this.g=as(l[3]||"",!0),os(this,l[4]),this.h=as(l[5]||"",!0),Ho(this,l[6]||"",!0),this.m=as(l[7]||"")):(this.l=!1,this.i=new cs(null,this.l))}_n.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(us(l,Xu,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(us(l,Xu,!0),"@"),o.push(dt(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(us(h,h.charAt(0)=="/"?vp:Tp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",us(h,Ip)),o.join("")},_n.prototype.resolve=function(o){const l=Dt(this);let h=!!o.j;h?is(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var b=o.h;if(h)os(l,o.u);else if(h=!!o.h){if(b.charAt(0)!="/")if(this.g&&!this.h)b="/"+b;else{var P=l.h.lastIndexOf("/");P!=-1&&(b=l.h.slice(0,P+1)+b)}if(P=b,P==".."||P==".")b="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){b=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let j=0;j<P.length;){const se=P[j++];se=="."?b&&j==P.length&&N.push(""):se==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),b&&j==P.length&&N.push("")):(N.push(se),b=!0)}b=N.join("/")}else b=P}return h?l.h=b:h=o.i.toString()!=="",h?Ho(l,tc(o.i)):h=!!o.m,h&&(l.m=o.m),l};function Dt(o){return new _n(o)}function is(o,l,h){o.j=h?as(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function os(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Ho(o,l,h){l instanceof cs?(o.i=l,Ap(o.i,o.l)):(h||(l=us(l,bp)),o.i=new cs(l,o.l))}function ye(o,l,h){o.i.set(l,h)}function fi(o){return ye(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function as(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function us(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Ep),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ep(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xu=/[#\/\?@]/g,Tp=/[#\?:]/g,vp=/[#\?]/g,bp=/[#\?@]/g,Ip=/#/g;function cs(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Zn(o){o.g||(o.g=new Map,o.h=0,o.i&&wp(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=cs.prototype,n.add=function(o,l){Zn(this),this.i=null,o=vr(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Yu(o,l){Zn(o),l=vr(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ju(o,l){return Zn(o),l=vr(o,l),o.g.has(l)}n.forEach=function(o,l){Zn(this),this.g.forEach(function(h,b){h.forEach(function(P){o.call(l,P,b,this)},this)},this)};function Zu(o,l){Zn(o);let h=[];if(typeof l=="string")Ju(o,l)&&(h=h.concat(o.g.get(vr(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return Zn(this),this.i=null,o=vr(this,o),Ju(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Zu(this,o),o.length>0?String(o[0]):l):l};function ec(o,l,h){Yu(o,l),h.length>0&&(o.i=null,o.g.set(vr(o,l),C(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let b=0;b<l.length;b++){var h=l[b];const P=dt(h);h=Zu(this,h);for(let N=0;N<h.length;N++){let j=P;h[N]!==""&&(j+="="+dt(h[N])),o.push(j)}}return this.i=o.join("&")};function tc(o){const l=new cs;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function vr(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Ap(o,l){l&&!o.j&&(Zn(o),o.i=null,o.g.forEach(function(h,b){const P=b.toLowerCase();b!=P&&(Yu(this,b),ec(this,P,h))},o)),o.j=l}function Rp(o,l){const h=new Xn;if(a.Image){const b=new Image;b.onload=T(yn,h,"TestLoadImage: loaded",!0,l,b),b.onerror=T(yn,h,"TestLoadImage: error",!1,l,b),b.onabort=T(yn,h,"TestLoadImage: abort",!1,l,b),b.ontimeout=T(yn,h,"TestLoadImage: timeout",!1,l,b),a.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=o}else l(!1)}function Sp(o,l){const h=new Xn,b=new AbortController,P=setTimeout(()=>{b.abort(),yn(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:b.signal}).then(N=>{clearTimeout(P),N.ok?yn(h,"TestPingServer: ok",!0,l):yn(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),yn(h,"TestPingServer: error",!1,l)})}function yn(o,l,h,b,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),b(h)}catch{}}function kp(){this.g=new ai}function qo(o){this.i=o.Sb||null,this.h=o.ab||!1}I(qo,yr),qo.prototype.g=function(){return new pi(this.i,this.h)};function pi(o,l){ke.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(pi,ke),n=pi.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,ds(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;nc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function nc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ls(this):ds(this),this.readyState==3&&nc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,ls(this))},n.Na=function(o){this.g&&(this.response=o,ls(this))},n.ga=function(){this.g&&ls(this)};function ls(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ds(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function ds(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function rc(o){let l="";return W(o,function(h,b){l+=b,l+=":",l+=h,l+=`\r
`}),l}function Go(o,l,h){e:{for(b in h){var b=!1;break e}b=!0}b||(h=rc(h),typeof o=="string"?h!=null&&dt(h):ye(o,l,h))}function Se(o){ke.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(Se,ke);var Pp=/^https?$/i,Cp=["POST","PUT"];n=Se.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():li.g(),this.g.onreadystatechange=S(m(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(N){sc(this,N);return}if(o=h||"",h=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var P in b)h.set(P,b[P]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const N of b.keys())h.set(N,b.get(N));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(h.keys()).find(N=>N.toLowerCase()=="content-type"),P=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Cp,l,void 0)>=0)||b||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of h)this.g.setRequestHeader(N,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(N){sc(this,N)}};function sc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,ic(o),mi(o)}function ic(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,De(this,"complete"),De(this,"abort"),mi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mi(this,!0)),Se.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?oc(this):this.Xa())},n.Xa=function(){oc(this)};function oc(o){if(o.h&&typeof i<"u"){if(o.v&&wn(o)==4)setTimeout(o.Ca.bind(o),0);else if(De(o,"readystatechange"),wn(o)==4){o.h=!1;try{const N=o.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var b;if(b=N===0){let j=String(o.D).match(Qu)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),b=!Pp.test(j?j.toLowerCase():"")}h=b}if(h)De(o,"complete"),De(o,"success");else{o.o=6;try{var P=wn(o)>2?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.ca()+"]",ic(o)}}finally{mi(o)}}}}function mi(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||De(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function wn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return wn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),oi(l)}};function ac(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Np(o){const l={};o=(o.g&&wn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<o.length;b++){if(v(o[b]))continue;var h=di(o[b]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const N=l[P]||[];l[P]=N,N.push(h)}ie(l,function(b){return b.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function uc(o){this.za=0,this.i=[],this.j=new Xn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hs("baseRetryDelayMs",5e3,o),this.Za=hs("retryDelaySeedMs",1e4,o),this.Ta=hs("forwardChannelMaxRetries",2,o),this.va=hs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new He(o&&o.concurrentRequestLimit),this.Ba=new kp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=uc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,b){$e(0),this.W=o,this.H=l||{},h&&b!==void 0&&(this.H.OSID=h,this.H.OAID=b),this.F=this.X,this.J=_c(this,null,this.W),_i(this)};function Wo(o){if(cc(o),o.I==3){var l=o.V++,h=Dt(o.J);if(ye(h,"SID",o.M),ye(h,"RID",l),ye(h,"TYPE","terminate"),fs(o,h),l=new bt(o,o.j,l),l.M=2,l.A=fi(Dt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=yc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),K(l)}gc(o)}function gi(o){o.g&&(Qo(o),o.g.cancel(),o.g=null)}function cc(o){gi(o),o.v&&(a.clearTimeout(o.v),o.v=null),yi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function _i(o){if(!gt(o.h)&&!o.m){o.m=!0;var l=o.Ea;_||g(),f||(_(),f=!0),p.add(l,o),o.D=0}}function Dp(o,l){return Yt(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Qn(m(o.Ea,o,l),mc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const P=new bt(this,this.j,o);let N=this.o;if(this.U&&(N?(N=z(N),le(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var b=this.i[h];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(l+=b,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=dc(this,P,l),h=Dt(this.J),ye(h,"RID",o),ye(h,"CVER",22),this.G&&ye(h,"X-HTTP-Session-Id",this.G),fs(this,h),N&&(this.R?l="headers="+dt(rc(N))+"&"+l:this.u&&Go(h,this.u,N)),Pe(this.h,P),this.Ra&&ye(h,"TYPE","init"),this.S?(ye(h,"$req",l),ye(h,"SID","null"),P.U=!0,Tr(P,h,null)):Tr(P,h,l),this.I=2}}else this.I==3&&(o?lc(this,o):this.i.length==0||gt(this.h)||lc(this))};function lc(o,l){var h;l?h=l.l:h=o.V++;const b=Dt(o.J);ye(b,"SID",o.M),ye(b,"RID",h),ye(b,"AID",o.K),fs(o,b),o.u&&o.o&&Go(b,o.u,o.o),h=new bt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=dc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Pe(o.h,h),Tr(h,b,l)}function fs(o,l){o.H&&W(o.H,function(h,b){ye(l,b,h)}),o.l&&W({},function(h,b){ye(l,b,h)})}function dc(o,l,h){h=Math.min(o.i.length,h);const b=o.l?m(o.l.Ka,o.l,o):null;e:{var P=o.i;let se=-1;for(;;){const xe=["count="+h];se==-1?h>0?(se=P[0].g,xe.push("ofs="+se)):se=0:xe.push("ofs="+se);let pe=!0;for(let je=0;je<h;je++){var N=P[je].g;const Ot=P[je].map;if(N-=se,N<0)se=Math.max(0,P[je].g-100),pe=!1;else try{N="req"+N+"_"||"";try{var j=Ot instanceof Map?Ot:Object.entries(Ot);for(const[tr,En]of j){let Tn=En;c(En)&&(Tn=_r(En)),xe.push(N+tr+"="+encodeURIComponent(Tn))}}catch(tr){throw xe.push(N+"type="+encodeURIComponent("_badmap")),tr}}catch{b&&b(Ot)}}if(pe){j=xe.join("&");break e}}j=void 0}return o=o.i.splice(0,h),l.G=o,j}function hc(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;_||g(),f||(_(),f=!0),p.add(l,o),o.A=0}}function Ko(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Qn(m(o.Da,o),mc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,fc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Qn(m(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,$e(10),gi(this),fc(this))};function Qo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function fc(o){o.g=new bt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Dt(o.na);ye(l,"RID","rpc"),ye(l,"SID",o.M),ye(l,"AID",o.K),ye(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&ye(l,"TO",o.ia),ye(l,"TYPE","xmlhttp"),fs(o,l),o.u&&o.o&&Go(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=fi(Dt(l)),h.u=null,h.R=!0,ts(h,o)}n.Va=function(){this.C!=null&&(this.C=null,gi(this),Ko(this),$e(19))};function yi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function pc(o,l){var h=null;if(o.g==l){yi(o),Qo(o),o.g=null;var b=2}else if(Jn(o.h,l))h=l.G,rs(o.h,l),b=1;else return;if(o.I!=0){if(l.o)if(b==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var P=o.D;b=fn(),De(b,new pn(b,h)),_i(o)}else hc(o);else if(P=l.m,P==3||P==0&&l.X>0||!(b==1&&Dp(o,l)||b==2&&Ko(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),P){case 1:er(o,5);break;case 4:er(o,10);break;case 3:er(o,6);break;default:er(o,2)}}}function mc(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function er(o,l){if(o.j.info("Error code "+l),l==2){var h=m(o.bb,o),b=o.Ua;const P=!b;b=new _n(b||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||is(b,"https"),fi(b),P?Rp(b.toString(),h):Sp(b.toString(),h)}else $e(2);o.I=0,o.l&&o.l.pa(l),gc(o),cc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function gc(o){if(o.I=0,o.ja=[],o.l){const l=ss(o.h);(l.length!=0||o.i.length!=0)&&(O(o.ja,l),O(o.ja,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.oa()}}function _c(o,l,h){var b=h instanceof _n?Dt(h):new _n(h);if(b.g!="")l&&(b.g=l+"."+b.g),os(b,b.u);else{var P=a.location;b=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;const N=new _n(null);b&&is(N,b),l&&(N.g=l),P&&os(N,P),h&&(N.h=h),b=N}return h=o.G,l=o.wa,h&&l&&ye(b,h,l),ye(b,"VER",o.ka),fs(o,b),b}function yc(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new Se(new qo({ab:h})):new Se(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wc(){}n=wc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function wi(){}wi.prototype.g=function(o,l){return new ft(o,l)};function ft(o,l){ke.call(this),this.g=new uc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!v(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!v(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new br(this)}I(ft,ke),ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Wo(this.g)},ft.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=_r(o),o=h);l.i.push(new Re(l.Ya++,o)),l.I==3&&_i(l)},ft.prototype.N=function(){this.g.l=null,delete this.j,Wo(this.g),delete this.g,ft.Z.N.call(this)};function Ec(o){hn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}I(Ec,hn);function Tc(){lt.call(this),this.status=1}I(Tc,lt);function br(o){this.g=o}I(br,wc),br.prototype.ra=function(){De(this.g,"a")},br.prototype.qa=function(o){De(this.g,new Ec(o))},br.prototype.pa=function(o){De(this.g,new Tc)},br.prototype.oa=function(){De(this.g,"b")},wi.prototype.createWebChannel=wi.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,yh=function(){return new wi},_h=function(){return fn()},gh=rt,Pa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yn.NO_ERROR=0,Yn.TIMEOUT=8,Yn.HTTP_ERROR=6,Ui=Yn,Zr.COMPLETE="complete",mh=Zr,Yr.EventType=Ct,Ct.OPEN="a",Ct.CLOSE="b",Ct.ERROR="c",Ct.MESSAGE="d",ke.prototype.listen=ke.prototype.J,vs=Yr,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,ph=Se}).apply(typeof Ii<"u"?Ii:typeof self<"u"?self:typeof window<"u"?window:{});const al="@firebase/firestore",ul="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Qa("@firebase/firestore");function Ar(){return lr.logLevel}function q(n,...e){if(lr.logLevel<=ae.DEBUG){const t=e.map(au);lr.debug(`Firestore (${Hr}): ${n}`,...t)}}function un(n,...e){if(lr.logLevel<=ae.ERROR){const t=e.map(au);lr.error(`Firestore (${Hr}): ${n}`,...t)}}function Vr(n,...e){if(lr.logLevel<=ae.WARN){const t=e.map(au);lr.warn(`Firestore (${Hr}): ${n}`,...t)}}function au(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,wh(n,r,t)}function wh(n,e,t){let r=`FIRESTORE (${Hr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw un(r),new Error(r)}function fe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||wh(e,s,r)}function ne(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Qe.UNAUTHENTICATED))}shutdown(){}}class sw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iw{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){fe(this.o===void 0,42304);let r=this.i;const s=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let i=new nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const d=i;e.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new Eh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new Qe(e)}}class ow{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ow(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){fe(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new cl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Ca(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return la(s)===la(i)?ue(s,i):la(s)?1:-1}return ue(n.length,e.length)}const lw=55296,dw=57343;function la(n){const e=n.charCodeAt(0);return e>=lw&&e<=dw}function Ur(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="__name__";class Lt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Lt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Lt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Lt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=Lt.isNumericId(e),s=Lt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Lt.extractNumericId(e).compare(Lt.extractNumericId(t)):Ca(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nn.fromString(e.substring(4,e.length-2))}}class me extends Lt{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new me(t)}static emptyPath(){return new me([])}}const hw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Lt{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return hw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ll}static keyField(){return new Ge([ll])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new H(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new H(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new H(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(me.fromString(e))}static fromName(e){return new Q(me.fromString(e).popFirst(5))}static empty(){return new Q(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n,e,t){if(!t)throw new H(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fw(n,e,t,r){if(e===!0&&r===!0)throw new H(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dl(n){if(!Q.isDocumentKey(n))throw new H(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hl(n){if(Q.isDocumentKey(n))throw new H(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function To(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function St(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=To(n);throw new H(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function pw(n,e){if(e<=0)throw new H(D.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function Xs(n,e){if(!vh(n))throw new H(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new H(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=-62135596800,pl=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*pl);return new we(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fl)throw new H(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pl}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xs(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Ue("string",we._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new we(0,0))}static max(){return new te(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=-1;function mw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new we(t+1,0):new we(t,r));return new Ln(s,Q.empty(),e)}function gw(n){return new Ln(n.readTime,n.key,Ms)}class Ln{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ln(te.min(),Q.empty(),Ms)}static max(){return new Ln(te.max(),Q.empty(),Ms)}}function _w(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ww{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==yw)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},d=>r(d))}),a=!0,i===s&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(s=>s?M.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new M((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let d=0;d<i;d++){const m=d;t(e[m]).next(T=>{a[m]=T,++c,c===i&&r(a)},T=>s(T))}})}static doWhile(e,t){return new M((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Ew(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}vo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=-1;function bo(n){return n==null}function Ji(n){return n===0&&1/n==-1/0}function Tw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ji(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="";function vw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ml(e)),e=bw(n.get(t),e);return ml(e)}function bw(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case bh:t+="";break;default:t+=i}}return t}function ml(n){return n+bh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ih(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||qe.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ai(this.root,e,this.comparator,!0)}}class Ai{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new qe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _l(this.data.getIterator())}getIteratorFrom(e){return new _l(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Be(this.comparator);return t.data=e,t}}class _l{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new pt([])}unionWith(e){let t=new Be(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ur(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ah("Invalid base64 string: "+i):i}}(e);return new We(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new We(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Iw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(n){if(fe(!!n,39018),typeof n=="string"){let e=0;const t=Iw.exec(n);if(fe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(n.seconds),nanos:Ce(n.nanos)}}function Ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vn(n){return typeof n=="string"?We.fromBase64String(n):We.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="server_timestamp",Sh="__type__",kh="__previous_value__",Ph="__local_write_time__";function lu(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sh])==null?void 0:r.stringValue)===Rh}function Io(n){const e=n.mapValue.fields[kh];return lu(e)?Io(e):e}function Vs(n){const e=Mn(n.mapValue.fields[Ph].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,r,s,i,a,c,d,m,T){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=m,this.isUsingEmulator=T}}const Zi="(default)";class Us{constructor(e,t){this.projectId=e,this.database=t||Zi}static empty(){return new Us("","")}get isDefaultDatabase(){return this.database===Zi}isEqual(e){return e instanceof Us&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="__type__",Rw="__max__",Ri={mapValue:{}},Nh="__vector__",eo="value";function Un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lu(n)?4:kw(n)?9007199254740991:Sw(n)?10:11:ee(28295,{value:n})}function jt(n,e){if(n===e)return!0;const t=Un(n);if(t!==Un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vs(n).isEqual(Vs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Mn(s.timestampValue),c=Mn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Vn(s.bytesValue).isEqual(Vn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ce(s.doubleValue),c=Ce(i.doubleValue);return a===c?Ji(a)===Ji(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Ur(n.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(gl(a)!==gl(c))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(c[d]===void 0||!jt(a[d],c[d])))return!1;return!0}(n,e);default:return ee(52216,{left:n})}}function Fs(n,e){return(n.values||[]).find(t=>jt(t,e))!==void 0}function Fr(n,e){if(n===e)return 0;const t=Un(n),r=Un(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ce(i.integerValue||i.doubleValue),d=Ce(a.integerValue||a.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,e);case 3:return yl(n.timestampValue,e.timestampValue);case 4:return yl(Vs(n),Vs(e));case 5:return Ca(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Vn(i),d=Vn(a);return c.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),d=a.split("/");for(let m=0;m<c.length&&m<d.length;m++){const T=ue(c[m],d[m]);if(T!==0)return T}return ue(c.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ue(Ce(i.latitude),Ce(a.latitude));return c!==0?c:ue(Ce(i.longitude),Ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return wl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var S,C,O,B;const c=i.fields||{},d=a.fields||{},m=(S=c[eo])==null?void 0:S.arrayValue,T=(C=d[eo])==null?void 0:C.arrayValue,I=ue(((O=m==null?void 0:m.values)==null?void 0:O.length)||0,((B=T==null?void 0:T.values)==null?void 0:B.length)||0);return I!==0?I:wl(m,T)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ri.mapValue&&a===Ri.mapValue)return 0;if(i===Ri.mapValue)return 1;if(a===Ri.mapValue)return-1;const c=i.fields||{},d=Object.keys(c),m=a.fields||{},T=Object.keys(m);d.sort(),T.sort();for(let I=0;I<d.length&&I<T.length;++I){const S=Ca(d[I],T[I]);if(S!==0)return S;const C=Fr(c[d[I]],m[T[I]]);if(C!==0)return C}return ue(d.length,T.length)}(n.mapValue,e.mapValue);default:throw ee(23264,{he:t})}}function yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Mn(n),r=Mn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function wl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Fr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function xr(n){return Na(n)}function Na(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Mn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Na(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Na(t.fields[a])}`;return s+"}"}(n.mapValue):ee(61005,{value:n})}function Fi(n){switch(Un(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Io(n);return e?16+Fi(e):16;case 5:return 2*n.stringValue.length;case 6:return Vn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Fi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Bn(r.fields,(i,a)=>{s+=i.length+Fi(a)}),s}(n.mapValue);default:throw ee(13486,{value:n})}}function El(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Da(n){return!!n&&"integerValue"in n}function du(n){return!!n&&"arrayValue"in n}function Tl(n){return!!n&&"nullValue"in n}function vl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xi(n){return!!n&&"mapValue"in n}function Sw(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ch])==null?void 0:r.stringValue)===Nh}function ks(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ks(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ks(n.arrayValue.values[t]);return e}return{...n}}function kw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Rw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!xi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ks(t)}setAll(e){let t=Ge.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const d=this.getFieldsMap(t);this.applyChanges(d,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ks(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());xi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];xi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Bn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new at(ks(this.value))}}function Dh(n){const e=[];return Bn(n.fields,(t,r)=>{const s=new Ge([t]);if(xi(r)){const i=Dh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Xe(e,0,te.min(),te.min(),te.min(),at.empty(),0)}static newFoundDocument(e,t,r,s){return new Xe(e,1,t,te.min(),r,s,0)}static newNoDocument(e,t){return new Xe(e,2,t,te.min(),te.min(),at.empty(),0)}static newUnknownDocument(e,t){return new Xe(e,3,t,te.min(),te.min(),at.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t){this.position=e,this.inclusive=t}}function bl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),t.key):r=Fr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Il(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!jt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{}class Ve extends Oh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Nw(e,t,r):t==="array-contains"?new Lw(e,r):t==="in"?new Mw(e,r):t==="not-in"?new Vw(e,r):t==="array-contains-any"?new Uw(e,r):new Ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Dw(e,r):new Ow(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fr(t,this.value)):t!==null&&Un(this.value)===Un(t)&&this.matchesComparison(Fr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Oh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new kt(e,t)}matches(e){return Lh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lh(n){return n.op==="and"}function Mh(n){return Cw(n)&&Lh(n)}function Cw(n){for(const e of n.filters)if(e instanceof kt)return!1;return!0}function Oa(n){if(n instanceof Ve)return n.field.canonicalString()+n.op.toString()+xr(n.value);if(Mh(n))return n.filters.map(e=>Oa(e)).join(",");{const e=n.filters.map(t=>Oa(t)).join(",");return`${n.op}(${e})`}}function Vh(n,e){return n instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&jt(r.value,s.value)}(n,e):n instanceof kt?function(r,s){return s instanceof kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Vh(a,s.filters[c]),!0):!1}(n,e):void ee(19439)}function Uh(n){return n instanceof Ve?function(t){return`${t.field.canonicalString()} ${t.op} ${xr(t.value)}`}(n):n instanceof kt?function(t){return t.op.toString()+" {"+t.getFilters().map(Uh).join(" ,")+"}"}(n):"Filter"}class Nw extends Ve{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Dw extends Ve{constructor(e,t){super(e,"in",t),this.keys=Fh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ow extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=Fh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class Lw extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return du(t)&&Fs(t.arrayValue,this.value)}}class Mw extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fs(this.value.arrayValue,t)}}class Vw extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fs(this.value.arrayValue,t)}}class Uw extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!du(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Fs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Al(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Fw(n,e,t,r,s,i,a)}function hu(n){const e=ne(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Oa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xr(r)).join(",")),e.Te=t}return e.Te}function fu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Pw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Il(n.startAt,e.startAt)&&Il(n.endAt,e.endAt)}function La(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function xw(n,e,t,r,s,i,a,c){return new Wr(n,e,t,r,s,i,a,c)}function pu(n){return new Wr(n)}function Rl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xh(n){return n.collectionGroup!==null}function Ps(n){const e=ne(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Be(Ge.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(m=>{m.isInequality()&&(c=c.add(m.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new xs(i,r))}),t.has(Ge.keyField().canonicalString())||e.Ie.push(new xs(Ge.keyField(),r))}return e.Ie}function Ut(n){const e=ne(n);return e.Ee||(e.Ee=Bw(e,Ps(n))),e.Ee}function Bw(n,e){if(n.limitType==="F")return Al(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xs(s.field,i)});const t=n.endAt?new to(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new to(n.startAt.position,n.startAt.inclusive):null;return Al(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ma(n,e){const t=n.filters.concat([e]);return new Wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function no(n,e,t){return new Wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ao(n,e){return fu(Ut(n),Ut(e))&&n.limitType===e.limitType}function Bh(n){return`${hu(Ut(n))}|lt:${n.limitType}`}function Rr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Uh(s)).join(", ")}]`),bo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>xr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>xr(s)).join(",")),`Target(${r})`}(Ut(n))}; limitType=${n.limitType})`}function Ro(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ps(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,d){const m=bl(a,c,d);return a.inclusive?m<=0:m<0}(r.startAt,Ps(r),s)||r.endAt&&!function(a,c,d){const m=bl(a,c,d);return a.inclusive?m>=0:m>0}(r.endAt,Ps(r),s))}(n,e)}function jw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jh(n){return(e,t)=>{let r=!1;for(const s of Ps(n)){const i=zw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zw(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,a,c){const d=a.data.field(i),m=c.data.field(i);return d!==null&&m!==null?Fr(d,m):ee(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ih(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new ve(Q.comparator);function cn(){return $w}const zh=new ve(Q.comparator);function bs(...n){let e=zh;for(const t of n)e=e.insert(t.key,t);return e}function $h(n){let e=zh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function sr(){return Cs()}function Hh(){return Cs()}function Cs(){return new pr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Hw=new ve(Q.comparator),qw=new Be(Q.comparator);function ce(...n){let e=qw;for(const t of n)e=e.add(t);return e}const Gw=new Be(ue);function Ww(){return Gw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ji(e)?"-0":e}}function qh(n){return{integerValue:""+n}}function Kw(n,e){return Tw(e)?qh(e):mu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this._=void 0}}function Qw(n,e,t){return n instanceof Bs?function(s,i){const a={fields:{[Sh]:{stringValue:Rh},[Ph]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lu(i)&&(i=Io(i)),i&&(a.fields[kh]=i),{mapValue:a}}(t,e):n instanceof js?Wh(n,e):n instanceof zs?Kh(n,e):function(s,i){const a=Gh(s,i),c=Sl(a)+Sl(s.Ae);return Da(a)&&Da(s.Ae)?qh(c):mu(s.serializer,c)}(n,e)}function Xw(n,e,t){return n instanceof js?Wh(n,e):n instanceof zs?Kh(n,e):t}function Gh(n,e){return n instanceof ro?function(r){return Da(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bs extends So{}class js extends So{constructor(e){super(),this.elements=e}}function Wh(n,e){const t=Qh(e);for(const r of n.elements)t.some(s=>jt(s,r))||t.push(r);return{arrayValue:{values:t}}}class zs extends So{constructor(e){super(),this.elements=e}}function Kh(n,e){let t=Qh(e);for(const r of n.elements)t=t.filter(s=>!jt(s,r));return{arrayValue:{values:t}}}class ro extends So{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Sl(n){return Ce(n.integerValue||n.doubleValue)}function Qh(n){return du(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t){this.field=e,this.transform=t}}function Jw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof js&&s instanceof js||r instanceof zs&&s instanceof zs?Ur(r.elements,s.elements,jt):r instanceof ro&&s instanceof ro?jt(r.Ae,s.Ae):r instanceof Bs&&s instanceof Bs}(n.transform,e.transform)}class Zw{constructor(e,t){this.version=e,this.transformResults=t}}class wt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ko{}function Xh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new gu(n.key,wt.none()):new Ys(n.key,n.data,wt.none());{const t=n.data,r=at.empty();let s=new Be(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new jn(n.key,r,new pt(s.toArray()),wt.none())}}function eE(n,e,t){n instanceof Ys?function(s,i,a){const c=s.value.clone(),d=Pl(s.fieldTransforms,i,a.transformResults);c.setAll(d),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof jn?function(s,i,a){if(!Bi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Pl(s.fieldTransforms,i,a.transformResults),d=i.data;d.setAll(Yh(s)),d.setAll(c),i.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ns(n,e,t,r){return n instanceof Ys?function(i,a,c,d){if(!Bi(i.precondition,a))return c;const m=i.value.clone(),T=Cl(i.fieldTransforms,d,a);return m.setAll(T),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof jn?function(i,a,c,d){if(!Bi(i.precondition,a))return c;const m=Cl(i.fieldTransforms,d,a),T=a.data;return T.setAll(Yh(i)),T.setAll(m),a.convertToFoundDocument(a.version,T).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(i,a,c){return Bi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function tE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Gh(r.transform,s||null);i!=null&&(t===null&&(t=at.empty()),t.set(r.field,i))}return t||null}function kl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ur(r,s,(i,a)=>Jw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ys extends ko{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jn extends ko{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Pl(n,e,t){const r=new Map;fe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Xw(a,c,t[s]))}return r}function Cl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Qw(i,a,e))}return r}class gu extends ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nE extends ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Hh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const d=Xh(a,c);d!==null&&r.set(s.key,d),a.isValidDocument()||a.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&Ur(this.mutations,e.mutations,(t,r)=>kl(t,r))&&Ur(this.baseMutations,e.baseMutations,(t,r)=>kl(t,r))}}class _u{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Hw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new _u(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,de;function oE(n){switch(n){case D.OK:return ee(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function Jh(n){if(n===void 0)return un("GRPC error has no .code"),D.UNKNOWN;switch(n){case Me.OK:return D.OK;case Me.CANCELLED:return D.CANCELLED;case Me.UNKNOWN:return D.UNKNOWN;case Me.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Me.INTERNAL:return D.INTERNAL;case Me.UNAVAILABLE:return D.UNAVAILABLE;case Me.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Me.NOT_FOUND:return D.NOT_FOUND;case Me.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Me.ABORTED:return D.ABORTED;case Me.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Me.DATA_LOSS:return D.DATA_LOSS;default:return ee(39323,{code:n})}}(de=Me||(Me={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=new Nn([4294967295,4294967295],0);function Nl(n){const e=aE().encode(n),t=new fh;return t.update(e),new Uint8Array(t.digest())}function Dl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Nn([t,r],0),new Nn([s,i],0)]}class yu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Is(`Invalid padding: ${t}`);if(r<0)throw new Is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Is(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Is(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Nn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Nn.fromNumber(r)));return s.compare(uE)===1&&(s=new Nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Nl(e),[r,s]=Dl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new yu(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Nl(e),[r,s]=Dl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Po(te.min(),s,new ve(ue),cn(),ce())}}class Js{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Js(r,t,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Zh{constructor(e,t){this.targetId=e,this.Ce=t}}class ef{constructor(e,t,r=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ol{constructor(){this.ve=0,this.Fe=Ll(),this.Me=We.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),t=ce(),r=ce();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new Js(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Ll()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class cE{constructor(e){this.Ge=e,this.ze=new Map,this.je=cn(),this.Je=Si(),this.He=Si(),this.Ye=new ve(ue)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(La(i))if(r===0){const a=new Q(i.path);this.et(t,a,Xe.newNoDocument(a,te.min()))}else fe(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),d=c?this.ct(c,e,a):1;if(d!==0){this.it(t);const m=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,m)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Vn(r).toUint8Array()}catch(d){if(d instanceof Ah)return Vr("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new yu(a,s,i)}catch(d){return Vr(d instanceof Is?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&La(c.target)){const d=new Q(c.target.path);this.It(d).has(a)||this.Et(a,d)||this.et(a,d,Xe.newNoDocument(d,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=ce();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(d=>{const m=this.ot(d);return!m||m.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Po(e,t,this.Ye,this.je,r);return this.je=cn(),this.Je=Si(),this.He=Si(),this.Ye=new ve(ue),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Ol,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Be(ue),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Be(ue),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ol),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Si(){return new ve(Q.comparator)}function Ll(){return new ve(Q.comparator)}const lE={asc:"ASCENDING",desc:"DESCENDING"},dE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hE={and:"AND",or:"OR"};class fE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Va(n,e){return n.useProto3Json||bo(e)?e:{value:e}}function so(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function pE(n,e){return so(n,e.toTimestamp())}function Ft(n){return fe(!!n,49232),te.fromTimestamp(function(t){const r=Mn(t);return new we(r.seconds,r.nanos)}(n))}function wu(n,e){return Ua(n,e).canonicalString()}function Ua(n,e){const t=function(s){return new me(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function nf(n){const e=me.fromString(n);return fe(uf(e),10190,{key:e.toString()}),e}function Fa(n,e){return wu(n.databaseId,e.path)}function da(n,e){const t=nf(e);if(t.get(1)!==n.databaseId.projectId)throw new H(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(sf(t))}function rf(n,e){return wu(n.databaseId,e)}function mE(n){const e=nf(n);return e.length===4?me.emptyPath():sf(e)}function xa(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sf(n){return fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ml(n,e,t){return{name:Fa(n,e),fields:t.value.mapValue.fields}}function gE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:ee(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(m,T){return m.useProto3Json?(fe(T===void 0||typeof T=="string",58123),We.fromBase64String(T||"")):(fe(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),We.fromUint8Array(T||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(m){const T=m.code===void 0?D.UNKNOWN:Jh(m.code);return new H(T,m.message||"")}(a);t=new ef(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=da(n,r.document.name),i=Ft(r.document.updateTime),a=r.document.createTime?Ft(r.document.createTime):te.min(),c=new at({mapValue:{fields:r.document.fields}}),d=Xe.newFoundDocument(s,i,a,c),m=r.targetIds||[],T=r.removedTargetIds||[];t=new ji(m,T,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=da(n,r.document),i=r.readTime?Ft(r.readTime):te.min(),a=Xe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ji([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=da(n,r.document),i=r.removedTargetIds||[];t=new ji([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new iE(s,i),c=r.targetId;t=new Zh(c,a)}}return t}function _E(n,e){let t;if(e instanceof Ys)t={update:Ml(n,e.key,e.value)};else if(e instanceof gu)t={delete:Fa(n,e.key)};else if(e instanceof jn)t={update:Ml(n,e.key,e.data),updateMask:RE(e.fieldMask)};else{if(!(e instanceof nE))return ee(16599,{Vt:e.type});t={verify:Fa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Bs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof js)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof zs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ro)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ee(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(n,e.precondition)),t}function yE(n,e){return n&&n.length>0?(fe(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Ft(s.updateTime):Ft(i);return a.isEqual(te.min())&&(a=Ft(i)),new Zw(a,s.transformResults||[])}(t,e))):[]}function wE(n,e){return{documents:[rf(n,e.path)]}}function EE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=rf(n,s);const i=function(m){if(m.length!==0)return af(kt.create(m,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(m){if(m.length!==0)return m.map(T=>function(S){return{field:Sr(S.field),direction:bE(S.dir)}}(T))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Va(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ft:t,parent:s}}function TE(n){let e=mE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){fe(r===1,65062);const T=t.from[0];T.allDescendants?s=T.collectionId:e=e.child(T.collectionId)}let i=[];t.where&&(i=function(I){const S=of(I);return S instanceof kt&&Mh(S)?S.getFilters():[S]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(S=>function(O){return new xs(kr(O.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(S))}(t.orderBy));let c=null;t.limit&&(c=function(I){let S;return S=typeof I=="object"?I.value:I,bo(S)?null:S}(t.limit));let d=null;t.startAt&&(d=function(I){const S=!!I.before,C=I.values||[];return new to(C,S)}(t.startAt));let m=null;return t.endAt&&(m=function(I){const S=!I.before,C=I.values||[];return new to(C,S)}(t.endAt)),xw(e,s,a,i,c,"F",d,m)}function vE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function of(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=kr(t.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kr(t.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(t.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=kr(t.unaryFilter.field);return Ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ve.create(kr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return kt.create(t.compositeFilter.filters.map(r=>of(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(t.compositeFilter.op))}(n):ee(30097,{filter:n})}function bE(n){return lE[n]}function IE(n){return dE[n]}function AE(n){return hE[n]}function Sr(n){return{fieldPath:n.canonicalString()}}function kr(n){return Ge.fromServerFormat(n.fieldPath)}function af(n){return n instanceof Ve?function(t){if(t.op==="=="){if(vl(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NAN"}};if(Tl(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vl(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NOT_NAN"}};if(Tl(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(t.field),op:IE(t.op),value:t.value}}}(n):n instanceof kt?function(t){const r=t.getFilters().map(s=>af(s));return r.length===1?r[0]:{compositeFilter:{op:AE(t.op),filters:r}}}(n):ee(54877,{filter:n})}function RE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function uf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,r,s,i=te.min(),a=te.min(),c=We.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.yt=e}}function kE(n){const e=TE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?no(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.Cn=new CE}addToCollectionParentIndex(e,t){return this.Cn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(Ln.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class CE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Be(me.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cf=41943040;class it{static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(cf,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Br(0)}static cr(){return new Br(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="LruGarbageCollector",NE=1048576;function Fl([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class DE{constructor(e){this.Ir=e,this.buffer=new Be(Fl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Fl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(Ul,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gr(t)?q(Ul,"Ignoring IndexedDB error during garbage collection: ",t):await qr(t)}await this.Vr(3e5)})}}class LE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return M.resolve(vo.ce);const r=new DE(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Vl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vl):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,d,m;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(e,s))).next(I=>(r=I,c=Date.now(),this.removeTargets(e,r,t))).next(I=>(i=I,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(I=>(m=Date.now(),Ar()<=ae.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-T}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(d-c)+`ms
	Removed ${I} documents in `+(m-d)+`ms
Total Duration: ${m-T}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:I})))}}function ME(n,e){return new LE(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.changes=new pr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ns(r.mutation,s,pt.empty(),we.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ce()){const s=sr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=bs();return i.forEach((c,d)=>{a=a.insert(c,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=sr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ce()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=cn();const a=Cs(),c=function(){return Cs()}();return t.forEach((d,m)=>{const T=r.get(m.key);s.has(m.key)&&(T===void 0||T.mutation instanceof jn)?i=i.insert(m.key,m):T!==void 0?(a.set(m.key,T.mutation.getFieldMask()),Ns(T.mutation,m,T.mutation.getFieldMask(),we.now())):a.set(m.key,pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(d=>(d.forEach((m,T)=>a.set(m,T)),t.forEach((m,T)=>c.set(m,new UE(T,a.get(m)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Cs();let s=new ve((a,c)=>a-c),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(d=>{const m=t.get(d);if(m===null)return;let T=r.get(d)||pt.empty();T=c.applyToLocalView(m,T),r.set(d,T);const I=(s.get(c.batchId)||ce()).add(d);s=s.insert(c.batchId,I)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),m=d.key,T=d.value,I=Hh();T.forEach(S=>{if(!i.has(S)){const C=Xh(t.get(S),r.get(S));C!==null&&I.set(S,C),i=i.add(S)}}),a.push(this.documentOverlayCache.saveOverlays(e,m,I))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(sr());let c=Ms,d=i;return a.next(m=>M.forEach(m,(T,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),i.get(T)?M.resolve():this.remoteDocumentCache.getEntry(e,T).next(S=>{d=d.insert(T,S)}))).next(()=>this.populateOverlays(e,m,i)).next(()=>this.computeViews(e,d,m,ce())).next(T=>({batchId:c,changes:$h(T)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=bs();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,d=>{const m=function(I,S){return new Wr(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,d.child(i));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next(T=>{T.forEach((I,S)=>{a=a.insert(I,S)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((d,m)=>{const T=m.getKey();a.get(T)===null&&(a=a.insert(T,Xe.newInvalidDocument(T)))});let c=bs();return a.forEach((d,m)=>{const T=i.get(d);T!==void 0&&Ns(T.mutation,m,pt.empty(),we.now()),Ro(t,m)&&(c=c.insert(d,m))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return M.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ft(s.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:kE(s.bundledQuery),readTime:Ft(s.readTime)}}(t)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.overlays=new ve(Q.comparator),this.qr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=sr();return M.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=sr(),i=t.length+1,a=new Q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const d=c.getNext().value,m=d.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===i&&d.largestBatchId>r&&s.set(d.getKey(),d)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ve((m,T)=>m-T);const a=this.overlays.getIterator();for(;a.hasNext();){const m=a.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let T=i.get(m.largestBatchId);T===null&&(T=sr(),i=i.insert(m.largestBatchId,T)),T.set(m.getKey(),m)}}const c=sr(),d=i.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((m,T)=>c.set(m,T)),!(c.size()>=s)););return M.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new sE(t,r));let i=this.qr.get(t);i===void 0&&(i=ce(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.Qr=new Be(ze.$r),this.Ur=new Be(ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new ze(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new Q(new me([])),r=new ze(t,e),s=new ze(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Q(new me([])),r=new ze(t,e),s=new ze(t,e+1);let i=ce();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ze(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Q.comparator(e.key,t.key)||ue(e.Yr,t.Yr)}static Kr(e,t){return ue(e.Yr,t.Yr)||Q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Be(ze.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new rE(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?cu:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(ue);return t.forEach(s=>{const i=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const a=new ze(new Q(i),0);let c=new Be(ue);return this.Zr.forEachWhile(d=>{const m=d.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(c=c.add(d.Yr)),!0)},a),M.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){fe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(t.mutations,s=>{const i=new ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new ze(t,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.ri=e,this.docs=function(){return new ve(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(t))}getEntries(e,t){let r=cn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Xe.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=cn();const a=t.path,c=new Q(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:m,value:{document:T}}=d.getNext();if(!a.isPrefixOf(m.path))break;m.path.length>a.length+1||_w(gw(T),r)<=0||(s.has(T.key)||Ro(t,T))&&(i=i.insert(T.key,T.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ii(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new HE(this)}getSize(e){return M.resolve(this.size)}}class HE extends VE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.persistence=e,this.si=new pr(t=>hu(t),fu),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.oi=0,this._i=new Eu,this.targetCount=0,this.ai=Br.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),M.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Br(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Pr(t),M.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t){this.ui={},this.overlays={},this.ci=new vo(0),this.li=!1,this.li=!0,this.hi=new jE,this.referenceDelegate=e(this),this.Pi=new qE(this),this.indexManager=new PE,this.remoteDocumentCache=function(s){return new $E(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new SE(t),this.Ii=new xE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new BE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new zE(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new GE(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class GE extends ww{constructor(e){super(),this.currentSequenceNumber=e}}class Tu{constructor(e){this.persistence=e,this.Ri=new Eu,this.Vi=null}static mi(e){return new Tu(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const s=Q.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,te.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return M.or([()=>M.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class io{constructor(e,t){this.persistence=e,this.pi=new pr(r=>vw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ME(this,t)}static mi(e,t){return new io(e,t)}Ei(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return M.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?M.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fi(e.data.value)),t}br(e,t,r){return M.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ce(),s=ce();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vu(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return vm()?8:Ew(Ye())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new WE;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Ar()<=ae.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Rr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Ar()<=ae.DEBUG&&q("QueryEngine","Query:",Rr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ar()<=ae.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Rr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(t))):M.resolve())}ys(e,t){if(Rl(t))return M.resolve(null);let r=Ut(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=no(t,null,"F"),r=Ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ce(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(d=>{const m=this.Ds(t,c);return this.Cs(t,m,a,d.readTime)?this.ys(e,no(t,null,"F")):this.vs(e,m,t,d)}))})))}ws(e,t,r,s){return Rl(t)||s.isEqual(te.min())?M.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?M.resolve(null):(Ar()<=ae.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rr(t)),this.vs(e,a,t,mw(s,Ms)).next(c=>c))})}Ds(e,t){let r=new Be(jh(e));return t.forEach((s,i)=>{Ro(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Ar()<=ae.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Rr(t)),this.ps.getDocumentsMatchingQuery(e,t,Ln.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="LocalStore",QE=3e8;class XE{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ve(ue),this.xs=new pr(i=>hu(i),fu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function YE(n,e,t,r){return new XE(n,e,t,r)}async function df(n,e){const t=ne(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let d=ce();for(const m of s){a.push(m.batchId);for(const T of m.mutations)d=d.add(T.key)}for(const m of i){c.push(m.batchId);for(const T of m.mutations)d=d.add(T.key)}return t.localDocuments.getDocuments(r,d).next(m=>({Ls:m,removedBatchIds:a,addedBatchIds:c}))})})}function JE(n,e){const t=ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,d,m,T){const I=m.batch,S=I.keys();let C=M.resolve();return S.forEach(O=>{C=C.next(()=>T.getEntry(d,O)).next(B=>{const F=m.docVersions.get(O);fe(F!==null,48541),B.version.compareTo(F)<0&&(I.applyToRemoteDocument(B,m),B.isValidDocument()&&(B.setReadTime(m.commitVersion),T.addEntry(B)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(d,I))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let d=ce();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(d=d.add(c.batch.mutations[m].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function hf(n){const e=ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function ZE(n,e){const t=ne(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((T,I)=>{const S=s.get(I);if(!S)return;c.push(t.Pi.removeMatchingKeys(i,T.removedDocuments,I).next(()=>t.Pi.addMatchingKeys(i,T.addedDocuments,I)));let C=S.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(I)!==null?C=C.withResumeToken(We.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):T.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(T.resumeToken,r)),s=s.insert(I,C),function(B,F,J){return B.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=QE?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(S,C,T)&&c.push(t.Pi.updateTargetData(i,C))});let d=cn(),m=ce();if(e.documentUpdates.forEach(T=>{e.resolvedLimboDocuments.has(T)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,T))}),c.push(eT(i,a,e.documentUpdates).next(T=>{d=T.ks,m=T.qs})),!r.isEqual(te.min())){const T=t.Pi.getLastRemoteSnapshotVersion(i).next(I=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(T)}return M.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,d,m)).next(()=>d)}).then(i=>(t.Ms=s,i))}function eT(n,e,t){let r=ce(),s=ce();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=cn();return t.forEach((c,d)=>{const m=i.get(c);d.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(c)),d.isNoDocument()&&d.version.isEqual(te.min())?(e.removeEntry(c,d.readTime),a=a.insert(c,d)):!m.isValidDocument()||d.version.compareTo(m.version)>0||d.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(d),a=a.insert(c,d)):q(bu,"Ignoring outdated watch update for ",c,". Current version:",m.version," Watch version:",d.version)}),{ks:a,qs:s}})}function tT(n,e){const t=ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=cu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nT(n,e){const t=ne(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new kn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Ba(n,e,t){const r=ne(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Gr(a))throw a;q(bu,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function xl(n,e,t){const r=ne(n);let s=te.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",a=>function(d,m,T){const I=ne(d),S=I.xs.get(T);return S!==void 0?M.resolve(I.Ms.get(S)):I.Pi.getTargetData(m,T)}(r,a,Ut(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(d=>{i=d})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:te.min(),t?i:ce())).next(c=>(rT(r,jw(e),c),{documents:c,Qs:i})))}function rT(n,e,t){let r=n.Os.get(e)||te.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Bl{constructor(){this.activeTargetIds=Ww()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sT{constructor(){this.Mo=new Bl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Bl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="ConnectivityMonitor";class zl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(jl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(jl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki=null;function ja(){return ki===null?ki=function(){return 268435456+Math.round(2147483648*Math.random())}():ki++,"0x"+ki.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="RestConnection",oT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aT{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Zi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=ja(),c=this.zo(e,t.toUriEncodedString());q(ha,`Sending RPC '${e}' ${a}:`,c,r);const d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,s,i);const{host:m}=new URL(c),T=zt(m);return this.Jo(e,c,d,r,T).then(I=>(q(ha,`Received RPC '${e}' ${a}: `,I),I),I=>{throw Vr(ha,`RPC '${e}' ${a} failed with error: `,I,"url: ",c,"request:",r),I})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=oT[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class cT extends aT{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=ja();return new Promise((c,d)=>{const m=new ph;m.setWithCredentials(!0),m.listenOnce(mh.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Ui.NO_ERROR:const I=m.getResponseJson();q(Ke,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(I)),c(I);break;case Ui.TIMEOUT:q(Ke,`RPC '${e}' ${a} timed out`),d(new H(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ui.HTTP_ERROR:const S=m.getStatus();if(q(Ke,`RPC '${e}' ${a} failed with status:`,S,"response text:",m.getResponseText()),S>0){let C=m.getResponseJson();Array.isArray(C)&&(C=C[0]);const O=C==null?void 0:C.error;if(O&&O.status&&O.message){const B=function(J){const Y=J.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(Y)>=0?Y:D.UNKNOWN}(O.status);d(new H(B,O.message))}else d(new H(D.UNKNOWN,"Server responded with status "+m.getStatus()))}else d(new H(D.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:a,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{q(Ke,`RPC '${e}' ${a} completed.`)}});const T=JSON.stringify(s);q(Ke,`RPC '${e}' ${a} sending request:`,s),m.send(t,"POST",T,r,15)})}T_(e,t,r){const s=ja(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yh(),c=_h(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(d.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,t,r),d.encodeInitMessageHeaders=!0;const T=i.join("");q(Ke,`Creating RPC '${e}' stream ${s}: ${T}`,d);const I=a.createWebChannel(T,d);this.I_(I);let S=!1,C=!1;const O=new uT({Yo:F=>{C?q(Ke,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(S||(q(Ke,`Opening RPC '${e}' stream ${s} transport.`),I.open(),S=!0),q(Ke,`RPC '${e}' stream ${s} sending:`,F),I.send(F))},Zo:()=>I.close()}),B=(F,J,Y)=>{F.listen(J,X=>{try{Y(X)}catch(u){setTimeout(()=>{throw u},0)}})};return B(I,vs.EventType.OPEN,()=>{C||(q(Ke,`RPC '${e}' stream ${s} transport opened.`),O.o_())}),B(I,vs.EventType.CLOSE,()=>{C||(C=!0,q(Ke,`RPC '${e}' stream ${s} transport closed`),O.a_(),this.E_(I))}),B(I,vs.EventType.ERROR,F=>{C||(C=!0,Vr(Ke,`RPC '${e}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),O.a_(new H(D.UNAVAILABLE,"The operation could not be completed")))}),B(I,vs.EventType.MESSAGE,F=>{var J;if(!C){const Y=F.data[0];fe(!!Y,16349);const X=Y,u=(X==null?void 0:X.error)||((J=X[0])==null?void 0:J.error);if(u){q(Ke,`RPC '${e}' stream ${s} received error:`,u);const _=u.status;let f=function(y){const w=Me[y];if(w!==void 0)return Jh(w)}(_),p=u.message;f===void 0&&(f=D.INTERNAL,p="Unknown error status: "+_+" with message "+u.message),C=!0,O.a_(new H(f,p)),I.close()}else q(Ke,`RPC '${e}' stream ${s} received:`,Y),O.u_(Y)}}),B(c,gh.STAT_EVENT,F=>{F.stat===Pa.PROXY?q(Ke,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===Pa.NOPROXY&&q(Ke,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.__()},0),O}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function fa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n){return new fE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="PersistentStream";class pf{constructor(e,t,r,s,i,a,c,d){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ff(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(un(t.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new H(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q($l,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(q($l,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lT extends pf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=gE(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?te.min():a.readTime?Ft(a.readTime):te.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=xa(this.serializer),t.addTarget=function(i,a){let c;const d=a.target;if(c=La(d)?{documents:wE(i,d)}:{query:EE(i,d).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=tf(i,a.resumeToken);const m=Va(i,a.expectedCount);m!==null&&(c.expectedCount=m)}else if(a.snapshotVersion.compareTo(te.min())>0){c.readTime=so(i,a.snapshotVersion.toTimestamp());const m=Va(i,a.expectedCount);m!==null&&(c.expectedCount=m)}return c}(this.serializer,e);const r=vE(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=xa(this.serializer),t.removeTarget=e,this.q_(t)}}class dT extends pf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=yE(e.writeResults,e.commitTime),r=Ft(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=xa(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>_E(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{}class fT extends hT{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Ua(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(D.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,Ua(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class pT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(un(t),this.aa=!1):q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="RemoteStore";class mT{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{mr(this)&&(q(dr,"Restarting streams for network reachability change."),await async function(d){const m=ne(d);m.Ea.add(4),await Zs(m),m.Ra.set("Unknown"),m.Ea.delete(4),await No(m)}(this))})}),this.Ra=new pT(r,s)}}async function No(n){if(mr(n))for(const e of n.da)await e(!0)}async function Zs(n){for(const e of n.da)await e(!1)}function mf(n,e){const t=ne(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Su(t)?Ru(t):Kr(t).O_()&&Au(t,e))}function Iu(n,e){const t=ne(n),r=Kr(t);t.Ia.delete(e),r.O_()&&gf(t,e),t.Ia.size===0&&(r.O_()?r.L_():mr(t)&&t.Ra.set("Unknown"))}function Au(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Kr(n).Y_(e)}function gf(n,e){n.Va.Ue(e),Kr(n).Z_(e)}function Ru(n){n.Va=new cE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Kr(n).start(),n.Ra.ua()}function Su(n){return mr(n)&&!Kr(n).x_()&&n.Ia.size>0}function mr(n){return ne(n).Ea.size===0}function _f(n){n.Va=void 0}async function gT(n){n.Ra.set("Online")}async function _T(n){n.Ia.forEach((e,t)=>{Au(n,e)})}async function yT(n,e){_f(n),Su(n)?(n.Ra.ha(e),Ru(n)):n.Ra.set("Unknown")}async function wT(n,e,t){if(n.Ra.set("Online"),e instanceof ef&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){q(dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oo(n,r)}else if(e instanceof ji?n.Va.Ze(e):e instanceof Zh?n.Va.st(e):n.Va.tt(e),!t.isEqual(te.min()))try{const r=await hf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const T=i.Ia.get(m);T&&i.Ia.set(m,T.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach((d,m)=>{const T=i.Ia.get(d);if(!T)return;i.Ia.set(d,T.withResumeToken(We.EMPTY_BYTE_STRING,T.snapshotVersion)),gf(i,d);const I=new kn(T.target,d,m,T.sequenceNumber);Au(i,I)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){q(dr,"Failed to raise snapshot:",r),await oo(n,r)}}async function oo(n,e,t){if(!Gr(e))throw e;n.Ea.add(1),await Zs(n),n.Ra.set("Offline"),t||(t=()=>hf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(dr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await No(n)})}function yf(n,e){return e().catch(t=>oo(n,t,e))}async function Do(n){const e=ne(n),t=Fn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:cu;for(;ET(e);)try{const s=await tT(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,TT(e,s)}catch(s){await oo(e,s)}wf(e)&&Ef(e)}function ET(n){return mr(n)&&n.Ta.length<10}function TT(n,e){n.Ta.push(e);const t=Fn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function wf(n){return mr(n)&&!Fn(n).x_()&&n.Ta.length>0}function Ef(n){Fn(n).start()}async function vT(n){Fn(n).ra()}async function bT(n){const e=Fn(n);for(const t of n.Ta)e.ea(t.mutations)}async function IT(n,e,t){const r=n.Ta.shift(),s=_u.from(r,e,t);await yf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Do(n)}async function AT(n,e){e&&Fn(n).X_&&await async function(r,s){if(function(a){return oE(a)&&a!==D.ABORTED}(s.code)){const i=r.Ta.shift();Fn(r).B_(),await yf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Do(r)}}(n,e),wf(n)&&Ef(n)}async function Hl(n,e){const t=ne(n);t.asyncQueue.verifyOperationInProgress(),q(dr,"RemoteStore received new credentials");const r=mr(t);t.Ea.add(3),await Zs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await No(t)}async function RT(n,e){const t=ne(n);e?(t.Ea.delete(2),await No(t)):e||(t.Ea.add(2),await Zs(t),t.Ra.set("Unknown"))}function Kr(n){return n.ma||(n.ma=function(t,r,s){const i=ne(t);return i.sa(),new lT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:gT.bind(null,n),t_:_T.bind(null,n),r_:yT.bind(null,n),H_:wT.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Su(n)?Ru(n):n.Ra.set("Unknown")):(await n.ma.stop(),_f(n))})),n.ma}function Fn(n){return n.fa||(n.fa=function(t,r,s){const i=ne(t);return i.sa(),new dT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:vT.bind(null,n),r_:AT.bind(null,n),ta:bT.bind(null,n),na:IT.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Do(n)):(await n.fa.stop(),n.Ta.length>0&&(q(dr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ku(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pu(n,e){if(un("AsyncQueue",`${e}: ${n}`),Gr(n))return new H(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{static emptySet(e){return new Or(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=bs(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Or)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Or;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.ga=new ve(Q.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class jr{constructor(e,t,r,s,i,a,c,d,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new jr(e,t,Or.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ao(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class kT{constructor(){this.queries=Gl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ne(t),i=s.queries;s.queries=Gl(),i.forEach((a,c)=>{for(const d of c.Sa)d.onError(r)})})(this,new H(D.ABORTED,"Firestore shutting down"))}}function Gl(){return new pr(n=>Bh(n),Ao)}async function Tf(n,e){const t=ne(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new ST,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Pu(a,`Initialization of query '${Rr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Cu(t)}async function vf(n,e){const t=ne(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function PT(n,e){const t=ne(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Cu(t)}function CT(n,e,t){const r=ne(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Cu(n){n.Ca.forEach(e=>{e.next()})}var za,Wl;(Wl=za||(za={})).Ma="default",Wl.Cache="cache";class bf{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new jr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==za.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.key=e}}class Af{constructor(e){this.key=e}}class NT{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ce(),this.mutatedKeys=ce(),this.eu=jh(e),this.tu=new Or(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new ql,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((T,I)=>{const S=s.get(T),C=Ro(this.query,I)?I:null,O=!!S&&this.mutatedKeys.has(S.key),B=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let F=!1;S&&C?S.data.isEqual(C.data)?O!==B&&(r.track({type:3,doc:C}),F=!0):this.su(S,C)||(r.track({type:2,doc:C}),F=!0,(d&&this.eu(C,d)>0||m&&this.eu(C,m)<0)&&(c=!0)):!S&&C?(r.track({type:0,doc:C}),F=!0):S&&!C&&(r.track({type:1,doc:S}),F=!0,(d||m)&&(c=!0)),F&&(C?(a=a.add(C),i=B?i.add(T):i.delete(T)):(a=a.delete(T),i=i.delete(T)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const T=this.query.limitType==="F"?a.last():a.first();a=a.delete(T.key),i=i.delete(T.key),r.track({type:1,doc:T})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((T,I)=>function(C,O){const B=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:F})}};return B(C)-B(O)}(T.type,I.type)||this.eu(T.doc,I.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],d=this.Xa.size===0&&this.current&&!s?1:0,m=d!==this.Za;return this.Za=d,a.length!==0||m?{snapshot:new jr(this.query,e.tu,i,a,e.mutatedKeys,d===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ql,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Af(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new If(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return jr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Nu="SyncEngine";class DT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class OT{constructor(e){this.key=e,this.hu=!1}}class LT{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new pr(c=>Bh(c),Ao),this.Iu=new Map,this.Eu=new Set,this.du=new ve(Q.comparator),this.Au=new Map,this.Ru=new Eu,this.Vu={},this.mu=new Map,this.fu=Br.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function MT(n,e,t=!0){const r=Nf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Rf(r,e,t,!0),s}async function VT(n,e){const t=Nf(n);await Rf(t,e,!0,!1)}async function Rf(n,e,t,r){const s=await nT(n.localStore,Ut(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await UT(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&mf(n.remoteStore,s),c}async function UT(n,e,t,r,s){n.pu=(I,S,C)=>async function(B,F,J,Y){let X=F.view.ru(J);X.Cs&&(X=await xl(B.localStore,F.query,!1).then(({documents:p})=>F.view.ru(p,X)));const u=Y&&Y.targetChanges.get(F.targetId),_=Y&&Y.targetMismatches.get(F.targetId)!=null,f=F.view.applyChanges(X,B.isPrimaryClient,u,_);return Ql(B,F.targetId,f.au),f.snapshot}(n,I,S,C);const i=await xl(n.localStore,e,!0),a=new NT(e,i.Qs),c=a.ru(i.documents),d=Js.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=a.applyChanges(c,n.isPrimaryClient,d);Ql(n,t,m.au);const T=new DT(e,t,a);return n.Tu.set(e,T),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),m.snapshot}async function FT(n,e,t){const r=ne(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!Ao(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ba(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Iu(r.remoteStore,s.targetId),$a(r,s.targetId)}).catch(qr)):($a(r,s.targetId),await Ba(r.localStore,s.targetId,!0))}async function xT(n,e){const t=ne(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Iu(t.remoteStore,r.targetId))}async function BT(n,e,t){const r=WT(n);try{const s=await function(a,c){const d=ne(a),m=we.now(),T=c.reduce((C,O)=>C.add(O.key),ce());let I,S;return d.persistence.runTransaction("Locally write mutations","readwrite",C=>{let O=cn(),B=ce();return d.Ns.getEntries(C,T).next(F=>{O=F,O.forEach((J,Y)=>{Y.isValidDocument()||(B=B.add(J))})}).next(()=>d.localDocuments.getOverlayedDocuments(C,O)).next(F=>{I=F;const J=[];for(const Y of c){const X=tE(Y,I.get(Y.key).overlayedDocument);X!=null&&J.push(new jn(Y.key,X,Dh(X.value.mapValue),wt.exists(!0)))}return d.mutationQueue.addMutationBatch(C,m,J,c)}).next(F=>{S=F;const J=F.applyToLocalDocumentSet(I,B);return d.documentOverlayCache.saveOverlays(C,F.batchId,J)})}).then(()=>({batchId:S.batchId,changes:$h(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,d){let m=a.Vu[a.currentUser.toKey()];m||(m=new ve(ue)),m=m.insert(c,d),a.Vu[a.currentUser.toKey()]=m}(r,s.batchId,t),await ei(r,s.changes),await Do(r.remoteStore)}catch(s){const i=Pu(s,"Failed to persist write");t.reject(i)}}async function Sf(n,e){const t=ne(n);try{const r=await ZE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?fe(a.hu,14607):s.removedDocuments.size>0&&(fe(a.hu,42227),a.hu=!1))}),await ei(t,r,e)}catch(r){await qr(r)}}function Kl(n,e,t){const r=ne(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const d=ne(a);d.onlineState=c;let m=!1;d.queries.forEach((T,I)=>{for(const S of I.Sa)S.va(c)&&(m=!0)}),m&&Cu(d)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jT(n,e,t){const r=ne(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ve(Q.comparator);a=a.insert(i,Xe.newNoDocument(i,te.min()));const c=ce().add(i),d=new Po(te.min(),new Map,new ve(ue),a,c);await Sf(r,d),r.du=r.du.remove(i),r.Au.delete(e),Du(r)}else await Ba(r.localStore,e,!1).then(()=>$a(r,e,t)).catch(qr)}async function zT(n,e){const t=ne(n),r=e.batch.batchId;try{const s=await JE(t.localStore,e);Pf(t,r,null),kf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ei(t,s)}catch(s){await qr(s)}}async function $T(n,e,t){const r=ne(n);try{const s=await function(a,c){const d=ne(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let T;return d.mutationQueue.lookupMutationBatch(m,c).next(I=>(fe(I!==null,37113),T=I.keys(),d.mutationQueue.removeMutationBatch(m,I))).next(()=>d.mutationQueue.performConsistencyCheck(m)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(m,T,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,T)).next(()=>d.localDocuments.getDocuments(m,T))})}(r.localStore,e);Pf(r,e,t),kf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ei(r,s)}catch(s){await qr(s)}}function kf(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Pf(n,e,t){const r=ne(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function $a(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Cf(n,r)})}function Cf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Iu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Du(n))}function Ql(n,e,t){for(const r of t)r instanceof If?(n.Ru.addReference(r.key,e),HT(n,r)):r instanceof Af?(q(Nu,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Cf(n,r.key)):ee(19791,{wu:r})}function HT(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(q(Nu,"New document in limbo: "+t),n.Eu.add(r),Du(n))}function Du(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Q(me.fromString(e)),r=n.fu.next();n.Au.set(r,new OT(t)),n.du=n.du.insert(t,r),mf(n.remoteStore,new kn(Ut(pu(t.path)),r,"TargetPurposeLimboResolution",vo.ce))}}async function ei(n,e,t){const r=ne(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,d)=>{a.push(r.pu(d,e,t).then(m=>{var T;if((m||t)&&r.isPrimaryClient){const I=m?!m.fromCache:(T=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:T.current;r.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(m){s.push(m);const I=vu.As(d.targetId,m);i.push(I)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(d,m){const T=ne(d);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>M.forEach(m,S=>M.forEach(S.Es,C=>T.persistence.referenceDelegate.addReference(I,S.targetId,C)).next(()=>M.forEach(S.ds,C=>T.persistence.referenceDelegate.removeReference(I,S.targetId,C)))))}catch(I){if(!Gr(I))throw I;q(bu,"Failed to update sequence numbers: "+I)}for(const I of m){const S=I.targetId;if(!I.fromCache){const C=T.Ms.get(S),O=C.snapshotVersion,B=C.withLastLimboFreeSnapshotVersion(O);T.Ms=T.Ms.insert(S,B)}}}(r.localStore,i))}async function qT(n,e){const t=ne(n);if(!t.currentUser.isEqual(e)){q(Nu,"User change. New user:",e.toKey());const r=await df(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(d=>{d.reject(new H(D.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ei(t,r.Ls)}}function GT(n,e){const t=ne(n),r=t.Au.get(e);if(r&&r.hu)return ce().add(r.key);{let s=ce();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Nf(n){const e=ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jT.bind(null,e),e.Pu.H_=PT.bind(null,e.eventManager),e.Pu.yu=CT.bind(null,e.eventManager),e}function WT(n){const e=ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$T.bind(null,e),e}class ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Co(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return YE(this.persistence,new KE,e.initialUser,this.serializer)}Cu(e){return new lf(Tu.mi,this.serializer)}Du(e){return new sT}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ao.provider={build:()=>new ao};class KT extends ao{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){fe(this.persistence.referenceDelegate instanceof io,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new OE(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new lf(r=>io.mi(r,t),this.serializer)}}class Ha{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qT.bind(null,this.syncEngine),await RT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kT}()}createDatastore(e){const t=Co(e.databaseInfo.databaseId),r=function(i){return new cT(i)}(e.databaseInfo);return function(i,a,c,d){return new fT(i,a,c,d)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new mT(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Kl(this.syncEngine,t,0),function(){return zl.v()?new zl:new iT}())}createSyncEngine(e,t){return function(s,i,a,c,d,m,T){const I=new LT(s,i,a,c,d,m);return T&&(I.gu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ne(s);q(dr,"RemoteStore shutting down."),i.Ea.add(5),await Zs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ha.provider={build:()=>new Ha};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="FirestoreClient";class QT{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=uu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{q(xn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q(xn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Pu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pa(n,e){n.asyncQueue.verifyOperationInProgress(),q(xn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await df(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Xl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await XT(n);q(xn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Hl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Hl(e.remoteStore,s)),n._onlineComponents=e}async function XT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(xn,"Using user provided OfflineComponentProvider");try{await pa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Vr("Error using user provided cache. Falling back to memory cache: "+t),await pa(n,new ao)}}else q(xn,"Using default OfflineComponentProvider"),await pa(n,new KT(void 0));return n._offlineComponents}async function Of(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(xn,"Using user provided OnlineComponentProvider"),await Xl(n,n._uninitializedComponentsProvider._online)):(q(xn,"Using default OnlineComponentProvider"),await Xl(n,new Ha))),n._onlineComponents}function YT(n){return Of(n).then(e=>e.syncEngine)}async function Lf(n){const e=await Of(n),t=e.eventManager;return t.onListen=MT.bind(null,e.syncEngine),t.onUnlisten=FT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xT.bind(null,e.syncEngine),t}function JT(n,e,t={}){const r=new nn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,d,m){const T=new Df({next:S=>{T.Nu(),a.enqueueAndForget(()=>vf(i,I));const C=S.docs.has(c);!C&&S.fromCache?m.reject(new H(D.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&S.fromCache&&d&&d.source==="server"?m.reject(new H(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(S)},error:S=>m.reject(S)}),I=new bf(pu(c.path),T,{includeMetadataChanges:!0,qa:!0});return Tf(i,I)}(await Lf(n),n.asyncQueue,e,t,r)),r.promise}function ZT(n,e,t={}){const r=new nn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,d,m){const T=new Df({next:S=>{T.Nu(),a.enqueueAndForget(()=>vf(i,I)),S.fromCache&&d.source==="server"?m.reject(new H(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(S)},error:S=>m.reject(S)}),I=new bf(c,T,{includeMetadataChanges:!0,qa:!0});return Tf(i,I)}(await Lf(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="firestore.googleapis.com",Jl=!0;class Zl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vf,this.ssl=Jl}else this.host=e.host,this.ssl=e.ssl??Jl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NE)throw new H(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rw;switch(r.type){case"firstParty":return new aw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Yl.get(t);r&&(q("ComponentProvider","Removing Datastore"),Yl.delete(t),r.terminate())}(this),Promise.resolve()}}function ev(n,e,t,r={}){var m;n=St(n,Oo);const s=zt(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(mo(`https://${c}`),go("Firestore",!0)),i.host!==Vf&&i.host!==c&&Vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...i,host:c,ssl:s,emulatorOptions:r};if(!ar(d,a)&&(n._setSettings(d),r.mockUserToken)){let T,I;if(typeof r.mockUserToken=="string")T=r.mockUserToken,I=Qe.MOCK_USER;else{T=kd(r.mockUserToken,(m=n._app)==null?void 0:m.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new H(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Qe(S)}n._authCredentials=new sw(new Eh(T,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zn(this.firestore,e,this._query)}}class Ne{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Xs(t,Ne._jsonSchema))return new Ne(e,r||null,new Q(me.fromString(t.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:Ue("string",Ne._jsonSchemaVersion),referencePath:Ue("string")};class Dn extends zn{constructor(e,t,r){super(e,t,pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new Q(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function tv(n,e,...t){if(n=ge(n),Th("collection","path",e),n instanceof Oo){const r=me.fromString(e,...t);return hl(r),new Dn(n,null,r)}{if(!(n instanceof Ne||n instanceof Dn))throw new H(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return hl(r),new Dn(n.firestore,null,r)}}function Uf(n,e,...t){if(n=ge(n),arguments.length===1&&(e=uu.newId()),Th("doc","path",e),n instanceof Oo){const r=me.fromString(e,...t);return dl(r),new Ne(n,null,new Q(r))}{if(!(n instanceof Ne||n instanceof Dn))throw new H(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return dl(r),new Ne(n.firestore,n instanceof Dn?n.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="AsyncQueue";class td{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ff(this,"async_queue_retry"),this._c=()=>{const r=fa();r&&q(ed,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=fa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=fa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new nn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Gr(e))throw e;q(ed,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,un("INTERNAL UNHANDLED ERROR: ",nd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ku.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:nd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function nd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class gr extends Oo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new td,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new td(e),this._firestoreClient=void 0,await e}}}function nv(n,e){const t=typeof n=="object"?n:_o(),r=typeof n=="string"?n:Zi,s=qs(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ka("firestore");i&&ev(s,...i)}return s}function Ou(n){if(n._terminated)throw new H(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rv(n),n._firestoreClient}function rv(n){var r,s,i;const e=n._freezeSettings(),t=function(c,d,m,T){return new Aw(c,d,m,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,Mf(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new QT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const d=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _t(We.fromBase64String(e))}catch(t){throw new H(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _t(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xs(e,_t._jsonSchema))return _t.fromBase64String(e.bytes)}}_t._jsonSchemaVersion="firestore/bytes/1.0",_t._jsonSchema={type:Ue("string",_t._jsonSchemaVersion),bytes:Ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(Xs(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:Ue("string",xt._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xs(e,Bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Bt(e.vectorValues);throw new H(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bt._jsonSchemaVersion="firestore/vectorValue/1.0",Bt._jsonSchema={type:Ue("string",Bt._jsonSchemaVersion),vectorValues:Ue("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=/^__.*__$/;class iv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new jn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ys(e,this.data,t,this.fieldTransforms)}}class Ff{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new jn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:n})}}class Lu{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Lu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return uo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xf(this.Ac)&&sv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ov{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Co(e)}Cc(e,t,r,s=!1){return new Lu({Ac:e,methodName:t,Dc:r,path:Ge.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vo(n){const e=n._freezeSettings(),t=Co(n._databaseId);return new ov(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Bf(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Vu("Data must be an object, but it was:",a,r);const c=jf(r,a);let d,m;if(i.merge)d=new pt(a.fieldMask),m=a.fieldTransforms;else if(i.mergeFields){const T=[];for(const I of i.mergeFields){const S=qa(e,I,t);if(!a.contains(S))throw new H(D.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);$f(T,S)||T.push(S)}d=new pt(T),m=a.fieldTransforms.filter(I=>d.covers(I.field))}else d=null,m=a.fieldTransforms;return new iv(new at(c),d,m)}class Uo extends Mo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uo}}class Mu extends Mo{_toFieldTransform(e){return new Yw(e.path,new Bs)}isEqual(e){return e instanceof Mu}}function av(n,e,t,r){const s=n.Cc(1,e,t);Vu("Data must be an object, but it was:",s,r);const i=[],a=at.empty();Bn(r,(d,m)=>{const T=Uu(e,d,t);m=ge(m);const I=s.yc(T);if(m instanceof Uo)i.push(T);else{const S=ti(m,I);S!=null&&(i.push(T),a.set(T,S))}});const c=new pt(i);return new Ff(a,c,s.fieldTransforms)}function uv(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[qa(e,r,t)],d=[s];if(i.length%2!=0)throw new H(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<i.length;S+=2)c.push(qa(e,i[S])),d.push(i[S+1]);const m=[],T=at.empty();for(let S=c.length-1;S>=0;--S)if(!$f(m,c[S])){const C=c[S];let O=d[S];O=ge(O);const B=a.yc(C);if(O instanceof Uo)m.push(C);else{const F=ti(O,B);F!=null&&(m.push(C),T.set(C,F))}}const I=new pt(m);return new Ff(T,I,a.fieldTransforms)}function cv(n,e,t,r=!1){return ti(t,n.Cc(r?4:3,e))}function ti(n,e){if(zf(n=ge(n)))return Vu("Unsupported field value:",e,n),jf(n,e);if(n instanceof Mo)return function(r,s){if(!xf(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let d=ti(c,s.wc(a));d==null&&(d={nullValue:"NULL_VALUE"}),i.push(d),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=we.fromDate(r);return{timestampValue:so(s.serializer,i)}}if(r instanceof we){const i=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:so(s.serializer,i)}}if(r instanceof xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _t)return{bytesValue:tf(s.serializer,r._byteString)};if(r instanceof Ne){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bt)return function(a,c){return{mapValue:{fields:{[Ch]:{stringValue:Nh},[eo]:{arrayValue:{values:a.toArray().map(m=>{if(typeof m!="number")throw c.Sc("VectorValues must only contain numeric values.");return mu(c.serializer,m)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${To(r)}`)}(n,e)}function jf(n,e){const t={};return Ih(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(n,(r,s)=>{const i=ti(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function zf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof we||n instanceof xt||n instanceof _t||n instanceof Ne||n instanceof Mo||n instanceof Bt)}function Vu(n,e,t){if(!zf(t)||!vh(t)){const r=To(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function qa(n,e,t){if((e=ge(e))instanceof Lo)return e._internalPath;if(typeof e=="string")return Uu(n,e);throw uo("Field path arguments must be of type string or ",n,!1,void 0,t)}const lv=new RegExp("[~\\*/\\[\\]]");function Uu(n,e,t){if(e.search(lv)>=0)throw uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Lo(...e.split("."))._internalPath}catch{throw uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function uo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(i||a)&&(d+=" (found",i&&(d+=` in field ${r}`),a&&(d+=` in document ${s}`),d+=")"),new H(D.INVALID_ARGUMENT,c+n+d)}function $f(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dv extends Hf{data(){return super.data()}}function Fo(n,e){return typeof e=="string"?Uu(n,e):e instanceof Lo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fu{}class xu extends Fu{}function fv(n,e,...t){let r=[];e instanceof Fu&&r.push(e),r=r.concat(t),function(i){const a=i.filter(d=>d instanceof Bu).length,c=i.filter(d=>d instanceof xo).length;if(a>1||a>0&&c>0)throw new H(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class xo extends xu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new xo(e,t,r)}_apply(e){const t=this._parse(e);return qf(e._query,t),new zn(e.firestore,e.converter,Ma(e._query,t))}_parse(e){const t=Vo(e.firestore);return function(i,a,c,d,m,T,I){let S;if(m.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new H(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){sd(I,T);const O=[];for(const B of I)O.push(rd(d,i,B));S={arrayValue:{values:O}}}else S=rd(d,i,I)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||sd(I,T),S=cv(c,a,I,T==="in"||T==="not-in");return Ve.create(m,T,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pv(n,e,t){const r=e,s=Fo("where",n);return xo._create(s,r,t)}class Bu extends Fu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:kt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const d of c)qf(a,d),a=Ma(a,d)}(e._query,t),new zn(e.firestore,e.converter,Ma(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ju extends xu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ju(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new H(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xs(i,a)}(e._query,this._field,this._direction);return new zn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Wr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function pI(n,e="asc"){const t=e,r=Fo("orderBy",n);return ju._create(r,t)}class zu extends xu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new zu(e,t,r)}_apply(e){return new zn(e.firestore,e.converter,no(e._query,this._limit,this._limitType))}}function mv(n){return pw("limit",n),zu._create("limit",n,"F")}function rd(n,e,t){if(typeof(t=ge(t))=="string"){if(t==="")throw new H(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xh(e)&&t.indexOf("/")!==-1)throw new H(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(me.fromString(t));if(!Q.isDocumentKey(r))throw new H(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return El(n,new Q(r))}if(t instanceof Ne)return El(n,t._key);throw new H(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${To(t)}.`)}function sd(n,e){if(!Array.isArray(n)||n.length===0)throw new H(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new H(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class gv{convertValue(e,t="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[eo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>Ce(a.doubleValue));return new Bt(t)}convertGeoPoint(e){return new xt(Ce(e.latitude),Ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Io(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Vs(e));default:return null}}convertTimestamp(e){const t=Mn(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);fe(uf(r),9688,{name:e});const s=new Us(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class As{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ir extends Hf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Fo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ir._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ir._jsonSchemaVersion="firestore/documentSnapshot/1.0",ir._jsonSchema={type:Ue("string",ir._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class zi extends ir{data(e={}){return super.data(e)}}class Lr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new As(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new zi(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const d=new zi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new As(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const d=new zi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new As(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,T=-1;return c.type!==0&&(m=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),T=a.indexOf(c.doc.key)),{type:_v(c.type),doc:d,oldIndex:m,newIndex:T}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Lr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _v(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(n){n=St(n,Ne);const e=St(n.firestore,gr);return JT(Ou(e),n._key).then(t=>Ev(e,n,t))}Lr._jsonSchemaVersion="firestore/querySnapshot/1.0",Lr._jsonSchema={type:Ue("string",Lr._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class Wf extends gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new _t(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}function wv(n){n=St(n,zn);const e=St(n.firestore,gr),t=Ou(e),r=new Wf(e);return hv(n._query),ZT(t,n._query).then(s=>new Lr(e,r,n,s))}function mI(n,e,t){n=St(n,Ne);const r=St(n.firestore,gr),s=Gf(n.converter,e);return Bo(r,[Bf(Vo(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,wt.none())])}function gI(n,e,t,...r){n=St(n,Ne);const s=St(n.firestore,gr),i=Vo(s);let a;return a=typeof(e=ge(e))=="string"||e instanceof Lo?uv(i,"updateDoc",n._key,e,t,r):av(i,"updateDoc",n._key,e),Bo(s,[a.toMutation(n._key,wt.exists(!0))])}function _I(n){return Bo(St(n.firestore,gr),[new gu(n._key,wt.none())])}function yI(n,e){const t=St(n.firestore,gr),r=Uf(n),s=Gf(n.converter,e);return Bo(t,[Bf(Vo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,wt.exists(!1))]).then(()=>r)}function Bo(n,e){return function(r,s){const i=new nn;return r.asyncQueue.enqueueAndForget(async()=>BT(await YT(r),s,i)),i.promise}(Ou(n),e)}function Ev(n,e,t){const r=t.docs.get(e._key),s=new Wf(n);return new ir(n,s,e._key,r,new As(t.hasPendingWrites,t.fromCache),e.converter)}function wI(){return new Mu("serverTimestamp")}(function(e,t=!0){(function(s){Hr=s})(fr),On(new sn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new gr(new iw(r.getProvider("auth-internal")),new uw(a,r.getProvider("app-check-internal")),function(m,T){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new H(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Us(m.options.projectId,T)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),yt(al,ul,e),yt(al,ul,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="firebasestorage.googleapis.com",Qf="storageBucket",Tv=2*60*1e3,vv=10*60*1e3,bv=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Pt{constructor(e,t,r=0){super(ma(e),`Firebase Storage: ${t} (${ma(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ma(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function ma(n){return"storage/"+n}function $u(){const n="An unknown error occurred, please check the error payload for server response.";return new be(Ee.UNKNOWN,n)}function Iv(n){return new be(Ee.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Av(n){return new be(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Rv(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(Ee.UNAUTHENTICATED,n)}function Sv(){return new be(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kv(n){return new be(Ee.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Xf(){return new be(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yf(){return new be(Ee.CANCELED,"User canceled the upload/download.")}function Pv(n){return new be(Ee.INVALID_URL,"Invalid URL '"+n+"'.")}function Cv(n){return new be(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Nv(){return new be(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Qf+"' property when initializing the app?")}function Jf(){return new be(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Dv(){return new be(Ee.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Ov(){return new be(Ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Lv(n){return new be(Ee.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ga(n){return new be(Ee.INVALID_ARGUMENT,n)}function Zf(){return new be(Ee.APP_DELETED,"The Firebase app was deleted.")}function Mv(n){return new be(Ee.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ds(n,e){return new be(Ee.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ws(n){throw new be(Ee.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=mt.makeFromUrl(e,t)}catch{return new mt(e,"")}if(r.path==="")return r;throw Cv(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(u){u.path.charAt(u.path.length-1)==="/"&&(u.path_=u.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),d={bucket:1,path:3};function m(u){u.path_=decodeURIComponent(u.path)}const T="v[A-Za-z0-9_]+",I=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",C=new RegExp(`^https?://${I}/${T}/b/${s}/o${S}`,"i"),O={bucket:1,path:3},B=t===Kf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,F="([^?#]*)",J=new RegExp(`^https?://${B}/${s}/${F}`,"i"),X=[{regex:c,indices:d,postModify:i},{regex:C,indices:O,postModify:m},{regex:J,indices:{bucket:1,path:2},postModify:m}];for(let u=0;u<X.length;u++){const _=X[u],f=_.regex.exec(e);if(f){const p=f[_.indices.bucket];let g=f[_.indices.path];g||(g=""),r=new mt(p,g),_.postModify(r);break}}if(r==null)throw Pv(e);return r}}class Vv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function d(){return c===2}let m=!1;function T(...F){m||(m=!0,e.apply(null,F))}function I(F){s=setTimeout(()=>{s=null,n(C,d())},F)}function S(){i&&clearTimeout(i)}function C(F,...J){if(m){S();return}if(F){S(),T.call(null,F,...J);return}if(d()||a){S(),T.call(null,F,...J);return}r<64&&(r*=2);let X;c===1?(c=2,X=0):X=(r+Math.random())*1e3,I(X)}let O=!1;function B(F){O||(O=!0,S(),!m&&(s!==null?(F||(c=2),clearTimeout(s),I(0)):F||(c=1)))}return I(0),i=setTimeout(()=>{a=!0,B(!0)},t),B}function Fv(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(n){return n!==void 0}function Bv(n){return typeof n=="function"}function jv(n){return typeof n=="object"&&!Array.isArray(n)}function jo(n){return typeof n=="string"||n instanceof String}function id(n){return Hu()&&n instanceof Blob}function Hu(){return typeof Blob<"u"}function od(n,e,t,r){if(r<e)throw Ga(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ga(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function ep(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var or;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(or||(or={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t,r,s,i,a,c,d,m,T,I,S=!0,C=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=d,this.timeout_=m,this.progressCallback_=T,this.connectionFactory_=I,this.retry=S,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,B)=>{this.resolve_=O,this.reject_=B,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Pi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const d=c.loaded,m=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,m)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===or.NO_ERROR,d=i.getStatus();if(!c||tp(d,this.additionalRetryCodes_)&&this.retry){const T=i.getErrorCode()===or.ABORT;r(!1,new Pi(!1,null,T));return}const m=this.successCodes_.indexOf(d)!==-1;r(!0,new Pi(m,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());xv(d)?i(d):i()}catch(d){a(d)}else if(c!==null){const d=$u();d.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,d)):a(d)}else if(s.canceled){const d=this.appDelete_?Zf():Yf();a(d)}else{const d=Xf();a(d)}};this.canceled_?t(!1,new Pi(!1,null,!0)):this.backoffId_=Uv(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Fv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function $v(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Hv(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qv(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Gv(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Wv(n,e,t,r,s,i,a=!0,c=!1){const d=ep(n.urlParams),m=n.url+d,T=Object.assign({},n.headers);return qv(T,e),$v(T,t),Hv(T,i),Gv(T,r),new zv(m,n.method,T,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Qv(...n){const e=Kv();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Hu())return new Blob(n);throw new be(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Xv(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(n){if(typeof atob>"u")throw Lv("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ga{constructor(e,t){this.data=e,this.contentType=t||null}}function Jv(n,e){switch(n){case Mt.RAW:return new ga(np(e));case Mt.BASE64:case Mt.BASE64URL:return new ga(rp(n,e));case Mt.DATA_URL:return new ga(eb(e),tb(e))}throw $u()}function np(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Zv(n){let e;try{e=decodeURIComponent(n)}catch{throw Ds(Mt.DATA_URL,"Malformed data URL.")}return np(e)}function rp(n,e){switch(n){case Mt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ds(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Mt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ds(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Yv(e)}catch(s){throw s.message.includes("polyfill")?s:Ds(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class sp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ds(Mt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=nb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function eb(n){const e=new sp(n);return e.base64?rp(Mt.BASE64,e.rest):Zv(e.rest)}function tb(n){return new sp(n).contentType}function nb(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){let r=0,s="";id(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(id(this.data_)){const r=this.data_,s=Xv(r,e,t);return s===null?null:new Sn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Sn(r,!0)}}static getBlob(...e){if(Hu()){const t=e.map(r=>r instanceof Sn?r.data_:r);return new Sn(Qv.apply(null,t))}else{const t=e.map(a=>jo(a)?Jv(Mt.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[i++]=a[c]}),new Sn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n){let e;try{e=JSON.parse(n)}catch{return null}return jv(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function sb(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function op(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(n,e){return e}class Ze{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||ib}}let Ci=null;function ob(n){return!jo(n)||n.length<2?n:op(n)}function ap(){if(Ci)return Ci;const n=[];n.push(new Ze("bucket")),n.push(new Ze("generation")),n.push(new Ze("metageneration")),n.push(new Ze("name","fullPath",!0));function e(i,a){return ob(a)}const t=new Ze("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Ze("size");return s.xform=r,n.push(s),n.push(new Ze("timeCreated")),n.push(new Ze("updated")),n.push(new Ze("md5Hash",null,!0)),n.push(new Ze("cacheControl",null,!0)),n.push(new Ze("contentDisposition",null,!0)),n.push(new Ze("contentEncoding",null,!0)),n.push(new Ze("contentLanguage",null,!0)),n.push(new Ze("contentType",null,!0)),n.push(new Ze("metadata","customMetadata",!0)),Ci=n,Ci}function ab(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new mt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function ub(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return ab(r,n),r}function up(n,e,t){const r=ip(e);return r===null?null:ub(n,r,t)}function cb(n,e,t,r){const s=ip(e);if(s===null||!jo(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(m=>{const T=n.bucket,I=n.fullPath,S="/b/"+a(T)+"/o/"+a(I),C=ni(S,t,r),O=ep({alt:"media",token:m});return C+O})[0]}function cp(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Qr{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n){if(!n)throw $u()}function qu(n,e){function t(r,s){const i=up(n,s,e);return rn(i!==null),i}return t}function lb(n,e){function t(r,s){const i=up(n,s,e);return rn(i!==null),cb(i,s,n.host,n._protocol)}return t}function ri(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Sv():s=Rv():t.getStatus()===402?s=Av(n.bucket):t.getStatus()===403?s=kv(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function lp(n){const e=ri(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Iv(n.path)),i.serverResponse=s.serverResponse,i}return t}function db(n,e,t){const r=e.fullServerUrl(),s=ni(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Qr(s,i,qu(n,t),a);return c.errorHandler=lp(e),c}function hb(n,e,t){const r=e.fullServerUrl(),s=ni(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Qr(s,i,lb(n,t),a);return c.errorHandler=lp(e),c}function fb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function dp(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=fb(null,e)),r}function pb(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let X="";for(let u=0;u<2;u++)X=X+Math.random().toString().slice(2);return X}const d=c();a["Content-Type"]="multipart/related; boundary="+d;const m=dp(e,r,s),T=cp(m,t),I="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+T+`\r
--`+d+`\r
Content-Type: `+m.contentType+`\r
\r
`,S=`\r
--`+d+"--",C=Sn.getBlob(I,r,S);if(C===null)throw Jf();const O={name:m.fullPath},B=ni(i,n.host,n._protocol),F="POST",J=n.maxUploadRetryTime,Y=new Qr(B,F,qu(n,t),J);return Y.urlParams=O,Y.headers=a,Y.body=C.uploadData(),Y.errorHandler=ri(e),Y}class co{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function Gu(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{rn(!1)}return rn(!!t&&(e||["active"]).indexOf(t)!==-1),t}function mb(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a=dp(e,r,s),c={name:a.fullPath},d=ni(i,n.host,n._protocol),m="POST",T={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},I=cp(a,t),S=n.maxUploadRetryTime;function C(B){Gu(B);let F;try{F=B.getResponseHeader("X-Goog-Upload-URL")}catch{rn(!1)}return rn(jo(F)),F}const O=new Qr(d,m,C,S);return O.urlParams=c,O.headers=T,O.body=I,O.errorHandler=ri(e),O}function gb(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(m){const T=Gu(m,["active","final"]);let I=null;try{I=m.getResponseHeader("X-Goog-Upload-Size-Received")}catch{rn(!1)}I||rn(!1);const S=Number(I);return rn(!isNaN(S)),new co(S,r.size(),T==="final")}const a="POST",c=n.maxUploadRetryTime,d=new Qr(t,a,i,c);return d.headers=s,d.errorHandler=ri(e),d}const ad=256*1024;function _b(n,e,t,r,s,i,a,c){const d=new co(0,0);if(a?(d.current=a.current,d.total=a.total):(d.current=0,d.total=r.size()),r.size()!==d.total)throw Dv();const m=d.total-d.current;let T=m;s>0&&(T=Math.min(T,s));const I=d.current,S=I+T;let C="";T===0?C="finalize":m===T?C="upload, finalize":C="upload";const O={"X-Goog-Upload-Command":C,"X-Goog-Upload-Offset":`${d.current}`},B=r.slice(I,S);if(B===null)throw Jf();function F(u,_){const f=Gu(u,["active","final"]),p=d.current+T,g=r.size();let y;return f==="final"?y=qu(e,i)(u,_):y=null,new co(p,g,f==="final",y)}const J="POST",Y=e.maxUploadRetryTime,X=new Qr(t,J,F,Y);return X.headers=O,X.body=B.uploadData(),X.progressCallback=c||null,X.errorHandler=ri(n),X}const ot={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function _a(n){switch(n){case"running":case"pausing":case"canceling":return ot.RUNNING;case"paused":return ot.PAUSED;case"success":return ot.SUCCESS;case"canceled":return ot.CANCELED;case"error":return ot.ERROR;default:return ot.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,t,r){if(Bv(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class wb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=or.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=or.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=or.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw ws("cannot .send() more than once");if(zt(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Eb extends wb{initXhr(){this.xhr_.responseType="text"}}function Pr(){return new Eb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=ap(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ee.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(tp(s.status,[]))if(i)s=Xf();else{this.sleepTime=Math.max(this.sleepTime*2,bv),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ee.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=mb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Pr,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=gb(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Pr,t,r);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ad*this._chunkMultiplier,t=new co(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let a;try{a=_b(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(d){this._error=d,this._transition("error");return}const c=this._ref.storage._makeRequest(a,Pr,s,i,!1);this._request=c,c.getPromise().then(d=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(d.current),d.finalized?(this._metadata=d.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ad*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=db(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Pr,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=pb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Pr,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Yf(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=_a(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new yb(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(_a(this._state)){case ot.SUCCESS:Ir(this._resolve.bind(null,this.snapshot))();break;case ot.CANCELED:case ot.ERROR:const t=this._reject;Ir(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(_a(this._state)){case ot.RUNNING:case ot.PAUSED:e.next&&Ir(e.next.bind(e,this.snapshot))();break;case ot.SUCCESS:e.complete&&Ir(e.complete.bind(e))();break;case ot.CANCELED:case ot.ERROR:e.error&&Ir(e.error.bind(e,this._error))();break;default:e.error&&Ir(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){this._service=e,t instanceof mt?this._location=t:this._location=mt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new hr(e,t)}get root(){const e=new mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return op(this._location.path)}get storage(){return this._service}get parent(){const e=rb(this._location.path);if(e===null)return null;const t=new mt(this._location.bucket,e);return new hr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Mv(e)}}function vb(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new Tb(n,new Sn(e),t)}function bb(n){n._throwIfRoot("getDownloadURL");const e=hb(n.storage,n._location,ap());return n.storage.makeRequestWithTokens(e,Pr).then(t=>{if(t===null)throw Ov();return t})}function Ib(n,e){const t=sb(n._location.path,e),r=new mt(n._location.bucket,t);return new hr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(n){return/^[A-Za-z]+:\/\//.test(n)}function Rb(n,e){return new hr(n,e)}function hp(n,e){if(n instanceof Wu){const t=n;if(t._bucket==null)throw Nv();const r=new hr(t,t._bucket);return e!=null?hp(r,e):r}else return e!==void 0?Ib(n,e):n}function Sb(n,e){if(e&&Ab(e)){if(n instanceof Wu)return Rb(n,e);throw Ga("To use ref(service, url), the first argument must be a Storage instance.")}else return hp(n,e)}function ud(n,e){const t=e==null?void 0:e[Qf];return t==null?null:mt.makeFromBucketSpec(t,n)}function kb(n,e,t,r={}){n.host=`${e}:${t}`;const s=zt(e);s&&(mo(`https://${n.host}/b`),go("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:kd(i,n.app.options.projectId))}class Wu{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=Kf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Tv,this._maxUploadRetryTime=vv,this._requests=new Set,s!=null?this._bucket=mt.makeFromBucketSpec(s,this._host):this._bucket=ud(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mt.makeFromBucketSpec(this._url,e):this._bucket=ud(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){od("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){od("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Vv(Zf());{const a=Wv(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const cd="@firebase/storage",ld="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="storage";function EI(n,e,t){return n=ge(n),vb(n,e,t)}function TI(n){return n=ge(n),bb(n)}function vI(n,e){return n=ge(n),Sb(n,e)}function Pb(n=_o(),e){n=ge(n);const r=qs(n,fp).getImmediate({identifier:e}),s=Ka("storage");return s&&Cb(r,...s),r}function Cb(n,e,t,r={}){kb(n,e,t,r)}function Nb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Wu(t,r,s,e,fr)}function Db(){On(new sn(fp,Nb,"PUBLIC").setMultipleInstances(!0)),yt(cd,ld,""),yt(cd,ld,"esm2020")}Db();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="type.googleapis.com/google.protobuf.Int64Value",Lb="type.googleapis.com/google.protobuf.UInt64Value";function pp(n,e){const t={};for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(n[r]));return t}function lo(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>lo(e));if(typeof n=="function"||typeof n=="object")return pp(n,e=>lo(e));throw new Error("Data cannot be encoded in JSON: "+n)}function zr(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case Ob:case Lb:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>zr(e)):typeof n=="function"||typeof n=="object"?pp(n,e=>zr(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ut extends Pt{constructor(e,t,r){super(`${Ku}/${e}`,t||""),this.details=r,Object.setPrototypeOf(this,ut.prototype)}}function Mb(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ho(n,e){let t=Mb(n),r=t,s;try{const i=e&&e.error;if(i){const a=i.status;if(typeof a=="string"){if(!dd[a])return new ut("internal","internal");t=dd[a],r=a}const c=i.message;typeof c=="string"&&(r=c),s=i.details,s!==void 0&&(s=zr(s))}}catch{}return t==="ok"?null:new ut(t,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,t,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,et(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="us-central1",Ub=/^data: (.*?)(?:\n|$)/;function Fb(n){let e=null;return{promise:new Promise((t,r)=>{e=setTimeout(()=>{r(new ut("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class xb{constructor(e,t,r,s,i=Wa,a=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new Vb(e,t,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=Wa}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Bb(n,e,t){const r=zt(e);n.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&(mo(n.emulatorOrigin+"/backends"),go("Functions",!0))}function jb(n,e,t){const r=s=>$b(n,e,s,{});return r.stream=(s,i)=>qb(n,e,s,i),r}function mp(n){return n.emulatorOrigin&&zt(n.emulatorOrigin)?"include":void 0}async function zb(n,e,t,r,s){t["Content-Type"]="application/json";let i;try{i=await r(n,{method:"POST",body:JSON.stringify(e),headers:t,credentials:mp(s)})}catch{return{status:0,json:null}}let a=null;try{a=await i.json()}catch{}return{status:i.status,json:a}}async function gp(n,e){const t={},r=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(t.Authorization="Bearer "+r.authToken),r.messagingToken&&(t["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=r.appCheckToken),t}function $b(n,e,t,r){const s=n._url(e);return Hb(n,s,t,r)}async function Hb(n,e,t,r){t=lo(t);const s={data:t},i=await gp(n,r),a=r.timeout||7e4,c=Fb(a),d=await Promise.race([zb(e,s,i,n.fetchImpl,n),c.promise,n.cancelAllRequests]);if(c.cancel(),!d)throw new ut("cancelled","Firebase Functions instance was deleted.");const m=ho(d.status,d.json);if(m)throw m;if(!d.json)throw new ut("internal","Response is not valid JSON object.");let T=d.json.data;if(typeof T>"u"&&(T=d.json.result),typeof T>"u")throw new ut("internal","Response is missing data field.");return{data:zr(T)}}function qb(n,e,t,r){const s=n._url(e);return Gb(n,s,t,r||{})}async function Gb(n,e,t,r){var S;t=lo(t);const s={data:t},i=await gp(n,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let a;try{a=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal,credentials:mp(n)})}catch(C){if(C instanceof Error&&C.name==="AbortError"){const B=new ut("cancelled","Request was cancelled.");return{data:Promise.reject(B),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(B)}}}}}}const O=ho(0,null);return{data:Promise.reject(O),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(O)}}}}}}let c,d;const m=new Promise((C,O)=>{c=C,d=O});(S=r==null?void 0:r.signal)==null||S.addEventListener("abort",()=>{const C=new ut("cancelled","Request was cancelled.");d(C)});const T=a.body.getReader(),I=Wb(T,c,d,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const C=I.getReader();return{async next(){const{value:O,done:B}=await C.read();return{value:O,done:B}},async return(){return await C.cancel(),{done:!0,value:void 0}}}}},data:m}}function Wb(n,e,t,r){const s=(a,c)=>{const d=a.match(Ub);if(!d)return;const m=d[1];try{const T=JSON.parse(m);if("result"in T){e(zr(T.result));return}if("message"in T){c.enqueue(zr(T.message));return}if("error"in T){const I=ho(0,T);c.error(I),t(I);return}}catch(T){if(T instanceof ut){c.error(T),t(T);return}}},i=new TextDecoder;return new ReadableStream({start(a){let c="";return d();async function d(){if(r!=null&&r.aborted){const m=new ut("cancelled","Request was cancelled");return a.error(m),t(m),Promise.resolve()}try{const{value:m,done:T}=await n.read();if(T){c.trim()&&s(c.trim(),a),a.close();return}if(r!=null&&r.aborted){const S=new ut("cancelled","Request was cancelled");a.error(S),t(S),await n.cancel();return}c+=i.decode(m,{stream:!0});const I=c.split(`
`);c=I.pop()||"";for(const S of I)S.trim()&&s(S.trim(),a);return d()}catch(m){const T=m instanceof ut?m:ho(0,null);a.error(T),t(T)}}},cancel(){return n.cancel()}})}const hd="@firebase/functions",fd="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="auth-internal",Qb="app-check-internal",Xb="messaging-internal";function Yb(n){const e=(t,{instanceIdentifier:r})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider(Kb),a=t.getProvider(Xb),c=t.getProvider(Qb);return new xb(s,i,a,c,r)};On(new sn(Ku,e,"PUBLIC").setMultipleInstances(!0)),yt(hd,fd,n),yt(hd,fd,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(n=_o(),e=Wa){const r=qs(ge(n),Ku).getImmediate({identifier:e}),s=Ka("functions");return s&&Zb(r,...s),r}function Zb(n,e,t){Bb(ge(n),e,t)}function bI(n,e,t){return jb(ge(n),e)}Yb();const eI={apiKey:"AIzaSyAzrZ-gVFJXCevpEkKHht3dn9RLCRdo2h0",authDomain:"gemini-cli-98f4a.firebaseapp.com",projectId:"gemini-cli-98f4a",storageBucket:"gemini-cli-98f4a.appspot.com",messagingSenderId:"1065949512661",appId:"1:1065949512661:web:57d184d86a82438511f35c",measurementId:"G-CHE4S36RY3"},zo=Nd(eI),tI=tw(zo),_p=nv(zo),II=Pb(zo),AI=Jb(zo,"southamerica-east1");window.showdown=Vp;window.DOMPurify=sm;const nI={idPrefix:"lua",name:"Luá",avatarUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces",position:"bottom-left",placeholderText:"Pergunte para a Luá..."},rI={idPrefix:"victor",name:"Victor",avatarUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&fit=crop&crop=faces",position:"bottom-right",placeholderText:"Pergunte para o Victor..."};document.body.insertAdjacentHTML("beforeend",Td(nI));document.body.insertAdjacentHTML("beforeend",Td(rI));md("lua");md("victor");const sI=document.getElementById("mobile-menu-btn"),iI=document.getElementById("mobile-menu");sI.addEventListener("click",()=>{iI.classList.toggle("hidden")});q_(tI,async n=>{const e=document.getElementById("auth-buttons"),t=document.getElementById("user-menu");if(n){e.classList.add("hidden"),e.classList.remove("lg:flex");let r="perfil.html",s="Meu Perfil";try{(await yv(Uf(_p,"partners",n.uid))).exists()&&(r="painel_anunciante.html",s="Painel Parceiro")}catch(i){console.log("Check user type error",i)}t.innerHTML=`
            <a href="${r}" class="flex items-center text-slate-300 hover:text-white mr-4">
                <span class="hidden md:inline mr-2">Olá, ${n.displayName||"Viajante"}</span>
                <div class="w-8 h-8 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
                    ${(n.displayName||"U").charAt(0).toUpperCase()}
                </div>
            </a>
            <a href="${r}" class="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full border border-slate-600 text-sm font-bold transition">
                ${s}
            </a>
        `,t.classList.remove("hidden")}else e.classList.remove("hidden"),e.classList.add("lg:flex"),t.classList.add("hidden")});function fo(n,e,t="standard"){const r=t==="premium",s=r?"min-w-[300px] md:min-w-[350px] bg-slate-800/80 backdrop-blur rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl snap-center transform hover:scale-[1.02] transition duration-300 cursor-pointer group":"min-w-[300px] md:min-w-[350px] bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-lg snap-center transform hover:scale-[1.02] transition duration-300 cursor-pointer group",i=document.createElement("div");i.className=s,i.onclick=()=>window.location.href=`public_partner_details.html?id=${n}`;const a=e.image||"https://placehold.co/400x300/1e293b/fcd34d?text=Parceiro",c=r?'<div class="absolute top-4 left-4 bg-amber-500 text-slate-900 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Premium</div>':"";return i.innerHTML=`
        <div class="h-48 overflow-hidden relative">
            <img src="${a}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="${e.businessName}">
            ${c}
            <div class="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-amber-400 px-2 py-1 rounded text-xs font-bold flex items-center">
                <i class="fas fa-star mr-1"></i> ${e.rating||"Novo"}
            </div>
        </div>
        <div class="p-6">
            <div class="text-xs text-slate-400 uppercase font-bold mb-1 tracking-wide">${(e.category||"Geral").replace("_"," ")}</div>
            <h3 class="text-xl font-bold text-white mb-2 truncate">${e.businessName}</h3>
            <div class="flex items-center text-slate-400 text-sm mb-4">
                <i class="fas fa-map-marker-alt mr-2 text-amber-500"></i> ${e.city}, ${e.state}
            </div>
            <button class="w-full py-2 bg-slate-700 hover:bg-amber-500 hover:text-slate-900 text-white rounded-lg font-bold transition">
                Ver Detalhes
            </button>
        </div>
    `,i}function yp(n){const e=document.createElement("div");return e.className="glass-effect p-6 rounded-2xl text-center border border-slate-700/50 hover:border-amber-500/30 transition transform hover:-translate-y-1",e.innerHTML=`
        <div class="relative w-24 h-24 mx-auto mb-4">
            <img src="${n.image||"https://placehold.co/150x150"}" class="w-full h-full rounded-full object-cover border-4 border-slate-700 group-hover:border-amber-500 transition">
            <div class="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-slate-900"></div>
        </div>
        <h3 class="text-lg font-bold text-white mb-1">${n.businessName}</h3>
        <p class="text-slate-400 text-xs uppercase tracking-wider mb-3">${n.city}, ${n.state}</p>
        <div class="flex justify-center space-x-1 text-amber-400 text-xs mb-4">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <a href="public_partner_details.html?id=${n.id}" class="block w-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold py-2 rounded-lg transition">Ver Perfil</a>
    `,e}async function oI(){const n=document.getElementById("featured-partners"),e=document.getElementById("premium-partners"),t=document.getElementById("free-partners-grid"),r=document.getElementById("guides-grid");try{const s=fv(tv(_p,"partners"),pv("status","==","aprovado"),mv(6)),i=await wv(s);i.empty?pd(n,e,t,r):(n.innerHTML="",e.innerHTML="",t.innerHTML="",r.innerHTML="",i.forEach(a=>{const c=a.data(),d=a.id;if(c.plan==="advance"||c.plan==="plus")e.appendChild(fo(d,c,"premium")),n.appendChild(fo(d,c));else{const m=document.createElement("a");m.href=`public_partner_details.html?id=${d}`,m.className="block bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-amber-500 transition",m.innerHTML=`
                        <img src="${c.image||"https://placehold.co/200"}" class="w-full h-24 object-cover">
                        <div class="p-3">
                            <h4 class="text-white font-bold text-sm truncate">${c.businessName}</h4>
                            <p class="text-slate-500 text-xs truncate">${c.city}</p>
                        </div>
                    `,t.appendChild(m)}c.category==="guias"&&r.appendChild(yp({id:d,...c}))}))}catch(s){console.error("Error loading data:",s),pd(n,e,t,r)}}function pd(n,e,t,r){if(!n||!e||!t||!r)return;n.innerHTML="",e.innerHTML="",t.innerHTML="",r.innerHTML="",[{id:"m1",businessName:"EcoTour Jalapão",category:"ecoturismo",city:"Mateiros",state:"TO",plan:"advance",image:"https://images.unsplash.com/photo-1533106418989-88406e76827a?w=500"},{id:"m2",businessName:"Pousada Villa",category:"hospedagem",city:"Búzios",state:"RJ",plan:"plus",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500"},{id:"m3",businessName:"Guia João Silva",category:"guias",city:"Salvador",state:"BA",plan:"basic",image:"https://images.unsplash.com/photo-1485893086445-ed75865eb095?w=500"},{id:"m4",businessName:"Transfer VIP",category:"transfer",city:"São Paulo",state:"SP",plan:"free",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500"}].forEach(i=>{if(i.plan==="advance"||i.plan==="plus")e.appendChild(fo(i.id,i,"premium")),n.appendChild(fo(i.id,i));else{const a=document.createElement("div");a.className="bg-slate-800 rounded-xl overflow-hidden hover:opacity-80 transition cursor-pointer",a.onclick=()=>window.location.href=`public_partner_details.html?id=${i.id}`,a.innerHTML=`
                <img src="${i.image}" class="w-full h-32 object-cover">
                <div class="p-3">
                    <h4 class="text-white font-bold text-sm truncate">${i.businessName}</h4>
                    <p class="text-slate-500 text-xs truncate">${i.city}</p>
                </div>
            `,t.appendChild(a)}i.category==="guias"&&r.appendChild(yp(i))})}(async()=>await oI())();const Ni=document.querySelector(".testimonials-track");if(Ni){let r=function(){const s=Ni.children[0].offsetWidth,i=-t*(s+24);Ni.style.transform=`translateX(${i}px)`};const n=document.querySelector(".testimonials-prev-btn"),e=document.querySelector(".testimonials-next-btn");let t=0;n.addEventListener("click",()=>{t=Math.max(t-1,0),r()}),e.addEventListener("click",()=>{const s=Ni.children.length;t=Math.min(t+1,s-1),r()})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(n=>{console.log("Service Worker registered with scope:",n.scope)}).catch(n=>{console.error("Service Worker registration failed:",n)})});export{Jb as A,uI as B,mI as C,wI as D,lI as E,md as F,In as G,_p as a,tI as b,tv as c,Uf as d,pI as e,wv as f,yv as g,bI as h,AI as i,TI as j,gI as k,dI as l,cI as m,hI as n,q_ as o,aI as p,fv as q,vI as r,II as s,_I as t,EI as u,mv as v,pv as w,yI as x,Nd as y,eI as z};
