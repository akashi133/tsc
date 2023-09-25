// Определение типов данных для цитат и генератора цитат

// Тип Quote описывает объект цитаты с двумя полями: text (текст цитаты) и author (автор цитаты).
type Quote = {
    text: string;
    author: string;
};

// Тип QuoteGenerator описывает объект-генератор цитат с одним методом getRandomQuote,
// который возвращает случайную цитату.
type QuoteGenerator = {
    getRandomQuote: () => Quote;
};

// Функция createQuoteGenerator создает и возвращает объект-генератор цитат на основе переданного массива цитат.
function createQuoteGenerator(quotes: Quote[]): QuoteGenerator {
    // Внутри функции определена вложенная функция getRandomQuote,
    // которая будет использоваться для получения случайных цитат.
    function getRandomQuote(): Quote {
        // Генерируем случайный индекс, который будет использоваться для выбора цитаты из массива.
        const randomIndex = Math.floor(Math.random() * quotes.length);
        // Возвращаем выбранную цитату.
        return quotes[randomIndex];
    }

    // Возвращаем объект с методом getRandomQuote.
    return {
        getRandomQuote,
    };
}

// Массив цитат, который будет использоваться для генерации случайных цитат.
const quotes: Quote[] = [
    {
        text: 'Жизнь — это то, что с тобой происходит, пока ты занят делами.',
        author: 'Джон Леннон',
    },
    {
        text: 'Успех — это способность идти от одной неудачи к другой, не потеряв энтузиазма.',
        author: 'Уинстон Черчилль',
    },
    {
        text: 'Сложности воспринимай как вызовы, а не как преграды.',
        author: 'Джон Ф. Кеннеди',
    },
];

// Создаем объект quoteGenerator с помощью функции createQuoteGenerator,
// передавая ей массив цитат.
const quoteGenerator = createQuoteGenerator(quotes);

// Генерируем случайную цитату и выводим ее на консоль
const randomQuote = quoteGenerator.getRandomQuote();
console.log(`"${randomQuote.text}" - ${randomQuote.author}`);

// Выводим на консоль строку '23232324'.
console.log('23232324');
