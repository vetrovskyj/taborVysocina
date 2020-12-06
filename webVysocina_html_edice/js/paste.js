for (let i = 0; i < 4; i++) {
    const content = document.createElement('div');

    const contentHeadingArea = document.createElement('a');
    contentHeadingArea.setAttribute('href', './Vylety.html');
    contentHeadingArea.classList.add('content-item');

    $(contentHeadingArea).load('./Vylety.html .vylet h1:first-child');
    console.log(contentHeadingArea);
    content.appendChild(contentHeadingArea);

    const contentTextArea = document.createElement('p');
    contentTextArea.classList.add('content-item-text');
    $(contentTextArea).load('./Vylety.html .vylet p');
    console.log(contentTextArea);
    content.appendChild(contentTextArea);

    const newsContent = document.querySelector('.news-content');
    newsContent.appendChild(content);
}