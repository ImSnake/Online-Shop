"use strict";

/**
 * @type{[object]} объект с набором свойств для отрисовки главного меню
 */
const headerNav = [
    {href: "index.html", name: "Home"},
    {
        href: "product-catalog.html", name: "Men", items:
            [
                {
                    SHIRTS: [
                        {href: "#", name: "Shirts"},
                        {href: "#", name: "Polo"},
                        {href: "#", name: "T-Shirts"},
                        {href: "#", name: "Hoodies"},
                    ]
                },
                {
                    OUTWEAR: [
                        {href: "#", name: "Sweaters"},
                        {href: "#", name: "Jackets"},
                        {href: "#", name: "Coats"},
                        {href: "#", name: "Blazers"},
                        {href: "#", name: "Denim"},
                    ]
                },
                {
                    PANTS: [
                        {href: "#", name: "Shorts"},
                        {href: "#", name: "Jeans"},
                        {href: "#", name: "Trousers"},
                    ]
                },
                {
                    FOOTWEAR: [
                        {href: "#", name: "Official"},
                        {href: "#", name: "Sport"},
                        {href: "#", name: "Casual"},
                    ]
                },
            ]
    },
    {
        href: "#", name: "Women", items:
            [
                {
                    DRESSES: [
                        {href: "#", name: "Short-length"},
                        {href: "#", name: "Long-stile"},
                        {href: "#", name: "Business"},
                        {href: "#", name: "Casual"},
                    ]
                },
                {
                    SKIRTS: [
                        {href: "#", name: "Mini"},
                        {href: "#", name: "Office-skirts"},
                        {href: "#", name: "Long-length"},
                    ]
                },
                {
                    PANTS: [
                        {href: "#", name: "Shorts"},
                        {href: "#", name: "Leggings"},
                        {href: "#", name: "Jeans"},
                        {href: "#", name: "Trousers"},
                    ]
                },
                {
                    SHIRTS: [
                        {href: "#", name: "Shirts"},
                        {href: "#", name: "Polo"},
                        {href: "#", name: "T-Shirts"},
                        {href: "#", name: "Hoodies"},
                        {href: "#", name: "Tops"},
                    ]
                },
                {
                    OUTWEAR: [
                        {href: "#", name: "Sweaters"},
                        {href: "#", name: "Jackets"},
                        {href: "#", name: "Coats"},
                        {href: "#", name: "Blazers"},
                        {href: "#", name: "Denim"},
                    ]
                },
                {
                    FOOTWEAR: [
                        {href: "#", name: "Official"},
                        {href: "#", name: "Sport"},
                        {href: "#", name: "Casual"},
                    ]
                },
            ]
    },
    {
        href: "#", name: "Kids", items:
            [
                {
                    BOYS: [
                        {href: "#", name: "School"},
                        {href: "#", name: "T-Shirts"},
                        {href: "#", name: "Pants"},
                        {href: "#", name: "Denim"},
                        {href: "#", name: "Outwear"},
                        {href: "#", name: "Sport"},
                    ]
                },
                {
                    FOOTWEAR: [
                        {href: "#", name: "Classic"},
                        {href: "#", name: "Sport"},
                        {href: "#", name: "Fashion"},
                    ]
                },
                {
                    GIRLS: [
                        {href: "#", name: "School"},
                        {href: "#", name: "Dresses"},
                        {href: "#", name: "Skirts"},
                        {href: "#", name: "T-Shirts"},
                        {href: "#", name: "Denim"},
                        {href: "#", name: "Outwear"},
                        {href: "#", name: "Sport"},
                    ]
                },
            ]
    },
    {
        href: "#", name: "Accessories", items:
            [
                {
                    MEN: [
                        {href: "#", name: "Watches"},
                        {href: "#", name: "Glasses"},
                        {href: "#", name: "Bags"},
                        {href: "#", name: "Other"},
                    ]
                },
                {
                    WOMEN: [
                        {href: "#", name: "Bags"},
                        {href: "#", name: "Scarfs"},
                        {href: "#", name: "Glasses"},
                        {href: "#", name: "Jewelry"},
                        {href: "#", name: "Other"},
                    ]
                },
                {
                    KIDS: [
                        {href: "#", name: "Bags"},
                        {href: "#", name: "Toys"},
                        {href: "#", name: "Other"},
                    ]
                },
            ]
    },
    {href: "#", name: "Featured"},
    {href: "#", name: "Hot Deals"},
];

/**
 * @type{[object]} объект с информацией о товарах каталога
 */
