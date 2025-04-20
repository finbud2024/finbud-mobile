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
                "Bachelor of Quantitative Economics and Computer Science from Macalester College with passion creating a startup that merges Finance, Technology, and Business to benefit Vietnam community",
            image: require("../assets/home-page/team-member/tri-dinh-bui.png"),
            linkedinUrl: "https://www.linkedin.com/in/tribuidinh/",
            githubUrl: "http://github.com/tridinhbui",
        },
        {
            name: "Dung Hoang Le",
            role: "Project Manager",
            description:
                "Full Stack Software Developer with 2 years of experience at F5 Networks and SVB, holding a Bachelor of Science degree in Computer Science from Washington State University",
            image: require("../assets/home-page/team-member/dung-hoang-le.jpg"),
            linkedinUrl: "https://www.linkedin.com/in/lehoangdung2911/",
            githubUrl: "https://github.com/DungLe2911",
        },
        {
            name: "Minh Nguyen",
            role: "Chief Technology Officer (CTO)",
            description:
                "Master Degree in Computer Science and Economics from University of Iowa with an addition of Bachelor os Science in Statistics at Grinell College. Passionate about AI/ML, software engineering, and the intersection of technology and economics",
            image: require("../assets/home-page/team-member/minh-nguyen.jpg"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Phu Tien",
            role: "Data Division Lead",
            description:
                "Honours Bachelor of Business & Marketing from IBD@NEU, focused on applying advanced analysis techniques and strategies in FinTech",
            image: require("../assets/home-page/team-member/phu-tien.png"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Huy Phung",
            role: "Front-end/Back-end Lead",
            description:
                "Computer Scientist and Mathematics from DePauw University. Dedicated full stack developer passionate about new technologies and solving complex problems, driven to innovate and create impactful solutions",
            image: require("../assets/home-page/team-member/huy-phung.jpg"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Linh Ha",
            role: "Fullstack Engineer",
            description:
                "Computer Science student from University of South Florida, specializing in full-stack software development with a focus on scalability. Deeply passionate about software engineering and exploring its potential applications in AI",
            image: require("../assets/home-page/team-member/linh-ha.jpg"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Dung Pham",
            role: "Fullstack Engineer",
            description:
                "Computer Science student at University of South Florida, skilled in fullstack web development and wanting to dive the fields of AI/ML, Fintech and Cloud Computing",
            image: require("../assets/home-page/team-member/dung-pham.png"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Khoi Anh Tran",
            role: "Fullstack Engineer",
            description:
                "Pursuing a Bachelor of Computer Science at the New Jersey Institute of Technology. Enthusiastic about applying my skills to innovative projects and exploring new opportunities in the tech industry",
            image: require("../assets/home-page/team-member/khoi-anh-tran.png"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Minh Binh Tran",
            role: "Front-end Engineer",
            description:
                "Bachelor of Computer Science from VinUniversity with passion leverage mathematics and technology such AI and Machine Learning, to augment medical treatment and mental health therapy",
            image: require("../assets/home-page/team-member/minh-binh-tran.png"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Huy Quang Dao",
            role: "Data Analysis Engineer",
            description:
                "Business Management at Foreign Trade University and participated in an Exchange Program in Statistics and Econometrics at Uppsala University",
            image: require("../assets/home-page/team-member/huy-quang-dao.jpg"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Khoa Dang Nguyen",
            role: "Artificial Intelligence(AI) Engineer",
            description:
                "Applied LLM developer with a Bachelor's degree in Data Science from the University of Rochester. Passionate about information retrieval and recommendation systems",
            image: require("../assets/home-page/team-member/khoa-dang-nguyen.png"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Anh Tuan Nguyen",
            role: "Fullstack Engineer",
            description:
                "Pursuing a major in Computer Science at the University of Science, actively developing features for Finbud, a financial management project. Passionate about AI/ML and software engineering",
            image: require("../assets/home-page/team-member/anh-tuan-nguyen.png"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Krystal Nguyen",
            role: "Data Analytics/Data Scientist",
            description:
                "Bachelor of Data Science student at Deakin University, dedicated to transforming data into impactful solutions. Passionate about addressing real-world challenges through data-driven approaches, always striving to make a meaningful difference",
            image: require("../assets/home-page/team-member/krystal-nguyen.jpg"),
            linkedinUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Bach Hoang Truong",
            role: "Front-end Engineer",
            description:
                "Pursuing Computer Science Degree at VinUniversity",
            image: require("../assets/home-page/team-member/bach-hoang-truong.jpg"),
            linkedinUrl: "#",
            githubUrl: "#",
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
                <View style={styles.section}>
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
                    <Text style={styles.sectionHeader}>What our users say about FinBud</Text>
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
    scrollView: {
        flexGrow: 1
    },
    sectionHeader: {
        fontSize: 22, 
        fontWeight: "600", 
        color: "#111", 
        marginBottom: 12,
        textAlign: "center",
    },
    description: {
        fontSize: 18,
        color: "#555",
        textAlign: "center"
    },
    section: {
        padding: 20
    },
});

export default FinbudAboutUsScreen;



