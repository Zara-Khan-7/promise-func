function orderProm() {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log("Adding Items in your Cart 🛒");
            resolve("");
        }, 2000);
    }));
}
function orderconfirmationProm() {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log("Your order is Confirmed 🛍");
            resolve("");
        }, 3000);
    }));
}
function orderprocessingProm() {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log("Your Order is in Process");
            resolve("");
        }, 4000);
    }));
}
function orderoutfordeliveryProm() {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log("Your order is Out for Delivery");
            console.log("Your order is on its way");
            resolve("");
        }, 5000);
    }));
}
function orderdeliveryProm() {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log("Your Order is Delivered");
            console.log("Thankyou for Placing your Order");
            resolve("");
        }, 6000);
    }));
}
// let result = await orderProm()
// let result1 = await orderconfirmationProm()
// let result2 = await orderprocessingProm()
// let result3 = await orderoutfordeliveryProm()
// let result4 = await orderdeliveryProm()
orderProm().then(orderconfirmationProm).then(orderprocessingProm).then(orderoutfordeliveryProm).then(orderdeliveryProm);
export {};
