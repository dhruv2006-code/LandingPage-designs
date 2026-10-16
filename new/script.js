    let elem = document.querySelectorAll('.elem');

    elem.forEach(function(element){
    element.addEventListener('mouseenter',function(){
    element.childNodes[3].style.opacity = 1;
    })
    element.addEventListener('mouseleave',function(){
    element.childNodes[3].style.opacity = 0;
    })
    element.addEventListener('mousemove',function(dets){
        let rect = element.getBoundingClientRect();
   element.childNodes[3].style.left = (dets.x - rect.left) + 'px';
element.childNodes[3].style.top = (dets.y - rect.top) + 'px';
    })
        });