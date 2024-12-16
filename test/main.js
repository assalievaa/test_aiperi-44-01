//1
const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));


//2
const func = () => {
    let num = 1
    const interval_n = setInterval(() => {
        console.log('Прошла секунда')
        num++
    },1000)

}
func()


//3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i)
        i++
        if (i > 10) {
            clearInterval(interval)
        }

    },1000)
}
count()

//4
const block = document.getElementById('block')

block.onclick = () => {
    if(block.classList.contains('red')) {
        block.classList.remove('red')
    }else {
        block.classList.add('red')
    }
}

//5
const xhr = new XMLHttpRequest();
const url = './main.json';

xhr.open('GET', url, true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        const respond = JSON.parse(xhr.responseText);
        console.log(respond);
    } else {
        console.log('Request failed:', xhr.status);
    }
};

xhr.onerror = function() {
    console.error('Request failed');
};

xhr.send();
