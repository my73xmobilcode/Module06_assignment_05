// global variables

// helper function to get DOM elements
const $ = (id) => document.getElementById(id)

// get DOM elements from FORM
let myid              
let itemName            
let itemExt             
let itemEmail           
let itemDepartment      
let btnAddEmployee
let formEmployee

myid              = $('myid')
itemName            = $('myname')
itemExt             = $('myext')
itemEmail           = $('myemail')
itemDepartment      = $('mydepartment')
btnsubmit           = document.getElementById('submit')
formEmployee        = document.getElementById('empForm')


const displayConsole = () => {
    //alert('ID ', myid)
    // console.log('Name ' , itemName)
    // console.log('Ext ' + itemExt)
    // console.log('Email ' + itemEmail)
    console.log('ID: ' + document.getElementById("myid").value)
    console.log('Name: ' + document.getElementById("myname").value)
    console.log('Ext: ' + document.getElementById("myext").value)
    console.log('Email: ' + document.getElementById("myemail").value)
    console.log('Department: ' + document.getElementById("mydepartment").value)
}

formEmployee.addEventListener('submit', function(e)  {
    e.preventDefault()
    displayConsole()
}
)
