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
        "elem.style.left = window.scrollX + event.clientX - 15 + 'px';" +
        "elem.style.top = window.scrollY + event.clientY - 15 + 'px';" +
    "}");
document.body.setAttribute('onmousedown', "" +
    "var elem = document.getElementById('highlight'); " +
    "if (elem) { " +
        "elem.style.background='red'; " + 
        "elem.style.opacity='0.75';" +
        "elem.style.transition='background 0.2s, opacity 0.2s';" + 
    "}");
document.body.setAttribute('onmouseup', "" +
    "var elem = document.getElementById('highlight'); " +
    "if (elem) { " +
            "elem.style.background='black'; " + 
            "elem.style.opacity='0.5';" +
        "}");
