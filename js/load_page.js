$("document").ready(function() {
  $("section").load("includes/intro.html")
  $("nav a").click(function(event) {
    var id = event.target.id
    $("section").load("includes/" + id + ".html")
    return false
  })
})
