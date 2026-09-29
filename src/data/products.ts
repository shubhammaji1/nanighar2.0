export interface Product {
  id: string;
  itemNumber: number;
  name: string;
  category:
    | 'Thalis & Combos'
    | 'Chops & Cutlets'
    | 'Breakfast & Tiffin'
    | 'Chowmein & Maggi'
    | 'Sandwiches & Continental'
    | 'Chai & Beverages'
    | 'Desserts';
  price: number;
  originalPrice?: number;
  diet: 'veg' | 'non-veg';
  description: string;
  image: string;
  tag?: 'BESTSELLER' | "CHEF'S PICK" | 'SHARK TANK SPECIAL' | 'POPULAR';
  rating: number;
  reviewsCount: number;
  variants?: string[];
  weights?: string[];
  prepTime: string;
  calories?: string;
  ingredients?: string[];
}

export const PRODUCTS: Product[] = [
  // 1
  {
    id: 'egg-chicken-protein-bowls',
    itemNumber: 1,
    name: 'Egg & Chicken Protein Bowls',
    category: 'Breakfast & Tiffin',
    price: 120,
    originalPrice: 150,
    diet: 'non-veg',
    description: 'Wholesome high-protein bowl of seasoned tender boiled chicken, farm-fresh boiled eggs, steamed broccoli, baby carrots, and crisp greens.',
    image: '/images/Egg & Chicken protein bowl.avif',
    tag: "CHEF'S PICK",
    rating: 4.9,
    reviewsCount: 310,
    prepTime: '10 mins',
    calories: '380 kcal',
    ingredients: ['Boiled Chicken Breast', 'Farm Eggs', 'Broccoli', 'Baby Carrots', 'Lettuce', 'Lemon Pepper']
  },
  // 2
  {
    id: 'plain-omelette',
    itemNumber: 2,
    name: 'Plain Omelette',
    category: 'Breakfast & Tiffin',
    price: 60,
    originalPrice: 75,
    diet: 'non-veg',
    description: 'Double farm egg fluffy homestyle omelette lightly seasoned with salt and cracked black pepper, pan-cooked golden in butter.',
    image: '/images/plain omelette.avif',
    rating: 4.7,
    reviewsCount: 190,
    prepTime: '8 mins',
    calories: '180 kcal'
  },
  // 3
  {
    id: 'chicken-pasta',
    itemNumber: 3,
    name: 'Chicken Pasta',
    category: 'Sandwiches & Continental',
    price: 125,
    originalPrice: 150,
    diet: 'non-veg',
    description: 'Italian penne tossed in velvety creamy white sauce with tender chicken pieces, aromatic garlic herbs, and grated parmesan.',
    image: '/images/chicken pasta.avif',
    tag: 'POPULAR',
    rating: 4.85,
    reviewsCount: 270,
    prepTime: '15 mins',
    calories: '540 kcal'
  },
  // 4
  {
    id: 'veg-pasta',
    itemNumber: 4,
    name: 'Veg Pasta',
    category: 'Sandwiches & Continental',
    price: 90,
    originalPrice: 110,
    diet: 'veg',
    description: 'Fusilli pasta tossed in rich herb cheese sauce with crunchy broccoli, bell peppers, sweet corn, and garden herbs.',
    image: '/images/veg pasta.avif',
    rating: 4.7,
    reviewsCount: 180,
    prepTime: '15 mins',
    calories: '450 kcal'
  },
  // 5
  {
    id: 'lemon-tea',
    itemNumber: 5,
    name: 'Lemon Tea',
    category: 'Chai & Beverages',
    price: 20,
    originalPrice: 25,
    diet: 'veg',
    description: 'Refreshing hot tea infused with fresh citrus lemon juice and rock salt for an invigorating pick-me-up.',
    image: '/images/lemon tea.avif',
    rating: 4.8,
    reviewsCount: 290,
    prepTime: '5 mins',
    calories: '25 kcal'
  },
  // 6
  {
    id: 'paneer-paratha-curd',
    itemNumber: 6,
    name: 'Paneer Paratha (1 pc) with Curd',
    category: 'Breakfast & Tiffin',
    price: 80,
    originalPrice: 100,
    diet: 'veg',
    description: 'Golden tawa-roasted layered paratha generously stuffed with grated fresh cottage cheese, mild green chilies, and herbs, served with cool curd.',
    image: '/images/paneer paratha (1pc) with curd.avif',
    tag: 'BESTSELLER',
    rating: 4.85,
    reviewsCount: 340,
    prepTime: '12 mins',
    calories: '390 kcal'
  },
  // 7
  {
    id: 'aloo-paratha-curd',
    itemNumber: 7,
    name: 'Aloo Paratha 1pc with Curd',
    category: 'Breakfast & Tiffin',
    price: 60,
    originalPrice: 75,
    diet: 'veg',
    description: 'Crisp handmade whole-wheat paratha stuffed with spicy mashed potato filling and cumin, served with creamy fresh curd.',
    image: '/images/Aloo Paratha 1pc with Curd.avif',
    rating: 4.8,
    reviewsCount: 260,
    prepTime: '12 mins',
    calories: '350 kcal'
  },
  // 8
  {
    id: 'garlic-bread-2pcs',
    itemNumber: 8,
    name: 'Garlic Bread (2pcs)',
    category: 'Sandwiches & Continental',
    price: 50,
    originalPrice: 65,
    diet: 'veg',
    description: 'Freshly toasted artisan baguette slices brushed with fragrant roasted garlic butter and Italian parsley.',
    image: '/images/Garlic Bread (2pcs).avif',
    rating: 4.7,
    reviewsCount: 160,
    prepTime: '8 mins',
    calories: '180 kcal'
  },
  // 9
  {
    id: 'chilli-cheese-garlic-bread-2pcs',
    itemNumber: 9,
    name: 'Chilli Cheese Garlic Bread (2pcs)',
    category: 'Sandwiches & Continental',
    price: 65,
    originalPrice: 80,
    diet: 'veg',
    description: 'Toasted garlic bread topped with melted cheddar & mozzarella blend, spicy green chilies, and oregano.',
    image: '/images/Chilli Cheese Garlic Bread (2pcs).avif',
    tag: 'POPULAR',
    rating: 4.85,
    reviewsCount: 220,
    prepTime: '10 mins',
    calories: '240 kcal'
  },
  // 10
  {
    id: 'cheese-garlic-bread-2pcs',
    itemNumber: 10,
    name: 'Cheese Garlic Bread (2pcs)',
    category: 'Sandwiches & Continental',
    price: 60,
    originalPrice: 75,
    diet: 'veg',
    description: 'Crispy warm baguette smothered with creamy melted cheese and rich roasted garlic butter.',
    image: '/images/Cheese Garlic Bread (2pcs).avif',
    rating: 4.8,
    reviewsCount: 200,
    prepTime: '8 mins',
    calories: '220 kcal'
  },
  // 11
  {
    id: 'cheese-corn-sandwitch',
    itemNumber: 11,
    name: 'Cheese Corn Sandwitch',
    category: 'Sandwiches & Continental',
    price: 78,
    originalPrice: 95,
    diet: 'veg',
    description: 'Golden grilled sandwich stuffed with sweet corn kernels, gooey melted cheese, bell peppers, and house seasoning.',
    image: '/images/Cheese Corn Sandwitch.avif',
    rating: 4.75,
    reviewsCount: 190,
    prepTime: '10 mins',
    calories: '310 kcal'
  },
  // 12
  {
    id: 'poha',
    itemNumber: 12,
    name: 'Poha',
    category: 'Breakfast & Tiffin',
    price: 39,
    originalPrice: 50,
    diet: 'veg',
    description: 'Light flattened rice tossed with crunchy roasted peanuts, mustard seeds, curry leaves, turmeric, and fresh lemon.',
    image: '/images/poha.avif',
    tag: 'BESTSELLER',
    rating: 4.8,
    reviewsCount: 380,
    prepTime: '8 mins',
    calories: '260 kcal'
  },
  // 13
  {
    id: 'chicken-chowmein',
    itemNumber: 13,
    name: 'Chicken Chowmein',
    category: 'Chowmein & Maggi',
    price: 150,
    originalPrice: 180,
    diet: 'non-veg',
    description: 'Kolkata cabin-style wok tossed noodles loaded with seasoned tender chicken chunks, crisp cabbage, capsicum, and green chilies.',
    image: '/images/Chicken Chowmein.avif',
    tag: 'BESTSELLER',
    rating: 4.9,
    reviewsCount: 520,
    prepTime: '15 mins',
    calories: '520 kcal'
  },
  // 14
  {
    id: 'veg-chowmein',
    itemNumber: 14,
    name: 'Veg Chowmein',
    category: 'Chowmein & Maggi',
    price: 90,
    originalPrice: 110,
    diet: 'veg',
    description: 'Street-style wok-tossed hakka noodles with sliced carrots, bell peppers, crunchy beans, cabbage, and desi Chinese seasoning.',
    image: '/images/Veg Chowmein.avif',
    rating: 4.7,
    reviewsCount: 240,
    prepTime: '12 mins',
    calories: '380 kcal'
  },
  // 15
  {
    id: 'egg-chowmein',
    itemNumber: 15,
    name: 'Egg Chowmein',
    category: 'Chowmein & Maggi',
    price: 110,
    originalPrice: 130,
    diet: 'non-veg',
    description: 'Fragrant wok-fried noodles tossed with generous scrambled eggs, onions, capsicum, soy sauce, and aromatic black pepper.',
    image: '/images/Egg Chowmein.avif',
    tag: 'POPULAR',
    rating: 4.8,
    reviewsCount: 310,
    prepTime: '12 mins',
    calories: '440 kcal'
  },
  // 16
  {
    id: 'brownie-ice-cream',
    itemNumber: 16,
    name: 'Brownie with Ice Cream',
    category: 'Desserts',
    price: 99,
    originalPrice: 125,
    diet: 'veg',
    description: 'Sizzling warm dark chocolate fudge brownie topped with a chilled scoop of velvety vanilla ice cream and warm fudge drizzle.',
    image: '/images/Brownie with Ice Cream.avif',
    tag: 'BESTSELLER',
    rating: 4.95,
    reviewsCount: 610,
    prepTime: '5 mins',
    calories: '450 kcal'
  },
  // 17
  {
    id: 'hot-brownie',
    itemNumber: 17,
    name: 'Hot Brownie',
    category: 'Desserts',
    price: 55,
    originalPrice: 70,
    diet: 'veg',
    description: 'Melt-in-mouth artisanal baked dark cocoa walnut brownie served piping hot from the oven.',
    image: '/images/Hot Brownie.avif',
    rating: 4.85,
    reviewsCount: 380,
    prepTime: '5 mins',
    calories: '310 kcal'
  },
  // 18
  {
    id: 'chicken-burger',
    itemNumber: 18,
    name: 'Chicken Burger',
    category: 'Sandwiches & Continental',
    price: 90,
    originalPrice: 115,
    diet: 'non-veg',
    description: 'Juicy spiced minced chicken patty nestled inside a soft toasted sesame bun with crisp lettuce, onion rings, and creamy house mayo.',
    image: '/images/Chicken Burger.avif',
    rating: 4.8,
    reviewsCount: 230,
    prepTime: '12 mins',
    calories: '430 kcal'
  },
  // 19
  {
    id: 'mango-milk-shake',
    itemNumber: 19,
    name: 'Mango Milk Shake',
    category: 'Chai & Beverages',
    price: 105,
    originalPrice: 130,
    diet: 'veg',
    description: 'Creamy thick shake blended with ripe Alphonso mangoes and full-cream milk, served chilled with chopped pistachio garnish.',
    image: '/images/mango milk shake.avif',
    tag: 'POPULAR',
    rating: 4.85,
    reviewsCount: 290,
    prepTime: '5 mins',
    calories: '280 kcal'
  },
  // 20
  {
    id: 'vanilla-milk-shake',
    itemNumber: 20,
    name: 'Vanilla Milk Shake',
    category: 'Chai & Beverages',
    price: 105,
    originalPrice: 130,
    diet: 'veg',
    description: 'Classic chilled milkshake made with pure Madagascar vanilla extract, rich milk, and a creamy frothy finish.',
    image: '/images/Vanilla Milk Shake.avif',
    rating: 4.7,
    reviewsCount: 150,
    prepTime: '5 mins',
    calories: '260 kcal'
  },
  // 21
  {
    id: 'chocolate-milk-shake',
    itemNumber: 21,
    name: 'Chocolate Milk Shake',
    category: 'Chai & Beverages',
    price: 105,
    originalPrice: 130,
    diet: 'veg',
    description: 'Rich and indulgent chilled chocolate shake made with dark cocoa syrup, whipped milk, and chocolate flakes.',
    image: '/images/chocolate milk shake.avif',
    rating: 4.85,
    reviewsCount: 320,
    prepTime: '5 mins',
    calories: '310 kcal'
  },
  // 22
  {
    id: 'cold-coffee',
    itemNumber: 22,
    name: 'Cold Coffee',
    category: 'Chai & Beverages',
    price: 79,
    originalPrice: 99,
    diet: 'veg',
    description: 'Chilled Arabica espresso blend blended smooth with thick milk, vanilla syrup, and light chocolate dust.',
    image: '/images/cold coffe.avif',
    tag: 'BESTSELLER',
    rating: 4.9,
    reviewsCount: 440,
    prepTime: '5 mins',
    calories: '210 kcal'
  },
  // 23
  {
    id: 'mango-lassi',
    itemNumber: 23,
    name: 'Mango Lassi',
    category: 'Chai & Beverages',
    price: 104,
    originalPrice: 125,
    diet: 'veg',
    description: 'Authentic Punjabi style thick sweet yogurt churned with ripe mango pulp and crushed green cardamom.',
    image: '/images/mango lassi.avif',
    rating: 4.9,
    reviewsCount: 370,
    prepTime: '5 mins',
    calories: '240 kcal'
  },
  // 24
  {
    id: 'plain-lassi',
    itemNumber: 24,
    name: 'Plain Lassi',
    category: 'Chai & Beverages',
    price: 82,
    originalPrice: 99,
    diet: 'veg',
    description: 'Traditional sweet churned homestyle yogurt topped with a dollop of malai and rose water aroma.',
    image: '/images/plain lassi.avif',
    rating: 4.8,
    reviewsCount: 220,
    prepTime: '5 mins',
    calories: '190 kcal'
  },
  // 25
  {
    id: 'masala-omelette',
    itemNumber: 25,
    name: 'Masala Omelette',
    category: 'Breakfast & Tiffin',
    price: 70,
    originalPrice: 85,
    diet: 'non-veg',
    description: 'Two farm eggs whisked with finely diced red onions, fresh tomatoes, fiery green chilies, and coriander, cooked golden brown.',
    image: '/images/Masala Omelette.avif',
    tag: 'BESTSELLER',
    rating: 4.85,
    reviewsCount: 390,
    prepTime: '8 mins',
    calories: '210 kcal'
  },
  // 26
  {
    id: 'veg-grilled-sandwitch',
    itemNumber: 26,
    name: 'Veg Grilled Sandwitch',
    category: 'Sandwiches & Continental',
    price: 70,
    originalPrice: 85,
    diet: 'veg',
    description: 'Toasted crisp sandwich stuffed with sliced potatoes, cucumber, juicy tomatoes, spiced mint-coriander chutney, and cheese.',
    image: '/images/Veg Grilled Sandwitch.avif',
    rating: 4.75,
    reviewsCount: 260,
    prepTime: '10 mins',
    calories: '290 kcal'
  },
  // 27
  {
    id: 'chicken-maggie',
    itemNumber: 27,
    name: 'Chicken Maggie',
    category: 'Chowmein & Maggi',
    price: 79,
    originalPrice: 95,
    diet: 'non-veg',
    description: 'Classic 2-minute Maggi noodles tossed with shredded spiced chicken, sweet onions, butter, and extra magic tastemaker.',
    image: '/images/Chicken Maggie.avif',
    tag: 'POPULAR',
    rating: 4.85,
    reviewsCount: 350,
    prepTime: '8 mins',
    calories: '380 kcal'
  },
  // 28
  {
    id: 'chicken-sandwitch-without-grilled',
    itemNumber: 28,
    name: 'Chicken Sandwitch (With Out Grilled)',
    category: 'Sandwiches & Continental',
    price: 85,
    originalPrice: 105,
    diet: 'non-veg',
    description: 'Soft sandwich bread slices filled with generous shredded herb chicken, smooth creamy mayonnaise, and black pepper.',
    image: '/images/Chicken Sandwitch (With Out Grilled).avif',
    rating: 4.7,
    reviewsCount: 180,
    prepTime: '8 mins',
    calories: '340 kcal'
  },
  // 29
  {
    id: 'chicken-grilled-sandwitch',
    itemNumber: 29,
    name: 'Chicken Grilled Sandwitch',
    category: 'Sandwiches & Continental',
    price: 90,
    originalPrice: 110,
    diet: 'non-veg',
    description: 'Crunchy golden butter-grilled sandwich stuffed with juicy spiced chicken chunks, chopped onions, and creamy mayo.',
    image: '/images/Chicken Grilled Sandwitch.avif',
    tag: 'BESTSELLER',
    rating: 4.9,
    reviewsCount: 420,
    prepTime: '10 mins',
    calories: '390 kcal'
  },
  // 30
  {
    id: 'maggie',
    itemNumber: 30,
    name: 'Maggie',
    category: 'Chowmein & Maggi',
    price: 30,
    originalPrice: 40,
    diet: 'veg',
    description: 'The ultimate comforting classic: steaming hot homestyle Maggi noodles cooked with signature spices.',
    image: '/images/Maggie.avif',
    rating: 4.8,
    reviewsCount: 480,
    prepTime: '6 mins',
    calories: '280 kcal'
  },
  // 31
  {
    id: 'chicken-egg-maggi',
    itemNumber: 31,
    name: 'Chicken Egg Maggi',
    category: 'Chowmein & Maggi',
    price: 100,
    originalPrice: 120,
    diet: 'non-veg',
    description: 'Loaded special Maggi cooked with tender shredded chicken, scrambled farm egg, butter, green chilies, and extra seasoning.',
    image: '/images/Chicken Egg Maggi.avif',
    tag: "CHEF'S PICK",
    rating: 4.9,
    reviewsCount: 360,
    prepTime: '10 mins',
    calories: '450 kcal'
  },
  // 32
  {
    id: 'veg-burger',
    itemNumber: 32,
    name: 'Veg Burger',
    category: 'Sandwiches & Continental',
    price: 70,
    originalPrice: 85,
    diet: 'veg',
    description: 'Crisp golden vegetable patty with lettuce, tomatoes, creamy veg mayonnaise, and tangy ketchup in a toasted bun.',
    image: '/images/Veg Burger.avif',
    rating: 4.65,
    reviewsCount: 190,
    prepTime: '10 mins',
    calories: '360 kcal'
  },
  // 33
  {
    id: 'boiled-egg',
    itemNumber: 33,
    name: 'Boiled Egg',
    category: 'Breakfast & Tiffin',
    price: 30,
    originalPrice: 38,
    diet: 'non-veg',
    description: 'Two farm-fresh eggs hard-boiled to perfection, served with rock salt and crushed black pepper.',
    image: '/images/Boiled Egg.avif',
    rating: 4.75,
    reviewsCount: 220,
    prepTime: '5 mins',
    calories: '155 kcal'
  },
  // 34
  {
    id: 'egg-poach',
    itemNumber: 34,
    name: 'Egg Poach',
    category: 'Breakfast & Tiffin',
    price: 50,
    originalPrice: 65,
    diet: 'non-veg',
    description: 'Double eggs sunny side up pan-poached with soft runny yolk, butter, and crushed black pepper.',
    image: '/images/Egg Poach.avif',
    rating: 4.8,
    reviewsCount: 210,
    prepTime: '6 mins',
    calories: '175 kcal'
  },
  // 35
  {
    id: 'egg-maggi',
    itemNumber: 35,
    name: 'Egg Maggi',
    category: 'Chowmein & Maggi',
    price: 51,
    originalPrice: 65,
    diet: 'non-veg',
    description: 'Comforting Maggi noodles cooked with scrambled egg, finely diced onions, green chilies, and butter.',
    image: '/images/Egg Maggi.avif',
    tag: 'POPULAR',
    rating: 4.8,
    reviewsCount: 340,
    prepTime: '8 mins',
    calories: '340 kcal'
  },
  // 36
  {
    id: 'dim-pauruti',
    itemNumber: 36,
    name: 'Dim Pauruti',
    category: 'Breakfast & Tiffin',
    price: 55,
    originalPrice: 70,
    diet: 'non-veg',
    description: 'Kolkata street-style savory egg French toast: fluffy white bread coated in egg batter with chopped onions & green chilies, pan-toasted crisp in butter.',
    image: '/images/Dim Pauruti.avif',
    tag: 'BESTSELLER',
    rating: 4.9,
    reviewsCount: 410,
    prepTime: '8 mins',
    calories: '270 kcal'
  },
  // 37
  {
    id: 'paratha-cholar-dal-combo',
    itemNumber: 37,
    name: 'Paratha With Cholar Dal Combo',
    category: 'Breakfast & Tiffin',
    price: 60,
    originalPrice: 75,
    diet: 'veg',
    description: 'Two flaky triangular layered parathas paired with aromatic sweet-and-savory Bengali Cholar Dal tempered with coconut slivers and hing.',
    image: '/images/Paratha With Cholar Dal Combo.avif',
    tag: 'BESTSELLER',
    rating: 4.85,
    reviewsCount: 330,
    prepTime: '12 mins',
    calories: '420 kcal'
  },
  // 38
  {
    id: 'luchi-cholar-dal-combo',
    itemNumber: 38,
    name: 'Luchi Cholar Dal Combo',
    category: 'Breakfast & Tiffin',
    price: 60,
    originalPrice: 75,
    diet: 'veg',
    description: '4 puffed golden white flour luchis served with rich Cholar Dal with fried coconut bits and raisins.',
    image: '/images/Luchi Cholar Dal Combo.avif',
    tag: 'SHARK TANK SPECIAL',
    rating: 4.95,
    reviewsCount: 580,
    prepTime: '12 mins',
    calories: '460 kcal'
  },
  // 39
  {
    id: 'mango-crush',
    itemNumber: 39,
    name: 'Mango Crush',
    category: 'Chai & Beverages',
    price: 104,
    originalPrice: 125,
    diet: 'veg',
    description: 'Icy slush cooler made with real sun-ripened Alphonso mango crush, sparkling soda, and mint leaves.',
    image: '/images/mango crush.avif',
    rating: 4.75,
    reviewsCount: 160,
    prepTime: '5 mins',
    calories: '150 kcal'
  },
  // 40
  {
    id: 'virgin-mojito',
    itemNumber: 40,
    name: 'Virgin Mojito',
    category: 'Chai & Beverages',
    price: 93,
    originalPrice: 115,
    diet: 'veg',
    description: 'Crisp, refreshing muddled lime wedges, fresh garden mint, pure cane sugar syrup, and fizzy chilled soda.',
    image: '/images/Virgin Mojito.avif',
    tag: 'POPULAR',
    rating: 4.8,
    reviewsCount: 250,
    prepTime: '5 mins',
    calories: '110 kcal'
  },
  // 41
  {
    id: 'blue-lagoon',
    itemNumber: 41,
    name: 'Blue Lagoon',
    category: 'Chai & Beverages',
    price: 104,
    originalPrice: 125,
    diet: 'veg',
    description: 'Vibrant blue citrus mocktail with notes of blue curaçao syrup, lemon juice, sprite, and crushed ice.',
    image: '/images/blue lagoon.avif',
    rating: 4.8,
    reviewsCount: 210,
    prepTime: '5 mins',
    calories: '130 kcal'
  },
  // 42
  {
    id: 'milk-coffee',
    itemNumber: 42,
    name: 'Milk Coffee',
    category: 'Chai & Beverages',
    price: 32,
    originalPrice: 40,
    diet: 'veg',
    description: 'Hot frothy homestyle coffee brewed with rich milk and caramelized sugar for an instant soothing kick.',
    image: '/images/Milk Coffee.avif',
    rating: 4.75,
    reviewsCount: 310,
    prepTime: '5 mins',
    calories: '95 kcal'
  },
  // 43
  {
    id: 'black-coffee',
    itemNumber: 43,
    name: 'Black Coffee',
    category: 'Chai & Beverages',
    price: 26,
    originalPrice: 35,
    diet: 'veg',
    description: 'Freshly extracted dark roast Arabica espresso liquor with intense aroma and clean notes.',
    image: '/images/Black Coffee.avif',
    rating: 4.8,
    reviewsCount: 220,
    prepTime: '4 mins',
    calories: '5 kcal'
  },
  // 44
  {
    id: 'hibiscus-flower-tea',
    itemNumber: 44,
    name: 'Hibiscus Flower Tea',
    category: 'Chai & Beverages',
    price: 74,
    originalPrice: 90,
    diet: 'veg',
    description: 'Ruby red herbal infusion of wild sun-dried hibiscus blossoms, tart and refreshing, rich in vitamin C.',
    image: '/images/Hibiscus Flower Tea.avif',
    tag: 'BESTSELLER',
    rating: 4.95,
    reviewsCount: 380,
    prepTime: '5 mins',
    calories: '8 kcal'
  },
  // 45
  {
    id: 'rose-black-tea',
    itemNumber: 45,
    name: 'Rose Black Tea',
    category: 'Chai & Beverages',
    price: 68,
    originalPrice: 85,
    diet: 'veg',
    description: 'Full-bodied black tea blended with dried Damask rose petals for an exquisite fragrant cup.',
    image: '/images/Rose Black Tea.avif',
    rating: 4.9,
    reviewsCount: 290,
    prepTime: '5 mins',
    calories: '6 kcal'
  },
  // 46
  {
    id: 'chamomile-tea',
    itemNumber: 46,
    name: 'Chamomile Tea',
    category: 'Chai & Beverages',
    price: 79,
    originalPrice: 99,
    diet: 'veg',
    description: 'Soothing organic whole chamomile flower tisane with gentle floral sweetness, perfect for relaxing evenings.',
    image: '/images/Chamomile Tea.avif',
    rating: 4.9,
    reviewsCount: 210,
    prepTime: '5 mins',
    calories: '5 kcal'
  },
  // 47
  {
    id: 'darjeeling-blue-tea',
    itemNumber: 47,
    name: 'Darjeeling Blue Tea',
    category: 'Chai & Beverages',
    price: 79,
    originalPrice: 99,
    diet: 'veg',
    description: 'Mesmerizing natural sapphire infusion of dried Aparajita (Butterfly Pea) blossoms with Darjeeling herbs.',
    image: '/images/Darjeeling Blue Tea.avif',
    tag: "CHEF'S PICK",
    rating: 4.95,
    reviewsCount: 280,
    prepTime: '5 mins',
    calories: '5 kcal'
  },
  // 48
  {
    id: 'darjeeling-olong-tea',
    itemNumber: 48,
    name: 'Darjeeling Olong Tea',
    category: 'Chai & Beverages',
    price: 68,
    originalPrice: 85,
    diet: 'veg',
    description: 'Semi-oxidized artisan Oolong tea leaves from Darjeeling hills offering complex toasted floral honey notes.',
    image: '/images/Darjeeling Olong Tea.avif',
    rating: 4.85,
    reviewsCount: 190,
    prepTime: '5 mins',
    calories: '5 kcal'
  },
  // 49
  {
    id: 'darjeeling-makaibari-tea',
    itemNumber: 49,
    name: 'Darjeeling Makaibari Tea',
    category: 'Chai & Beverages',
    price: 68,
    originalPrice: 85,
    diet: 'veg',
    description: 'Single-estate certified organic tea from the legendary Makaibari tea gardens, celebrated globally for its muscatel aroma.',
    image: '/images/Darjeeling Makaibari Tea.avif',
    tag: 'BESTSELLER',
    rating: 4.95,
    reviewsCount: 360,
    prepTime: '5 mins',
    calories: '4 kcal'
  },
  // 50
  {
    id: 'darjeeling-2nd-flush-tea',
    itemNumber: 50,
    name: 'Darjeeling 2nd Flush Tea',
    category: 'Chai & Beverages',
    price: 53,
    originalPrice: 70,
    diet: 'veg',
    description: 'Summer-harvested Darjeeling black tea known for its deep amber liquor and prominent muscat grape flavor.',
    image: '/images/Darjeeling 2nd Flush Tea.avif',
    rating: 4.8,
    reviewsCount: 240,
    prepTime: '5 mins',
    calories: '5 kcal'
  },
  // 51
  {
    id: 'elaichi-milk-tea',
    itemNumber: 51,
    name: 'Elaichi Milk Tea',
    category: 'Chai & Beverages',
    price: 21,
    originalPrice: 28,
    diet: 'veg',
    description: 'Full-bodied Assam CTC tea boiled with whole crushed green cardamoms and creamy milk.',
    image: '/images/Elaichi Milk Tea.avif',
    tag: 'POPULAR',
    rating: 4.9,
    reviewsCount: 680,
    prepTime: '5 mins',
    calories: '90 kcal'
  },
  // 52
  {
    id: 'black-tea',
    itemNumber: 52,
    name: 'Black Tea',
    category: 'Chai & Beverages',
    price: 16,
    originalPrice: 22,
    diet: 'veg',
    description: 'Clean amber liquor tea brewed fresh to order with pure tea leaves.',
    image: '/images/Black Tea.avif',
    rating: 4.7,
    reviewsCount: 270,
    prepTime: '4 mins',
    calories: '4 kcal'
  },
  // 53
  {
    id: 'paneer-cutlet',
    itemNumber: 53,
    name: 'Paneer Cutlet',
    category: 'Chops & Cutlets',
    price: 93,
    originalPrice: 115,
    diet: 'veg',
    description: 'Spiced malai paneer patty mixed with herbs, coated in breadcrumbs and deep-fried golden crisp, served with mint chutney.',
    image: '/images/Paneer Cutlet.avif',
    tag: 'POPULAR',
    rating: 4.85,
    reviewsCount: 290,
    prepTime: '12 mins',
    calories: '340 kcal'
  },
  // 54
  {
    id: 'mochar-chop',
    itemNumber: 54,
    name: 'Mochar Chop',
    category: 'Chops & Cutlets',
    price: 41,
    originalPrice: 55,
    diet: 'veg',
    description: 'Traditional Bengali heritage croquette made from tender banana blossoms (mocha), roasted peanuts, coconut, and bhaja masala.',
    image: '/images/Mochar Chop.avif',
    tag: "CHEF'S PICK",
    rating: 4.95,
    reviewsCount: 460,
    prepTime: '10 mins',
    calories: '220 kcal'
  },
  // 55
  {
    id: 'paneer-chop',
    itemNumber: 55,
    name: 'Paneer Chop',
    category: 'Chops & Cutlets',
    price: 62,
    originalPrice: 75,
    diet: 'veg',
    description: 'Soft cottage cheese stuffed inside spiced potato mash, batter coated and deep fried till crunchy golden brown.',
    image: '/images/Paneer Chop.avif',
    rating: 4.75,
    reviewsCount: 230,
    prepTime: '10 mins',
    calories: '260 kcal'
  },
  // 56
  {
    id: 'veg-chop',
    itemNumber: 56,
    name: 'Veg Chop',
    category: 'Chops & Cutlets',
    price: 32,
    originalPrice: 42,
    diet: 'veg',
    description: 'Classic Kolkata street chop filled with sweet beetroot, potatoes, crunchy peanuts, and roasted cumin masala.',
    image: '/images/Veg Chop.avif',
    tag: 'BESTSELLER',
    rating: 4.9,
    reviewsCount: 650,
    prepTime: '8 mins',
    calories: '190 kcal'
  },
  // 57
  {
    id: 'fish-er-pur-diye-egg-devil',
    itemNumber: 57,
    name: 'Fish Er Pur Diye Egg Devil',
    category: 'Chops & Cutlets',
    price: 93,
    originalPrice: 120,
    diet: 'non-veg',
    description: 'Royal indulgence: boiled egg coated in spiced fish mince (macher pur), crumbed and fried crisp, served with pungent Kasundi.',
    image: '/images/Fish Er Pur Diye Egg Devil.avif',
    tag: 'SHARK TANK SPECIAL',
    rating: 5.0,
    reviewsCount: 540,
    prepTime: '15 mins',
    calories: '340 kcal'
  },
  // 58
  {
    id: 'egg-devil',
    itemNumber: 58,
    name: 'Egg Devil',
    category: 'Chops & Cutlets',
    price: 62,
    originalPrice: 75,
    diet: 'non-veg',
    description: 'Bengali style Dimer Devil: hard-boiled egg wrapped in spiced potato shell, crumb-fried to crunchy perfection.',
    image: '/images/Egg Devil.avif',
    tag: 'BESTSELLER',
    rating: 4.85,
    reviewsCount: 490,
    prepTime: '10 mins',
    calories: '280 kcal'
  },
  // 59
  {
    id: 'fish-chop',
    itemNumber: 59,
    name: 'Fish Chop',
    category: 'Chops & Cutlets',
    price: 51,
    originalPrice: 65,
    diet: 'non-veg',
    description: 'Flaky fresh fish seasoned with ginger, green chilies, and garam masala, crumb-fried with a crispy shell.',
    image: '/images/Fish Chop.avif',
    rating: 4.8,
    reviewsCount: 380,
    prepTime: '10 mins',
    calories: '240 kcal'
  },
  // 60
  {
    id: 'gondhoraj-fish-fry',
    itemNumber: 60,
    name: 'Gondhoraj Fish Fry',
    category: 'Chops & Cutlets',
    price: 158,
    originalPrice: 190,
    diet: 'non-veg',
    description: 'Legendary pure Bhetki fish fillet marinated in Gondhoraj king lime, fresh cilantro-green garlic paste, and fried in crisp biscuit crumbs. Served with spicy Kasundi.',
    image: '/images/Gondhoraj Fish Fry.avif',
    tag: 'SHARK TANK SPECIAL',
    rating: 5.0,
    reviewsCount: 890,
    prepTime: '15 mins',
    calories: '360 kcal',
    ingredients: ['Fresh Bhetki Fillet', 'Gondhoraj Lime', 'Kasundi Mustard', 'Green Garlic Paste', 'Biscuit Crumb']
  },
  // 61
  {
    id: 'mutton-chop',
    itemNumber: 61,
    name: 'Mutton Chop',
    category: 'Chops & Cutlets',
    price: 156,
    originalPrice: 185,
    diet: 'non-veg',
    description: 'Rich spiced minced mutton patty slow-cooked with aromatic roasted spices, breaded and fried till deeply crisp.',
    image: '/images/Mutton Chop.avif',
    tag: "CHEF'S PICK",
    rating: 4.95,
    reviewsCount: 430,
    prepTime: '15 mins',
    calories: '390 kcal'
  },
  // 62
  {
    id: 'chicken-cutlet',
    itemNumber: 62,
    name: 'Chicken Cutlet',
    category: 'Chops & Cutlets',
    price: 104,
    originalPrice: 125,
    diet: 'non-veg',
    description: 'Tender minced chicken patty seasoned with roasted cumin and whole spices, crumb-fried crisp, served with onion rings.',
    image: '/images/Chicken Cutlet.avif',
    tag: 'BESTSELLER',
    rating: 4.85,
    reviewsCount: 520,
    prepTime: '12 mins',
    calories: '340 kcal'
  },
  // 63
  {
    id: 'chicken-nuggets',
    itemNumber: 63,
    name: 'Chicken Nuggets',
    category: 'Chops & Cutlets',
    price: 167,
    originalPrice: 195,
    diet: 'non-veg',
    description: 'Crispy golden bite-sized breaded chicken bites served with hot garlic dip and ketchup.',
    image: '/images/Chicken Nuggets.avif',
    rating: 4.75,
    reviewsCount: 260,
    prepTime: '10 mins',
    calories: '380 kcal'
  },
  // 64
  {
    id: 'peri-peri-cheesy-french-fries',
    itemNumber: 64,
    name: 'Peri Peri Cheesy French Fries',
    category: 'Chops & Cutlets',
    price: 121,
    originalPrice: 145,
    diet: 'veg',
    description: 'Crisp salted potato french fries dusted with spicy peri-peri seasoning and drenched in molten cheese sauce.',
    image: '/images/Peri Peri Cheesy French Fries.avif',
    rating: 4.85,
    reviewsCount: 310,
    prepTime: '10 mins',
    calories: '420 kcal'
  },
  // 65
  {
    id: 'french-fry',
    itemNumber: 65,
    name: 'French Fry',
    category: 'Chops & Cutlets',
    price: 53,
    originalPrice: 65,
    diet: 'veg',
    description: 'Classic hot golden crispy potato fries sprinkled with rock salt, served with tangy ketchup.',
    image: '/images/French Fry.avif',
    rating: 4.7,
    reviewsCount: 220,
    prepTime: '8 mins',
    calories: '280 kcal'
  },
  // 66
  {
    id: 'bengali-white-pulao-combo',
    itemNumber: 66,
    name: 'Bengali White Pulao Combo',
    category: 'Thalis & Combos',
    price: 125,
    originalPrice: 155,
    diet: 'non-veg',
    description: 'Fragrant sweet Gobindobhog rice pulao scented with green cardamom and ghee, paired with spicy homestyle Chicken Kosha.',
    image: '/images/Bengali White Pulao Combo.avif',
    tag: 'POPULAR',
    rating: 4.9,
    reviewsCount: 480,
    prepTime: '20 mins',
    calories: '690 kcal'
  },
  // 67
  {
    id: 'basanti-pulao-combo',
    itemNumber: 67,
    name: 'Basanti Pulao Combo',
    category: 'Thalis & Combos',
    price: 125,
    originalPrice: 155,
    diet: 'non-veg',
    description: 'Signature Bengali festive yellow saffron pulao with cashews and raisins, paired with slow-simmered rich Chicken Kosha.',
    image: '/images/Basanti Pulao Combo.avif',
    tag: 'SHARK TANK SPECIAL',
    rating: 4.95,
    reviewsCount: 840,
    prepTime: '20 mins',
    calories: '740 kcal',
    ingredients: ['Gobindobhog Rice', 'Cashews & Raisins', 'Tender Chicken', 'Pure Ghee', 'Saffron']
  },
  // 68
  {
    id: 'bhog-er-khichdi',
    itemNumber: 68,
    name: 'Bhog Er Khichdi',
    category: 'Thalis & Combos',
    price: 221,
    originalPrice: 260,
    diet: 'veg',
    description: 'Royal temple-style roasted moong dal and Gobindobhog rice khichuri simmered in pure desi ghee, served with seasonal labra sabji and chutney.',
    image: '/images/Bhog Er Khichdi.avif',
    tag: "CHEF'S PICK",
    rating: 5.0,
    reviewsCount: 420,
    prepTime: '25 mins',
    calories: '610 kcal'
  },
  // 69
  {
    id: 'bong-khichdi',
    itemNumber: 69,
    name: 'Bong Khichdi',
    category: 'Thalis & Combos',
    price: 137,
    originalPrice: 165,
    diet: 'non-veg',
    description: 'Comforting homestyle moong dal khichuri tempered with whole garam masala and cumin, served with a spiced double-egg fluffy omelette.',
    image: '/images/Bong Khichdi.avif',
    tag: 'BESTSELLER',
    rating: 4.85,
    reviewsCount: 370,
    prepTime: '20 mins',
    calories: '560 kcal'
  },
  // 70
  {
    id: 'mini-mutton-thali',
    itemNumber: 70,
    name: 'Mini Mutton Thali',
    category: 'Thalis & Combos',
    price: 305,
    originalPrice: 360,
    diet: 'non-veg',
    description: 'The supreme royal feast: slow-simmered rich Mutton Kosha in caramelized dark onion gravy, yellow dal, alu begun bhaja, rice, and salad.',
    image: '/images/Mini Mutton Thali.avif',
    tag: 'SHARK TANK SPECIAL',
    rating: 5.0,
    reviewsCount: 680,
    prepTime: '25 mins',
    calories: '810 kcal',
    ingredients: ['Tender Goat Mutton', 'Mustard Oil', 'Basmati Rice', 'Yellow Dal', 'Begun Bhaja']
  },
  // 71
  {
    id: 'moha-chicken-thali',
    itemNumber: 71,
    name: 'Moha Chicken Thali',
    category: 'Thalis & Combos',
    price: 189,
    originalPrice: 225,
    diet: 'non-veg',
    description: 'Grand bento feast: rich Bengali chicken curry with alu, seasonal cauliflower potato sabji, yellow dal, crispy alu bhaja, rice, and fresh salad.',
    image: '/images/Moha Chicken Thali.avif',
    tag: 'BESTSELLER',
    rating: 4.95,
    reviewsCount: 710,
    prepTime: '25 mins',
    calories: '720 kcal'
  },
  // 72
  {
    id: 'moha-fish-thali',
    itemNumber: 72,
    name: 'Moha Fish Thali',
    category: 'Thalis & Combos',
    price: 189,
    originalPrice: 225,
    diet: 'non-veg',
    description: 'Traditional feast: fresh sweetwater Rui/Katla fish steak in cumin-ginger gravy, soybean potato sabji, yellow dal, alu bhaja, rice, and salad.',
    image: '/images/Moha Fish Thali.avif',
    tag: "CHEF'S PICK",
    rating: 4.9,
    reviewsCount: 520,
    prepTime: '25 mins',
    calories: '650 kcal'
  },
  // 73
  {
    id: 'moha-egg-thali',
    itemNumber: 73,
    name: 'Moha Egg Thali',
    category: 'Thalis & Combos',
    price: 149,
    originalPrice: 179,
    diet: 'non-veg',
    description: 'Wholesome Bengali feast: aromatic steamed rice, rich slow-cooked egg curry (2 farm eggs), yellow dal, crispy jhuri alu bhaja, and handmade rotis.',
    image: '/images/Moha Egg Thali.avif',
    tag: 'BESTSELLER',
    rating: 4.95,
    reviewsCount: 940,
    prepTime: '20 mins',
    calories: '650 kcal',
    ingredients: ['Basmati Rice', '2 Farm Eggs', 'Mustard Oil', 'Moong Dal', 'Potatoes', 'Handmade Rotis']
  },
  // 74
  {
    id: 'moha-veg-thali',
    itemNumber: 74,
    name: 'Moha Veg Thali',
    category: 'Thalis & Combos',
    price: 122,
    originalPrice: 149,
    diet: 'veg',
    description: 'Homestyle vegetarian comfort: fragrant rice, shukto / seasonal mixed sabji, homestyle yellow dal, crispy jhuri alu bhaja, and warm rotis.',
    image: '/images/Moha Veg Thali.jpg',
    tag: 'POPULAR',
    rating: 4.85,
    reviewsCount: 460,
    prepTime: '20 mins',
    calories: '540 kcal'
  },
  // 75
  {
    id: 'omelette-egg-thali',
    itemNumber: 75,
    name: 'Omelette Egg Thali',
    category: 'Thalis & Combos',
    price: 131,
    originalPrice: 155,
    diet: 'non-veg',
    description: 'Fresh double-egg folded herb omelettes steeped in rich onion-tomato curry, served with a large bed of basmati rice, dal, and accompaniments.',
    image: '/images/Omelette Egg Thali.avif',
    rating: 4.8,
    reviewsCount: 310,
    prepTime: '18 mins',
    calories: '590 kcal'
  },
  // 76
  {
    id: 'mini-chicken-thali',
    itemNumber: 76,
    name: 'Mini Chicken Thali',
    category: 'Thalis & Combos',
    price: 158,
    originalPrice: 189,
    diet: 'non-veg',
    description: 'The lunch special: tender chicken curry, generous bowl of steamed rice, yellow dal, crispy alu bhaja, and onion salad.',
    image: '/images/Mini Chicken Thali.avif',
    tag: 'BESTSELLER',
    rating: 4.9,
    reviewsCount: 580,
    prepTime: '20 mins',
    calories: '610 kcal'
  },
  // 77
  {
    id: 'mini-fish-thali',
    itemNumber: 77,
    name: 'Mini Fish Thali',
    category: 'Thalis & Combos',
    price: 158,
    originalPrice: 189,
    diet: 'non-veg',
    description: 'Golden fried fresh fish steak in light cumin gravy with aromatic rice, yellow dal, crispy alu bhaja, and salad.',
    image: '/images/Mini Fish Thali.avif',
    rating: 4.85,
    reviewsCount: 390,
    prepTime: '20 mins',
    calories: '570 kcal'
  },
  // 78
  {
    id: 'mini-egg-thali',
    itemNumber: 78,
    name: 'Mini Egg Thali',
    category: 'Thalis & Combos',
    price: 104,
    originalPrice: 125,
    diet: 'non-veg',
    description: 'Everyday student & professional favorite: single egg curry in dark gravy, generous mound of rice, dal, and crunchy bhaja.',
    image: '/images/Mini Egg Thali.avif',
    rating: 4.75,
    reviewsCount: 420,
    prepTime: '15 mins',
    calories: '490 kcal'
  },
  // 79
  {
    id: 'mini-veg-thali',
    itemNumber: 79,
    name: 'Mini Veg Thali',
    category: 'Thalis & Combos',
    price: 100,
    originalPrice: 120,
    diet: 'veg',
    description: 'Essential everyday comfort: seasonal potato vegetable curry, homestyle yellow dal, steamed rice, crispy bhaja, and sweet chutney.',
    image: '/images/Mini Veg Thali.avif',
    rating: 4.7,
    reviewsCount: 350,
    prepTime: '15 mins',
    calories: '450 kcal'
  }
];

