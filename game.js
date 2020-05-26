

function checknumber()
{
	var number=document.getElementById("input_type").value
    var msg=document.getElementById("msg")
    var results=document.getElementById("results")
    var random=document.getElementById("value").value
    var success=document.getElementById("success")
    var turn=document.getElementById("turn").value
    if(turn=="")
    {
        turn='1'
    }
    turn=+turn
    document.getElementById("turn").value=turn
    if(random=="")
    {
         random=generateRandomNumber()
         document.getElementById("value").value=random
     }
     console.log(random)
    if(!validatenumber(number))
    {
    	document.getElementById("input_type").value=" ";
        msg.innerHTML="<p class='text-danger'>Number should be four digit long</p>"
        return;
    }
    else
    {
      msg.innerHTML=""
    }
      var count=0
      var html='<tr><td>'+number+'</td><td>'
      for(let i=0;i<number.length;i++)
        if(number[i]==random[i])
        {
           html=html+'<i class="fa fa-check"></i>'
           count++;
        }
        else if(random.search(number[i])>-1)
        {
           html=html+'<i class="fa fa-exchange"></i>'
        }
        else
        {
           html=html+'<i class="fa fa-times"></i>'
        }
         html=html+'</td></tr>'
         results.innerHTML=results.innerHTML+html
         if (count==4)
         {
            document.getElementById("check").style="display:None";
            document.getElementById("replay").style="display:block";
            success.innerHTML='<h4 class="text-success" style="color:#434323">Congrats!<br>You Win</br><br><img src="guess.gif"></img></br></h4>'
        }
         if (turn==6)
         { 
             document.getElementById("check").style="display:None";
             document.getElementById("replay").style="display:block";
             success.innerHTML='<h4 class="text-success" style="color:#434323">Oops! Try Again<br><br><img src="replay.png"></img></h4>'
         }
         turn=turn+1
         console.log(turn)
         document.getElementById("turn").value=turn

}
function generateRandomNumber()
{
	// four digit number 1000-9999
    return (Math.floor(Math.random()*8990)+1000).toString()
};
function validatenumber(number)
{
    if(number.length==4)
    	return true
    else
    	return false
};