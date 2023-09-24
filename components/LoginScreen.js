import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import validAccounts from "../account/validAccounts";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleLogin = () => {
        const {username, password} = this.state;

        // Kiểm tra xem tài khoản và mật khẩu có hợp lệ không
        const isValid = validAccounts.some((account) => account.username === username && account.password === password);

        if (isValid) {
            // Đăng nhập thành công, chuyển hướng tới trang chủ
            this.props.navigation.navigate("Home");
        } else {
            // Đăng nhập thất bại, hiển thị thông báo lỗi
            alert("Tài khoản hoặc mật khẩu không hợp lệ");
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Đăng nhập</Text>
                <TextInput style={styles.input} placeholder="Tên người dùng" onChangeText={(username) => this.setState({username})} />
                <TextInput style={styles.input} placeholder="Mật khẩu" secureTextEntry={true} onChangeText={(password) => this.setState({password})} />

                {/* Sử dụng một View để đặt nút "Đăng nhập" và "Đăng ký" cùng một hàng */}
                <View style={{flexDirection: "row", justifyContent: "space-between", width: "80%"}}>
                    <TouchableOpacity style={[styles.button, {flex: 0.5}]} onPress={this.handleLogin}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {flex: 0.5}]} onPress={() => this.props.navigation.navigate("Register")}>
                        <Text style={styles.buttonText}>Đăng ký</Text>
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

export default LoginScreen;
