function saveText() {
    let text = document.getElementById("textInput").value;
    let blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");

    a.href = url;
    a.download = "file.txt";
    a.click();
    
    window.URL.revokeObjectURL(url);
}