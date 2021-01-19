import { mainActions as act } from "../redux";

export default class BookStoreService {
  data = [
    {
      id: 1,
      price: 45,
      img:
        "https://www.oreilly.com/library/view/production-ready-microservices/9781491965962/assets/cover.png",
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
    },
    {
      id: 2,
      price: 25,
      img: "https://images-na.ssl-images-amazon.com/images/I/81c%2Bo9-DetL.jpg",
      title: "Releas It!",
      author: "Michael T. Nygard",
    },
  ];

  getBooks = () => {
    return new Promise((rslv, rej) => {
      setTimeout(() => {
        act.booksLoaded(this.data);
        rslv();
      }, 1000);
    });
  };

  getCart = () => {
    return new Promise((rslv, rej) => {
      setTimeout(() => {
        act.booksLoaded(this.data);
        rslv();
      }, 1000);
    });
  };

  onDecrease = (id, cart) => {
    const newCart = { ...cart };
    const idx = newCart.cartItems.findIndex((el) => el.id === id);

    if (newCart.cartItems[idx].count > 1) {
      newCart.cartItems[idx].count--;
    } else {
      const newCartItems = cart.cartItems.filter((el) => el.id !== id);
      newCart.cartItems = [...newCartItems];
    }
    newCart.total = totalPriceHandler(newCart);
    act.onAddedToCart(newCart);
  };

  onIncrease = (id, cart) => {
    const newCart = { ...cart };
    const idx = newCart.cartItems.findIndex((el) => el.id === id);

    newCart.cartItems[idx].count++;
    newCart.total = totalPriceHandler(newCart);

    act.onAddedToCart(newCart);
  };

  onDelete = (id, cart) => {
    const newCart = { ...cart };

    const newCartItems = newCart.cartItems.filter((el) => el.id !== id);

    newCart.cartItems = [...newCartItems];
    newCart.total = totalPriceHandler(newCart);

    act.onAddedToCart(newCart);
  };

  onAddToCart = (id, books, cart) => {
    const newCart = { ...cart };
    const idx = newCart.cartItems.findIndex((el) => el.id === id);

    if (idx !== -1) {
      newCart.cartItems[idx].count++;
    } else {
      const book = books.find((el) => el.id === id);
      newCart.cartItems.push(newItem(id, book));
    }

    newCart.total = totalPriceHandler(newCart);

    act.onAddedToCart(newCart);
  };
}

const newItem = (id, book) => {
  return {
    id,
    title: book.title,
    price: book.price,
    count: 1,
  };
};

const totalPriceHandler = (cart) => {
  return cart.cartItems.reduce((acc, el) => {
    acc += el.price * el.count;
    return acc;
  }, 0);
};
