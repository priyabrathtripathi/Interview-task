function toggleBox(boxId) {
    var box = document.getElementById(boxId);
    var content = box.querySelector('.box-content');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "flex";
    } else {
        content.style.display = "none";
    }
}
function focusBox(boxId) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.classList.remove('focused'));
    const selectedBox = document.getElementById(boxId);
    selectedBox.classList.add('focused');
}

function changeColor(boxId, color) {
    var box = document.getElementById(boxId);
    box.style.backgroundColor = color;
}

function changeSize(boxId, size) {
    var box = document.getElementById(boxId);
    box.classList.remove('small', 'medium', 'large');
    box.classList.add(size);
}
