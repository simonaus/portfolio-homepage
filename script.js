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

//functionality to switch between light and dark mode

