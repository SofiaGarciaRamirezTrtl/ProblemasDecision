// ── Utilidades generales ──────────────────────────────────
function showResult(containerId, html, type = 'success') {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.className = `result-box ${type}`;
  el.innerHTML = html;
  el.style.animation = 'none';
  requestAnimationFrame(() => {
    el.style.animation = 'resultPop 0.5s cubic-bezier(0.34,1.56,0.64,1)';
  });
}

function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name)?.classList.add('active');
  document.querySelector(`[onclick="switchTab('${name}')"]`)?.classList.add('active');
}

// Fade-in on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// Mobile nav
function toggleNav() {
  document.getElementById('navLinks')?.classList.toggle('open');
}

//EJERCICIO 3.1
function ejercicio01() {
  const edad = parseFloat(document.getElementById('edad01').value);

  let html, type;
  if (edad >= 18) {
    html = `<div>
      <div class="result-text">🗳️ ¡Puede votar!</div>
      <div class="result-detail">Con ${edad} años, tienes derecho al voto. ¡Tu voz cuenta! ✨</div>
    </div>`;
    type = 'success';
  } else {
    html = `<div>
      <div class="result-text">🚫 No puede votar</div>
      <div class="result-detail">Con ${edad} años, aún no tienes la edad mínima (18 años). Faltan ${18 - edad} años. 🌸</div>
    </div>`;
    type = 'info';
  }
  showResult('result01', html, type);
}

//EJERCICIO 3.2
function ejercicio02() {
  const horas = parseFloat(document.getElementById('horas02').value);
  const pago = parseFloat(document.getElementById('pago02').value);

  let sueldo, detalle;
  if (horas <= 40) {
    sueldo = horas * pago;
    detalle = `${horas}h × $${pago} = $${sueldo.toFixed(2)}`;
  } else {
    const normal = 40 * pago;
    const extras = (horas - 40) * pago * 2;
    sueldo = normal + extras;
    detalle = `40h normales: $${normal.toFixed(2)} + ${(horas-40).toFixed(1)}h extra (×2): $${extras.toFixed(2)}`;
  }

  showResult('result02', `<div>
    <div class="result-text">💰 Sueldo: $${sueldo.toFixed(2)}</div>
    <div class="result-detail">${detalle}</div>
  </div>`, 'success');
}

//JERCICIO 3.3
function ejercicio03() {
  const presupuesto = parseFloat(document.getElementById('presupuesto03').value);

  let regalo, emoji, rango;
  if (presupuesto <= 10) {
    regalo = 'Tarjeta'; emoji = '💌'; rango = '$0 a $10.00';
  } else if (presupuesto <= 100) {
    regalo = 'Chocolates'; emoji = '🍫'; rango = '$11.00 a $100.00';
  } else if (presupuesto <= 250) {
    regalo = 'Flores'; emoji = '💐'; rango = '$101.00 a $250.00';
  } else {
    regalo = 'Anillo'; emoji = '💍'; rango = 'Más de $251.00';
  }

  showResult('result03', `<div>
    <div class="result-text">${emoji} ¡Regala un(a) ${regalo}!</div>
    <div class="result-detail">Presupuesto: $${presupuesto.toFixed(2)} · Rango: ${rango}</div>
  </div>`, 'success');
}

