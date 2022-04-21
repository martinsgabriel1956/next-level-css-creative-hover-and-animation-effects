const cursor = document.querySelector('#cursor');

const onMouseChangePosition = (event) => {
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + 'px';
};

onmousemove = onMouseChangePosition