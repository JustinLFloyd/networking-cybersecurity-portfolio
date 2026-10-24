// Select the project filter buttons
const filterButtons = document.querySelectorAll(".project-filters button");

const detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const details = button.nextElementSibling;

 if (details.style.display === "block") {
    details.style.display = "none";
    button.textContent = "View Details";
    button.classList.remove("active");
} else {
    details.style.display = "block";
    button.textContent = "Hide Details";
    button.classList.add("active");
}
    });
});

// Select all project cards
const projectCards = document.querySelectorAll(".project-card");

// Value used to display every project
const allProjects = "all";

// Select the project count message
const projectCount = document.querySelector("#projectCount");

// Show projects that match the selected category
function filterProjects(category) {
    let visibleProjects = 0;

    projectCards.forEach(function(card) {
        if (category === allProjects || card.classList.contains(category)) {
            card.style.display = "";
            visibleProjects++;
        } else {
            card.style.display = "none";
        }
    });

    projectCount.textContent =
        "Showing " + visibleProjects + " of " + projectCards.length + " projects";
}

// Listen for a click on each filter button
    filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedCategory = button.dataset.filter;

         filterButtons.forEach(function(filterButton) {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        filterProjects(selectedCategory);
    });
    });