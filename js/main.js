$(document).ready(function(){
	
	(function($) {

	  function measureWidth(deflt) {
	    var dummy = $('<label></label>').text(deflt).css('visibility','hidden').appendTo(document.body);
	    var result = dummy.width();
	    dummy.remove();
	    return result;
	  }

	  function toggleLabel() {
	    var input = $(this);
	    var deflt = input.attr('title');
	    var span = input.prev('span');
	    setTimeout(function() {
	      if (!input.val() || (input.val() == deflt)) {
	        span.css('visibility', '');
	        if (deflt) {
	          span.css('margin-left', measureWidth(deflt) + 2 + 'px');
	        }
	      } else {
	        span.css('visibility', 'hidden');
	      }
	    }, 0);
	  };

	  $(document).on('cut', 'input, textarea', toggleLabel);
	  $(document).on('keydown', 'input, textarea', toggleLabel);
	  $(document).on('paste', 'input, textarea', toggleLabel);
	  $(document).on('change', 'select', toggleLabel);

	  $(document).on('focusin', 'input, textarea', function() {
	      $(this).prev('span').css('color', '#ccc');
	  });
	  $(document).on('focusout', 'input, textarea', function() {
	      $(this).prev('span').css('color', '#999');
	  });

	  function init() {
	    $('input, textarea, select').each(toggleLabel);
	  };

	  // Set things up as soon as the DOM is ready.
	  $(init);

	  // Do it again to detect Chrome autofill.
	  $(window).load(function() {
	    setTimeout(init, 0);
	  });

	})(jQuery);
});
