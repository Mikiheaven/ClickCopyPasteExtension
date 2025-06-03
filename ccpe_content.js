
window.onload = function ccpeMain() {
  document.addEventListener("mousedown", (event) => { ccpeCopyOrPaste(event)});
}

async function ccpeCopyOrPaste(mouseEvent) {
  if(mouseEvent.button != 1) {
    return;
  }
  mouseEvent.preventDefault();
  mouseEvent.stopPropagation();
  let target = mouseEvent.target;
  let tagName = target.tagName.toLowerCase();
  if(tagName === 'input' || tagName === 'textarea') {
    await navigator.clipboard.readText().then((clipText) => (target.value = clipText));
  } else if (target.textContent != ''){
    await navigator.clipboard.writeText(target.textContent);
  }
}
