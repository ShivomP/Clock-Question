const secondsHandle = document.querySelector(".seconds__handle")
const minutesHandle = document.querySelector(".minutes__handle")
const hoursHandle = document.querySelector(".hours__handle")

requestAnimationFrame(setHandles)

function setHandles(){
    const time = new Date()

    const millis = time.getMilliseconds()
    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours()

    const smoothSeconds = millis * 0.006
    const secondsAngle = seconds * 6 + smoothSeconds
    
    const smoothMinutes = seconds * 0.1
    const minutesAngle = minutes * 6 + smoothMinutes

    const smoothHours = minutes * 0.5
    const hoursAngle = hours * 30 + smoothHours

    secondsHandle.style.transform = `rotate(${secondsAngle}deg)`
    minutesHandle.style.transform = `rotate(${minutesAngle}deg)`
    hoursHandle.style.transform = `rotate(${hoursAngle}deg)`

    requestAnimationFrame(setHandles)
}