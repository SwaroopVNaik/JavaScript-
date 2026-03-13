const coding = ["js", "rb", "py", "java", "cpp"]

// CallBack Function Doesn't have the function name.
coding.forEach( function (item){
    console.log(item);
} )

// // CallBack Function Using Arrow function. 

coding.forEach( (item) => {
    console.log(item);
})

// Method 2 :  CallBack Function
function printME(item){
    console.log(item);
    
}

coding.forEach(printME)

// we can pass multiple parameter and print them using forEach 
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);    
})

// ["", "", ""]  => array with mutiple stirngs (this method is commonly used in forEach)
// [{}, {}, {}] => array with multiple Objects (this method is commonly used in forEach)

const mycoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

mycoding.forEach( (valueOBJ) => {
    console.log(valueOBJ.languageName);
})