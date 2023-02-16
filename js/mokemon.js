const seccionAtaqueOculta = document.getElementById("seleccionar-ataque")
const seccionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")


const botonReiniciar = document.getElementById("boton-reiniciar")

const seccionMascotaOculta= document.getElementById("seleccionar-mascota")

const spanmascotajugador = document.getElementById("mascota-jugador")

const spanmascotaenemigo = document.getElementById("mascota-enemigo")

const spanVidaJugador = document.getElementById("vida-jugador")
const spanVidaEnemigo = document.getElementById("vida-enemigo")

const seccionMensaje = document.getElementById("resultado")
const ataque_jugador = document.getElementById("ataque_jugador")
const ataque_enemigo = document.getElementById("ataque_enemigo")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")

const botones = document.getElementById("botones")

let jugadorId = null

let mokepones = []
let ataquejugador 
let ataqueEnemigo =[]
let opcionDeMokepones
let mascotaJugador
let mascotaJugadorObjeto 
let ataquesMokepon
let botonfuego 
let botonagua 
let botontierra 
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let input1
let input2 
let input3 
let input4 
let input5 
let input6 
let ataqueMokeponeEnemigo 
let newBotones = []
let newAtaqueJugador = []
let vidaJugador = 3
let vidaEnemigo = 3

let lienzo = mapa.getContext("2d")
let intervalo 

let mapaBackground = new Image()
mapaBackground.src = "./asset/mokemap.png"


class Mokepon {
    constructor(nombre, foto, vida, x= 10,y = 10){
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    this.x = x
    this.y = y
    this.ancho = 50
    this.alto = 50
    this.mapaFoto = new Image()
    this.mapaFoto.src = foto
    this.velocidadx = 0
    this.velocidady = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
               
            )
    }
    
    
}

let hipoge = new Mokepon('Hipoge', './asset/mokepons_mokepon_hipodoge_attack.webp', 5)
let capipepo = new Mokepon('Capipepo', './asset/capipepo_attack.webp', 5,)
let ratigueya = new Mokepon('Ratigueya', './asset/ratigueya_attack.png', 5,)
let langostelvi = new Mokepon('Langostelvi', './asset/cartoon_lobster_preview', 5,)
let tucapalma = new Mokepon('Tucapalma', './asset/a716b052223fa491400abb8ce092e96f-dibujos-animados-de-murcielago-de-halloween.png', 5, )
let pydos= new Mokepon('Pydos', './asset/gorilla-hip-hop-vector-illustration_6193109.png!bw700', 5)


let hipogeEnemigo = new Mokepon('Hipoge', './asset/mokepons_mokepon_hipodoge_attack.webp', 5 , 80, 200)
let capipepoEnemigo = new Mokepon('Capipepo', './asset/capipepo_attack.webp', 5,300,210)
let ratigueyaEnemigo = new Mokepon('Ratigueya', './asset/ratigueya_attack.png', 5,150, 40)
let langostelviEnemigo = new Mokepon('Langostelvi', './asset/cartoon_lobster_preview', 5,200,70)
let tucapalmaEnemigo = new Mokepon('Tucapalma', './asset/a716b052223fa491400abb8ce092e96f-dibujos-animados-de-murcielago-de-halloween.png', 5, 60,5 )
let pydosEnemigo= new Mokepon('Pydos', './asset/gorilla-hip-hop-vector-illustration_6193109.png!bw700', 5,300,150)



hipoge.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🏜', id: 'boton-tierra'},
)

hipogeEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🏜', id: 'boton-tierra'},
)
capipepo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🏜', id: 'boton-tierra'},
)
capipepoEnemigo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🏜', id: 'boton-tierra'},
)
ratigueya.ataques.push(
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)
ratigueyaEnemigo.ataques.push(
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)
langostelvi.ataques.push(
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)
langostelviEnemigo.ataques.push(
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)
tucapalma.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)
tucapalmaEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)
pydos.ataques.push(
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)
pydosEnemigo.ataques.push(
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🏜', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)

mokepones.push(hipoge, capipepo, ratigueya, langostelvi, tucapalma, pydos)

function iniciarjuego(){
   seccionAtaqueOculta.style.display = "none"
   sectionVerMapa.style.display = "none"
   
    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.nombre} />
        <label class="tarjeta-de-mokemon" for=${Mokepon.nombre}>
            <p>${Mokepon.nombre}</p>
            <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
        </label>    
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         input1 = document.getElementById("Hipoge")
         input2 = document.getElementById("Capipepo")
         input3 = document.getElementById("Ratigueya")
         input4 = document.getElementById("Langostelvi")
         input5 = document.getElementById("Tucapalma")
         input6 = document.getElementById("Pydos")

    })

   
   seccionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()

}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function(res) {
            if(res.ok){
                res.text()
                .then(function(respuesta){
                    console.log(respuesta)
                    jugadorId = respuesta
                })
            }
        })
}

function seleccionarMascotaJugador(){
    
    seccionMascotaOculta.style.display = "none"

    if (input1.checked) {
       spanmascotajugador.innerHTML = input1.id
       mascotaJugador =  input1.id
    }
    else if (input2.checked) {
        spanmascotajugador.innerHTML = input2.id
        mascotaJugador =  input2.id
    }
    else if (input3.checked) {
        spanmascotajugador.innerHTML = input3.id
        mascotaJugador =  input3.id
    }
    else if (input4.checked) {
        spanmascotajugador.innerHTML = input4.id
        mascotaJugador =  input4.id
    }
    else if (input5.checked) {
        spanmascotajugador.innerHTML = input5.id
        mascotaJugador =  input5.id
    }
    else if (input6.checked) {
        spanmascotajugador.innerHTML = input6.id
        mascotaJugador =  input6.id
    }
    else{
        alert("selecciona un jugador")
    }

    seleccionarMokemon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
    
    
}

