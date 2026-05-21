// Navegación general

function toggleNav() {
  document.getElementById('navLinks')?.classList.toggle('open');
}

function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name)?.classList.add('active');
  document.querySelector(`[onclick="switchTab('${name}')"]`)?.classList.add('active');
}

