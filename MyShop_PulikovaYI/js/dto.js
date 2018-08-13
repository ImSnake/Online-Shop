"use strict";

/**
 * @type{[object]} объект с набором свойств для отрисовки главного меню
 */
const navItems = [
    {href: "index.html", name: "Home"},
    {href: "product-catalog-men.html", name: "Men", items: [
        {name: 'SHIRTS', href: "#", subItems:
                [
                    {href: "#", name: "Shirts"},
                    {href: "#", name: "Polo"},
                    {href: "#", name: "T-Shirts"},
                    {href: "#", name: "Hoodies"},
                ]
        },
        {name: 'OUTWEAR', href: "#", subItems:
                [
                    {href: "#", name: "Sweaters"},
                    {href: "#", name: "Jackets"},
                    {href: "#", name: "Coats"},
                    {href: "#", name: "Blazers"},
                    {href: "#", name: "Denim"},
                ]
        },
        {name: 'PANTS', href: "#", subItems:
                [
                    {href: "#", name: "Shorts"},
                    {href: "#", name: "Jeans"},
                    {href: "#", name: "Trousers"},
                ]
        },
        {name: 'FOOTWEAR', href: "#", subItems:
                [
                    {href: "#", name: "Official"},
                    {href: "#", name: "Sport"},
                    {href: "#", name: "Casual"},
                ]
        },
    ]},
    {href: "#", name: "Women", items: [
        {name: 'DRESSES', href: "#", subItems:
                [
                    {href: "#", name: "Short-length"},
                    {href: "#", name: "Long-stile"},
                    {href: "#", name: "Business"},
                    {href: "#", name: "Casual"},
                ]
        },
        {name: 'SKIRTS', href: "#", subItems:
                [
                    {href: "#", name: "Mini"},
                    {href: "#", name: "Office-skirts"},
                    {href: "#", name: "Long-length"},
                ]
        },
        {name: 'PANTS', href: "#", subItems:
                [
                    {href: "#", name: "Shorts"},
                    {href: "#", name: "Jeans"},
                    {href: "#", name: "Trousers"},
                ]
        },
        {name: 'SHIRTS', href: "#", subItems:
                [
                    {href: "#", name: "Shirts"},
                    {href: "#", name: "Polo"},
                    {href: "#", name: "T-Shirts"},
                    {href: "#", name: "Hoodies"},
                    {href: "#", name: "Tops"},
                ]
        },
        {name: 'OUTWEAR', href: "#", subItems:
                [
                    {href: "#", name: "Sweaters"},
                    {href: "#", name: "Jackets"},
                    {href: "#", name: "Coats"},
                    {href: "#", name: "Blazers"},
                    {href: "#", name: "Denim"},
                ]
        },
        {name: 'FOOTWEAR', href: "#", subItems:
                [
                    {href: "#", name: "Official"},
                    {href: "#", name: "Sport"},
                    {href: "#", name: "Casual"},
                ]
        },
    ]},
    {href: "#", name: "Kids", items: [
        {name: 'BOYS', href: "#", subItems:
                [
                    {href: "#", name: "School"},
                    {href: "#", name: "T-Shirts"},
                    {href: "#", name: "Pants"},
                    {href: "#", name: "Denim"},
                    {href: "#", name: "Outwear"},
                    {href: "#", name: "Sport"},
                ]
        },
        {name: 'FOOTWEAR', href: "#", subItems:
                [
                    {href: "#", name: "Classic"},
                    {href: "#", name: "Sport"},
                    {href: "#", name: "Fashion"},
                ]
        },
        {name: 'GIRLS', href: "#", subItems:
                [
                    {href: "#", name: "School"},
                    {href: "#", name: "Dresses"},
                    {href: "#", name: "Skirts"},
                    {href: "#", name: "T-Shirts"},
                    {href: "#", name: "Denim"},
                    {href: "#", name: "Outwear"},
                    {href: "#", name: "Sport"},
                ]
        },
    ]},
    {href: "#", name: "Accessories", items: [
        {name: 'MEN', href: "#", subItems:
                [
                    {href: "#", name: "Watches"},
                    {href: "#", name: "Glasses"},
                    {href: "#", name: "Bags"},
                    {href: "#", name: "Other"},
                ]
        },
        {name: 'WOMEN', href: "#", subItems:
                [
                    {href: "#", name: "Bags"},
                    {href: "#", name: "Scarfs"},
                    {href: "#", name: "Glasses"},
                    {href: "#", name: "Jewelry"},
                    {href: "#", name: "Other"},
                ]
        },
        {name: 'KIDS', href: "#", subItems:
                [
                    {href: "#", name: "Bags"},
                    {href: "#", name: "Toys"},
                    {href: "#", name: "Other"},
                ]
        },
    ]},
    {href: "#", name: "Featured"},
    {href: "#", name: "Hot Deals"},
];

