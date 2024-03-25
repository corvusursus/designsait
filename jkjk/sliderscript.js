let slider = [{title: 'Rostov-on-Don, Admiral',
    src: 'slider_photo/image 2.1.jpg' ,
    city: `Sochi ThievesRostov-on-Don LCD admiral`,
    area: '81 m2',
    time: '3.5 months',
    },
    {title: 'Sochi Thieves',
    src: 'slider_photo/image 2-2.jpg' ,
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
}, 
    {title: 'Rostov-on-Don Patriotic',
    src: '/slider_photo/image 3-3.jpg' ,
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
}
]

let projectsLink = document.querySelector('.projects__link');
let cardPhoto = document.querySelector('.card__photo');
let rightArrow = document.querySelector('.slider__arrow_right');
let leftArrow = document.querySelector('.slider__arrow_left');
let city = document.querySelector('.city');
let area = document.querySelector('.area');
let repairTime = document.querySelector('.repair_time');
let sliderPoint = document.querySelector('.slider__point');

const setEntity = (index) => {
    cardPhoto.src = slider[index].src;
    city.textContent = slider[index].city;
    area.textContent = slider[index].area;
    repairTime.textContent = slider[index].time;
    sliderPoint.forEach((item, key) => {
        if (key === index){
            item.classList.add('active');
        } else {
            if (item.hasClass('active')) item.classList.remove('active');
        }
    })
}

currentIndex = 0;

rightArrow.addEventListener('click', () => {
    if (currentIndex === slider.length - 1){
        currentIndex = 0;
    } else {
        currentIndex +=1
    }
    setEntity(currentIndex);
    });

leftArrow.addEventListener('click', () => {
    if (currentIndex === 0 ){
        currentIndex = slider.length - 1;
    } else {
        currentIndex -= 1;
    }
    setEntity(currentIndex);
    });