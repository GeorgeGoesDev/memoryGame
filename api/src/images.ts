type ImagesObject = {
    urls: string[]
}

export const getImages = async (n: number) => {
    const images: ImagesObject = { urls: [] };
    for (let i = 0; i < n; i++) {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        images.urls.push(data.message);
    }
    console.log(images);

    return images;
};


// images.urls = [
//     'https://images.unsplash.com/photo-1677777010475-df7f6a40f45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODc5ODAzOQ&ixlib=rb-4.0.3&q=80&w=1080',
//     'https://images.unsplash.com/photo-1676676955924-a0c6d68db965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODc5ODAzMQ&ixlib=rb-4.0.3&q=80&w=1080',
//     'https://images.unsplash.com/photo-1677517660923-d5e30789b460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODc5ODEyMQ&ixlib=rb-4.0.3&q=80&w=1080',
//     'https://images.unsplash.com/photo-1677741448154-11008be3c221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODc5ODE1MQ&ixlib=rb-4.0.3&q=80&w=1080',
//     'https://images.unsplash.com/photo-1678107658235-9d198b181405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODc5ODExOQ&ixlib=rb-4.0.3&q=80&w=1080'
// ]
