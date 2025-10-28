const descriptionsCards = document.querySelectorAll('[data-js-article-description]');
const acceptableCountWords = 17;

function truncateText() {
  descriptionsCards.forEach(description => {
    let wordsDescriptionArr = description.textContent.trim().split(/\s+/).filter(word => word.length > 0);

    if (wordsDescriptionArr.length > acceptableCountWords) {
      wordsDescriptionArr.splice(acceptableCountWords);
      description.textContent = wordsDescriptionArr.join(' ') + '...';
    }
  });
}

export default truncateText;