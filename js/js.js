const model_presentatiom = document.getElementsByClassName("model_presentation")
function deleteBlock(){
    for (let i = 0; i < model_presentatiom.length; i++){
        model_presentatiom[i].style.display = "none"
    }
}

function model_presentation_1(){
    model_presentatiom[0].style.display = "block"
}

function model_presentation_2(){
    model_presentatiom[1].style.display = "block"
}

//animation of elements section

const animeItems = document.querySelectorAll('.anim');

if (animeItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animeItems.length; index++){
            const animeItem = animeItems[index];
            const animeItemHeight = animeItem.offsetHeight;
            const animeItemOffset = offset(animeItem).top;
            const animeStart = 4;

            let animeItemPoint = window.innerHeight - animeItemHeight / animeStart;
            if (animeItemHeight > window.innerHeight){
                animeItemPoint = window.innerHeight - window.innerHeight / animeStart;
            }

            if ((window.pageYOffset > animeItemOffset - animeItemPoint) && window.pageYOffset < (animeItemOffset + animeItemHeight)) {
                animeItem.classList.add('active');
            } else {
                if (!animeItem.classList.contains('anim-no')){
                    animeItem.classList.remove('active')
                }
            }

        }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollleft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollleft}
    }

    }
    setTimeout(() => {
        animOnScroll(); 
    }, 300);
}

const siteHeight = document.documentElement.scrollHeight;
const hrcolumn = document.getElementsByClassName("hr2")[0]
hrcolumn.style.height = siteHeight + "px";