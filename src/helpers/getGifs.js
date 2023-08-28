export const getGifs = async (category) => {
    const apiKey = "N2eKuoum9bS5pRxWYVpXQntMs6K8N45v";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    return gifs;
}
