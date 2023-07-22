let cInput = document.querySelector('.calcInput'),
    cBtn = document.querySelectorAll('.btn');

cBtn.forEach(function(item){
  item.addEventListener('click',function(){
    
    let value = item.getAttribute('value');
    let cInputVal = cInput.value;

    if ( cInputVal == 0 ) {
      cInput.value = '';
    }

    cInput.value += value;
    
    if ( value == 'C' ) {
      cInput.value = '0';
    } else if ( value == '=' ) {
      cInput.value = eval(cInputVal);
    }
    
  });
});