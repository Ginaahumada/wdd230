const list = document.querySelector('#list');
const baseURL = "https://ginaahumada.github.io/wdd230/";
const linksURL = "https://ginaahumada.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        let listItem = document.createElement('li');
        

        listItem.textContent = `${week.lesson}: `;
        
        week.links.forEach((link, index) => {

            let linkElement = document.createElement('a');

            linkElement.setAttribute('href', link.url);
            linkElement.setAttribute('target', '_blank');
            linkElement.textContent = link.title;
            listItem.appendChild(linkElement);
            
            if (index < week.links.length - 1) {
                listItem.innerHTML += ' | ';
            }
        });
        
        list.appendChild(listItem);
    });
};

getLinks();