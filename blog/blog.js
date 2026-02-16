
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

/**
 * Converts date string to ISO format for datetime attribute
 * @param {string} dateStr - Date string like "July 5, 2022"
 * @returns {string} ISO date string
 */
function formatDateToISO(dateStr) {
	const date = new Date(dateStr);
	return date.toISOString().split('T')[0];
}

/**
 * Creates HTML for a single book article
 * @param {Object} article - Article data object
 * @returns {string} HTML string for the article
 */
function createArticleHTML(article) {
	return `
		<article class="article-grid">
			<div class="article-meta" role="contentinfo" aria-label="Article metadata">
				<div class="meta-item">
					<span class="meta-label">Published</span>
					<time class="meta-value" datetime="${formatDateToISO(article.date)}">${article.date}</time>
				</div>
				<div class="meta-item">
					<span class="meta-label">Age Range</span>
					<span class="meta-value">${article.ages}</span>
				</div>
				<div class="meta-item">
					<span class="meta-label">Genre</span>
					<span class="meta-value">${article.genre}</span>
				</div>
				<div class="meta-item">
					<span class="meta-label">Rating</span>
					<span class="meta-value">${article.stars}</span>
				</div>
			</div>
			
			<h2 class="book-title">${article.title}</h2>
			
			<div class="book-content">
				<figure class="book-cover">
					<img 
						src="${article.imgSrc}" 
						alt="${article.imgAlt}"
						loading="lazy"
					/>
				</figure>
				
				<div>
					<p class="book-description">
						${article.description}
					</p>
				</div>
			</div>
		</article>
	`;
}

/**
 * Renders all articles to the DOM
 */
function renderArticles() {
	const mainElement = document.getElementById('main-content');
	
	if (!mainElement) {
		console.error('Main content element not found');
		return;
	}
	
	// Clear existing content
	mainElement.innerHTML = '';
	
	// Create and append each article
	articles.forEach(article => {
		const articleHTML = createArticleHTML(article);
		mainElement.insertAdjacentHTML('beforeend', articleHTML);
	});
}

/**
 * Initialize the page when DOM is fully loaded
 */
function init() {
	renderArticles();
	console.log(`Loaded ${articles.length} book articles`);
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	// DOM is already loaded
	init();
}