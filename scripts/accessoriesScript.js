document.addEventListener('DOMContentLoaded', function () {
    let littleBox = document.querySelector('.little-box');
    if (littleBox) {
        simpleBarInstance = new SimpleBar(littleBox, { autoHide: false });
        simpleBarInstance.unMount();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.button-search');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let searchText = form.querySelector('input[type="search"]').value;
        let foundElement = document.evaluate(
            '//*[contains(text(), "' + searchText + '")]',
            document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null
        );
        if (foundElement.snapshotLength > 0) {
            let elementTop = foundElement.snapshotItem(0).getBoundingClientRect().top;
            let windowHeight = window.innerHeight || document.documentElement.clientHeight;
            let start = window.pageYOffset;
            let scrollStep = Math.PI / (windowHeight / 2);
            let count = 0, currPos;
            let scrollInterval = setInterval(function(){
                if (count < windowHeight / 2) {
                    let newPosition = start + ((elementTop - start) * easeInOutQuad(count / (windowHeight / 2)));
                    window.scrollTo(0, newPosition);
                    count++;
                    currPos = newPosition;
                } else {
                    clearInterval(scrollInterval);
                }
            }, 0.1);
        } else {
            alert("Ops. The entered text was'not found on the page.");
        }
    });
});

function easeInOutQuad(t) {
    return t<.5 ? 2*t*t : -1+(4-2*t)*t;
}