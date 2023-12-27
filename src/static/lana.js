const expandBtn = document.querySelector("#expand-btn");
const ratingForm = document.querySelector("#rating-form");
//others
// const other_imagine = document.querySelector("#rating-form2");
//others

expandBtn.onclick = () => {
  if (ratingForm.style.display === "none") {
    ratingForm.style.display = "block";
    //close others
    // other_imagine.style.display = "none";
    //closed
    expandBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  } else {
    ratingForm.style.display = "none";
    expandBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
  }
  if (ratingForm.style.display === "block") {
    console.log("hi");
    const btn = ratingForm.querySelector("button");

    const post = ratingForm.querySelector(".post");
    const widget = ratingForm.querySelector(".star-widget");
    const editBtn = ratingForm.querySelector(".edit");
    const reviewsTable = ratingForm.querySelector("#reviews tbody");

    btn.onclick = () => {
      let max = -1;
      const ratingInput = ratingForm.querySelector(
        "input[name='rate']:checked"
      );
      console.log(ratingInput.value);

      const reviewTextarea = ratingForm.querySelector(
        "textarea[name='review']"
      );
      const userTextarea = ratingForm.querySelector("textarea[name='user']");
      // Check if user entered a rating and review
      if (ratingInput && reviewTextarea.value.trim() !== "") {
        // Create a new row for the reviews table
        const newRow = reviewsTable.insertRow();

        // Insert the rating and review into the new row
        const namecell = newRow.insertCell(0);
        const ratingCell = newRow.insertCell(1);
        const reviewCell = newRow.insertCell(2);
        namecell.style = width = "18%";
        ratingCell.style = width = "18%";
        reviewCell.style = width = "64%";
        namecell.innerHTML = userTextarea.value;
        ratingCell.innerHTML = ratingInput.value + " stars";
        reviewCell.innerHTML = reviewTextarea.value;

        // Reset the form
        ratingInput.checked = false;
        reviewTextarea.value = "";
        userTextarea.value = "";

        // Hide the star rating form and display the "Thanks for rating us!" message
        widget.style.display = "none";
        post.style.display = "block";

        // Add event listener for the "Edit" button
        editBtn.onclick = () => {
          widget.style.display = "block";
          post.style.display = "none";
        };
      }

      return false;
    };
  }
};
console.log(ratingForm.style.display);
