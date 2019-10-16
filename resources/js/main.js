async function getQuote(){
    let data = await fetch("https://api.kanye.rest/?format=json");
    let json = data.json();
    console.log(json);
    let quote = json.quote;
    console.log(quote);
    return quote;
}


async function getImageList(){
    let data = await fetch("https://api.giphy.com/v1/gifs/search?api_key=c8C7ylMrjBK4gj5cjuuWqnCYbcqiDtLJ&q=kanye&limit=25&offset=0&rating=G&lang=en");
    let json = data.json();
    return json;
}

async function loadNewImageAndQuote(){
    let iframe = document.querySelector('iframe');
    let quote = document.querySelector('.quote');
    let imageArray = await getImageList();
    imageArray = imageArray.data;
    randomIndex = Math.floor(Math.random()*25);
    iframe.src = imageArray[randomIndex].embed_url;
    quote.innerText = await getQuote();
}

(async () => { 
    await loadNewImageAndQuote()
})()