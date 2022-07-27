//1
let avto = [
    {
        name: 'malibu',
        price: 32000
    },
    {
        name: 'Cobalt',
        price: 12500
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'Traverse',
        price: 69000
    },
    {
        name: 'Gentra',
        price: 14000
    },
    {
        name: 'Tracker',
        price: 25000
    }
]

let max_price = 35000

let cheap = avto.filter(item => item.price <= max_price)


console.log('Автомобили до ' + max_price + '$ ' + 'сторите в нижнем массиве' );
console.log(cheap);



//2
let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
console.log('Было');
console.log(arr);
let index = prompt('Напищите число ?')
if (arr.indexOf(index)) {
    arr.splice(index, 1)
    console.log('Стало ');
    console.log(arr);
} else {
    alert('Нет такого элемента')
}

//3
let idx = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
let number = []
 let filtered = idx.filter(item => {
    if( typeof(item) === 'number'){
        number.push(item)
    }
 })

 if ( number.length >= 5) {
    alert('good')
 }
console.log(number);