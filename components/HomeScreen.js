import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from "react-native";

class HomeScreen extends Component {
    handleLogout = () => {
        this.props.navigation.navigate("Login");
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Trang chủ</Text>
                <Button title="Đăng xuất" onPress={this.handleLogout} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;
