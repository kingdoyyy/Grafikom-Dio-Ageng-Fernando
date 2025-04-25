function uploadFile() {
    let fileInput = document.getElementById("fileInput");
    let fileContainer = document.getElementById("fileContainer");

    if (fileInput.files.length > 0) {
        let file = fileInput.files[0];
        let listItem = document.createElement("li");

        // Buat link untuk mengunduh file
        let fileURL = URL.createObjectURL(file);
        let fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.textContent = `📄 ${file.name}`;
        fileLink.download = file.name; // Tambahkan download agar bisa diunduh
        fileLink.target = "_blank";

        // Tambahkan tombol hapus
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            deleteItem(deleteBtn);
        };

        listItem.appendChild(fileLink);
        listItem.appendChild(deleteBtn);
        fileContainer.appendChild(listItem);
    } else {
        alert("Pilih file terlebih dahulu!");
    }
}

function uploadLink() {
    let linkInput = document.getElementById("linkInput");
    let fileContainer = document.getElementById("fileContainer");

    if (linkInput.value.trim() !== "") {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.href = linkInput.value;
        link.textContent = `🔗 ${linkInput.value}`;
        link.target = "_blank";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            deleteItem(deleteBtn);
        };

        listItem.appendChild(link);
        listItem.appendChild(deleteBtn);
        fileContainer.appendChild(listItem);

        // Reset input setelah upload
        linkInput.value = "";
    } else {
        alert("Masukkan link terlebih dahulu!");
    }
}

function deleteItem(button) {
    let listItem = button.parentElement;
    listItem.remove();
}
