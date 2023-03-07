        // ibg function for image background
        function ibg(){
            let ibg = document.querySelectorAll(".ibg");
            for (var i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
                }
            }
        } 
        ibg();

function removeClass() {
    const element = document.querySelector(".menu__item._hover");
    element.classList.remove("_hover");
}

window.onload = function () {
    document.addEventListener('click', documentActions);

    let iconMenu = document.querySelector('.burger'); // Кнопка-крестик бургера
    iconMenu.addEventListener('click', function (e) {
        let menuBody = document.querySelector('.menu__body'); // Само меню nav
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });

    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth > 768) {
            if (targetElement.classList.contains('menu__arrow')) {
                 targetElement.closest('.menu__item').classList.toggle('_hover');
            }
            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
                removeClass();
            }
        }
        if (targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('_active');
        }else if (!targetElement.classList.contains('search-form') && document.querySelector('.search-form._active')) {
            document.querySelector('.search-form').classList.remove('_active');
        }

        if (targetElement.classList.contains('products__btn')) {
            getProducts(targetElement);
            e.preventDefault();
        }

        if (targetElement.classList.contains('actions__button')) {
            const productId = targetElement.closest('.item').dataset.pid;
            addToCart(targetElement, productId);
            e.preventDefault();
        }

        if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
            if (document.querySelector('.cart-list').children.length > 0) {
                document.querySelector('.cart-header').classList.toggle('_active');
            }
            e.preventDefault();
        } else if ( targetElement.closest('.cart-header') && !targetElement.classList.contains('actions__button')) {
            document.querySelector('.cart-header').classList.remove('_active');
            }

        if (window.innerWidth < 768) {
            if (targetElement.classList.contains('menu__arrow')) {
                 targetElement.closest('.menu__item').classList.toggle('_visible');
            }
            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._visible').length > 0) {
                removeClass();
            }
        }
        if (targetElement.classList.contains('cart-list__delete')) {
            const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
            updateCart(targetElement, productId, false);
            e.preventDefault();
        }
    }   
};
//Slider-1 in header
if(document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
        slidesPerView: 1,
        spaceBetween: 32,
        speed: 800,
        direction: 'horizontal',
        loop: true,
        parallax: true,

        pagination: {
          el: '.controls__dots',
          clickable: true,
        },

        navigation: {
          nextEl: '.slider-main .arrow_next',
          prevEl: '.slider-main .arrow_prev',
        },
      }); 
}

//Slider-2 in section rooms
if(document.querySelector('.slider__body')) {
    new Swiper('.slider__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 24,
        speed: 800,
        watchOverflow: true,
        loop: true,
        parallax: true,

        pagination: {
          el: '.slider__dotts',
          clickable: true,
        },

        navigation: {
          nextEl: '.slider__arrows .arrow_next',
          prevEl: '.slider__arrows .arrow_prev',
        },
      }); 
}

//Slider-3 in section with articles
if(document.querySelector('.slider-articles__body')) {
    new Swiper('.slider-articles__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 25,
        speed: 800,
        watchOverflow: true,
        loop: true,

        pagination: {
          el: '.slider-articles__dotts',
          clickable: true,
        },

        navigation: {
          nextEl: '.arrows-slider .arrow_next',
          prevEl: '.arrows-slider .arrow_prev',
        },
        
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 15  
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20  
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 32  
            }
        }
      }); 
}

//Gallery

const furniture = document.querySelector('.furniture__body');

if (furniture) {
    const furnitureItems = document.querySelector('.furniture__items');
    const furnitureColumn = document.querySelectorAll('.furniture__column');

    const speed = furniture.dataset.speed;

    let positionX = 0;
    let coordXprocent = 0;

    const setMouseGalleryStyle = () => {
        let furnitureItemsWidth = 0;
        furnitureColumn.forEach(element => {
            furnitureItemsWidth += element.offsetWidth;
        });

        const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
        const distX = Math.floor(coordXprocent - positionX);

        positionX = positionX + (distX * speed);
        let position = furnitureDifferent / 200 * positionX;

        furnitureItems.style.cssText = `transform: translate3d(${-position}px, 0, 0);`;

        if (Math.abs(distX) > 0) {
            requestAnimationFrame(setMouseGalleryStyle);
        } else {
            furniture.classList.remove("_init");
        }
    };

    furniture.addEventListener("mousemove", function(e) {
        const furnitureWidth = furniture.offsetWidth;

        const coordX = e.pageX - furnitureWidth / 2;

        coordXprocent = coordX / furnitureWidth * 200;

        if (!furniture.classList.contains('_init')) {
            requestAnimationFrame(setMouseGalleryStyle);
            furniture.classList.add("_init");
        }
    });
}

function addToCart(productButton, productId) {
    if (!productButton.classList.contains('_hold')) {
        productButton.classList.add('_hold');
        productButton.classList.add('_fly');
    }

    const cart = document.querySelector('.cart-header__icon');
    const product = document.querySelector(`[data-pid="${productId}"]`);
    const productImage = product.querySelector('.item__image');

    const productImageFly = productImage.cloneNode(true);

    const productImageFlyWidth = productImage.offsetWidth ;
    const productImageFlyHeight = productImage.offsetHeight;
    const productImageFlyTop = productImage.getBoundingClientRect().top;
    const productImageFlyLeft = productImage.getBoundingClientRect().left;

    productImageFly.setAttribute('class', '_flyImage ibg');
    productImageFly.style.cssText = `
    left: ${productImageFlyLeft}px;
    top: ${productImageFlyTop}px;
    width: ${productImageFlyWidth}px;
    height: ${productImageFlyHeight}px;
    `;

    document.body.append(productImageFly);

    const cartFlyLeft = cart.getBoundingClientRect().left;
    const cartFlyTop = cart.getBoundingClientRect().top;

    productImageFly.style.cssText = 
    `
    left: ${cartFlyLeft}px;
    top: ${cartFlyTop}px;
    width: 0px;
    height: 0px;
    opacity: 0;
    `;

    productImageFly.addEventListener('transitionend', function() {
        if (productButton.classList.contains('_fly')) {
            productImageFly.remove();
            updateCart(productButton, productId);
            productButton.classList.remove('_fly');
        }
    });
}

