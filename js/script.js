let search = document.querySelector('#search')
let allImg = document.querySelectorAll('.promo__adv img')
let plod = document.querySelector('.promo__genre')
let promo__bg = document.querySelector('.promo__bg')
let promo__adv_title = document.querySelector('.promo__adv-title')
let promo__interactive = document.querySelector('.promo__interactive-list')
let promo__menu = document.querySelectorAll('.promo__menu-list li')

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
}

const delAdvertising = () => {
    allImg.forEach(img => {
        function rem() {
            img.remove()
        }
        rem()
    })
}

promo__adv_title.onclick = () => {
    delAdvertising()
}

promo__bg.style.backgroundImage = `url("./img/bg.jpg")`

search.onkeyup = () => {
    let fill = movieDB.movies.filter(item => item.toLowerCase().includes(search.value.toLowerCase()))
    reload(fill)
}

promo__menu.forEach(btn => {
    btn.onclick = () => {
        promo__menu.forEach(el => el.classList.remove('promo__menu-item_active'))
        btn.classList.add('promo__menu-item_active')
    }
})

const reload = (arr) => {
    promo__interactive.innerHTML = ''

    for (let item of arr) {
        let one = document.createElement('ol')
        let del = document.createElement('div')
        let li = document.createElement('li')

        li.classList.add('promo__interactive-item')
        li.innerHTML = item
        del.classList.add('delete')

        one.append(li)
        li.append(del)
        promo__interactive.append(one)

        del.onclick = () => {
            li.remove()
        }
    }

}

reload(movieDB.movies)


'use strict';