
window.onload = function ccpe_main() {
  document.body.addEventListener("dblclick", (event) => { ccpe_copy_or_paste(event.target)});
}

async function ccpe_copy_or_paste(target) {
  let tagName = target.tagName.toLowerCase();
  if(tagName === 'input' || tagName === 'textarea') {
    await navigator.clipboard.readText().then((clipText) => (target.value = clipText));
  } else if (target.textContent != ''){
    await navigator.clipboard.writeText(target.textContent);
  }
}
