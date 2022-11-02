//testing on canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

//event handler
function showKey(e) {
    $('#lastKey').text("The last key is " + e.key + ".");
}

function showPosition(e) {
    $('#charactersLeft').text('180 characters (' + e.pageX + ', ' + e.pageY + ')');
}

//event
$('#message').keyup(showKey);
document.addEventListener('mousemove', showPosition);