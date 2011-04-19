var host = self.location.hostname;
var loadUrl = "http://hatchpass.org/create";
var html = "\
  <div id=\"h_cont\"> \
    <div id=\"hatchpass\"> \
      <div class=\"h_input\"> \
        <input type=\"password\" id=\"pop_master\" /> \
      </div> \
    </div> \
  </div>"

function removeSubdomain(hostname, keep) {
    return hostname.split(".").slice(-(keep || 2)).join(".")
}

$(document).ready(function() {  
  var settings = $.parseJSON(localStorage.hp_chrome_settings)
  $.each(settings, function(index, setting) {
    $('#'+setting.name).val(setting.value)
  })
  
  
  $('#hatchpass_settings').bind('keyup change', function(event) {
 	  var settings = JSON.stringify(fields = $(this).serializeArray())
 	  localStorage.hp_chrome_settings = settings
 	})

  // Insert Into page
  var $pw = $("input[type='password']")
  $pw.wrap(html).addClass('hp_password')  
  
  $pw.bind('dblclick', function() {
    $('#hatchpass').show()
    $('#hatchpass input').focus()
  })
  
  // Get submit
  $('#hatchpass input').keyup(function(e){
    if(e.keyCode == 13) { // Enter key
      var master = $(this).val();
      $input = $(this)
      var settings = $.parseJSON(localStorage.hp_chrome_settings)
      console.log(settings)
      $.get(loadUrl,{
        key: settings[0].value,
        master: master, 
        domain: removeSubdomain(host),
        settings: decodeURIComponent($.param(settings)),
      }, function(data) {
        $input.parents('#hatchpass').next(".hp_password").val(data);
        $('#h_input').val('')
        $('#hatchpass').fadeOut('fast');
      })
    }
  })
  
  // Close/cancel the popup
  $(document).click(function() {
    $('#hatchpass').fadeOut('fast')
  });

  $('#h_cont').click(function(event){
    event.stopPropagation();
  });
  
  $('form').bind('submit', function() {
    if ($('.hp_password').val() == "") {
      return false
    }
  })
})
