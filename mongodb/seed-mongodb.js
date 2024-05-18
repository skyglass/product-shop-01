print("Seeding the collections in the 'productshop' db");

db.categories.insert([
    { _id: ObjectId("60d5b2e2f2d4d2e78839b1b1"), name: "Women's Fashion", slug: "womens-fashion" },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b1b2"), name: "Men's Fashion", slug: "mens-fashion" },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b1b3"), name: "Kids' Fashion", slug: "kids-fashion" },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b1b4"), name: "Activewear", slug: "activewear" },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b1b5"), name: "Formal Wear", slug: "formal-wear" },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b1b6"), name: "Casual Wear", slug: "casual-wear" },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b1b7"), name: "Shoes", slug: "shoes" },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b1b8"), name: "Accessories", slug: "accessories" }
  ]);

db.tags.insert([
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2a1"), name: "Dresses", slug: "dresses", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2a2"), name: "Tops", slug: "tops", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2a3"), name: "Bottoms", slug: "bottoms", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2a4"), name: "Outerwear", slug: "outerwear", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2a5"), name: "Activewear", slug: "activewear", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2a6"), name: "Swimwear", slug: "swimwear", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2a7"), name: "Lingerie", slug: "lingerie", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2a8"), name: "Accessories", slug: "accessories", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2a9"), name: "Shoes", slug: "shoes", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2aa"), name: "Handbags", slug: "handbags", parent: ObjectId("60d5b2e2f2d4d2e78839b1b1") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2ab"), name: "Shirts", slug: "shirts", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2ac"), name: "T-Shirts", slug: "t-shirts", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2ad"), name: "Pants", slug: "pants", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2ae"), name: "Jeans", slug: "jeans", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2af"), name: "Suits", slug: "suits", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b0"), name: "Blazers", slug: "blazers", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b1"), name: "Activewear", slug: "activewear", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b2"), name: "Underwear", slug: "underwear", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b3"), name: "Accessories", slug: "accessories", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b4"), name: "Shoes", slug: "shoes", parent: ObjectId("60d5b2e2f2d4d2e78839b1b2") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b5"), name: "Boys' Clothing", slug: "boys-clothing", parent: ObjectId("60d5b2e2f2d4d2e78839b1b3") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b6"), name: "Girls' Clothing", slug: "girls-clothing", parent: ObjectId("60d5b2e2f2d4d2e78839b1b3") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b7"), name: "Baby Clothing", slug: "baby-clothing", parent: ObjectId("60d5b2e2f2d4d2e78839b1b3") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b8"), name: "Toddler Clothing", slug: "toddler-clothing", parent: ObjectId("60d5b2e2f2d4d2e78839b1b3") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2b9"), name: "Kids' Shoes", slug: "kids-shoes", parent: ObjectId("60d5b2e2f2d4d2e78839b1b3") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2ba"), name: "Kids' Accessories", slug: "kids-accessories", parent: ObjectId("60d5b2e2f2d4d2e78839b1b3") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2bb"), name: "Yoga Wear", slug: "yoga-wear", parent: ObjectId("60d5b2e2f2d4d2e78839b1b4") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2bc"), name: "Running Gear", slug: "running-gear", parent: ObjectId("60d5b2e2f2d4d2e78839b1b4") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2bd"), name: "Gym Clothing", slug: "gym-clothing", parent: ObjectId("60d5b2e2f2d4d2e78839b1b4") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2be"), name: "Sportswear", slug: "sportswear", parent: ObjectId("60d5b2e2f2d4d2e78839b1b4") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2bf"), name: "Workout Accessories", slug: "workout-accessories", parent: ObjectId("60d5b2e2f2d4d2e78839b1b4") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c0"), name: "Evening Dresses", slug: "evening-dresses", parent: ObjectId("60d5b2e2f2d4d2e78839b1b5") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c1"), name: "Suits", slug: "suits", parent: ObjectId("60d5b2e2f2d4d2e78839b1b5") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c2"), name: "Tuxedos", slug: "tuxedos", parent: ObjectId("60d5b2e2f2d4d2e78839b1b5") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c3"), name: "Cocktail Dresses", slug: "cocktail-dresses", parent: ObjectId("60d5b2e2f2d4d2e78839b1b5") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c4"), name: "Formal Shoes", slug: "formal-shoes", parent: ObjectId("60d5b2e2f2d4d2e78839b1b5") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c5"), name: "Formal Accessories", slug: "formal-accessories", parent: ObjectId("60d5b2e2f2d4d2e78839b1b5") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c6"), name: "Casual Dresses", slug: "casual-dresses", parent: ObjectId("60d5b2e2f2d4d2e78839b1b6") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c7"), name: "Casual Tops", slug: "casual-tops", parent: ObjectId("60d5b2e2f2d4d2e78839b1b6") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c8"), name: "Jeans", slug: "jeans", parent: ObjectId("60d5b2e2f2d4d2e78839b1b6") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2c9"), name: "T-Shirts", slug: "t-shirts", parent: ObjectId("60d5b2e2f2d4d2e78839b1b6") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2ca"), name: "Casual Shoes", slug: "casual-shoes", parent: ObjectId("60d5b2e2f2d4d2e78839b1b6") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2cb"), name: "Hats", slug: "hats", parent: ObjectId("60d5b2e2f2d4d2e78839b1b6") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2cc"), name: "High Heels", slug: "high-heels", parent: ObjectId("60d5b2e2f2d4d2e78839b1b7") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2cd"), name: "Boots", slug: "boots", parent: ObjectId("60d5b2e2f2d4d2e78839b1b7") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2ce"), name: "Sneakers", slug: "sneakers", parent: ObjectId("60d5b2e2f2d4d2e78839b1b7") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2cf"), name: "Flats", slug: "flats", parent: ObjectId("60d5b2e2f2d4d2e78839b1b7") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d0"), name: "Sandals", slug: "sandals", parent: ObjectId("60d5b2e2f2d4d2e78839b1b7") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d1"), name: "Loafers", slug: "loafers", parent: ObjectId("60d5b2e2f2d4d2e78839b1b7") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d2"), name: "Running Shoes", slug: "running-shoes", parent: ObjectId("60d5b2e2f2d4d2e78839b1b7") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d3"), name: "Jewelry", slug: "jewelry", parent: ObjectId("60d5b2e2f2d4d2e78839b1b8") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d4"), name: "Watches", slug: "watches", parent: ObjectId("60d5b2e2f2d4d2e78839b1b8") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d5"), name: "Scarves", slug: "scarves", parent: ObjectId("60d5b2e2f2d4d2e78839b1b8") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d6"), name: "Belts", slug: "belts", parent: ObjectId("60d5b2e2f2d4d2e78839b1b8") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d7"), name: "Sunglasses", slug: "sunglasses", parent: ObjectId("60d5b2e2f2d4d2e78839b1b8") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d8"), name: "Hats", slug: "hats", parent: ObjectId("60d5b2e2f2d4d2e78839b1b8") },
    { _id: ObjectId("60d5b2e2f2d4d2e78839b2d9"), name: "Handbags", slug: "handbags", parent: ObjectId("60d5b2e2f2d4d2e78839b1b8") }           
]);

