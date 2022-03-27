let exe = document.getElementById('exe');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `./trendings.json`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles)
        let neware = "";
        articles.forEach(function(element) {
            let news = `
                        <div class="artica">
                            <img src="${element["img"]}"  alt="">
                            <p id="rp">${element["title"]}</p>
                            <a href="${element["url"]}"><button onclick="IP()">Read More</button></a>
                        </div>
                        `;
            neware += news;
        });
        exe.innerHTML = neware;
    }
    else {
        console.error("We Can Not Connect To Disunic Servers 😓.")
        console.warn("Your Browser Does Not Support Javascript Sorry.")
    }
}
xhr.send()
{/* <div class="main">
<a href="${element["url"]}">
    <img src="${element["urlToImage"]}"></img>
    <p>${element["title"]}</p>
</a>
</div> */}