//EJERCICIO 3.4
function ejercicio04() {
  const horas = parseFloat(document.getElementById('horas04').value);
  let costo = 0;
  let detalle = [];

  if (horas <= 2) {
    costo = horas * 5;
    detalle.push(`${horas}h × $5 = $${(horas*5).toFixed(2)}`);
  } else if (horas <= 5) {
    costo = 2 * 5 + (horas - 2) * 4;
    detalle.push(`2h × $5 = $10.00`);
    detalle.push(`${(horas-2).toFixed(1)}h × $4 = $${((horas-2)*4).toFixed(2)}`);
  } else if (horas <= 10) {
    costo = 2*5 + 3*4 + (horas-5)*3;
    detalle.push(`2h × $5 = $10.00`);
    detalle.push(`3h × $4 = $12.00`);
    detalle.push(`${(horas-5).toFixed(1)}h × $3 = $${((horas-5)*3).toFixed(2)}`);
  } else {
    costo = 2*5 + 3*4 + 5*3 + (horas-10)*2;
    detalle.push(`2h × $5 = $10.00`);
    detalle.push(`3h × $4 = $12.00`);
    detalle.push(`5h × $3 = $15.00`);
    detalle.push(`${(horas-10).toFixed(1)}h × $2 = $${((horas-10)*2).toFixed(2)}`);
  }

  showResult('result04', `<div>
    <div class="result-text">🚗 Total: $${costo.toFixed(2)}</div>
    <div class="result-detail">${detalle.join(' · ')}</div>
  </div>`, 'success');
}

//EJERCICIO 3.5
function ejercicio05() {
  const n1 = document.getElementById('nombre1_05')?.value.trim() || 'Persona 1';
  const n2 = document.getElementById('nombre2_05')?.value.trim() || 'Persona 2';
  const n3 = document.getElementById('nombre3_05')?.value.trim() || 'Persona 3';
  const e1 = parseFloat(document.getElementById('edad1_05').value);
  const e2 = parseFloat(document.getElementById('edad2_05').value);
  const e3 = parseFloat(document.getElementById('edad3_05').value);


  let nombre, edad;
  if (e1 <= e2 && e1 <= e3) { nombre = n1; edad = e1; }
  else if (e2 <= e1 && e2 <= e3) { nombre = n2; edad = e2; }
  else { nombre = n3; edad = e3; }

  showResult('result05', `<div>
    <div class="result-text">👑 ${nombre} es el/la más joven</div>
    <div class="result-detail">Edad: ${edad} años · Entre ${n1}(${e1}), ${n2}(${e2}), ${n3}(${e3})</div>
  </div>`, 'success');
  }

//EJERCCICIO 3.6
function ejercicio06() {
  const precio = parseFloat(document.getElementById('precio06').value);
  let pct, descuento, final;
  if (precio >= 200) {
    pct = 15;
  } else if (precio > 100) {
    pct = 12;
  } else {
    pct = 10;
  }

  descuento = precio * (pct / 100);
  final = precio - descuento;

  showResult('result06', `<div>
    <div class="result-text">🏷️ Descuento: ${pct}% → -$${descuento.toFixed(2)}</div>
    <div class="result-detail">Precio original: $${precio.toFixed(2)} · Precio final: $${final.toFixed(2)} 🛍️</div>
  </div>`, 'success');
}

//EJERCICIO 3.7
function ejercicio07() {
  const edad = parseFloat(document.getElementById('edad07').value);
  const promedio = parseFloat(document.getElementById('promedio07').value);

  let beca, emoji;
  if (edad > 18) {
    if (promedio >= 9)      { beca = '$2,000.00'; emoji = '🥇'; }
    else if (promedio >= 7.5) { beca = '$1,000.00'; emoji = '🥈'; }
    else if (promedio >= 6)  { beca = '$500.00'; emoji = '🥉'; }
    else                     { beca = 'Carta de invitación a estudiar más'; emoji = '✉️'; }
  } else {
    if (promedio >= 9)      { beca = '$3,000.00'; emoji = '🌟'; }
    else if (promedio >= 8) { beca = '$2,000.00'; emoji = '⭐'; }
    else if (promedio >= 6) { beca = '$1,000.00'; emoji = '💫'; }
    else                     { beca = 'Carta de invitación'; emoji = '✉️'; }
  }

  showResult('result07', `<div>
    <div class="result-text">${emoji} Beca: ${beca}</div>
    <div class="result-detail">Edad: ${edad} años · Promedio: ${promedio} · Categoría: ${edad > 18 ? 'Mayor de 18' : '18 años o menos'}</div>
  </div>`, 'success');
}