/**
 * @type{[object]} объект с информацией о товарах каталога
 */
const products = [
    {
        productID: '111119',
        productLink: "single-good-card.html",
        category: 'Women',
        productType: 'Trousers',
        title: 'New fashion trousers by Tom Tailor',
        price: 199,
        imageLink: 'images/products/good-9.jpg',
        specialOffer: false,
    },
    {
        productID: '111111',
        productLink: '#',
        category: 'Men',
        productType: 'T-shirt',
        title: 'Mango People T-shirt',
        price: 45,
        imageLink: 'images/products/good-1.jpg',
        specialOffer: false,
    },
    {
        productID: '111112',
        productLink: '#',
        category: 'Women',
        productType: 'Shirts',
        title: 'Mango People Shirt',
        price: 105,
        imageLink: 'images/products/good-2.jpg',
        specialOffer: false,
    },
    {
        productID: '111113',
        productLink: '#',
        category: 'Men',
        productType: 'Jackets',
        title: 'Mango People Jacket',
        price: 149,
        imageLink: 'images/products/good-3.jpg',
        specialOffer: false,
    },
    {
        productID: '111114',
        productLink: '#',
        category: 'Women',
        productType: 'T-shirts',
        title: 'Mango People T-shirt',
        price: 99,
        imageLink: 'images/products/good-4.jpg',
        specialOffer: false,
    },
    {
        productID: '111115',
        productLink: '#',
        category: 'Women',
        productType: 'Shirts',
        title: 'Some New Brand Shirt Last Season',
        price: 55,
        imageLink: 'images/products/good-5.jpg',
        specialOffer: false,
    },
    {
        productID: '111116',
        productLink: '#',
        category: 'Men',
        productType: 'Jackets',
        title: 'Mango People Jacket',
        price: 149,
        imageLink: 'images/products/good-6.jpg',
        specialOffer: false,
    },
    {
        productID: '111117',
        productLink: '#',
        category: 'Men',
        productType: 'Skirts',
        title: 'Mango People Skirts',
        price: 80,
        imageLink: 'images/products/good-7.jpg',
        specialOffer: false,
    },
    {
        productID: '111118',
        productLink: '#',
        category: 'Men',
        productType: 'Denim',
        title: 'Some New Brand Denim Last Collection',
        price: 115,
        imageLink: 'images/products/good-8.jpg',
        specialOffer: false,
    },
    {
        productID: '111120',
        productLink: '#',
        category: 'Men',
        productType: 'Jackets',
        title: 'Casual warm winter jacket',
        price: 259,
        imageLink: 'images/products/good-10.jpg',
        specialOffer: false,
    },
    {
        productID: '111121',
        productLink: '#',
        category: 'Men',
        productType: 'Coats',
        title: 'Coat fashion new look by TrussardiCo',
        price: 1190,
        imageLink: 'images/products/good-11.jpg',
        specialOffer: false,
    },
    {
        productID: '111122',
        productLink: '#',
        category: 'Men',
        productType: 'T-shirts',
        title: 'New look elegant t-shirt',
        price: 45,
        imageLink: 'images/products/good-12.jpg',
        specialOffer: false,
    },
    {
        productID: '111123',
        productLink: '#',
        category: 'Men',
        productType: 'Coats',
        title: 'Gothic style warm outwear coat',
        price: 345,
        imageLink: 'images/products/good-13.jpg',
        specialOffer: false,
    },
    {
        productID: '111124',
        productLink: '#',
        category: 'Men',
        productType: 'Jackets',
        title: 'Warm jacket by Tommy official and casual stile',
        price: 450,
        imageLink: 'images/products/good-14.jpg',
        specialOffer: false,
    },
    {
        productID: '111125',
        productLink: '#',
        category: 'Men',
        productType: 'T-shirts',
        title: 'New look casual cotton t-shirt',
        price: 89,
        imageLink: 'images/products/good-15.jpg',
        specialOffer: false,
    },
    {
        productID: '111126',
        productLink: '#',
        category: 'Women',
        productType: 'Leggings',
        title: 'Fit and cute stretch-leggings',
        price: 199,
        imageLink: 'images/products/good-16.jpg',
        specialOffer: false,
    },
    {
        productID: '111127',
        productLink: '#',
        category: 'Women',
        productType: 'Jackets',
        title: 'Fresh look jacket for parties and meetings',
        price: 280,
        imageLink: 'images/products/good-17.jpg',
        specialOffer: false,
    },
    {
        productID: '111128',
        productLink: '#',
        category: 'Women',
        productType: 'Long-length',
        title: 'Long-length skirt by Mark Jacobs',
        price: 190,
        imageLink: 'images/products/good-18.jpg',
        specialOffer: false,
    },
    {
        productID: '111129',
        productLink: '#',
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
