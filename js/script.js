function showResult(id, title, value, desc){
const box = document.getElementById(id);
box.classList.add('show');
box.innerHTML = `
<div class="result-icon">✨</div>
<div class="result-title">${title}</div>
<div class="result-value">${value}</div>
<div class="result-desc">${desc}</div>`;
}

// 3.1
function calcular31(){
const edad = parseInt(document.getElementById('edad').value);
if(edad >= 18){
showResult({document.getElementById('resultado31').value,'Resultado','✅ Puede votar','La persona es mayor de edad');
}else{
showResult('resultado31','Resultado','❌ No puede votar','Le faltan años para votar');
}
}

// 3.2
function calcular32(){
let horas=parseFloat(document.getElementById('horas').value);
let pago=parseFloat(document.getElementById('pago').value);
let total;
if(horas<=40){
 total=horas*pago;
}else{
 total=(40*pago)+((horas-40)*(pago*2));
}
showResult('resultado32','Sueldo',`$${total}`,'Pago semanal calculado');
}

// 3.3
function calcular33(){
let p=parseFloat(document.getElementById('presupuesto').value);
let regalo='';
if(p<=10) regalo='Tarjeta';
else if(p<=100) regalo='Chocolates';
else if(p<=250) regalo='Flores';
else regalo='Anillo';
showResult('resultado33','Regalo recomendado',regalo,'Según el presupuesto');
}

// 3.4
function calcular34(){
let h=parseFloat(document.getElementById('horas').value);
let total=0;
if(h<=2) total=h*5;
else if(h<=5) total=(2*5)+((h-2)*4);
else if(h<=10) total=(2*5)+(3*4)+((h-5)*3);
else total=(2*5)+(3*4)+(5*3)+((h-10)*2);
showResult('resultado34','Costo total',`$${total}`,'Cobro estacionamiento');
}

// 3.5
function calcular35(){
let a=parseInt(document.getElementById('a1').value);
let b=parseInt(document.getElementById('a2').value);
let c=parseInt(document.getElementById('a3').value);
let menor=Math.min(a,b,c);
showResult('resultado35','Menor edad',`${menor} años`,'Edad más pequeña');
}

// 3.6
function calcular36(){
let precio=parseFloat(document.getElementById('precio').value);
let total=precio>2000?precio*0.85:precio*0.95;
showResult('resultado36','Total',`$${total}`,'Precio con descuento');
}

// 3.7
function calcular37(){
let edad=parseInt(document.getElementById('edad').value);
let promedio=parseFloat(document.getElementById('promedio').value);
let beca='Sin beca';
if(edad>18 && promedio>=9) beca='$2000';
else if(promedio>=7.5) beca='$1000';
showResult('resultado37','Beca',beca,'Resultado de beca');
}

// 3.8
function calcular38(){
let anti=parseInt(document.getElementById('anti').value);
let sueldo=parseFloat(document.getElementById('sueldo').value);
let bono=anti>2?sueldo*0.2:sueldo*0.1;
showResult('resultado38','Bono',`$${bono}`,'Bono calculado');
}

// 3.9
function calcular39(){
let tipo=document.getElementById('tipo').value;
let alcohol=document.getElementById('alcohol').checked;
let lentes=document.getElementById('lentes').checked;
let enfermedad=document.getElementById('enfermedad').checked;
let edad=parseInt(document.getElementById('edad').value);
let costo=tipo==='A'?1200:950;
if(alcohol)costo*=1.1;
if(lentes)costo*=1.05;
if(enfermedad)costo*=1.05;
if(edad>40)costo*=1.2;
showResult('resultado39','Costo póliza',`$${costo.toFixed(2)}`,'Seguro calculado');
}

// 3.10
function calcular310(){
let dinero=parseFloat(document.getElementById('dinero').value);
let destino='';
if(dinero>=5000) destino='México';
else if(dinero>=2000) destino='Puerto Vallarta';
else destino='Quedarse en casa';
showResult('resultado310','Destino',destino,'Vacaciones recomendadas');
}

// 3.11
function calcular311(){
let anti=parseInt(document.getElementById('anti').value);
let bono=anti*1000;
showResult('resultado311','Bono',`$${bono}`,'Antigüedad');
}

// 3.12
function calcular312(){
let horas=parseInt(document.getElementById('horas').value);
let pago=parseFloat(document.getElementById('pago').value);
let total=40*pago;
if(horas>40 && horas<=48){
 total+=(horas-40)*(pago*2);
}else if(horas>48){
 total+=(8*(pago*2))+((horas-48)*(pago*3));
}
showResult('resultado312','Sueldo',`$${total}`,'Horas dobles y triples');
}

// 3.13
function calcular313(){
let alumnos=parseInt(document.getElementById('alumnos').value);
let costo;
if(alumnos>=100) costo=20;
else if(alumnos>=50) costo=35;
else if(alumnos>=20) costo=40;
else costo=70;
showResult('resultado313','Costo por alumno',`$${costo}`,'Viaje escolar');
}
