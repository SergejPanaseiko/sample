
import { loadContent } from './JS/first.js';

// Назначаем обработчик события на ссылку
document.querySelector('.sidenav').addEventListener('click', (event) => {
    event.preventDefault(); // предотвращаем переход по ссылке
    if (event.target.closest('.t1')) {
        loadContent('/partials/lecture-1.html', '.m1');
    }
    else if (event.target.closest('.t2')) {
        document.querySelector('.m1').innerHTML = '';
        loadContent('/partials/lecture-2.html', '.m1');        
    }
});

