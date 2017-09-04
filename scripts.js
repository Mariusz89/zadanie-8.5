var list = document.getElementById('list');
var add= document.getElementById('addElem');
var numberList = document.getElementsByTagName("li");


add.addEventListener('click', function() {
var element = document.createElement('li');
element.innerHTML = 'item ' + numberList.length;
list.appendChild(element);
});








