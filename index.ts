// auto complete comes from typescript
const button = document.createElement('button');

button.addEventListener('click', handleClick);

function handleClick(event: MouseEvent) {
  console.log(event.target);
}
