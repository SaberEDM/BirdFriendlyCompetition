var inputs = $("form > :input");
const button = $("#edit-button");
const cancelBtn = $("#cancel-button");

for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', enableEdit);
}

for (var i = 0; i < button.length; i++) {
        cancelBtn[i].addEventListener('click', cancelEdit);
}

function enableEdit() {
        document.querySelectorAll('input').forEach(element => element.disabled = false);
        document.querySelectorAll('#fullName').forEach(element => element.disabled = true);
        document.querySelectorAll('#blood-group').forEach(element => element.disabled = true);
        document.querySelectorAll('textarea').forEach(element => element.disabled = false);
        document.querySelectorAll('textarea').forEach(element => element.value = element.getAttribute("placeholder"));
        document.querySelectorAll('#submit-button').forEach(element => element.style.display = "block");
        document.querySelectorAll('#submit-button').forEach(element => element.style.visibility = "visible");
        document.querySelectorAll('#cancel-button').forEach(element => element.style.display = "block");
        document.querySelectorAll('#cancel-button').forEach(element => element.style.visibility = "visible");
        document.querySelectorAll('#edit-button').forEach(element => element.style.display = "none");
        document.querySelectorAll('#edit-button').forEach(element => element.style.visibility = "hidden");
}

function cancelEdit() {
        document.querySelectorAll('input').forEach(element => element.disabled = true);
        document.querySelectorAll('textarea').forEach(element => element.disabled = true);
        document.querySelectorAll('#submit-button').forEach(element => element.style.display = "none");
        document.querySelectorAll('#submit-button').forEach(element => element.style.visibility = "hidden");
        document.querySelectorAll('#cancel-button').forEach(element => element.style.display = "none");
        document.querySelectorAll('#cancel-button').forEach(element => element.style.visibility = "hidden");
        document.querySelectorAll('#edit-button').forEach(element => element.style.display = "block");
        document.querySelectorAll('#edit-button').forEach(element => element.style.visibility = "visible");
}
