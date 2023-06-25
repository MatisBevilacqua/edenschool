const main = document.querySelector('.main');

const news = [
    {
        title: 'Tik tok versus facebook',
        sub: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eum vitae alias. Adipisci accusamus perspiciatis rem, rerum tempore blanditiis reprehenderit natus ratione voluptatum quis eius voluptate, laboriosam veritatis. Temporibus, assumenda?',
        open: false
    },

    {
        title: "Eden school",
        sub: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eum vitae alias. Adipisci accusamus perspiciatis rem, rerum tempore blanditiis reprehenderit natus ratione voluptatum quis eius voluptate, laboriosam veritatis. Temporibus, assumenda?',
        open: false
    }
]

for(const n of news){
    const article = document.createElement('article');
    article.className = 'news__card';
    main.appendChild(article);

    const img = document.createElement('img'); 
    img.alt = "photo de l'article";
    img.src = './assets/img/thumb.png'
    img.className = 'news__img';
    article.appendChild(img);

    const newsTxt = document.createElement('div');
    newsTxt.className = 'news__txt';
    article.appendChild(newsTxt);
    
    const containerTitle = document.createElement('div');
    containerTitle.className = 'container__title';
    newsTxt.appendChild(containerTitle);
    
    const newsTitle = document.createElement('h2');
    newsTitle.className = 'news__title';
    newsTitle.textContent = n.title;
    containerTitle.appendChild(newsTitle);

    const solid = document.createElement('i');
    solid.className = 'fa-solid fa-arrow-rotate-right';
    containerTitle.appendChild(solid);

    const containerTxt = document.createElement('div');
    containerTxt.className = 'container__txt';
    newsTxt.appendChild(containerTxt);


    const newsSub = document.createElement('p');
    newsSub.className = 'news__sub';
    newsSub.textContent = n.sub;
    containerTxt.appendChild(newsSub);
}

const buttonSlide = document.querySelectorAll('.fa-solid');
const containerTxt = document.querySelectorAll('.container__txt');
const newsImg = document.querySelectorAll('.news__img');

for(const button in buttonSlide){
    buttonSlide[button].addEventListener('click', () => {

        if(news[button].open){
            newsImg[button].style.display = 'none';
            containerTxt[button].style.display = 'none';
            news[button].open = false;
            console.log(news);
        }else{
            newsImg[button].style.display = 'block';
            containerTxt[button].style.display = 'block';
            news[button].open = true;
            console.log(news);
        }
    })
}