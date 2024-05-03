// في هذا الملف نقرأ الملف items.json ونعرض المنتجات في صفحة HTML

// استيراد محتوى ملف items.json باستخدام XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/items.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var items = JSON.parse(xhr.responseText);
        displayProducts(items); // عرض المنتجات عندما يكون التحميل مكتملاً
    }
};
xhr.send();


// عرض المنتجات في الصفحة
function displayProducts(items) {
    var productsContainer = document.getElementById('products_sale');
    var html = '';

    items.forEach(function(item) {
        html += '<div class="product swiper-slide">';
        html += '<img src="' + item.img + '">';
        html += '<h2 class="name">' + item.name + '</h2>';
        html += '<div class="stars">';
        html += '<i class="fa-solid fa-star fa-flip-horizontal fa-xs"></i>';
        html += '<i class="fa-solid fa-star fa-flip-horizontal fa-xs"></i>';
        html += '<i class="fa-solid fa-star fa-flip-horizontal fa-xs"></i>';
        html += '<i class="fa-solid fa-star fa-flip-horizontal fa-xs"></i>';
        html += '<i class="fa-solid fa-star fa-flip-horizontal fa-xs"></i>';
        html += '</div>';
        html += '<div class="price-container">';
        html += '<p class="price"> ' + item.price + '</p>' 
        html += '<p class="old_price"> ' + item.old_price + '</p>';
        html += '</div>';
        html += '<div class="icons">';
        html += '<i class="fa-solid fa-cart-plus" onclick="addToCart(this)"></i>';
        html += '<i class="fa-solid fa-heart"></i>';
        html += '<i class="fa-solid fa-share"></i>';
        html += '</div>';
        html += '</div>';
    });
    productsContainer.innerHTML = html;
}

