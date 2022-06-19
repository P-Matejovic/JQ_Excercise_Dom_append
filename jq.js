

$("document").ready(function(){
console.log("Jq is working")

//excercise1    

const Names = ["Petr","Pavel","Michal","Oldřich","Pepa"];

Names.forEach(function(item){
    
    if (item === "Pavel") {
        $(".ul").append("<li>"+item+"</li>");
        $("Pavel").css("font-weight","bold")
        
    }
    else {
        $(".ul").append("<li>"+item+"</li>");
        $("li").css("font-weight","normal")
    };
    
   
});

//Excercise 2

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};


$("body").append("<H1>"+additionalBlock.title+"<H1>");
$("body").append("<p>"+additionalBlock.text+"<p>").css("display", "block");






});