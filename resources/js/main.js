async function getQuote(){
    let data = await fetch("https://api.kanye.rest");
    let json = data.json();
    return json;
}


async function getImageList(){
    let data = await fetch("https://api.giphy.com/v1/gifs/search?api_key=c8C7ylMrjBK4gj5cjuuWqnCYbcqiDtLJ&q=kanye&limit=25&offset=0&rating=G&lang=en");
    let json = data.json();
    return json;
}


(async () => { 
    let imageArray = await getImageList();
    imageArray = imageArray.data;
    console.log(await getQuote())
    console.log(imageArray[0].embed_url)
})()