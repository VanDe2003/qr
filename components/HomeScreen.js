import React, {Component} from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, Alert} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";

class HomeScreen extends Component {
    state = {
        hasPermission: null,
        scanned: false,
    };

    async componentDidMount() {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        this.setState({hasPermission: status === "granted"});
    }

    handleLogout = () => {
        this.props.navigation.navigate("Login");
    };

    handleBarCodeScanned = ({type, data}) => {
        this.setState({scanned: true});
        Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    render() {
        const {hasPermission, scanned} = this.state;

        if (hasPermission === null) {
            return <Text>Requesting camera permission...</Text>;
        }
        if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Trang chủ</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("QRCodeScanner")} style={styles.qrButton}>
                    <Image
                        source={require("../images/qr-code.png")} // Thay đổi đường dẫn hình ảnh cho mã QR của bạn
                        style={styles.qrImage}
                    />
                    <Text style={styles.qrText}>Quét QR Code</Text>
                </TouchableOpacity>
                {scanned && <Button title="Quét lại" onPress={() => this.setState({scanned: false})} />}
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
        backgroundColor: "#f4f4f4",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    qrButton: {
        alignItems: "center",
    },
    qrImage: {
        width: 100,
        height: 100,
    },
    qrText: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default HomeScreen;
