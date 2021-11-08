var p=document.querySelectorAll('.logotip .header p');
var tr=document.querySelectorAll('.logotip .header table tr td div');
var time=[[[9,11,13,15],[40,35,55,50]],[[8,9,11,13,15],[45,40,35,55,50]],[[9,11,13,15],[40,35,55,50]],[[9,10,11,13,15],[40,40,35,55,50]],[[9,11,13,15],[40,35,55,50]],[[9,10,11,13,15],[40,40,35,55,50]]];
var day=[['математика','ТЭЦ','/ned/техническая электроника','программирование','программирование'],['информационные технологии','/del/ТУСТ','физ к и зд','иностранный язык','общая физика'],['Ничего','Информационные технологии','иностранный язык','/ned/ЗНиТотЧС','Техническая электроника'],['/ned/Ничего','Математика','/del/ТКиОК','физ к и зд','ТЭЦ','Программирование'],['Ничего','/ned/Общая физика','ТЭЦ','ТУСТ','Математика'],['Ничего','/del/Ничего','физ к и зд','ТКиОК','Охрана среды']];
var dayned=['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
var a=new Date;
var nowday=a.getDay()-1;
if(localStorage.getItem('log')=='true')
{
	p[1].innerHTML='Добро пожаловать '+localStorage.getItem('login');
	document.body.style.display='block';
}
init(a.getDay()-1);
function init_tr(nday){
	let tr2=[];
	let tr3=[];
	for(let i=0,n=0;i<tr.length;i++,n++)
	{
		if(tr[i].innerHTML.includes('table')==false)
		{
			tr2[n]=tr[i];
		}
		else
		{
			tr3=tr[i].querySelectorAll('.logotip .header table tr td div tr td div');
			tr2[n]=tr3[0];
			tr2[n+1]=tr3[1];
			n++;
		}
	}
	return tr2;
}
function init(nday){
	let count=0;
	if(nowday>5)
	{
		nowday=0;
		nday=0;
	}
	else if(nowday<0)
	{
		nowday=5;
		nday=5;
	}
	p[1].innerHTML=dayned[nday];
	for(let i=0;i<tr.length;i++)
	{
		tr[i].innerHTML='';
	}
	for(let i=0;i<day[nday].length;i++)
	{
		if(day[nday][i].search('/ned/')!=-1)
		{
			if(week(a,new Date(2021,8,13))==1)
			{
				tr[i-count].innerHTML=day[nday][i].replace('/ned/','');
			}
			else
			{
				tr[i-count].innerHTML=day[nday][i+1];
			}
			tr[i-count].style.backgroundColor='';
			i++;
			count++;
		}
		else if(day[nday][i].search('/del/')!=-1)
		{
			tr[i-count].innerHTML='<td><table style="border:black solid 1px;"><tr><td><div>'+day[nday][i].replace('/del/','')+'</div></td></tr>'+'<tr><td><div>'+day[nday][i+1]+'</div></td></tr>'+'</table></td>';
			tr[i-count].style.backgroundColor='';
			i++;
			count++;
		}
		else 
		{
			tr[i-count].innerHTML=day[nday][i];
			tr[i-count].style.backgroundColor='';
		}
	}
	if(nday==a.getDay()-1)
		s_time(nday);
}
function s_time(nday){
	let tr=init_tr();
	for(let i=0;i<a.getHours();i++)
	{
		if(tr[i]&&time[nday][0][i]<a.getHours())
		{
			tr[i].style.backgroundColor='green';
		}
		else if(tr[i]&&time[nday][0][i]==a.getHours()&&time[nday][1][i]<a.getMinutes())
		{
			tr[i].style.backgroundColor='green';
		}
		else if(tr[i]&&time[nday][0][i]==a.getHours()&&time[nday][1][i]>=a.getMinutes())
		{
			tr[i].style.backgroundColor='yellow';
		}
		else if(tr[i]&&time[nday][0][i]>a.getHours()&&tr[i-1].style.backgroundColor=='green')
		{
			tr[i].style.backgroundColor='yellow';
		}
	}
}
function week(x,y){
	let d=Math.round((x-y)/(1000*60*60*24));
	let count=0;
	while(count*7<d)
	{
		count++;
	}
	if(count%2==0)
		return 2;
	if(count%2==1)
		return 1;
}
