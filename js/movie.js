//слайдер
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow__slides");
    let dots = document.getElementsByClassName("slideshow__dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active2";
}


//API с фильмами
//EY98ZH1-RBT4RZH-H5BT7MP-KAZT7FJ 
const API_key = 'EY98ZH1-RBT4RZH-H5BT7MP-KAZT7FJ';

//Ссылка на payment.html в JSON'е, по-другому добавление через js не работает 
var payRedirectLink = `[{
    "link": "../htmls/payment.html"
}]`;

document.addEventListener("DOMContentLoaded", function (event) {
    let moviesContent = "";
    let payHref = JSON.parse(payRedirectLink); //payment.html link

    fetch(`https://api.kinopoisk.dev/collection?token=${API_key}&search=top_items_all&field=collectionId`)
        .then(response => response.json())
        .then(movie => {
            for (let i = 0; i < 10; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.movies[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.movies[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.movies[i].poster.previewUrl}>
                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${movie.movies[i].name}, ${movie.movies[i].year}</p>
                            <img class = "movie__img" src = ${movie.movies[i].poster.previewUrl}>
                            <p class="movie__description">${movie.movies[i].description}</p>
                            <a href='${payHref[0].link}' class="movie__link">Смотреть</a>
                        </div>
                    </div>
                </div>
                `
            }
            document.querySelector(".movies__popular").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));



    fetch(`https://api.kinopoisk.dev/movie/?token=${API_key}&field=top250&search=!null&field=genres.name&search=%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5`)
        .then(response => response.json())
        .then(movie => {
            moviesContent = "";
            for (let i = 0; i < 5; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                    
                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${movie.docs[i].name}, ${movie.docs[i].year}</p>
                            <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                            <p class="movie__description">${movie.docs[i].description}</p>
                            <a href='${payHref[0].link}' class="movie__link">Смотреть</a>
                        </div>
                    </div>
                </div>
                
                `
            }
            document.querySelector(".movies__anime").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));

    fetch(`https://api.kinopoisk.dev/movie/?token=${API_key}&field=top250&search=!null&field=genres.name&search=%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0`)
        .then(response => response.json())
        .then(movie => {
            moviesContent = "";
            for (let i = 0; i < 5; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>

                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${movie.docs[i].name}, ${movie.docs[i].year}</p>
                            <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                            <p class="movie__description">${movie.docs[i].description}</p>
                            <a href='${payHref[0].link}' class="movie__link">Смотреть</a>
                        </div>
                    </div>
                </div>`
            }
            document.querySelector(".movies__fantastika").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));

    fetch(`https://api.kinopoisk.dev/movie/?token=${API_key}&field=top250&search=!null&field=genres.name&search=%D0%B4%D1%80%D0%B0%D0%BC%D0%B0`)
        .then(response => response.json())
        .then(movie => {
            moviesContent = "";
            for (let i = 0; i < 5; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>

                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${movie.docs[i].name}, ${movie.docs[i].year}</p>
                            <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                            <p class="movie__description">${movie.docs[i].description}</p>
                            <a href='${payHref[0].link}' class="movie__link">Смотреть</a>
                        </div>
                    </div>
                </div>`
            }
            document.querySelector(".movies__drama").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));
})

//Модальное окно
const movieContainer = document.querySelector('.movies');
movieContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('movie__img')) {
        const parentDiv = event.target.parentNode;
        //console.log(parentDiv)
        let movie2 = parentDiv.querySelector(".movie2");
        movie2.style.display = "block";
        window.onclick = function (event) {
            if (event.target == movie2) {
                movie2.style.display = "none";
            }
        }
    }
})