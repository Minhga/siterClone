const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const editorItems = $$('.editor-item')
var isBright = false

for(let i=0;i<editorItems.length;i++) {
    editorItems[i].onclick = function(e) {
        if(!editorItems[i].classList.contains('active')) {
            $('.editor-item.active').classList.remove('active')
            $('.editor-tool.active').classList.remove('active')
            editorItems[i].classList.add('active')
            $$('.editor-tool')[i].classList.add('active')
        }
    }
}
function renderTheme() {
    if(isBright) {
        $('.light').href = './asset/css/light.css'
    } else {
        $('.light').href = ''
    }
}
$('.thembtn').onclick = function(e) {
    isBright = !isBright
    renderTheme()
    console.log('e')
}
renderTheme()

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.go-to-top').style.display = "block";
    } else {
        $('.go-to-top').style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function gototop(e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}