//EJERCICIO 3.8
function ejercicio08() {
  const anios = parseFloat(document.getElementById('anios08').value);
  const sueldo = parseFloat(document.getElementById('sueldo08').value);

  // Bono por antigüedad
  let bonoAntig = 0, descAntig = '';
  if (anios > 2 && anios < 5) {
    bonoAntig = sueldo * 0.20;
    descAntig = '20% por antigüedad (2 < años < 5)';
  } else if (anios >= 5) {
    bonoAntig = sueldo * 0.30;
    descAntig = '30% por antigüedad (≥5 años)';
  } else {
    descAntig = 'Sin bono por antigüedad (≤2 años)';
  }

  // Bono por sueldo
  let bonoSueldo = 0, descSueldo = '';
  if (sueldo < 1000) {
    bonoSueldo = sueldo * 0.25;
    descSueldo = '25% por sueldo (<$1,000)';
  } else if (sueldo <= 3500) {
    bonoSueldo = sueldo * 0.15;
    descSueldo = '15% por sueldo ($1,000–$3,500)';
  } else {
    bonoSueldo = sueldo * 0.10;
    descSueldo = '10% por sueldo (>$3,500)';
  }

  const bonoFinal = Math.max(bonoAntig, bonoSueldo);
  const cual = bonoAntig >= bonoSueldo ? descAntig : descSueldo;

  showResult('result08', `<div>
    <div class="result-text">🏆 Bono: $${bonoFinal.toFixed(2)}</div>
    <div class="result-detail">Aplicado: ${cual} · Bono antigüedad: $${bonoAntig.toFixed(2)} · Bono sueldo: $${bonoSueldo.toFixed(2)}</div>
  </div>`, 'success');
}

//EJERCICIO 3.9
function ejercicio09() {
  const plan = document.getElementById('plan09')?.value;
  const alcohol = document.getElementById('alcohol09')?.checked;
  const lentes = document.getElementById('lentes09')?.checked;
  const enfermedad = document.getElementById('enfermedad09')?.checked;
  const edad = parseFloat(document.getElementById('edad09').value);

  let base = plan === 'A' ? 1200 : 950;
  let cargos = 0;
  let detalle = [`Base Plan ${plan}: $${base}`];

  if (alcohol) { cargos += base * 0.10; detalle.push('+10% alcohol'); }
  if (lentes)  { cargos += base * 0.05; detalle.push('+5% lentes'); }
  if (enfermedad) { cargos += base * 0.05; detalle.push('+5% enfermedad'); }

  if (edad > 40) {
    cargos += base * 0.20;
    detalle.push('+20% (>40 años)');
  } else {
    cargos += base * 0.10;
    detalle.push('+10% (≤40 años)');
  }

  const total = base + cargos;

  showResult('result09', `<div>
    <div class="result-text">🛡️ Costo total: $${total.toFixed(2)}</div>
    <div class="result-detail">${detalle.join(' · ')}</div>
  </div>`, 'success');
}

//EJERCICIO 3.10
function ejercicio10() {
  const presupuesto = parseFloat(document.getElementById('presupuesto10').value);
  const tarifa = parseFloat(document.getElementById('tarifa10').value);

  // Costo = km * tarifa * 2 (ida y vuelta)
  const destinos = [
    { nombre: 'México',   km: 750,  emoji: '🏛️' },
    { nombre: 'Puerto Vallarta', km: 800, emoji: '🏖️' },
    { nombre: 'Acapulco', km: 1200, emoji: '🌊' },
    { nombre: 'Cancún',   km: 1800, emoji: '🐠' },
  ];

  const posibles = destinos.filter(d => d.km * tarifa * 2 <= presupuesto);

  let html;
  if (posibles.length === 0) {
    html = `<div>
      <div class="result-text">🏠 Quedarse en casa</div>
      <div class="result-detail">El presupuesto de $${presupuesto.toFixed(2)} no alcanza para ningún destino con tarifa de $${tarifa}/km.</div>
    </div>`;
  } else {
    const mejor = posibles[posibles.length - 1];
    const lista = posibles.map(d => `${d.emoji} ${d.nombre} ($${(d.km*tarifa*2).toFixed(2)})`).join(' · ');
    html = `<div>
      <div class="result-text">${mejor.emoji} ¡Puedes ir a ${mejor.nombre}!</div>
      <div class="result-detail">Destinos posibles: ${lista}</div>
    </div>`;
  }

  showResult('result10', html, 'success');
}

