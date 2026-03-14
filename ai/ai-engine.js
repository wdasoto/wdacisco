const networkKB = {
    "vlan": "Una VLAN (Virtual LAN) permite segmentar una red física en múltiples redes lógicas para mejorar seguridad y rendimiento. Comando: 'vlan 10'.",
    "ospf": "OSPF es un protocolo de enrutamiento de estado de enlace (Link-State) que utiliza el algoritmo Dijkstra para encontrar la ruta más corta.",
    "stp": "Spanning Tree Protocol evita bucles en redes de Capa 2 bloqueando puertos redundantes.",
    "subnetting": "El subnetting es el proceso de dividir una red principal en subredes más pequeñas mediante el uso de máscaras de subred."
};

function askAI() {
    const input = document.getElementById('ai-input');
    const msg = input.value.toLowerCase();
    const chatBody = document.getElementById('ai-messages');
    
    let answer = "Soy el Profesor WDACISCO. Como instructor CCNA, no reconozco ese término, ¿puedes ser más específico con el comando o concepto?";
    
    for (let key in networkKB) {
        if (msg.includes(key)) {
            answer = networkKB[key];
            break;
        }
    }

    chatBody.innerHTML += `<div class="user-msg"><b>Alumno:</b> ${input.value}</div>`;
    chatBody.innerHTML += `<div class="ai-msg"><b>Profesor IA:</b> ${answer}</div>`;
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
}

function toggleAI() {
    const container = document.getElementById('ai-chat-container');
    container.classList.toggle('expanded');
}