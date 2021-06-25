'use strict'

///////////////////////
// Variables. 

let changeBtn = document.getElementById('loadQuote');
let quote = document.getElementById('quote');
let source = document.getElementById('source');
let body = document.querySelector('body');

let quotes = [
    {
        quote: "\"It isn't sufficient just to want - you've got to ask yourself what you are going to do to get the things you want.\"",
        source: "- Richard D. Rosen",
        tag: "Planning"
    },
    {
        quote: "\"Doing what you like is freedom. Liking what you do is happiness.\"",
        source: "- Frank Tyger",
        tag: "Motivation"
    },
    {
        quote: "\"Failure cannot cope with persistence.\"",
        source: "- Napoleon Hill",
        tag: "Business"
    },
    {
        quote: "\"Success is not counted by how high you have climbed but by how many people you brought with you.\"",
        source: "- Wil Rose",
        tag: "Motivation"
    },
    {
        quote: "\"If a book about failures doesn’t sell, is it a success?\"",
        source: "- Jerry Seinfeld",
        tag: "Humor"
    },
    {
        quote: "\"A lie gets halfway around the world before the truth has a chance to get its pants on.\"",
        source: "- Winston S. Churchill",
        tag: "Humor"
    },
]
//Array of colors for background color change
let backgroundColors = [
    "#72C9A9",
    "#F25D30",
    "#b6c917",
    "#48eb34",
    "#94C5E8",
    "#FF3DA4",
    "#FF0C10",
    "#10f2eb",
    "#514fbd",
    "#59D689"
];


///////////////////////
//Function that returns a random quote.
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

//Function that returns a new color.
function NewBackgroundColors() {
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
}


//Function that writes new info to page and changes background color
function PrintQuote() {
    let randomQuote = getRandomQuote();
    let randomColor = NewBackgroundColors();
    quote.textContent = randomQuote.quote;
    source.textContent = randomQuote.source;
    body.style.backgroundColor = randomColor;
}


///////////////////////
// Event Listners. 
changeBtn.addEventListener('click', function () {
    PrintQuote();
})

///////////////////////
// New Quote after 20 seconds.

setTimeout(function () {
    PrintQuote();
}, 20000);