//EJERCICIO 3.11
function ejercicio11() {
  const anios = parseFloat(document.getElementById('anios11').value);
  let bono;
  if (anios === 1) bono = 100;
  else if (anios === 2) bono = 200;
  else if (anios === 3) bono = 300;
  else if (anios === 4) bono = 400;
  else if (anios === 5) bono = 500;
  else bono = 1000;

  const desc = anios > 5 ? 'Más de 5 años → bono máximo' : `${anios} año(s) → $${anios}×100`;

  showResult('result11', `<div>
    <div class="result-text">🎯 Bono: $${bono}.00</div>
    <div class="result-detail">${desc} 🌸</div>
  </div>`, 'success');
}

//EJERCICIO 3.12
function ejercicio12() {
  const horas = parseFloat(document.getElementById('horas12').value);
  const pago = parseFloat(document.getElementById('pago12').value);

  if (horas > 50) {
    showResult('result12', `<div>
      <div class="result-text">⛔ Más de 50 horas no permitido</div>
      <div class="result-detail">El máximo de horas permitidas es 50. Por favor corrija el dato.</div>
    </div>`, 'info');
    return;
  }

  if (horas < 0) { showToast('⚠️ Horas inválidas'); return; }

  let sueldo = 0;
  let detalle = [];

  const h_normal = Math.min(horas, 40);
  sueldo += h_normal * pago;
  if (h_normal > 0) detalle.push(`${h_normal}h normales: $${(h_normal*pago).toFixed(2)}`);

  if (horas > 40) {
    const h_doble = Math.min(horas, 45) - 40;
    sueldo += h_doble * pago * 2;
    if (h_doble > 0) detalle.push(`${h_doble}h doble(×2): $${(h_doble*pago*2).toFixed(2)}`);
  }

  if (horas > 45) {
    const h_triple = Math.min(horas, 50) - 45;
    sueldo += h_triple * pago * 3;
    if (h_triple > 0) detalle.push(`${h_triple}h triple(×3): $${(h_triple*pago*3).toFixed(2)}`);
  }

  showResult('result12', `<div>
    <div class="result-text">⏱️ Sueldo: $${sueldo.toFixed(2)}</div>
    <div class="result-detail">${detalle.join(' · ')}</div>
  </div>`, 'success');
}

//EJERCICIO 13
function ejercicio13() {
  const alumnos = parseFloat(document.getElementById('alumnos13').value);

  let costoUnitario;
  if (alumnos > 100)         costoUnitario = 20;
  else if (alumnos >= 50)    costoUnitario = 35;
  else if (alumnos >= 20)    costoUnitario = 40;
  else                       costoUnitario = 70;

  const total = alumnos * costoUnitario;

  showResult('result13', `<div>
    <div class="result-text">🚌 $${costoUnitario} por alumno · Total: $${total}</div>
    <div class="result-detail">${alumnos} alumno(s) × $${costoUnitario} = $${total} 🎒</div>
  </div>`, 'success');
}

//animacion
const styleEl = document.createElement('style');
styleEl.textContent = `
  @keyframes resultPop {
    0% { transform: scale(0.9); opacity:0; }
    100% { transform: scale(1); opacity:1; }
  }
`;
document.head.appendChild(styleEl);
