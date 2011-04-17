var host = self.location.hostname;
var loadUrl = "http://hatchpass.heroku.com/create";
var optIcon = "data:image/png;base64,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";
var KEY = "fbb43"
var html = "<div id=\"h_cont\"> <div id=\"hatchpass\"> <div class=\"h_input\"> <input type=\"password\" id=\"pop_master\" /> <a href='#' onclick='alertme(\"hello\");return false;'>click me</a> </div> </div> </div>"

function removeSubdomain(hostname, keep) {
    return hostname.split(".").slice(-(keep || 2)).join(".")
}
function alertme(alert) {
  alert(alert)
}
function init_pw() {
  // Insert Into page
  var $pw = $("input[type='password']")
  $pw.wrap(html).addClass('hp_password')
  
  // Some constants
  $h = $('#hatchpass')
  $c = $('#h_cont')
}

$(document).ready(function() {
  init_pw()
  
  $('input[type="password"]').bind('dblclick', function() {
    $('#hatchpass').fadeIn('fast')
    $('#hatchpass input').focus()
  })
  
  // Get submit
  $('#hatchpass input').keyup(function(e){
    if(e.keyCode == 13) { // Enter key
      var master = $(this).val();
      $input = $(this)
      if (settings == "" || !settings) {
        var settings = {
  	   			"symbols"	: "true",
  	   			"caps"		: "true",
  	   			"length"	: "10",
  	   			"algorithm"	: "default"
  	   		}
      }

      $.get(loadUrl,{
        key: KEY,
        master: master, 
        domain: removeSubdomain(host)
        //settings: settings,
      }, function(data) {
        $input.parents('#hatchpass').next(".hp_password").val(data);
        $('#h_input').val('')
        $h.fadeOut('fast');
      })
    }
  })
  
  // Close/cancel the popup
  $(document).click(function() {
    $h.fadeOut('fast')
  });

  $c.click(function(event){
    event.stopPropagation();
  });
  
  $('form').bind('submit', function() {
    if ($('.hp_password').val() == "") {
      return false
    }
  })
})
