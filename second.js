function createQuoteGenerator(quotes) {
    function getRandomQuote() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
    return {
        getRandomQuote: getRandomQuote,
    };
}
var quotes = [
    {
        text: "Жизнь — это то, что с тобой происходит, пока ты занят делами.",
        author: "Джон Леннон",
    },
    {
        text: "Успех — это способность идти от одной неудачи к другой, не потеряв энтузиазма.",
        author: "Уинстон Черчилль",
    },
    {
        text: "Сложности воспринимай как вызовы, а не как преграды.",
        author: "Джон Ф. Кеннеди",
    },
];
var quoteGenerator = createQuoteGenerator(quotes);
// Генерируем случайную цитату и выводим ее на консоль
var randomQuote = quoteGenerator.getRandomQuote();
console.log("\"".concat(randomQuote.text, "\" - ").concat(randomQuote.author));
