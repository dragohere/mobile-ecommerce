import { FEATURED_PRODUCTS, ALL_PRODUCTS } from "./ProductTypes";
import { combineReducers } from "redux";

const featuredProductsState = [
  {
    productId: 100000,
    productName: "Iphone 6s Combo",
    imageSrc: [
      { urlMain: "https://m.media-amazon.com/images/I/41VJDgH7JQL.jpg" },
      { url: "https://m.media-amazon.com/images/I/41VJDgH7JQL.jpg" },
      {
        url: "https://www.maxbhi.com/images/thumbnails/400/400/detailed/1513/lcd_with_touch_screen_for_apple_iphone_6s_128gb_black_by_maxbhi_com_56281.jpg",
      },
      {
        url: "https://sparepartsonline.in/wp-content/uploads/2018/07/iphone-6-combo-folder-lcd-screen-white1.jpg",
      },
      { url: "https://m.media-amazon.com/images/I/41HSmNBIOML.jpg" },
    ],
    brand: "iphone",
    price: 2100,
  },
  {
    productId: 100001,
    productName: "Iphone SE",
    imageSrc: [
      {
        urlMain:
          "https://www.maxbhi.com/images/thumbnails/400/400/detailed/911/lcd_with_touch_screen_for_apple_iphone_5s_64gb_black_by_maxbhi_com_71205.jpg",
      },
      {
        url: "https://rukminim1.flixcart.com/image/300/300/kxnl6kw0/replacement-screen/8/v/e/lcd-iphone-se-lcd-with-touch-screen-display-glass-combo-folder-4-original-imaga2hdevrju6jh.jpeg",
      },
      {
        url: "https://www.maxbhi.com/images/detailed/431/lcd_with_touch_screen_for_apple_iphone_5_black_by_maxbhi_com_44581.jpg",
      },
      {
        url: "https://m.media-amazon.com/images/I/61UYvDLGjhL._AC_SY200_QL15_.jpg",
      },
      {
        url: "https://5.imimg.com/data5/SELLER/Default/2022/3/NG/SB/MK/44779649/display-combo-with-touch-screen-for-apple-iphone-5s-white-by-celfixindia-com-1-8--500x500.jpg",
      },
    ],
    brand: "iphone",
    price: 1700,
  },
  {
    productId: 100002,
    productName: "Iphone 7 Plus Combo",
    imageSrc: [
      { urlMain: "https://m.media-amazon.com/images/I/51SWd3AWM5L.jpg" },
      { url: "https://5.imimg.com/data5/SELLER/Default/2020/9/HI/PS/XD/92848847/lcd-with-touch-screen-for-apple-iphone-7-plus-black-by-maxbhi-com-57867-2.jpg" },
      {
        url: "https://m.media-amazon.com/images/I/61zwE9CFeLL._SX679_.jpg",
      },
      {
        url: "https://sparepartsonline.in/wp-content/uploads/2018/07/iphone-7-plus-combo-folder-lcd-screen-white.jpg",
      },
      { url: "https://sparepartsonline.in/wp-content/uploads/2018/07/iphone-7-plus-combo-folder-lcd-screen-black.jpg" },
    ],
    brand: "iphone",
    price: 2300,
  },
  {
    productId: 100003,
    productName: "Iphone 8 Stylish Combo",
    imageSrc: [
      { urlMain: "https://5.imimg.com/data5/SELLER/Default/2020/9/QN/XN/QZ/92848847/iphone-8-black-500x500.jpg" },
      { url: "https://m.media-amazon.com/images/I/31wy9rB31cL.jpg" },
      {
        url: "https://m.media-amazon.com/images/I/61zwE9CFeLL._SX679_.jpg",
      },
      {
        url: "https://5.imimg.com/data5/SELLER/Default/2022/3/HQ/VC/VG/44779649/display-combo-with-touch-screen-for-apple-iphone-8-black-by-celfixindia-com-1-1-.jpg",
      },
      { url: "https://sparepartsonline.in/wp-content/uploads/2018/07/iphone-7-plus-combo-folder-lcd-screen-black.jpg" },
    ],
    brand: "iphone",
    price: 2400,
  },
  {
    productId: 100004,
    productName: "Iphone X Edge Combo",
    imageSrc: [
      { urlMain: "https://www.rdgstores.com/public//wp-content/uploads/2019/05/x.jpg" },
      { url: "https://1.img-dpreview.com/files/p/E~C84x0S769x769T1200x1200~articles/6657414127/iphonex_truedepth_back_camera.jpeg" },
      {
        url: "https://www.maxbhi.com/images/thumbnails/769/769/detailed/5482/lcd_with_touch_screen_for_apple_iphone_x_grey_by_maxbhi_com_46702_1.jpg",
      },
      {
        url: "https://m.media-amazon.com/images/I/61iJgIu5+yL.jpg",
      },
      { url: "https://5.imimg.com/data5/SELLER/Default/2020/10/QL/NE/TR/3988380/lcd-with-touch-screen-for-apple-iphone-xs-black-display-glass-combo-folder--500x500.jpg" },
    ],
    brand: "iphone",
    price: 2500,
  },
  {
    productId: 100005,
    productName: "Iphone XR Pop Combo",
    imageSrc: [
      { urlMain: "https://uvfolderking.in/wp-content/uploads/2024/01/lcd_with_touch_screen_for_apple_iphone_xs_max_gold_by_maxbhi_com_98852.jpg" },
      { url: "https://5.imimg.com/data5/MP/WE/II/SELLER-110300444/xr-500x500.jpg" },
      {
        url: "https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XR-Red-2.png",
      },
      {
        url: "https://www.maxbhi.com/images/thumbnails/1000/1000/detailed/2897/lcd_with_touch_screen_for_apple_iphone_xr_black_by_maxbhi_com_10749.jpg",
      },
      { url: "https://uvfolderking.in/wp-content/uploads/2024/01/lcd_with_touch_screen_for_apple_iphone_xs_max_gold_by_maxbhi_com_98852.jpg" },
    ],
    brand: "iphone",
    price: 3200,
  },
  {
    productId: 100006,
    productName: "Iphone 11",
    imageSrc: [
      { urlMain: "https://m.media-amazon.com/images/I/61Y3a7VjJdL.jpg" },
      { url: "https://5.imimg.com/data5/SELLER/Default/2022/3/WJ/RW/WQ/44779649/display-combo-with-touch-screen-for-apple-iphone-11-black-by-celfixindia-com-1-7--500x500.JPG" },
      {
        url: "https://www.mcarespareparts.com/cdn/shop/files/Iphone112.jpg?v=1697103378",
      },
      {
        url: "https://dukanindia.in/home/wp-content/uploads/2022/01/41NVQZ4lG4L.jpg",
      },
      { url: "https://www.rdgstores.com/public//wp-content/uploads/2023/07/1st-Original-Apple-iPhone-11-Pro-Max-Display-.jpg" },
    ],
    brand: "iphone",
    price: 4400,
  },
  {
    productId: 100007,
    productName: "Iphone 12 mini combo",
    imageSrc: [
      { urlMain: "https://www.maxbhi.com/images/detailed/4586/lcd_with_touch_screen_for_apple_iphone_12_mini_white_by_maxbhi_com_32636.jpg" },
      { url: "https://5.imimg.com/data5/SELLER/Default/2022/3/CK/TM/NJ/44779649/display-combo-with-touch-screen-for-apple-iphone-12-mini-black-by-celfixindia-com-1-3-.jpg" },
      {
        url: "https://www.mcarespareparts.com/cdn/shop/files/lcd_with_touch_screen_for_apple_iphone_12_mini_white_by_maxbhi_com_32636_0.jpg?v=1686294613",
      },
      {
        url: "https://i5.walmartimages.com/asr/e95fda29-4685-42ce-92cb-b713cc7c2620.e171b20b9882bafb5eea10d003243afe.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
      },
      { url: "https://media.croma.com/image/upload/v1688730635/Croma%20Assets/Communication/Mobiles/Images/234255_qkyqry.png" },
    ],
    brand: "iphone",
    price: 4999,
  },
];

