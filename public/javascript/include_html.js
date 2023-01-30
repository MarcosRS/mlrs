const alreadyLoaded = {};
function triggerIncludeHtml() {
   const res = $('[include-html]');
    for (let i=0; i<res.length; i++){
        const elemId = res[i].id;
        if(!(alreadyLoaded[elemId])) {
            const htmlToLoad = res[i].getAttribute('include-html');
            $(`#${elemId}`).load(`/public/html/${htmlToLoad}.html`);
            alreadyLoaded[elemId] = 1;
        }
   }
}