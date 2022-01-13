const bar = document.querySelector(".fa-bars");
const ul = document.querySelector("ul");

bar.addEventListener('click', () => {
    ul.classList.toggle("active");
})


function Circle(el)
{
    $(el).circleProgress({fill: {color: '#099FFF'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        $(this).find('strong').text(String(stepValue.toFixed(2)).substring(2)+'%');
    });
};

Circle('.round');

