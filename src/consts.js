export const INITIAL_PIZZA_PRICE = 200;

export const SIZE = [
  {
    id: 1,
    variant: "30 cm",
    value: 30,
    additionalPrice: 0,
    price: function() {
      return INITIAL_PIZZA_PRICE + this.additionalPrice;
    }
  },
  {
    id: 2,
    variant: "35 cm",
    value: 35,
    additionalPrice: 50,
    price: function() {
      return INITIAL_PIZZA_PRICE + this.additionalPrice;
    }
  }
];

export const DOUGH = [
  {
    id: 3,
    variant: "Тонкое",
    value: "thin",
    additionalPrice: 0
  },
  {
    id: 4,
    variant: "Пышное",
    value: "thick",
    additionalPrice: 0
  }
];

export const SAUCE = [
  {
    id: 5,
    variant: "Томатный",
    value: "tomato",
    additionalPrice: 0
  },
  {
    id: 6,
    variant: "Белый",
    value: "white",
    additionalPrice: 0
  },
  {
    id: 7,
    variant: "Острый",
    value: "hot",
    additionalPrice: 0
  }
];

export const CHEESE = [
  {
    id: 8,
    type: "checkbox",
    variant: "Моцарелла",
    value: "mozzarella",
    additionalPrice: 29
  },
  {
    id: 9,
    type: "checkbox",
    variant: "Чеддер",
    value: "cheddar",
    additionalPrice: 29
  },
  {
    id: 10,
    type: "checkbox",
    variant: "Дор блю",
    value: "dorblu",
    additionalPrice: 29
  }
];

export const VEGGIES = [
  {
    id: 11,
    variant: "Томаты",
    value: "tomato",
    additionalPrice: 29
  },
  {
    id: 12,
    variant: "Грибы",
    value: "mushrooms",
    additionalPrice: 29
  },
  {
    id: 13,
    variant: "Перец",
    value: "pepper",
    additionalPrice: 29
  }
];

export const MEAT = [
  {
    id: 14,
    variant: "Бекон",
    value: "bacon",
    additionalPrice: 29
  },
  {
    id: 15,
    variant: "Пепперони",
    value: "pepperoni",
    additionalPrice: 29
  },
  {
    id: 16,
    variant: "Ветчина",
    value: "ham",
    additionalPrice: 29
  }
];

export const INITIAL_PIZZA_CONFIG = {
  size: SIZE[0].variant,
  dough: DOUGH[0].variant,
  sauce: SAUCE[0].variant,
  cheese: [],
  veggies: [],
  meat: []
};