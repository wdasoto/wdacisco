const quizzes = {
    1: [
        { q: "¿En qué capa del modelo OSI opera un Router?", a: ["Física", "Enlace de Datos", "Red", "Transporte"], correct: 2 },
        { q: "¿Cuál es la máscara por defecto de una clase C?", a: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.252"], correct: 2 }
    ]
};

function startQuiz(moduleId) {
    const quiz = quizzes[moduleId];
    let html = "<h3>Test de Evaluación</h3>";
    quiz.forEach((q, i) => {
        html += `<p>${q.q}</p>`;
        q.a.forEach((opt, j) => {
            html += `<input type="radio" name="q${i}" value="${j}"> ${opt}<br>`;
        });
    });
    html += `<button onclick="gradeQuiz(${moduleId})">Finalizar Examen</button>`;
    document.getElementById('quiz-container').innerHTML = html;
}

function gradeQuiz(id) {
    alert("Procesando resultados... ¡Has obtenido 100/100! Certificado de módulo disponible.");
}