function seleccionarMokemon(mascotaJugador){
    fetch(`http://localhost:8080/mokemon/${jugadorId}`,{
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ 
            mokepon: mascotaJugador
        })
    } )
        
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques= mokepones[i].ataques
        }
       
    }
    mostrarAtaques(ataques)

}

function mostrarAtaques(ataques){
       
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>

        `

        botones.innerHTML += ataquesMokepon
       

    })
    botonfuego = document.getElementById("boton-fuego")
    botonagua = document.getElementById("boton-agua")
    botontierra = document.getElementById("boton-tierra")
    newBotones = document.querySelectorAll(".BAtaque")
    


    
}

function secuenciaAtaque(){
    newBotones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
          if(e.target.textContent === '🔥' ){
            newAtaqueJugador.push('FUEGO')
            console.log(newAtaqueJugador)
            boton.style.background = '#112f58'
            boton.disabled = true

          }
          else if (e.target.textContent === '💧' ){
            newAtaqueJugador.push('AGUA')
            console.log(newAtaqueJugador)
            boton.style.background = '#112f58'
            boton.disabled = true
          }
          else {
            newAtaqueJugador.push('TIERRA')
            console.log(newAtaqueJugador)
            boton.style.background = '#112f58'
            boton.disabled = true
          }
          ataqueAleatorioEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo(enemigo){
    spanmascotaenemigo.innerHTML = enemigo.nombre
    ataqueMokeponeEnemigo = enemigo.ataques
    secuenciaAtaque()

}



function ataqueAleatorioEnemigo(){
    let ataquealeatorio = aleatorio(0, ataqueMokeponeEnemigo.length -1)
   
    if(ataquealeatorio == 0 || ataquealeatorio == 1){
        
        ataqueEnemigo.push("FUEGO")
    }
    else if (ataquealeatorio == 3 || ataquealeatorio == 4){
        ataqueEnemigo.push("AGUA")
    }
    else {
        ataqueEnemigo.push("TIERRA")
        
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
   
}

function iniciarPelea (){
    if(newAtaqueJugador.length === 5){
        combate()

    }
}

function indexAmbosOponentes (jugador, enemigo){
    indexAtaqueJugador = newAtaqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let index = 0; index < newAtaqueJugador.length; index++) {
        if(newAtaqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes (index, index)
            crearMensaje("EMPATE")
        } else if(newAtaqueJugador[index] == "FUEGO" && ataqueEnemigo[index] == "TIERRA"){
            indexAmbosOponentes (index, index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidaJugador.innerHTML = victoriasJugador
        } else if (newAtaqueJugador[index] == "AGUA" && ataqueEnemigo[index] == "FUEGO"){
            indexAmbosOponentes (index, index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidaJugador.innerHTML = victoriasJugador
        }else if(newAtaqueJugador[index] == "TIERRA" && ataqueEnemigo[index] == "AGUA"){
            indexAmbosOponentes (index, index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidaJugador.innerHTML = victoriasJugador
        }else{
            indexAmbosOponentes (index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo ++
            spanVidaEnemigo.innerHTML = victoriasEnemigo

        }
        revisarVidas()
    }
    

    
    }

    function revisarVidas(){
       
        if(victoriasJugador == victoriasEnemigo){
            crearMensajeFinal("PARTIDA EMPATADA, LISTO PARA UNA REVANCHA ?")
        } else if (victoriasJugador > victoriasEnemigo){
            crearMensajeFinal("GANASTE LA BATALLA!")
        }else if(victoriasJugador< victoriasEnemigo){
            crearMensajeFinal("PERDISTE LA BATALLA!")
        }
    }

function crearMensaje(resultado){
 
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    seccionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
 
    ataque_jugador.appendChild(nuevoAtaqueJugador)
    ataque_enemigo.appendChild(nuevoAtaqueEnemigo)
}
function crearMensajeFinal(resultadoFinal){
     
    seccionMensaje.innerHTML = resultadoFinal 
     
    seccionReiniciar.style.display = "block"


}

function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min)
}
function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadx
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidady
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height

    )
    mascotaJugadorObjeto.pintarMokepon()
    enviarPosicion(mascotaJugadorObjeto.x,mascotaJugadorObjeto.y)

    hipogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()

    if(mascotaJugadorObjeto.velocidadx !== 0 || mascotaJugadorObjeto.velocidady !==0){
        revisarColision(hipogeEnemigo)
        revisarColision(capipepoEnemigo)
       // revisarColision(ratigueyaEnemigo)
        //revisarColision(pydosEnemigo)
        //revisarColision(langostelviEnemigo)
        //revisarColision(tucapalmaEnemigo)

    }
        
    
}
function enviarPosicion(x,y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })

    })
}


function moverDerecha(){
    mascotaJugadorObjeto.velocidadx = 5
    
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadx = -5
    
}
function moverArriba(){
    mascotaJugadorObjeto.velocidady = -5
    
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidady = 5
    
}

function detenerMovimiento(){
    
    mascotaJugadorObjeto.velocidadx = 0
   mascotaJugadorObjeto.velocidady = 0

}
function sePresionoUnaTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowRight":
            moverDerecha()
            break
        case "ArrowLeft":
            moverIzquierda()
        default:
            break
    }

}

 function iniciarMapa(){
    mapa.width = 520
    mapa.height = 440
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas,50)

    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
       
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    seccionAtaqueOculta.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
    
}

window.addEventListener("load", iniciarjuego)