function updateCart(productButton, productId, productAdd = true) {
    const cart = document.querySelector('.cart-header');
    const cartIcon = cart.querySelector('.cart-header__icon');
    const cartQuantity = cartIcon.querySelector('span');
    const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
    const cartList = document.querySelector('.cart-list');
//Добавление в корзину товара
    if (productAdd) {
        if (cartQuantity) {
            cartQuantity.innerHTML = ++cartQuantity.innerHTML;
        } else {
            cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
        }

        if(!cartProduct) {
            const product = document.querySelector(`[data-pid="${productId}"]`);
            const cartProductImage = product.querySelector('.item__image');
            const cartProductTitle = product.querySelector('.item__title');
            const cartProductContent = `
            <a href="" class="cart-list__image ibg">${cartProductImage}</a>
            <div class="cart-list__body">
                <a href="" class="cart-list__title">${cartProductTitle}</a>
                <div class="cart-list__quantity">Quantity: <span>1</span></div>
                <a href="" class="cart-list__delete">Delete</a>
            </div>`;
            cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);
        } else {
            const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
            cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
        }

        productButton.classList.remove('_hold');
    } else {
        const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
        cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
        if (!parseInt(cartProductQuantity.innerHTML)) {
            cartProduct.remove();
        }

        const cartQuantityValue = --cartQuantity.innerHTML;

        if (cartQuantityValue) {
            cartQuantityValue.innerHTML = cartQuantityValue;
        } else {
            cartQuantity.remove();
            cart.classList.remove('_active');
        }
    }
}

//load more products
async function getProducts(button) {
    if (!button.classList.contains('_hold')) {
        button.classList.add('_hold');
        const file = "json/products.json";
        let response = await fetch(file, {
            method: "GET"
        });
        if (response.ok) {
            let result = await response.json();
            loadProducts(result);
            button.classList.remove('_hold');
            button.remove();
        } else {
            alert('Error');
        }
    }
}

function loadProducts(data) {
    const productsItems  = document.querySelector('.products__items');

    data.products.forEach(item => {
        const productId = item.id;
        const productUrl = item.url;
        const productImage = item.image;
        const productTitle = item.title;
        const productText = item.text;
        const productPrice = item.price;
        const productOldPrice = item.priceOld;
        const productShareUrl = item.shareUrl;
        const productLikeUrl = item.likeUrl;
        const productLabels = item.labels;

        let productTemplateStart = `<article data-pid="${productId}" class="products__item item">`;
		let productTemplateEnd = `</article>`;

			let productTemplateLabels = '';
			if (productLabels) {
				let productTemplateLabelsStart = `<div class="item__labels">`;
				let productTemplateLabelsEnd = `</div>`;
				let productTemplateLabelsContent = '';

				productLabels.forEach(labelItem => {
					productTemplateLabelsContent += `<div class="item__label item__label--${labelItem.type}">${labelItem.value}</div>`;
				});

				productTemplateLabels += productTemplateLabelsStart;
				productTemplateLabels += productTemplateLabelsContent;
				productTemplateLabels += productTemplateLabelsEnd;
			}

			let productTemplateImage = `
		<a href="${productUrl}" class="item__image ibg">
			<img src="img/products/${productImage}" alt="${productTitle}">
		</a>
	`;      

			let productTemplateBodyStart = `<div class="item__body">`;
			let productTemplateBodyEnd = `</div>`;

			let productTemplateContent = `
		<div class="item__content">
			<h3 class="item__title">${productTitle}</h3>
			<div class="item__item__subtitle">${productText}</div>
		</div>
	`;

			let productTemplatePrices = '';
			let productTemplatePricesStart = `<div class="item__prices">`;
			let productTemplatePricesCurrent = `<div class="item__price">Rp ${productPrice}</div>`;
			let productTemplatePricesOld = `<div class="item__price item__price--old">Rp ${productOldPrice}</div>`;
			let productTemplatePricesEnd = `</div>`;

			productTemplatePrices = productTemplatePricesStart;
			productTemplatePrices += productTemplatePricesCurrent;
			if (productOldPrice) {
				productTemplatePrices += productTemplatePricesOld;
			}
			productTemplatePrices += productTemplatePricesEnd;

			let productTemplateActions = `
            <div class="item__actions actions">
                <div class="actions__body">
                    <button class="actions__button btn btn-reset btn--card">Add to cart</button>
                    <div class="actions__links">
                        <a href="#" class="actions__link _icon-share">Share</a>
                        <a href="#" class="actions__link _icon-favorite">Link</a>
                    </div>
                </div>
            </div>
	`;

			let productTemplateBody = '';
			productTemplateBody += productTemplateBodyStart;
			productTemplateBody += productTemplateContent;
			productTemplateBody += productTemplatePrices;
			productTemplateBody += productTemplateActions;
			productTemplateBody += productTemplateBodyEnd;

			let productTemplate = '';
			productTemplate += productTemplateStart;
			productTemplate += productTemplateLabels;
			productTemplate += productTemplateImage;
			productTemplate += productTemplateBody;
			productTemplate += productTemplateEnd;

            productsItems.insertAdjacentHTML('beforeend', productTemplate);
    });
    ibg();
}

