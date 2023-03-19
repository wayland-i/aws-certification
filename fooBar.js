let x = 1


while (x <= 200) {
    if (x % 5 === 0 && x % 7 === 0) {
        console.log("FooBar")
        x++
    } else if (x % 5 === 0) {
        console.log("Foo")
        x++
    } else if (x % 7 === 0) {
        console.log("Bar")
        x++
    } else {
        console.log(x)
        x++
    }
}

