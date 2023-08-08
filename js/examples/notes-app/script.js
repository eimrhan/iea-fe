let inputEl = document.getElementById("notesInput")
let addEl = document.getElementById("addButton")
let ulEl = document.querySelector("ul")

let id = 1;

function setInputValueToList() {
	//* ulEl.innerHTML += `<li>${inputEl.value}</li>`
	// += yapmazsan öncekinin üstüne yazar, sadece 1 element tutabilirsin.

	/// bunun daha iyi kullanım şekli:
	let liEl = document.createElement("li"); // li elementi oluşturuyoruz
	liEl.innerText = inputEl.value; // inputun değerini li elementine atıyoruz
	liEl.className = "notes"
	liEl.id = "note-"+id;	// istersek elementi eklemeden önce başka propertieler stiller vs.. atanabilir.
	//* ulEl.appendChild(liEl); // ve son olarak ul elementine child olarak li elementi ekliyoruz.

	// birden fazla elementi aynı anda eklemek istersen:
	let delEl = document.createElement("button");
	delEl.innerHTML = "Sil"
	delEl.className = "btnDelete"
	delEl.id = "del-"+id
	delEl.onclick = deleteItem

	id++

	if (liEl.innerText !== "") {
		ulEl.append(liEl, delEl)
	}
	/* ul içine li harici başka element atmak kötü bir kullanım oldu.
		burada notu li yerine spana atıp, li içine span+sil butonunu atıp,
		li elemanını da en son ul içine atmak daha iyi bir tercih olur.
		bu şekilde stillemede, ortalamada sıkıntı çıkıyor. kötü yoldan çözdüm mecburen
		///TODO: vakit olduğunda bunu dediğim şekilde tekrar yazabilirim.
		(aslında yazmıştım ama aldığım notlar karışıyordu geri aldım, farklı dosyada yapılabilir.)
	*/

	inputEl.value = "";
	inputEl.focus();
}

function deleteItem(e) {
	let btnId = e.target.id; // tıklanan butonun id'sini çeker
	let id = btnId.split("-")[1]	// del-id şeklinde id'ler atadığımız için - ile bölüp id'ye ulaştık.
	//* let id = btnId.replace("del-","") // ya da replace metodu ile id öncesi kısmı silerek ulaşılabilir.
	let note = document.getElementById("note-"+id)
	note.remove();
	e.target.remove();
}

addEl.onclick = setInputValueToList;

/// alternatif kullanım:

// addEl.addEventListener("click", setInputValueToList)

/*
addEl.addEventListener("click", () => {
	console.log(inputEl.value);
})
*/ // fonksiyonu dışarıdan da çağırabilirsin direkt olarak buraya da yazabilirsin.

// EventListener kullanımı daha yaygın deniyor.


inputEl.addEventListener("keydown", (e) => {
	if (e.key === "Enter" && inputEl.value !== "") {
		setInputValueToList()
	}
})