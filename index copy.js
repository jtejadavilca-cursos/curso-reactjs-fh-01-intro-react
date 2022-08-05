const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo...'); } ]
}

const [nombre, setNombre] = useState('Goku');

console.log('nombre : ', nombre);
setNombre();