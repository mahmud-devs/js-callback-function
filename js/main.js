/*
================ hours all properties selectors      =================
*/

function fun1(callBackTwo) {
    setTimeout(function () {
        console.log(`this is function : 1`);
        callBackTwo();
    }, 500);
}
function fun2() {
    console.log(`this is function : 2`);
}

function fun3(callBackOne) {
    console.log(`this is function : 3`);
    callBackOne();
}

function fun4(callBackThree) {
    console.log(`this is function : 4`);
    callBackThree()
}

function fun5() {
    console.log(`this is function : 5`);
}

function fun6() {
    console.log(`this is function : 6`);
}

fun3(function () {
    fun1(function () {
        fun4(function () {
            fun2(function () {
                
            })
        });
    });
});
