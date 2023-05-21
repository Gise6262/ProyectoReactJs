const productos = [
    {nombre: "Scum", precio: 2900, id: "1", idCat:"1" , img: "../../img/scum.jpg", detalle: "Scum es un videojuego de supervivencia multijugador en línea desarrollado por Gamepires, producido por Croteam y publicado por Devolver Digital.​ El juego se describe como un juego de supervivencia y contará con un mundo abierto.​​​ Fue lanzado en Steam en formato de acceso anticipado el 29 de agosto de 2018."} , 
    {nombre: "Hell Let Loose", precio: 5000, id: "2", idCat:"4", img: "../../img/hellletloose.jpeg", detalle:"Hell Let Loose es un videojuego multijugador en primera persona​ desarrollado por el estudio australiano ​ Black Matter y publicado por Team17 para Microsoft Windows.​El juego fue anunciado a través de una exitosa campaña de Kickstarter en 2017."}, 
    {nombre: "War Selection", precio: 500, id: "3", idCat:"2", img: "../../img/war.jpg" , detalle:"War Selection es un juego de estrategia pseudohistorico en el que debes construir una base, obtener recursos y participar en enfrentamientos militares."}, 
    {nombre: "League Of Legends", precio: 100, id: "4", idCat:"3", img: "../../img/LoL.jpg", detalle:"League of Legends, es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games. Inspirándose en Defense of the Ancients, un mapa personalizado para Warcraft III, los fundadores de Riot buscaron desarrollar un juego independiente del mismo género."},
    {nombre: "Euro Truck", precio: 600, id: "5", idCat:"4", img: "../../img/euroTruck.jpg", detalle:"Truck Simulator es una serie de juegos de simulación de vehículos creada por SCS Software. El primer título de la serie, Euro Truck Simulator, se lanzó el 29 de agosto de 2008 para Microsoft Windows y OS X y se estableció el primer juego de simulación de camión europeo. "},
    {nombre: "Hands Simulator", precio: 300, id: "6", idCat:"4", img: "../../img/hands.jpg", detalle:"Hand Simulator es un simulador de manos. Aprender a usar esas manos en solitario no es muy divertido, ya que solo se puede ir al campo de tiro, armar un árbol de navidad o jugar con figdet spinners. En multijugador la historia es otra, cambiando la tristeza de girar juguetes fuera de moda por la adrenalina de cargar un revolver con la precisión de un cirujano, mientras 5 personas intentan lo mismo para matarte."},
    {nombre: "The Sims 4", precio: 400, id: "7", idCat:"4", img: "../../img/sims.jpg", detalle:"Los Sims es una serie de videojuegos de simulación social, diseñados por Will Wright y desarrollados inicialmente por Maxis y posteriormente por diferentes sellos de Electronic Arts. Siempre son distribuidos por Electronic Arts. Es una de las series de videojuegos más exitosas de todos los tiempos."},
    {nombre: "Sunset Rider", precio: 900, id: "8", idCat:"5", img: "../../img/sunset.jpg", detalle:"Sunset Riders es un videojuego de arcade creado por Konami en 1991. Está ambientado en el salvaje oeste estadounidense. El juego fue más tarde convertido a las consolas Mega Drive en 1992, y al SNES en 1993. La versión arcade fue dirigida por H-Index."},
    {nombre: "Mortal Kombat", precio: 3500, id: "9", idCat:"5", img: "../../img/mk.jpg", detalle:"Mortal Kombat es una franquicia de videojuegos de lucha creada por Ed Boon y John Tobias en 1992. Las cuatro primeras entregas fueron distribuidas por Midway Games y lanzadas principalmente en máquinas arcade; posteriormente estuvieron disponibles en consolas domésticas."},
    {nombre: "Counter Strike G.O", precio: 2000, id: "10", idCat:"4", img: "../../img/csgo.jpg", detalle:"Counter-Strike: Global Offensive es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment. Es el cuarto juego de la saga Counter-Strike. Fue lanzado al mercado en agosto de 2012 para las plataformas de Microsoft Windows, macOS y Xbox 360 y PlayStation 3."},
    {nombre: "Contra", precio: 300, id: "11", idCat:"5", img: "../../img/contra.jpg", detalle:"Contra es un videojuego de matamarcianos desarrollado y publicado por Konami, lanzado originalmente como un juego de arcade el 20 de febrero de 1987.​ En 1988 se lanzó una versión doméstica para Nintendo Entertainment System, junto con puertos para varios formatos de computadora, incluido el MSX2."}, 
    {nombre: "Squad", precio: 6500, id: "12", idCat:"4", img: "../../img/squad.jpg", detalle:"Squad es un videojuego de disparos en primera persona táctico militar basado en el realismo desarrollado y publicado por el desarrollador independiente canadiense Offworld Industries exclusivamente a través de las plataformas de distribución Steam y Aquad Gamer."},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 2000 )
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const producto = productos.find(prod => prod.id === id)
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);

        },2000 )
    })
}
