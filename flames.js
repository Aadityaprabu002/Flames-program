//Added a js file
function find_length(n1,n2)
{ 

    for(i = 0;i<n1.length;i++)
    {
        for(j=0;j<n2.length;j++)
        {
            if(n1[i]==n2[j])
            {
                n1[i]=n2[j]=0;
                break;
            }   
        }
    }
    n3 = n1.concat(n2);
    n=[];
    for(x = 0;x<n3.length;x++)
    {
          if(n3[x]!=0)
          {
               n=n.concat(n3[x]);
          }
    }
    return n.length ;
}
function find_relation(l)
{
   var relation = {'f':"FRIENDSHIP",'l':"LOVE",'a':"AFFECTION",'m':"MARRIAGE",'e':"ENEMY",'s':"SISTER"};
   var flames=['f','l','a','m','e','s'];
   var size = 6;
   var cur = 0;
   while (size>1)
   {
         cur = cur + l;
         if(cur > size)
                cur=cur%size;
        flames.splice(cur-1,1);
        cur--;
        size--;      
   }
   return relation[flames[0]];

}

function getinput()
{

    n1=document.getElementById('yname').value;
    n2=document.getElementById('pname').value;
    if(n1=='' || n2 == ''||n1 == n2)
    {
        document.getElementById("box3").innerHTML="CANT COMPARE";
        return;
    }
    n1.replace(/ /g,''); 
    n2.replace(/ /g,'');
    n1=n1.toLowerCase();
    n2=n2.toLowerCase();
    yname = n1.split('');
    pname = n2.split(''); 
    result=find_relation(find_length(yname,pname));
    document.getElementById("box3").innerHTML=result

}

function reset(){
    location.reload();
}
