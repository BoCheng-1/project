
var addOneItem= document.getElementsByClassName('plus-btn')
var removeOneItem=document.getElementsByClassName('minus-btn')
console.log(addOneItem)
console.log(removeOneItem)
for(var i=0;i<addOneItem.length;i++){
    var button = addOneItem[i]
    button.addEventListener('click',function(event){
        var buttonCliked = event.target
        console.log('clicked +')
        updateCartTotal
    })
}
for(var i=0;i<removeOneItem.length;i++){
    var button = removeOneItem[i]
    button.addEventListener('click',function(event){
        var buttonCliked = event.target
        console.log('clicked -')
        updateCartTotal
    })
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('li-wrap')[0]
    console.log(cartItemContainer)
}