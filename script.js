const videos = document.querySelectorAll("a#video-title")


document.write('<button onclick="history.go(0)">Back to YouTube</button>')
document.write('<button id="btn" onclick="copyAction()">Copy all links to clipboard</button>')

document.write(`<h1 style="font-family:'Open Sans', 'Roboto'">Listed video URL's in this search:</h1>`)

const mountedURL = () => Array.from(videos).reduce((accumulator, video) => {
    const href = video.getAttribute("href");
    accumulator += document.write(`
     <div style="font-family:'Open Sans', 'Roboto'">
         <ul style="list-style: none">
             <li id="url">youtube.com${href}</li>
         </ul>
    </div>
    `);
    document.getElementById("url").addEventListener("click", copyAction);
})

 
function copyAction(){
        const elems = document.querySelectorAll("li");
        const links = [];
        for (let i = 0; i < elems.length; i++) {
            links.push(elems[i].innerText);
        }
        navigator.clipboard.writeText(links.join('\n'));
}
 


mountedURL()