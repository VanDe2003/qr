// import React, {Component} from "react";
// import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
// import QRCode from "react-native-qrcode-svg"; // Import thư viện QRCode

// class ProfileScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             qrData: null, // Dữ liệu để tạo mã QR
//         };
//     }

//     // Hàm để tạo mã QR dùng để kết bạn
//     handleGenerateQRCode = () => {
//         // Logic để tạo mã QR dùng để kết bạn ở đây
//         // Ví dụ: sử dụng dữ liệu người dùng và tạo mã QR
//         const userData = {
//             name: "John Doe",
//             phoneNumber: "123-456-7890",
//             email: "john@example.com",
//         };

//         // Chuyển dữ liệu người dùng thành một chuỗi JSON
//         const userDataJSON = JSON.stringify(userData);

//         // Sử dụng chuỗi JSON để tạo mã QR
//         this.setState({qrData: userDataJSON});
//     };

//     render() {
//         return (
//             <View style={styles.container}>
//                 {/* Các thông tin cá nhân */}
//                 {/* ... (các thông tin cá nhân) */}

//                 {/* Mã QR */}
//                 <View style={styles.qrContainer}>
//                     {this.state.qrData ? (
//                         <QRCode
//                             value={this.state.qrData} // Dữ liệu để tạo mã QR
//                             size={200} // Kích thước của mã QR
//                         />
//                     ) : null}
//                 </View>

//                 {/* Nút tạo mã QR */}
//                 <TouchableOpacity style={styles.button} onPress={this.handleGenerateQRCode}>
//                     <Text style={styles.buttonText}>Tạo Mã QR Kết Bạn</Text>
//                 </TouchableOpacity>

//                 {/* ... (các nút và chức năng khác) */}
//             </View>
//         );
//     }
// }

// // Các styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f4f4f4",
//     },
//     // ... (styles khác)
// });

// export default ProfileScreen;

// ProfileScreen.js
import React, {Component} from "react";
import {View, Text, Button, TextInput} from "react-native";
import QRCode from "react-native-qrcode-svg";

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            name: "John Doe", // Thông tin cá nhân mặc định
            email: "john.doe@example.com",
            phone: "123-456-7890",
        };
    }

    toggleEdit = () => {
        this.setState((prevState) => ({isEditing: !prevState.isEditing}));
    };

    saveProfile = () => {
        // Thực hiện lưu thông tin cá nhân sau khi chỉnh sửa ở đây
        // Ví dụ: Gửi thông tin cá nhân lên máy chủ

        // Sau khi lưu xong, chuyển về chế độ xem thông tin (không sửa)
        this.toggleEdit();
    };

    render() {
        const {isEditing, name, email, phone} = this.state;

        return (
            <View>
                <Text>Profile</Text>
                {isEditing ? (
                    <View>
                        <TextInput placeholder="Name" value={name} onChangeText={(text) => this.setState({name: text})} />
                        <TextInput placeholder="Email" value={email} onChangeText={(text) => this.setState({email: text})} />
                        <TextInput placeholder="Phone" value={phone} onChangeText={(text) => this.setState({phone: text})} />
                        <Button title="Save" onPress={this.saveProfile} />
                    </View>
                ) : (
                    <View>
                        <Text>Name: {name}</Text>
                        <Text>Email: {email}</Text>
                        <Text>Phone: {phone}</Text>
                        <Button title="Edit" onPress={this.toggleEdit} />
                    </View>
                )}
                <QRCode value={`${name}, ${email}, ${phone}`} size={200} />
            </View>
        );
    }
}

export default ProfileScreen;
