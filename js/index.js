console.log("News website");
// b586564b47cd4760a7f2ff80875fd523t
const apiKey = "b586564b47cd4760a7f2ff80875fd523t";
let newsAccordion = document.getElementById("newsAccordion");



const xhr = new XMLHttpRequest();

xhr.open("GET", "https://newsapi.org/v2/everything?q=tesla&from=2021-07-10&sortBy=publishedAt&apiKey=b586564b47cd4760a7f2ff80875fd523", true);
xhr.getAllResponseHeaders("content-type", "application/json");


xhr.onload = function () {
    if (this.status === 200) {
        newsAccordion.innerHTML = ""
        let json = JSON.parse(this.responseText);
        let article = json.articles;
        console.log(article);
        let newsHTML = "";
        article.forEach(function(article,index){

            let news = `
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                        aria-expanded="false" aria-controls="collapse${index}">
                        <span class="badge bg-info text-dark">Breaking News ${index+1}</span>${article.title} 
                    </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        ${article.content} <a target=_blank href=${article.url}">Read more here</a>
                    </div>
                    </div>
                    </div>
                    `;
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    }

    else {
        console.log("some error occured");
        newsAccordion.innerHTML = " There is some internet issue at your side."
    }
}


xhr.send();