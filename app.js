function head(title) {

    document.write(`

        <!DOCTYPE html>
        <html lang="en">
        <head>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
        
        </head>
        <body>

        <div id="root">
        <div class="head">
        <h1>${title}</h1>
        </div>   
    `);
}



function menu(nav){
    document.write(`<div class="nav"><ul>`);
    for(navLink in nav) {
        document.write(`<li><a href="${nav[navLink]}.html">${nav[navLink]}</a></li>`);
    }
    document.write(`</ul></div>`);
}



function post(postdata) {
    
    document.write(`<div class="banner"><div class="article"><div class="post">`);
    for(x in postdata) {
        document.write(`
        <h1>${postdata[x][0]}</h1>
        <img src="image/${postdata[x][1]}" alt="img1">
        <p>${postdata[x][2]}</p>
        `);
    }
    document.write(`</div></div>`);
}



function aside(ashead, asimg, aspara) {

    document.write(`<div class="aside">
    <h2>${ashead}</h2>
    <img src="image/${asimg}" alt="asideimg">
    <p>${aspara}</p>
    </div></div>`);
}



function footer(fData) {
    document.write(`<div class="footer"><h4>${fData}</h4></div></div>`);
}