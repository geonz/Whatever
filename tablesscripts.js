 // I am wondering if the wwhole "quiz" thing should be an object.   
 // Yes, but ... you would need to have all those constructors.   I could, though.   

// okay this is my Object.   
function MathFact(question, answer, inMissedFacts, inGoodFacts) {
  this.question=question;
  this.answer=answer;
   this.inGoodFacts=false;
  this.inMissedFacts=false;
  //I can do methods here too. 
  // and I can add a property later to an individual instance. 
  // I expect to add "answered=false"
}


//these woudl go outside of this object if this object becomes its own object
var goodFactsGroup; 
var missedFactsGroup; 
//   tHESE GO IN THE "RULES GROUP"
var ruleRandom1 = Math.floor(Math.random()*100 + 75);
var ruleRandom2 = Math.floor(Math.random()*100 + 15);
var ruleRandom3 = Math.floor(Math.random()*100 + 115);
 
// I shall use the link to "randoms in a range" to tweak this later.  
var fact1byRand1 = new MathFact(ruleRandom1 + " x 1 ",ruleRandom1);
var fact1byRand2= new MathFact(ruleRandom2 + " x 1 ",ruleRandom2);
var factRand1by1= new MathFact("1 x " + ruleRandom1, ruleRandom1);
var factRand2by1= new MathFact("1 x " + ruleRandom2, ruleRandom2);
var fact0byRand1= new MathFact(ruleRandom1 + " x 0", 0);

var rand1byZero= new MathFact(" 0 x " + ruleRandom1,0);
var rand2byZero= new MathFact(" 0 x " + ruleRandom2,0);
var rand3byZero= new MathFact(" 0 x " + ruleRandom3,0);
var fact0byRand2= new MathFact(ruleRandom2 + " x 0", 0);
var fact0byRand3= new MathFact(ruleRandom1 + " x 0", 0);
var fact10byRand1= new MathFact(ruleRandom1 + " x 10 ", (ruleRandom1*10));
var fact10byRand2= new MathFact(ruleRandom2 + " x 10 ", (ruleRandom2*10));

var moreRandbyZero= new MathFact( Math.floor(Math.random() * (51) + 30) + " x 0", 0);

// okay, let's do the range thing.   


// because this will be used all over the place :)   EXCEPT IT DOESN'T WORK.
var ruleFactsGroup = [fact0byRand3, fact0byRand2, fact1byRand1, fact1byRand2, fact10byRand1, fact10byRand2]; 

// because they will be passed into from other quizzes. I almos tmiss Java for figuring out that stuff.   Passing into other stuff and all. 
var fact0by0 = new MathFact("0 x 0", 0);
var fact0by1 = new MathFact("0 x 1", 0);
var fact0by2 = new MathFact("0 x 2", 0);
var fact0by3 = new MathFact("0 x 3", 0);
var fact0by4 = new MathFact("0 x 4", 0);
var fact0by5 = new MathFact("0 x 5", 0);
var fact0by6 = new MathFact("0 x 6", 0);
var fact0by7 = new MathFact("0 x 7", 0);
var fact0by8 = new MathFact("0 x 8", 0);
var fact0by91 = new MathFact("0 x 9", 0);
var fact0by10 = new MathFact("0 x 10", 0);

var fact1by0 = new MathFact("1 x 0", 0);
var fact1by1 = new MathFact("1 x 1",1);
var fact1by2 = new MathFact("1 x 2",2 );
var fact1by3 = new MathFact("1 x 3",3);
var fact1by4 = new MathFact("1 x 4",4 );
var fact1by5 = new MathFact("1 x 5",5);
var fact1by6 = new MathFact("1 x 6",6 );
var fact1by7 = new MathFact("1 x 7",7 );
var fact1by8 = new MathFact("1 x 8",8 );
var fact1by9 = new MathFact("1 x 9",9 );
var fact1by10 = new MathFact("1 x 10",10 );


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
var fact2by2 = new MathFact("1 x 2",2 );
var fact2by2 = new MathFact("2 x 2",4 );
var fact3by2 = new MathFact("3 x 2",6 );
var fact4by2 = new MathFact("4 x 2",8 );
var fact5by2 = new MathFact("5 x 2",10 );
var fact6by2 = new MathFact("6 x 2",12 );
var fact7by2 = new MathFact("7 x 2",14 );
var fact8by2 = new MathFact("8 x 2",16 );
var fact9by2 = new MathFact("9 x 2",18 );
var fact10by2 = new MathFact("10 x 2",20 );


