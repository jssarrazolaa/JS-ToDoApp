(()=>{"use strict";const e=e=>{let t=document.getElementById("title").value,o=document.getElementById("description").value,n=document.getElementById("date").value,d=document.getElementById("priority").selectedIndex,a=document.getElementById("done").checked,l=new class{constructor(e,t,o,n,d){this.title=e,this.description=t,this.date=o,this.priotiry=n,this.done=d}}(t,o,n,d,a);const c=JSON.parse(localStorage.getItem("myTodos"));c[e].projects.unshift(l),localStorage.setItem("myTodos",JSON.stringify(c))},t=document.getElementById("projectsContainer");class o{constructor(e){this.name=e,this.projects=[]}}const n=o=>{t.innerHTML="",t.classList.add("align");for(let d=0;d<o.length;d++){const a=document.createElement("div"),l=document.createElement("h1"),c=document.createElement("button");a.classList.add("card","p-2"),c.textContent="Add Task",l.textContent=o[d].name,c.type="button",c.className="btn btn-primary",c.dataToggle="modal",c.dataTarget="#exampleModal",a.appendChild(l);for(let e=0;e<o[d].projects.length;e++){const t=document.createElement("div"),l=document.createElement("h3"),c=document.createElement("p"),i=document.createElement("p"),r=document.createElement("p"),m=document.createElement("p"),p=document.createElement("button");t.classList.add("card","border","p-3","mb-2"),l.textContent=o[d].projects[e].title,c.textContent=o[d].projects[e].description,i.textContent=o[d].projects[e].date,r.textContent=["High Priority","Mid Priority","Low Priotity"][o[d].projects[e].priotiry],m.textContent=o[d].projects[e].done?"Completed":"To Do",p.textContent="Edit",p.className="btn btn-success";let s=o[d];t.addEventListener("click",(()=>{console.log(d,e,s);const t=JSON.parse(localStorage.getItem("myTodos"));t[d].projects.splice(e,1),localStorage.setItem("myTodos",JSON.stringify(t)),n(JSON.parse(localStorage.getItem("myTodos")))})),p.addEventListener("click",(()=>{a.innerHTML+="";var t=JSON.parse(localStorage.getItem("myTodos"))[d].projects[e];console.log(t);const o=document.createElement("div"),n=document.createElement("form"),l=document.createElement("div"),c=document.createElement("input"),i=document.createElement("div"),r=document.createElement("input"),m=document.createElement("div"),p=document.createElement("input"),s=document.createElement("div"),u=document.createElement("select"),h=document.createElement("option"),C=document.createElement("option"),y=document.createElement("option"),E=document.createElement("div"),g=document.createElement("input"),f=document.createElement("label"),N=document.createElement("input");o.className="taskForm",n.id="form",l.className="taskTitle form-group",c.type="text",c.id="title",c.placeholder="Title",c.className="form-control",c.value=t.title,i.className="description form-group",r.type="text",r.id="description",r.placeholder="Description",r.className="form-control",r.value=t.description,m.className="date form-group",p.type="date",p.id="date",p.className="form-control",p.value=t.date,s.className="priority form-group",u.name="weapon",u.id="priority",u.className="form-control",h.value="High Priority",h.textContent="High Priority",C.value="Mid Priority",C.textContent="Mid Priority",y.value="Low Priority",y.textContent="Low Priority",u.value=t.priotiry,E.className="done form-group",g.type="checkbox",g.id="done",g.name="done",g.className="form-control",f.for="done",f.textContent="Completed: ",g.value=t.done,N.type="submit",N.id="button",N.className="btn btn-primary btn-block",E.appendChild(g),E.appendChild(f),u.appendChild(h),u.appendChild(C),u.appendChild(y),s.appendChild(u),m.appendChild(p),i.appendChild(r),l.appendChild(c),n.appendChild(l),n.appendChild(i),n.appendChild(m),n.appendChild(s),n.appendChild(E),n.appendChild(N),o.appendChild(n),a.appendChild(o)})),t.appendChild(l),t.appendChild(c),t.appendChild(i),t.appendChild(r),t.appendChild(m),t.appendChild(p),a.appendChild(t)}c.addEventListener("click",(()=>{const t=document.createElement("div"),o=document.createElement("form"),n=document.createElement("div"),l=document.createElement("input"),c=document.createElement("div"),i=document.createElement("input"),r=document.createElement("div"),m=document.createElement("input"),p=document.createElement("div"),s=document.createElement("select"),u=document.createElement("option"),h=document.createElement("option"),C=document.createElement("option"),y=document.createElement("div"),E=document.createElement("input"),g=document.createElement("label"),f=document.createElement("input");t.className="taskForm",o.id="form",n.className="taskTitle form-group",l.type="text",l.id="title",l.placeholder="Title",l.className="form-control",c.className="description form-group",i.type="text",i.id="description",i.placeholder="Description",i.className="form-control",r.className="date form-group",m.type="date",m.id="date",m.className="form-control",p.className="priority form-group",s.name="weapon",s.id="priority",s.className="form-control",u.value="High Priority",u.textContent="High Priority",h.value="Mid Priority",h.textContent="Mid Priority",C.value="Low Priority",C.textContent="Low Priority",y.className="done form-group",E.type="checkbox",E.id="done",E.name="done",E.className="form-control",g.for="done",g.textContent="Completed: ",f.type="submit",f.id="button",f.className="btn btn-primary btn-block",y.appendChild(E),y.appendChild(g),s.appendChild(u),s.appendChild(h),s.appendChild(C),p.appendChild(s),r.appendChild(m),c.appendChild(i),n.appendChild(l),o.appendChild(n),o.appendChild(c),o.appendChild(r),o.appendChild(p),o.appendChild(y),o.appendChild(f),t.appendChild(o),a.appendChild(t),f.addEventListener("click",(function(){e(d)}))})),a.appendChild(c),t.appendChild(a)}};document.getElementById("botonProject").addEventListener("click",(e=>{const t=document.getElementById("projectName").value,a=new o(t);!function(e){if(null===localStorage.getItem("myTodos")){const t=[];t.unshift(e),localStorage.setItem("myTodos",JSON.stringify(t))}else{const t=JSON.parse(localStorage.getItem("myTodos"));t.unshift(e),localStorage.setItem("myTodos",JSON.stringify(t))}}(a),n(d[a].projects)}));let d=JSON.parse(localStorage.getItem("myTodos"));n(JSON.parse(localStorage.getItem("myTodos")))})();