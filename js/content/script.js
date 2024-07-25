const red = document.getElementById("red")
const button = document.getElementById("changeValue")


console.log(red)
console.log(red.innerText)
console.log(red.textContent)

// red.innerText = "Js ile Kırmızıya Dönüştüm"
// red.textContent = "Js ile Kırmızıya Dönüştüm 2 "

button.addEventListener("click", () => {
  red.innerText = "Ben Butona Tıklanınca Değiştim"
  button.innerText = "Değeri Değiştirme İşlemi Yapıldı"
})