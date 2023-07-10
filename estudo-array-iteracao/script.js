function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    // adiciona um numero em cada classe
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();


function initAccordion() {
  const accordionItemList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if (accordionItemList.length) {
    accordionItemList[0].classList.add(activeClass);
    accordionItemList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      //console.log(this);
      // tem o mesmo efeito
      // console.log(event.currentTarget);
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionItemList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    });
  }
}
initAccordion();


function initScrollSuave() {
  const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // });
  }

  linkInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();


const animaisDescricao = document.querySelectorAll('.animais-descricao section');
const arrayAnimais = Array.from(animaisDescricao);

const objetoAnimais = arrayAnimais.map((animal) => {
  const titulo = animal.querySelector('h2').innerText;
  const paragrafos = Array.from(animal.querySelectorAll('p')).map(paragrafo => paragrafo.innerText);

  return {
    titulo: titulo,
    descricao: paragrafos
  }
});

console.log(objetoAnimais);

