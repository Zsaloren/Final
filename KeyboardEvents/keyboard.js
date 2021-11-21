var bodyElem = document.getElementsByTagName('body')[0];

function showKeyInfo(event){
  var infoElem = document.getElementById('key-info');
  
  infoElem.innerHTML = '';
  infoElem.insertAdjacentHTML('beforeend', '<p>You pressed the ' + String.fromCharCode(event.which) + ' key.</p>');
}


bodyElem.addEventListener('keydown', showKeyInfo);
