(function(window){
	'use strict';
		    var sImg = document.querySelectorAll('.s-img'),
		        sImgc = document.querySelectorAll('.s-img > img'),
		        sLeft = document.querySelector('.s-pic'),
		        sPrev = document.getElementById('s-prev'),
		        sNext = document.getElementById('s-next'),
		        sIndex = 0,i,max;
		function init() {

		    	var sImgClone =document.querySelector('.s-img').cloneNode(true);
				sImgClone.setAttribute('class','clone');
				sLeft.appendChild(sImgClone);


		        sImg[0].classList.add('active');  
		        sPrev.classList.add('none'); 
		        sNext.onclick = function(){
		          sIndex++;
		          if(sIndex>=5){
		          	 sIndex=5;
		             this.classList.add('none');
		          }else{
		            sPrev.classList.remove('none');   
		          }
				  sImg[sIndex].classList.add('active'); 
		        }
		        sPrev.onclick = function(){
		          if(sIndex<=1){
		            sIndex=1;
		            this.classList.add('none');
		          }else{
		            sNext.classList.remove('none'); 
		          }
		          sImg[sIndex].classList.remove('active');      
		          sIndex--;             
		        }
					
		}			

		document.addEventListener('DOMContentLoaded', function() {
			init();
		});
        window.onload = function() {
        		for(i=0,max=sImgc.length;i<max;i++){
		            sImgc[i].style.width = sImg[0].clientWidth + 'px';
		            sImgc[i].style.height = sLeft.lastElementChild.clientHeight + 'px'; 
		          }
		          sLeft.style.height = sLeft.lastElementChild.clientHeight + 'px';   
        }
})(window)
