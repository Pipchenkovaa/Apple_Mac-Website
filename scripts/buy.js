const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const product = document.getElementById('product');
document.getElementById('order-action').onclick = function (event) {
    event.preventDefault()
    let hasError = false;
    [name, email, phone, product].forEach(item => {
        if (!item.value) {
            item.style.borderColor = 'red';
            hasError = true;
        } else {
            item.style.borderColor = '';
        }
    });

    if (!hasError) {
        [name, email, phone, product].forEach(item => {
            item.value = '';
        });
    }
};
