
import menuBeef from "../../../images/prImages/menubeef.jpg"
import menuseafood from "../../../images/prImages/menuseafood.jpg"
import menumeat from "../../../images/prImages/menumeat.jpg"
import menudesserts from "../../../images/prImages/menudesserts.jpg"



export const MenuData ={
    Sandwiches:{
        Image: menuBeef,
        Heading: "Sandwiches",
        Subheading: "All sandwiches come with an side of crispy fries",
        Items:{
            SSS:{
                name: "Sizzling Steak Sandwich",
                desc: "Open faced steak sandwich with grilled belle peppers and fried onions.",
                price: "$15.99"
            },
            TenderloinS:{
                name: "Tenderloin Sliders",
                desc: "Three beef tenderloin sliders with horseradish cream and blackberry bbq.",
                price: "$13.99"
            },
            CCP:{
                name: "Classic Chicken Panini",
                desc: "Grilled chicken with Monterey jack, romaine lettuce, tomato, and cilantro.",
                price: "$10.99"
            },
            STC:{
                name: "Smoked Turkey Club",
                desc: "Smoked deli turkey, maple bacon, cranberry aioli, lettuce and tomatoes.",
                price: "$8.99"
            },
            TunaS:{
                name: "Tuna Sandwich",
                desc: "Tuna salad with sprouts, sliced tomatoes and cilantro lime mayo on toast.",
                price: "$6.99"
            }
        }

    },
    Seafood:{
    Image: menuseafood,
    Heading: "Seafood",
    Subheading: "All seafood comes with an side of rice pilaf and grilled veggies",
    Items:{
        HSS:{
            name: "Honey Shrimp Skewers",
            desc: "Ten honey glazed shrimps grilled with sesame seeds and rosemary.",
            price: "$15.99",
        },
        GS:{
            name: "Grilled Salmon",
            desc: "Salmon grilled in a lime butter sauce.",
            price: "$13.99",
        },
        GT:{
            name: "Grilled Tilapia",
            desc: "A whole grilled tilapia cooked with smoked paprika.",
            price: "$10.99",
        },
        PFS:{
            name: "Parmesan Fish Sticks",
            desc: "Sliced salmon in parmesan breading served with lemon dill tartar sauce.",
            price: "$8.99",
        }
        
    }

},
on_the_grill:{
    Image: menumeat,
    Heading: "On the grill",
    Subheading: "Served with corn, cheddar biscuits, and your choice of coleslaw or potato",
    Items:{
        FR:{
            name: "Baby Back - Full Rack",
            desc: "Served with corn, cheddar biscuits, and your choice of coleslaw or potato salad.",
            price: "$19.99",
        },
        HR:{
            name: "Baby Back - Half Rack",
            desc: "A half rack of pork babyback ribs grilled and glazed with blackberry bbq.",
            price: "$13.99",
        },
        BR:{
            name: "Boneless Ribeye",
            desc: "A three inch thick boneless ribeye grilled in a rosemary rub and butter",
            price: "$25.99",
        },
        STC:{
            name: "Smoked Turkey Club",
            desc: "Smoked deli turkey, maple bacon, cranberry aioli, lettuce and tomatoes.",
            price: "$8.99",
        },
        TS:{
            name: "Tuna Sandwich",
            desc: "Tuna salad with sprouts, sliced tomatoes and cilantro lime mayo on toast.",
            price: "$6.99",
        }
    }

},
Desserts:{
    Image: menudesserts,
    Heading: "Desserts",
    Subheading: "A shot of esspresso can be added to any dessert for an additional $2.",
    Items:{
        DWB:{
            name: "Double Walnut Brownies",
            desc: "Two brownies with a walnut crust, ice cream and chocolate sauce.",
            price: "$8.99",
        },
        CCwCS:{
            name: "Cheese Cake with Chocolate Sauce",
            desc: "Cheesecake with ice cream, chocolate shavings and chocolate sauce.",
            price: "$7.99",
        },
        TCB:{
            name: "Triple Chocolate Brownie",
            desc: "A triple chocolate brownie served with vanilla ice cream and walnuts.",
            price: "$6.99",
        },
        SSS:{
            name: "House Made Shaved Gelato and Cookies",
            desc: "Your choice of shaved gelato with whole cookies. Options change daily.",
            price: "$5.99",
        },
        GPaIC:{
            name: "Grilled Peaches and Ice Cream",
            desc: "Grilled peaches in cinnamon and brown sugar glaze with ice cream.",
            price: "$4.99",
        }
    }

},
}







//Template
//--------------------------------
// Sandwiches:{
//     Image: "",
//     Heading: "",
//     Subheading: "",
//     Items:{
//         SSS:{
//             name: "",
//             desc: "",
//             price: "",
//         }
//     }

// }