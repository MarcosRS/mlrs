$( document ).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    let tab = 'presentations' // Default;
    if(urlParams.has('tab')){
        tab = urlParams.get('tab');
    } 

    triggerGoto(tab);
});

function showHideMobileMenu () {
    // $("#mobile-menu-trigger").click(function() {
        if($("#mobile-menu-content").is(':visible')) {
            $("#mobile-menu-content").hide()
        } else {
            $("#mobile-menu-content").show()
        } 
    // });
}

function activateGoto(){
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    $('[go-to]').each(function() {
        if(this.onclick == null) {
            this.onclick =  function(e) {
                var tab = this.getAttribute('go-to');
                triggerGoto(tab);
                updateTabQueryParam(tab)
                
                if(isMobile) { //Closing Menu on Mobile
                    showHideMobileMenu();
                }
            };
    }
    });
}

function triggerGoto(tab) {
    const html = localStorage.getItem(tab);
    if (html) {
        $('#main-content').html(html);     
    } else {
        $.get(`./public/html/${tab}.html`, function(response) {
            localStorage.setItem(tab, response);
            $('#main-content').html(response);
        });
    }
    localStorage.clear;
}

function updateTabQueryParam(tab){
    if ('URLSearchParams' in window) {
        window.history.replaceState(null, null,'?tab='+tab);
    }
}