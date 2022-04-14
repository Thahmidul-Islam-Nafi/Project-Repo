console.log(document.getElementById('button-left'))
console.log(document.getElementsByTagName('div'))

const sources = [
    "./assets/img/startup-monochromatic.png",
    "./assets/img/online-payment-monochromatic.png",
    "./assets/img/card-payment-outline.png", 
    "./assets/img/online-payment-outline.png",
    
   
]
const maxIndex = 3;
const Top = document.getElementById("carousel-img-top")
console.log(Top.getAttribute('src'))
const Left = document.getElementById("carousel-img-left")
const Right = document.getElementById("carousel-img-right")
const incrementIndex= (index)=>{
    if (index===maxIndex){
        return 0
    }
    else return index+1
}
const decrementIndex = (index)=>{
    if (index===0){
        return maxIndex
    }
    else return index-1
}

const navigateLeft = ()=>{
    
    const animationDuration = {duration:800,
        iterations:1,
        easing:"ease-out"
        }
        
        
        const topAnimation = Top.animate([{transform:"scale(0.75) translateX(-24vw)",opacity:0.5}],animationDuration)
        const leftAnimation = Left.animate([{transform:"scale(0.5) translateX(24vw)",opacity:0.5},{transform:"scale(0.75) translate(48vw)",opacity:0.5}],animationDuration)
        const rightAnimation = Right.animate([{"transform":"scale(1) translateX(-18vw)",opacity:0.95}],animationDuration)
        
        rightAnimation.onfinish = (event)=>{
        Top.setAttribute("src",sources[incrementIndex(sources.indexOf(Top.getAttribute('src')))])
        Left.setAttribute("src",sources[incrementIndex(sources.indexOf(Left.getAttribute('src')))])
        Right.setAttribute("src",sources[incrementIndex(sources.indexOf(Right.getAttribute('src')))])
        }
    
}

const navigateRight = ()=>{
    const animationDuration = {duration:800,
        iterations:1,
        easing:"ease-out"
        }
        
        
        const topAnimation = Top.animate([{transform:"scale(0.75) translateX(24vw)",opacity:0.5}],animationDuration)
        const leftAnimation = Left.animate([{"transform":"scale(1) translateX(18vw)",opacity:0.95}],animationDuration)
        const rightAnimation = Right.animate([{transform:"scale(0.5) translateX(-24vw)",opacity:0.5},{transform:"scale(0.75) translate(-48vw)",opacity:0.5}],animationDuration)
        
        
        rightAnimation.onfinish = (event)=>{
        Top.setAttribute("src",sources[decrementIndex(sources.indexOf(Top.getAttribute('src')))])
        Left.setAttribute("src",sources[decrementIndex(sources.indexOf(Left.getAttribute('src')))])
        Right.setAttribute("src",sources[decrementIndex(sources.indexOf(Right.getAttribute('src')))])
        }
        
        

        
        
        
        
        
                
        
}

document.getElementById('button-left').addEventListener('click',()=>{navigateLeft()})
document.getElementById('button-right').addEventListener('click',()=>{navigateRight()})

// setInterval(()=>{navigateLeft()},3500)
