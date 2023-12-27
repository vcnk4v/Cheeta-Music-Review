const navbar = document.querySelector(".navbar"); // select the navbar element
const links = navbar.querySelectorAll("a"); // select all the links inside the navbar

// add mouseover event listener to each link
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "white";
    link.style.backgroundColor = "#8d6755";
    link.style.borderRadius = "20px"; // change the color of the link on hover
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "";
    link.style.backgroundColor = ""; // reset the color of the link when the mouse is moved away
  });
});
