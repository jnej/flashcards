$(document).ready(function()  {
  $(".panel-title").click(function()  {
    $(".panel-body").toggle();
  });

  $(".panel-boolean").click(function()  {
    $(".panel-body-1").toggle();
  });

  $(".panel-string").click(function()  {
    $(".panel-body-2").toggle();
  });

  $(".panel-numeric").click(function()  {
    $(".panel-body-3").toggle();
  });

  $(".panel-null").click(function()  {
    $(".panel-body-4").toggle();
  });
  
  $(".panel-undefined").click(function()  {
    $(".panel-body-5").toggle();
  });
});
