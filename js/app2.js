var p=document.querySelectorAll('.logotip .header p');
var tr=document.querySelectorAll('.logotip .header table tr');
var time=[[8,9,11,13,15],[0,40,35,55,50]];
var day=[['ничего','юхимия','физ. к. и зд.','щвсемирная история','русский язык'],['физика','биология','математика','щрусский язык','информатика'],[],[],[],[]];
var b=new Date(2021,0,1);
var a=new Date;
if(localStorage.getItem('log')=='true')
{
	p[1].innerHTML='Добро пожаловать '+localStorage.getItem('login');
	document.body.style.display='block';
}
	for(let i=0,v=a.getDay(),n=0;i<6&&tr[i]&&day[v-1][n];i++,n++)
	{
		if(day[v-1][n].search('ю')!=-1)
		{
			tr[i].innerHTML='<td><table><tr><td>'+day[v-1][n].replace('ю','')+'</td></tr><tr><td>'+day[v-1][n+1]+'</td></tr></table></td>';
			n++;
		}
		else if(day[v-1][n].search('щ')!=-1)
		{
			if(parseInt((a.getDate()-b.getDate())/7)%2==0)
			{
				tr[i].innerHTML='<td>'+day[v-1][n].replace('щ','')+'</td>';
				n++;
			}
			else if(parseInt((a.getDate()-b.getDate())/7)%2==1)
			{
				tr[i].innerHTML='<td>'+day[v-1][n+1]+'</td>';
				n++;
			}
		}
		else if(day[v-1][n].search('ю')==-1)
		{
			tr[i].innerHTML='<td>'+day[v-1][n]+'</td>';
		}
	}
	if(tr[tr.length-1].innerHTML.length==0&&tr[tr.length-1])
		tr[tr.length-1].outerHTML='';
for(let i=1;i<a.getHours();i++)
{
	if(time[0][i]==a.getHours()&&tr[i])
	{
		if(time[1][i]<a.getMinutes())
		{
			tr[i].style.backgroundColor='green';
		}
		else if(time[1][i]>a.getMinutes())
		{
			tr[i].style.backgroundColor='yellow';
		}
	}
	else if(time[0][i]<a.getHours()&&tr[i])
	{
			tr[i].style.backgroundColor='green';
	}
	else if(time[0][i]>a.getHours()&&time[0][i-1]<a.getHours()&&tr[i])
	{
		
			tr[i].style.backgroundColor='yellow';
	}
}
