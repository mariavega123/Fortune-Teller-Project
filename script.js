    $("button").click(function(){
    
    var name = $(".comment1").val();
    var age = $(".comment2").val();
    var hobby = $(".comment3").val();
    
    var result = "In the year of 2050 " + name + " you are going to be famous at age " + age + " and you will " + hobby + " as a career " ;
     
  
    var userInput= parseInt($("input").val());

    $(".results").text(result);
});