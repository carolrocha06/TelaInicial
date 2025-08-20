import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Google from '../assets/Google.png';
import Facebook from '../assets/Facebook.png';

export default function Login() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ position: 'absolute', top: 40, left: 20 }}>
                <Text style={{ fontSize: 24, color: '#2cb859' }}>←</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>Acesse</Text>
            <Text style={styles.subtitulo}>com E-mail e senha</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
                placeholderTextColor="#888"
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#888"
                secureTextEntry={true}
            />

            <View style={styles.optionsRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, marginRight: 5 }}>□</Text>
                    <Text style={{ fontSize: 14 }}>Lembrar senha</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: '#3498db' }}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300, marginTop: 20 }}>
                <TouchableOpacity
                    style={{ height: 70, width: 140, backgroundColor: '#2cb859', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.mensagem}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 70, width: 140, backgroundColor: 'white', borderColor: '#2cb859', borderWidth: 2, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.escrita, { color: '#2cb859' }]}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, width: '80%' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#ddd' }} />
                <Text style={{ marginHorizontal: 10, color: '#888', fontSize: 14 }}>Ou continue com</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#ddd' }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, gap: 20 }}>
                <TouchableOpacity>
                    <Image
                        source={Google}
                        style={{ height: 40, width: 40 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={Facebook}
                        style={{ height: 40, width: 40 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        margin: 3,
        fontWeight: 'bold',
        marginTop: 50,
    },
    subtitulo: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    mensagem: {
        color: 'white',
    },
    escrita: {
        padding: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: '#ecf0f1',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 15,
        color: '#2c3e50',
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        marginBottom: 20,
    },
});