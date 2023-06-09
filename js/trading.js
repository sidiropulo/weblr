const JsonLoc = `[{
    "title":"Virtual Reality Gaming",
    "about":"С учетом развития и постепенной доступностью VR-технологий многие крупные игровые компании уходят в эту отрасль для создания новых проектов: некоторые крупные игры стали получать поддержку VR для завлечения новой аудитории (Resident Evil7, Grand Turismo Sport); а другие стали чисто эксклюзивами для платформы виртуальной реальности (Half Life Alyx, Boneworks). Появились полноценные конкурирующие между собой устройства для доступа к VR: HTC VIVE, Playstation VR, Oculus Rift и многие другие. Технологии сделали серьезный шаг вперед и в будущем мы увидим еще ни мало достижений в этой области.",
    "class":"first",
    "urlAlternate":"https://previews.123rf.com/images/artissp/artissp1704/artissp170400183/76806884-bangkok-thailand-august-7-2016-an-iphone-user-playing-pokemon-go-game-in-supermarket-of-department-s.jpg",
    "url":"https://previews.123rf.com/images/artissp/artissp1704/artissp170400183/76806884-bangkok-thailand-august-7-2016-an-iphone-user-playing-pokemon-go-game-in-supermarket-of-department-s.jpg"
},{
    "title":"Medical Sphere",
    "about":"Эта технология может спасти жизни, показывая, где поблизости есть дефибрилляторы. Если человек рядом с вами внезапно упал в обморок, то, независимо от того, будете ли вы думать о том, чтобы вызвать скорую помощь, врача или его маму, вы обязательно потянетесь к телефону. Но уже существуют приложения, которые помогут в такой ситуации. Например, приложение AED4EU, созданное в Медицинского центра университета Радбоуда в Неймегене (Нидерланды). Его пользователи могут добавлять места, где расположены автоматические наружные дефибрилляторы, которые уже чаcто можно встретить в европейских и американских городах, и доступ к этой базе данных можно получить через новое приложение.",
    "class":"second",
    "urlAlternate":"https://static.packt-cdn.com/products/9781787286436/graphics/784829eb-8b37-4718-8cfc-55e13a9152c2.jpg",
    "url":"https://static.packt-cdn.com/products/9781787286436/graphics/784829eb-8b37-4718-8cfc-55e13a9152c2.jpg"
},{
    "title":"Military Field",
    "about":"В армии дополненная реальность может служить как сетевая коммуникационная система, которая сканирует поле боя и выдает информацию в режиме он-лайн непосредственно на очки солдата. С точки зрения солдата, люди и объекты могут быть обозначены специальными индикаторами, для предупреждения о потенциальной опасности. Виртуальные карты и 360 панорамы получаемые с камеры очков, могут быть использованы для более точной навигации и прогнозирования наступления, кроме этого вся информация передается в главный командный центр.",
    "class":"third",
    "urlAlternate":"https://i.ytimg.com/vi/b2vmCToGZJc/maxresdefault.jpg",
    "url":"https://i.ytimg.com/vi/b2vmCToGZJc/maxresdefault.jpg"
}]`;


//Ссылка на payment.html в JSON'е, по-другому добавление через js не работает 
var guideRedirectLink = `[{
    "link": "../htmls/main.html"
}]`;

document.addEventListener('DOMContentLoaded', (e)=>{

    const locations = JSON.parse(JsonLoc);
    console.log(locations.length);
    let moviesContent = "";
    let GuideHref = JSON.parse(guideRedirectLink); //guide.html link

                for (let i = 0; i < locations.length; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__rating">${locations[i].title}</p>
                    <img class = "movie__img" src =${locations[i].url}>
                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${locations[i].title}</p>
                            <img class = "movie__img alternate" src =${locations[i].urlAlternate}>
                            <p class="movie__description">${locations[i].about}</p>
                            <a href='${GuideHref[0].link}' class="movie__link">Подробнее</a>
                        </div>
                    </div>
                </div>
                `
            }
            document.querySelector(".movies__popular").innerHTML = moviesContent;
});

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
});