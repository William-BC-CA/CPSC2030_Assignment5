$(document).ready(function(){
    let generateImgVal;
    let newLink;
    let gallery = $("#image-gallery h2");
    let getButton;
    $("form").submit(function(e){
        e.preventDefault();
        generateImgVal = $(this).find("input[type=text][name=subject]").val();
        newLink = "https://source.unsplash.com/400x250/?" + generateImgVal;
        $($(this).next().children().attr("src", newLink));
    });
    $((".add")).click(function(){
        gallery.after($("<img>").attr("src", newLink));
    });
});
