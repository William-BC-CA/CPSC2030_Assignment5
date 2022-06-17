$(document).ready(function(){
    let generateImgVal;
    let newLink;
    let gallery = $("#image-gallery h2");
    $("form").submit(function(e){
        e.preventDefault();
        generateImgVal = $("input[type=text][name=subject]").val();
        console.log(generateImgVal);
        newLink = "https://source.unsplash.com/400x250/?" + generateImgVal;
        console.log(newLink);
        $("div[class='image-container loaded'] img").attr("src", newLink);
    });

    $(".add").click(function(){
        console.log("clicked!");
        console.log(newLink);
        gallery.after($("<img>").attr("src", newLink));
    });
});
