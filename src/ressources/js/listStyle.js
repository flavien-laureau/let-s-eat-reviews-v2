export default function listStyle() {
  const imgs = document.querySelectorAll('.img-restau')
  const imgsWrapper = document.querySelectorAll('.img-wrapper')
  const links = document.querySelectorAll('.more')

  imgs.forEach(img => {
    img.addEventListener('mouseover', function () {
      if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 576) {
        img.parentElement.previousElementSibling.style.opacity = "1";
        img.style.width = "160px";
        img.style.height = "160px";
      }
    });
    img.addEventListener('mouseout', function () {
      if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 576) {
        img.parentElement.previousElementSibling.style.opacity = "0";
        img.style.width = "150px";
        img.style.height = "150px";
      }
    });
  });

  imgsWrapper.forEach(wrapper => {
    wrapper.addEventListener('mouseover', function () {
      if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 576) {
        wrapper.previousElementSibling.style.opacity = "1";
        wrapper.firstChild.style.width = "160px";
        wrapper.firstChild.style.height = "160px";
        wrapper.style.padding = "5px";
        wrapper.style.transform = "rotate(5deg)";
      }
    });
    wrapper.addEventListener('mouseout', function () {
      if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 576) {
        wrapper.previousElementSibling.style.opacity = "0";
        wrapper.firstChild.style.width = "150px";
        wrapper.firstChild.style.height = "150px";
        wrapper.style.padding = "10px";
        wrapper.style.transform = "rotate(0deg)";
      }
    });
  });

  links.forEach(link => {
    link.addEventListener('mouseover', function () {
      if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 576) {
        link.style.opacity = "1";
        link.nextElementSibling.firstChild.style.width = "160px";
        link.nextElementSibling.firstChild.style.height = "160px";
        link.nextElementSibling.style.padding = "5px";
        link.nextElementSibling.style.transform = "rotate(5deg)";
      }
    });
    link.addEventListener('mouseout', function () {
      if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 576) {
        link.style.opacity = "0";
        link.nextElementSibling.firstChild.style.width = "150px";
        link.nextElementSibling.firstChild.style.height = "150px";
        link.nextElementSibling.style.padding = "10px";
        link.nextElementSibling.style.transform = "rotate(0deg)";
      }
    });
  });


  function min() {
    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 576) {
      imgs.forEach(img => {
        img.style.width = "130px";
        img.style.height = "130px";
      })
      window.removeEventListener('resize', min);
      window.addEventListener('resize', max);
    }
  }

  function max() {
    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 576) {
      imgs.forEach(img => {
        img.style.width = "150px";
        img.style.height = "150px";
      })
      window.removeEventListener('resize', max);
      window.addEventListener('resize', min);

    }
  }

  window.addEventListener('resize', min);
  window.addEventListener('resize', max);
}