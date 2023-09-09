declare module 'react-native-ico-gastronomy-set' {
    import { ReactNode } from 'react';

    type iconNames = 'apple-1' |
      'apple' |
      'asparagus' |
      'aubergine' |
      'avocado' |
      'bacon' |
      'baguette' |
      'banana' |
      'beans' |
      'biscuit' |
      'blueberries' |
      'boiled' |
      'bowl-1' |
      'bowl' |
      'bread-1' |
      'bread-2' |
      'bread' |
      'broccoli' |
      'butcher' |
      'butter' |
      'cabbage' |
      'cake' |
      'can-1' |
      'can-2' |
      'can' |
      'candy-1' |
      'candy' |
      'carrot' |
      'cauliflower' |
      'cereals' |
      'cheese-1' |
      'cheese' |
      'chef' |
      'cherries' |
      'chili' |
      'chips' |
      'chives' |
      'chocolate' |
      'coconut' |
      'coffee-1' |
      'coffee-2' |
      'coffee-3' |
      'coffee-4' |
      'coffee-maker' |
      'coffee' |
      'cookies' |
      'corckscrew' |
      'corn' |
      'corndog' |
      'croissant' |
      'cucumber' |
      'cup' |
      'cupcake-1' |
      'cupcake-2' |
      'cupcake' |
      'cutlery' |
      'dairy' |
      'dish' |
      'dishes' |
      'doughnut-1' |
      'doughnut-2' |
      'doughnut' |
      'egg' |
      'eggs' |
      'fig' |
      'fish' |
      'flour-1' |
      'flour' |
      'food' |
      'fork' |
      'frappe' |
      'fries' |
      'garlic' |
      'gingerbread' |
      'glass-1' |
      'glass-2' |
      'glass-3' |
      'glass-4' |
      'glass-5' |
      'glass-6' |
      'glass' |
      'grain' |
      'grapes' |
      'grater' |
      'grinder' |
      'groceries' |
      'ham' |
      'hamburguer-1' |
      'hamburguer' |
      'hazelnut' |
      'honey-1' |
      'honey' |
      'hot-dog-1' |
      'hot-dog' |
      'ice-cream-1' |
      'ice-cream-10' |
      'ice-cream-11' |
      'ice-cream-12' |
      'ice-cream-13' |
      'ice-cream-14' |
      'ice-cream-2' |
      'ice-cream-3' |
      'ice-cream-4' |
      'ice-cream-5' |
      'ice-cream-6' |
      'ice-cream-7' |
      'ice-cream-8' |
      'ice-cream-9' |
      'ice-cream' |
      'jam-1' |
      'jam' |
      'jawbreaker' |
      'jelly' |
      'kebab-1' |
      'kebab-2' |
      'kebab' |
      'kitchen' |
      'knife-1' |
      'knife-2' |
      'knife-3' |
      'knife' |
      'knives' |
      'ladle' |
      'lemon-1' |
      'lemon' |
      'lime' |
      'meat-1' |
      'meat-2' |
      'meat' |
      'milk-1' |
      'milk' |
      'mixer' |
      'mug' |
      'mushroom' |
      'mushrooms' |
      'mustard-1' |
      'mustard-2' |
      'mustard' |
      'noodles' |
      'oat' |
      'octopus' |
      'oil' |
      'olives' |
      'onion-1' |
      'onion' |
      'orange' |
      'ornating' |
      'pan' |
      'pancakes-1' |
      'pancakes' |
      'pasta-1' |
      'pasta' |
      'peach' |
      'pear' |
      'peas' |
      'pepper-1' |
      'pepper' |
      'pickles' |
      'pie-1' |
      'pie-2' |
      'pie' |
      'pineapple' |
      'pint' |
      'pistachio' |
      'pizza-1' |
      'pizza-2' |
      'pizza-3' |
      'pizza-4' |
      'pizza-5' |
      'pizza' |
      'pomegranate' |
      'popsicle' |
      'pot-1' |
      'pot-2' |
      'pot' |
      'potatoes-1' |
      'potatoes-2' |
      'potatoes' |
      'pretzel' |
      'pudding' |
      'pumpkin' |
      'radish' |
      'raspberry' |
      'rice' |
      'risotto' |
      'rolling-pin' |
      'salad-1' |
      'salad' |
      'salami' |
      'salmon' |
      'salt' |
      'sandwich-1' |
      'sandwich' |
      'sausage' |
      'scale' |
      'seeds' |
      'shrimp' |
      'slotted-spoon' |
      'sorbet' |
      'spaguetti' |
      'spatula-1' |
      'spatula' |
      'spices' |
      'spoon' |
      'steak' |
      'stew-1' |
      'stew' |
      'strainer' |
      'strawberry' |
      'sushi-1' |
      'sushi-2' |
      'sushi' |
      'taco' |
      'tea-1' |
      'tea' |
      'teapot-1' |
      'teapot' |
      'teaspoon' |
      'tenderizer' |
      'thermos' |
      'toast' |
      'toaster' |
      'toffee' |
      'tomato' |
      'turkey' |
      'water-1' |
      'water' |
      'watermelon' |
      'whisk' |
      'wrap';

    type backgroundType = 'circle' | 'rect' | 'button';

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
