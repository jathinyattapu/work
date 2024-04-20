
    let titleInput = document.getElementById("titleInput");
    let reviewTextarea = document.getElementById("reviewTextarea");
    let addBtn = document.getElementById("addBtn");
    let reviewsContainer = document.getElementById("reviewsContainer");

    function f1() {
        const title = titleInput.value;
        const review = reviewTextarea.value;

        if (title === "") {
            alert("Please enter the movie title.");
            return;
        }

        let reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        reviewElement.innerHTML = `<h3>${title}</h3> <p>${review}</p>`;

        reviewsContainer.appendChild(reviewElement);

        // Clear input fields after adding review
        titleInput.value = "";
        reviewTextarea.value = "";
    };
