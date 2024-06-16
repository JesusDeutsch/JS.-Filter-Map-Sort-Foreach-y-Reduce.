import { propiedades } from "./dataBase.js";

// 1. Filtrar los objetos del array por una ciudad específica. La ciudad la recibirá por parámetro.


function cityFilter(city) {
    
return propiedades.filter((propiedad) => propiedad.direccion.includes(city))
}
console.log(cityFilter('Madrid'));

// 2. Obtener un nuevo array con los nombres de los objetos.

const objectName = propiedades.map((object) => object.nombre);

console.log(objectName);

// 3. Obtener la suma total de las cantidades de fotos de todos los objetos.

const photosObject = propiedades.reduce ((acc,photos) => {
    return acc + photos.cantidadDeFotos
}, 0);
console.log(photosObject);

// 4. Obtener un nuevo array con los objetos que tienen más de 100 metros cuadrados.

const greaterdred100m2 = propiedades.filter((propiedad) => propiedad.metrosCuadrados > 100);

console.log(greaterdred100m2);


// 5. Ordenar los objetos por fecha de publicación de forma ascendente.

propiedades.sort(function (a,b) {
    if(a.fechaDePublicacion < b.fechaDePublicacion) return -1;
    if(a.fechaDePublicacion > b.fechaDePublicacion) return 1;
    return 0;
});
console.log(propiedades);

// **Nivel Moderado:**

// 6. Filtrar los objetos por un rango de precios de venta. El rango de precios será recibido por parámetro.

function filterRange(array, a, b) {
    
    return array.filter((precio) => (a <= precio.precioDeVenta && precio.precioDeVenta <= b));

}
console.log(filterRange(propiedades, 200000, 250000));

// 7. Obtener un nuevo array con los objetos que tienen una cantidad de fotos par.

let propiedadesFotosPar = propiedades.filter((foto) => foto.cantidadDeFotos%2 === 0)

console.log(propiedadesFotosPar);

// 8. Obtener la suma total y el promedio de los metros cuadrados de todos los objetos.

function promedioM2(array) {
   
    let sumM2 = array.reduce((acc, m2) => {
        return acc + m2.metrosCuadrados
    },0); 
     
    return sumM2 / propiedades.length
}

console.log(promedioM2(propiedades));

// 9. Obtener un nuevo array con los objetos cuya dirección contiene la palabra "calle".

let direciones = propiedades.filter((calle) => calle.direccion.toLowerCase().includes('calle'))
console.log(direciones);

// 10. Ordenar los objetos por precio de venta de forma descendente.

propiedades.sort(function (a,b) {
    if(a.precioDeVenta > b.precioDeVenta) return -1;
    if(a.precioDeVenta < b.precioDeVenta) return 1;
    return 0;
});
console.log(propiedades);

// **Nivel Difícil:**

// 11. Filtrar los objetos por una ciudad que comienza con la letra "M".

const propiedadesInicialM = propiedades.filter((propiedad) => propiedad.nombre.charAt(0).includes('M'));
console.log(propiedadesInicialM);

const propiedadesInicialM = propiedades.filter((propiedad) => propiedad.direccion.includes('M'));
console.log(propiedadesInicialM);

// 12. Obtener un nuevo array con los objetos cuya fecha de publicación es anterior al 15 de mayo de 2024.

const filtrarFecha = propiedades.filter((propiedad) => propiedad.fechaDePublicacion < '2024-05-15') 

console.log(filtrarFecha);

// 13. Obtener la cantidad total de fotos de los objetos cuyo precio de venta es mayor a 300,000.

function fotos300k (array) {

    let precioSuperior = array.filter((precio) => {
        return precio.precioDeVenta > 300000 });

    let sumFotos = precioSuperior.reduce((total,fotos) => {
        return total + fotos.cantidadDeFotos
    },0)
    return sumFotos
}
console.log(fotos300k(propiedades));


// 14. Obtener un nuevo array con los objetos cuya dirección contiene la palabra "avenida".

const propiedadesEnAvenidas = propiedades.filter((propiedad) => propiedad.direccion.toLocaleLowerCase().includes('avenida'))
console.log(propiedadesEnAvenidas);

// 15. Ordenar los objetos por metros cuadrados de forma ascendente.

propiedades.sort(function (a,b) {
    if(a.metrosCuadrados < b.metrosCuadrados) return -1;
    if(a.metrosCuadrados > b.metrosCuadrados) return 1;
    return 0;
});
console.log(propiedades);

// **Nivel Experto:**

// 16. Filtrar los objetos por una ciudad que contiene la letra "a" en su nombre.

    const city = propiedades.filter((propiedad) => {
         propiedad.direccion.split(', ')
         return propiedad.direccion.toLocaleLowerCase().includes('a')
        });
    console.log(city);

// 17. Obtener un nuevo array con los objetos cuya fecha de publicación es posterior al 20 de mayo de 2024.

const filtrarFecha = propiedades.filter((propiedad) => propiedad.fechaDePublicacion > '2024-05-20') 

console.log(filtrarFecha);

// 18. Obtener la suma total de los precios de venta de los objetos cuya cantidad de fotos es menor a 10.

    const SumPrecios = propiedades
    .filter((fotos) => fotos.cantidadDeFotos < 10)            
    .reduce((total,fotos) => {
        return total + fotos.cantidadDeFotos;        
    },0)
    console.log(SumPrecios);

// 19. Obtener un nuevo array con el promedio de los metros cuadrados por ciudad de todos los objetos.




// 20. Ordenar los objetos por nombre de forma descendente.

const nombresOrdenados = propiedades.sort((a, b) => b - a);
console.log(nombresOrdenados);