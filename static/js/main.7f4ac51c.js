(()=>{const e=window.innerWidth<0?"phone":"desc";function t(e,t){const n=document.createElement("div");n.classList.add("close"),n.addEventListener("click",t),e.appendChild(n)}window.addEventListener("load",(()=>{let n=new XMLHttpRequest;n.open("GET","tasks/".concat(e,".svg"),!1),n.overrideMimeType("image/svg+xml"),n.onload=function(o){try{document.querySelector(".full").appendChild(n.responseXML.documentElement);const a=(new Date).getDate();document.getElementById("curentDay").innerHTML=a;Array.from(document.querySelectorAll("[data-window]")).map((e=>({el:e,day:e.getAttribute("data-window")}))).forEach((n=>{let{el:o,day:a}=n;parseInt(a)<100?(o.setAttribute("fill","#AB2083"),o.addEventListener("click",(()=>{!function(n){let o=new XMLHttpRequest;o.open("GET","tasks/".concat(e,"/").concat(n,".svg"),!1),o.overrideMimeType("image/svg+xml"),o.onload=function(e){try{const a=document.createElement("div");a.classList.add("task_wrapper");const r=document.createElement("div");function n(e){e.target===e.currentTarget&&(a.removeEventListener("click",n),a.remove())}r.classList.add("task_modal"),r.appendChild(o.responseXML.documentElement),a.appendChild(r),document.body.appendChild(a),t(a,n),a.addEventListener("click",n),Array.from(a.querySelectorAll('[data-type="tuskLink"]')).forEach((e=>{e.addEventListener("click",(()=>{window.open("/")}))}))}catch(e){console.log(e)}},o.send("")}(a)}))):o.style.cursor="default"})),Array.from(document.querySelectorAll("[data-answer]")).forEach((e=>{e.addEventListener("click",(()=>{let n=new XMLHttpRequest;n.open("GET","tasks/answer/".concat(e.getAttribute("data-answer"),".svg"),!1),n.overrideMimeType("image/svg+xml"),n.onload=function(e){try{const a=document.createElement("div");function o(){a.removeEventListener("click",o),a.remove()}a.classList.add("wrapper_answer"),a.appendChild(n.responseXML.documentElement),a.addEventListener("click",o),document.body.appendChild(a),t(a,o)}catch(e){console.log(e)}},n.send("")}))}));try{const e=Array.from(document.querySelectorAll("[data-g]")),t=Array.from(new Set(e.map((e=>e.getAttribute("fill")))));setInterval((()=>{e.forEach((e=>{e.setAttribute("fill",t[Math.floor(Math.random()*t.length)])}))}),1500)}catch(o){console.log(o)}try{Array.from(document.querySelectorAll("[data-snow]")).forEach((function e(t){const n=Math.random()+5+3,o=Array.from({length:n}).fill(void 0).map(((e,t)=>{const o=window.innerHeight;return{transform:"translateY(".concat(o*(t/n)-o/5,"px)"),opacity:1-t/n}})),a={duration:1e4*Math.random()+1e3,iterations:1};t.animate(o,a).addEventListener("finish",(()=>{e(t)}))}))}catch(o){console.log(o)}}catch(o){console.log(o)}},n.send("")}))})();
//# sourceMappingURL=main.7f4ac51c.js.map