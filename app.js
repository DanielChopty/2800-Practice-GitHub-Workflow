const contentText = document.querySelector('.content');

document.addEventListener('DOMContent', function() {
    contentText.innerHTML = "This is the content";
}, false);