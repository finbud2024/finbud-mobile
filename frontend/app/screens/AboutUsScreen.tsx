import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TeamMemberCardSwiper from "../components/TeamMemberCardSwiper";
import ReviewCard from "../components/ReviewCard";

const FinbudAboutUsScreen: React.FC = () => {
    const navigation = useNavigation();

    const teamMembers = [
        {
            name: "Tri Dinh Bui",
            role: "Founder & CEO",
            description:
                "Bachelor of Quantitative Economics and Computer Science from Macalester College with passion creating a startup that merges Finance, Technology, and Business to benefit Vietnam community.",
            imageUrl: "../assets/images/MeetOurTeam/tri.61f0f9ab.jpeg",
            linkedinUrl: "https://www.linkedin.com/in/tribuidinh/",
            githubUrl: "http://github.com/tridinhbui",
        },
        {
            name: "Dung Hoang Le",
            role: "Project Manager",
            description:
                "Full Stack Software Developer with 2 years of experience at F5 Networks and SVB, holding a Bachelor of Science degree in Computer Science from Washington State University.",
            imageUrl: "https://your-image-url.com/dung-hoang-le.jpg",
            linkedinUrl: "https://linkedin.com/in/dung-hoang-le",
            githubUrl: "https://github.com/dung-hoang-le",
        },
        {
            name: "Minh Nguyen",
            role: "Chief Technology Officer (CTO)",
            description:
                "Master Degree in Computer Science and Economics from University of Iowa with an addition of Bachelor os Science in Statistics at Grinell College. Passionate about AI/ML, software engineering, and the intersection of technology and economics.",
            imageUrl: "https://your-image-url.com/minh-nguyen.jpg",
            linkedinUrl: "https://linkedin.com/in/minh-nguyen",
            githubUrl: "https://github.com/minh-nguyen",
        },
        {
            name: "Phu Tien",
            role: "Data Division Lead",
            description:
                "Honours Bachelor of Business & Marketing from IBD@NEU, focused on applying advanced analysis techniques and strategies in FinTech.",
            imageUrl: "https://your-image-url.com/phu-tien.jpg",
            linkedinUrl: "https://linkedin.com/in/phu-tien",
            githubUrl: "https://github.com/phu-tien",
        },
        {
            name: "Huy Phung",
            role: "Front-end/Back-end Lead",
            description:
                "Computer Scientist and Mathematics from DePauw University. Dedicated full stack developer passionate about new technologies and solving complex problems, driven to innovate and create impactful solutions.",
            imageUrl: "https://your-image-url.com/huy-phung.jpg",
            linkedinUrl: "https://linkedin.com/in/huy-phung",
            githubUrl: "https://github.com/huy-phung",
        },
        {
            name: "Linh Ha",
            role: "Fullstack Engineer",
            description:
                "Computer Science student from University of South Florida, specializing in full-stack software development with a focus on scalability. Deeply passionate about software engineering and exploring its potential applications in AI.",
            imageUrl: "https://your-image-url.com/linh-ha.jpg",
            linkedinUrl: "https://linkedin.com/in/linh-ha",
            githubUrl: "https://github.com/linh-ha",
        },
        {
            name: "Dung Pham",
            role: "Fullstack Engineer",
            description:
                "Computer Science student at University of South Florida, skilled in fullstack web development and wanting to dive the fields of AI/ML, Fintech and Cloud Computing.",
            imageUrl: "https://your-image-url.com/dung-pham.jpg",
            linkedinUrl: "https://linkedin.com/in/dung-pham",
            githubUrl: "https://github.com/dung-pham",
        },
        {
            name: "Khoi Anh Tran",
            role: "Fullstack Engineer",
            description:
                "Pursuing a Bachelor of Computer Science at the New Jersey Institute of Technology. Enthusiastic about applying my skills to innovative projects and exploring new opportunities in the tech industry.",
            imageUrl: "https://your-image-url.com/khoi-anh-tran.jpg",
            linkedinUrl: "https://linkedin.com/in/khoi-anh-tran",
            githubUrl: "https://github.com/khoi-anh-tran",
        },
        {
            name: "Minh Binh Tran",
            role: "Front-end Engineer",
            description:
                "Bachelor of Computer Science from VinUniversity with passion leverage mathematics and technology such AI and Machine Learning, to augment medical treatment and mental health therapy.",
            imageUrl: "https://your-image-url.com/minh-binh-tran.jpg",
            linkedinUrl: "https://linkedin.com/in/minh-binh-tran",
            githubUrl: "https://github.com/minh-binh-tran",
        },
        {
            name: "Huy Quang Dao",
            role: "Data Analysis Engineer",
            description:
                "Business Management at Foreign Trade University and participated in an Exchange Program in Statistics and Econometrics at Uppsala University.",
            imageUrl: "https://your-image-url.com/huy-quang-dao.jpg",
            linkedinUrl: "https://linkedin.com/in/huy-quang-dao",
            githubUrl: "https://github.com/huy-quang-dao",
        },
        {
            name: "Khoa Dang Nguyen",
            role: "Artificial Intelligence(AI) Engineer",
            description:
                "Applied LLM developer with a Bachelor's degree in Data Science from the University of Rochester. Passionate about information retrieval and recommendation systems.",
            imageUrl: "https://your-image-url.com/khoa-dang-nguyen.jpg",
            linkedinUrl: "https://linkedin.com/in/khoa-dang-nguyen",
            githubUrl: "https://github.com/khoa-dang-nguyen",
        },
        {
            name: "Anh Tuan Nguyen",
            role: "Fullstack Engineer",
            description:
                "Pursuing a major in Computer Science at the University of Science, actively developing features for Finbud, a financial management project. Passionate about AI/ML and software engineering.",
            imageUrl: "https://your-image-url.com/anh-tuan-nguyen.jpg",
            linkedinUrl: "https://linkedin.com/in/anh-tuan-nguyen",
            githubUrl: "https://github.com/anh-tuan-nguyen",
        },
        {
            name: "Krystal Nguyen",
            role: "Data Analytics/Data Scientist",
            description:
                "Bachelor of Data Science student at Deakin University, dedicated to transforming data into impactful solutions. Passionate about addressing real-world challenges through data-driven approaches, always striving to make a meaningful difference.",
            imageUrl: "https://your-image-url.com/krystal-nguyen.jpg",
            linkedinUrl: "https://linkedin.com/in/krystal-nguyen",
            githubUrl: "https://github.com/krystal-nguyen",
        },
        {
            name: "Bach Hoang Truong",
            role: "Front-end Engineer",
            description:
                "Pursuing Computer Science Degree at VinUniversity.",
            imageUrl: "https://your-image-url.com/bach-hoang-truong.jpg",
            linkedinUrl: "https://linkedin.com/in/bach-hoang-truong",
            githubUrl: "https://github.com/bach-hoang-truong",
        },
    ];

    const reviews = [
        {
            name: "John Doe",
            rating: 5,
            testimonial:
                "FinBud has completely transformed my financial management. The AI chatbot provides spot-on advice and helps me stay on top of my investments and expenses.",
        },
        {
            name: "Jane Smith",
            rating: 5,
            testimonial:
                "I love using FinBud! It’s like having a personal financial advisor available 24/7. The insights and tips are incredibly useful and easy to understand.",
        },
        {
            name: "Michael Johnson",
            rating: 5,
            testimonial:
                "The best financial tool I have ever used. FinBud's AI is amazing at predicting market trends and giving personalized advice.",
        },
        {
            name: "Emily Davis",
            rating: 5,
            testimonial:
                "FinBud has helped me save so much money. The budgeting tools and financial insights are top-notch.",
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {/* About Us Section */}
                <View style={styles.introContainer}>
                    <Text style={styles.sectionHeader}>About Us</Text>
                    <Text style={styles.description}>
                        We are a Vietnam-based tech team working on AI integrations.
                        FinBud is our first project with an aim to aid people with their
                        financial decisions, from investing, accruing savings, to smart
                        expenditures. Our team consists of experienced professionals with
                        diverse backgrounds in technology, finance, and business. We are
                        passionate about leveraging technology to make financial management
                        accessible and straightforward for everyone.
                    </Text>

                </View>

                {/* Meet Our Team Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Meet Our Team</Text>
                    <TeamMemberCardSwiper teamMembers={teamMembers}/>
                </View>

                {/* Users Feedback Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>What Our Users Say</Text>
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            name={review.name}
                            rating={review.rating}
                            testimonial={review.testimonial}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    card: {
        marginBottom: 20,
    },
    scrollView: {
        flexGrow: 1
    },
    introContainer: {
        padding: 20,
        alignItems: "center"
    },
    sectionHeader: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#007BFF",
        textAlign: "center"
    },
    description: {
        fontSize: 18,
        color: "#33333",
        marginVertical: 10,
        textAlign: "center"
    },
    section: {
        padding: 20
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    gridBox: {
        width: "30%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        marginBottom: 16,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: 10
    },
    gridTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111",
        marginBottom: 8,
        textAlign: "center"
    },
    gridText: {
        fontSize: 14,
        color: "#555",
        textAlign: "center"
    },
    technologyGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    technologyCard: {
        width: "45%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111",
        marginBottom: 5
    },
    cardContent: {
        fontSize: 14,
        color: "#555"
    },
});

export default FinbudAboutUsScreen;



