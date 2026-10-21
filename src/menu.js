// Prices are from the Instagram Highlight screenshots supplied by the user.
// The story is labelled "128w". Confirm present-day prices before launch.
// Each row is: category | price in MAD | French | English | Arabic.
export const categories = [
  ['breakfast', 'Petit déjeuner', 'Breakfast', 'الفطور'],
  ['extras', 'Suppléments & petits plats', 'Extras & light bites', 'إضافات وأطباق خفيفة'],
  ['cold', 'Entrées froides', 'Cold starters', 'مقبلات باردة'],
  ['hot', 'Entrées chaudes', 'Hot starters', 'مقبلات ساخنة'],
  ['mains', 'Plats', 'Main courses', 'الأطباق الرئيسية'],
  ['pasta', 'Pâtes & risottos', 'Pasta & risotto', 'باستا وريزوتو'],
  ['pizza', 'Pizzas', 'Pizzas', 'بيتزا'],
  ['burgers', 'Burgers & wraps', 'Burgers & wraps', 'برغر وراب'],
  ['kids', 'Menu enfants', 'Kids’ menu', 'قائمة الأطفال'],
  ['desserts', 'Desserts', 'Desserts', 'الحلويات'],
  ['pancakes', 'Pancakes & gaufres', 'Pancakes & waffles', 'بانكيك ووافل'],
  ['hotdrinks', 'Cafés & thés', 'Coffee & tea', 'القهوة والشاي'],
  ['softdrinks', 'Boissons fraîches', 'Cold drinks', 'مشروبات باردة'],
  ['juices', 'Jus & smoothies', 'Juices & smoothies', 'عصائر وسموذي'],
  ['cocktails', 'Cocktails', 'Cocktails', 'كوكتيلات'],
  ['ice', 'Glaces', 'Ice cream', 'المثلجات'],
].map(([id, fr, en, ar]) => ({ id, label: { fr, en, ar } }));

