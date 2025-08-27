function validateForm() {
  "use strict";
  var title = $("#name").val();
  var err = true;
  if (title == "" || title == null) {
    $("#name").addClass("validation");

    var err = false;
  } else {
    $("#name").removeClass("validation");
  }
  var email = $("#email").val();
  if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
    $("#email").addClass("validation");

    var err = false;
  } else {
    $("#email").removeClass("validation");
  }
  var title = $("#message").val();
  if (title == "" || title == null) {
    $("#message").addClass("validation");
    var err = false;
  } else {
    $("#message").removeClass("validation");
  }
  return err;
}
$(document).ready(function () {
  "use strict";
  $("#name").keyup(function () {
    $("#name").removeClass("validation");
  });
  $("#email").keyup(function () {
    $("#email").removeClass("validation");
  });
  $("#message").keyup(function () {
    $("#message").removeClass("validation");
  });
  
  $("#button").click(function (e) {
    if (validateForm()) {
      $("#button").val("Loading...");
      e.preventDefault();
      let name = $("#name").val();
      let email = $("#email").val();
      let message = $("#message").val();
      $.ajax({
        type: "POST",
        url: HOST_URL + `/send-email`,
        data: {
          name: name,
          email: email,
          message: message,
        },
        success: function (result) {
          var data = JSON.parse(result);
          if (data == "send_succes") {
            $("#button").val("Say Hello!");
            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
            Swal.fire({
              position: "top-end",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
          } else {
            $("#button").val("Say Hello!");
            Swal.fire({
              position: "top-end",
              icon: "error",
              timer: 2000,
              showConfirmButton: false,
            });
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          // alert(xhr.responseText);
          $("#button").text("Say Hello!");
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Error system",
            timer: 2000,
            showConfirmButton: false,
          });
        },
      });
    } else {
      return false;
    }
  });
  
});
