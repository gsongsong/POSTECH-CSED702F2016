$("document").ready(function() {
  $("div#body").load("includes/main.html")
  $("div#menu a").click(function(event) {
    var id = event.target.id
    $("div#body").load("includes/" + id + ".html")
    return false
  })
})
