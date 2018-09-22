window.onscroll = function(e){
    console.log(document.body.scrollTop);
    let div = document.getElementById('ninja_boy');
// console.log(scrollTop);
    if(document.body.scrollTop < 50 || document.documentElement.scrollTop < 50){
        div.style.backgroundPosition = '0 0';
        div.style.top = '0px';
    }
    if(document.body.scrollTop > 50 && document.body.scrollTop <500 || document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < 500){
        div.style.backgroundPosition = '0 0';
        div.style.top = '10%';
    }
    if(document.body.scrollTop > 500 && document.body.scrollTop < 1000 || document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1000){
        div.style.backgroundPosition = '-180px 0';
        div.style.top = '20%';
    }
    if(document.body.scrollTop > 1000 && document.body.scrollTop < 1500 || document.documentElement.scrollTop > 1000 && document.documentElement.scrollTop < 1500){
        div.style.backgroundPosition = '-360px 0';
        div.style.top = '30%';
    }
    if(document.body.scrollTop > 1500 && document.body.scrollTop < 2000 || document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop < 2000){
        div.style.backgroundPosition = '-540px 0';
        div.style.top = '40%';
    }
    if(document.body.scrollTop > 2000 && document.body.scrollTop < 2500 || document.documentElement.scrollTop > 2000 && document.documentElement.scrollTop < 2500){
        div.style.backgroundPosition = '-720px 0';
        div.style.top = '50%';
    }
    if(document.body.scrollTop > 2500 && document.body.scrollTop < 3000 || document.documentElement.scrollTop > 2500 && document.documentElement.scrollTop < 3000){
        div.style.backgroundPosition = '-900px 0';
        div.style.top = '60%';
    }
    if(document.body.scrollTop > 3000 && document.body.scrollTop < 3500 || document.documentElement.scrollTop > 3000 && document.documentElement.scrollTop < 3500){
        div.style.backgroundPosition = '-1080px 0';
        div.style.top = '70%';
    }
    if(document.body.scrollTop > 3500 && document.body.scrollTop < 4200 || document.documentElement.scrollTop > 3500 && document.documentElement.scrollTop < 4200){
        div.style.backgroundPosition = '-1080px 0';
        div.style.top = '80%';
    }
}