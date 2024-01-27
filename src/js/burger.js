$(document).ready(function () {
  $(".burger").click(function () {
    $(".burger, .navs").toggleClass("active");
    $("body").toggleClass("lock"); /*тоже самое с тегом Body*/
  });

  $("nav.navs").click(function () {
    $(".navs").toggleClass("active");
  });
});
