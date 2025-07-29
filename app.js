// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Obtener el elemento del input y su valor
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    actualizarListaAmigos();
    
    // Limpiar cualquier resultado anterior
    limpiarResultado();
}

/**
Función para actualizar la visualización de la lista de amigos
 */
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.className = 'friend-item';
        
        // Crear span para el nombre
        const nombreSpan = document.createElement('span');
        nombreSpan.textContent = amigo;
        nombreSpan.className = 'friend-name';
        
        // Agregar botón para eliminar amigo
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '×';
        botonEliminar.className = 'delete-button';
        botonEliminar.onclick = () => eliminarAmigo(index);
        botonEliminar.setAttribute('aria-label', `Eliminar ${amigo}`);
        
        li.appendChild(nombreSpan);
        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

/**
Función para eliminar un amigo de la lista
@param {number} index - Índice del amigo a eliminar
 */
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
    limpiarResultado();
}

/**
Función para sortear un amigo secreto
 */
function sortearAmigo() {
    // Validar que hay amigos en la lista
    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega algunos amigos antes de sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSeleccionado);
}

/**
Función para mostrar el resultado del sorteo
@param {string} amigo - Nombre del amigo seleccionado
 */
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    
    // Limpiar resultados anteriores
    resultado.innerHTML = '';
    
    // Crear elemento para mostrar el resultado
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="winner-announcement">
            <span class="winner-label">🎉 El amigo secreto es:</span>
            <span class="winner-name">${amigo}</span>
        </div>
    `;
    li.className = 'result-item';
    
    resultado.appendChild(li);
    
    // Agregar efecto de animación
    li.style.opacity = '0';
    li.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        li.style.transition = 'all 0.5s ease';
        li.style.opacity = '1';
        li.style.transform = 'translateY(0)';
    }, 100);
}

/**
Función para limpiar el resultado mostrado
 */
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

/**
Función para permitir agregar amigos con Enter
 */
function configurarEventos() {
    const inputAmigo = document.getElementById('amigo');
    
    // Agregar evento para la tecla Enter
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Enfocar el input al cargar la página
    inputAmigo.focus();
}

/**
Inicializar la aplicación cuando se carga la página
 */
document.addEventListener('DOMContentLoaded', function() {
    configurarEventos();
});

// Funciones adicionales para mejorar la experiencia

/**
Función para limpiar toda la lista
 */
function limpiarLista() {
    if (amigos.length === 0) {
        alert('La lista ya está vacía.');
        return;
    }
    
    if (confirm('¿Estás seguro de que quieres eliminar todos los amigos de la lista?')) {
        amigos = [];
        actualizarListaAmigos();
        limpiarResultado();
    }
}

/**
 * Función para obtener estadísticas de la lista
 */
function obtenerEstadisticas() {
    return {
        totalAmigos: amigos.length,
        amigos: [...amigos]
    };
}