function validacija(){
  
  if(document.forms[0].name.value==''){
  		alert("Molimo unesite svoje ime");
  		document.forms[0].name.focus();
  		return false;
	 }
   
	 if(document.forms[0].email.value==''){
		alert("Molimo unesite vaš email")
		document.forms[0].email.focus();
		return false;
	}
  
  if(document.forms[0].email.value.indexOf('@')==-1){
		alert("Mail mora sadržati '@' kako bi bio u ispravnom formatu")
		document.forms[0].email.focus();
		return false;
	}
  
  if(document.forms[0].email.value.indexOf('.')==-1){
		alert("Mail mora sadržati '.' kako bi bio u ispravnom formatu")
		document.forms[0].email.focus();
		return false;
	}
  
  if(!document.forms[0].chBox.checked)	{
		alert("Morate štiklirati polje kako bi primali obaveštenja");
		return false;
	}
  
  alert("Hvala na prijavi za mailing listu!");
	return true;
}
