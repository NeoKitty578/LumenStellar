document.getElementById('spaceCOntactForm').addEventListener('submit', function(event){
    event.preventDefault();

    //getting user input values
    const nameInput = document.getElementById('userName').value.trim();
    const emailInput = document.getElementById('userEmail').value.trim();
    
    //processing data
    if (nameInput && emailInput){
        document.getElementById('spaceContactForm').style.display = 'none';
        document.getElementById('displayName').textContent = nameInput;
        document.getElementById('formSuccessMessage').style.display = 'block';
        console.log("Processed Form Submission:", { name: nameInput, email: emailInput});
    }
})  