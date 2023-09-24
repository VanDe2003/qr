import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

class HomeScreen extends Component {
    handleHomeButton = () => {
        // Xử lý sự kiện khi nhấn nút "Trang Chủ"
        // Ví dụ: chuyển hướng đến trang chủ
        this.props.navigation.navigate("Home");
    };

    handleProfileButton = () => {
        // Xử lý sự kiện khi nhấn nút "Xem Thông Tin Cá Nhân"
        // Ví dụ: chuyển hướng đến trang thông tin cá nhân
        this.props.navigation.navigate("Profile");
    };

    handleLogoutButton = () => {
        // Xử lý sự kiện khi nhấn nút "Đăng Xuất"
        // Ví dụ: đăng xuất người dùng và chuyển hướng đến trang đăng nhập
        this.props.navigation.navigate("Login");
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Trang chủ</Text>

                <View style={styles.bottomButtons}>
                    <TouchableOpacity style={styles.bottomButton} onPress={this.handleHomeButton}>
                        <FontAwesome name="home" size={24} color="black" />
                        <Text style={styles.bottomButtonText}>Trang Chủ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButton} onPress={this.handleProfileButton}>
                        <FontAwesome name="user" size={24} color="black" />
                        <Text style={styles.bottomButtonText}>Thông Tin Cá Nhân</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButton} onPress={this.handleLogoutButton}>
                        <FontAwesome name="sign-out" size={24} color="black" />
                        <Text style={styles.bottomButtonText}>Đăng Xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    bottomButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
    },
    bottomButton: {
        alignItems: "center",
    },
    bottomButtonText: {
        marginTop: 5,
    },
});

export default HomeScreen;
