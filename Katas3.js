function createBreak() {
    let newLine = document.createElement("br")
    let destination = document.getElementById("results")
    destination.appendChild(newLine)
}

//
//
// Kata 1

for (let i = 1; i <= 25; i++) {
    var kata1 = document.createElement("span")
        kata1.innerHTML = ""

    var newText = document.createTextNode(i+ ", ")
        kata1.appendChild(newText)

    var destination = document.getElementById("results")
            destination.appendChild(kata1)
}
createBreak()
createBreak()
//
//
// Kata 2

for (let i = 25; i >= 1; i--) {
    var kata2 = document.createElement("span")
        kata2.innerHTML = ""
    
    var newText = document.createTextNode(i+ ", ")
        kata2.appendChild(newText)
    
    var destination = document.getElementById("results")
        destination.appendChild(kata2)
}
createBreak()
createBreak()
//
//
// Kata 3
for (let i = -1; i >= -25; i--) {
    var kata3 = document.createElement("span")
        kata3.innerHTML = ""
    
    var newText = document.createTextNode(i+ ", ")
        kata3.appendChild(newText)
    
    var destination = document.getElementById("results")
        destination.appendChild(kata3);
}
createBreak()
createBreak()
//
//
// Kata 4
for (let i = -25; i <= -1; i++) {
    var kata4 = document.createElement("span")
        kata4.innerHTML = ""
    
    var newText = document.createTextNode(i+ ", ")
        kata4.appendChild(newText)
    
    var destination = document.getElementById("results")
        destination.appendChild(kata4)
}
createBreak()
createBreak()
//
//
// Kata 5
for (let i = 25; i >= -25; i--) {
    if (i%2===1||i%2===-1) {
        var kata5 = document.createElement("span")
            kata5.innerHTML = ""
        
        var newText = document.createTextNode(i+ ", ")
            kata5.appendChild(newText)
        
        var destination = document.getElementById("results")
            destination.appendChild(kata5)
    }
}
createBreak()
createBreak()
//
//
// Kata 6
for (let i = 3; i <= 100; i++) {
    if (i%3 === 0) {
        var kata6 = document.createElement("span")
            kata6.innerHTML = ""
        
        var newText = document.createTextNode(i+ ", ")
            kata6.appendChild(newText)
        
        var destination = document.getElementById("results")
            destination.appendChild(kata6)
    }
}
createBreak()
createBreak()
//
//
// Kata 7
for (let i = 1; i <= 100; i++) {
    if (i%7 === 0) {
        var kata7 = document.createElement("span")
            kata7.innerHTML = ""
        
        var newText = document.createTextNode(i+ ", ")
            kata7.appendChild(newText)
        
        var destination = document.getElementById("results")
            destination.appendChild(kata7)
    }
}
createBreak()
createBreak()
//
//
// Kata 8
for (let i = 100; i >= 3; i--) {
    if (i%3 === 0||i%7 === 0) {
        var kata7 = document.createElement("span")
            kata7.innerHTML = ""
        
        var newText = document.createTextNode(i+ ", ")
            kata7.appendChild(newText)
        
        var destination = document.getElementById("results")
            destination.appendChild(kata7)
    }
}
createBreak()
createBreak()
//
//
// Kata 9
for (let i = 1; i <= 100; i++) {
    if (i%5 === 0 && i%2 ===1) {
        var kata8 = document.createElement("span")
            kata8.innerHTML = ""
        
        var newText = document.createTextNode(i+ ", ")
            kata8.appendChild(newText)
        
        var destination = document.getElementById("results")
            destination.appendChild(kata8)
    }
}
createBreak()
createBreak()
//
//
// Kata 10
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]
    for (let i = 0; i < sampleArray.length; i++) {
        var kata10 = document.createElement("span")
            kata10.innerHTML = ""
        
        var newText = document.createTextNode(sampleArray[i] + ", ")
            kata10.appendChild(newText)
        
        var destination = document.getElementById("results")
            destination.appendChild(kata10)
}
createBreak()
createBreak()
//
//
// Kata 11
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            var kata11 = document.createElement("span")
                kata11.innerHTML = ""
            
            var newText = document.createTextNode(sampleArray[i] + ", ")
                kata11.appendChild(newText)
            
            var destination = document.getElementById("results")
                destination.appendChild(kata11)
        }
}
createBreak()
createBreak()
//
//
// Kata 12
for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 === 1) {
        var kata12 = document.createElement("span")
            kata12.innerHTML = ""
        
        var newText = document.createTextNode(sampleArray[i] + ", ")
            kata12.appendChild(newText)
        
        var destination = document.getElementById("results")
            destination.appendChild(kata12)
    }
}
createBreak()
createBreak()
//
//
// Kata 13
for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 8 === 0) {
        var kata13 = document.createElement("span")
            kata13.innerHTML = ""
        
        var newText = document.createTextNode(sampleArray[i] + ", ")
            kata13.appendChild(newText)
        
        var destination = document.getElementById("results")
            destination.appendChild(kata13)
    }
}
createBreak()
createBreak()
//
//
// Kata 14
for (let i = 0; i < sampleArray.length; i++) {
    let arrValue = sampleArray[i]
    let sqArrValue = arrValue * arrValue
    var kata14 = document.createElement("span")
        kata14.innerHTML = ""
        
     var newText = document.createTextNode(sqArrValue + ", ")
        kata14.appendChild(newText)
        
    var destination = document.getElementById("results")
        destination.appendChild(kata14)
}
createBreak()
createBreak()
//
//
// Kata 15
let oneToTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20]
let oneToTwentyTotal = 0
for (let i = 0; i < oneToTwenty.length; i++) {
    oneToTwentyTotal = oneToTwentyTotal + oneToTwenty[i]
}
    var kata15 = document.createElement("span")
        kata15.innerHTML = ""
        
    var newText = document.createTextNode(oneToTwentyTotal)
        kata15.appendChild(newText)
        
    var destination = document.getElementById("results")
        destination.appendChild(kata15)

createBreak()
createBreak()
//
//
// Kata 16
let sampleArrayTotal = 0
for (let i = 0; i < sampleArray.length; i++) {
    sampleArrayTotal = sampleArrayTotal + sampleArray[i]
}
    var kata16 = document.createElement("span")
        kata16.innerHTML = ""
        
    var newText = document.createTextNode(sampleArrayTotal)
        kata16.appendChild(newText)
        
    var destination = document.getElementById("results")
        destination.appendChild(kata16)
createBreak()
createBreak()
//
//
// Kata 17
var kata17 = document.createElement("span")
        kata17.innerHTML = ""
        
    var newText = document.createTextNode(Math.min(...sampleArray))
        kata17.appendChild(newText)
        
    var destination = document.getElementById("results")
        destination.appendChild(kata17)
createBreak()
createBreak()
//
//
// Kata 18
var kata18 = document.createElement("span")
        kata18.innerHTML = ""
        
    var newText = document.createTextNode(Math.max(...sampleArray))
        kata18.appendChild(newText)
        
    var destination = document.getElementById("results")
        destination.appendChild(kata18)