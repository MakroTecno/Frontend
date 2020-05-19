function myFunction() {
    var menu_vertical = document.getElementById("menu_vertical_login");
    var panel = document.getElementById("panel_general");
    if (menu_vertical.style.display === "none" && panel.style.display === "none") {
        menu_vertical.style.display = "block";
        panel.style.display = "block";
    } else {
        menu_vertical.style.display = "none";
        panel.style.display = "none";
    }
}