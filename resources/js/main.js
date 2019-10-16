async function getQuote(){
    let data = await fetch("https://api.kanye.rest/?format=json");
    let json = data.json();
    let quote = json.quote;
    return json;
}


async function getImageList(){
    let data = await fetch("https://api.tenor.com/v1/search?key=7HBRA4N2MEHV&q=kanye+west&limit=50&media_filter=minimal");
    let json = data.json();
    return json;
}

async function loadNewImageAndQuote(){
    let img = document.querySelector('img');
    let quote = document.querySelector('.quote');
    let imageArray = await getImageList();
    imageArray = imageArray.results;
    let randomIndex = Math.floor(Math.random()*50);
    img.src = imageArray[randomIndex].media[0].gif.url;
    let quoteData = await getQuote();
    quote.innerText = quoteData.quote.toUpperCase();
}

(async () => {
    await loadNewImageAndQuote()
    let anotherOne = document.querySelector('.another');
    anotherOne.addEventListener('click', loadNewImageAndQuote())
})()

