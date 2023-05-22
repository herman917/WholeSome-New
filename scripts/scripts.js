    $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;
        //console.log(window.location);
        // passes on every "a" tag
        $(".topmenu a").each(function() {
            // checks if its the same on the address bar
            if (url == (this.href)) {
                $(this).closest("li").addClass("active");
                //for making parent of submenu active
               $(this).closest("li").parent().addClass("active");
               console.log((this).closest("li").parent());
            }
        });
    });      
    
    