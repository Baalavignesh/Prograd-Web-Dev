let my_gv = 0;
let my_bill = 0;


let useEffect = (user_visit) => {
  if (user_visit == null) {
    console.log(user_visit);
    my_gv = 100;
    user_visit = 1;
  } else {
    user_visit = parseInt(user_visit) + 1;
  }
  window.localStorage.setItem("uservisit", user_visit);

  document.getElementById("mygv").innerHTML = 100;
  document.getElementById("mybill").innerHTML = my_bill;
};

document.addEventListener("DOMContentLoaded", () => {
  let user_visit = window.localStorage.getItem("uservisit");
  useEffect(user_visit);
});

let phone = (price) => {
  my_bill += price;
  console.log(my_bill);
  document.getElementById("mybill").innerHTML = my_bill;
};

let generate_bill = () => {
  if (my_bill > 5000) {
    my_gv += 3000;
  } else if (my_bill > 3000) {
    my_gv += 1500;
  } else if (my_bill > 1000) {
    my_gv += 500;
  }

  document.getElementById("mygv").innerHTML = my_gv;
};
