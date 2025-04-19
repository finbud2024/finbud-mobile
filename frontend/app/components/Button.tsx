import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: any;
};

const Button = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  icon,
  style,
}: ButtonProps) => {
  const getButtonStyle = () => {
    if (disabled) return styles.disabled;

    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "outline":
        return styles.outline;
      default:
        return styles.primary;
    }
  };

  const getTextStyle = () => {
    if (disabled) return styles.textDisabled;
    if (variant === "outline") return styles.textOutline;
    return styles.textWhite;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.button, getButtonStyle(), style]}
    >
      {loading ? (
        <ActivityIndicator color={variant === "outline" ? "#fff" : "#fff"} />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text
            style={[
              styles.text,
              getTextStyle(),
              icon ? styles.textWithIcon : null,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#FF595A",
  },
  secondary: {
    backgroundColor: "#8C6BF7",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },
  disabled: {
    backgroundColor: "#1E1E1E",
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
  textWhite: {
    color: "#ffffff",
  },
  textOutline: {
    color: "#E5E7EB",
  },
  textDisabled: {
    color: "#9CA3AF",
  },
  textWithIcon: {
    marginLeft: 8,
  },
});

export default Button;
