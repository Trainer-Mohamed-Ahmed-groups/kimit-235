console.log(window);
let w = innerWidth;
let h = innerHeight;

console.log(h);
console.log(w);


console.log(screen.width);
console.log(screen.height);


console.log(screen.availWidth);
console.log(screen.availHeight);


console.log(location);
console.log(history);
console.log(navigator);
console.log(navigator.onLine);

function testFn() {
    // localStorage.setItem('course_name', 'Frontend development')

    // document.getElementById('output').textContent = localStorage.getItem('course_name')

    // console.log(localStorage.key(0));
    // console.log(localStorage.removeItem('course_name'));
    // localStorage.clear()

    // sessionStorage.setItem('ok', "OK")

    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC";

}


document.getElementById('btn').addEventListener('click', testFn)


console.log(Number('123'));
