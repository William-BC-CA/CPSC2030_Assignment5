$(function(){

  let gallery = $("#image-gallery");

  for(let i=0;i<10;i++)
  {
    let random = Math.round(Math.random()*16);

    gallery.append($("<img>").attr("src", "images/photo" + random + ".jpg"));
  }

});
