let ol =  document.querySelector('ol')
let button = document.querySelector('button')
let a =0 
let li= document.querySelectorAll('li')
let ListItem = ['HTML and Semantics','Starting with CSS','Working Template','Working with DOM','Mobile responsive webpages','Grid and Flex-box in CSS','Projects using HTML & CSS','Version Control and Git','Getting Started with JavaScript','Advance JavaScript','Working with DOM','Making Projects using HTML, CSS and JavaScrip']

let newListItem=[]

for(let i=0;i<ListItem.length;i++){
    if(newListItem.includes(ListItem[i])){
        console.log("this item is already in old list ")
    }else{
        newListItem.push(ListItem[i])
    }
}

for(let i=0;i<li.length;i++){
    for(let j=0;j<newListItem.length;j++){
        if(newListItem[j]==li[i].innerHTML){
            newListItem.splice(j,1)
        }
    }
}

button.addEventListener('click',()=>{
    if(a<newListItem.length){
        let list = document.createElement('li')
        list.innerHTML=newListItem[a]
        ol.appendChild(list)
        a=a+1
    }else{
        alert("All items have been added.")
    }
})