db.products.insert([
    {
        title: "Floral Print Dress",
        slug: "floral-print-dress",
        description: "A beautiful floral print dress perfect for summer.",
        price: 29.99,
        previousPrice: 49.99,
        color: "Multi",
        brand: "Zara",
        stock: 15,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b1"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2a1")],
        images: [
            { public_id: "image_1", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Casual White Blouse",
        slug: "casual-white-blouse",
        description: "A casual white blouse suitable for everyday wear.",
        price: 19.99,
        previousPrice: 39.99,
        color: "White",
        brand: "H&M",
        stock: 20,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b1"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2a2")],
        images: [
            { public_id: "image_2", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Women's Activewear Leggings",
        slug: "womens-activewear-leggings",
        description: "High-quality leggings for fitness and casual wear.",
        price: 35.99,
        previousPrice: 55.99,
        color: "Black",
        brand: "Adidas",
        stock: 25,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b1"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2a5")],
        images: [
            { public_id: "image_3", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Stylish Handbag",
        slug: "stylish-handbag",
        description: "A stylish handbag to complete your outfit.",
        price: 49.99,
        previousPrice: 79.99,
        color: "Brown",
        brand: "Coach",
        stock: 10,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b1"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2aa")],
        images: [
            { public_id: "image_4", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        slug: "womens-high-heel-shoes",
        description: "Elegant high heel shoes for special occasions.",
        price: 89.99,
        previousPrice: 119.99,
        color: "Red",
        brand: "Jimmy Choo",
        stock: 5,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b7"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2cc")],
        images: [
            { public_id: "image_5", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Baby Floral Print Onesie",
        slug: "baby-floral-print-onesie",
        description: "Adorable floral print onesie for your little one.",
        price: 14.99,
        previousPrice: 24.99,
        color: "Pink",
        brand: "Carter's",
        stock: 30,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b7"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2b7")],
        images: [
            { public_id: "image_6", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Boys' Graphic T-Shirt",
        slug: "boys-graphic-t-shirt",
        description: "Cool graphic t-shirt for boys.",
        price: 9.99,
        previousPrice: 15.99,
        color: "Blue",
        brand: "Gap",
        stock: 40,
        category: ObjectId("60d5b2e2f2d4d2e78839b2b5"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2ab")],
        images: [
            { public_id: "image_7", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Girls' Unicorn Print Dress",
        slug: "girls-unicorn-print-dress",
        description: "Magical unicorn print dress for little girls.",
        price: 19.99,
        previousPrice: 29.99,
        color: "Purple",
        brand: "Old Navy",
        stock: 20,
        category: ObjectId("60d5b2e2f2d4d2e78839b2b6"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2a1")],
        images: [
            { public_id: "image_8", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Toddler Denim Overalls",
        slug: "toddler-denim-overalls",
        description: "Classic denim overalls for toddlers.",
        price: 24.99,
        previousPrice: 39.99,
        color: "Denim Blue",
        brand: "Levi's",
        stock: 15,
        category: ObjectId("60d5b2e2f2d4d2e78839b2b8"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2a3")],
        images: [
            { public_id: "image_9", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Kids' Sneakers",
        slug: "kids-sneakers",
        description: "Comfortable sneakers for kids.",
        price: 29.99,
        previousPrice: 49.99,
        color: "Black",
        brand: "Nike",
        stock: 25,
        category: ObjectId("60d5b2e2f2d4d2e78839b2b9"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2ce")],
        images: [
            { public_id: "image_10", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },  
    {
        title: "Men's Running Shorts",
        slug: "mens-running-shorts",
        description: "Lightweight and breathable shorts for running.",
        price: 24.99,
        previousPrice: 34.99,
        color: "Black",
        brand: "Under Armour",
        stock: 30,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b6"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2bd")],
        images: [
            { public_id: "image_11", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Women's Yoga Leggings",
        slug: "womens-yoga-leggings",
        description: "Stretchy and comfortable leggings for yoga practice.",
        price: 29.99,
        previousPrice: 39.99,
        color: "Purple",
        brand: "Lululemon",
        stock: 25,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b6"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2bb")],
        images: [
            { public_id: "image_12", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Men's Gym Tank Top",
        slug: "mens-gym-tank-top",
        description: "Breathable tank top for intense workouts.",
        price: 19.99,
        previousPrice: 29.99,
        color: "Blue",
        brand: "Nike",
        stock: 20,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b6"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2bc")],
        images: [
            { public_id: "image_13", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Women's Casual Jeans",
        slug: "womens-casual-jeans",
        description: "Classic jeans for everyday casual wear.",
        price: 39.99,
        previousPrice: 49.99,
        color: "Denim Blue",
        brand: "American Eagle",
        stock: 15,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b6"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2c8")],
        images: [
            { public_id: "image_14", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Men's Casual Shirt",
        slug: "mens-casual-shirt",
        description: "Comfortable shirt for casual outings.",
        price: 29.99,
        previousPrice: 39.99,
        color: "Plaid",
        brand: "Gap",
        stock: 20,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b6"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2ab")],
        images: [
            { public_id: "image_15", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Women's Casual Sneakers",
        slug: "womens-casual-sneakers",
        description: "Stylish and comfortable sneakers for everyday wear.",
        price: 49.99,
        previousPrice: 59.99,
        color: "White",
        brand: "Converse",
        stock: 25,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b7"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2ce")],
        images: [
            { public_id: "image_16", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Men's Running Shoes",
        slug: "mens-running-shoes",
        description: "Performance running shoes for men.",
        price: 79.99,
        previousPrice: 99.99,
        color: "Black/Red",
        brand: "Brooks",
        stock: 15,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b7"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2d2")],
        images: [
            { public_id: "image_17", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Women's High Heel Sandals",
        slug: "womens-high-heel-sandals",
        description: "Elegant high heel sandals for special occasions.",
        price: 69.99,
        previousPrice: 89.99,
        color: "Gold",
        brand: "Steve Madden",
        stock: 10,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b7"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2cd")],
        images: [
            { public_id: "image_18", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Men's Casual Sneakers",
        slug: "mens-casual-sneakers",
        description: "Comfortable and versatile sneakers for men.",
        price: 59.99,
        previousPrice: 79.99,
        color: "Navy Blue",
        brand: "Vans",
        stock: 20,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b7"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2ce")],
        images: [
            { public_id: "image_19", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    },
    {
        title: "Women's Running Shoes",
        slug: "womens-running-shoes",
        description: "Lightweight running shoes designed for women.",
        price: 89.99,
        previousPrice: 109.99,
        color: "Pink/White",
        brand: "New Balance",
        stock: 15,
        category: ObjectId("60d5b2e2f2d4d2e78839b1b7"),
        tags: [ObjectId("60d5b2e2f2d4d2e78839b2d2")],
        images: [
            { public_id: "image_20", secure_url: "https://res.cloudinary.com/dt3jd6aig/image/upload/v1715989373/khs5kkxxytos26zxhrpq.jpg" }
        ]
    }   
]);

print("Completed seeding MongoDB!");
