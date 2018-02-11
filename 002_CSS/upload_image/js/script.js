$(document).ready(function() {
  console.log("==================begin of dom ready");

  $(".btn-upload").on("click", function() {
    $("#image_upload").click();
    console.log("=============select your file now");
  });

  $("#image_upload").on("change", function() {
    let files = $(this).get(0).files;
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i].name);
    }
    $.ajax({
      url: "/upload/",
      type: "POST",
      data: formData,
      processData: false, // tell jQuery don't convert formData object to a string
      contentType: false, //tell jQuery don't add contentType header
      success: function(data) {
        console.log("upload successfull");
      },
      xhr: function() {
        let xhr = new XMLHttpRequest();
        xhr.upload.addEventListener(
          "progress",
          function(evt) {
            if (evt.lengthComputable) {
              // how far are we now
              let percentCompleted = evt.loaded / evt.total;
              percentCompleted = parseInt(percentCompleted * 100);

              console.log(
                "==============" + percentCompleted + "====================="
              );

              if (percentCompleted === 100) {
                console.log("we are done here");
              }
            }
          },
          false
        );
        return xhr;
      }
    });
  });
});
