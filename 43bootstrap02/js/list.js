
// 获取购物车数据
var cart = new ShoppingCart();
console.log(cart);

function displayOrderList() {
    let cartData = cart.getDataFromLocalStorage();
    let orderList = cartData.orderList;
    console.log(orderList);
    // 遍历订单列表｛
    // for (const i in orderList){
    //     let order=orderList[i];
    //     console.log(order);
    // }
    // 找订单列表父元素
    let cartList = document.querySelector('#cartList');
    let exmapleNode = document.querySelector('orderExample');
// 遍历订单列表
    for (let i = 0; i < orderList.length; i++) {
        let order = orderList[i];
        console.log(order);
        // 克隆样本节点形成当前订单节点
        node = exmapleNode.cloneNode(true);
        // 挂接到父元素
        cartList.appendChild(node);
        // 设置数据
        // 节点id
        node.id = order.id;
        let imgNode=node.querySelector('["data-name="imgSrc"]');
        imgNode.src='images/'+order.imgSrc;
        // console.log(imgNode);
        node.classList.remove('d-none');

        let selectNone=node.querySelector('[data-operator="checkItem"]');
        selectNone.checked=order.selectStatus;
        console.log(selectNone);
        console.log(node);
    }
    //克隆一个样本节点
    //设置一个新id
    //挂接到父元素
    // 获取所有数据节点data-name依次对应到数据送入节点对应属性
    // 移除新节点到影藏属性d-none
}
displayOrderList();