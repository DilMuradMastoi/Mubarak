export const dishes=[
 {id:1,name:"Mubarak BBQ Platter",cat:"BBQ",price:1890,img:"/images/food-1.jpg",desc:"Smoky chicken tikka, seekh kebab and grilled pieces served for sharing."},
 {id:2,name:"Chicken Karahi",cat:"Pakistani",price:1390,img:"/images/food-2.jpg",desc:"Tender chicken simmered in tomato, green chilli, ginger and house masala."},
 {id:3,name:"Mutton Karahi",cat:"Pakistani",price:1990,img:"/images/food-3.jpg",desc:"Slow-cooked mutton with bold spices, fresh herbs and a rich karahi finish."},
 {id:4,name:"Seekh Kebab",cat:"BBQ",price:890,img:"/images/food-4.jpg",desc:"Juicy hand-shaped kebabs grilled over flame with smoky edges."},
 {id:5,name:"Chicken Biryani",cat:"Rice",price:650,img:"/images/food-5.jpg",desc:"Fragrant basmati rice layered with tender chicken and aromatic spices."},
 {id:6,name:"Chicken Chow Mein",cat:"Chinese",price:790,img:"/images/food-6.jpg",desc:"Wok-tossed noodles with chicken, vegetables and a savoury sauce."},
 {id:7,name:"Mubarak Burger",cat:"Burgers",price:690,img:"/images/food-7.jpg",desc:"House-seasoned chicken patty, fresh salad and signature sauce in a soft bun."},
 {id:8,name:"Family BBQ Feast",cat:"Offers",price:2990,img:"/images/food-8.jpg",desc:"A generous family spread made for sharing around one memorable table."},
 {id:9,name:"Chicken Tikka",cat:"BBQ",price:850,img:"/images/food-9.jpg",desc:"Charred, juicy chicken pieces marinated in a classic Pakistani spice blend."},
 {id:10,name:"Mutton Pulao",cat:"Rice",price:850,img:"/images/food-10.jpg",desc:"Aromatic rice cooked with tender mutton, stock and whole spices."},
 {id:11,name:"Malai Tikka",cat:"BBQ",price:990,img:"/images/food-11.jpg",desc:"Creamy, tender chicken tikka with a delicate smoky finish."},
 {id:12,name:"Beef Burger",cat:"Burgers",price:750,img:"/images/food-12.jpg",desc:"Juicy beef patty, crisp lettuce, cheese and a bold house dressing."},
 {id:13,name:"Fresh Dessert Platter",cat:"Desserts",price:590,img:"/images/food-13.jpg",desc:"A sweet finish with a selection of chilled and traditional favourites."}
];
export const gallery=Array.from({length:13},(_,i)=>`/images/food-${i+1}.jpg`);
export const categories=["All","BBQ","Pakistani","Chinese","Fast Food","Burgers","Rice","Drinks","Desserts"];
export const categoryStories=[
 {name:"BBQ",icon:"Flame",title:"From the flame to your table",text:"Our BBQ story begins with a hot grill, patient marination and the smoky character that makes a Quetta dinner feel complete.",image:"/images/food-1.jpg"},
 {name:"Pakistani",icon:"CookingPot",title:"Recipes that feel like home",text:"Rich karahi, fragrant rice and familiar spices come together in plates designed for slow, generous meals.",image:"/images/food-2.jpg"},
 {name:"Chinese",icon:"Soup",title:"A little wok magic",text:"Quick, hot and full of texture — our wok favourites bring a different rhythm to the Mubarak table.",image:"/images/food-6.jpg"},
 {name:"Burgers",icon:"Sandwich",title:"Casual cravings, done well",text:"Comfort food with a Mubarak touch: juicy patties, fresh toppings and sauces made to be messy in the best way.",image:"/images/food-7.jpg"},
 {name:"Rice",icon:"Wheat",title:"The centre of the table",text:"Biryani and pulao are made to be shared, paired with curries, BBQ and good conversation.",image:"/images/food-5.jpg"},
 {name:"Desserts",icon:"CakeSlice",title:"End on a sweet note",text:"Because a memorable meal deserves a soft landing — our desserts keep the final bite special.",image:"/images/food-13.jpg"}
];
