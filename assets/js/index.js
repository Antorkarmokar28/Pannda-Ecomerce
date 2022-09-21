const background = document.getElementById('backpacks');
background.style.backgroundColor = 'tomato';

const bgchanges = document.getElementById('bgChange');
bgchanges.addEventListener('dblclick', function(){
    document.getElementById('bgChange').style.backgroundColor = 'tomato';
});

document.getElementById('input-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const button = document.getElementById('submit-btn');
    if(text == 'email'){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled', true);
    }
})