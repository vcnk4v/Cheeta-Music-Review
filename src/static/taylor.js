const expandBtn5 = document.querySelector("#expand_taylor-btn");
        const ratingForm5 = document.querySelector("#rating-form5");
         //others
        //  const other_lana = document.querySelector("#rating-form");
         //others
        expandBtn5.onclick = () => {
            console.log("hello");
            if (ratingForm5.style.display === "none") {
                ratingForm5.style.display = "block";
                //close others
                // other_lana.style.display = "none";
                //closed
                expandBtn5.innerHTML = '<i class="fas fa-chevron-up"></i>';
            }
            else {
                ratingForm5.style.display = "none";
                expandBtn5.innerHTML = '<i class="fas fa-chevron-down"></i>';
            }
            if (ratingForm5.style.display === "block") {
                console.log("hi");
                const btn = ratingForm5.querySelector("button");

                const post = ratingForm5.querySelector(".post_t");
                const widget = ratingForm5.querySelector(".star-widget_t");
                const editBtn = ratingForm5.querySelector(".edit_t");
                const reviewsTable = ratingForm5.querySelector("#reviews_t tbody");

                btn.onclick = () => {
                    let max = -1;
                    const ratingInput = ratingForm5.querySelector("input[name='rate5']:checked");
                    console.log(ratingInput.value);

                    const reviewTextarea = ratingForm5.querySelector("textarea[name='review5']");
                    const userTextarea = ratingForm5.querySelector("textarea[name='user5']");
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
        console.log(ratingForm5.style.display);