var fact3by0 = new MathFact("3 x 0",0 );
var fact3by1 = new MathFact("3 x 1",3 );
var fact3by2 = new MathFact("3 x 2",6 );
var fact3by3 = new MathFact("3 x 3",9 );
var fact3by4 = new MathFact("3 x 4",12 );
var fact3by5 = new MathFact("3 x 5",15 );
var fact3by6 = new MathFact("3 x 6",18 );
var fact3by7 = new MathFact("3 x 7",21 );
var fact3by8 = new MathFact("3 x 8",24 );
var fact3by9 = new MathFact("3 x 9",27 );
var fact3by10 = new MathFact("3 x 10",30 );

var fact4by0 = new MathFact("4 x 0",0 );
var fact4by1 = new MathFact("4 x 1",4 );
var fact4by2 = new MathFact("4 x 2",8 );
var fact4by3 = new MathFact("4 x 3",12 );
var fact4by4 = new MathFact("4 x 4",16 );
var fact4by5 = new MathFact("4 x 5",20 );
var fact4by6 = new MathFact("4 x 6",24 );
var fact4by7 = new MathFact("4 x 7",28 );
var fact4by8 = new MathFact("4 x 8",32 );
var fact4by9 = new MathFact("4 x 9",36 );
var fact4by10 = new MathFact("4 x 10",40 );

var fact5by0 = new MathFact("5 x 0",0 );
var fact5by1 = new MathFact("5 x 1",5 );
var fact5by2 = new MathFact("5 x 2",10 );
var fact5by3 = new MathFact("5 x 3",15 );
var fact5by4 = new MathFact("5 x 4",20 );
var fact5by5 = new MathFact("5 x 5",25 );
var fact5by6 = new MathFact("5 x 6",30 );
var fact5by7 = new MathFact("5 x 7",35 );
var fact5by8 = new MathFact("5 x 8",40 );
var fact5by9 = new MathFact("5 x 9",45 );
var fact5by10 = new MathFact("5 x 10",50 );
var fact6by0 = new MathFact("6 x 0",0 );
var fact6by1 = new MathFact("6 x 1",6 );
var fact6by2 = new MathFact("6 x 2",12 );
var fact6by3 = new MathFact("6 x 3",18);
var fact6by4 = new MathFact("6 x 4",24 );
var fact6by5 = new MathFact("6 x 5",30 );
var fact6by6 = new MathFact("6 x 6",36 );
var fact6by7 = new MathFact("6 x 7",42 );
var fact6by8 = new MathFact("6 x 8",48 );
var fact6by9 = new MathFact("6 x 9",54 );
var fact6by10 = new MathFact("6 x 10",60 );

var fact7by0 = new MathFact("7 x 0",0 );
var fact7by1 = new MathFact("7 x 1",7 );
var fact7by2 = new MathFact("7 x 2",14 );
var fact7by3 = new MathFact("7 x 3",21);
var fact7by4 = new MathFact("7 x 4",28 );
var fact7by5 = new MathFact("7 x 5",35 );
var fact7by6 = new MathFact("7 x 6",42 );
var fact7by7 = new MathFact("7 x 7",49 );
var fact7by8 = new MathFact("7 x 8",56 );
var fact7by9 = new MathFact("7 x 9",63 );
var fact7by10 = new MathFact("7 x 10",70 );

