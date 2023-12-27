const expandBtn2 = document.querySelector("#expand_imagine-btn");
        const ratingForm2 = document.querySelector("#rating-form2");
         //others
        //  const other_lana = document.querySelector("#rating-form");
         //others
        expandBtn2.onclick = () => {
            console.log("hello");
            if (ratingForm2.style.display === "none") {
                ratingForm2.style.display = "block";
                //close others
                // other_lana.style.display = "none";
                //closed
                expandBtn2.innerHTML = '<i class="fas fa-chevron-up"></i>';
            }
            else {
                ratingForm2.style.display = "none";
                expandBtn2.innerHTML = '<i class="fas fa-chevron-down"></i>';
            }
            if (ratingForm2.style.display === "block") {
                console.log("hi");
                const btn = ratingForm2.querySelector("button");

                const post = ratingForm2.querySelector(".post_i");
                const widget = ratingForm2.querySelector(".star-widget_i");
                const editBtn = ratingForm2.querySelector(".edit_i");
                const reviewsTable = ratingForm2.querySelector("#reviews_i tbody");

                btn.onclick = () => {
                    let max = -1;
                    const ratingInput = ratingForm2.querySelector("input[name='rate2']:checked");
                    console.log(ratingInput.value);

                    const reviewTextarea = ratingForm2.querySelector("textarea[name='review2']");
                    const userTextarea = ratingForm2.querySelector("textarea[name='user2']");
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
        console.log(ratingForm2.style.display);
