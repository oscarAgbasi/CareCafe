import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity
 } from 'react-native';
interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = ({children}) => {
        return (
            <View style={styles.container}>
                {children}
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d1e0',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    }
})