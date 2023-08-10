const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

document.addEventListener("keydown", tusHareketleri)

let yb = 10 // yılanın boyutu
let cb = 600 // canvas boyutu
let ykx = cb/4 // yılanın konumu X
let yky = ykx/2 // yılanın konumu Y
let hareketX = 0
let hareketY = 0
let yilanParcalari = []
let yilanUzunlugu = 3
let elmaX = Math.floor(Math.random() * 10)*30
let elmaY = Math.floor(Math.random() * 10)*15
let hiz = 10
let skor = 0

class YilanKuyrugu {
	constructor (ykx,yky) {
		this.ykx = ykx
		this.yky = yky
	}
}

function oyunuCiz() {
	canvasiCiz()
	yilaniCiz()
	elmayiCiz()
	yilaninKonumunuGuncelle()
	elmayiYe()
	skoruCiz()

	if (oyunSonu())
		return

	setTimeout(oyunuCiz, 1000/hiz)
}

function yeniOyun() {
	document.location.reload();
}

function canvasiCiz() {
	ctx.fillStyle = "grey"
	ctx.fillRect(0,0,cb,cb)
}

function yilaniCiz() {
	ctx.fillStyle = "green"
	yilanParcalari.forEach(parca => {
		let part = parca
		ctx.fillRect(part.ykx, part.yky, yb, yb/2)
	});

	yilanParcalari.push(new YilanKuyrugu(ykx,yky))

	if (yilanParcalari.length > yilanUzunlugu) {
		yilanParcalari.shift()
	}

	
	ctx.fillStyle = "black"
	ctx.fillRect(ykx,yky,yb,yb/2)
} 

function tusHareketleri(e) {
	if (e.keyCode == 37) { //sol
		if (hareketX == 1) return;
		hareketX = -1;
		hareketY = 0;
	} else if (e.keyCode == 38) { //üst
		if (hareketY == 1) return;
		hareketY = -1;
		hareketX = 0;
	} else if (e.keyCode == 39) { //sağ
		if (hareketX == -1) return;
		hareketY = 0;
		hareketX = 1;
	} else if (e.keyCode == 40) { //aşağı
		if (hareketY == -1) return;
		hareketY = 1;
		hareketX = 0;
	}
}

function yilaninKonumunuGuncelle() {
	let konumX = ykx + hareketX*yb
	if (konumX >= cb/2) {
		ykx = 0
	} else if (konumX < 0) {
		ykx = cb/2-yb
	} else {
		ykx = konumX
	}

	let konumY = yky + hareketY*yb/2
	if (konumY >= cb/4) {
		yky = 0
	} else if (konumY < 0) {
		yky = cb/4-yb/2
	} else {
		yky = konumY
	}
}

function elmayiCiz() {
	ctx.fillStyle = "red"
	ctx.fillRect(elmaX, elmaY, yb, yb/2)
}

function elmayiYe() {
	if (ykx === elmaX && yky === elmaY) {
		elmaX = Math.floor(Math.random() * 10)*30
		elmaY = Math.floor(Math.random() * 10)*15

		let elmaYilanUstunde = false
		while(!elmaYilanUstunde) {
			elmaYilanUstunde = true
			yilanParcalari.forEach(parca => {
				if (parca.x === elmaX && parca.y === elmaY) {
					elmaX = Math.floor(Math.random() * 10)*30
					elmaY = Math.floor(Math.random() * 10)*15
					elmaYilanUstunde = false
				}
			});
		}

		yilanUzunlugu++
		hiz++
		skor+=10
	}
}

function skoruCiz() {
	ctx.fillStyle = "black"
	ctx.font = "10px verdana"
	ctx.fillText(`Skor: ${skor}`, 230,10)
}

function oyunSonu() {
	let oyunBitti = false

	if (hareketX === 0 && hareketY === 0)
		return

	yilanParcalari.forEach(parca => {
		let part = parca
		if (part.ykx === ykx && part.yky === yky) {
			oyunBitti = true
			oyunSonunuCiz()
			return
		}
	});

	return oyunBitti
}

function oyunSonunuCiz() {
	ctx.fillStyle = "red"
	ctx.font = "16px verdana"
	ctx.fillText("Game Over! Your score is:", 10,12)
}

oyunuCiz();