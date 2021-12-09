class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();//вывод товаров на страницу
        this.sumGoodSList();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    sumGoodSList(){
        let sum = Number();
        this.goods.forEach((item) => sum += item.price);
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
}

class Basket {
    
    constructor(){
        this.basket = [] //массив, объектов находящийся в корзине
    }
    
    //создает блок .basket и добавляет его на страницу. Изначально корзина скрыта и имеет свойство position: absolute а родитель relative
    createBasket(){

    }

    //метод будет назначает обработчик событий на кнопку корзины, при срабатывании события, класс .active добавляеться или удаляеться к блоку .basket . Будет использоваться classList.toggle(). Окно корзины будет показываться или скрываться.
    showBasket(){
        
    }

    //метод проверяет наличие совпадений в массиве this.basket = [], если совпадений нет, то добавляет товар в массив.
    productInBasket(){
        // new BasketItem() - будет возвращен объект товара со свойствами
    }

    //метод берет данные из массива с объектовами товаров, переберает их и через шаблонный литерал создает строку с HTML разметкой и она вставляется в блок корзины .basket
    renderBasket(){
        //summBasket()
    }

    //добавялет обработчик событий input на каждый элемент количества товара, при его изменении будет меняться сумма за конкретный товар и так же измняться Итоговая сумма
    //** В ДЗ  Указанно "Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров." 
    //Но несовсем было понятоно, ведь класс ProductList относиться к отрисовке товара, а не  к товару который мы добавили в корзину, ведь товаров может быть 1000
    // а добавить можем только 3 штуки
    summBasket(){

    }
}



class BasketItem{

    // метод назначает на кнопки карточек товара обработчик события 'click', при клике должен вызывать функцию createBasketItem();
    actionItemBasket(){

    }

    // метод создает и возвращает готовый объект с данными о товаре, в которм будет цена, название, описание и т.д. 
    //данные будут браться из data-атрибутов которые будут ли бо у кнопки данного товара или у самой карточки товара
    createBasketItem(){

    }

}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

let basket = new Basket();

//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);