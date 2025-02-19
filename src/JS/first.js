
export async function loadContent(url, containerId) {
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
