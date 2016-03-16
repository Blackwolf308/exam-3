$("#contact-div")
$("#card-text")

$(document).ready(function(){
    $("#contact-div.card-action.center").on("click", function(event){
        event.preventDefault();
        $("#contact-div.card-action.center").addClass("hide");
        $("card-content").addClass("hide");
        $("#card-text").html("<form id=\"contactForm\" method=\"GET\" action=\"submit.php\"> <span>Name:</span> <input type=\"text\" name=\"name\" id=\"form-nm\"> <span>Phone number</span> <input type=\"text\" name=\"phone\" id=\"form-ph\"> <span>Email</span> <input type=\"text\" name=\"email\" id=\"form-e\"> <button type=\"submit\">Submit</button> </form>");
    });
});