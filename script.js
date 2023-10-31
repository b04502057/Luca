// Get all elements with the class "hoverable-paragraph"
const paragraphs = document.querySelectorAll('.hoverable-paragraph');
const tooltips = document.querySelectorAll('.additional-text');

// Add event listeners to each paragraph
paragraphs.forEach((paragraph, index) => {
    paragraph.addEventListener('mouseover', () => {
        // Show the corresponding additional text
        tooltips[index].style.display = 'block';
    });


});





// Get the checkbox element by its ID
const checkbox = document.getElementById('myCheckbox');
// Get a reference to the content divs
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const img=document.getElementById('mainph');
//music
const backgroundMusic = document.getElementById("background-music");

// Add an event listener to the checkbox to respond to changes
checkbox.addEventListener('change', function() {
    if (this.checked) {
        // Switch to content 2
        content1.style.display = 'none';
        content2.style.display = 'block';
        img.src='./img/16.jpg'
        if(backgroundMusic.played){
            backgroundMusic.pause();
        }
    } else {
        // Switch back to content 1
        content1.style.display = 'block';
        content2.style.display = 'none';
        img.src='./img/18.jpg'
        if (backgroundMusic.paused) {
            backgroundMusic.play();
          } else {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
          }
    }
});





        
