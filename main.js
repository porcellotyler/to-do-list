(()=>{"use strict";function t(t){for(let e=0;e<t.length;e++){let i=document.getElementById("content"),n=document.createElement("div");n.classList.add("toDoItemCard"),i.append(n);let l=e;t[e].id=l;let d=document.createElement("div");d.setAttribute("class","title"),d.innerText=`${t[e].title}`,n.append(d);let r=document.createElement("div");r.setAttribute("class","dueDate"),r.innerText=`Due: ${t[e].dueDate}`,n.append(r);let c=document.createElement("div");c.setAttribute("class","priority"),c.innerText=`${t[e].priority}`,n.append(c);let u=document.createElement("div");u.setAttribute("class","description"),u.innerText=`${t[e].description}`,n.append(u);let s=document.createElement("button");s.setAttribute("id","deleteButton"),s.setAttribute("class",`item-${e}`),s.innerText="X",s.onclick=()=>{o(e);let t=s.parentNode;i.removeChild(t)},n.append(s)}}let e=[],i=[],n=[],l=[];function o(t){let i=e.filter((e=>e.id===t));e=e.filter((e=>e.id!==t)),i.list="garbage",l.push(i)}function d(t,e,i,n,l){this.title=t,this.dueDate=e,this.priority=i,this.description=n,this.list=l,this.id=""}console.log("Hello world"),document.getElementById("addButton").onclick=()=>{!function(){const o=document.getElementById("content"),r=document.createElement("div");r.innerHTML='<div class="modalContent"> <input type="text" id="title" name="title" value="title?"/> <input type="datetime-local" id="dueDate" name="dueDate" value="when?"/> <input type="text" id="priority" name="priority" value="priority?"/> <input type="text" id="description" name="description" value="description?"/>  <select name="listID" id="listID"> <option value="">--Please pick a list--</option> <option value="mainList">All tasks</option> <option value="today">Today</option> <option value="upcoming">Upcoming</option> </select> <button id="create">Create</button> </div>',r.setAttribute("class","modal"),o.prepend(r),document.getElementById("create").onclick=function(){let c=new d(document.getElementById("title").value,document.getElementById("dueDate").value,document.getElementById("priority").value,document.getElementById("description").value,document.getElementById("listID").value);return o.removeChild(r),function(o){if("mainList"===o.list){e.push(o);let i=document.getElementById("content");for(;i.firstChild;)i.removeChild(i.firstChild);return t(e)}if("today"===o.list){i.push(o);let e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild);return t(i)}if("upcoming"===o.list){n.push(o);let e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild);return t(n)}"garbage"===o.list?l.push(o):console.log("error in list ID")}(c)}}()},document.getElementById("allTasks").onclick=()=>{!function(){let i=document.getElementById("content");for(;i.firstChild;)i.removeChild(i.firstChild);t(e)}()},document.getElementById("today").onclick=()=>{!function(){let e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild);t(i)}()},document.getElementById("upcoming").onclick=()=>{!function(){let e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild);t(n)}()}})();