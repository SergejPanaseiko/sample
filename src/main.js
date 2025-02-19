
//import { loadContent } from '/JS/first.js';
async function loadContent(url, containerId) {
    try {
        alert('&&&');
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
        const html = await response.text();
        document.querySelector(containerId).innerHTML = html;
    } catch (error) {
        console.error("Ошибка при загрузке контента:", error);
    }
}



document.querySelector('.sidenav').addEventListener('click', (event) => {
    event.preventDefault(); // предотвращаем переход по ссылке
    try {
        alert('111');
        if (event.target.closest('.t1')) {
            loadContent('./partials/lecture-1.html', '.m1');
            //loadContent('./lecture-1.html', '.m1');
        }
        else if (event.target.closest('.t2')) {
            document.querySelector('.m1').innerHTML = '';
            loadContent('./lecture-2.html', '.m1');
        }
    }
    catch (error){
        console.log("Error",error);        
    }
});

