
function Timer()
{
  let ini=5;
  var ele=document.querySelector("p");
  let time=1000
  var myInterval=setInterval(timr,time);
  function timr(){
    time=1000
    if(ini<0){
      ele.classList.add("invisible");
      stopinterval()
    }
    if(ini%2===0)ele.classList.add("change");
    else ele.classList.remove("change");
    ele.innerHTML=ini
    ini=ini-1

  }
  function stopinterval()
  {
    clearInterval(myInterval);
  }

}
document.querySelector("button").addEventListener("click",function(){
  Timer();
    setTimeout(function(){
      document.querySelector("button").classList.add("invisible");
       document.querySelector("h1").classList.add("invisible");
    },900);
    setTimeout(generateHeadTail,7020);


});

function generateHeadTail()
{
  changeTitle(tellHeadOrTail());
  function tellHeadOrTail()
  {
    var number=Math.ceil(Math.random()*2);
    if(number===1)return "Head";
    else return "Tail";
  }
  function changeTitle(ch)
  {
    if(ch==="Head")
    {
      document.querySelector("span.ans").innerHTML="It's Head<br>";
      document.querySelector("img.aaa").setAttribute("src","images/head.jfif");
      document.querySelector("img.aaa").classList.remove("invisible");
      document.querySelector("button.abc").classList.remove("invisible");
    }
    else
    {
      document.querySelector("span.ans").innerHTML="It's Tail<br>";
      document.querySelector("img.aaa").setAttribute("src","images/tail.jfif");
      document.querySelector("img.aaa").classList.remove("invisible");
      document.querySelector("button.abc").classList.remove("invisible");
    }
  }
}
