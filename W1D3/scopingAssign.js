//scoping
let genderType='female'
function printGender(){
        let functionScoped="brown"
    if (functionScoped=="brown"){
        var age=30
        let blockScoped='pink'
        console.log("print the colour inside the block",blockScoped)
    }
    console.log("print the age outside the if block", age)
} 
genderType='male' // reassigned the value globally
printGender()
console.log("print the genter type declared globally",genderType)
console.log("updated the Gender", genderType) // printing the reassigned value.