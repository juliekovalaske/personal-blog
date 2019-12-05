$("#sidebarCollapse").on("click", function () {
  $("nav").toggleClass("active");
  $(".wrapper").toggleClass("menuup");
  $(".mobile-header").toggleCLass("hide");
});