document.body.style.fontFamily = 'sans-serif';

// Function To Create Elements
let createElements = (el) => document.createElement(`${el}`);


// Create Elements
let container = createElements('div');
let heading = createElements('h1');
let paragraph = createElements('p');
let parent = createElements('div');

container.className = 'container';
heading.textContent = 'Area Calculator';
paragraph.textContent = 'Choose Shape Do You Want To Use It!';

// Add Style To Elements
heading.style.textAlign = 'center';
paragraph.style = 'text-align:center; font-size: 30px;';
parent.style = 'display: flex; justify-content: space-around;';

// Create Square Element
let squareDiv = createElements('div');
let squareHref = createElements('a');
let square = createElements('img');
let squareContent = createElements('div');

squareDiv.append(squareHref, squareContent);
squareHref.append(square);
squareHref.style.cursor = 'pointer';
square.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/640px-Square_-_black_simple.svg.png';
square.style = 'height:350px; top: -20px; position: relative;';
squareContent.style = 'display:flex; flex-direction: column; text-align: center;';

let squareSide = createElements('input');
let sqResult = createElements('div');
squareSide.type = 'number';
squareSide.placeholder = 'Enter Side Value';

squareHref.onclick = function() {

    squareContent.append(squareSide, sqResult);
    squareContent.style = 'padding: 0 0 0 46px; position:relative; top: -46px; left: 20px';
    squareSide.style = 'margin-bottom:20px; width: 200px';
    sqResult.style = 'font-size: bold; font-size: 18px; text-align:left; width: 300px;'
    squareSide.oninput = function () {
        sqResult.innerHTML = `The Area Of Square Is: <span style="color:red;">${squareSide.value * squareSide.value}<span/>`;
    }
};


// Create Circle Element
let circleDiv = createElements('div');
let circleHref = createElements('a');
let circle = createElements('img');
let circleContent = createElements('div');

circleDiv.append(circleHref, circleContent);
circleHref.append(circle);
circleHref.style.cursor = 'pointer';
circle.src = 'https://cdn.pnghd.pics/data/30/circle-image-1.png';
circle.style.height = '300px';

let circleSide = createElements('input');
let cirResult = createElements('div');
circleSide.type = 'number';
circleSide.placeholder = 'Enter Radius Value';

circleHref.onclick = function() {

    circleContent.append(circleSide, cirResult);
    circleContent.style = 'padding: 0 0 0 46px;';
    circleSide.style = 'margin-bottom:20px; width: 200px';
    cirResult.style = 'font-size: bold; font-size: 18px; text-align:left; width: 250px;'
    circleSide.oninput = function () {
        cirResult.innerHTML = `The Area Of Circle Is: <span style="color:red;">${3.14 * (circleSide.value * circleSide.value)}<span/>`;
    }
};

// Create Rectangle Element
let rectangleDiv = createElements('div');
let rectHref = createElements('a');
let rectangle = createElements('img');
let rectangleContent = createElements('div');

rectangleDiv.append(rectHref, rectangleContent);
rectHref.append(rectangle);
rectHref.style.cursor = 'pointer';
rectangle.src = 'https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844=';
rectangle.style.height = '300px';

let rectangleHeight = createElements('input');
let rectangleWidth = createElements('input');
let rectResult = createElements('div');
rectangleHeight.type = 'number';
rectangleWidth.type = 'number';
rectangleWidth.placeholder = 'Enter The Width Value'
rectangleHeight.placeholder = 'Enter The Height Value';

rectHref.onclick = function() {

    rectangleContent.append(rectangleHeight, rectangleWidth, rectResult);
    rectangleContent.style = 'padding: 0 0 0 46px; display: flex; flex-direction: column;';
    rectangleHeight.style = 'margin-bottom:20px; width: 180px';
    rectangleWidth.style = 'width: 180px';
    rectResult.style = 'font-size: bold; font-size: 18px; text-align:left; width: 250px; margin-top: 20px';

    function handleInput() {
        rectResult.innerHTML = `The Area Of Rectangle Is: <span style="color:red;">${rectangleHeight.value * rectangleWidth.value}<span/>`;
    }
    
    rectangleHeight.addEventListener('input', handleInput);
    rectangleWidth.addEventListener('input', handleInput);
}


// Add Elements To The Page
document.body.append(container)
container.append(heading, paragraph, parent);
parent.append(squareDiv, circleDiv, rectangleDiv);

