
console.clear();


var __constants_ = function(consts, strict = true) {
		var no = () => false;
		return new Proxy(consts, {
				get() {
						return Reflect.get(...arguments);
				},
				getOwnPropertyDescriptor() {
						return { configurable: false, writable: false, value: Reflect.get(...arguments) };
				},
				preventExtensions: (t) => (Object.preventExtensions(t),true),
				ownKeys: t => Reflect.ownKeys(t),
				set: (t,k,v) => !strict && k in t ? no() : Reflect.set(t,k,v),
				deleteProperty: no,
				defineProperty: no,
				setPrototypeOf: no,
				isExtensible: no,
		});
}
//https://cdn.jsdelivr.net/gh/bennettfeely/ztext/js/ztext.min.js
/*!
 * ztext.js v0.0.2
 * https://bennettfeely.com/ztext
 * Licensed MIT | (c) 2020 Bennett Feely
 */

let z_default = {
	depth:"1rem",
	direction:"both",
	event:"none",
	eventRotation:"30deg",
	eventDirection:"default",
	fade:!1,
	layers:10,
	perspective:"500px",
	z:!0
};

function g(e,t){
	if("reverse"==p)
		var n=-1;
	else n=1;
	var r=e*c*n,
		i=-t*c*n,
		a=(Math.min(Math.max(r,-1),1),Math.min(Math.max(i,-1),1),"rotateX("+i+d+") rotateY("+r+d+")");
	h.style.setProperty('--zt-translate', a),
		h.style.webkitTransform=a,
		h.style.transform=a
}
function _(){
	var t=e.getBoundingClientRect(),
		n=t.left+t.width/2-window.innerWidth/2,
		r=t.top+t.height/2-window.innerHeight/2;
	g(n/window.innerWidth*-2,r/window.innerHeight*-2)
}
function S(){
	var t=e.getBoundingClientRect();
	g(0,(t.top+t.height/2-window.innerHeight/2)/window.innerHeight*-2)
}
function E(){
	var t=e.getBoundingClientRect();
	g((t.left+t.width/2-window.innerWidth/2)/window.innerWidth*-2,0)
}
function zDraw(e,t){
	if("false"===(t.zEngaged||z_default.zEngaged)) return;
	var n=t.depth||z_default.depth,r=n.match(/[a-z]+/)[0],
	a=parseFloat(n.replace(r,"")),
		s=t.direction||z_default.direction,
		o=t.event||z_default.event,
		l=t.eventRotation||z_default.eventRotation,
		d=l.match(/[a-z]+/)[0],
		c=parseFloat(l.replace(d,"")),
		p=t.eventDirection||z_default.eventDirection,
		f=t.fade||z_default.fade,
		u=t.layers||z_default.layers,
		v=t.perspective||z_default.perspective,
		y=t.transform||z_default.transform,
		w=e.innerHTML;
	e.innerHTML="",
		e.style.display="inline-block",
		e.style.position="relative",
		e.style.webkitPerspective=v,
		e.style.perspective=v;
	var z=document.createElement("span");
	z.setAttribute("class","z-text"),
		z.style.display="inline-block",
		z.style.webkitTransformStyle="preserve-3d",
		z.style.transformStyle="preserve-3d";
	var h=document.createElement("span");
	let i=0;
	for(h.setAttribute("class","z-layers"),
		h.style.display="inline-block",
		h.style.webkitTransformStyle="preserve-3d",
		h.style.transformStyle="preserve-3d",
		z.append(h);i<u;i++){
		let e=i/u;
		var m=document.createElement("span");
		if(
			m.setAttribute("class","z-layer"),
			m.innerHTML=w,
			m.setAttribute('aria-hidden', 'true'),
			m.style.display="inline-block","backwards"===s)
			var b=-e*a;
		if("both"===s)b=-e*a+a/2;
		if("forwards"===s)b=-e*a+a;
		y="translateZ("+b+r+")";
		m.style.setProperty('--zt-translate',y),
			m.style.webkitTransform=y,
			m.style.transform=y,
			i>=1&&(
			m.style.position="absolute",
			m.style.top=0,
			m.style.left=0,
			i > 0 && m.setAttribute("aria-hidden","true"),
			m.style.pointerEvents="none",
			m.style.mozUserSelect="none",
			m.style.msUserSelect="none",
			m.style.webkitUserSelect="none",
			m.style.userSelect="none",
			!0!==f&&"true"!==f||(
				m.style.opacity=(1-e)/2)
		),
			h.append(m)
	}
	
	if(e.append(z),"pointer"===o&&(
		window.addEventListener("mousemove",(e=>{
			g(2*(e.clientX/window.innerWidth-.5),2*(e.clientY/window.innerHeight-.5))
		}),!1),
		window.addEventListener("touchmove",(e=>{
			g(2*(e.touches[0].clientX/window.innerWidth-.5),2*(e.touches[0].clientY/window.innerHeight-.5))
		}),!1)),"scroll"==o
		){
		_(),
		window.addEventListener("scroll",_,!1)
	}
	if("scrollY"==o){
		
		S(),
			window.addEventListener("scroll",S,!1)
	}
	if("scrollX"==o){
		E(), window.addEventListener("scroll",E,!1);
	}
}

// var zs=document.querySelectorAll("[data-z]");
function Ztextify(e,t){
	if(CSS.supports("-moz-transform-style","preserve-3d")||CSS.supports("-ms-transform-style","preserve-3d")||CSS.supports("-webkit-transform-style","preserve-3d")||CSS.supports("transform-style","preserve-3d")) {
	document.querySelectorAll(e).forEach((e=>{zDraw(e,t)}))
	} else {
		console.error("ztext is disabled because transform-style: preserve-3d; is unsupported");
	}
}
	/*
	zs.forEach((e=>{
		options={
			depth:e.dataset.zDepth||z_default.depth,
			direction:e.dataset.zDirection||z_default.direction,
			event:e.dataset.zEvent||z_default.event,
			eventRotation:e.dataset.zEventrotation||z_default.eventRotation,
			eventDirection:e.dataset.zEventdirection||z_default.eventDirection,
			fade:e.dataset.zFade||z_default.fade,
			layers:parseFloat(e.dataset.zLayers)||z_default.layers,
			perspective:e.dataset.zPerspective||z_default.perspective,
			zEngaged:e.dataset.z||z_default.z
		},
			zDraw(e,options)
	}))*/

export default Ztextify;

export {
	zDraw
};
