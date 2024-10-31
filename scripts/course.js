
function onCreate(){

    const urlParams = new URLSearchParams(window.location.search);
    const namee = urlParams.get("name");
    
    var title = document.getElementById("title")
    
    title.textContent = namee;

}
