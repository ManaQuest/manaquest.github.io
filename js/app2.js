var p=document.querySelectorAll('.logotip .header p');
var tr1=document.querySelectorAll('.logotip .header table tr');
var tr=[];
var time=[[8,9,10,11,13],[0,40,40,35,55]];
var day=[['ничего','юхимия','физ. к. и зд.','щвсемирная история','русский язык'],['физика','биология','математика','щрусский язык','информатика'],['астрономия','юфизика','физ. к. и зд.','математика','иностранный язык'],['белорусский язык','белорусская литература','информатика','щобществоведение','химия'],['юничего','география','юиностранный язык','физ. к. и зд.','всемирная история','русская литература'],['ничего','обществоведение','математика','допризывная подготовка']];
var b=new Date(2021,1,1);
var a=new Date;
var d=a.getDay();
if(localStorage.getItem('log')=='true')
{
	p[1].innerHTML='Добро пожаловать '+localStorage.getItem('login');
	document.body.style.display='block';
}
init(a.getDay());
function init(v){
	tr=[];
		if(d>6)
		{
			d=1;
			v=1;
		}
	if(d==0)
	{
		v++;
		d++;
	}
	for(let i=0;i<tr1.length;i++)
	{
		tr1[i].innerHTML='';
		tr1[i].style.backgroundColor=null;
	}
	for(let i=0,n=0;i<6&&tr1[i]&&day[v-1][n];i++,n++)
	{
		if(day[v-1][n].search('ю')!=-1)
		{
			tr1[i].innerHTML='<td><table><tr><td>'+day[v-1][n].replace('ю','')+'</td></tr><tr><td>'+day[v-1][n+1]+'</td></tr></table></td>';
			tr.push(tr1[i].querySelectorAll('td table tr')[0]);
			tr.push(tr1[i].querySelectorAll('td table tr')[1]);
			n++;
		}
		else if(day[v-1][n].search('щ')!=-1)
		{
			if(parseInt((a.getDate()-b.getDate())/7)%2==0)
			{
				tr.push(tr1[i]);
				tr1[i].innerHTML='<td>'+day[v-1][n].replace('щ','')+'</td>';
				n++;
			}
			else if(parseInt((a.getDate()-b.getDate())/7)%2==1)
			{
				tr.push(tr1[i]);
				tr1[i].innerHTML='<td>'+day[v-1][n+1]+'</td>';
				n++;
			}
		}
		else if(day[v-1][n].search('ю')==-1)
		{
			tr1[i].innerHTML='<td>'+day[v-1][n]+'</td>';
			tr.push(tr1[i]);
		}
		else if(tr1[i].innerHTML.length==0)
		{
			console.log(tr[i].innerHTML.length);
			tr.push(tr1[i]);
		}
	}
	if(d==a.getDay())
	{
		r();
	}
}
function r(){
	for(let i=1;i<a.getHours();i++)
		{
		if(time[0][i]==a.getHours()&&tr[i-1])
		{
			if(time[1][i]<a.getMinutes())
			{
				tr[i-1].style.backgroundColor='green';
			}
			else if(time[1][i]>a.getMinutes())
			{
				tr[i-1].style.backgroundColor='yellow';
			}
		}
		else if(time[0][i]<a.getHours()&&tr[i-1])
		{
				tr[i-1].style.backgroundColor='green';
		}
		else if(time[0][i]>a.getHours()&&tr[i-1])
		{
			if(time[0][i-1]<a.getHours())
					{
				tr[i-1].style.backgroundColor='yellow';
					}
					else if(time[0][i-1]==a.getHours())
					{
							if(time[1][i-1]<a.getMinutes())
				tr[i-1].style.backgroundColor='yellow';
					}
		}
	}
}
