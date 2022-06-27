



var pageTypes = ['A Tribute Page', 'A Survey', 'A Newsletter', 'An Event Page', 'A Prize Draw', 'A Music Page', 'A Photo Galery', 'An Advertisement', 'A Quiz'];
var pageTopics = ['The Matrix', 'Harry Potter', 'Kung Fu Movies', 'Nigerian Food', 'Emma Watson', 'Will Smith', 'Jamaican Music', 'Elvis Presley', 'Bill Nye the Science Guy', 'Steve Jobs'];
var htmlTags = ['<img>', '<h1> - <h6>', '<form>', '<input>', '<button>', 'comments <!-- -->', '<hr>', '<strong>', '<blockquote>', '<u>', '<a>', '<sup>'];
var cssProperties =['border-radius', 'box-shadow', 'text-align', 'background-color', '::hover', 'position', 'transform', 'line-height', 'font-family', 'overflow'];

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


//find design brief elements

var designBrief = document.getElementById('designBriefText');

var pageTypeBrief = document.getElementById('pageTypeBrief');
var pageThemeBrief = document.getElementById('pageThemeBrief');

// html tags brief
var htmlTagBrief1 = document.getElementById('htmlTagBrief1');
var htmlTagBrief2 = document.getElementById('htmlTagBrief2');
var htmlTagBrief3 = document.getElementById('htmlTagBrief3');
var htmlTagBrief4 = document.getElementById('htmlTagBrief4');

// CSS propertiess brief
var cssPropBrief1 = document.getElementById('cssPropBrief1');
var cssPropBrief2 = document.getElementById('cssPropBrief2');
var cssPropBrief3 = document.getElementById('cssPropBrief3');
var cssPropBrief4 = document.getElementById('cssPropBrief4');


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
    
    // choose random page 
    var randomTopicIndex = getRandomInt(pageTopics.length);
    //insert suggested pageTopic
    topicSuggestion.innerText = pageTopics[randomTopicIndex];

    //choose random html tags
    var randomHtmlIndex1 = getRandomInt(htmlTags.length);
    var randomHtmlIndex2 = getRandomInt(htmlTags.length);
    var randomHtmlIndex3 = getRandomInt(htmlTags.length);
    var randomHtmlIndex4 = getRandomInt(htmlTags.length);

    // check that all prompts are different
    while(randomHtmlIndex2 === randomHtmlIndex1){
        randomHtmlIndex2 = getRandomInt(htmlTags.length);
    };

    while(randomHtmlIndex3 === randomHtmlIndex1 || randomHtmlIndex3 === randomHtmlIndex2){
        randomHtmlIndex3 = getRandomInt(htmlTags.length);
    };

    while(randomHtmlIndex4 === randomHtmlIndex1 || randomHtmlIndex4 === randomHtmlIndex2 || randomHtmlIndex4 === randomHtmlIndex3){
        randomHtmlIndex4 = getRandomInt(htmlTags.length);
    };

    // insert html tag suggestions
    htmlTag1.innerText = htmlTags[randomHtmlIndex1];
    htmlTag2.innerText = htmlTags[randomHtmlIndex2];
    htmlTag3.innerText = htmlTags[randomHtmlIndex3];
    htmlTag4.innerText = htmlTags[randomHtmlIndex4];



    //choose random CSS props
    var randomCSSIndex1 = getRandomInt(cssProperties.length);
    var randomCSSIndex2 = getRandomInt(cssProperties.length);
    var randomCSSIndex3 = getRandomInt(cssProperties.length);
    var randomCSSIndex4 = getRandomInt(cssProperties.length);

    // check that all prompts are different
    while(randomCSSIndex2 === randomCSSIndex1){
        randomCSSIndex2 = getRandomInt(cssProperties.length);
    };

    while(randomCSSIndex3 === randomCSSIndex1 || randomCSSIndex3 === randomCSSIndex2){
        randomCSSIndex3 = getRandomInt(cssProperties.length);
    };

    while(randomCSSIndex4 === randomCSSIndex1 || randomCSSIndex4 === randomCSSIndex2 || randomCSSIndex4 === randomCSSIndex3){
        randomCSSIndex4 = getRandomInt(cssProperties.length);
    };

    // insert CSS property suggestions
    cssProp1.innerText = cssProperties[randomCSSIndex1];
    cssProp2.innerText = cssProperties[randomCSSIndex2];
    cssProp3.innerText = cssProperties[randomCSSIndex3];
    cssProp4.innerText = cssProperties[randomCSSIndex4];



    //change design brief
    pageTypeBrief.innerText = pageTypes[randomTypeIndex].toLowerCase();
    pageThemeBrief.innerText = pageTopics[randomTopicIndex];

    htmlTagBrief1.innerText = htmlTags[randomHtmlIndex1];
    htmlTagBrief2.innerText = htmlTags[randomHtmlIndex2];
    htmlTagBrief3.innerText = htmlTags[randomHtmlIndex3];
    htmlTagBrief4.innerText = htmlTags[randomHtmlIndex4];

    cssPropBrief1.innerText = cssProperties[randomCSSIndex1];
    cssPropBrief2.innerText = cssProperties[randomCSSIndex2];
    cssPropBrief3.innerText = cssProperties[randomCSSIndex3];
    cssPropBrief4.innerText = cssProperties[randomCSSIndex4];
};


newThemeButton.addEventListener('click', clickGenerateButton);


//comment out the HTML with element ID's for reference / reduce typos by copy and pasting element ID

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
</div> 

<div class="sectionContent designBrief">
                <p id="designBrief">
                    This week, to practice my HTML and CSS skills, 
                    I have made <span id="pageTypeBrief">(insert page type)</span> 
                    about <span id="pageThemeBrief">(insert page theme)</span>.
                    To make this project, I challenged myself to use the <span id="htmlTagBrief1">h1</span>, <span id="htmlTagBrief2">h2</span>, <span id="htmlTagBrief3">img</span>, <span id="htmlTagBrief4">form</span> tags in HTML.
                    I also practiced using the <span id="cssPropBrief1">background-color</span>, <span id="cssPropBrief2">width</span>, <span id="cssPropBrief3">text-align</span>, <span id="cssPropBrief4">margin</span> to style the page</p>
            </div>

*/}