window.onload = () => {
    const button = document.getElementById("hamburger");
    const nav = document.getElementById("hamitems");
     
    button.addEventListener('change', () => {
            nav.classList.toggle('show');
            console.log(button);
    });
    }