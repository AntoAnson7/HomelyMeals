// cuisines.js
const cuisines = [
    {
        id: 1,
        name: 'Kerala Cuisine',
        rating: 4.5,
        deliverable: true,
        description: 'Kerala cuisine is known for its rich, spicy flavors, primarily using coconut, rice, and seafood. Signature dishes include appam, puttu, and karimeen pollichathu, which showcase the unique taste of the region.',
        averageAmount: 250,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/007F00/FFFFFF?text=Kerala+Cuisine' // Replace with actual image URL
    },
    {
        id: 2,
        name: 'Punjabi Cuisine',
        rating: 4.8,
        deliverable: true,
        description: 'Punjabi cuisine is famous for its robust flavors and hearty meals. It features dishes like butter chicken, paneer tikka, and sarson da saag with makki di roti, often enjoyed with lassi or chutney.',
        averageAmount: 300,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/FF8000/FFFFFF?text=Punjabi+Cuisine' // Replace with actual image URL
    },
    {
        id: 3,
        name: 'Bengali Cuisine',
        rating: 4.6,
        deliverable: true,
        description: 'Bengali cuisine is a delightful mix of flavors, known for its fish, rice dishes, and sweets like rasgulla and sandesh. Signature items include shorshe ilish (hilsa fish in mustard sauce) and mishti doi (sweet yogurt).',
        averageAmount: 200,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Bengali+Cuisine' // Replace with actual image URL
    },
    {
        id: 4,
        name: 'South Indian Cuisine',
        rating: 4.7,
        deliverable: true,
        description: 'South Indian cuisine is characterized by its diverse dishes made with rice, lentils, and spices. Famous for idlis, dosas, sambar, and rasam, it offers a variety of vegetarian options that are both delicious and nutritious.',
        averageAmount: 150,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/0066FF/FFFFFF?text=South+Indian+Cuisine' // Replace with actual image URL
    },
    {
        id: 5,
        name: 'Goan Cuisine',
        rating: 4.3,
        deliverable: true,
        description: 'Goan cuisine is a vibrant mix of Portuguese and Indian flavors, known for its seafood, coconut milk, and spices. Dishes like fish curry, vindaloo, and bebinca (a traditional dessert) highlight the culinary heritage of Goa.',
        averageAmount: 350,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Goan+Cuisine' // Replace with actual image URL
    },
    {
        id: 6,
        name: 'Rajasthani Cuisine',
        rating: 4.2,
        deliverable: true,
        description: 'Rajasthani cuisine is known for its rich and spicy flavors, featuring dishes like dal baati churma, gatte ki sabzi, and laal maas. It reflects the culture and traditions of Rajasthan with its vibrant colors and aromas.',
        averageAmount: 280,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/9900CC/FFFFFF?text=Rajasthani+Cuisine' // Replace with actual image URL
    },
    {
        id: 7,
        name: 'Gujarati Cuisine',
        rating: 4.4,
        deliverable: true,
        description: 'Gujarati cuisine is predominantly vegetarian and offers a variety of dishes, including dhokla, khandvi, and thali. It is known for its sweet and savory combinations that delight the palate.',
        averageAmount: 180,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/FFCC00/FFFFFF?text=Gujarati+Cuisine' // Replace with actual image URL
    },
    {
        id: 8,
        name: 'Maharashtrian Cuisine',
        rating: 4.1,
        deliverable: true,
        description: 'Maharashtrian cuisine features a range of dishes from mild to spicy, including puran poli, vada pav, and misal pav. The use of local ingredients and spices makes it unique and flavorful.',
        averageAmount: 220,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/FF33CC/FFFFFF?text=Maharashtrian+Cuisine' // Replace with actual image URL
    },
    {
        id: 9,
        name: 'Kashmiri Cuisine',
        rating: 4.9,
        deliverable: true,
        description: 'Kashmiri cuisine is famous for its rich flavors and use of spices, particularly saffron. Signature dishes include rogan josh, yakhni, and various types of kebabs, showcasing the culinary art of the region.',
        averageAmount: 400,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/00FFFF/FFFFFF?text=Kashmiri+Cuisine' // Replace with actual image URL
    },
    {
        id: 10,
        name: 'Northeastern Cuisine',
        rating: 4.5,
        deliverable: true,
        description: 'Northeastern cuisine is a treasure trove of flavors, using fresh herbs, bamboo shoots, and fish. Dishes like momos, thukpa, and fish chutney offer a unique and delicious experience.',
        averageAmount: 250,
        dietaryType: 'Non-Vegetarian',
        image: 'https://via.placeholder.com/150/006633/FFFFFF?text=Northeastern+Cuisine' // Replace with actual image URL
    },
    // Add more states with similar structure as needed
    {
        id: 11,
        name: 'Uttar Pradesh Cuisine',
        rating: 4.3,
        deliverable: true,
        description: 'Uttar Pradesh cuisine offers a variety of vegetarian and non-vegetarian dishes, including kebabs, biryanis, and sweets like gulab jamun and jalebi.',
        averageAmount: 300,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/FF6699/FFFFFF?text=Uttar+Pradesh+Cuisine' // Replace with actual image URL
    },
    {
        id: 12,
        name: 'Bihar Cuisine',
        rating: 4.0,
        deliverable: true,
        description: 'Bihar cuisine is known for its simple yet delicious dishes, including litti chokha, sattu paratha, and khaja, a traditional sweet.',
        averageAmount: 180,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/6633FF/FFFFFF?text=Bihar+Cuisine' // Replace with actual image URL
    },
    {
        id: 13,
        name: 'Himachal Pradesh Cuisine',
        rating: 4.1,
        deliverable: true,
        description: 'Himachal Pradesh cuisine is characterized by its use of locally sourced ingredients and flavors, including siddu, chana madra, and apple pie.',
        averageAmount: 250,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/FF9900/FFFFFF?text=Himachal+Pradesh+Cuisine' // Replace with actual image URL
    },
    {
        id: 14,
        name: 'Madhya Pradesh Cuisine',
        rating: 4.2,
        deliverable: true,
        description: 'Madhya Pradesh cuisine features a mix of North and South Indian dishes, with specialties like poha, jalebi, and bhutte ka kis, showcasing the region’s diverse culinary heritage.',
        averageAmount: 220,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/9900FF/FFFFFF?text=Madhya+Pradesh+Cuisine' // Replace with actual image URL
    },
    {
        id: 15,
        name: 'Odisha Cuisine',
        rating: 4.4,
        deliverable: true,
        description: 'Odisha cuisine is known for its unique flavors, including dalma, pakhala, and rasgulla, emphasizing the use of rice, lentils, and vegetables.',
        averageAmount: 200,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/00FFCC/FFFFFF?text=Odisha+Cuisine' // Replace with actual image URL
    },

    {
        id: 16,
        name: 'Telangana Cuisine',
        rating: 4.1,
        deliverable: true,
        description: 'Telangana cuisine is characterized by its spicy and flavorful dishes, featuring rice, lentils, and a variety of meat options. Signature dishes include Hyderabadi biryani, sarva pindi, and gongura chutney.',
        averageAmount: 270,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/FF33CC/FFFFFF?text=Telangana+Cuisine' // Replace with actual image URL
    },
    {
        id: 17,
        name: 'Tamil Nadu Cuisine',
        rating: 4.3,
        deliverable: true,
        description: 'Tamil Nadu cuisine is known for its rice-based dishes, sambar, and variety of dosas. Famous for idli, dosa, and filter coffee, it emphasizes the use of fresh spices and ingredients.',
        averageAmount: 150,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/00FF99/FFFFFF?text=Tamil+Nadu+Cuisine' // Replace with actual image URL
    },
    {
        id: 18,
        name: 'Assamese Cuisine',
        rating: 4.0,
        deliverable: true,
        description: 'Assamese cuisine is characterized by its simplicity and use of fresh ingredients. Dishes like Assam laksa, masor tenga, and various fish preparations showcase the flavors of the region.',
        averageAmount: 200,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/99CC00/FFFFFF?text=Assamese+Cuisine' // Replace with actual image URL
    },
    {
        id: 19,
        name: 'Manipuri Cuisine',
        rating: 4.2,
        deliverable: true,
        description: 'Manipuri cuisine is known for its unique flavors and use of herbs, with dishes like eromba, singju, and kangshoi being popular. The emphasis is on fresh and organic ingredients.',
        averageAmount: 220,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/CC9900/FFFFFF?text=Manipuri+Cuisine' // Replace with actual image URL
    },
    {
        id: 20,
        name: 'Sikkimese Cuisine',
        rating: 4.3,
        deliverable: true,
        description: 'Sikkimese cuisine is characterized by its use of organic ingredients and simplicity. Dishes like momo, thukpa, and gundruk reflect the culinary diversity of the region.',
        averageAmount: 230,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/FFCC66/FFFFFF?text=Sikkimese+Cuisine' // Replace with actual image URL
    },
    {
        id: 21,
        name: 'Nagaland Cuisine',
        rating: 4.1,
        deliverable: true,
        description: 'Nagaland cuisine is known for its spicy flavors and variety of meat dishes. Popular items include smoked pork, bamboo shoot dishes, and various chutneys made from local ingredients.',
        averageAmount: 300,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/0066CC/FFFFFF?text=Nagaland+Cuisine' // Replace with actual image URL
    },
    {
        id: 22,
        name: 'Karnataka Cuisine',
        rating: 4.4,
        deliverable: true,
        description: 'Karnataka cuisine offers a variety of flavors with dishes like bisibelebath, ragi mudde, and mysore pak. It combines both vegetarian and non-vegetarian options, emphasizing rice and lentils.',
        averageAmount: 250,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/00CC66/FFFFFF?text=Karnataka+Cuisine' // Replace with actual image URL
    },
    {
        id: 23,
        name: 'Andhra Cuisine',
        rating: 4.2,
        deliverable: true,
        description: 'Andhra cuisine is known for its spicy and flavorful dishes, with rice as a staple. Popular dishes include gongura pachadi, puliogare, and various spicy curries and pickles.',
        averageAmount: 300,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Andhra+Cuisine' // Replace with actual image URL
    },
    {
        id: 24,
        name: 'West Bengali Cuisine',
        rating: 4.6,
        deliverable: true,
        description: 'West Bengali cuisine offers a mix of vegetarian and non-vegetarian dishes with a focus on rice and fish. Popular items include shorshe ilish, chingri maacher malai curry, and various sweets like sandesh.',
        averageAmount: 220,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/FF6600/FFFFFF?text=West+Bengali+Cuisine' // Replace with actual image URL
    },
    {
        id: 25,
        name: 'Haryanvi Cuisine',
        rating: 4.0,
        deliverable: true,
        description: 'Haryanvi cuisine is known for its hearty and wholesome meals, featuring dishes like bajra khichdi, chura, and various dairy products. It emphasizes the use of fresh ingredients and local flavors.',
        averageAmount: 180,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/663399/FFFFFF?text=Haryanvi+Cuisine' // Replace with actual image URL
    },
    {
        id: 26,
        name: 'Chhattisgarhi Cuisine',
        rating: 4.1,
        deliverable: true,
        description: 'Chhattisgarhi cuisine features a variety of rice and lentil-based dishes, including chana sidhai, farcha, and various local specialties that reflect the culture and traditions of the region.',
        averageAmount: 200,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/FF3300/FFFFFF?text=Chhattisgarhi+Cuisine' // Replace with actual image URL
    },
    {
        id: 27,
        name: 'Jharkhandi Cuisine',
        rating: 4.3,
        deliverable: true,
        description: 'Jharkhandi cuisine is characterized by its use of local ingredients and simple preparations, including dishes like thekua, pitha, and various rice preparations that reflect the culinary heritage of the state.',
        averageAmount: 150,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/FF3300/FFFFFF?text=Jharkhandi+Cuisine' // Replace with actual image URL
    },
    {
        id: 28,
        name: 'Uttarakhandi Cuisine',
        rating: 4.2,
        deliverable: true,
        description: 'Uttarakhandi cuisine offers a mix of flavors with dishes like aloo ke gutke, kafuli, and various lentil preparations that reflect the agricultural practices of the region.',
        averageAmount: 200,
        dietaryType: 'Veg',
        image: 'https://via.placeholder.com/150/336699/FFFFFF?text=Uttarakhandi+Cuisine' // Replace with actual image URL
    },
    {
        id: 29,
        name: 'Mizoram Cuisine',
        rating: 4.5,
        deliverable: true,
        description: 'Mizoram cuisine features a range of dishes made with fresh herbs and spices, with dishes like bamboo shoot curry and various rice preparations that highlight the culinary diversity of the region.',
        averageAmount: 250,
        dietaryType: 'Non-Veg',
        image: 'https://via.placeholder.com/150/663300/FFFFFF?text=Mizoram+Cuisine' // Replace with actual image URL
    },
];

export default cuisines;
