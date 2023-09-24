import React, {Component} from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import QRCode from "react-native-qrcode-svg"; // Import thư viện QRCode

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qrData: null, // Dữ liệu để tạo mã QR
        };
    }

    // Hàm để tạo mã QR dùng để kết bạn
    handleGenerateQRCode = () => {
        // Logic để tạo mã QR dùng để kết bạn ở đây
        // Ví dụ: sử dụng dữ liệu người dùng và tạo mã QR
        const userData = {
            name: "John Doe",
            phoneNumber: "123-456-7890",
            email: "john@example.com",
        };

        // Chuyển dữ liệu người dùng thành một chuỗi JSON
        const userDataJSON = JSON.stringify(userData);

        // Sử dụng chuỗi JSON để tạo mã QR
        this.setState({qrData: userDataJSON});
    };

    render() {
        return (
            <View style={styles.container}>
                {/* Các thông tin cá nhân */}
                {/* ... (các thông tin cá nhân) */}

                {/* Mã QR */}
                <View style={styles.qrContainer}>
                    {this.state.qrData ? (
                        <QRCode
                            value={this.state.qrData} // Dữ liệu để tạo mã QR
                            size={200} // Kích thước của mã QR
                        />
                    ) : null}
                </View>

                {/* Nút tạo mã QR */}
                <TouchableOpacity style={styles.button} onPress={this.handleGenerateQRCode}>
                    <Text style={styles.buttonText}>Tạo Mã QR Kết Bạn</Text>
                </TouchableOpacity>

                {/* ... (các nút và chức năng khác) */}
            </View>
        );
    }
}

// Các styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
    },
    // ... (styles khác)
});

export default ProfileScreen;
