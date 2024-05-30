$(document).ready(function() {
    // Function to load a page
    function loadPage(page) {
        $("#content").load(page + ".html");
    }
    // Handle navigation clicks
    function HashChange() {
        var page = location.hash.substr(1); // Get the hash value without the #
        if (page) {
            loadPage(page);
        } else {
            loadPage("Intro"); // Default page
        }
    }
    $(window).on("hashchange", HashChange);
    HashChange();
});

   