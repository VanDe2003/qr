import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from "react-native";

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUsername: "",
            newPassword: "",
        };
    }

    handleBack = () => {
        this.props.navigation.navigate("Login");
    };

    handleRegister = () => {
        const {newUsername, newPassword} = this.state;

        // Kiểm tra xem thông tin tài khoản mới có hợp lệ không và thêm vào danh sách tài khoản hợp lệ
        // (Bạn cần thêm logic kiểm tra và thêm tài khoản vào danh sách tại đây)

        // Chuyển hướng về trang đăng nhập sau khi đăng ký thành công
        this.props.navigation.navigate("Login");
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Tên người dùng mới" onChangeText={(newUsername) => this.setState({newUsername})} />
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu mới"
                    secureTextEntry={true}
                    onChangeText={(newPassword) => this.setState({newPassword})}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
                    <Text style={styles.buttonText}>Đăng ký</Text>
                </TouchableOpacity>
                <Button title="Trở về" onPress={this.handleBack} />
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
    input: {
        width: "80%",
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    button: {
        width: "80%",
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
    },
});

export default RegisterScreen;
