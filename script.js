const fortunes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein"
  ];
  
  function getRandomQuote() {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  }
  
  function displayQuote() {
    const quoteBox = document.getElementById('quoteBox');
    const quoteText = document.getElementById('quoteText');
    const randomQuote = getRandomQuote();
    const initialFontSize = '25px'; // Set your initial font size here
    quoteText.textContent = randomQuote;
    quoteBox.style.fontSize = initialFontSize; // Set the initial font size
  }
  
  function changeColor(color) {
    const quoteBox = document.getElementById('quoteBox');
    const colors = {
      'red': ['#000000', '#ff0000', '#ffcccc', '25px'],
      'blue': ['#000000', '#0000ff', '#ccccff', '25px'],
      'green': ['#000000', '#008000', '#ccffcc', '25px'],
      'yellow': ['#333', '#ffff00', '#ffffcc', '25px']
    };
    const [fontColor, borderColor, bgColor, fontSize] = colors[color];
    quoteBox.style.color = fontColor;
    quoteBox.style.borderColor = borderColor;
    quoteBox.style.backgroundColor = bgColor;
    quoteBox.style.fontSize = fontSize;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    displayQuote();
  });


  
  function convert() {
    // Get input value and selected unit
    var input = parseFloat(document.getElementById('weightInput').value);
    var unit = document.getElementById('unitSelector').value;
    var resultSpan = document.getElementById('result');
    
    // Perform conversion based on selected unit
    if (unit === 'kg') {
      // Kilograms to Pounds
      var pounds = input * 2.2046;
      resultSpan.textContent = pounds.toFixed(4) + ' pounds';
    } else if (unit === 'lb') {
      // Pounds to Kilograms
      var kilograms = input * 0.4536;
      resultSpan.textContent = kilograms.toFixed(4) + ' kilograms';
    } else {
      // Invalid unit
      resultSpan.textContent = 'Invalid unit';
    }
  }
  


  document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get input value
    var numbers = document.getElementById("numberInput").value.trim().split(",");
    
    // Convert string numbers to actual numbers
    numbers = numbers.map(function(num) {
        return parseFloat(num);
    });
    
    // Calculate max, min, sum, average, and reverse order
    var max = Math.max(...numbers);
    var min = Math.min(...numbers);
    var sum = numbers.reduce((acc, curr) => acc + curr, 0);
    var avg = sum / numbers.length;
    var reverseOrder = numbers.slice().reverse();
    
    // Display results
    var output = document.getElementById("output");
    output.innerHTML = `
        <p>Max: ${max}</p>
        <p>Min: ${min}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${avg.toFixed(2)}</p>
        <p>Reverse Order: ${reverseOrder.join(", ")}</p>
    `;
});

function clearAll() {
  document.getElementById('textInput').value = '';
}

function toggleCase() {
  var textArea = document.getElementById('textInput');
  var lines = textArea.value.split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '') continue;
    lines[i] = lines[i].toUpperCase() === lines[i] ? lines[i].toLowerCase() : lines[i].toUpperCase();
  }
  textArea.value = lines.join('\n');
}

function sortLines() {
  var textArea = document.getElementById('textInput');
  var lines = textArea.value.split('\n').filter(line => line.trim() !== '');
  lines.sort();
  textArea.value = lines.join('\n');
}

function reverseLines() {
  var textArea = document.getElementById('textInput');
  var lines = textArea.value.split('\n');
  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].split('').reverse().join('');
  }
  textArea.value = lines.reverse().join('\n');
}

function stripBlank() {
  var textArea = document.getElementById('textInput');
  var lines = textArea.value.split('\n').filter(line => line.trim() !== '');
  textArea.value = lines.join('\n');
}

function addNumbers() {
  var textArea = document.getElementById('textInput');
  var lines = textArea.value.split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].trim() !== '') {
      lines[i] = (i + 1) + '. ' + lines[i];
    }
  }
  textArea.value = lines.join('\n');
}

function shuffleLines() {
  var textArea = document.getElementById('textInput');
  var lines = textArea.value.split('\n').filter(line => line.trim() !== '');
  for (var i = lines.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
  }
  textArea.value = lines.join('\n');
}