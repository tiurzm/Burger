// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eat").on("click", function(event) {
      
      var id = $(this).data("id");
      var eat = $(this).data("eat");
  
      var eatState = {
        devoured: eat
      };
  
      // // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatState
      }).then(
        function() {
          console.log("changed ready to", eat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      let newBurgerName = $("#nm").val().trim();
      
      if(newBurgerName) {
        var newBurger = {
          burger_name: newBurgerName
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log(newBurger);
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      } else {
        alert("Insert your burger");
      }
        
    });
});
  