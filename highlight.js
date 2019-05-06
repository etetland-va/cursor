const highlightId = 'highlight';
const highlightWidth = 30;
const highlightHeight = 30;
const highlightDefaultColor = 'black';
const highlightDefaultOpacity = '0.5';
const highlightClickColor = 'red';
const highlightClickOpacity = '0.75';
const transitionTime = '0.2s';
const transition = 'background ' + transitionTime + ', opacity ' + transitionTime;

function buildHighlight(){
    var highlight = document.createElement('div');
    highlight.id = highlightId;
    highlight.style.position = 'absolute';
    highlight.style.pointerEvents = 'none';
    highlight.style.zIndex = '9000';
    highlight.style.borderRadius = '999px';
    highlight.style.width = highlightWidth + 'px';
    highlight.style.height = highlightHeight + 'px';
    highlight.style.opacity = highlightDefaultOpacity;
    highlight.style.background = highlightDefaultColor;
    return highlight;
}

function mouseMoveEvent(event){
    const elem = document.getElementById('highlight');
    if (!elem) {
        var highlight = buildHighlight();
        document.body.appendChild(highlight);
    } else {
        elem.style.left = window.scrollX + event.clientX - highlightWidth/2 + 'px';
        elem.style.top = window.scrollY + event.clientY - highlightWidth/2 + 'px';
    }
}
function mouseDownEvent(){
    const elem = document.getElementById(highlightId);
    if (elem) {
        elem.style.background = highlightClickColor;
        elem.style.opacity = highlightClickOpacity;
        elem.style.transition = transition
    }
}
function mouseUpEvent(){
    const elem = document.getElementById(highlightId);
    if (elem) {
        elem.style.background = highlightDefaultColor;
        elem.style.opacity = highlightDefaultOpacity;
    }
}
document.body.addEventListener("mousemove", mouseMoveEvent);
document.body.addEventListener("mousedown", mouseDownEvent);
document.body.addEventListener("mouseup", mouseUpEvent);
