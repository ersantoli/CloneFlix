let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
let videoContainer = document.querySelector('.video-container');
let close = document.querySelector('.close');
let close2 = document.querySelector('.close2');
let video = document.querySelector('video');
let descricao = document.querySelector('.descricao');

btn.addEventListener('click', ()=>
{
    videoContainer.classList.add('show');
    video.play();
});

 btn2.addEventListener('click', ()=>
{
    descricao.classList.add('show');
    
});

close.addEventListener("click", ()=>
{
    videoContainer.classList.remove('show');
    video.pause();
});

close2.addEventListener("click", ()=>
{
    descricao.classList.remove('show');
    video.pause();
});