$(document).ready(function(){
    $("form").submit(function(e){
    e.preventDefault();
    let generateImgVal = $("input[type=text][name=subject]").val();
    console.log(generateImgVal);
    console.log("https://source.unsplash.com/400x250/?" + generateImgVal);
    $("div[class='image-container loaded'] img").attr("src", "https://source.unsplash.com/400x250/?" + generateImgVal);
  });
});
