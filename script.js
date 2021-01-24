// create function to flip through projects on projects.html

let tabsArray = document.getElementsByClassName('tab');

for (let i = 0; i < tabsArray.length; i++) {

  tabsArray[i].addEventListener('click', function() {

    if (event.target.classList.contains('unselected')) {

      document.getElementsByClassName('selected')[0].classList.add('unselected');
      document.getElementsByClassName('selected')[0].classList.remove('selected');
      event.target.classList.add('selected');
      event.target.classList.remove('unselected');
    }

    if (event.target.classList.contains('unselected-dark')) {

      document.getElementsByClassName('selected-dark')[0].classList.add('unselected-dark');
      document.getElementsByClassName('selected-dark')[0].classList.remove('selected-dark');
      event.target.classList.add('selected-dark');
      event.target.classList.remove('unselected-dark');
    }

    document.getElementsByClassName('visible')[0].classList.add('hidden-info');
    document.getElementsByClassName('visible')[0].classList.remove('visible');

    switch (event.target.id) {
      case 'tab1':
        document.getElementById('info1').classList.remove('hidden-info');
        document.getElementById('info1').classList.add('visible');
        break;
      case 'tab2':
        document.getElementById('info2').classList.remove('hidden-info');
        document.getElementById('info2').classList.add('visible');
        break;
      case 'tab3':
        document.getElementById('info3').classList.remove('hidden-info');
        document.getElementById('info3').classList.add('visible');
        break;
    }

  })
}

if (sessionStorage.getItem('isDark') === undefined) {
  sessionStorage.setItem('isDark', 'false');
}

if (sessionStorage.getItem('isDark') === 'true') {
  dark();
}


function dark() {
  document.getElementsByTagName('html')[0].classList.add('html-dark');
  document.getElementsByTagName('main')[0].classList.add('main-dark');

  let buttons = document.getElementsByTagName('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('black-text-dark');
    buttons[i].classList.add('black-border-dark');
    buttons[i].classList.add('html-dark');
    buttons[i].classList.remove('black-text');
    buttons[i].classList.remove('black-border');
  }

  document.getElementsByTagName('footer')[0].classList.add('footer-dark');

  let unselected = document.getElementsByClassName('unselected');

  for (let i = 0; i < unselected.length; i++) {
    unselected[i].classList.add('unselected-dark');
    unselected[i].classList.remove('unselected');
    i -= 1;
  }

  if (document.getElementsByClassName('selected')[0]) {

  document.getElementsByClassName('selected')[0].classList.add('selected-dark');
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  }

  let colorBlock = document.getElementsByClassName('color-block');

  for (let i = 0; i < colorBlock.length; i++) {

    colorBlock[i].classList.add('color-block-dark');
    colorBlock[i].classList.remove('color-block');
    i -= 1;
  }

  let blueText = document.getElementsByClassName('blue-text');

  for (let i = 0; i < blueText.length; i++) {

    blueText[i].classList.add('blue-text-dark');
    blueText[i].classList.remove('blue-text');
    i -= 1;
  }

  let blackText = document.getElementsByClassName('black-text');

  for (let i = 0; i < blackText.length; i++) {

    blackText.item(i).classList.add('black-text-dark');
    blackText.item(i).classList.remove('black-text');
    i -= 1;
  }

  let blackBorder = document.getElementsByClassName('black-border');

  for (let i = 0; i < blackBorder.length; i++) {

    blackBorder[i].classList.add('black-border-dark');
    blackBorder[i].classList.remove('black-border');
    i -= 1;
  }

  let brownBackground = document.getElementsByClassName('brown-background');

  for (let i = 0; i < brownBackground.length; i++) {

    brownBackground[i].classList.add('brown-background-dark');
    brownBackground[i].classList.remove('brown-background');
    i -= 1;
  }

  sessionStorage.setItem('isDark', 'true');

}

function light() {
  document.getElementsByTagName('html')[0].classList.remove('html-dark');
  document.getElementsByTagName('main')[0].classList.remove('main-dark');

  let buttons = document.getElementsByTagName('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('black-text');
    buttons[i].classList.add('black-border');
    buttons[i].classList.remove('html-dark');
    buttons[i].classList.remove('black-text-dark');
    buttons[i].classList.remove('black-border-dark');
  }

  document.getElementsByTagName('footer')[0].classList.remove('footer-dark');

  let unselected = document.getElementsByClassName('unselected-dark');

  for (let i = 0; i < unselected.length; i++) {
    unselected[i].classList.add('unselected');
    unselected[i].classList.remove('unselected-dark');
    i -= 1;
  }

  if (document.getElementsByClassName('selected-dark')[0]) {

  document.getElementsByClassName('selected-dark')[0].classList.add('selected');
  document.getElementsByClassName('selected-dark')[0].classList.remove('selected-dark');
  }

  let colorBlock = document.getElementsByClassName('color-block-dark');

  for (let i = 0; i < colorBlock.length; i++) {

    colorBlock[i].classList.add('color-block');
    colorBlock[i].classList.remove('color-block-dark');
    i -= 1;
  }

  let blueText = document.getElementsByClassName('blue-text-dark');

  for (let i = 0; i < blueText.length; i++) {

    blueText[i].classList.add('blue-text');
    blueText[i].classList.remove('blue-text-dark');
    i -= 1;
  }

  let blackText = document.getElementsByClassName('black-text-dark');

  for (let i = 0; i < blackText.length; i++) {

    blackText.item(i).classList.add('black-text');
    blackText.item(i).classList.remove('black-text-dark');
    i -= 1;
  }

  let blackBorder = document.getElementsByClassName('black-border-dark');

  for (let i = 0; i < blackBorder.length; i++) {

    blackBorder[i].classList.add('black-border');
    blackBorder[i].classList.remove('black-border-dark');
    i -= 1;
  }

  let brownBackground = document.getElementsByClassName('brown-background-dark');

  for (let i = 0; i < brownBackground.length; i++) {

    brownBackground[i].classList.add('brown-background');
    brownBackground[i].classList.remove('brown-background-dark');
    i -= 1;
  }

  sessionStorage.setItem('isDark', 'false');

}

document.getElementById('light').addEventListener('click', light);

document.getElementById('dark').addEventListener('click', dark);

document.getElementById('light').addEventListener('touchstart', light);

document.getElementById('dark').addEventListener('touchstart', dark);