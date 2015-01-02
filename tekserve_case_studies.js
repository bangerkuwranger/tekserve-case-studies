jQuery(function($j) {  
  
    // Check to see if the 'Delete File' link exists on the page...  
    if($j('a#tekserve-case-study-file-delete').length === 1) {  
  
        // Since the link exists, we need to handle the case when the user clicks on it...  
        $j('#tekserve-case-study-file-delete').click(function(evt) {  
          
            // We don't want the link to remove us from the current page  
            // so we're going to stop its normal behavior.  
            evt.preventDefault();  
              
            // Find the text input element that stores the path to the file  
            // and clear it's value.  
            $j('#tekserve-case-study-file-url').val('');  
              
            // Hide this link so users can't click on it multiple times  
            $j('.current-file, #tekserve-case-study-file-delete').hide();  
          
          	// Add title back to section
          	$j('.tekserve-case-study-file-description').text('Upload your PDF here.');
          	
          	// Show Upload Link
          	$j('#tekserve_case_study_file').show();
          	
        });  
      
    } // end if ($j('a#tekserve-case-study-file-delete').length === 1)
  
});  