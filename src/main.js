
import { loadContent } from './JS/first.js';

document.querySelector('.sidenav').addEventListener('click', (event) => {
    event.preventDefault(); // предотвращаем переход по ссылке
    try {
        if (event.target.closest('.t1')) {
            // loadContent('./partials/lecture-1.html', '.m1');
            loadContent('/lecture-1.html', '.m1');
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

