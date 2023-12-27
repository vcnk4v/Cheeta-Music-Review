const expandBtn4 = document.querySelector("#expand_rihanna-btn");
        const ratingForm4 = document.querySelector("#rating-form4");
         //others
        //  const other_lana = document.querySelector("#rating-form");
         //others
        expandBtn4.onclick = () => {
            console.log("hello");
            if (ratingForm4.style.display === "none") {
                ratingForm4.style.display = "block";
                //close others
                // other_lana.style.display = "none";
                //closed
                expandBtn4.innerHTML = '<i class="fas fa-chevron-up"></i>';
            }
            else {
                ratingForm4.style.display = "none";
                expandBtn4.innerHTML = '<i class="fas fa-chevron-down"></i>';
            }
            if (ratingForm4.style.display === "block") {
                console.log("hi");
                const btn = ratingForm4.querySelector("button");

                const post = ratingForm4.querySelector(".post_r");
                const widget = ratingForm4.querySelector(".star-widget_r");
                const editBtn = ratingForm4.querySelector(".edit_r");
                const reviewsTable = ratingForm4.querySelector("#reviews_r tbody");

                btn.onclick = () => {
                    let max = -1;
                    const ratingInput = ratingForm4.querySelector("input[name='rate4']:checked");
                    console.log(ratingInput.value);

                    const reviewTextarea = ratingForm4.querySelector("textarea[name='review4']");
                    const userTextarea = ratingForm4.querySelector("textarea[name='user4']");
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
        console.log(ratingForm4.style.display);
