const state={
 page:"dashboard", role:"WAREHOUSE STAFF",
 materials:[
  {id:"MAT-001",sku:"FAB-TOP-001",name:"Kain Topper",category:"Kain",unit:"Meter",min:500,max:3000,stock:1250,location:"WH01-A-A01",status:"Active"},
  {id:"MAT-002",sku:"FAB-BOT-001",name:"Kain Bottom",category:"Kain",unit:"Meter",min:400,max:2500,stock:380,location:"WH01-A-A02",status:"Active"},
  {id:"MAT-003",sku:"FAB-SID-001",name:"Kain Side",category:"Kain",unit:"Meter",min:350,max:2200,stock:700,location:"WH01-A-A03",status:"Active"},
  {id:"MAT-004",sku:"FOAM-D17",name:"Busa Density 17",category:"Busa",unit:"Lembar",min:200,max:1200,stock:145,location:"WH01-B-B01",status:"Active"},
  {id:"MAT-005",sku:"FOAM-D18",name:"Busa D18",category:"Busa",unit:"Lembar",min:200,max:1200,stock:460,location:"WH01-B-B02",status:"Active"},
  {id:"MAT-006",sku:"FOAM-D25",name:"Busa D25",category:"Busa",unit:"Lembar",min:150,max:900,stock:0,location:"WH01-B-B03",status:"Active"},
  {id:"MAT-007",sku:"WIRE-18",name:"Kawat Dia 1.8 mm",category:"Kawat",unit:"Kg",min:100,max:700,stock:180,location:"WH01-C-C01",status:"Active"},
  {id:"MAT-008",sku:"WIRE-20",name:"Kawat Dia 2.0 mm",category:"Kawat",unit:"Kg",min:100,max:700,stock:520,location:"WH01-C-C02",status:"Active"},
  {id:"MAT-009",sku:"WIRE-22",name:"Kawat Dia 2.2 mm",category:"Kawat",unit:"Kg",min:80,max:600,stock:610,location:"WH01-C-C03",status:"Active"},
  {id:"MAT-010",sku:"THR-BLK",name:"Benang Hitam",category:"Benang",unit:"Cone",min:40,max:250,stock:32,location:"WH01-D-D01",status:"Active"},
  {id:"MAT-011",sku:"THR-WHT",name:"Benang Putih",category:"Benang",unit:"Cone",min:40,max:250,stock:96,location:"WH01-D-D02",status:"Active"},
  {id:"MAT-012",sku:"WEB-BLK",name:"Pita Webbing Hitam",category:"Webbing",unit:"Roll",min:25,max:150,stock:65,location:"WH01-D-D03",status:"Active"}
 ],
 suppliers:[
  ["SUP-001","S-001","PT Sumber Kain Nusantara","Budi","0812-1111-2222","supplier@skn.co.id","Kain"],
  ["SUP-002","S-002","PT Foam Indonesia","Andi","0813-2222-3333","sales@foam.co.id","Busa"],
  ["SUP-003","S-003","PT Baja Wire Makmur","Rudi","0814-3333-4444","sales@wire.co.id","Kawat"],
  ["SUP-004","S-004","PT Benang Jaya","Sinta","0815-4444-5555","info@benang.co.id","Benang"]
 ].map(x=>({id:x[0],code:x[1],name:x[2],contact:x[3],phone:x[4],email:x[5],category:x[6],status:"Active"})),
 locations:[
  {id:"LOC-001",warehouse:"WH01",area:"A",rack:"A01",bin:"A01-01",capacity:3000,status:"Active"},
  {id:"LOC-002",warehouse:"WH01",area:"A",rack:"A02",bin:"A02-01",capacity:2500,status:"Active"},
  {id:"LOC-003",warehouse:"WH01",area:"B",rack:"B01",bin:"B01-01",capacity:1200,status:"Active"},
  {id:"LOC-004",warehouse:"WH01",area:"B",rack:"B02",bin:"B02-01",capacity:1200,status:"Active"},
  {id:"LOC-005",warehouse:"WH01",area:"C",rack:"C01",bin:"C01-01",capacity:700,status:"Active"}
 ],
 movements:[
  {id:"MOV-1001",date:"2026-10-21",time:"08:20",material:"Kain Topper",location:"WH01-A-A01",type:"RECEIVING",in:500,out:0,balance:1250,ref:"RCV-20261021-001",user:"Jaka Pertaka"},
  {id:"MOV-1002",date:"2026-10-21",time:"10:05",material:"Busa Density 17",location:"WH01-B-B01",type:"ISSUING",in:0,out:55,balance:145,ref:"ISS-20261021-001",user:"Jaka Pertaka"},
  {id:"MOV-1003",date:"2026-10-20",time:"15:30",material:"Kain Bottom",location:"WH01-A-A02",type:"PUTAWAY",in:200,out:0,balance:380,ref:"PA-20261020-002",user:"Warehouse Staff"},
  {id:"MOV-1004",date:"2026-10-20",time:"13:10",material:"Benang Hitam",location:"WH01-D-D01",type:"STOCK OPNAME",in:0,out:0,balance:32,ref:"SO-20261020-001",user:"Warehouse Staff"}
 ],
 adjustments:[
  {id:"ADJ-001",material:"Busa Density 17",location:"WH01-B-B01",system:145,physical:140,diff:-5,reason:"Selisih perhitungan fisik",requested:"Warehouse Staff",date:"2026-10-21",status:"PENDING"}
 ],
 receivings:[
  {id:"RCV-20261021-001",date:"2026-10-21",supplier:"PT Sumber Kain Nusantara",ref:"SJ-8821",po:"PO-20261018-04",status:"COMPLETED",items:1}
 ],
 issuings:[
  {id:"ISS-20261021-001",date:"2026-10-21",department:"Production",requested:"Operator Produksi",purpose:"Produksi mattress",status:"COMPLETED",items:1}
 ],
 opnames:[{id:"SO-20261020-001",date:"2026-10-20",location:"WH01-D-D01",material:"Benang Hitam",system:32,physical:32,diff:0,status:"MATCHED"}],
 audit:[
  {id:"LOG-001",date:"2026-10-21",time:"10:05",user:"Jaka Pertaka",role:"WAREHOUSE STAFF",module:"Issuing",action:"COMPLETE",ref:"ISS-20261021-001",status:"SUCCESS"},
  {id:"LOG-002",date:"2026-10-21",time:"08:20",user:"Jaka Pertaka",role:"WAREHOUSE STAFF",module:"Receiving",action:"COMPLETE",ref:"RCV-20261021-001",status:"SUCCESS"},
  {id:"LOG-003",date:"2026-10-21",time:"07:50",user:"Jaka Pertaka",role:"WAREHOUSE STAFF",module:"Login",action:"LOGIN",ref:"AUTH",status:"SUCCESS"}
 ]
};

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const toast=(msg,type="success")=>{const e=$("#toast");e.textContent=msg;e.className=`toast ${type}`;setTimeout(()=>e.className="",2400)};
const badge=(s)=>{const map={Active:"green",SAFE:"green",MATCHED:"green",APPROVED:"green",COMPLETED:"green",LOW:"yellow","LOW STOCK":"yellow",PENDING:"yellow","ADJUSTMENT REQUIRED":"red","OUT OF STOCK":"red",REJECTED:"red",OVER:"red","OVER STOCK":"red",RECEIVING:"blue",PUTAWAY:"blue",ISSUING:"blue"};return `<span class="badge ${map[s]||"blue"}">${esc(s)}</span>`};
const stockStatus=m=>m.stock<=0?"OUT OF STOCK":m.stock<=m.min?"LOW STOCK":m.stock>m.max?"OVER STOCK":"SAFE";
function log(module,action,ref,status="SUCCESS"){state.audit.unshift({id:"LOG-"+Date.now(),date:new Date().toISOString().slice(0,10),time:new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"}),user:"Jaka Pertaka",role:state.role,module,action,ref,status})}
function save(){localStorage.setItem("wms-mattress-state",JSON.stringify(state))}
function load(){const x=localStorage.getItem("wms-mattress-state");if(x){try{Object.assign(state,JSON.parse(x))}catch{}}}
load();

const pages={
dashboard:{title:"Dashboard",sub:"Monitoring persediaan real-time"},
materials:{title:"Master Bahan Baku",sub:"Kelola material produksi mattress"},
suppliers:{title:"Master Supplier",sub:"Kelola data pemasok"},
locations:{title:"Lokasi Gudang",sub:"Warehouse → Area → Rack → Bin"},
users:{title:"User & Role",sub:"Pengaturan akses pengguna"},
receiving:{title:"Barang Masuk",sub:"Receiving material dari supplier"},
putaway:{title:"Putaway",sub:"Penempatan barang ke lokasi gudang"},
issuing:{title:"Barang Keluar",sub:"Issuing material ke produksi"},
movement:{title:"Stock Movement",sub:"Riwayat seluruh perubahan stok"},
stock:{title:"Stok Gudang",sub:"Monitoring posisi dan kondisi stok"},
opname:{title:"Stock Opname",sub:"Rekonsiliasi system stock dan physical stock"},
adjustment:{title:"Stock Adjustment",sub:"Request koreksi stok"},
approval:{title:"Approval Adjustment",sub:"Persetujuan koreksi stok"},
reports:{title:"Laporan",sub:"Laporan operasional gudang"},
audit:{title:"Audit Trail",sub:"Jejak aktivitas sistem"}
};

function render(){
 const p=pages[state.page]||pages.dashboard;
 $("#pageTitle").textContent=p.title;$("#pageSub").textContent=p.sub;
 $$("[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===state.page));
 const fn=render[state.page]||render.dashboard;fn();
 updateNotif();
}
function head(title,desc,btn=""){return `<div class="page-head"><div><h2>${title}</h2><p>${desc}</p></div>${btn}</div>`}
function table(headers,rows){return `<div class="table-wrap"><table class="table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows||`<tr><td colspan="${headers.length}"><div class="empty">Tidak ada data</div></td></tr>`}</tbody></table></div>`}
function renderDashboard(){
 const low=state.materials.filter(m=>m.stock<=m.min).length,out=state.materials.filter(m=>m.stock<=0).length,pending=state.adjustments.filter(a=>a.status==="PENDING").length,total=state.materials.length,matched=state.opnames.filter(x=>x.diff===0).length,accuracy=state.opnames.length?((matched/state.opnames.length)*100).toFixed(1):"100.0";
 $("#content").innerHTML=head("Dashboard","Ringkasan operasional warehouse hari ini")+`
 <div class="kpis">
 <div class="kpi"><div class="label">Total Material</div><div class="value">${total}</div><div class="hint">Material aktif</div></div>
 <div class="kpi"><div class="label">Total Stock</div><div class="value">${state.materials.reduce((a,b)=>a+b.stock,0).toLocaleString("id-ID")}</div><div class="hint">Total quantity</div></div>
 <div class="kpi"><div class="label">Barang Masuk Hari Ini</div><div class="value">${state.receivings.filter(x=>x.date===new Date().toISOString().slice(0,10)).length}</div><div class="hint good">Receiving completed</div></div>
 <div class="kpi"><div class="label">Barang Keluar Hari Ini</div><div class="value">${state.issuings.filter(x=>x.date===new Date().toISOString().slice(0,10)).length}</div><div class="hint">Issuing completed</div></div>
 <div class="kpi"><div class="label">Low Stock</div><div class="value bad">${low}</div><div class="hint">Perlu perhatian</div></div>
 <div class="kpi"><div class="label">Out of Stock</div><div class="value bad">${out}</div><div class="hint">Stok kosong</div></div>
 <div class="kpi"><div class="label">Pending Adjustment</div><div class="value warn">${pending}</div><div class="hint">Menunggu supervisor</div></div>
 <div class="kpi"><div class="label">Stock Accuracy</div><div class="value good">${accuracy}%</div><div class="hint">Berdasarkan opname</div></div></div>
 <div class="dashboard-grid"><div class="card"><h3>Barang Masuk vs Barang Keluar</h3><div class="chart"><canvas id="movementChart"></canvas></div></div>
 <div class="card"><h3>Low Stock Alert</h3>${state.materials.filter(m=>m.stock<=m.min).map(m=>`<div class="list-item"><span>${esc(m.name)}</span><b class="bad">${m.stock} ${m.unit}</b></div>`).join("")||'<div class="empty">Tidak ada low stock</div>'}</div></div>
 <div class="card" style="margin-top:16px"><h3>Quick Actions</h3><div class="quick-actions">
 <button data-quick="receiving"><b>＋ Barang Masuk</b><small>Buat receiving baru</small></button>
 <button data-quick="issuing"><b>＋ Barang Keluar</b><small>Kirim material ke produksi</small></button>
 <button data-quick="opname"><b>☑ Stock Opname</b><small>Hitung physical stock</small></button></div></div>`;
 new Chart($("#movementChart"),{type:"bar",data:{labels:["17 Okt","18 Okt","19 Okt","20 Okt","21 Okt"],datasets:[{label:"Masuk",data:[300,450,250,500,500]},{label:"Keluar",data:[180,220,310,200,55]}]},options:{responsive:true,maintainAspectRatio:false}});
 $$("[data-quick]").forEach(b=>b.onclick=()=>{state.page=b.dataset.quick;render()});
}
render.materials=()=>{let q="";$("#content").innerHTML=head("Master Bahan Baku","Material produksi mattress",`<button class="btn" id="addBtn">+ Tambah Material</button>`)+`<div class="toolbar"><input id="search" placeholder="Cari SKU atau nama material..."><select id="cat"><option value="">Semua kategori</option>${[...new Set(state.materials.map(x=>x.category))].map(x=>`<option>${x}</option>`).join("")}</select></div><div id="tbl"></div>`;const draw=()=>{q=$("#search").value.toLowerCase();const c=$("#cat").value;const a=state.materials.filter(m=>(!q||m.name.toLowerCase().includes(q)||m.sku.toLowerCase().includes(q))&&(!c||m.category===c));$("#tbl").innerHTML=table(["SKU","Material","Kategori","Satuan","Min","Max","Stock","Lokasi","Status","Aksi"],a.map(m=>`<tr><td>${m.sku}</td><td><b>${m.name}</b></td><td>${m.category}</td><td>${m.unit}</td><td>${m.min}</td><td>${m.max}</td><td>${m.stock}</td><td>${m.location}</td><td>${badge(stockStatus(m))}</td><td><button class="btn secondary edit-m" data-id="${m.id}">Edit</button></td></tr>`).join(""));$$(".edit-m").forEach(b=>b.onclick=()=>openMaterial(b.dataset.id))};$("#search").oninput=draw;$("#cat").onchange=draw;draw();$("#addBtn").onclick=()=>openMaterial()};
function openMaterial(id){const m=state.materials.find(x=>x.id===id)||{};modal("Material",`<form class="form" id="mf">
<label>SKU<input name="sku" required value="${esc(m.sku||"")}"></label><label>Nama Material<input name="name" required value="${esc(m.name||"")}"></label>
<label>Kategori<input name="category" required value="${esc(m.category||"")}"></label><label>Satuan<input name="unit" required value="${esc(m.unit||"")}"></label>
<label>Minimum Stock<input name="min" type="number" required value="${m.min??0}"></label><label>Maximum Stock<input name="max" type="number" required value="${m.max??0}"></label>
<label>Lokasi Utama<input name="location" value="${esc(m.location||"")}"></label><label>Status<select name="status"><option ${m.status!=="Inactive"?"selected":""}>Active</option><option ${m.status==="Inactive"?"selected":""}>Inactive</option></select></label>
<div class="actions"><button type="button" class="btn secondary" id="cancel">Batal</button><button class="btn">Simpan</button></div></form>`);$("#mf").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);if(id)Object.assign(m,{sku:f.get("sku"),name:f.get("name"),category:f.get("category"),unit:f.get("unit"),min:+f.get("min"),max:+f.get("max"),location:f.get("location"),status:f.get("status")});else state.materials.push({id:"MAT-"+String(Date.now()).slice(-5),sku:f.get("sku"),name:f.get("name"),category:f.get("category"),unit:f.get("unit"),min:+f.get("min"),max:+f.get("max"),stock:0,location:f.get("location"),status:f.get("status")});log("Materials",id?"UPDATE":"CREATE",id||"NEW");save();closeModal();toast("Data material berhasil disimpan");render()}};

render.suppliers=()=>{const rows=state.suppliers.map(s=>`<tr><td>${s.code}</td><td><b>${s.name}</b></td><td>${s.contact}</td><td>${s.phone}</td><td>${s.email}</td><td>${s.category}</td><td>${badge(s.status)}</td></tr>`).join("");$("#content").innerHTML=head("Master Supplier","Data supplier bahan baku",`<button class="btn" id="addSupplier">+ Tambah Supplier</button>`)+table(["Code","Supplier","Contact","Phone","Email","Category","Status"],rows);$("#addSupplier").onclick=()=>toast("Form supplier siap dikembangkan pada modul master data")};
render.locations=()=>$("#content").innerHTML=head("Lokasi Gudang","Hierarki Warehouse → Area → Rack → Bin",`<button class="btn" id="addLoc">+ Tambah Lokasi</button>`)+table(["ID","Warehouse","Area","Rack","Bin","Capacity","Status"],state.locations.map(l=>`<tr><td>${l.id}</td><td>${l.warehouse}</td><td>${l.area}</td><td>${l.rack}</td><td>${l.bin}</td><td>${l.capacity.toLocaleString("id-ID")}</td><td>${badge(l.status)}</td></tr>`).join(""));
render.users=()=>$("#content").innerHTML=head("User & Role","Role-based access control")+`<div class="notice">Demo aktif sebagai <b>Jaka Pertaka — ${state.role}</b>. Supabase Auth + RLS disiapkan pada schema database.</div>`+table(["User","Role","Status","Akses"],[`<tr><td>Jaka Pertaka</td><td>${badge("WAREHOUSE STAFF")}</td><td>${badge("Active")}</td><td>Dashboard, transaksi, stok, opname, adjustment request</td></tr><tr><td>Supervisor Demo</td><td>${badge("SUPERVISOR")}</td><td>${badge("Active")}</td><td>Monitoring, opname, adjustment approval, report</td></tr><tr><td>Admin Demo</td><td>${badge("ADMIN")}</td><td>${badge("Active")}</td><td>Full access</td></tr>`]);
render.receiving=()=>$("#content").innerHTML=head("Barang Masuk","Receiving rutin tidak memerlukan approval",`<button class="btn" id="newRcv">+ Receiving Baru</button>`)+table(["Receiving ID","Tanggal","Supplier","Reference","PO","Items","Status"],state.receivings.map(x=>`<tr><td>${x.id}</td><td>${x.date}</td><td>${x.supplier}</td><td>${x.ref}</td><td>${x.po}</td><td>${x.items}</td><td>${badge(x.status)}</td></tr>`).join(""));
render.putaway=()=>$("#content").innerHTML=head("Putaway","Pindahkan material dari receiving ke lokasi gudang")+`<div class="notice">Flow: Receiving → Putaway → pilih lokasi → qty → confirm → stock berada pada lokasi.</div>`+table(["Putaway ID","Receiving","Material","Location","Qty","Date","User"],state.movements.filter(x=>x.type==="PUTAWAY").map(x=>`<tr><td>PA-20261020-002</td><td>${x.ref}</td><td>${x.material}</td><td>${x.location}</td><td>${x.in}</td><td>${x.date}</td><td>${x.user}</td></tr>`).join(""));
render.issuing=()=>$("#content").innerHTML=head("Barang Keluar","Issuing ke production • tidak boleh melebihi available stock",`<button class="btn" id="newIss">+ Issuing Baru</button>`)+table(["Issuing ID","Tanggal","Department","Requested By","Purpose","Items","Status"],state.issuings.map(x=>`<tr><td>${x.id}</td><td>${x.date}</td><td>${x.department}</td><td>${x.requested}</td><td>${x.purpose}</td><td>${x.items}</td><td>${badge(x.status)}</td></tr>`).join(""));
render.movement=()=>$("#content").innerHTML=head("Stock Movement","Semua perubahan stock memiliki movement record")+`<div class="toolbar"><input id="mvSearch" placeholder="Cari material / reference..."></div><div id="mv"></div>`;const mv=()=>$("#mv").innerHTML=table(["ID","Date","Time","Material","Location","Type","Qty In","Qty Out","Balance","Reference","User"],state.movements.filter(x=>!$("#mvSearch").value||JSON.stringify(x).toLowerCase().includes($("#mvSearch").value.toLowerCase())).map(x=>`<tr><td>${x.id}</td><td>${x.date}</td><td>${x.time}</td><td>${x.material}</td><td>${x.location}</td><td>${badge(x.type)}</td><td>${x.in}</td><td>${x.out}</td><td>${x.balance}</td><td>${x.ref}</td><td>${x.user}</td></tr>`).join(""));$("#mvSearch").oninput=mv;mv();
render.stock=()=>$("#content").innerHTML=head("Stok Gudang","Posisi stock berdasarkan material dan lokasi",`<button class="btn secondary" id="exportStock">Export CSV</button>`)+`<div class="toolbar"><input id="stSearch" placeholder="Cari SKU / material..."><select id="stStatus"><option value="">Semua status</option><option>SAFE</option><option>LOW STOCK</option><option>OUT OF STOCK</option><option>OVER STOCK</option></select></div><div id="st"></div>`;const st=()=>{$("#st").innerHTML=table(["SKU","Material","Category","Location","Current Stock","Min","Max","Unit","Status"],state.materials.filter(m=>(!$("#stSearch").value||JSON.stringify(m).toLowerCase().includes($("#stSearch").value.toLowerCase()))&&(!$("#stStatus").value||stockStatus(m)===$("#stStatus").value)).map(m=>`<tr><td>${m.sku}</td><td>${m.name}</td><td>${m.category}</td><td>${m.location}</td><td><b>${m.stock}</b></td><td>${m.min}</td><td>${m.max}</td><td>${m.unit}</td><td>${badge(stockStatus(m))}</td></tr>`).join(""))};$("#stSearch").oninput=st;$("#stStatus").onchange=st;st();$("#exportStock").onclick=()=>exportCSV(state.materials,"stock.csv");
render.opname=()=>{$("#content").innerHTML=head("Stock Opname","Penghitungan fisik tidak langsung mengubah stock",`<button class="btn" id="newSo">+ Buat Stock Opname</button>`)+`<div class="notice">Difference = Physical Stock − System Stock. Jika 0 = MATCHED; jika ≠ 0 = ADJUSTMENT REQUIRED.</div>`+table(["ID","Date","Location","Material","System","Physical","Difference","Status"],state.opnames.map(x=>`<tr><td>${x.id}</td><td>${x.date}</td><td>${x.location}</td><td>${x.material}</td><td>${x.system}</td><td>${x.physical}</td><td class="${x.diff<0?"bad":x.diff>0?"warn":""}"><b>${x.diff}</b></td><td>${badge(x.diff===0?"MATCHED":"ADJUSTMENT REQUIRED")}</td></tr>`).join(""));$("#newSo").onclick=()=>openOpname()};
function openOpname(){modal("Stock Opname",`<form class="form" id="sof"><label>Material<select name="material">${state.materials.map(m=>`<option>${m.name}</option>`).join("")}</select></label><label>Physical Stock<input type="number" name="physical" min="0" required></label><label class="full">Reason / Notes<textarea name="reason"></textarea></label><div class="actions"><button type="button" class="btn secondary" id="cancel">Batal</button><button class="btn">Simpan</button></div></form>`);$("#sof").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target),m=state.materials.find(x=>x.name===f.get("material")),physical=+f.get("physical"),diff=physical-m.stock,id="SO-"+Date.now();state.opnames.unshift({id,date:new Date().toISOString().slice(0,10),location:m.location,material:m.name,system:m.stock,physical,diff,status:diff===0?"MATCHED":"ADJUSTMENT REQUIRED"});if(diff!==0)state.adjustments.unshift({id:"ADJ-"+Date.now(),material:m.name,location:m.location,system:m.stock,physical,diff,reason:f.get("reason")||"Selisih stock opname",requested:"Jaka Pertaka",date:new Date().toISOString().slice(0,10),status:"PENDING"});log("Stock Opname","CREATE",id);save();closeModal();toast(diff===0?"Stock opname matched":"Selisih ditemukan — adjustment request dibuat");render()}};
render.adjustment=()=>$("#content").innerHTML=head("Stock Adjustment","Warehouse Staff hanya dapat membuat request")+table(["ID","Material","Location","System","Physical","Difference","Reason","Requested By","Status"],state.adjustments.map(a=>`<tr><td>${a.id}</td><td>${a.material}</td><td>${a.location}</td><td>${a.system}</td><td>${a.physical}</td><td class="${a.diff<0?"bad":"warn"}"><b>${a.diff}</b></td><td>${a.reason}</td><td>${a.requested}</td><td>${badge(a.status)}</td></tr>`).join(""));
render.approval=()=>$("#content").innerHTML=head("Approval Adjustment","Hanya adjustment/koreksi stok yang memerlukan approval")+table(["ID","Material","Difference","Reason","Requested By","Date","Status","Action"],state.adjustments.map(a=>`<tr><td>${a.id}</td><td>${a.material}</td><td class="${a.diff<0?"bad":"warn"}">${a.diff}</td><td>${a.reason}</td><td>${a.requested}</td><td>${a.date}</td><td>${badge(a.status)}</td><td>${a.status==="PENDING"?`<button class="btn success approve" data-id="${a.id}">Approve</button> <button class="btn danger reject" data-id="${a.id}">Reject</button>`:"—"}</td></tr>`).join(""));$$(".approve").forEach(b=>b.onclick=()=>approve(b.dataset.id));$$(".reject").forEach(b=>b.onclick=()=>reject(b.dataset.id));
function approve(id){const a=state.adjustments.find(x=>x.id===id);if(!a)return;if(a.requested==="Supervisor Demo"&&state.role==="SUPERVISOR"){toast("Supervisor tidak dapat approve request miliknya sendiri","error");return}if(!confirm(`Apakah Anda yakin ingin menyetujui adjustment sebesar ${a.diff}?`))return;const m=state.materials.find(x=>x.name===a.material);if(m){m.stock+=a.diff;state.movements.unshift({id:"MOV-"+Date.now(),date:new Date().toISOString().slice(0,10),time:new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"}),material:m.name,location:a.location,type:"ADJUSTMENT",in:a.diff>0?a.diff:0,out:a.diff<0?Math.abs(a.diff):0,balance:m.stock,ref:a.id,user:"Supervisor Demo"});a.status="APPROVED";log("Approval","APPROVE",a.id);save();toast("Adjustment berhasil disetujui");render()}}
function reject(id){const a=state.adjustments.find(x=>x.id===id);if(!a)return;const reason=prompt("Alasan penolakan wajib diisi:");if(!reason)return;a.status="REJECTED";a.rejectReason=reason;log("Approval","REJECT",a.id);save();toast("Adjustment ditolak","error");render()}
render.reports=()=>{$("#content").innerHTML=head("Laporan","Filter dan export laporan operasional")+`<div class="tabs"><button class="tab active">Stock Report</button><button class="tab">Receiving</button><button class="tab">Issuing</button><button class="tab">Stock Opname</button><button class="tab">Adjustment</button></div><div class="toolbar"><input type="date" id="from"><input type="date" id="to"><button class="btn secondary" id="exp">Export CSV</button></div><div id="report">${table(["SKU","Material","Category","Location","Stock","Min","Max","Status"],state.materials.map(m=>`<tr><td>${m.sku}</td><td>${m.name}</td><td>${m.category}</td><td>${m.location}</td><td>${m.stock}</td><td>${m.min}</td><td>${m.max}</td><td>${badge(stockStatus(m))}</td></tr>`).join(""))}</div>`;$("#exp").onclick=()=>exportCSV(state.materials,"stock-report.csv")};
render.audit=()=>$("#content").innerHTML=head("Audit Trail","Aktivitas penting tidak dapat dihapus")+table(["Log ID","Date","Time","User","Role","Module","Action","Reference","Status"],state.audit.map(x=>`<tr><td>${x.id}</td><td>${x.date}</td><td>${x.time}</td><td>${x.user}</td><td>${x.role}</td><td>${x.module}</td><td>${x.action}</td><td>${x.ref}</td><td>${badge(x.status==="SUCCESS"?"APPROVED":"REJECTED")}</td></tr>`).join(""));

function modal(title,body){$("#modalTitle").textContent=title;$("#modalBody").innerHTML=body;$("#modal").classList.remove("hidden");$("#cancel")?.addEventListener("click",closeModal)}
function closeModal(){$("#modal").classList.add("hidden")}
function exportCSV(rows,name){if(!rows.length)return;const keys=Object.keys(rows[0]);const csv=[keys.join(","),...rows.map(r=>keys.map(k=>`"${String(r[k]??"").replaceAll('"','""')}"`).join(","))].join("\n");const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download=name;a.click();URL.revokeObjectURL(a.href)}
function updateNotif(){const n=state.materials.filter(m=>m.stock<=m.min).length+state.adjustments.filter(a=>a.status==="PENDING").length;$("#notifCount").textContent=n}
$("#nav").addEventListener("click",e=>{const b=e.target.closest("[data-page]");if(!b)return;state.page=b.dataset.page;render();if(innerWidth<800)$("#nav").closest(".sidebar").classList.remove("open")});
$("#closeModal").onclick=closeModal;$("#menuBtn").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");
$("#notifBtn").onclick=()=>{state.page="stock";render();toast("Menampilkan monitoring stock")};
$("#logoutBtn").onclick=()=>{log("Auth","LOGOUT","AUTH");save();toast("Logout berhasil")};
render();
