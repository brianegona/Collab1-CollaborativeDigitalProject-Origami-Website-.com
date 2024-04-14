function expandSearch() {
    // Placeholder for search functionality
    alert("Search functionality is still under construction");
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // hide menu if already visible
    } else {
        menu.style.display = "block"; // show menu
    }
}

function goToHomepage() {
    window.location.href = "./index.html"; // Navigate to index.html
}

function navigateTo(page) {
    alert("Redirecting to " + page + " page"); // Display alert message
    if (page === "Basic Folds") {
        window.location.href = "./basicFolds.html"; // Navigate to basicFolds.html
    } else if (page === "Advanced Folds") {
        window.location.href = "./advancedFolds.html"; // Navigate to advancedFolds.html
    } else if (page === "Homepage") {
        goToHomepage(); // Call the function to navigate to the homepage
    }
}