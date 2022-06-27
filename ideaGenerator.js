



var pageTypes = ['A tribute page', 'A survey', 'A newsletter', 'An event page', 'A prize draw', 'A music page', 'A photograph galery', 'An advertisement', 'A quiz', 'A CV'];
var pageTopics = ['The Matrix', 'Harry Potter', 'Kung Fu Movies', 'Nigerian Food', 'Emma Watson', 'Will Smith', 'Jamaican Music', 'Elvis Presley', 'Bill Nye the Science Guy', 'Steve Jobs', ''];
var htmlTags = ['img', 'h1 - h6', 'form', 'input', 'button', 'comments', 'hr', 'strong', 'blockquote', 'u', 'a', 'sup'];
var cssProperties =['border-radius', 'box-shadow', 'text=sjadpw', 'background-color', '::hover', 'position', 'transform', 'line-height', 'font-family', 'overflow'];

console.log('ideaGenerator.js Loaded');

// find all mutable elements of the generator on page
var newThemeButton = document.getElementById('newThemeButton');

var pageTypeSuggestion = document.getElementById('pageTypeSuggestion');
var topicSuggestion = document.getElementById('topicSuggestion');

// html tag suggestions elements
var htmlTag1 = document.getElementById('htmlTag1');
var htmlTag2 = document.getElementById('htmlTag2');
var htmlTag3 = document.getElementById('htmlTag3');
var htmlTag4 = document.getElementById('htmlTag4');

// css property suggestion elements

var cssProp1 = document.getElementById('cssProp1');
var cssProp2 = document.getElementById('cssProp2');
var cssProp3 = document.getElementById('cssProp3');
var cssProp4 = document.getElementById('cssProp4');


// functions

// get random list integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

function clickGenerateButton() {
    console.log('newThemeButton has been clicked')

    //choose random page type index
    var randomTypeIndex = getRandomInt(pageTypes.length);
    //insert suggested pageType
    pageTypeSuggestion.innerText = pageTypes[randomTypeIndex];
    var randomTopicIndex = getRandomInt(pageTopics.length);

};


newThemeButton.addEventListener('click', clickGenerateButton);


//HTML with element ID's for reference
{/* <div class="gridRow">
    <div class="gridSection">Page Type: </div> 
    <div id="pageTypeSuggestion" class="gridSection">Fan Page</div>
</div>

<div class="gridRow">
    <div class="gridSection">Page Topic:</div> 
    <div id="topicSuggestion" class="gridSection">The Matrix</div>
</div>


<div class="gridRow">
    <div class="gridSection">Using the HTML Tags: </div> 
    <div id="htmlTagSuggestion" class="gridSection"><span id="htmlTag1">h1</span>, <span id="htmlTag2">h2</span>, <span id="htmlTag3">img</span>, <span id="htmlTag4">form</span></div>
</div>

<div class="gridRow">
    <div class="gridSection">Using the CSS properties: </div> 
    <div id="cssPropSuggestion" class="gridSection"><span id="cssProp1">background-color</span>, <span id="cssProp2">width</span>, <span id="cssProp3">text-align</span>, <span id="cssProp4">margin</span></div>
</div> */}