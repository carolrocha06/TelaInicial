import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Google from '../assets/Google.png';
import Facebook from '../assets/Facebook.png';
import { useState } from "react";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");// estados são como caixinhas onde guardamos informações que podemos mudar
    const [senha, setSenha] = useState("");// sempre que algo é alterado, essas caixinhas mudam e a tela reflete as mudancas
    const [lembrar, setLembrar] = useState(false);// exemplo de checkbox
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={{ position: 'absolute', top: 40, left: 20, zIndex: 1 }}
                onPress={() => navigation.goBack()} // setinha verde estilizada para voltar (nao é a padrao do cabecalho)
            >
                <Text style={{ fontSize: 32, color: '#2cb859' }}>{'<'}</Text>{/* setinha exatamente como no pdf*/}
            </TouchableOpacity>

            <Text style={styles.titulo}>Acesse</Text>
            <Text style={styles.subtitulo}>com E-mail e senha</Text>

            <Text style={styles.texto}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
                keyboardType="default" // teclado padrao
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#aaa"
            />

            <Text style={styles.texto}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                keyboardType="numeric" // teclado apenas com numeros (igual no pdf)
                value={senha}
                onChangeText={setSenha}
                secureTextEntry // para deixar a senha sem mostrar os caracteres
                placeholderTextColor="#aaa"
            />

            <View style={styles.optionsRow}>{/*checkbox para lembrar senha*/}
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}// row para alinhar o texto e a caixa de seleção
                    onPress={() => setLembrar(!lembrar)}
                >
                    <Text style={{ fontSize: 20, marginRight: 5 }}>
                        {lembrar ? '☑' : '☐'}
                    </Text>
                    <Text style={{ fontSize: 14 }}>Lembrar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14 }}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300, marginTop: 10 }}>
                <TouchableOpacity
                    style={{ marginRight: 18, height: 58, width: 170, backgroundColor: '#2cb859', borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 30 }}>
                    <Text style={styles.mensagem}>Acessar</Text> {/* botao para Acessar*/}
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 58, width: 170, backgroundColor: 'white', borderColor: '#2cb859', borderWidth: 2, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.escrita, { fontWeight: 'bold', color: '#3e3e3eff', gap: 10 }]}>Cadastrar </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 70, width: '100%' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#ddd' }} />
                <Text style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, color: '#888', fontSize: 14, fontWeight: 'bold' }}>Ou continue com</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#ddd' }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 29, gap: 35 }}> {/* espaço entre as duas imagens */}
                <TouchableOpacity>
                    <Image
                        source={Google}
                        style={{ height: 55, width: 55 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={Facebook}
                        style={{ height: 55, width: 55 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        paddingTop: 93 // espaco entre o topo da tela e o conteudo
    },
    titulo: { // Acesse
        fontSize: 44,
        fontWeight: 'bold',
        marginBottom: 4,
        marginLeft: 30
    },
    subtitulo: { // com E-mail e senha
        fontSize: 16,
        marginBottom: 10,
        color: '#2b2b2bff',
        marginLeft: 30,
        marginBottom: 26
    },
    texto: { // textos acima das textInputs
        fontSize: 13,
        marginLeft: 30,
    },
    mensagem: { // Acessar no botao verde
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    escrita: { // Cadastrar no botao branco com borda verde (ao lado do botao verde)
        fontSize: 14,
    },
    input: { // textInput com o teclado padrao do sistema e a outra numerico
        width: 360,
        height: 60,
        borderColor: '#2cb859',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 20,
        fontSize: 16,
        marginLeft: 30,
    },
    
    optionsRow: {
        marginTop: 10,
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 355, // espaco entre as duas escritas
        marginBottom: 20,
    },
});

export default Login;