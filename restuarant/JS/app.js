const menu = [
  {
    id: 1,
    title: "Fresh Fruit Meal",
    category: "breakfast",
    price: 35.99,
    img: "images/breakfast-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Burger Meal",
    category: "lunch",
    price: 69.99,
    img: "images/buger.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Alcohol",
    category: "Drinks",
    price: 29.99,
    img: "images/beer.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Cereal Meal",
    category: "breakfast",
    price: 20.99,
    img: "images/breakfast.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Salad Meal",
    category: "lunch",
    price: 22.99,
    img: "images/lunch.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Hot Beverages",
    category: "Drinks",
    price: 18.99,
    img: "images/coffee.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "English Breakfast",
    category: "breakfast",
    price: 8.99,
    img: "images/breakfast-2.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Fullhouse Meals",
    category: "lunch",
    price: 199.99,
    img: "images/lunch-1.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "children and Adult Shakes",
    category: "Drinks",
    price: 59.99,
    img: "images/milshakes.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Beef Main Meals",
    category: "dinner",
    price: 22.99,
    img: "images/beef.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {id: 11,
  title: "Coctails",
  category: "Drinks",
  price: 22.99,
  img: "images/coctails.jpg",
  desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
},
{
  id: 12,
  title: "Chicken Main Meal",
  category: "dinner",
  price: 99.99,
  img: "images/chicken.jpg",
  desc: `Butter & Rosemary Roast Chicken, Tandoori Chicken, Crumbed Chicken, Butter Chicken, and more.`,
},
{
id: 13,
title: "Salads",
category: "dinner",
price: 22.99,
img: "images/food.jpg",
desc: `Tossed Salad, 
Tropical Salad, 
Grilled Butternut & Avo Salad (seasonal), 
Butternut, Sweet-potato and Beetroot Salad and More.`,
},

];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price"> from R${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
