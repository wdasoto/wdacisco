const modules = [
    { id: 1, title: "Redes Básicas", file: "modulo1-redes-basicas.html" },
    { id: 2, title: "Switching & VLANs", file: "modulo2-switching.html" },
    { id: 3, title: "Spanning Tree (STP)", file: "modulo3-stp.html" },
    { id: 4, title: "Subnetting IP", file: "modulo4-subnetting.html" }
    // ... completar hasta modulo 12
];

document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('module-list');
    modules.forEach(m => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-book"></i> Módulo ${m.id}: ${m.title}`;
        li.onclick = () => loadModule(m);
        list.appendChild(li);
    });
    
    // Carga inicial
    loadDashboard();
});

function loadDashboard() {
    document.getElementById('main-content').innerHTML = `
        <h1>Bienvenido a WDACISCO</h1>
        <div class="dashboard-grid">
            <div class="card" onclick="loadModule(modules[0])">CCNA Routing & Switching</div>
            <div class="card" onclick="openCLI()">Simulador CLI</div>
        </div>
    `;
}

function loadModule(module) {
    // En producción: fetch(`./modules/${module.file}`)
    // Aquí simulamos el contenido de un módulo clave:
    document.getElementById('main-content').innerHTML = `
        <h2>Módulo: ${module.title}</h2>
        <div class="theory-content">
            <p>Configuración básica de dispositivos Cisco.</p>
            <pre class="code-block">
                Router> enable
                Router# configure terminal
                Router(config)# interface g0/0
            </pre>
        </div>
        <div class="lab-section">
            <h3>Laboratorio Práctico</h3>
            <p>Configura la IP 192.168.1.1 en la interfaz Gigabit0/0.</p>
            <button onclick="openCLI()">Abrir CLI Simulator</button>
        </div>
        <div id="quiz-container">
            <button onclick="startQuiz(${module.id})">Iniciar Test de Módulo</button>
        </div>
    `;
}

function openCLI() {
    const cliHTML = `
        <div class="cli-container">
            <div class="cli-output" id="cli-out">Cisco IOS Software, ISR4431...<br>Press RETURN to get started!</div>
            <div class="cli-input-line">
                <span>Router></span>
                <input type="text" id="cli-in" onkeydown="handleCLI(event)">
            </div>
        </div>
    `;
    document.getElementById('main-content').innerHTML += cliHTML;
}

let cliMode = "user";
function handleCLI(e) {
    if(e.key === 'Enter') {
        const cmd = e.target.value.toLowerCase();
        const out = document.getElementById('cli-out');
        let response = "";
        
        if(cmd === "enable") { cliMode = "priv"; response = "Router#"; }
        else if(cmd === "conf t" || cmd === "configure terminal") { response = "Enter configuration commands, one per line. End with CNTL/Z."; }
        else if(cmd.includes("ip address")) { response = "Configuring interface..."; }
        else { response = "Invalid input detected."; }
        
        out.innerHTML += `<br>Router> ${cmd}<br>${response}`;
        e.target.value = "";
    }
}