const rows = `
breakfast|35|Francilien|French breakfast|فطور فرنسي
breakfast|40|Espagnol|Spanish breakfast|فطور إسباني
breakfast|38|Atlassi|Atlas breakfast|فطور أطلسي
breakfast|42|Ahel Fès|Fès breakfast|فطور أهل فاس
breakfast|49|Marocain|Moroccan breakfast|فطور مغربي
breakfast|35|Pain quotidien|Daily bread breakfast|فطور الخبز اليومي
breakfast|52|Anglais|English breakfast|فطور إنجليزي
breakfast|60|Parisienne|Parisian breakfast|فطور باريسي
breakfast|70|Norvégien|Norwegian breakfast|فطور نرويجي
breakfast|70|Turky|Turkish breakfast|فطور تركي
breakfast|45|Hollandais|Dutch breakfast|فطور هولندي
breakfast|70|Belgique|Belgian breakfast|فطور بلجيكي
breakfast|35|Africain|African breakfast|فطور إفريقي
breakfast|55|Healthy|Healthy breakfast|فطور صحي
breakfast|30|Junior|Junior breakfast|فطور الأطفال
breakfast|130|Brunch Veranda|Veranda brunch|برانش فيراندا
extras|3|Confiture, portion|Jam, portion|مربى، حصة
extras|3|La Vache qui rit|La Vache qui rit cheese|جبنة لا فاش كيري
extras|4|Kiri|Kiri cheese|جبنة كيري
extras|5|Fromage blanc|Fresh cheese|جبن طري
extras|6|Nutella|Nutella|نوتيلا
extras|5|Amlou|Amlou|أملو
extras|10|Fromage Edam|Edam cheese|جبنة إيدام
extras|10|Sellou / Kinafa|Sellou / Kinafa|سلو / كنافة
extras|12|Khlie|Khlie|خليع
extras|5|Œufs, supplément|Extra eggs|بيض إضافي
extras|3|Beurre|Butter|زبدة
extras|3|Miel|Honey|عسل
extras|12|Meloui / Harcha|Meloui / Harcha|ملوي / حرشة
extras|18|Croque simple|Plain croque|كروك بسيط
extras|20|Croque fromage|Cheese croque|كروك بالجبن
extras|23|Croque fromage et dinde fumée|Cheese and smoked turkey croque|كروك بالجبن والديك الرومي المدخن
extras|23|Croque fromage et salami|Cheese and salami croque|كروك بالجبن والسلامي
extras|65|Croque saumon fumé|Smoked salmon croque|كروك بالسلمون المدخن
extras|18|Omelette nature|Plain omelette|عجة سادة
extras|20|Omelette au fromage|Cheese omelette|عجة بالجبن
extras|23|Omelette dinde fumée, salami et fromage|Smoked turkey, salami and cheese omelette|عجة بالديك الرومي المدخن والسلامي والجبن
extras|23|Omelette merguez|Merguez omelette|عجة بالمرقاز
extras|20|Omelette végétarienne|Vegetarian omelette|عجة نباتية
extras|23|Omelette fromage et champignons|Cheese and mushroom omelette|عجة بالجبن والفطر
extras|25|Omelette khlie et deux œufs|Khlie and two egg omelette|عجة بالخليع وبيضتين
cold|70|Salade de blé|Wheat salad|سلطة القمح
cold|60|Salade César|Caesar salad|سلطة سيزر
cold|80|Salade burrata|Burrata salad|سلطة بوراتا
cold|50|Salade russe|Russian salad|سلطة روسية
cold|70|Salade exotique|Exotic salad|سلطة استوائية
cold|75|Salade del mar|Seafood salad|سلطة ثمار البحر
cold|79|Salade quinoa|Quinoa salad|سلطة الكينوا
cold|50|Assortiment marocain|Moroccan assortment|تشكيلة مغربية
hot|40|Doigts de mozzarella|Mozzarella sticks|أصابع الموزاريلا
hot|39|Patatas bravas|Patatas bravas|بطاطس برافاس
hot|50|Soupe de poulet aux légumes|Chicken and vegetable soup|حساء الدجاج بالخضار
hot|50|Soupe crémeuse aux crevettes|Creamy shrimp soup|حساء الروبيان الكريمي
hot|60|Soupe de poisson|Fish soup|حساء السمك
hot|30|Soupe marocaine|Moroccan soup|حساء مغربي
hot|40|Crème de légumes|Cream of vegetable soup|شوربة كريمة الخضار
hot|60|Calamar croustillant|Crispy calamari|حبار مقرمش
hot|60|Crevettes croustillantes|Crispy shrimp|روبيان مقرمش
hot|49|Dynamite shrimp|Dynamite shrimp|روبيان دايناميت
hot|60|Crevettes pil pil|Pil pil shrimp|روبيان بيل بيل
mains|100|Steak de bœuf|Beef steak|ستيك لحم البقر
mains|90|Émincé de bœuf|Sliced beef|شرائح لحم البقر
mains|90|Brochette de bœuf|Beef skewers|أسياخ لحم البقر
mains|120|Filet mignon avec purée|Filet mignon with mash|فيليه مينيون مع البطاطس المهروسة
mains|120|Filet italien pizzaiola|Italian pizzaiola fillet|فيليه إيطالي بيتزايولا
mains|120|Côtes d’agneau à la texane|Texas-style lamb chops|ريش الغنم على الطريقة التكساسية
mains|90|Fajitas bœuf|Beef fajitas|فاهيتا لحم البقر
mains|119|Filet de Saint-Pierre rôti aux herbes|Herb-roasted John Dory|فيليه سمك سان بيير بالأعشاب
mains|100|Poisson à la bordelaise|Bordelaise-style fish|سمك على طريقة بوردو
mains|130|Pavé de saumon|Salmon fillet|فيليه السلمون
mains|100|Brochette de crevettes|Shrimp skewers|أسياخ الروبيان
mains|70|Émincé de poulet|Sliced chicken|شرائح الدجاج
mains|70|Poulet au miel|Honey chicken|دجاج بالعسل
mains|90|Ballotine de poulet|Chicken ballotine|بالوتين الدجاج
mains|80|Brochette de poulet|Chicken skewers|أسياخ الدجاج
mains|80|Filet de poulet au four|Oven-baked chicken fillet|فيليه الدجاج بالفرن
pasta|60|Pesto|Pesto pasta|باستا بيستو
pasta|60|Arrabiata|Arrabbiata pasta|باستا أرابياتا
pasta|69|Bolognaise|Bolognese pasta|باستا بولونيز
pasta|69|Alfredo|Alfredo pasta|باستا ألفريدو
pasta|80|Marisco|Seafood pasta|باستا ثمار البحر
pasta|69|Carbonara|Carbonara pasta|باستا كاربونارا
pasta|70|Quatre fromages|Four-cheese pasta|باستا أربعة أجبان
pasta|80|Spaghetti noir aux crevettes|Black spaghetti with shrimp|سباغيتي سوداء بالروبيان
pasta|60|Risotto poulet aux champignons|Chicken and mushroom risotto|ريزوتو الدجاج والفطر
pasta|80|Risotto marisco|Seafood risotto|ريزوتو ثمار البحر
pasta|69|Lasagne bolognaise|Bolognese lasagna|لازانيا بولونيز
pasta|80|Lasagne fruits de mer|Seafood lasagna|لازانيا ثمار البحر
pizza|50|Margherita|Margherita|مارغريتا
pizza|60|Regina|Regina|ريجينا
pizza|55|Végétarienne|Vegetarian|نباتية
pizza|65|Orientale|Oriental|شرقية
pizza|65|Thon|Tuna|تونة
pizza|65|Viande hachée|Minced beef|لحم مفروم
pizza|75|Quatre saisons|Four seasons|أربعة فصول
pizza|65|Crème poulet|Creamy chicken|دجاج بالكريمة
pizza|80|Crème fruits de mer|Creamy seafood|ثمار البحر بالكريمة
pizza|85|Norvégienne|Norwegian|نرويجية
pizza|70|Quatre fromages|Four cheese|أربعة أجبان
burgers|49|Cheese burger classic|Classic cheeseburger|تشيز برغر كلاسيك
burgers|55|Burger César|Caesar burger|برغر سيزر
burgers|60|Barbecue burger|Barbecue burger|برغر باربكيو
burgers|60|Burger mexicain|Mexican burger|برغر مكسيكي
burgers|70|Burger Veranda|Veranda burger|برغر فيراندا
burgers|35|Wrap chicken|Chicken wrap|راب الدجاج
burgers|35|Wrap thon|Tuna wrap|راب التونة
burgers|40|Wrap bœuf|Beef wrap|راب لحم البقر
kids|45|Menu 1 : mini pizza & soda|Menu 1: mini pizza & soda|قائمة ١: بيتزا صغيرة ومشروب غازي
kids|45|Menu 2 : nuggets & Kinder Surprise|Menu 2: nuggets & Kinder Surprise|قائمة ٢: ناجتس وكيندر سربرايز
kids|45|Menu 3 : mini burger & salade de fruits|Menu 3: mini burger & fruit salad|قائمة ٣: برغر صغير وسلطة فواكه
kids|45|Menu 4 : spaghetti bolognaise & jus d’orange|Menu 4: spaghetti bolognese & orange juice|قائمة ٤: سباغيتي بولونيز وعصير برتقال
desserts|30|Crème catalane|Catalan cream|كريمة كتالانية
desserts|35|Fondant au chocolat|Chocolate fondant|فوندان الشوكولاتة
desserts|40|San Sebastian cheesecake|San Sebastian cheesecake|تشيز كيك سان سيباستيان
desserts|45|Cheesecake Oreo|Oreo cheesecake|تشيز كيك أوريو
desserts|40|Tiramisu caramel beurre salé|Salted caramel tiramisu|تيراميسو بالكراميل المملح
desserts|40|Cookies chocolat à la poêle|Skillet chocolate cookies|كوكيز الشوكولاتة بالمقلاة
desserts|35|Assiette de fruits de saison|Seasonal fruit plate|طبق فواكه موسمية
desserts|35|Tarte fine aux pommes|Thin apple tart|فطيرة تفاح رقيقة
desserts|30|Thé et pâtisseries marocaines|Tea and Moroccan pastries|شاي وحلويات مغربية
pancakes|50|Millefeuille de pancake|Pancake millefeuille|ميلفوي بانكيك
pancakes|40|Pancake Nutella|Nutella pancake|بانكيك نوتيلا
pancakes|45|Pancake Nutella banane|Nutella banana pancake|بانكيك نوتيلا وموز
pancakes|50|Pancakes duo chocolat|Double chocolate pancakes|بانكيك بشوكولاتتين
pancakes|35|Pancake caramel|Caramel pancake|بانكيك كراميل
pancakes|35|Mini pancakes au choix|Mini pancakes, your choice|ميني بانكيك حسب الاختيار
pancakes|30|Gaufre nature|Plain waffle|وافل سادة
pancakes|40|Gaufre chocolat|Chocolate waffle|وافل شوكولاتة
pancakes|45|Gaufre spéculos|Speculoos waffle|وافل سبيكولوس
pancakes|35|Gaufre miel|Honey waffle|وافل بالعسل
pancakes|55|Gaufre ananas mangue|Pineapple mango waffle|وافل أناناس ومانجو
pancakes|45|Gaufre choco orange|Chocolate orange waffle|وافل شوكولاتة وبرتقال
pancakes|50|Gaufre choco duo|Double chocolate waffle|وافل بشوكولاتتين
pancakes|45|Gaufre crème chantilly|Chantilly cream waffle|وافل بكريمة شانتيي
pancakes|45|Gaufre pomme cannelle|Apple cinnamon waffle|وافل بالتفاح والقرفة
pancakes|40|Gaufre caramel beurre salé|Salted caramel waffle|وافل بكراميل الزبدة المملحة
hotdrinks|14|Café expresso|Espresso|إسبريسو
hotdrinks|18|Expresso aromatisé|Flavoured espresso|إسبريسو منكه
hotdrinks|18|Double expresso|Double espresso|إسبريسو مزدوج
hotdrinks|18|Café americano|Americano|أمريكانو
hotdrinks|15|Café crème|Café crème|قهوة بالكريمة
hotdrinks|16|Chocolat chaud|Hot chocolate|شوكولاتة ساخنة
hotdrinks|18|Cappuccino|Cappuccino|كابتشينو
hotdrinks|20|Cappuccino viennois|Viennese cappuccino|كابتشينو فيينا
hotdrinks|14|Thé à la menthe|Mint tea|شاي بالنعناع
hotdrinks|15|Thé noir|Black tea|شاي أسود
hotdrinks|15|Thé anglais|English tea|شاي إنجليزي
hotdrinks|18|Nespresso|Nespresso|نسبريسو
hotdrinks|25|Chocolat macchiato|Chocolate macchiato|ماكياتو الشوكولاتة
hotdrinks|30|Caramel macchiato|Caramel macchiato|ماكياتو الكراميل
hotdrinks|25|Chocolat fondu noir|Dark melted chocolate|شوكولاتة سوداء مذابة
hotdrinks|28|Chocolat fondu blanc|White melted chocolate|شوكولاتة بيضاء مذابة
hotdrinks|30|Chocolat fondu noir / blanc|Dark and white melted chocolate|شوكولاتة سوداء وبيضاء مذابة
hotdrinks|15|Thé américain|American tea|شاي أمريكي
hotdrinks|15|Verveine à l’eau ou au lait|Verbena with water or milk|لويزة بالماء أو الحليب
softdrinks|16|Soda|Soda|مشروب غازي
softdrinks|15|Oulmès petit|Small Oulmès|أولماس صغير
softdrinks|18|Oulmès grand|Large Oulmès|أولماس كبير
softdrinks|16|Oulmès mojito|Oulmès mojito|أولماس موهيتو
softdrinks|16|Oulmès tropical|Oulmès tropical|أولماس استوائي
softdrinks|8|Eau minérale 50 cl|Mineral water 50 cl|ماء معدني 50 سل
softdrinks|16|Eau minérale 1,5 l|Mineral water 1.5 l|ماء معدني 1.5 لتر
softdrinks|22|Orangina|Orangina|أورانجينا
softdrinks|30|Red Bull|Red Bull|ريد بول
softdrinks|25|Ice tea citron|Lemon iced tea|شاي مثلج بالليمون
softdrinks|25|Ice tea pêche|Peach iced tea|شاي مثلج بالخوخ
softdrinks|25|Ice tea fruits rouges|Red berry iced tea|شاي مثلج بالتوت الأحمر
softdrinks|35|Shake Oreo|Oreo shake|ميلك شيك أوريو
softdrinks|35|Milkshake|Milkshake|ميلك شيك
softdrinks|35|Shake Nutella|Nutella shake|ميلك شيك نوتيلا
softdrinks|40|Shake KitKat|KitKat shake|ميلك شيك كيت كات
juices|20|Jus d’orange|Orange juice|عصير البرتقال
juices|20|Jus de banane|Banana juice|عصير الموز
juices|20|Jus de pomme|Apple juice|عصير التفاح
juices|22|Jus de citron|Lemon juice|عصير الليمون
juices|25|Jus d’amande|Almond juice|عصير اللوز
juices|28|Jus d’avocat|Avocado juice|عصير الأفوكادو
juices|25|Jus de pêche|Peach juice|عصير الخوخ
juices|28|Jus d’ananas|Pineapple juice|عصير الأناناس
juices|22|Jus de carotte|Carrot juice|عصير الجزر
juices|28|Jus de mangue|Mango juice|عصير المانجو
juices|23|Jus de fraise au lait|Strawberry juice with milk|عصير الفراولة بالحليب
juices|30|Panaché au lait|Fruit blend with milk|عصير فواكه مشكل بالحليب
juices|35|Panaché à l’orange|Fruit blend with orange|عصير فواكه مشكل بالبرتقال
juices|45|Panaché fruits secs|Dried fruit blend|عصير فواكه مجففة مشكل
juices|28|Jus à base d’orange|Orange-based juice|عصير أساسه البرتقال
juices|33|Smoothie fraise|Strawberry smoothie|سموذي الفراولة
juices|33|Smoothie banane|Banana smoothie|سموذي الموز
juices|33|Smoothie pêche|Peach smoothie|سموذي الخوخ
juices|33|Smoothie ananas|Pineapple smoothie|سموذي الأناناس
juices|35|California Dream|California Dream|كاليفورنيا دريم
cocktails|30|Virgin mojito|Virgin mojito|موهيتو بدون كحول
cocktails|35|Mojito fruits rouges|Red berry mojito|موهيتو التوت الأحمر
cocktails|35|Mojito blue curaçao|Blue curaçao mojito|موهيتو بلو كوراساو
cocktails|50|Mojito Red Bull|Red Bull mojito|موهيتو ريد بول
cocktails|35|Virgin colada|Virgin colada|كولادا بدون كحول
cocktails|40|Red Power|Red Power|ريد باور
cocktails|30|Énergie|Energy|إنرجي
cocktails|30|Turkisch|Turkisch|تركيش
cocktails|40|Bora Bora|Bora Bora|بورا بورا
cocktails|30|Florida|Florida|فلوريدا
cocktails|40|Tahiti|Tahiti|تاهيتي
ice|65|Coupe Veranda|Veranda sundae|كأس فيراندا
ice|40|Café liégeois|Coffee Liégeois|آيس كريم القهوة
ice|50|Chocolat liégeois|Chocolate Liégeois|آيس كريم الشوكولاتة
ice|55|Alexondra|Alexondra sundae|كأس أليكسوندرا
ice|60|Banana split|Banana split|بانانا سبليت
ice|15|Une boule de glace|One scoop of ice cream|كرة آيس كريم واحدة
ice|10|Crème chantilly, supplément|Extra Chantilly cream|كريمة شانتيي إضافية
`;

export const menu = rows.trim().split('\n').map((row) => {
  const [category, price, fr, en, ar] = row.split('|');
  return { category, price: Number(price), name: { fr, en, ar } };
});
