import os
import django

# Set up Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "homely.settings")
django.setup()

from api.models import Cuisine

food_options = [
    {
        "id": 1,
        "name": "Kerala Cuisine",
        "rating": 4.5,
        "deliverable": True,
        "description": "Kerala cuisine is known for its rich and spicy flavors, often incorporating coconut and seafood. Signature dishes include Kerala fish curry, appam, and puttu.",
        "averageAmount": 250,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Chicken_Biryani_%28Thalassery_Biryani%29.jpg"
    },
    {
        "id": 2,
        "name": "Punjabi Cuisine",
        "rating": 4.7,
        "deliverable": True,
        "description": "Punjabi cuisine is famous for its hearty dishes and vibrant flavors, including butter chicken, dal makhani, and various bread varieties.",
        "averageAmount": 300,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Amritsari_Chole_Bhature.jpg"
    },
    {
        "id": 3,
        "name": "Rajasthani Cuisine",
        "rating": 4.2,
        "deliverable": True,
        "description": "Rajasthani cuisine features rich, spicy dishes often made with gram flour, such as gatte ki sabzi and dal baati churma.",
        "averageAmount": 280,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gatte_ki_subzi.jpg"
    },
    {
        "id": 4,
        "name": "Bengali Cuisine",
        "rating": 4.6,
        "deliverable": True,
        "description": "Bengali cuisine is known for its subtle flavors and use of fish and rice. Signature dishes include macher jhol and mishti doi.",
        "averageAmount": 220,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Bengali_Fish_Curry.jpg"
    },
    {
        "id": 5,
        "name": "Gujarati Cuisine",
        "rating": 4.3,
        "deliverable": True,
        "description": "Gujarati cuisine is predominantly vegetarian, featuring dishes like dhokla, thepla, and undhiyu, characterized by a balance of sweet and savory flavors.",
        "averageAmount": 200,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/77/Thali.jpg"
    },
    {
        "id": 6,
        "name": "Maharashtrian Cuisine",
        "rating": 4.4,
        "deliverable": True,
        "description": "Maharashtrian cuisine is known for its diverse range of vegetarian and non-vegetarian dishes, including puran poli and vada pav.",
        "averageAmount": 250,
        "dietaryType": "Veg & Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Puranpoli.jpg"
    },
    {
        "id": 7,
        "name": "South Indian Cuisine",
        "rating": 4.5,
        "deliverable": True,
        "description": "South Indian cuisine is famous for its rice-based dishes and use of lentils, with popular items like dosa, idli, and sambar.",
        "averageAmount": 180,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/06/South_Indian_Breakfast.jpg"
    },
    {
        "id": 8,
        "name": "Goan Cuisine",
        "rating": 4.6,
        "deliverable": True,
        "description": "Goan cuisine is known for its seafood and coconut milk-based dishes, including fish curry and vindaloo.",
        "averageAmount": 300,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Goan_Fish_Curry.jpg"
    },
    {
        "id": 9,
        "name": "Kashmiri Cuisine",
        "rating": 4.5,
        "deliverable": True,
        "description": "Kashmiri cuisine is characterized by its use of saffron and dried fruits, with dishes like rogan josh and yakhni.",
        "averageAmount": 350,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wazwan_Kashmiri_Food.jpg"
    },
    {
        "id": 10,
        "name": "Northeastern Cuisine",
        "rating": 4.2,
        "deliverable": True,
        "description": "Northeastern cuisine features unique flavors and ingredients, with dishes like bamboo shoot curry and fish chutney.",
        "averageAmount": 280,
        "dietaryType": "Veg & Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/Northeast_indian_food.jpg"
    },
    {
        "id": 11,
        "name": "Himachali Cuisine",
        "rating": 4.1,
        "deliverable": True,
        "description": "Himachali cuisine is known for its use of locally grown vegetables and spices, with dishes like chana madra and siddu.",
        "averageAmount": 230,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Siddu.JPG"
    },
    {
        "id": 12,
        "name": "Bihari Cuisine",
        "rating": 4.3,
        "deliverable": True,
        "description": "Bihari cuisine includes traditional dishes such as litti chokha and sattu paratha, known for their rustic flavors.",
        "averageAmount": 200,
        "dietaryType": "Veg & Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bihari_Litti_Chokha.jpg"
    },
    {
        "id": 13,
        "name": "Uttar Pradesh Cuisine",
        "rating": 4.4,
        "deliverable": True,
        "description": "Uttar Pradesh cuisine is famous for its street food, including chaat, kebabs, and biryanis.",
        "averageAmount": 270,
        "dietaryType": "Veg & Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Chaat.jpg"
    },
    {
        "id": 14,
        "name": "Madhya Pradesh Cuisine",
        "rating": 4.2,
        "deliverable": True,
        "description": "Madhya Pradesh cuisine features a variety of dishes, including poha, jalebi, and bhutte ka kees.",
        "averageAmount": 220,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/80/Madhya_Pradesh_Cuisine.jpg"
    },
    {
        "id": 15,
        "name": "Odisha Cuisine",
        "rating": 4.3,
        "deliverable": True,
        "description": "Odisha cuisine is known for its simplicity and rich flavors, with dishes like dalma and pakhala.",
        "averageAmount": 210,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/76/Odia_thali.jpg"
    },
    {
        "id": 16,
        "name": "Telangana Cuisine",
        "rating": 4.4,
        "deliverable": True,
        "description": "Telangana cuisine features spicy dishes and a variety of rice preparations, including hyderabadi biryani.",
        "averageAmount": 300,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Hyderabadi_Biryani.jpg"
    },
    {
        "id": 17,
        "name": "Tamil Nadu Cuisine",
        "rating": 4.5,
        "deliverable": True,
        "description": "Tamil Nadu cuisine is renowned for its diverse range of flavors, including idli, dosa, and filter coffee.",
        "averageAmount": 180,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Idli_Sambar.jpg"
    },
    {
        "id": 18,
        "name": "Assamese Cuisine",
        "rating": 4.2,
        "deliverable": True,
        "description": "Assamese cuisine features rice and fish as staples, with dishes like masor tenga and pitha.",
        "averageAmount": 250,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Assamese_Food.jpg"
    },
    {
        "id": 19,
        "name": "Manipuri Cuisine",
        "rating": 4.3,
        "deliverable": True,
        "description": "Manipuri cuisine is known for its unique flavors and use of local herbs, featuring dishes like eromba and singju.",
        "averageAmount": 220,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Manipuri_Food.jpg"
    },
    {
        "id": 20,
        "name": "Sikkimese Cuisine",
        "rating": 4.4,
        "deliverable": True,
        "description": "Sikkimese cuisine is characterized by its use of fresh vegetables and herbs, with dishes like gya kho and phagshapa.",
        "averageAmount": 240,
        "dietaryType": "Veg & Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sikkim_Cuisine.jpg"
    },
    {
        "id": 21,
        "name": "Goan Cuisine",
        "rating": 4.5,
        "deliverable": True,
        "description": "Goan cuisine is known for its seafood and coconut milk-based dishes, including fish curry and vindaloo.",
        "averageAmount": 300,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Goan_Fish_Curry.jpg"
    },
    {
        "id": 22,
        "name": "Kashmiri Cuisine",
        "rating": 4.5,
        "deliverable": True,
        "description": "Kashmiri cuisine is characterized by its use of saffron and dried fruits, with dishes like rogan josh and yakhni.",
        "averageAmount": 350,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wazwan_Kashmiri_Food.jpg"
    },
    {
        "id": 23,
        "name": "Northeastern Cuisine",
        "rating": 4.2,
        "deliverable": True,
        "description": "Northeastern cuisine features unique flavors and ingredients, with dishes like bamboo shoot curry and fish chutney.",
        "averageAmount": 280,
        "dietaryType": "Veg & Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/Northeast_indian_food.jpg"
    },
    {
        "id": 24,
        "name": "Himachali Cuisine",
        "rating": 4.1,
        "deliverable": True,
        "description": "Himachali cuisine is known for its use of locally grown vegetables and spices, with dishes like chana madra and siddu.",
        "averageAmount": 230,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Siddu.JPG"
    },
    {
        "id": 25,
        "name": "Bihari Cuisine",
        "rating": 4.3,
        "deliverable": True,
        "description": "Bihari cuisine includes traditional dishes such as litti chokha and sattu paratha, known for their rustic flavors.",
        "averageAmount": 200,
        "dietaryType": "Veg & Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bihari_Litti_Chokha.jpg"
    },
    {
        "id": 26,
        "name": "Uttar Pradesh Cuisine",
        "rating": 4.4,
        "deliverable": True,
        "description": "Uttar Pradesh cuisine is famous for its street food, including chaat, kebabs, and biryanis.",
        "averageAmount": 270,
        "dietaryType": "Veg & Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Chaat.jpg"
    },
    {
        "id": 27,
        "name": "Madhya Pradesh Cuisine",
        "rating": 4.2,
        "deliverable": True,
        "description": "Madhya Pradesh cuisine features a variety of dishes, including poha, jalebi, and bhutte ka kees.",
        "averageAmount": 220,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/80/Madhya_Pradesh_Cuisine.jpg"
    },
    {
        "id": 28,
        "name": "Odisha Cuisine",
        "rating": 4.3,
        "deliverable": True,
        "description": "Odisha cuisine is known for its simplicity and rich flavors, with dishes like dalma and pakhala.",
        "averageAmount": 210,
        "dietaryType": "Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/76/Odia_thali.jpg"
    },
    {
        "id": 29,
        "name": "Telangana Cuisine",
        "rating": 4.4,
        "deliverable": True,
        "description": "Telangana cuisine features spicy dishes and a variety of rice preparations, including hyderabadi biryani.",
        "averageAmount": 300,
        "dietaryType": "Non-Veg",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Hyderabadi_Biryani.jpg"
    }
]



def populate_cuisine():
    for food in food_options:
        cuisine, created = Cuisine.objects.get_or_create(
            name=food['name'],
            defaults={
                'rating': food['rating'],
                'deliverable': food['deliverable'],
                'description': food['description'],
                'average_amount': food['averageAmount'],
                'dietary_type': food['dietaryType'],
                'image': food['image']
            }
        )
        if created:
            print(f"Added {cuisine.name} to the database.")
        else:
            print(f"{cuisine.name} already exists in the database.")

if __name__ == '__main__':
    populate_cuisine()