export const CATEGORIES = [
  'All',
  'Thalis & Combos',
  'Chops & Cutlets',
  'Breakfast & Tiffin',
  'Chowmein & Maggi',
  'Sandwiches & Continental',
  'Chai & Beverages',
  'Desserts'
] as const;

export const CATEGORY_CARDS = [
  {
    id: 'Thalis & Combos',
    title: 'Thalis & Combos',
    subtitle: 'Moha thalis, mini thalis, pulao combos & khichdi',
    image: '/images/Moha Egg Thali.avif',
    badge: '14 Dishes'
  },
  {
    id: 'Chops & Cutlets',
    title: 'Chops & Cutlets',
    subtitle: 'Gondhoraj fish fry, egg devil, cutlets & chops',
    image: '/images/Gondhoraj Fish Fry.avif',
    badge: '13 Dishes'
  },
  {
    id: 'Breakfast & Tiffin',
    title: 'Breakfast & Tiffin',
    subtitle: 'Luchi cholar dal, parathas, poha & omelettes',
    image: '/images/Masala Omelette.avif',
    badge: '11 Dishes'
  },
  {
    id: 'Chowmein & Maggi',
    title: 'Chowmein & Maggi',
    subtitle: 'Street chowmein & loaded butter maggi varieties',
    image: '/images/Chicken Chowmein.avif',
    badge: '7 Dishes'
  },
  {
    id: 'Sandwiches & Continental',
    title: 'Sandwiches & Continental',
    subtitle: 'Grilled sandwiches, pastas, burgers & garlic breads',
    image: '/images/Chicken Grilled Sandwitch.avif',
    badge: '11 Dishes'
  },
  {
    id: 'Chai & Beverages',
    title: 'Chai & Beverages',
    subtitle: 'Artisanal Darjeeling teas, coffees, lassis & shakes',
    image: '/images/Hibiscus Flower Tea.avif',
    badge: '21 Dishes'
  },
  {
    id: 'Desserts',
    title: 'Sweets & Desserts',
    subtitle: 'Hot chocolate brownies with vanilla ice cream',
    image: '/images/Brownie with Ice Cream.avif',
    badge: '2 Dishes'
  }
];
