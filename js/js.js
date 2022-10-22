let current = 0;
let createSection = () => {
  current++;
  let content = `<section id="section${current}" data-set="Section ${current}">
    <div class="landing__container">
    <h2>Section ${current}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};




let navBar = document.getElementById("navbar__list");
let createNav = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((x) => {
    let li = `<li><a href="#${x.id}" data-set="${x.id}" class="item">${x.dataset.set}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", li);
  });
};





let observing = () => {
  let currentItem = new IntersectionObserver(
    function (x) {
      x.forEach((e) => {
        let active = navBar.querySelector(`[data-set=${e.target.id}]`);
       if (e.isIntersecting) {
         e.target.classList.add("your-active-class");
         active.classList.add("active-link");
          location.hash = `${e.target.id}`;
       } else {
         e.target.classList.remove("your-active-class");
          active.classList.remove("active-link");
        }
      });
   },
   {
     threshold: 0.5
    }
  );
  return document.querySelectorAll("section").forEach((x) => {
    currentItem.observe(x);
  });
};



for (let x = 1; x < 5; x++) createSection();
createNav();
observing();
document.getElementById("buttom").addEventListener("click", () => {
  createSection();
  createNav();
  observing();
});