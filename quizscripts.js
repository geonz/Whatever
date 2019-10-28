 
function MathFact(question, answer) 
// THIS IS THE JAVASCRIPT WITH THE QUIZ ACTIONS
{
  this.question=question;
  this.answer=answer;
 
}
// HERE ARE THE ZEROES ARRAYS.   tHESE GO IN THE "RULES GROUP"
var ruleRandom1 = Math.floor(Math.random()*100 + 75);
var ruleRandom2 = Math.floor(Math.random()*100 + 15);
var ruleRandom3 = Math.floor(Math.random()*100 + 115);
 
 

var fact1byRand1 = new MathFact(ruleRandom1 + " x 1 ",ruleRandom1);
var fact1byRand2= new MathFact(ruleRandom2 + " x 1 ",ruleRandom2);
var fact0byRand1= new MathFact(ruleRandom1 + " x 0", 0);

var fact0byRand2= new MathFact(ruleRandom2 + " x 0", 0);

var fact0byRand3= new MathFact(ruleRandom1 + " x 0", 0);

ruleFactsGroup = [ fact0byRand3, fact0byRand2, fact1byRand1, fact1byRand2];

//var randFactNumber=Math.floor(Math.random()*ruleFactsGroup.length);  
 var fact2by0 = new MathFact("2 x 0",0 );
var fact2by1 = new MathFact("2 x 1",2 );
var fact2by2 = new MathFact("2 x 2",4 );
var fact2by3 = new MathFact("2 x 3",6 );
var fact2by4 = new MathFact("2 x 4",8 );
var fact2by5 = new MathFact("2 x 5",10 );
var fact2by6 = new MathFact("2 x 6",12 );
var fact2by7 = new MathFact("2 x 7",14 );
var fact2by8 = new MathFact("2 x 8",16 );
var fact2by9 = new MathFact("2 x 9",18 );
var fact2by10 = new MathFact("2 x 10",20 );

var fact0by2 = new MathFact("0 x 2",0 );
var fact1by2 = new MathFact("1 x 2",2 );
var fact2by2 = new MathFact("2 x 2",4 );
var fact3by2 = new MathFact("3 x 2",6 );
var fact4by2 = new MathFact("4 x 2",8 );
var fact5by2 = new MathFact("5 x 2",10 );
var fact6by2 = new MathFact("6 x 2",12 );
var fact7by2 = new MathFact("7 x 2",14 );
var fact8by2 = new MathFact("8 x 2",16 );
var fact9by2 = new MathFact("9 x 2",18 );
var fact10by2 = new MathFact("10 x 2",20 );

var goodFactsGroup = []; 
var missedFactsGroup = []; 
var ruleFactsGroups = [];
var justMissed;
var missedOne=false; 
var consecRight=0; 
var consecNeeded=4;
// this I want to be able to change but it's how often I'll toss in a review question. 
 
var progress = 0;
var reviewStage=0; 
var factsGroup =    
[fact2by0,fact2by1,fact2by2,fact2by3,fact2by4,fact2by5,fact2by6,fact2by7,fact2by8,fact2by9,fact2by10, fact10by2, fact9by2,fact8by2, fact7by2,fact6by2,fact5by2,fact4by2,fact3by2,fact2by2,fact1by2,fact0by2];

var currentFact;  


//p1.innerHTML=ruleFactsGroup[2].question;


function newFact()
{
  number001.value="";
  number001.focus();
  check.disabled=false;
  if (reviewStage==1)
{
   currentFact = justMissed; 
  nextp.innerHTML=("yes, we're repeating." + currentFact.question);
}
      
  else
      if(reviewStage==2)
        {             currentFact=ruleFactsGroup[Math.floor(Math.random()*ruleFactsGroup.length)];
          //currentFact=ruleFactsGroup[randFactNumber];
        }
  else
      if (reviewStage==3)
        {
          currentFact=justMissed;
        }
   else 
     
     
    if (reviewStage==0)
     { 
      if (consecRight >=consecNeeded)
        {
          currentFact=goodFactsGroup[Math.floor(Math.random()*goodFactsGroup.length)];
          consecRight=0;
          progress--;
        }else 
 {
   currentFact = factsGroup[progress];    
 }
     }
  // AFTER THE IFS PRINT YOUR PROBLEM... 
        frameFact.innerHTML = (currentFact.question+ " = <br/>" );
 newProb.disabled=true;
 
  // p1.innerHTML=("the inReviewMode status is: " + inReviewMode);
  //frameFact.innerHTML="No, PRINT ME!!!";
   
    }





   function checkMe()
{

  var b = number001.value;  
  //check to make sure there's an answer 
   if (b=="")
{answerFeedback.innerHTML="please enter an answer"} else

  //  IS RIGHT:    good feedback and remove this from the quiz 'cause we're done.
  if (b==currentFact.answer)
    {
       newProb.disabled=false; 
         check.disabled=true; 
       if (missedOne==true)
         {
                     // missedOne=false; 
           reviewStage++; 
           p2.innerHTML="review stage is " + reviewStage; 
           if (reviewStage > 3)
             {
               reviewStage=0;
               missedOne=false;
             }
         }
      else {
          consecRight++;
      }
      
      
      answerFeedback.innerHTML = "yippee!!!"  ; 
      // PUT THE FACT you got right into the "good Facts Group" to review later.
      goodFactsGroup.unshift(currentFact);
 // take it *out* of the current facts group. 
      if (!missedOne && reviewStage==0)
      {
        progress++;
      if (progress == factsGroup.length)
        { 
          frameFact.innerHTML="you're done! <br/>";
        }
      }
          }
  
  
  
  
  else 
  // IS WRONG IS WRONG
   
  {  answerFeedback.innerHTML= "Here's the right answer:  " + currentFact.question + " ="  + currentFact.answer;
   consecRight=0;
     missedFactsGroup.unshift(currentFact);
       justMissed = currentFact; 
        missedOne=true; 
   reviewStage=1; 
  // inReviewMode=true;
       }
  nextp.innerHTML=("goodFacts has " 
    + goodFactsGroup.length);
  // p1.innerHTML=("is just Missed one true?  " + missedOne);
 // p2.innerHTML=("review mode is " + inReviewMode)
  
   
} 










