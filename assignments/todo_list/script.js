function present()
{
    var todo = document.getElementsByTagName("input");
    var content = todo[0].value;
    var newP = document.createElement('p');
    newP.setAttribute("key",index);
  
    newP.textContent = content;
    newP.addEventListener('click',() =>
    {
        newP.remove();
    });
    var current = document.querySelector('.todos');
    current.appendChild(newP);
    index += 1;
}
var index = 0;
var form = document.getElementsByTagName('button')[0];
form.addEventListener('click',present);