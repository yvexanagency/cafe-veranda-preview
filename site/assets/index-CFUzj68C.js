(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/cafe-veranda-preview/assets/logo-on-dark-e6dbF2MZ.png`;if(!document.querySelector(`[data-yvexan-signature]`)){let t=document.createElement(`div`);t.className=`yvexan-credit`,t.dataset.yvexanSignature=``;let n=document.createElement(`a`);n.href=`https://yvexan.com/`,n.target=`_blank`,n.rel=`noopener noreferrer`,n.setAttribute(`aria-label`,`Powered by Yvexan Solutions`);let r=document.createElement(`span`);r.textContent=`Powered by`;let i=document.createElement(`img`);i.src=e,i.alt=`Yvexan Solutions`,i.width=112,i.height=45,i.loading=`lazy`,i.decoding=`async`,n.append(r,i),t.append(n),document.body.append(t)}var t=[[`breakfast`,`Petit déjeuner`,`Breakfast`,`الفطور`],[`extras`,`Suppléments & petits plats`,`Extras & light bites`,`إضافات وأطباق خفيفة`],[`cold`,`Entrées froides`,`Cold starters`,`مقبلات باردة`],[`hot`,`Entrées chaudes`,`Hot starters`,`مقبلات ساخنة`],[`mains`,`Plats`,`Main courses`,`الأطباق الرئيسية`],[`pasta`,`Pâtes & risottos`,`Pasta & risotto`,`باستا وريزوتو`],[`pizza`,`Pizzas`,`Pizzas`,`بيتزا`],[`burgers`,`Burgers & wraps`,`Burgers & wraps`,`برغر وراب`],[`kids`,`Menu enfants`,`Kids’ menu`,`قائمة الأطفال`],[`desserts`,`Desserts`,`Desserts`,`الحلويات`],[`pancakes`,`Pancakes & gaufres`,`Pancakes & waffles`,`بانكيك ووافل`],[`hotdrinks`,`Cafés & thés`,`Coffee & tea`,`القهوة والشاي`],[`softdrinks`,`Boissons fraîches`,`Cold drinks`,`مشروبات باردة`],[`juices`,`Jus & smoothies`,`Juices & smoothies`,`عصائر وسموذي`],[`cocktails`,`Cocktails`,`Cocktails`,`كوكتيلات`],[`ice`,`Glaces`,`Ice cream`,`المثلجات`]].map(([e,t,n,r])=>({id:e,label:{fr:t,en:n,ar:r}})),n=`breakfast|35|Francilien|French breakfast|فطور فرنسي
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
ice|10|Crème chantilly, supplément|Extra Chantilly cream|كريمة شانتيي إضافية`.split(`
`).map(e=>{let[t,n,r,i,a]=e.split(`|`);return{category:t,price:Number(n),name:{fr:r,en:i,ar:a}}}),r=`+212535401961`,i=`https://www.instagram.com/cafe_veranda_restaurant/`,a=`https://www.google.com/maps?cid=13514422603543729394`,o=`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5193266428923!2d-5.533383499999999!3d33.8762766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda04513a93a0b41:0xbb8cdfc164bbd4f2!2sCaf%C3%A9%20veranda!5e0!3m2!1sfr!2sma!4v1775561032220!5m2!1sfr!2sma`,s=`Villa 21, Lotissement Al Mountazah, Zahwa`,c=e=>`/cafe-veranda-preview/images/${e}`,l=[`fr`,`en`,`ar`],u=l.includes(localStorage.getItem(`veranda-language`))?localStorage.getItem(`veranda-language`):`fr`,d=t[0].id,f,p={fr:{title:`Café Veranda | Café restaurant à Meknès`,description:`Découvrez le menu et les prix de Café Veranda à Meknès, puis contactez-nous pour votre prochaine visite.`,skip:`Aller au contenu`,homeAria:`Café Veranda, accueil`,navAria:`Navigation principale`,mobileNavAria:`Navigation mobile`,language:`Langue du site`,navHome:`La maison`,navMenu:`Le menu`,navWorld:`L’univers`,navVisit:`Nous trouver`,callBook:`Appeler pour réserver`,openNav:`Ouvrir le menu`,closeNav:`Fermer le menu`,heroPlace:`Café restaurant à Meknès`,hero1:`Les beaux moments`,hero2a:`se`,hero2b:`partagent`,hero2c:`à table.`,heroBody:`Un café le matin, un déjeuner qui s’étire, un dîner à retrouver. Bienvenue chez Veranda.`,heroMenu:`Voir le menu`,heroVisit:`Nous rendre visite`,scroll:`Défiler pour découvrir`,aboutLabel:`À propos de Veranda`,about1:`Un lieu pour`,about2:`chaque envie.`,aboutBody1:`Au cœur de Meknès, Café Veranda réunit les moments simples de la journée autour d’un menu aux influences marocaines et internationales.`,aboutBody2:`On s’y retrouve pour un café, une pause gourmande ou un repas à partager, à l’intérieur comme en terrasse.`,aboutLink:`Découvrir l’adresse`,featureAria:`L’esprit de la maison`,featureLabel:`Du matin au soir`,feature1:`Le plaisir de`,feature2:`prendre son temps.`,featureBody:`La première tasse du jour. Un plat à partager. Une douceur qui prolonge la conversation.`,featureLink:`Explorer le menu`,menuLabel:`À découvrir`,menuTitle:`Le menu`,menuBody:`Des petits déjeuners aux desserts, découvrez les plats et boissons de Café Veranda.`,menuTabsAria:`Catégories du menu`,menuSelectLabel:`Choisir une catégorie du menu`,menuSelection:`Sélection du menu`,priceNote:`Prix relevés sur le menu partagé en story Instagram. Les tarifs et disponibilités peuvent avoir changé. À confirmer auprès du restaurant.`,galleryLabel:`L’univers Veranda`,gallery1:`Des instants`,gallery2:`à savourer.`,galleryLink:`Suivre sur Instagram`,galleryCaption1:`Autour de la table`,galleryCaption2:`Un moment à partager`,galleryCaption3:`La pause café`,galleryNote:`Photographies d’ambiance créées pour cette proposition de site.`,visitLabel:`Nous trouver`,visit1:`Votre table`,visit2:`vous attend.`,directions:`Obtenir l’itinéraire`,call:`Appeler le restaurant`,mapAria:`Carte de localisation de Café Veranda`,mapOpen:`Ouvrir dans Google Maps`,footerLine:`Un moment à partager, à Meknès.`,footerNote:`Site de présentation`,top:`Retour en haut`,instaAria:`Café Veranda sur Instagram`,cafeAlt:`Cappuccino et crêpes dans une scène d’ambiance conceptuelle`,couscousAlt:`Couscous servi dans une scène culinaire conceptuelle`,heroAlt:`Ambiance conceptuelle d’un restaurant verdoyant`,currency:`DH`},en:{title:`Café Veranda | Restaurant in Meknès`,description:`Explore Café Veranda’s menu and prices in Meknès, then get in touch for your next visit.`,skip:`Skip to content`,homeAria:`Café Veranda, home`,navAria:`Main navigation`,mobileNavAria:`Mobile navigation`,language:`Website language`,navHome:`Our place`,navMenu:`The menu`,navWorld:`The atmosphere`,navVisit:`Find us`,callBook:`Call to reserve`,openNav:`Open menu`,closeNav:`Close menu`,heroPlace:`Café restaurant in Meknès`,hero1:`Good moments`,hero2a:`are`,hero2b:`shared`,hero2c:`at the table.`,heroBody:`Morning coffee, a leisurely lunch, dinner together. Welcome to Veranda.`,heroMenu:`View the menu`,heroVisit:`Visit us`,scroll:`Scroll to explore`,aboutLabel:`About Veranda`,about1:`A place for`,about2:`every occasion.`,aboutBody1:`In the heart of Meknès, Café Veranda brings the day’s simple moments together over a menu with Moroccan and international influences.`,aboutBody2:`Stop by for coffee, a sweet break, or a meal to share indoors or on the terrace.`,aboutLink:`Find our address`,featureAria:`The spirit of Veranda`,featureLabel:`Morning to evening`,feature1:`Take time`,feature2:`to enjoy it.`,featureBody:`The first cup of the day. A dish to share. Something sweet to keep the conversation going.`,featureLink:`Explore the menu`,menuLabel:`Discover`,menuTitle:`The menu`,menuBody:`From breakfast to dessert, explore Café Veranda’s food and drinks.`,menuTabsAria:`Menu categories`,menuSelectLabel:`Choose a menu category`,menuSelection:`Menu selection`,priceNote:`Prices are from the menu shared in an Instagram Story. Prices and availability may have changed. Please confirm with the restaurant.`,galleryLabel:`The Veranda atmosphere`,gallery1:`Moments`,gallery2:`to savour.`,galleryLink:`Follow on Instagram`,galleryCaption1:`Around the table`,galleryCaption2:`A moment to share`,galleryCaption3:`Coffee break`,galleryNote:`Concept photographs created for this website proposal.`,visitLabel:`Find us`,visit1:`Your table`,visit2:`is waiting.`,directions:`Get directions`,call:`Call the restaurant`,mapAria:`Map showing Café Veranda`,mapOpen:`Open in Google Maps`,footerLine:`A moment to share in Meknès.`,footerNote:`Website concept`,top:`Back to top`,instaAria:`Café Veranda on Instagram`,cafeAlt:`Cappuccino and crêpes in a concept image`,couscousAlt:`Couscous in a concept food image`,heroAlt:`Concept image of a leafy restaurant`,currency:`DH`},ar:{title:`مقهى ومطعم فيراندا | مكناس`,description:`تصفح قائمة وأسعار مقهى فيراندا في مكناس وتواصل معنا لزيارتك القادمة.`,skip:`الانتقال إلى المحتوى`,homeAria:`مقهى فيراندا، الصفحة الرئيسية`,navAria:`التنقل الرئيسي`,mobileNavAria:`التنقل على الهاتف`,language:`لغة الموقع`,navHome:`المكان`,navMenu:`القائمة`,navWorld:`الأجواء`,navVisit:`موقعنا`,callBook:`اتصل للحجز`,openNav:`افتح القائمة`,closeNav:`أغلق القائمة`,heroPlace:`مقهى ومطعم في مكناس`,hero1:`أجمل اللحظات`,hero2a:``,hero2b:`نتشاركها`,hero2c:`حول المائدة.`,heroBody:`قهوة الصباح، غداء على مهل، وعشاء يجمع الأحبة. مرحباً بكم في فيراندا.`,heroMenu:`تصفح القائمة`,heroVisit:`زرنا`,scroll:`مرّر لاكتشاف المزيد`,aboutLabel:`عن فيراندا`,about1:`مكان يناسب`,about2:`كل لحظة.`,aboutBody1:`في قلب مكناس، يجمع مقهى فيراندا لحظات اليوم حول قائمة مستوحاة من المطبخ المغربي والعالمي.`,aboutBody2:`التقِ بنا على قهوة أو حلوى أو وجبة تشاركها مع من تحب، داخل المطعم أو على الشرفة.`,aboutLink:`اكتشف العنوان`,featureAria:`روح فيراندا`,featureLabel:`من الصباح إلى المساء`,feature1:`متعة`,feature2:`الاستمتاع بالوقت.`,featureBody:`أول فنجان في الصباح. طبق نتشاركه. وحلوى تطيل الحديث.`,featureLink:`استكشف القائمة`,menuLabel:`اكتشف`,menuTitle:`القائمة`,menuBody:`من الفطور إلى الحلوى، اكتشف أطباق ومشروبات مقهى فيراندا.`,menuTabsAria:`أقسام القائمة`,menuSelectLabel:`اختر قسماً من القائمة`,menuSelection:`من القائمة`,priceNote:`الأسعار مأخوذة من القائمة المنشورة في قصة إنستغرام. قد تتغير الأسعار والتوفر، لذا يرجى التأكد من المطعم.`,galleryLabel:`أجواء فيراندا`,gallery1:`لحظات`,gallery2:`تستحق التذوق.`,galleryLink:`تابعنا على إنستغرام`,galleryCaption1:`حول المائدة`,galleryCaption2:`لحظة نتشاركها`,galleryCaption3:`استراحة القهوة`,galleryNote:`صور تخيلية أُنشئت لهذا النموذج من الموقع.`,visitLabel:`موقعنا`,visit1:`طاولتك`,visit2:`بانتظارك.`,directions:`احصل على الاتجاهات`,call:`اتصل بالمطعم`,mapAria:`خريطة موقع مقهى فيراندا`,mapOpen:`افتح في خرائط Google`,footerLine:`لحظة نتشاركها في مكناس.`,footerNote:`نموذج موقع`,top:`العودة للأعلى`,instaAria:`مقهى فيراندا على إنستغرام`,cafeAlt:`قهوة وكريب في صورة تخيلية`,couscousAlt:`كسكس في صورة طعام تخيلية`,heroAlt:`صورة تخيلية لمطعم تحيط به النباتات`,currency:`د.م.`}},m=(e,t=18)=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{arrow:`<path d="M4 12h15m-6-6 6 6-6 6"/>`,north:`<path d="M5 17 17 5M7 5h10v10"/>`,pin:`<path d="M12 21s7-5.3 7-11a7 7 0 0 0-14 0c0 5.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/>`,phone:`<path d="M5 3h4l1 5-2 2a15 15 0 0 0 6 6l2-2 5 1v4a2 2 0 0 1-2 2C10 21 3 14 3 5a2 2 0 0 1 2-2Z"/>`,insta:`<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>`,chevron:`<path d="m9 18 6-6-6-6"/>`,down:`<path d="m6 9 6 6 6-6"/>`,globe:`<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>`,check:`<path d="m5 12 4 4L19 6"/>`,close:`<path d="M5 5l14 14M19 5 5 19"/>`,menu:`<path d="M3 8h18M3 16h18"/>`}[e]}</svg>`;function h(){f&&f.disconnect();let e=p[u];document.documentElement.lang=u,document.documentElement.dir=u===`ar`?`rtl`:`ltr`,document.title=e.title,document.querySelector(`meta[name="description"]`).content=e.description,document.querySelector(`#app`).innerHTML=`
    <a class="skip-link" href="#contenu">${e.skip}</a>
    <header class="site-header">
      <div class="header-inner shell">
        <a class="wordmark" href="#haut" aria-label="${e.homeAria}"><span class="wordmark-v">V</span><span>Veranda<small>CAFÉ RESTAURANT</small></span></a>
        <nav class="desktop-nav" aria-label="${e.navAria}"><a href="#maison">${e.navHome}</a><a href="#menu">${e.navMenu}</a><a href="#galerie">${e.navWorld}</a><a href="#adresse">${e.navVisit}</a></nav>
        <div class="language-picker"><button class="language-trigger" type="button" aria-label="${e.language}" aria-expanded="false" aria-controls="language-options">${m(`globe`,16)}<span>${u.toUpperCase()}</span>${m(`down`,13)}</button><div class="language-options" id="language-options" role="group" aria-label="${e.language}" hidden>${l.map(e=>`<button type="button" data-lang="${e}" lang="${e}" aria-pressed="${u===e}"><span class="language-option-code">${e.toUpperCase()}</span><span>${{fr:`Français`,en:`English`,ar:`العربية`}[e]}</span>${u===e?m(`check`,15):``}</button>`).join(``)}</div></div>
        <a class="header-book" href="tel:${r}">${e.callBook} ${m(`north`,16)}</a>
        <button class="menu-toggle" type="button" aria-label="${e.openNav}" aria-expanded="false" aria-controls="mobile-nav">${m(`menu`,25)}</button>
      </div>
      <nav class="mobile-nav" id="mobile-nav" aria-label="${e.mobileNavAria}" hidden><a href="#maison">${e.navHome}</a><a href="#menu">${e.navMenu}</a><a href="#galerie">${e.navWorld}</a><a href="#adresse">${e.navVisit}</a><a class="mobile-call" href="tel:${r}">${e.callBook} ${m(`north`,18)}</a></nav>
    </header>
    <main id="contenu">
      <section class="hero" id="haut" aria-labelledby="hero-title"><div class="hero-image" role="img" aria-label="${e.heroAlt}"></div><div class="hero-shade"></div><div class="hero-content shell"><p class="hero-location"><span class="location-line"></span>${e.heroPlace}</p><h1 id="hero-title">${e.hero1}<br>${e.hero2a} <em>${e.hero2b}</em> ${e.hero2c}</h1><p class="hero-copy">${e.heroBody}</p><div class="hero-actions"><a class="button button-light" href="#menu">${e.heroMenu} ${m(`arrow`)}</a><a class="text-link hero-link" href="#adresse">${e.heroVisit} ${m(`north`,16)}</a></div></div><div class="hero-bottom shell"><span>Meknès, Maroc</span><span>${e.scroll} <span aria-hidden="true">↓</span></span></div></section>
      <section class="intro section-pad" id="maison" aria-labelledby="intro-title"><div class="shell intro-grid"><div class="intro-heading"><p class="section-kicker">${e.aboutLabel}</p><h2 id="intro-title">${e.about1}<br><em>${e.about2}</em></h2></div><div class="intro-body"><p>${e.aboutBody1}</p><p>${e.aboutBody2}</p><a class="inline-link" href="#adresse">${e.aboutLink} ${m(`north`,17)}</a></div></div></section>
      <section class="feature" aria-label="${e.featureAria}"><div class="feature-image"><img src="${c(`cafe.webp`)}" alt="${e.cafeAlt}" width="1122" height="1402" loading="lazy"></div><div class="feature-copy"><div><p class="section-kicker light">${e.featureLabel}</p><h2>${e.feature1}<br><em>${e.feature2}</em></h2><p>${e.featureBody}</p><a class="inline-link light-link" href="#menu">${e.featureLink} ${m(`north`,17)}</a></div><span class="feature-mark" aria-hidden="true">V.</span></div></section>
      <section class="menu-section section-pad" id="menu" aria-labelledby="menu-title"><span id="carte" class="anchor-alias" aria-hidden="true"></span><div class="shell"><div class="section-head"><div><p class="section-kicker">${e.menuLabel}</p><h2 id="menu-title">${e.menuTitle}</h2></div><p>${e.menuBody}</p></div><div class="menu-layout"><div class="menu-tabs" role="tablist" aria-label="${e.menuTabsAria}"></div><label class="menu-select-wrap"><span>${e.menuSelectLabel}</span><select class="menu-select" aria-label="${e.menuSelectLabel}"></select></label><div class="menu-panel" id="menu-panel" role="tabpanel" tabindex="0"></div></div><p class="menu-source">${e.priceNote}</p></div></section>
      <section class="gallery-section" id="galerie" aria-labelledby="gallery-title"><div class="shell gallery-head"><div><p class="section-kicker">${e.galleryLabel}</p><h2 id="gallery-title">${e.gallery1}<br><em>${e.gallery2}</em></h2></div><a class="inline-link" href="${i}" target="_blank" rel="noopener noreferrer">${e.galleryLink} ${m(`north`,17)}</a></div><div class="gallery-grid shell"><figure class="gallery-tall"><img src="${c(`couscous.webp`)}" alt="${e.couscousAlt}" width="1122" height="1402" loading="lazy"><figcaption>${e.galleryCaption1}</figcaption></figure><figure class="gallery-wide"><img src="${c(`hero.webp`)}" alt="${e.heroAlt}" width="1672" height="941" loading="lazy"><figcaption>${e.galleryCaption2}</figcaption></figure><figure class="gallery-small"><img src="${c(`cafe.webp`)}" alt="${e.cafeAlt}" width="1122" height="1402" loading="lazy"><figcaption>${e.galleryCaption3}</figcaption></figure></div><p class="gallery-note shell">${e.galleryNote}</p></section>
      <section class="visit section-pad" id="adresse" aria-labelledby="visit-title"><div class="shell visit-grid"><div><p class="section-kicker light">${e.visitLabel}</p><h2 id="visit-title">${e.visit1}<br><em>${e.visit2}</em></h2><p class="visit-intro"><bdi>${s}</bdi><br><bdi>Meknès 50000, Maroc</bdi></p><div class="visit-actions"><a class="button button-light" href="${a}" target="_blank" rel="noopener noreferrer">${e.directions} ${m(`north`,18)}</a><a class="button button-outline" href="tel:${r}">${e.call} ${m(`phone`,18)}</a></div></div><div class="visit-card"><div class="visit-card-top"><span class="visit-card-kicker">Meknès · Al Mountazah</span><span class="visit-card-label">Café Veranda</span></div><div class="map-frame"><iframe title="${e.mapAria}" src="${o}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div><div class="visit-card-foot"><span>Villa 21 · Al Mountazah Zahwa<br>Meknès</span><a href="${a}" target="_blank" rel="noopener noreferrer">${e.mapOpen} ${m(`north`,17)}</a></div></div></div></section>
    </main>
    <footer class="footer"><div class="shell footer-top"><a class="wordmark footer-wordmark" href="#haut" aria-label="${e.homeAria}"><span class="wordmark-v">V</span><span>Veranda<small>CAFÉ RESTAURANT</small></span></a><p>${e.footerLine}</p><a class="footer-social" href="${i}" target="_blank" rel="noopener noreferrer" aria-label="${e.instaAria}">${m(`insta`,21)}</a></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} Café Veranda</span><span>${e.footerNote}</span><a href="#haut">${e.top} ↑</a></div></footer>`;let h=document.querySelector(`.menu-tabs`),_=document.querySelector(`.menu-select`),v=document.querySelector(`#menu-panel`),y=()=>{h.innerHTML=t.map(e=>`<button type="button" role="tab" id="tab-${e.id}" aria-controls="menu-panel" aria-selected="${e.id===d}" tabindex="${e.id===d?`0`:`-1`}" data-category="${e.id}">${e.label[u]}<span aria-hidden="true">${m(`chevron`,18)}</span></button>`).join(``),_.innerHTML=t.map(e=>`<option value="${e.id}" ${e.id===d?`selected`:``}>${e.label[u]}</option>`).join(``);let r=t.find(e=>e.id===d);v.setAttribute(`aria-labelledby`,`tab-${r.id}`),v.innerHTML=`<div class="menu-panel-head"><p class="section-kicker">${e.menuSelection}</p><h3>${r.label[u]}</h3></div><ul class="menu-items">${n.filter(e=>e.category===d).map(t=>`<li><span class="item-name">${t.name[u]}</span><span class="menu-price"><bdi>${t.price}</bdi> ${e.currency}</span></li>`).join(``)}</ul>`};y(),h.addEventListener(`click`,e=>{let t=e.target.closest(`[role="tab"]`);t&&(d=t.dataset.category,y(),document.querySelector(`#tab-${d}`).focus())}),h.addEventListener(`keydown`,e=>{if(![`ArrowDown`,`ArrowUp`,`ArrowRight`,`ArrowLeft`,`Home`,`End`].includes(e.key))return;e.preventDefault();let n=t.findIndex(e=>e.id===d);d=t[e.key===`Home`?0:e.key===`End`?t.length-1:(n+([`ArrowDown`,`ArrowRight`].includes(e.key)?1:-1)+t.length)%t.length].id,y(),document.querySelector(`#tab-${d}`).focus()}),_.addEventListener(`change`,()=>{d=_.value,y(),_.focus()});let b=document.querySelector(`.menu-toggle`),x=document.querySelector(`.mobile-nav`),S=t=>{x.hidden=!t,b.setAttribute(`aria-expanded`,String(t)),b.setAttribute(`aria-label`,t?e.closeNav:e.openNav),b.innerHTML=m(t?`close`:`menu`,25),document.body.classList.toggle(`nav-open`,t)};b.addEventListener(`click`,()=>S(x.hidden)),x.addEventListener(`click`,e=>{e.target.closest(`a`)&&S(!1)});let C=document.querySelector(`.language-trigger`),w=document.querySelector(`.language-options`),T=e=>{w.hidden=!e,C.setAttribute(`aria-expanded`,String(e))};C.addEventListener(`click`,()=>T(w.hidden)),document.querySelectorAll(`[data-lang]`).forEach(e=>e.addEventListener(`click`,()=>g(e.dataset.lang)));let E=document.querySelector(`.site-header`);f=new IntersectionObserver(([e])=>E.classList.toggle(`scrolled`,!e.isIntersecting),{threshold:0}),f.observe(document.querySelector(`.hero`))}function g(e){if(!l.includes(e)||e===u)return;let t=window.scrollY;u=e,localStorage.setItem(`veranda-language`,u),document.body.classList.remove(`nav-open`),h(),requestAnimationFrame(()=>window.scrollTo({top:t,behavior:`instant`}))}document.addEventListener(`keydown`,e=>{let t=document.querySelector(`.menu-toggle`),n=document.querySelector(`.mobile-nav`),r=document.querySelector(`.language-trigger`),i=document.querySelector(`.language-options`);e.key===`Escape`&&i&&!i.hidden?(i.hidden=!0,r.setAttribute(`aria-expanded`,`false`),r.focus()):e.key===`Escape`&&n&&!n.hidden&&(n.hidden=!0,t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`aria-label`,p[u].openNav),t.innerHTML=m(`menu`,25),document.body.classList.remove(`nav-open`),t.focus())}),document.addEventListener(`click`,e=>{let t=document.querySelector(`.language-picker`);if(!t||t.contains(e.target))return;let n=t.querySelector(`.language-options`);n.hidden=!0,t.querySelector(`.language-trigger`).setAttribute(`aria-expanded`,`false`)}),h();