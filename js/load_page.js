$("document").ready(function() {
  $("section").load("includes/intro.html")
  $("nav a").click(function(event) {
    $("section").load($(this).attr('href'))
    return false
  })
})
