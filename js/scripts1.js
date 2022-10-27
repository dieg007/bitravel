AOS.init()
const toggleButton = document.getElementById('toggleButton');
      const navilist = document.getElementById('navi-list');
      toggleButton.addEventListener('click', () => {
        navilist.classList.toggle('active');
      })