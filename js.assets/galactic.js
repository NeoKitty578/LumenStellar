const searchInput = document.getElementById("searchInput");
const topics = document.querySelectorAll("details");

searchInput.addEventListener("keyup", function(){
    const searchTerm = searchInput.value.toLowerCase();
    let matches = 0;
    topics.forEach(topic => {

        const text = topic.textContent.toLowerCase();

        if(text.includes(searchTerm)){
            topic.style.display = "block";
            matches++;
        }
        else{
            topic.style.display = "none";
        }

    });

    const noResults = document.getElementById("noResults");

    if(matches === 0){
        noResults.style.display = "block";
    }
    else{
        noResults.style.display = "none";
    }

});