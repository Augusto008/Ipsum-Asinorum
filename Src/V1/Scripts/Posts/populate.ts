export function addPost() {
	const app = document.getElementById("app");
	
	for (let index = 0; index < 10; index++) {
		let addArticle = document.createElement("article");
		let addFooter = document.createElement("footer");
		let addImg = document.createElement("img");
		let addParagraph = document.createElement("p");
		let addAuthor = document.createElement("span");
		let addDate = document.createElement("span");
		let addTitle = document.createElement("h2");

		let countId = "post" + (index + 1);
		
		addArticle.id = countId

		if (index < 1) {
			addArticle.className = "c-article c-article--featured";
		} else {
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
		
		addFooter?.append(addAuthor, addDate);
		addArticle?.append(addImg, addTitle, addParagraph, addFooter);
		app?.appendChild(addArticle);
	}

}