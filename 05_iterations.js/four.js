const Myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift : 'swift by apple'
}

for (const key in Myobject) {

    // console.log(`${[key]} shortcut is ${Myobject[key]}`);

}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){

    // console.log(programming[key]);

}


// Map is not iteratable.

const map = new Map()
map.set('IN', "India")  // map.set(key, value)
map.set('US', "United States of America")
map.set('FR', "France")

for (const key in map) {

    console.log(key);
    
}