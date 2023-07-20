var imgEL = document.getElementById("imgOutput");
var quoteEL = document.getElementById("quoteOutput");
var authorEL = document.getElementById("authorOutput");

var arrayOfQuotes = [
    {
        'quote': '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
        'author': '― Albert Einstein'
    },
    {
        'quote': '“So many books, so little time.”',
        'author': '― Frank Zappa'
    },
    {
        'quote': '“Be yourself; everyone else is already taken.”',
        'author': '― Oscar Wilde'
    },
    {
        'quote': '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',
        'author': '― Bernard M. Baruch'
    },
    {
        'quote': '“A room without books is like a body without a soul.”',
        'author': '― Marcus Tullius Cicero'
    },
    {
        'quote': '“Be the change that you wish to see in the world.”',
        'author': '― Mahatma Gandhi'
    },
    {
        'quote': '“A friend is someone who knows all about you and still loves you.”',
        'author': '― Elbert Hubbard'
    },
    {
        'quote': '“Here\'s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They\'re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can\'t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”',
        'author': '― Steve Jobs'
    },
    {
        'quote': '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
        'author': '― Ralph Waldo Emerson'
    },
    {
        'quote': '“It is better to be hated for what you are than to be loved for what you are not.”',
        'author': '― Andre Gide, Autumn Leaves'
    },
    {
        'quote': '“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”',
        'author': '― Marilyn Monroe'
    },
    {
        'quote': '“You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening And live like it\'s heaven on earth.”',
        'author': '― William W. Purkey'
    },
    {
        'quote': '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”',
        'author': '― Dr. Seuss'
    },
    {
        'quote': '“You only live once, but if you do it right, once is enough.”',
        'author': '― Mae West'
    },
    {
        'quote': '“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.”',
        'author': '― J.K. Rowling, Harry Potter and the Goblet of Fire'
    },
    {
        'quote': '“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”',
        'author': '― Albert Camus'
    },
    {
        'quote': '“I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
        'author': '― Maya Angelou'
    }
]

var arr = [];

function quoteGenerator() {
    var r1 = Math.floor(Math.random() * 17);
    var r2 = Math.floor(Math.random() * (6-1) + 1);
    arr.push(arrayOfQuotes[r1])

    if (arr[arr.length-1] == arr[arr.length-2]) {
        if (r1 <= 11) {
            r1 += r2
        }else {
            r1 -= r2
        }
    }

    
    imgEL.innerHTML = '<img src="images/'+(r1+1)+'.jpg" alt="Quotes" class="img-thumbnail rounded-circle img"/>';
    quoteEL.innerHTML = arrayOfQuotes[r1].quote;
    authorEL.innerHTML = arrayOfQuotes[r1].author;
    console.log("r1: " + r1);
}