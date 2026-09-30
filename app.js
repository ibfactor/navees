document.getElementById("doc_new").addEventListener("click", () => {
	showModal(document.querySelector(`[data-for="doc_new"]`));
});
document.getElementById("doc_new_page").addEventListener("change", () => {
	document.getElementById("doc_new_page_width").value = document.getElementById("doc_new_page").value.split("x")[0] + "mm";
	document.getElementById("doc_new_page_height").value = document.getElementById("doc_new_page").value.split("x")[1] + " mm";
});
document.getElementById("doc_new_cancel").addEventListener("click", () => {
	hideModal(document.querySelector(`[data-for="doc_new"]`));
});
document.getElementById("doc_new_confirm").addEventListener("click", () => {
	hideModal(document.querySelector(`[data-for="doc_new"]`));
	document.getElementById("paper").contentDocument.querySelector("#layout").innerHTML = "<div contenteditable><p>لکھیے۔۔۔</p></div>";
	document.getElementById("paper").contentDocument.querySelector("#layout").children[0].style.aspectRatio = document.getElementById("doc_new_page").value.split("x")[0] + "/" + document.getElementById("doc_new_page").value.split("x")[1];
	document.getElementById("paper").contentWindow.initP();
});