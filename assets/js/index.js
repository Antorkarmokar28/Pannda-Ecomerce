const background = document.getElementById('backpacks');
background.style.backgroundColor = 'tomato';

const bgChange = document.getElementById('bgChange');
bgChange.addEventListener('dblclick', function(){
    document.getElementById('bgChange').style.backgroundColor = 'tomato';
})

document.getElementById('input-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const button = document.getElementById('submit-btn');
    if(text === 'email'){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled', true);
    }
})

const productRemoves = document.getElementsByClassName('add-btn');
for(const productRemove of productRemoves){
    productRemove.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
}