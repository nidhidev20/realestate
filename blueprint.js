const draggables = document.querySelectorAll('.room');
const resizeHandles = document.querySelectorAll('.resize-handle');

draggables.forEach(draggable => {
  draggable.addEventListener('mousedown', mouseDownHandler);
});

resizeHandles.forEach(handle => {
  handle.addEventListener('mousedown', resizeMouseDownHandler);
});

function mouseDownHandler(e) {
  const element = this;
  const offsetX = e.clientX - element.getBoundingClientRect().left;
  const offsetY = e.clientY - element.getBoundingClientRect().top;

  function mouseMoveHandler(e) {
    element.style.left = `${e.clientX - offsetX}px`;
    element.style.top = `${e.clientY - offsetY}px`;
  }

  function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
}

function resizeMouseDownHandler(e) {
  const room = e.target.parentElement;
  const originalWidth = room.offsetWidth;
  const originalHeight = room.offsetHeight;
  const originalX = e.clientX;
  const originalY = e.clientY;

  function mouseMoveHandler(e) {
    const newWidth = originalWidth + (e.clientX - originalX);
    const newHeight = originalHeight + (e.clientY - originalY);
    room.style.width = `${newWidth}px`;
    room.style.height = `${newHeight}px`;
  }

  function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
}

// Resize floor functionality
document.getElementById('resizeFloor').addEventListener('click', () => {
  const floorWidth = document.getElementById('floorWidth').value;
  const floorHeight = document.getElementById('floorHeight').value;
  
  const blueprintContainer = document.getElementById('blueprintContainer');
  blueprintContainer.style.width = `${floorWidth}px`;
  blueprintContainer.style.height = `${floorHeight}px`;
});
