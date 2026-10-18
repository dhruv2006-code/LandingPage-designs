let elem = document.querySelectorAll('.elem');
elem.forEach(element => {
    element.addEventListener('mouseenter',function(){
    element.childNodes[3].style.opacity = 1;
})
 element.addEventListener('mouseleave',function(){
    element.childNodes[3].style.opacity = 0;
})
 element.addEventListener('mousemove',function(dets){
    let rect = element.getBoundingClientRect()
   element.childNodes[3].style.left = (dets.x - rect.left) + 'px';
element.childNodes[3].style.top = (dets.y - rect.top) + 'px';
})
});
let section = document.querySelector('#feature');
let feature = document.querySelectorAll('.featurebox');
function showFeature(index){
    if(index>= feature.length){
        return;
    }
    let currentFeature =  feature[index];
    currentFeature.classList.add('animate');
    currentFeature.addEventListener('animationend',function(){
        showFeature(index+1);
    },{once:true})
}
let observer = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
        showFeature(0);
        observer.unobserve(section)
    }
})
observer.observe(section);