(function(){
  'use strict';
  // navbar display on small screen
  var navButton = $("nav >button");
  var navMenu = $("nav >ul");
  navButton.click(function(){
    navMenu.toggleClass("collapse show");
  });
})()

// carroussel model
(function carrousselSlider(){
  // data never changed
  var sliderData ={
    imgPath:"./img/slider/img",
    extension:".jpg",
    timeInterval: 5000,
    numberImages:3,
  };

  var sliderView ={
    init:function(image){
      var imgStr ="";
      imgStr+='<img src="'+image+'" alt="Slider Image Should be there">'
      var imgContent =$(".slider >.img-wrapper");
      imgContent.html(imgStr);
    },
    /*
    @param {String} an image to render in the slider content
    */
    render:function(image){
      this.init(image);
    }
  }

  var octopus = {
    selectImage:function(){
       var index = 0;
       return function(){
          if(index<sliderData.numberImages) {
            return sliderData.imgPath + (index+=1).toString()+sliderData.extension;
          } else{
            index = 0;
            return sliderData.imgPath + (index+=1).toString()+sliderData.extension;
          }
        }
    },

    changeImage:function(time){
      var image = this.selectImage();
        setInterval(function(){
          sliderView.render(image())
        }, time)
    },

    init:function(){
        var image = sliderData.imgPath+'1'+sliderData.extension;
        // render first image
          sliderView.init(image);
        // change image after certain time in the slider
          this.changeImage(sliderData.timeInterval);
      }
  }
  octopus.init();
}())

$('.slider-message').click(function(){
  console.log(e.target.parentElement)
})