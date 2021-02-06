/*

@nome: Lemba Slide
@autor: Leocarpo Manuel
@email: leocarpomanuel@gmail.com

*/

window.addEventListener('load',()=>{
	
(new lembaSlide())


})


class lembaSlide{
	
constructor(){
	const lembaC = document.querySelector('.LembaC');
	const lembaT = lembaC.children.length
	const lembaNext = document.querySelector('.Lembanext');
	const lembaPrev = document.querySelector('.Lembaprev');

	let i = 0;
	let lembaS = '';

	// read all div child
	for(i; i<lembaT; i++){
		
		// display block on first div child, optional 
		if(i<=0)lembaC.children[i].style.display='block';		
		// display none on all rest div child
		else lembaC.children[i].style.display='none';

		
	}

	function lembaMovment(str){

		if(i==lembaT){
			i=0
			//zerar a contagem
		}

		lembaC.children[i].style.display='none'
		
		switch(str){
			case '--':
			i--;
			break;
			
			case '++':
			i++;
			break;
		}
		
		i=i+lembaT
		i=i%lembaT
		lembaC.children[i].style.display='block'
		
	}

	lembaNext.addEventListener('click', ()=>{
		
		lembaMovment('++')
				
	})

	lembaPrev.addEventListener('click', ()=>{
		
		lembaMovment('--')
		
	})

	lembaS = setInterval(()=>{
		
		lembaMovment('++')
		
	}, 2000)

}
	


}
