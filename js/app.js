function cl(){
let div=document.querySelector('.logotip');
let h1=document.querySelector('.logotip .header h1');
let arr=['kosty',4321,'yasha',1234,'ksyusha',3421,'katya',1423];
let f=document.forms[0];
for (let i=0;i<arr.length;i+=2)
{
<<<<<<< HEAD
if(f.elements.login.value==arr[i]&&f.elements.password.value==arr[i+1])
{
	localStorage.setItem('login',f.login.value);
	localStorage.setItem('parol',f.password.value);
=======
	localStorage.setItem('login',f.test.value);
	localStorage.setItem('parol',f.test1.value);
>>>>>>> 3fa33651f446394f9f8ebaaed374270f97f5a2ff
	localStorage.setItem('log','true');
	document.location.href="index2.html";
}
}
<<<<<<< HEAD
}
=======
var p=document.querySelectorAll('.logotip .header p');
if(p[1])
p[1].innerHTML='Добро пожаловать '+localStorage.getItem('login');
window.addEventListener('unload',function(){localStorage.setItem('log','false');});
>>>>>>> 3fa33651f446394f9f8ebaaed374270f97f5a2ff
