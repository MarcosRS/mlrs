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
    $('[go-to]').each(function() {
        if(this.onclick == null) {
            this.onclick =  function() {
                var tab = this.getAttribute('go-to');
                triggerGoto(tab);
            };
    }
    });
}
const mainContent = {}
function triggerGoto(content) {
    console.log(content)
    if (mainContent[content]) {
        $('#main-content').html(mainContent[content]);     
    } else {
        $.get(`/public/html/${content}.html`, function(response) {
            mainContent[content] = response;
            console.log(mainContent)
            $('#main-content').html(response);
        });
    }
}


// const res = $('[include-html]');
// $('[go-to]').on('click',function(){ console.log('test'); return false; });

// $('[go-to]').each(function() {
//     $(this).on('click', function(e) {
//         console.log('test');
//     });
// });

// const res = $('go-to');
//     for (let i=0; i<res.length; i++){
//         const elemId = res[i].id;
//         if(!(alreadyLoaded[elemId])) {
//             const htmlToLoad = res[i].getAttribute('include-html');
//             $(`#${elemId}`).load(`static/html/${htmlToLoad}.html`);
//             alreadyLoaded[elemId] = 1;
//         }
//    }