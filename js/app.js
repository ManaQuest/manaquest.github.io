function cl(){
let div=document.querySelector('.logotip');
let arr=['katya',1234,'kosty',4321];
let f=document.forms[0];
console.log(arr[1]);
if(f.elements.test.value==arr[0]&&f.elements.test1.value==arr[1]||f.elements.test.value==arr[2]&&f.elements.test1.value==arr[3])
{
	f.outerHTML="";
	div.style.display='block';
}
}