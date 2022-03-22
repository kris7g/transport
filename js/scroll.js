const link = document.querySelectorAll('.menu_link');

link.forEach(lin => {
    lin.addEventListener('click', (event)=> {
        event.preventDefault();
        const id = lin.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
    });
});