const products = [
    {
        productID: '111111',
        category: 'Men',
        productType: 'T-shirt',
        title: 'Mango People T-shirt',
        price: 45,
        imageLink: 'images/products/good-1.jpg',
        specialOffer: false,
    },
    {
        productID: '111112',
        category: 'Women',
        productType: 'Shirts',
        title: 'Mango People Shirt',
        price: 105,
        imageLink: 'images/products/good-2.jpg',
        specialOffer: false,
    },
    {
        productID: '111113',
        category: 'Men',
        productType: 'Jackets',
        title: 'Mango People Jacket',
        price: 149,
        imageLink: 'images/products/good-3.jpg',
        specialOffer: false,
    },
    {
        productID: '111114',
        category: 'Women',
        productType: 'T-shirts',
        title: 'Mango People T-shirt',
        price: 99,
        imageLink: 'images/products/good-4.jpg',
        specialOffer: false,
    },
    {
        productID: '111115',
        category: 'Women',
        productType: 'Shirts',
        title: 'Some New Brand Shirt Last Season',
        price: 55,
        imageLink: 'images/products/good-5.jpg',
        specialOffer: false,
    },
    {
        productID: '111116',
        category: 'Men',
        productType: 'Jackets',
        title: 'Mango People Jacket',
        price: 149,
        imageLink: 'images/products/good-6.jpg',
        specialOffer: false,
    },
    {
        productID: '111117',
        category: 'Men',
        productType: 'Skirts',
        title: 'Mango People Skirts',
        price: 80,
        imageLink: 'images/products/good-7.jpg',
        specialOffer: false,
    },
    {
        productID: '111118',
        category: 'Men',
        productType: 'Denim',
        title: 'Some New Brand Denim Last Collection',
        price: 115,
        imageLink: 'images/products/good-8.jpg',
        specialOffer: false,
    },
    {
        productID: '111119',
        category: 'Women',
        productType: 'Trousers',
        title: 'New fashion trousers by Tom Tailor',
        price: 199,
        imageLink: 'images/products/good-9.jpg',
        specialOffer: false,
    },
    {
        productID: '111120',
        category: 'Men',
        productType: 'Jackets',
        title: 'Casual warm winter jacket',
        price: 259,
        imageLink: 'images/products/good-10.jpg',
        specialOffer: false,
    },
    {
        productID: '111121',
        category: 'Men',
        productType: 'Coats',
        title: 'Coat fashion new look by TrussardiCo',
        price: 1190,
        imageLink: 'images/products/good-11.jpg',
        specialOffer: false,
    },
    {
        productID: '111122',
        category: 'Men',
        productType: 'T-shirts',
        title: 'New look elegant t-shirt',
        price: 45,
        imageLink: 'images/products/good-12.jpg',
        specialOffer: false,
    },
    {
        productID: '111123',
        category: 'Men',
        productType: 'Coats',
        title: 'Gothic style warm outwear coat',
        price: 345,
        imageLink: 'images/products/good-13.jpg',
        specialOffer: false,
    },
    {
        productID: '111124',
        category: 'Men',
        productType: 'Jackets',
        title: 'Warm jacket by Tommy official and casual stile',
        price: 450,
        imageLink: 'images/products/good-14.jpg',
        specialOffer: false,
    },
    {
        productID: '111125',
        category: 'Men',
        productType: 'T-shirts',
        title: 'New look casual cotton t-shirt',
        price: 89,
        imageLink: 'images/products/good-15.jpg',
        specialOffer: false,
    },
    {
        productID: '111126',
        category: 'Women',
        productType: 'Leggings',
        title: 'Fit and cute stretch-leggings',
        price: 199,
        imageLink: 'images/products/good-16.jpg',
        specialOffer: false,
    },
    {
        productID: '111127',
        category: 'Women',
        productType: 'Jackets',
        title: 'Fresh look jacket for parties and meetings',
        price: 280,
        imageLink: 'images/products/good-17.jpg',
        specialOffer: false,
    },
    {
        productID: '111128',
        category: 'Women',
        productType: 'Long-length',
        title: 'Long-length skirt by Mark Jacobs',
        price: 190,
        imageLink: 'images/products/good-18.jpg',
        specialOffer: false,
    },
    {
        productID: '111129',
        category: 'Women',
        productType: 'Trousers',
        title: 'Summer trousers Bee Free',
        price: 65,
        imageLink: 'images/products/good-19.jpg',
        specialOffer: false,
    },
];

/*
* const mainProductsList = [
    {
        category: '',
        productType: '',
        title: '',
        description: '',
        color: [],
        size: [],
        rating: [],
        images: [
            {
                smallImageUrl: null,
                mainImageUrl2: null,
                mainImageUrl3: null,
                mainImageUrl4: null,
            }
        ],
        price: null,
        specialOffer: false,
        discount: null,
        material: [],
        designer: '',
        arrivalDate: null,
    }
];*/