const allProductsState = [
  /////////////////////Featured products List///////////
  {
    productId: 100000,
    productName: "Iphone 6s Combo",
    imageSrc: [
      { urlMain: "https://m.media-amazon.com/images/I/41VJDgH7JQL.jpg" },
      { url: "https://m.media-amazon.com/images/I/41VJDgH7JQL.jpg" },
      {
        url: "https://www.maxbhi.com/images/thumbnails/400/400/detailed/1513/lcd_with_touch_screen_for_apple_iphone_6s_128gb_black_by_maxbhi_com_56281.jpg",
      },
      {
        url: "https://sparepartsonline.in/wp-content/uploads/2018/07/iphone-6-combo-folder-lcd-screen-white1.jpg",
      },
      { url: "https://m.media-amazon.com/images/I/41HSmNBIOML.jpg" },
    ],
    brand: "iphone",
    price: 2100,
  },
  {
    productId: 100001,
    productName: "Iphone SE",
    imageSrc: [
      {
        urlMain:
          "https://www.maxbhi.com/images/thumbnails/400/400/detailed/911/lcd_with_touch_screen_for_apple_iphone_5s_64gb_black_by_maxbhi_com_71205.jpg",
      },
      {
        url: "https://rukminim1.flixcart.com/image/300/300/kxnl6kw0/replacement-screen/8/v/e/lcd-iphone-se-lcd-with-touch-screen-display-glass-combo-folder-4-original-imaga2hdevrju6jh.jpeg",
      },
      {
        url: "https://www.maxbhi.com/images/detailed/431/lcd_with_touch_screen_for_apple_iphone_5_black_by_maxbhi_com_44581.jpg",
      },
      {
        url: "https://m.media-amazon.com/images/I/61UYvDLGjhL._AC_SY200_QL15_.jpg",
      },
      {
        url: "https://5.imimg.com/data5/SELLER/Default/2022/3/NG/SB/MK/44779649/display-combo-with-touch-screen-for-apple-iphone-5s-white-by-celfixindia-com-1-8--500x500.jpg",
      },
    ],
    brand: "iphone",
    price: 1700,
  },
  {
    productId: 100002,
    productName: "Iphone 7 Plus Combo",
    imageSrc: [
      { urlMain: "https://m.media-amazon.com/images/I/51SWd3AWM5L.jpg" },
      { url: "https://5.imimg.com/data5/SELLER/Default/2020/9/HI/PS/XD/92848847/lcd-with-touch-screen-for-apple-iphone-7-plus-black-by-maxbhi-com-57867-2.jpg" },
      {
        url: "https://m.media-amazon.com/images/I/61zwE9CFeLL._SX679_.jpg",
      },
      {
        url: "https://sparepartsonline.in/wp-content/uploads/2018/07/iphone-7-plus-combo-folder-lcd-screen-white.jpg",
      },
      { url: "https://sparepartsonline.in/wp-content/uploads/2018/07/iphone-7-plus-combo-folder-lcd-screen-black.jpg" },
    ],
    brand: "iphone",
    price: 2300,
  },
  {
    productId: 100003,
    productName: "Iphone 8 Stylish Combo",
    imageSrc: [
      { urlMain: "https://5.imimg.com/data5/SELLER/Default/2020/9/QN/XN/QZ/92848847/iphone-8-black-500x500.jpg" },
      { url: "https://m.media-amazon.com/images/I/31wy9rB31cL.jpg" },
      {
        url: "https://m.media-amazon.com/images/I/61zwE9CFeLL._SX679_.jpg",
      },
      {
        url: "https://5.imimg.com/data5/SELLER/Default/2022/3/HQ/VC/VG/44779649/display-combo-with-touch-screen-for-apple-iphone-8-black-by-celfixindia-com-1-1-.jpg",
      },
      { url: "https://sparepartsonline.in/wp-content/uploads/2018/07/iphone-7-plus-combo-folder-lcd-screen-black.jpg" },
    ],
    brand: "iphone",
    price: 2400,
  },
  {
    productId: 100004,
    productName: "Iphone X Edge Combo",
    imageSrc: [
      { urlMain: "https://www.rdgstores.com/public//wp-content/uploads/2019/05/x.jpg" },
      { url: "https://1.img-dpreview.com/files/p/E~C84x0S769x769T1200x1200~articles/6657414127/iphonex_truedepth_back_camera.jpeg" },
      {
        url: "https://www.maxbhi.com/images/thumbnails/769/769/detailed/5482/lcd_with_touch_screen_for_apple_iphone_x_grey_by_maxbhi_com_46702_1.jpg",
      },
      {
        url: "https://m.media-amazon.com/images/I/61iJgIu5+yL.jpg",
      },
      { url: "https://5.imimg.com/data5/SELLER/Default/2020/10/QL/NE/TR/3988380/lcd-with-touch-screen-for-apple-iphone-xs-black-display-glass-combo-folder--500x500.jpg" },
    ],
    brand: "iphone",
    price: 2500,
  },
  {
    productId: 100005,
    productName: "Iphone XR Pop Combo",
    imageSrc: [
      { urlMain: "https://uvfolderking.in/wp-content/uploads/2024/01/lcd_with_touch_screen_for_apple_iphone_xs_max_gold_by_maxbhi_com_98852.jpg" },
      { url: "https://5.imimg.com/data5/MP/WE/II/SELLER-110300444/xr-500x500.jpg" },
      {
        url: "https://cellbuddy.in/buddy/wp-content/uploads/2022/09/XR-Red-2.png",
      },
      {
        url: "https://www.maxbhi.com/images/thumbnails/1000/1000/detailed/2897/lcd_with_touch_screen_for_apple_iphone_xr_black_by_maxbhi_com_10749.jpg",
      },
      { url: "https://uvfolderking.in/wp-content/uploads/2024/01/lcd_with_touch_screen_for_apple_iphone_xs_max_gold_by_maxbhi_com_98852.jpg" },
    ],
    brand: "iphone",
    price: 3200,
  },
  {
    productId: 100006,
    productName: "Iphone 11",
    imageSrc: [
      { urlMain: "https://m.media-amazon.com/images/I/61Y3a7VjJdL.jpg" },
      { url: "https://5.imimg.com/data5/SELLER/Default/2022/3/WJ/RW/WQ/44779649/display-combo-with-touch-screen-for-apple-iphone-11-black-by-celfixindia-com-1-7--500x500.JPG" },
      {
        url: "https://www.mcarespareparts.com/cdn/shop/files/Iphone112.jpg?v=1697103378",
      },
      {
        url: "https://dukanindia.in/home/wp-content/uploads/2022/01/41NVQZ4lG4L.jpg",
      },
      { url: "https://www.rdgstores.com/public//wp-content/uploads/2023/07/1st-Original-Apple-iPhone-11-Pro-Max-Display-.jpg" },
    ],
    brand: "iphone",
    price: 4400,
  },
  {
    productId: 100007,
    productName: "Iphone 12 mini combo",
    imageSrc: [
      { urlMain: "https://www.maxbhi.com/images/detailed/4586/lcd_with_touch_screen_for_apple_iphone_12_mini_white_by_maxbhi_com_32636.jpg" },
      { url: "https://5.imimg.com/data5/SELLER/Default/2022/3/CK/TM/NJ/44779649/display-combo-with-touch-screen-for-apple-iphone-12-mini-black-by-celfixindia-com-1-3-.jpg" },
      {
        url: "https://www.mcarespareparts.com/cdn/shop/files/lcd_with_touch_screen_for_apple_iphone_12_mini_white_by_maxbhi_com_32636_0.jpg?v=1686294613",
      },
      {
        url: "https://i5.walmartimages.com/asr/e95fda29-4685-42ce-92cb-b713cc7c2620.e171b20b9882bafb5eea10d003243afe.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
      },
      { url: "https://media.croma.com/image/upload/v1688730635/Croma%20Assets/Communication/Mobiles/Images/234255_qkyqry.png" },
    ],
    brand: "iphone",
    price: 4999,
  },
  /////////////All Products List////////////
  {
    productId: 1,
    productName: "Iphone 6s Combo",
    imageSrc: [
      { urlMain: "https://m.media-amazon.com/images/I/41VJDgH7JQL.jpg" },
      { url: "https://m.media-amazon.com/images/I/41VJDgH7JQL.jpg" },
      {
        url: "https://www.maxbhi.com/images/thumbnails/400/400/detailed/1513/lcd_with_touch_screen_for_apple_iphone_6s_128gb_black_by_maxbhi_com_56281.jpg",
      },
      {
        url: "https://sparepartsonline.in/wp-content/uploads/2018/07/iphone-6-combo-folder-lcd-screen-white1.jpg",
      },
      { url: "https://m.media-amazon.com/images/I/41HSmNBIOML.jpg" },
    ],
    brand: "iphone",
    inStock: "Y",
    price: 60,
  },
  {
    productId: 2,
    productName: "Samsung Galaxy S7",
    imageSrc: [
      { urlMain: "https://www.maxbhi.com/images/thumbnails/1000/1000/detailed/1604/lcd_with_touch_screen_for_samsung_galaxy_s7_gold_by_maxbhi_com_1962.jpg" },
      {
        url: "https://www.maxbhi.com/images/thumbnails/400/400/detailed/1517/lcd_with_touch_screen_for_samsung_galaxy_s7_edge_64gb_gold_by_maxbhi_com_93468.jpg",
      },
      {
        url: "https://www.maxbhi.com/images/thumbnails/400/400/detailed/3961/lcd_with_touch_screen_for_samsung_galaxy_s7_edge_64gb_gold_by_maxbhi_com_93468_0.jpg",
      },
      {
        url: "https://www.xfurbish.com/image/cache/wkseller/16586/mobile-display-screen/lcd-with-touch-screen-for-samsung-galaxy-e7-display-combo-folder-white-400x400.webp",
      },
      {
        url: "https://mobileeesy.com/wp-content/uploads/2020/08/Samsung-Galaxy-S7-Edge-combo-Mobileeesy-2.jpg",
      },
    ],
    brand: "samsung",
    inStock: "Y",
    price: 80,
  },
  {
    productId: 3,
    productName: "Google Pixel 2 XL",
    imageSrc: [
      { urlMain: "https://www.google.com/phone/pixel/" },
      {
        url: "https://www.pocket-lint.com/images/gallery_medium/139104-google-pixel-2-xl-review-images-feature.jpg",
      },
      {
        url: "https://cdn.mos.cms.futurecdn.net/BWUd7ua9nT3z76eNvXD2Gy-1200-80.jpg",
      },
      {
        url: "https://www.androidcentral.com/sites/androidcentral.com/files/styles/xlarge/public/article_images/2017/10/google-pixel-2-xl-review-pano-1-10.jpg",
      },
      {
        url: "https://www.androidpolice.com/wp-content/uploads/2017/10/google-pixel-2-xl-review-11.jpg",
      },
    ],
    brand: "google",
    inStock: "Y",
    price: 120,
  },
  {
    productId: 4,
    productName: "OnePlus 6T",
    imageSrc: [
      { urlMain: "https://www.oneplus.com/6t" },
      { url: "https://www.gsmarena.com/oneplus_6t-9351.php" },
      { url: "https://www.oneplus.com/6t/gallery" },
      { url: "https://www.oneplus.com/6t/specs" },
    ],
    brand: "oneplus",
    inStock: "Y",
    price: 100,
  },
  {
    productId: 5,
    productName: "Xiaomi Mi 8",
    imageSrc: [
      { urlMain: "https://www.mi.com/global/mi8/" },
      { url: "https://www.gsmarena.com/xiaomi_mi_8-9184.php" },
      { url: "https://www.mi.com/global/mi8/specs/" },
      { url: "https://www.mi.com/global/mi8/photos/" },
      { url: "https://www.mi.com/global/mi8/videos/" },
    ],
    brand: "xiaomi",
    inStock: "Y",
    price: 110,
  },
  {
    productId: 6,
    productName: "LG G7 ThinQ",
    imageSrc: [
      { urlMain: "https://www.lg.com/us/cell-phones/lg-g7-thinq" },
      { url: "https://www.gsmarena.com/lg_g7_thinq-8984.php" },
      { url: "https://www.lg.com/us/cell-phones/lg-g7-thinq/images" },
      { url: "https://www.lg.com/us/cell-phones/lg-g7-thinq/specs" },
      { url: "https://www.lg.com/us/cell-phones/lg-g7-thinq/videos" },
    ],
    brand: "lg",
    inStock: "Y",
    price: 130,
  },
  {
    productId: 7,
    productName: "Huawei P20 Pro",
    imageSrc: [
      { urlMain: "https://consumer.huawei.com/en/phones/p20-pro/" },
      { url: "https://www.gsmarena.com/huawei_p20_pro-9055.php" },
      { url: "https://consumer.huawei.com/en/phones/p20-pro/gallery/" },
      { url: "https://consumer.huawei.com/en/phones/p20-pro/specs/" },
      { url: "https://consumer.huawei.com/en/phones/p20-pro/videos/" },
    ],
    brand: "huawei",
    inStock: "Y",
    price: 140,
  },
  {
    productId: 8,
    productName: "Sony Xperia XZ3",
    imageSrc: [
      { urlMain: "https://www.sonymobile.com/us/products/xperia-xz3/" },
      { url: "https://www.gsmarena.com/sony_xperia_xz3-9255.php" },
      { url: "https://www.sonymobile.com/us/products/xperia-xz3/gallery/" },
      {
        url: "https://www.sonymobile.com/us/products/xperia-xz3/specifications/",
      },
      { url: "https://www.sonymobile.com/us/products/xperia-xz3/videos/" },
    ],
    brand: "sony",
    inStock: "Y",
    price: 150,
  },
  {
    productId: 9,
    productName: "Asus ZenFone 5Z",
    imageSrc: [
      { url: "https://www.asus.com/Phone/ZenFone-5Z-ZS620KL/" },
      { url: "https://www.gsmarena.com/asus_zenfone_5z-9185.php" },
      { url: "https://www.asus.com/Phone/ZenFone-5Z-ZS620KL/specifications/" },
      { url: "https://www.asus.com/Phone/ZenFone-5Z-ZS620KL/media/" },
      { url: "https://www.asus.com/Phone/ZenFone-5Z-ZS620KL/video/" },
    ],
    brand: "asus",
    inStock: "Y",
    price: 160,
  },
  {
    productId: 10,
    productName: "HTC U12+",
    imageSrc: [
      { urlMain: "https://www.htc.com/us/smartphones/htc-u12-plus/" },
      { url: "https://www.gsmarena.com/htc_u12+-9256.php" },
      { url: "https://www.htc.com/us/smartphones/htc-u12-plus/gallery/" },
      {
        url: "https://www.htc.com/us/smartphones/htc-u12-plus/specifications/",
      },
      { url: "https://www.htc.com/us/smartphones/htc-u12-plus/videos/" },
    ],
    brand: "htc",
    inStock: "Y",
    price: 170,
  },
  {
    productId: 11,
    productName: "Motorola Moto Z3",
    imageSrc: [
      { urlMain: "https://www.motorola.com/us/products/moto-z3" },
      { url: "https://www.gsmarena.com/motorola_moto_z3-9257.php" },
      { url: "https://www.motorola.com/us/products/moto-z3/gallery" },
      { url: "https://www.motorola.com/us/products/moto-z3/specifications" },
      { url: "https://www.motorola.com/us/products/moto-z3/videos" },
    ],
    brand: "motorola",
    inStock: "Y",
    price: 180,
  },
  {
    productId: 12,
    productName: "Oppo Find X",
    imageSrc: [
      { urlMain: "https://www.oppo.com/en/smartphone-find-x/" },
      { url: "https://www.gsmarena.com/oppo_find_x-9258.php" },
      { url: "https://www.oppo.com/en/smartphone-find-x/gallery" },
      { url: "https://www.oppo.com/en/smartphone-find-x/specifications" },
      { url: "https://www.oppo.com/en/smartphone-find-x/videos" },
    ],
    brand: "oppo",
    inStock: "Y",
    price: 190,
  },
  {
    productId: 13,
    productName: "Vivo NEX",
    imageSrc: [
      { urlMain: "https://www.vivo.com/en/products/nex" },
      { url: "https://www.gsmarena.com/vivo_nex-9259.php" },
      { url: "https://www.vivo.com/en/products/nex/gallery" },
      { url: "https://www. vivo.com/en/products/nex/specifications" },
      { url: "https://www.vivo.com/en/products/nex/videos" },
    ],
    brand: "vivo",
    inStock: "Y",
    price: 200,
  },
  {
    productId: 14,
    productName: "Xiaomi Mi Mix 3",
    imageSrc: [
      { urlMain: "https://www.mi.com/global/mi-mix-3/" },
      { url: "https://www.gsmarena.com/xiaomi_mi_mix_3-9352.php" },
      { url: "https://www.mi.com/global/mi-mix-3/gallery/" },
      { url: "https://www.mi.com/global/mi-mix-3/specifications/" },
      { url: "https://www.mi.com/global/mi-mix-3/videos/" },
    ],
    brand: "xiaomi",
    inStock: "Y",
    price: 210,
  },
  {
    productId: 15,
    productName: "LG V40 ThinQ",
    imageSrc: [
      { urlMain: "https://www.lg.com/us/cell-phones/lg-v40-thinq" },
      { url: "https://www.gsmarena.com/lg_v40_thinq-9254.php" },
      { url: "https://www.lg.com/us/cell-phones/lg-v40-thinq/images" },
      { url: "https://www.lg.com/us/cell-phones/lg-v40-thinq/specs" },
      { url: "https://www.lg.com/us/cell-phones/lg-v40-thinq/videos" },
    ],
    brand: "lg",
    inStock: "Y",
    price: 220,
  },
  {
    productId: 16,
    productName: "Samsung Galaxy Note 9",
    imageSrc: [
      { urlMain: "https://www.samsung.com/global/galaxy/galaxy-note9/" },
      { url: "https://www.gsmarena.com/samsung_galaxy_note9-9183.php" },
      { url: "https://www.samsung.com/global/galaxy/galaxy-note9/gallery/" },
      { url: "https://www.samsung.com/global/galaxy/galaxy-note9/specs/" },
      { url: "https://www.samsung.com/global/galaxy/galaxy-note9/videos/" },
    ],
    brand: "samsung",
    inStock: "Y",
    price: 230,
  },
  {
    productId: 17,
    productName: "Google Pixel 3 XL",
    imageSrc: [
      { urlMain: "https://store.google.com/us/product/pixel_3_xl" },
      { url: "https://www.gsmarena.com/google_pixel_3_xl-9253.php" },
      { url: "https://store.google.com/us/product/pixel_3_xl/photos" },
      { url: "https://store.google.com/us/product/pixel_3_xl/specs" },
      { url: "https://store.google.com/us/product/pixel_3_xl/videos" },
    ],
    brand: "google",
    inStock: "Y",
    price: 240,
  },
  {
    productId: 18,
    productName: "OnePlus 6T McLaren Edition",
    imageSrc: [
      { urlMain: "https://www.oneplus.com/6t-mclaren-edition" },
      { url: "https://www.gsmarena.com/oneplus_6t_mclaren_edition-9366.php" },
      { url: "https://www.oneplus.com/6t-mclaren-edition/gallery" },
      { url: "https://www.oneplus.com/6t-mclaren-edition/specs" },
      { url: "https://www.oneplus.com/6t-mclaren-edition/videos" },
    ],
    brand: "oneplus",
    inStock: "Y",
    price: 250,
  },
  {
    productId: 19,
    productName: "Huawei Mate 20 Pro",
    imageSrc: [
      { urlMain: "https://consumer.huawei.com/en/phones/mate20-pro/" },
      { url: "https://www.gsmarena.com/huawei_mate_20_pro-9367.php" },
      { url: "https://consumer.huawei.com/en/phones/mate20-pro/gallery/" },
      { url: "https://consumer.huawei.com/en/phones/mate20-pro/specs/" },
      { url: "https://consumer.huawei.com/en/phones/mate20-pro/videos/" },
    ],
    brand: "huawei",
    inStock: "Y",
    price: 260,
  },
  {
    productId: 20,
    productName: "Sony Xperia XZ3",
    imageSrc: [
      { urlMain: "https://www.sonymobile.com/us/products/phones/xperia-xz3/" },
      { url: "https://www.gsmarena.com/sony_xperia_xz3-9368.php" },
      {
        url: "https://www.sonymobile.com/us/products/phones/xperia-xz3/gallery/",
      },
      {
        url: "https://www.sonymobile.com/us/products/phones/xperia-xz3/specifications/",
      },
      {
        url: "https://www.sonymobile.com/us/products/phones/xperia-xz3/videos/",
      },
    ],
    brand: "sony",
    inStock: "Y",
    price: 270,
  },
  {
    productId: 21,
    productName: "Asus ZenFone 5Z",
    imageSrc: [
      {
        urlMain:
          "https://www.asus.com/Phone/ZenFone-5Z-ZS620KL/specifications/",
      },
      { url: "https://www.gsmarena.com/asus_zenfone_5z-9185.php" },
      { url: "https://www.asus.com/Phone/ZenFone-5Z-ZS620KL/gallery/" },
      { url: "https://www.asus.com/Phone/ZenFone-5Z-ZS620KL/video/" },
      {
        url: "https://www.asus.com/Phone/ZenFone-5Z-ZS620KL/feature-highlights/",
      },
    ],
    brand: "asus",
    inStock: "Y",
    price: 280,
  },
  {
    productId: 22,
    productName: "HTC U12+",
    imageSrc: [
      { urlMain: "https://www.htc.com/us/smartphones/htc-u12-plus/" },
      { url: "https://www.htc.com/us/smartphones/htc-u12-plus/gallery/" },
      { url: "https://www.gsmarena.com/htc_u12-9256.php" },
      {
        url: "https://www.htc.com/us/smartphones/htc-u12-plus/specifications/",
      },
      { url: "https://www.htc.com/us/smartphones/htc-u12-plus/videos/" },
    ],
    brand: "htc",
    inStock: "Y",
    price: 290,
  },
  {
    productId: 24,
    productName: "Motorola Moto Z3 Play",
    imageSrc: [
      { urlMain: "https://www.motorola.com/us/smartphones/moto-z3-play/p" },
      { url: "https://www.gsmarena.com/motorola_moto_z3_play-9260.php" },
      { url: "https://www.motorola.com/us/smartphones/moto-z3-play/gallery" },
      {
        url: "https://www.motorola.com/us/smartphones/moto-z3-play/specifications",
      },
      { url: "https://www.motorola.com/us/smartphones/moto-z3-play/videos" },
    ],
    brand: "motorola",
    inStock: "Y",
    price: 310,
  },
  {
    productId: 25,
    productName: "Samsung Galaxy S9+",
    imageSrc: [
      { urlMain: "https://www.samsung.com/us/smartphones/galaxy-s9-plus/" },
      { url: "https://www.gsmarena.com/samsung_galaxy_s9_plus-8736.php" },
      { url: "https://www.samsung.com/us/smartphones/galaxy-s9-plus/gallery/" },
      {
        url: "https://www.samsung.com/us/smartphones/galaxy-s9-plus/specifications/",
      },
      { url: "https://www.samsung.com/us/smartphones/galaxy-s9-plus/videos/" },
    ],
    brand: "samsung",
    inStock: "Y",
    price: 320,
  },
  {
    productId: 26,
    productName: "Sony Xperia XZ2",
    imageSrc: [
      { urlMain: "https://www.sonymobile.com/us/phones/xperia-xz2/" },
      { url: "https://www.gsmarena.com/sony_xperia_xz2-8837.php" },
      { url: "https://www.sonymobile.com/us/phones/xperia-xz2/gallery/" },
      {
        url: "https://www.sonymobile.com/us/phones/xperia-xz2/specifications/",
      },
      { url: "https://www.sonymobile.com/us/phones/xperia-xz2/videos/" },
    ],
    brand: "sony",
    inStock: "Y",
    price: 330,
  },
  {
    productId: 27,
    productName: "OnePlus 6T",
    imageSrc: [
      { urlMain: "https://www.oneplus.com/6t/" },
      { url: "https://www.gsmarena.com/oneplus_6t-9733.php" },
      { url: "https://www.oneplus.com/6t/gallery/" },
      { url: "https://www.oneplus.com/6t/specs/" },
      { url: "https://www.oneplus.com/6t/videos/" },
    ],
    brand: "oneplus",
    inStock: "Y",
    price: 340,
  },
  {
    productId: 28,
    productName: "Google Pixel 3a",
    imageSrc: [
      { urlMain: "https://store.google.com/product/pixel_3a" },
      { url: "https://www.gsmarena.com/google_pixel_3a-9997.php" },
      { url: "https://store.google.com/product/pixel_3a/gallery" },
      { url: "https://store.google.com/product/pixel_3a/specs" },
      { url: "https://store.google.com/product/pixel_3a/videos" },
    ],
    brand: "google",
    inStock: "Y",
    price: 350,
  },
  {
    productId: 29,
    productName: "Huawei P30 Pro",
    imageSrc: [
      { urlMain: "https://www.huawei.com/us/phones/p30-pro/" },
      { url: "https://www.gsmarena.com/huawei_p30_pro-9731.php" },
      { url: "https://www.huawei.com/us/phones/p30-pro/gallery/" },
      { url: "https://www.huawei.com/us/phones/p30-pro/specs/" },
      { url: "https://www.huawei.com/us/phones/p30-pro/videos/" },
    ],
    brand: "huawei",
    inStock: "Y",
    price: 360,
  },
  {
    productId: 30,
    productName: "Xiaomi Mi 9",
    imageSrc: [
      { urlMain: "https://www.mi.com/global/mi-9/" },
      { url: "https://www.gsmarena.com/xiaomi_mi_9-9732.php" },
      { url: "https://www.mi.com/global/mi-9/gallery/" },
      { url: "https://www.mi.com/global/mi-9/specs/" },
      { url: "https://www.mi.com/global/mi-9/videos/" },
    ],
    brand: "xiaomi",
    inStock: "Y",
    price: 370,
  },
];

const allProductReducer = (state = allProductsState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
const featuredProductReducer = (state = featuredProductsState, action) => {
  switch (action.type) {
    case FEATURED_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const productReducer = combineReducers({
  allProducts: allProductReducer,
  featuredProducts: featuredProductReducer,
});

export default productReducer;
