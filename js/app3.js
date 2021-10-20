function cl(){
let div=document.querySelector('.logotip');
let h1=document.querySelector('.logotip .header h1');
let arr=['kosty',4321,'yasha',1234,'ksyusha',3421,'katya',1423,'denis',1234];
let f=document.forms[0];
for (let i=0;i<arr.length;i+=2)
{
	if(f.elements.login.value==arr[i]&&f.elements.password.value==arr[i+1])
	{
		localStorage.setItem('login',f.login.value);
		localStorage.setItem('parol',f.password.value);
		localStorage.setItem('log','true');
		document.location.href="index2.html";
	}
}
}
