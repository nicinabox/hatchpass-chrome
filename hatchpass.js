var host = self.location.hostname;
var loadUrl = "http://hatchpass.org/create";
var KEY = "fbb43"
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
  var settings = localStorage.hp_chrome_settings  
  
  $('#hatchpass_settings').change(function(event) {
 	  var settings = $(this).serialize() 	  
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
      
      $.get(loadUrl,{
        key: KEY,
        master: master, 
        domain: removeSubdomain(host),
        settings: localStorage.hp_chrome_settings,
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
