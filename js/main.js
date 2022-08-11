// impelementation of google map
function initMap() {
    // The location of Uluru
    const cairo = { lat: 30.044420, lng: 31.235712 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center:cairo,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position:cairo,
      map: map,
    });
  }


  // Smoothscrolling

  $("navbar a, btn").on("click", function(event){
    if(this.hash!==""){
      event.preventdefault();
      const hash = this.hash;
      $("html,body").animate({scrolltop: $(hash).offset().top = 100},800);
    }
  });



  //Navbar opacity

  window.addeventlistenner("scroll" , function() {
    if(window.scrollu> 150){
      document.querySelector("navbar").getElementsByClassName.opacity = 0.9;
    } else {
      document.querySelector("navbar").getElementsByClassName.opacity = 1;
    }
  };)

