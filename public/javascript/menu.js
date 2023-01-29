function showHideMobileMenu () {
    // $("#mobile-menu-trigger").click(function() {
        if($("#mobile-menu-content").is(':visible')) {
            $("#mobile-menu-content").hide()
        } else {
            $("#mobile-menu-content").show()
        } 
    // });
}

function triggerGoto(e){
    // $('[go-to]').each(function() {
    //     $(this).on('click', function(e) {
    //         console.log('test');
    //     });
    // });
    const res = $('go-to');
    console.log(res.length);
    for (let i=0; i<res.length; i++){
        // const elemId = res[i].id;
        // if(!(alreadyLoaded[elemId])) {
        //     const htmlToLoad = res[i].getAttribute('include-html');
        //     $(`#${elemId}`).load(`static/html/${htmlToLoad}.html`);
        //     alreadyLoaded[elemId] = 1;
        // }
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