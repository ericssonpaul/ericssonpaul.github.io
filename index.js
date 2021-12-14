
function getTitleText() {
    var helloList = [
        "Hello",
        "Hi",
        "Hallåj",
        "Tjenare",
        "Whatsup",
        "Sup",
        "Wassup",
        "Bonjour",
        "Konnichiwa",
        "Ni hao"
    ]
    var nameList = [
        "I'm Jacob",
        "this is Jacob",
        "Jacob here",
        "my name's Jacob",
        "Jacob speaking",
        "JP"
    ]
    return helloList[Math.floor(Math.random()*helloList.length)] + ", " + nameList[Math.floor(Math.random()*nameList.length)] + "."
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var app = new Vue({
    el: '#app',
    data: {
        titleText: getTitleText(),
        printText: '',
        arrowShow: false
    },
    methods: {
        printer() {
            let i = -1
            var timer = setInterval(()=>{
                i++
                const x = i%this.titleText.length
                this.printText += this.titleText[x]
                if (this.printText.length == this.titleText.length) {
                    clearInterval(timer)
                    setTimeout(() => this.arrowShow = true, 900)
                }
            },150-(Math.random()*50))
        }
    },
    created: function() {
        setTimeout(() => this.printer(), 1000)
    }
})