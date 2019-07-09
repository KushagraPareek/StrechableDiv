
let resize;
let elem = document.querySelector('.resizable');
let leftpos =elem.getBoundingClientRect().left;
document.querySelectorAll('.resizer').forEach((elem) => {
 
         if(elem.classList.contains("bottom")){
            elem.addEventListener('mousedown',()=>{
               window.addEventListener('mousemove',expandBottom);
               window.addEventListener('mouseup',stopExpand);
           
           });

        }else if(elem.classList.contains("right")){
            elem.addEventListener('mousedown',()=>{
                window.addEventListener('mousemove',expandRight);
                window.addEventListener('mouseup',stopExpand);
            
            });
        }else if(elem.classList.contains("top")){

            elem.addEventListener('mousedown',()=>{
                window.addEventListener('mousemove',expandTop);
                window.addEventListener('mouseup',stopExpand);
            
            });
        }else if(elem.classList.contains("left")){
            elem.addEventListener('mousedown',()=>{
                window.addEventListener('mousemove',expandLeft);
                window.addEventListener('mouseup',stopExpand);
            
            });
        }

       

});

function expandBottom(e){

      
      elem.style.width  = e.pageX - elem.getBoundingClientRect().left +"px";
      elem.style.height = e.pageY - elem.getBoundingClientRect().top +"px";
      resize = expandBottom;

}

function expandRight(e){
   
    elem.style.width  = e.pageX - elem.getBoundingClientRect().left +"px";
    resize = expandRight;
    
}

function expandTop(e){
   
    
    resize = expandTop;
}

function expandLeft(e){
   
  
     
    elem.style.height = e.pageY - elem.getBoundingClientRect().top +"px";
    resize = expandLeft;
}
function stopExpand(e){

    window.removeEventListener('mousemove',resize);
}