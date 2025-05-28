const books = [
    {
        author: 'Джейн Остин',
        name: 'Гордость и предупреждение',
        publicationYear: 1813,
        price: 350,
        bestseller: true,
        available: true
    },
    {
        author: 'Джоан Роулинг',
        name: 'Гарри Поттер и тайная комната',
        publicationYear: 1998,
        price: 800,
        bestseller: false,
        available: true
    },
    {
        author: 'Майк Омер',
        name: 'Как ты умрешь',
        publicationYear: 2021,
        price: 1000,
        bestseller: true,
        available: false
    },
    {
        author: 'Гейл Форман',
        name: 'Если я останусь',
        publicationYear: 2009,
        price: 550,
        bestseller: true,
        available: true
    },
    {
        author: 'Джейми Макгвар',
        name: 'Мое прекрасное несчастье',
        publicationYear: 2023,
        price: 700,
        bestseller: false,
        available: true
    },
    {
        author: 'Джон Грей',
        name: 'Мужчины с марса женщины с венеры',
        publicationYear: 1992,
        price: 1000,
        bestseller: true,
        available: false
    },
    {
        author: 'Федор Достаевский',
        name: 'Преступление и наказание',
        publicationYear: 1866,
        price: 400,
        bestseller: false,
        available: true
    },
    {
        author: 'Лев Толстой',
        name: 'Анна Каренина',
        publicationYear: 1877,
        price: 500,
        bestseller: true,
        available: true
    },
    {
        author: 'Михаил Булгаков',
        name: 'Мастер и Маргарита',
        publicationYear: 1967,
        price: 950,
        bestseller: false,
        available: false
    },
    {
        author: 'Джоржд Оруэлл',
        name: '1984',
        publicationYear: 1949,
        price: 500,
        bestseller: true,
        available: true
    }
];

function showBooks() {
    const bookList = document.getElementById('bookList');
    let html = '';

    for(let i = 0; i < books.length; i++) {
        const book = books[i];
        const isAvailable = book.available;
        const isBestseller = book.bestseller;

        let bookClass = 'book-item';
        if (isBestseller) {
            bookClass += ' bestseller';
        }
        if (!isAvailable) {
            bookClass += ' unavailable';
        }

        html += `
            <div class="${bookClass}">
                <b>${book.author}</b>
                <i>${book.name}</i>
                &mdash; ${book.publicationYear}
                - Цена: ${book.price} руб.
                ${isAvailable ? '' : '<span class="unavailable-text"> (Нет в наличии)</span>'}
            </div>
        `;
    }
    bookList.innerHTML = html;
}