var fact8by0 = new MathFact("8 x 0",0 );
var fact8by1 = new MathFact("8 x 1",8);
var fact8by2 = new MathFact("8 x 2",16 );
var fact8by3 = new MathFact("8 x 3",24 );
var fact8by4 = new MathFact("8 x 4",32 );
var fact8by5 = new MathFact("8 x 5",40 );
var fact8by6 = new MathFact("8 x 6",48 );
var fact8by7 = new MathFact("8 x 7",56 );
var fact8by8 = new MathFact("8 x 8",64 );
var fact8by9 = new MathFact("8 x 9",72 );
var fact8by10 = new MathFact("8 x 10",80 );

var fact9by0 = new MathFact("9 x 0",0 );
var fact9by1 = new MathFact("9 x 1",9 );
var fact9by2 = new MathFact("9 x 2",18 );
var fact9by3 = new MathFact("9 x 3",27);
var fact9by4 = new MathFact("9 x 4",36 );
var fact9by5 = new MathFact("9 x 5",45 );
var fact9by6 = new MathFact("9 x 6",54 );
var fact9by7 = new MathFact("9 x 7",63 );
var fact9by8 = new MathFact("9 x 8",72 );
var fact9by9 = new MathFact("9 x 9",81 );
var fact9by10 = new MathFact("9 x 10",90 );

var fact10by0 = new MathFact("10 x 0",0 );
var fact10by1 = new MathFact("10 x 1",10 );
var fact10by2 = new MathFact("10 x 2",20 );
var fact10by3 = new MathFact("10 x 3",30);
var fact10by4 = new MathFact("10 x 4",40 );
var fact10by5 = new MathFact("10 x 5",50 );
var fact10by6 = new MathFact("10 x 6",60 );
var fact10by7 = new MathFact("10 x 7",70 );
var fact10by8 = new MathFact("10 x 8",80 );
var fact10by9 = new MathFact("10 x 9",90 );
var fact10by10 = new MathFact("10 x 10",100 );



var fact0by10 = new MathFact("0 x 10",0 );
var fact1by10 = new MathFact("1 x 10",10 );
var fact2by10 = new MathFact("2 x 10",20 );
var fact3by10= new MathFact("3 x 10",30);
var fact4by10= new MathFact("4 x 10",40 );
var fact5by10= new MathFact("5 x 10",50 );
var fact6by10= new MathFact("6 x 10",60 );
var fact7by10 = new MathFact("7 x 10",70 );
var fact8by10 = new MathFact("8 x 10",80 );
var fact9by10 = new MathFact("9 x 10",90 );
var fact10by10 = new MathFact("10 x 10",100 );

var fact0by9 = new MathFact("0 x 9",0 );
var fact1by9 = new MathFact("1 x 9",9 );
var fact2by9 = new MathFact("2 x 9",18 );
var fact3by9 = new MathFact("3 x 9",27);
var fact4by9 = new MathFact("4 x 9",36 );
var fact5by9 = new MathFact("5 x 9",45 );
var fact6by9 = new MathFact("6 x 9",54 );
var fact7by9 = new MathFact("7 x 9",63 );
var fact8by9 = new MathFact("8 x 9",72 );
var fact9by9 = new MathFact("9 x 9",81 );
var fact10by9 = new MathFact("10 x 9",90 );

var fact0by0 = new MathFact("0 x 0", 0);
var fact1by0 = new MathFact("1 x 0", 0);
var fact2by0 = new MathFact("2 x 0", 0);
var fact3by0 = new MathFact("3 x 0", 0);
var fact4by0 = new MathFact("4 x 0", 0);
var fact5by0 = new MathFact("5 x 0", 0);
var fact6by0 = new MathFact("6 x 0", 0);
var fact7by0 = new MathFact("7 x 0", 0);
var fact8by0 = new MathFact("8 x 0", 0);
var fact9by0 = new MathFact("9 x 0", 0);
var fact10by0 = new MathFact("10 x 0", 0);
 
