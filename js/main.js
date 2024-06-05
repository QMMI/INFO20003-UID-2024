var phoneBtn = document.getElementById("phoneBtn");
var closeBtn = document.getElementById("phoneClose");

phoneBtn.addEventListener("click", function() {
    document.getElementById("phone").style.display = "block";
}
)

closeBtn.addEventListener("click", function() {
    document.getElementById("phone").style.display = "none";
})