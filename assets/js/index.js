
const background = document.getElementById('backpacks');
background.style.backgroundColor = 'tomato';

const bgchanges = document.getElementById('bgChange');
bgchanges.addEventListener('dblclick', function(){
    document.getElementById('bgChange').style.backgroundColor = 'tomato';
})