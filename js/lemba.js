window.addEventListener('load',()=>{
	
(new lembaSlide())


})


class lembaSlide{
	
constructor(){
	const lembaC = document.querySelector('.LembaC');
	const lembaT = lembaC.children.length
	const lembaNext = document.querySelector('.next');
	const lembaPrev = document.querySelector('.prev');

	let i = 0;
	let lembaS = '';

	// read all div child
	for(i; i<lembaT; i++){
		
		// display block on first div child, optional 
		if(i<=0)lembaC.children[i].style.display='block';		
		// display none on all rest div child
		else lembaC.children[i].style.display='none';
		// lembaC.children[i].style.display='none';
		
	}

	function lembanext(){
		
	if(i==lembaT){
				i=0
			//zerar a contagem
		}
		lembaC.children[i].style.display='none'

		i++
		i=i+lembaT
		i=i%lembaT
		// console.log(i)
		lembaC.children[i].style.display='block'
	}

	function lembaprev(){
		
		if(i==lembaT){
				i=0
			//zerar a contagem
		}
		
		lembaC.children[i].style.display='none'

		i--
		i=i+lembaT
		i=i%lembaT
		// console.log(i)
		lembaC.children[i].style.display='block'
		
	}

	lembaNext.addEventListener('click', ()=>{
		
		lembanext()
				
	})

	lembaPrev.addEventListener('click', ()=>{
		
		lembaprev()
		
	})

	lembaS = setInterval(()=>{
		
		lembanext()
		
	}, 2000)

}
	


}
