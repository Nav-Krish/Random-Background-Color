document.getElementById("generateBtn").addEventListener("click", () => {
    async function generateColor() {
        var url = "https://x-colors.yurace.pro/api/random";
        var color =await fetch(url)
        var data =await color.json()
        console.log(data)

        let block=document.getElementById("colorBlock")
    block.style.backgroundColor=data.hex
    }
    generateColor()
    

})