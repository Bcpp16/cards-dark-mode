function init() {

    const bdark = document.querySelector('#toggle');
    const body = document.querySelector('body');

    // toggle.onclick = function(){
    //     toggle.classList.toggle('active'); //creo una nueva clase, con toggle la quita y la vuelve a colocar
    //     body.classList.toggle('active');
    // };


    load();

    bdark.addEventListener('click', e =>{
        body.classList.toggle('darkmode');
        store(body.classList.contains('darkmode'));
    }); 

    function load() {
        const darkmode = localStorage.getItem('darkmode'); 

        if(!darkmode){
            store('false'); 
        }else if(darkmode == 'true'){
            body.classList.add('darkmode');
        }
    }


    function store(value) {
        localStorage.setItem('darkmode', value);
    }


}

window.onload = init;