/*stuff for clicking on images*/

var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");
var closeButton = document.querySelector('.close-button');

document.querySelectorAll('img[data-modal-target]').forEach(img => {
    img.onclick = function(event) {
        modal.style.display = "block";
        modalImage.src = this.src;


        var rect = modalImage.getBoundingClientRect();
        closeButton.style.top = (rect.top - closeButton.offsetHeight) + 'px'; 
        closeButton.style.left = (rect.left - closeButton.offsetWidth) + 'px'; 
    }
});

closeButton.onclick = function() {
    modal.style.display = "none";
}