document.querySelector('.input__button').onclick = myClick;



function myClick() {

  let name = document.querySelector('.input__text').value;

  for (let i = 0; i < name.length; i++) {
    if (name[i] === ` `) {
      name[i] = `_`;
    }
  }




  const link = "https://unturned.fandom.com/wiki/" + name;

  const textToAdd = `<a class=\"link\" href=\"${link}\">Go to Wiki</a>`;


  document.querySelector('.content').innerHTML = textToAdd;
}