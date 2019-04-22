$(".fade").delay(1000).animate({ opacity: 1 }, 700)


$("#myVideo").bind('ended', function(){
    this.play();
});
    
   