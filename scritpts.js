// ========================================
// ELEMENTOS
// ========================================

const carta = document.getElementById("carta");
const abrirCarta = document.getElementById("abrirCarta");

const cancion = document.getElementById("cancion");
const botonMusica = document.getElementById("musica");

const botonTeQuiero = document.getElementById("teQuiero");
const mensaje = document.getElementById("mensaje");


// ========================================
// ESTADO DE LA MÚSICA
// ========================================

let reproduciendo = false;


// ========================================
// ABRIR / CERRAR CARTA
// ========================================

abrirCarta.addEventListener("click", async () => {

    carta.classList.toggle("abierta");

    const abierta =
        carta.classList.contains("abierta");


    if (abierta) {

        abrirCarta.textContent =
            "💌 Cerrar carta";

        // Intentar iniciar la música
        try {

            await cancion.play();

            reproduciendo = true;

            botonMusica.textContent =
                "🔇 Pausar música";

        } catch (error) {

            console.log(
                "No se pudo iniciar el audio:",
                error
            );
        }

        // Explosión de pétalos
        crearExplosionPetalos();

    } else {

        abrirCarta.textContent =
            "💌 Abrir carta";
    }
});


// ========================================
// BOTÓN DE MÚSICA
// ========================================

botonMusica.addEventListener("click", async () => {

    if (!reproduciendo) {

        try {

            await cancion.play();

            reproduciendo = true;

            botonMusica.textContent =
                "🔇 Pausar música";

        } catch (error) {

            console.log(
                "No se pudo reproducir la música:",
                error
            );
        }

    } else {

        cancion.pause();

        reproduciendo = false;

        botonMusica.textContent =
            "🎵 Música";
    }
});


// ========================================
// PETALOS
// ========================================

function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.textContent =
        Math.random() > .35
            ? "🌼"
            : "🌻";

    petalo.style.position =
        "fixed";

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.top =
        "-50px";

    petalo.style.fontSize =
        (14 + Math.random() * 22) + "px";

    petalo.style.zIndex =
        "20";

    petalo.style.pointerEvents =
        "none";

    document.body.appendChild(
        petalo
    );


    const duracion =
        4000 + Math.random() * 5000;


    const desplazamiento =
        Math.random() * 300 - 150;


    const rotacion =
        360 + Math.random() * 720;


    petalo.animate(

        [
            {
                transform:
                    "translateY(0) rotate(0deg)",
                opacity: 1
            },

            {
                transform:
                    `translate(${desplazamiento}px, 110vh)
                     rotate(${rotacion}deg)`,
                opacity: .2
            }
        ],

        {
            duration: duracion,
            easing: "linear"
        }
    );


    setTimeout(() => {

        petalo.remove();

    }, duracion);
}


// Lluvia permanente

setInterval(
    crearPetalo,
    600
);


// ========================================
// EXPLOSIÓN DE PÉTALOS
// ========================================

function crearExplosionPetalos() {

    for (let i = 0; i < 25; i++) {

        const petalo =
            document.createElement("div");

        petalo.textContent =
            Math.random() > .5
                ? "🌼"
                : "🌻";

        petalo.style.position =
            "fixed";

        petalo.style.left =
            "50%";

        petalo.style.top =
            "50%";

        petalo.style.fontSize =
            (15 + Math.random() * 25) + "px";

        petalo.style.zIndex =
            "100";

        petalo.style.pointerEvents =
            "none";

        document.body.appendChild(
            petalo
        );


        const x =
            Math.random() * 500 - 250;

        const y =
            Math.random() * 500 - 250;


        const duracion =
            1200 + Math.random() * 1000;


        petalo.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.3)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px)
                         scale(1.2)
                         rotate(360deg)`,
                    opacity: 0
                }
            ],

            {
                duration: duracion,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            petalo.remove();

        }, duracion);
    }
}


// ========================================
// BOTÓN "TE QUIERO"
// ========================================

botonTeQuiero.addEventListener(
    "click",
    () => {

        mensaje.classList.add(
            "mostrar"
        );

        crearCorazones();


        setTimeout(() => {

            mensaje.classList.remove(
                "mostrar"
            );

        }, 3500);
    }
);


// ========================================
// CORAZONES
// ========================================

function crearCorazones() {

    for (let i = 0; i < 30; i++) {

        const corazon =
            document.createElement("div");

        corazon.textContent =
            Math.random() > .5
                ? "💛"
                : "❤️";

        corazon.style.position =
            "fixed";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.bottom =
            "80px";

        corazon.style.fontSize =
            (15 + Math.random() * 25) + "px";

        corazon.style.zIndex =
            "100";

        corazon.style.pointerEvents =
            "none";

        document.body.appendChild(
            corazon
        );


        const altura =
            300 + Math.random() * 500;


        const duracion =
            2500 + Math.random() * 2000;


        const movimientoX =
            Math.random() * 200 - 100;


        corazon.animate(

            [
                {
                    transform:
                        "translateY(0) scale(.5)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${movimientoX}px, -${altura}px)
                         scale(1.3)`,
                    opacity: 0
                }
            ],

            {
                duration: duracion,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            corazon.remove();

        }, duracion);
    }
}