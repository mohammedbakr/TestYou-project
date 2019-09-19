// Sign In box popUp up when clickin sign In button 
document.getElementById('signIn').addEventListener('click',
function(){
  document.querySelector('.bg-model').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function(){
  document.querySelector('.bg-model').style.display = 'none';
})




//    JavaScript Type Writer Effect

const TypeWriter = function(txtElement, words, wait = 2000){
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;

}

// type method
TypeWriter.prototype.type = function(){
  // console.log('hello');
  // current index of word
  const current = this.wordIndex % this.words.length;
  // get full text of current word
  const fullTxt = this.words[current];
  // console.log(fullTxt);

  // check if deleting
  if(this.isDeleting){
    // remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  }else{
    // add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // initial type speed
  let typeSpeed = 300

  if(this.isDeleting){
    typeSpeed /= 2;
  }


  // if word is complete
  if(!this.isDeleting && this.txt === fullTxt){
    // make pause at end
    typeSpeed = this.wait;
    // set delete to true
    this.isDeleting = true;
  }else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false;
    // move to next word
    this.wordIndex++;
    // pause before start typing
    typeSpeed = 250;
  }

  // console.log(current);
  setTimeout(() => this.type(), typeSpeed)
}

// init on dom load
document.addEventListener('DOMContentLoaded', init);


// init app
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // init typewriter
  new TypeWriter(txtElement, words, wait);
}




// back-to-top-btn
const backToTopBtn = document.querySelector('#back-to-top-btn');

window.addEventListener('scroll', scrollFunction);

function scrollFunction(){
  if(window.pageYOffset > 300){
    // show the btn
    backToTopBtn.style.display = 'block';
  }
  else{
    // hide the btn
    backToTopBtn.style.display = 'none';

  }
}

backToTopBtn.addEventListener('click', backToTop);

function backToTop(){
  window.scrollTo(0, 0);
}





// validation for subscribe
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();