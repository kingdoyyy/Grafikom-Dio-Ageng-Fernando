document.addEventListener("DOMContentLoaded", () => {
    const taskButtons = document.querySelectorAll(".task-button");
    
    taskButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`Anda mengklik ${button.dataset.task}`);
        });
    });
});
