import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ReviewCardProps = {
    name: string;
    rating: number;
    testimonial: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ 
    name, 
    rating, 
    testimonial 
}) => {
    // Generate star icons
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Text key={i} style={styles.star}>
                    {i < rating ? "★" : "☆"}
                </Text>
            );
        }
        return stars;
    };

    return (
        <View style={[styles.card]}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.ratingContainer}>{renderStars(rating)}</View>
            <Text style={styles.testimonial}>{testimonial}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 16,
        marginVertical: 8,
    },
    name: {
        fontSize: 16,  
        fontWeight: "bold",
        color: "#111", 
        marginBottom: 8,
        fontFamily: "Noto sans",
    },
    ratingContainer: {
        flexDirection: "row",
        marginBottom: 8,
    },
    star: {
        fontSize: 20,
        color: "#FFD700",
        marginRight: 2,
    },
    testimonial: {
        fontSize: 14,
        color: "#33333",
        lineHeight: 20,
        fontFamily: "Noto sans",
    },
});

export default ReviewCard;