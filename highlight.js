document.body.setAttribute('onmousemove', "" +
    "var elem = document.getElementById('highlight'); " +
    "if (!elem) { " +
        "var highlight = document.createElement('div'); " +
        "highlight.id = 'highlight'; " +
        "highlight.style.position = 'absolute';" +
        "highlight.innerText = '';" +
        "highlight.style.pointerEvents='none';" +
        "highlight.style.zIndex='9000';" +
        "highlight.style.borderRadius='999px';" +
        "highlight.style.width='30px';" +
        "highlight.style.height='30px';" +
        "highlight.style.opacity='0.5';" +
        "highlight.style.background='#111';" +
        "document.body.appendChild(highlight);" +
    "} else { " +
        "elem.style.left = window.scrollX + event.clientX - elem.getBoundingClientRect().width / 2 + 'px';" +
        "elem.style.top = window.scrollY + event.clientY - elem.getBoundingClientRect().height / 2 + 'px';" +
    "}");
document.body.setAttribute('onclick', "" +
    "var elem = document.getElementById('highlight'); " +
    "if (elem) { " +
        "elem.style.background='red'; " + 
        "elem.style.width='40px'; " + 
        "elem.style.height='40px'; " + 
        "elem.style.transition='background 0.2s, width 0.2s, height 0.2s';" + 
        "setTimeout(function(){ " + 
            "elem.style.background='black'; " + 
            "elem.style.width='30px'; " + 
            "elem.style.height='30px'; " + 
        "}, 200);" +
    "}");