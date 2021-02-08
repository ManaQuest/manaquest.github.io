var p=document.querySelectorAll('.logotip .header p');
var tr=document.querySelectorAll('.logotip .header table tr');
var time=[[9,11,13,15],[40,35,55,50]];
if(localStorage.getItem('log')=='true')
{
	p[1].innerHTML='Добро пожаловать '+localStorage.getItem('login');
	document.body.style.display='block';
}
var a=new Date;
for(let i=0;i<a.getHours();i++)
{
	if(time[0][i]==a.getHours()&&tr[i])
	{
		if(time[1][i]<a.getMinutes())
		{
			tr[i].style.backgroundColor='green';
		}
	}
	if(time[0][i]<a.getHours()&&tr[i])
	{
			tr[i].style.backgroundColor='green';
	}
}