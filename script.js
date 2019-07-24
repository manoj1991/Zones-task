///Program1
function addFn() {
    let argsAdd = [].slice.apply(arguments);

    function resultAddFn() {
        argsAdd = argsAdd.concat([].slice.apply(arguments));
        if (argsAdd.length >= 2) {
            return argsAdd.slice(0, 2).reduce(function(accAdd, nextAdd) { return accAdd + nextAdd }, 0);
        }
        return resultAddFn;
    }
    return resultAddFn();
}

console.log("Result of addFn(3, 4) = ", addFn(3, 4))
console.log("Result of addFn(3)(4) = ", addFn(3)(4))


///Program 3

var arr = [5, 4, 2, 3]
var even = 1;
var odd = 1;
for (var i = 0; i < arr.length; i++) {

    if (i % 2 == 0)
        even *= arr[i];
    else
        odd *= arr[i];
}

var sop = odd + even;

document.getElementById("program3ans").innerHTML = "The sum of the product are " + sop;


///Program 2
function numNcomma() {
    var inputs = this.value.replace(/[^0-9,]/g, "")

    if (inputs !== this.value) this.value = inputs;
}
document.getElementById('inputElements').oninput = numNcomma;
$("#submit").click(function() {
    var inputArray = $('#inputElements').val().split(",");
    console.log(inputArray);
    const repElements = inputArray.reduce(
        (dxnry, key) => ({
            ...dxnry,
            [key]: (dxnry[key] || 0) + 1
        }), {})
    const oddElements = Object.keys(repElements).filter(key => repElements[key] % 2);
    document.getElementById("program2ans").innerHTML = "Odd repeating values are " + oddElements;
    console.log(oddElements)
})