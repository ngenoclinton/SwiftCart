const Products = [
    {
        'id':1,
        name:'Mens Apparel',
        price:'80',
        category: 'Mens Clothes',
        imageUrl:'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    },
    {
        'id':2,
        name:'Womens Clothes',
        price:'50',
        category: 'Womens Clothes',
        imageUrl:'https://img.freepik.com/free-photo/beautiful-african-american-woman-natural-makeup-wear-fashion-clothes-casual-black-white-dress-code-office-style-total-blouse-pants-suit-hat_627829-1552.jpg?size=626&ext=jpg&ga=GA1.1.1762022183.1677005452&semt=ais',
        desc:'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.'
    },
    {
        'id':3,
        name:'Sports wear',
        price:'30',
        category: 'Sports wear',
        imageUrl:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc:'Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.'
    },
    {
        'id':4,
        name:'Mens Clothes',
        price:'49',
        category: 'Mens Clothes',
        imageUrl:'https://t4.ftcdn.net/jpg/05/63/75/73/240_F_563757318_Lu9fIqwfjumVc8Tvt0tcLd9zupE3px6C.jpg',
        desc:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.'
    },
    {
        'id':5,
        name:'Mens Shoes',
        price:'29',
        category: 'Mens Shoes',
        imageUrl:'https://t4.ftcdn.net/jpg/00/69/68/43/240_F_69684360_AZGVA8mxX7D6HzpQd9gh0RBzseMUgSeh.jpg',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':6,
        name:'Womens Shoes',
        price:'39',
        category: 'Womens Shoes',
        imageUrl:'https://img.freepik.com/premium-photo/yellow-tulip-flower-bouquet-yellow-rubber-boots-as-vase-yellow-green-background-with-sharp-shadows-creative-spring-floral-composition-botany-wallpaper-home-decor_283817-1205.jpg?size=626&ext=jpg',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':7,
        name:'Sports wear',
        price:'96',
        category: 'Sports wear',
        imageUrl:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':8,
        name:'Mens Shoes',
        price:'46',
        category: 'Mens Shoes',
        imageUrl:'https://t4.ftcdn.net/jpg/02/65/33/23/240_F_265332309_nmUfse8g0mVn2vE7czbHNPQ1eTkE9Udn.jpg',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':9,
        name:'Womens Clothes',
        price:'65',
        category: 'Womens Clothes',
        imageUrl:'https://img.freepik.com/free-photo/happy-good-looking-black-woman-wearing-grey-leather-coat-posing-beige-background-autumn-winter-fashion-concept_273443-127.jpg?size=626&ext=jpg&ga=GA1.1.1762022183.1677005452&semt=ais',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':10,
        name:'Womens Shoes',
        price:'73',
        category: 'Womens Shoes',
        imageUrl:'https://t3.ftcdn.net/jpg/03/14/53/82/240_F_314538227_Jshqv9yPDUkISAy1FNxnmSDQBn7G7NFH.jpg',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':11,
        name:'Mens Clothes',
        price:'35',
        category: 'Mens Clothes',
        imageUrl:'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':12,
        name:'Womens Clothes',
        price:'83',
        category: 'Womens Clothes',
        imageUrl:'https://img.freepik.com/free-photo/lovely-trendy-woman-with-curly-short-hair-bright-beret-long-cleese-polka-dot-shirt-white-trousers-looking-into-camera-holding-handbag_197531-27573.jpg?size=626&ext=jpg&ga=GA1.1.1762022183.1677005452&semt=ais',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':13,
        name:'Sports wear',
        price:'29',
        category: 'Sports wear',
        imageUrl:'https://img.freepik.com/premium-photo/pair-blue-running-sneakers-white-background-isolated_77190-7490.jpg?size=626&ext=jpg&ga=GA1.1.1762022183.1677005452&semt=sph',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':14,
        name:'Mens Shoes',
        price:'72',
        category: 'Mens Shoes',
        imageUrl:'https://t3.ftcdn.net/jpg/02/62/16/86/240_F_262168675_hvw5kxiW19v5sopN4vTDkyHSt9PrxuiV.jpg',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':15,
        name:'Mens Clothes',
        price:'53',
        category: 'Mens Clothes',
        imageUrl:'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':16,
        name:'Womens Clothes',
        price:'47',
        category: 'Womens Clothes',
        imageUrl:'https://t3.ftcdn.net/jpg/03/41/03/46/240_F_341034617_4e96ntzBPpqjGxbUoHEVAp6NrH6KJwbE.jpg',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':17,
        name:'Womens Shoes',
        price:'48',
        category: 'Womens Shoes',
        imageUrl:'https://t4.ftcdn.net/jpg/02/71/27/05/240_F_271270593_wyvdYtLljWK4T2jkmOA5CRGSAxAj2fvp.jpg',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':18,
        name:'Mens Shoes',
        price:'66',
        category: 'Mens Shoes',
        imageUrl:'https://t4.ftcdn.net/jpg/02/74/49/61/240_F_274496161_HI68vyljul1jgeAjjvCZzc6S8wNvQQQX.jpg',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':19,
        name:'Womens Clothes',
        price:'44',
        category: 'Womens Clothes',
        imageUrl:'https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?size=626&ext=jpg&ga=GA1.1.1762022183.1677005452&semt=ais',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':20,
        name:'Sports wear',
        price:'54',
        category: 'Sports wear',
        imageUrl:'https://media.istockphoto.com/id/1304528713/photo/red-jogging-sneakers-for-jogging-isolated-on-white-background-sport-shoes-modern-fashion.jpg?b=1&s=170667a&w=0&k=20&c=cyGIls0oqQk_lOWJqmb3_1O2arsZdvkF5maeqyP9G2o=',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':21,
        name:'Mens Clothes',
        price:'53',
        category: 'Mens Clothes',
        imageUrl:'https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':22,
        name:'Womens Shoes',
        price:'30',
        category: 'Womens Shoes',
        imageUrl:' https://t4.ftcdn.net/jpg/01/95/84/67/240_F_195846780_8OgTlDBpKacrvsj8CfDCcLLc80Qw8F07.jpg',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':23,
        name:'Womens Shoes',
        price:'30',
        category: 'Womens Shoes',
        imageUrl:'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fFdvbWVucyUyMFNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':24,
        name:'Womens Shoes',
        price:'30',
        category: 'Womens Shoes',
        imageUrl:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8V29tZW5zJTIwU2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':25,
        name:'Mens Clothes',
        price:'53',
        category: 'Mens Clothes',
        imageUrl:'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':26,
        name:'Sports wear',
        price:'34',
        category: 'Sports wear',
        imageUrl:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':27,
        name:'Sports wear',
        price:'26',
        category: 'Sports wear',
        imageUrl:'https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0cyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':28,
        name:'Mens Shoes',
        price:'28',
        category: 'Mens Shoes',
        imageUrl:'https://images.unsplash.com/photo-1613839817782-6c41fef752ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnMlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        'id':29,
        name:'Mens Shoes',
        price:'28',
        category: 'Mens Shoes',
        imageUrl:'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVucyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },{
        'id':30,
        name:'Mens Shoes',
        price:'28',
        category: 'Mens Shoes',
        imageUrl:'https://media.istockphoto.com/id/172417586/photo/elegant-black-leather-shoes.jpg?b=1&s=170667a&w=0&k=20&c=U483OSq1-4GDY9NLPMt9sjRLufozDKNSk6OO-7gz1tE=',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
];
//
export default Products;