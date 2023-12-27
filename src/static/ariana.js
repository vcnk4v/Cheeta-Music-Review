const expandBtn3 = document.querySelector("#expand_ariana-btn");
        const ratingForm3 = document.querySelector("#rating-form3");
         //others
        //  const other_lana = document.querySelector("#rating-form");
         //others
        expandBtn3.onclick = () => {
            console.log("hello");
            if (ratingForm3.style.display === "none") {
                ratingForm3.style.display = "block";
                //close others
                // other_lana.style.display = "none";
                //closed
                expandBtn3.innerHTML = '<i class="fas fa-chevron-up"></i>';
            }
            else {
                ratingForm3.style.display = "none";
                expandBtn3.innerHTML = '<i class="fas fa-chevron-down"></i>';
            }
            if (ratingForm3.style.display === "block") {
                console.log("hi");
                const btn = ratingForm3.querySelector("button");

                const post = ratingForm3.querySelector(".post_a");
                const widget = ratingForm3.querySelector(".star-widget_a");
                const editBtn = ratingForm3.querySelector(".edit_a");
                const reviewsTable = ratingForm3.querySelector("#reviews_a tbody");

                btn.onclick = () => {
                    let max = -1;
                    const ratingInput = ratingForm3.querySelector("input[name='rate3']:checked");
                    console.log(ratingInput.value);

                    const reviewTextarea = ratingForm3.querySelector("textarea[name='review3']");
                    const userTextarea = ratingForm3.querySelector("textarea[name='user3']");
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
                        }
                    }

                    return false;
                }
            }

        };
        console.log(ratingForm3.style.display);
