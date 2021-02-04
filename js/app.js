function cl(){
let div=document.querySelector('.logotip');
let h1=document.querySelector('.logotip .header h1');
let arr=['katya',1234,'kosty',4321];
let f=document.forms[0];
if(f.elements.test.value==arr[0]&&f.elements.test1.value==arr[1]||f.elements.test.value==arr[2]&&f.elements.test1.value==arr[3])
{
	localStorage.setItem('login',f.test.value);
	localStorage.setItem('parol',f.test1.value);
	localStorage.setItem('log',true);
	document.location.href="index2.html";
}
}
var p=document.querySelectorAll('.logotip .header p');
if(p[1])
p[1].innerHTML='Добро пожаловать '+localStorage.getItem('login');
window.addEventListener('unload',function(){localStorage.setItem('log',false);});
