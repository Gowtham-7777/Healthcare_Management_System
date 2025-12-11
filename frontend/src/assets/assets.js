import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import ub from './ub.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg' 
import bb from './bb.svg'
import aa from './aa.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import doc17 from './doc17.png'
import doc18 from './doc18.png'
import doc19 from './doc19.png'
import doc20 from './doc20.png'
import doc21 from './doc21.png'
import doc22 from './doc22.png'
import doc23 from './doc23.png'
import doc24 from './doc24.png'
import doc25 from './doc25.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    ub,
    group_profiles,
    logo,
    bb,
    aa,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Vishnu',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Vishnu is a compassionate gynecologist dedicated to supporting womens health and well-being at every stage of life. With expertise in diagnosing and managing a range of gynecological conditions,he adopts a patient-centered approach, ensuring that each individual receives personalized care tailored to their unique needs. Dr. Vishnu fosters a supportive and open environment, encouraging women to engage actively in their health decisions. He commitment to preventive care and education empowers he patients to maintain optimal reproductive health and overall wellness, enhancing their quality of life.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Yumeko',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Yumeko is a dedicated gynecologist with a passion for women’s health and well-being. She specializes in preventive care, reproductive health, and comprehensive gynecological services. Dr. Yumeko is committed to providing compassionate, patient-centered care, focusing on early detection, personalized treatment plans, and empowering her patients to make informed health choices.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Yuvan',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Yuvan is dedicated to providing exceptional dermatological care, emphasizing skin health, preventive treatments, and precise, early diagnosis. As a dermatologist, he offers patient-centered care, delivering compassionate support for both common and complex skin conditions. With a focus on holistic wellness and a proactive approach to skin health, Dr. Yuvan empowers his patients to make informed choices, fostering long-term skin vitality and confidence.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Aarav',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Aarav is a dedicated pediatrician committed to ensuring the health and well-being of children at every stage of development. With a focus on compassionate care, he specializes in diagnosing and treating a wide range of pediatric conditions, always prioritizing the individual needs of his young patients. Dr. Aarav fosters a welcoming environment where families feel supported and informed, empowering parents to make educated decisions about their child’s health. Through his commitment to preventive care and education, he helps cultivate a foundation of lifelong wellness for children and their families.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Preetha',
        image: doc5,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Preetha is a dedicated gastroenterologist focused on optimizing digestive health for her patients. With extensive expertise in diagnosing and managing a variety of gastrointestinal disorders, she emphasizes a patient-centered approach to care. Dr. Preetha works closely with each individual, tailoring treatment plans to address their specific needs while fostering an environment of trust and open communication. Committed to preventive care and education, she empowers her patients to make informed decisions about their digestive health, promoting long-term wellness and a better quality of life.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Dhruv',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Dhruv is a dedicated neurologist focused on improving the neurological health of his patients through expert care and support. With a specialization in diagnosing and managing various neurological disorders, he provides tailored treatment plans that address each patient’s unique needs. Dr. Dhruv emphasizes open communication, ensuring that patients and their families are informed and engaged in their care journey, while promoting proactive approaches to brain health and overall well-being.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Joseph Vijay',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Joseph Vijay is a committed general physician dedicated to promoting the overall health and well-being of his patients. With expertise in diagnosing and managing a wide range of medical conditions, he takes a holistic approach to care, ensuring each patient receives personalized treatment that fits their unique health needs. Dr. Joseph Vijay values strong doctor-patient relationships, fostering open communication to empower patients in their health decisions. His focus on preventive care and education helps patients maintain long-term wellness and resilience in their everyday lives.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Nobita',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Nobita has a strong commitment to delivering comprehensive medical care, focusing on preventive health, early and accurate diagnosis, and personalized treatment strategies. As a general physician, he is dedicated to providing patient-centered care, ensuring each individual receives compassionate support for both acute and chronic conditions. With a focus on holistic wellness and a proactive approach to health management, Dr. Nobita empowers his patients to make informed health choices, fostering long-term health and resilience.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Diya',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Diya has a strong commitment to providing exceptional dermatological care, focusing on skin health, preventive care, and effective treatment strategies. She is dedicated to early diagnosis and personalized treatment for a wide range of skin conditions, ensuring her patients receive comprehensive and compassionate care.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rudra',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Rudra is a dedicated pediatrician passionate about nurturing the health and development of children from infancy to adolescence. With expertise in diagnosing and treating a wide array of pediatric conditions, he takes a holistic approach to care, ensuring that each child receives personalized treatment based on their unique needs. Dr. Rudra creates a warm and welcoming environment where families feel supported and informed, encouraging open communication to empower parents in their child’s health journey. His commitment to preventive care and education helps establish a strong foundation for lifelong health and well-being in his young patients.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Divaisha',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Divaisha is a dedicated neurologist focused on enhancing her patients’ neurological health with expert care and compassion. Specializing in diagnosing and managing neurological conditions, she takes a personalized approach to treatment, addressing each patient’s unique needs with precision and empathy. Dr. Divaisha’s commitment to proactive care supports both effective condition management and long-term brain health, empowering patients to make informed, health-focused decisions.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Suriya',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Suriya is a dedicated neurologist focused on enhancing the neurological health and well-being of her patients. With a wealth of expertise in diagnosing and managing a variety of neurological disorders, she emphasizes a personalized approach to treatment, ensuring that each patient receives care tailored to their specific needs. Dr. Suriya fosters a compassionate environment where patients and their families feel supported and informed, promoting open communication throughout the care process. Her commitment to preventive strategies and education empowers patients to take an active role in their neurological health, paving the way for long-term wellness and improved quality of life.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Shizuka',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Shizuka has a strong commitment to delivering comprehensive medical care, with a focus on preventive health, accurate diagnosis, and personalized treatment plans. She is dedicated to providing patient-centered care, ensuring that each individual receives effective solutions for both acute and chronic health concerns.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Jerry',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Jerry is a compassionate gynecologist dedicated to empowering womens health and wellness at every stage of life. With extensive expertise in diagnosing and managing a range of gynecological conditions, he provides personalized care tailored to each patient’s unique needs. Dr. Jerry creates a supportive and comfortable environment, encouraging open dialogue to help women actively engage in their health decisions. His commitment to preventive care and education fosters a foundation of optimal reproductive health, enhancing the overall quality of life for his patients.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Anvitha',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Anvitha is a passionate dermatologist dedicated to promoting optimal skin health for her patients. With expertise in diagnosing and treating a wide range of skin conditions, she emphasizes a holistic approach to care, ensuring that each patient receives tailored treatment based on their unique concerns. Dr. Anvitha values open communication, empowering her patients to understand their conditions and make informed choices about their skincare. Through her commitment to preventive care and education, she helps foster lasting skin health and confidence in her patients.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Karthika',
        image: doc16,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Karthika is a dedicated gastroenterologist committed to advancing the digestive health and overall well-being of her patients. With expertise in diagnosing and managing a wide range of gastrointestinal conditions, she provides personalized, patient-centered care tailored to each individual’s needs. Dr. Karthika creates a supportive and understanding environment where patients feel comfortable discussing their health concerns. Her commitment to preventive care and patient education empowers individuals to make informed choices, promoting long-term digestive wellness and an enhanced quality of life.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Simba',
        image: doc17,
        speciality: 'Cardiologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Simba is a dedicated cardiologist focused on enhancing the heart health and overall well-being of his patients. With extensive expertise in diagnosing and managing a variety of cardiovascular conditions, he provides personalized, patient-centered care tailored to each individual’s needs. Dr. Simba fosters a supportive and compassionate environment, encouraging open communication to help patients feel comfortable discussing their health concerns. His commitment to preventive care and patient education empowers individuals to make informed decisions, promoting long-term heart health and improved quality of life.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Jane',
        image: doc18,
        speciality: 'Oncologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Jane is a compassionate oncologist dedicated to supporting her patients’ cancer journeys with expert care and empathy. With a deep expertise in diagnosing and treating various types of cancers, she provides personalized, patient-centered care tailored to each individual’s unique needs. Dr. Jane creates a nurturing and understanding environment, encouraging open communication to help patients and their families feel supported and informed. Her commitment to preventive care, early detection, and patient education empowers individuals to make informed choices, promoting resilience and a higher quality of life through every stage of care.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Elsa',
        image: doc19,
        speciality: 'Otolaryngologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Elsa is a skilled otolaryngologist dedicated to enhancing her patients ear, nose, and throat health with precision and care. With extensive expertise in diagnosing and treating a variety of ENT conditions, she offers personalized, patient-centered care tailored to each individual’s needs. Dr. Elsa fosters a welcoming and supportive environment, encouraging open dialogue to ensure that patients and their families feel informed and at ease. Her focus on preventive care, early intervention, and patient education empowers individuals to make confident choices, supporting long-term ENT health and overall well-being.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. Peter Parker',
        image: doc20,
        speciality: 'Oncologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Peter Parker is a compassionate oncologist devoted to guiding his patients through their cancer journeys with expert care and empathy. Specializing in the diagnosis and treatment of various types of cancer, he provides personalized, patient-centered care tailored to each individual’s unique needs. Dr. Parker creates a comforting and supportive environment, fostering open communication to ensure that patients and their families feel informed and reassured. His dedication to preventive care, early detection, and patient education empowers individuals to make informed decisions, promoting resilience and a higher quality of life at every stage of care.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc21',
        name: 'Dr. Yelena',
        image: doc21,
        speciality: 'Cardiologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Yelena is a dedicated cardiologist focused on advancing the heart health and overall well-being of her patients. With expertise in diagnosing and treating a wide range of cardiovascular conditions, she offers personalized, patient-centered care tailored to each individual’s needs. Dr. Yelena creates a warm and supportive environment, encouraging open communication to ensure patients and their families feel informed and confident. Her commitment to preventive care, early intervention, and patient education empowers individuals to make well-informed decisions, promoting long-term heart health and a higher quality of life.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc22',
        name: 'Dr. Arthur',
        image: doc22,
        speciality: 'Otolaryngologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Arthur is a skilled otolaryngologist dedicated to enhancing his patients ear, nose, and throat health with expert care and compassion. Specializing in diagnosing and managing a variety of ENT conditions, he provides personalized, patient-centered care tailored to each individual’s unique needs. Dr. Arthur fosters a welcoming and supportive environment, encouraging open communication to ensure patients and their families feel informed and at ease. His commitment to preventive care, early intervention, and patient education empowers individuals to make confident choices, promoting lasting ENT health and overall well-being.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc23',
        name: 'Dr. Laya',
        image: doc23,
        speciality: 'Radiologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Laya is a dedicated radiologist focused on advancing her patients health through accurate imaging and diagnostic expertise. Specializing in interpreting a wide range of medical images, she provides precise, patient-centered assessments that aid in effective treatment planning. Dr. Laya fosters a supportive and reassuring environment, ensuring that patients feel comfortable and informed about their diagnostic procedures. Her commitment to early detection, preventive care, and patient education empowers individuals to make well-informed choices, promoting improved health outcomes and overall well-being.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc24',
        name: 'Dr. Rufus',
        image: doc24,
        speciality: 'Radiologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rufus is a committed radiologist focused on enhancing patient health through precise imaging and diagnostic insights. With expertise in interpreting a diverse array of medical images, he delivers accurate, patient-centered assessments that support effective treatment planning. Dr. Rufus fosters a welcoming and reassuring environment, ensuring patients feel comfortable and informed throughout their diagnostic experience. His dedication to early detection, preventive care, and patient education empowers individuals to make informed choices, promoting better health outcomes and overall well-being.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc25',
        name: 'Dr. Rashmika',
        image: doc25,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jerry is a compassionate gynecologist dedicated to empowering womens health and wellness at every stage of life. With extensive expertise in diagnosing and managing a range of gynecological conditions, he provides personalized care tailored to each patient’s unique needs. Dr. Jerry creates a supportive and comfortable environment, encouraging open dialogue to help women actively engage in their health decisions. His commitment to preventive care and education fosters a foundation of optimal reproductive health, enhancing the overall quality of life for his patients.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    
]