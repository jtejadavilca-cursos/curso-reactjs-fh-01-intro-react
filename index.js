// const getImagePromesa = () => {
//     const promesa = new Promise( (resolve, reject) => {
//         resolve('https://asdsadas.com')
//     });

//     return promesa;
// }

// getImagePromesa().then( console.log );

const getImage = async () => {
    const apiKey = 'di7UKJI7xAmFuP0JwS3AYf6djI7Jztbb';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement( 'img' );
    img.src = url;

    document.body.append(img);

}

getImage();
