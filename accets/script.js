const img =document.getElementById('catimage');

img.addEventListener('mouseover', function(event) {
    event.target.src = 'cat/Loadingcat.gif';
    console.log('mouseover')
});

img.addEventListener('mouseout', function(event) {
    event.target.src = 'cat/Catmeme.png';
    console.log('mouseout')
});


const btn =document.getElementById('clickme');

btn.addEventListener('mouseover', function(event){
    console.log(event.target.style);
});
btn.addEventListener('mouseout', function(event){
    console.log(event.target);
});