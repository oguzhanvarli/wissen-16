const myLink = document.querySelector("a")

console.log(myLink)
console.log(myLink.getAttribute("href"))
console.log(myLink.getAttribute("class"))

myLink.setAttribute("href", "https://www.wissenakademie.com")
myLink.setAttribute("class", "linksin mt-2")
myLink.setAttribute("id", "degismis")
myLink.classList.add("yeniEklenenClass")
myLink.classList.remove("linksin")
myLink.setAttribute("style", "background-color:red; ")