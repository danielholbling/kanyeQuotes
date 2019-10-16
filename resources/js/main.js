async function getQuote(){
    let data = await fetch("https://api.kanye.rest/?format=json");
    let json = data.json();
    console.log(json);
    let quote = json.quote;
    console.log(quote);
    return quote;
}


async function getImageList(){
    let data = await fetch("https://api.tenor.com/v1/search?key=7HBRA4N2MEHV&q=kanye+west&limit=50");
    // Tenor API key = 7HBRA4N2MEHV
    let json = data.json();
    return json;
}

async function loadNewImageAndQuote(){
    let img = document.querySelector('img');
    let quote = document.querySelector('.quote');
    let imageArray = await getImageList();
    imageArray = imageArray.results;
    randomIndex = Math.floor(Math.random()*50);
    img.src = imageArray[randomIndex].media[0].gif.url;
    quote.innerText = await getQuote();
}
let gurgel;
(async () => { 
    await loadNewImageAndQuote()
})()