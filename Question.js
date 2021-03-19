class Question{
constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
}

hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
this.title.html("My Quiz Game");
this.title.position(350,0);

this.question.html("Question: What can you catch but cannot throw?")
this.question.position(150,80);
this.option1.html("(a) A tennis ball");
this.option1.position(150,100);
this.option2.html("(b) A cold");
this.option2.position(150,120);
this.option3.html("(c) Your toys");
this.option3.position(150,140);
this.option4.html("(d) A boomerang");
this.option4.position(150,160);

this.input.position(150,230);


  }







}