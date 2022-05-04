const handleCart = (cart, code) => {
    let check = true;
    if (cart.length > 0) {
        cart.forEach((item) => {
            if (item.code === code) {
                check = false;
            }
        });
        return check;
    }else {
        return check;
    }
};

module.exports = handleCart;
