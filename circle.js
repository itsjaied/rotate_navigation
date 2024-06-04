// At Start

// 1
gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2
})

let active = 3;

let mncircles = document.querySelectorAll('.mncircle');
let secs = document.querySelectorAll('.sec');
let smcircles = document.querySelectorAll('.smcircle');

// 2
lightUp(active - 1);



// Event Triggering
mncircles.forEach(function (val, index) {
  val.addEventListener("click", function(){
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 10,
      // 10 -> define interval
      // 3 -> index(active)
      // (index + 1) -> 1-based index(clicked)
      ease: Expo.easeInOut,
      duration: 1
      
    })

    greyout();

    // Lightup the active
    gsap.to(this, {
      opacity: .7
    })

    gsap.to(secs[index], {
      opacity: 1
    })
    gsap.to(smcircles[index], {
      opacity: 1
    })


    // Or

    // lightUp(index);

  })
}, mncircles)


// Greyout Function
function greyout() {
  gsap.to(mncircles, {
    opacity: .08
  })

  gsap.to(secs, {
    opacity: .4
  })
  gsap.to(smcircles, {
    opacity: .4
  })
}



// LightUp(active) Function
function lightUp(active) {
  gsap.to(mncircles[active], {
    opacity: 0.7,
  });

  gsap.to(secs[active], {
    opacity: 1,
  });
  gsap.to(smcircles[active], {
    opacity: 1,
  });
}

