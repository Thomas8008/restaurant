

  const spy = new bootstrap.ScrollSpy(document.getElementById('scrollArea'), {
    target: '#menuNav',
    offset: 100
  });

  
  document.querySelectorAll('.side-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 80,   
        behavior: 'smooth'
      });
      document.querySelectorAll('.side-nav .nav-link').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
      history.replaceState(null, "", this.getAttribute('href'));
    });


  });