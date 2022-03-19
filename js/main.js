function clearText() {
  let textForm = document.getElementsByClassName('input');
  for (let i = 0; i < textForm.length; i++){
    if (textForm[i].type = 'text') {
      textForm[i].value = "";
    }
  }
}