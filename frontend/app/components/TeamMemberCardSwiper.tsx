import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { Linking } from 'react-native';

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: any;
  linkedinUrl: string;
  githubUrl: string;
};

type TeamMemberCardSwiperProps = {
  teamMembers: TeamMember[];
};

const TeamMemberCardSwiper: React.FC<TeamMemberCardSwiperProps> = ({ teamMembers }) => {
  return (
    <View style={[styles.card]}>
      <Swiper
        style={styles.swiper}
        showsButtons={true}
        showsPagination={true}
        loop={true}
        nextButton={<Text style={styles.arrow}>{'>'}</Text>}
        prevButton={<Text style={styles.arrow}>{'<'}</Text>}
        activeDotColor="#777777"
        dot={<View style={styles.customDot} />}
      >
        {teamMembers.map((member, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={member.image}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.role}>{member.role}</Text>
            <Text style={styles.description}>{member.description}</Text>
            <View style={styles.socialLinks}>
              <TouchableOpacity onPress={() => Linking.openURL(member.linkedinUrl)}>
                <Text style={styles.socialLink}>LinkedIn</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(member.githubUrl)}>
                <Text style={styles.socialLink}>GitHub</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  swiper: {
    height: 420,
  },
  slide: {
    alignItems: "center",
  },
  image: {
    marginTop: 20,
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    color: "#333333",
    marginBottom: 8,
    fontFamily: "Noto sans",
    textAlign: "center",
  },
  role: {
    fontSize: 16,
    color: "#777777",
    fontFamily: "Noto sans",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontWeight: 700,
    color: "#555555",
    textAlign: "left",
    marginBottom: 12,
    paddingHorizontal: 40,
    fontFamily: "Noto sans",
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialLink: {
    fontSize: 14,
    color: "#007BFF",
    marginHorizontal: 10,
    textDecorationLine: "underline",
    fontFamily: "Noto sans",
  },
  arrow: {
    fontSize: 30,
    color: "333333",
  },
  customDot: {
    backgroundColor: "transparent", 
    borderWidth: 1, 
    borderColor: "#777777",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  }
});

export default TeamMemberCardSwiper;