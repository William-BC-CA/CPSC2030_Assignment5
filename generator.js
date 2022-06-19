$(document).ready(function(){
    let generateImgVal;
    let newLink;
    let gallery = $("#image-gallery h2");
    let getButton;
    $("form").submit(function(e){
        e.preventDefault();
        // getButton = $(this).children("button[class=add]");
        // console.log(getButton);
        generateImgVal = $(this).find("input[type=text][name=subject]").val();
        newLink = "https://source.unsplash.com/400x250/?" + generateImgVal;
        $($(this).next().children().attr("src", newLink));
    });
    $((".add")).click(function(){
    // $(getButton).click(function(){
        // console.log("Clicked!");
        // console.log(".add");
        // console.log(thisForm);
        // console.log(thisForm.children("button"));
        gallery.after($("<img>").attr("src", newLink));
    });
});
