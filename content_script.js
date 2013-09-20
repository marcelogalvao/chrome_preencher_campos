
(function(){

// pega todos os campos
var campos = document.querySelectorAll('input, textarea, select');

var total = campos.length;
for(var x = 0; x < total; x++){
	

	// pega obj do campo
	var campo = campos[x];	

	// se for do tipo text ou password
	if (campo.type == 'text' || campo.type == 'password'){
		
		// conta para caso o campo seja um array
		arrCampo = document.getElementsByName(campo.name);
		totalCampo = arrCampo.length;
		
		for(var i = 0; i < totalCampo; i++){
			
			// se o campo estiver vazio
			if (arrCampo[i].value == '' || arrCampo[i].value == false || arrCampo[i].value == '0'){
				
				var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

				// if ( arrCampo[i].maxLength > 0 && arrCampo[i].maxLength < 57)
				// 	arrCampo[i].value = str.substr(0, arrCampo[i].maxLength);
				// else
					arrCampo[i].value = str;
			}
			
		}
	

	// se for do tipo textarea
	}else if (campo.type == 'textarea'){
		
		// conta para caso o campo seja um array
		arrCampo = document.getElementsByName(campo.name);
		totalCampo = arrCampo.length;
		
		for(var i = 0; i < totalCampo; i++){
			
			// se o campo estiver vazio
			if (arrCampo[i].value == '' || arrCampo[i].value == false || arrCampo[i].value !== '0'){
				
				arrCampo[i].value = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, eveniet, nesciunt, explicabo, molestias rerum voluptatem harum consequuntur facere saepe ipsam dolorum voluptate impedit! Eveniet quisquam rem molestiae libero illum natus.';
			}
			
		}
	

	// se for do tipo select
	}else if (campo.type == 'select-one'){
		
		// conta para caso o campo seja um array
		arrCampo = document.getElementsByName(campo.name);
		totalCampo = arrCampo.length;
		
		for(var i = 0; i < totalCampo; i++){
			
			// se o campo estiver vazio
			if (arrCampo[i].value == '' || arrCampo[i].value == false || arrCampo[i].value !== '0'){
				
				for ( var y = 0; y < arrCampo[i].options.length; y++ ){

					if ( arrCampo[i].options[y].value != '' || arrCampo[i].options[y].value != false ){

						arrCampo[i].selectedIndex = arrCampo[i].options[y].index;
						break;
					}
				}
			}
			
		}
	

	//se for do tipo radio
	}else if(campo.type == 'radio'){

		//conta a qtd do radio ou checkbox
		arrCampo = document.getElementsByName(campo.name);
		totalCampo = arrCampo.length;
		
		//procura algum marcado
		marcado = false;
		for(var i = 0; i < totalCampo; i++){
			
			//se tiver algum marcado recebe true
			if (arrCampo[i].checked == true){
				marcado = true;
				break;
			}
			
		}
		
		//se nenhum estiver marcado
		if(!marcado)			
			arrCampo[0].checked = true;


	//se for do tipo checkbox
	}else if(campo.type == 'checkbox'){

		//conta a qtd do radio ou checkbox
		arrCampo = document.getElementsByName(campo.name);
		totalCampo = arrCampo.length;
		
		//procura algum marcado
		marcado = false;
		for(var i = 0; i < totalCampo; i++){
			
			//se tiver algum marcado recebe true
			if (arrCampo[i].checked == true){
				marcado = true;
				break;
			}
			
		}

		//se nenhum estiver marcado
		if(!marcado)			
			arrCampo[0].checked = true;
	}

	
}//end for
}());