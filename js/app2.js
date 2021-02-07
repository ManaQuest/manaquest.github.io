var p=document.querySelectorAll('.logotip .header p');
var tr=document.querySelectorAll('.logotip .header table tr');
var time=[[8,9,12,14],[0,55,15,10]];
if(localStorage.getItem('log')=='true')
{
	p[1].innerHTML='Добро пожаловать '+localStorage.getItem('login');
	document.body.style.display='block';
}
var a=new Date;
for(let i=0;i<a.getHours();i++)
{
	if(time[0][i]<=a.getHours()&&a.getHours()-time[0][i]==0&&tr[i])
	{
		if(time[1][i]<a.getMinutes())
		{
			tr[i].style.backgroundColor='green';
		}
	}
	else if(time[0][i]<a.getHours()&&a.getHours()-time[0][i]==1&&tr[i])
	{
		if(time[1][i]<a.getMinutes())
		{
			tr[i].style.backgroundColor='green';
		}
	}
	else if(time[0][i]<a.getHours()&&a.getHours()-time[0][i]>1&&tr[i])
	{
		tr[i].style.backgroundColor='green';
	}
}