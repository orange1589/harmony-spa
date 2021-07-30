/*==============================================================*/
/*=========================Slick slider=========================*/
/*==============================================================*/

$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1191,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 996,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});
});

/*==============================================================*/
/*==========================Burger menu=========================*/
/*==============================================================*/

let mainBurger = document.getElementsByClassName('burger-background__burger');
let mainMenu = document.getElementsByClassName('background-header__menu');

mainBurger[0].onclick = function () {
	mainBurger[0].classList.toggle('burger-active');
	mainMenu[0].classList.toggle('menu-active');

	const listMenu = document.querySelectorAll('.background-header__menu')
	const listBurger = document.querySelectorAll('.burger-background__burger')
	listMenu.forEach(item => {
		item.addEventListener('click', (e) => {
			listMenu.forEach(el => { el.classList.remove('menu-active'); });
			listBurger.forEach(el => { el.classList.remove('burger-active'); });
		})
	})

}

/*==============================================================*/
/*========================Select options========================*/
/*==============================================================*/
const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
	if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.setAttribute('data-state', '');
	} else {
		selectSingle.setAttribute('data-state', 'active');
	}
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
	selectSingle_labels[i].addEventListener('click', (evt) => {
		selectSingle_title.textContent = evt.target.textContent;
		selectSingle.setAttribute('data-state', '');
	});
}

