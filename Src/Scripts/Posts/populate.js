function addPost() {
    var main = document.getElementById("main");
    for (var index = 0; index < 10; index++) {
        var addArticle = document.createElement("article");
        var addFooter = document.createElement("footer");
        var addImg = document.createElement("img");
        var addParagraph = document.createElement("p");
        var addAuthor = document.createElement("span");
        var addDate = document.createElement("span");
        var addTitle = document.createElement("h2");
        var countId = "post" + (index + 1);
        addArticle.id = countId;
        if (index < 1) {
            addArticle.className = "c-article c-article--featured";
        }
        else {
            addArticle.className = "c-article c-article--standard";
        }
        addImg.id = countId + "Img";
        addImg.alt = "Article Cover";
        addImg.className = "c-article__cover";
        addImg.src = "./../../../Public/Images/asno.png";
        addTitle.id = countId + "Title";
        addTitle.className = "c-article__title u-title-lg";
        addTitle.textContent = "Everything Starts Somewhere!";
        addParagraph.id = countId + "Text";
        addParagraph.className = "c-article__body u-text-muted";
        addParagraph.textContent = "This is my first record of my journey. Here, I share my steps to freedom, purpose and creation.";
        addFooter.id = countId + "Footer";
        addFooter.className = "c-article__footer";
        addAuthor.id = countId + "Author";
        addAuthor.className = "c-article__meta u-meta-author";
        addAuthor.textContent = "By Áquila Augusto Anhaia Trindade";
        addDate.id = countId + "Date";
        addDate.className = "c-article__meta u-meta-date";
        addDate.textContent = "May 25, 2025";
        addFooter === null || addFooter === void 0 ? void 0 : addFooter.append(addAuthor, addDate);
        addArticle === null || addArticle === void 0 ? void 0 : addArticle.append(addImg, addTitle, addParagraph, addFooter);
        main === null || main === void 0 ? void 0 : main.appendChild(addArticle);
    }
}
window.addEventListener("DOMContentLoaded", addPost);
/*
function addPost() {
        const main = document.getElementById("main");
        if (!main) {
                console.error("Elemento 'main' não encontrado.");
                return;
        }

        const addArticle = document.createElement("article");
        const addFooter = document.createElement("footer");
        const addImg = document.createElement("img");
        const addParagraph = document.createElement("p");
        const addAuthor = document.createElement("span");
        const addDate = document.createElement("span");
        const addTitle = document.createElement("h2");

        // Configuração de atributos e conteúdo
        addArticle.id = "post1";
        addArticle.className = "c-article c-article--featured";

        addImg.alt = "Capa do Artigo";
        addImg.className = "c-article__cover";
        addImg.src = "./../../../Public/Images/asno.png";

        addTitle.className = "c-article__title u-title-lg";
        addTitle.textContent = "Everything Starts Somewhere!";

        addParagraph.className = "c-article__body u-text-muted";
        addParagraph.textContent = "This is my first record of my journey. Here, I share my steps to freedom, purpose and creation.";

        addFooter.id = "articleFooter1";
        addFooter.className = "c-article__footer";

        addAuthor.className = "c-article__meta u-meta-author";
        addAuthor.textContent = "By Áquila Augusto Anhaia Trindade";

        addDate.className = "c-article__meta u-meta-date";
        addDate.textContent = "May 25, 2025";

        // Montagem da estrutura do artigo
        addFooter.append(addAuthor, addDate);
        addArticle.append(addImg, addTitle, addParagraph, addFooter);
        main.appendChild(addArticle);
}

window.addEventListener("DOMContentLoaded", addPost);

*/ 
