
var hello = document.querySelector('#todo');
var btn = document.querySelector('#btn');
var todo = document.querySelector('#to-do')
btn.addEventListener('click',function(e){
    e.preventDefault();
    if(hello.value==''){
        alert('input field is required');
    } else{
        const newrow = document.createElement('tr');
        const newth = document.createElement('th');
        newth.innerHTML = hello.value;
        newrow.appendChild(newth);
        
        todo.appendChild(newrow);
    }
});

