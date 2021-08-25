import React, { useState } from 'react';
import { View, Text, TextInput, Image, StatusBar, Button, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import { styles } from './style';
import Destaque from '../../assets/destaque.svg';
import Logo from '../../assets/logo.png';

export function Home() {

    const [organization, setOrganization] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#eee'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <TextInput
                    style={styles.input}
                    placeholder="Procurar organizações..."
                    placeholderTextColor='#969696'
                    onChangeText={setOrganization}
                >
                </TextInput>
                <Image source={Destaque} style={styles.image}></Image>
                <View>
                    <Text style={styles.title}>Organizações em destaque</Text>
                    <Text style={styles.subtitle}>Veja as organizações em tendência no GitHub.</Text>
                </View>
                <View style={styles.card}>
                    <Image source={Logo} style={styles.imageCard}></Image>
                    <View>
                        <Text style={styles.titleCard}>React Community</Text>
                        <Text style={styles.descriptionCard}>React Website and its localizations</Text>
                        <View style={{ width: 274 }}>
                            <TouchableOpacity onPress={() => {/* do this */ }}>
                                <View style={styles.save}
                                >
                                    <Text style={styles.saveText}>Salvar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={Logo} style={styles.imageCard}></Image>
                    <View>
                        <Text style={styles.titleCard}>Angular</Text>
                        <View style={{ width: 274 }}>
                            <TouchableOpacity onPress={() => {/* do this */ }}>
                                <View style={styles.save}
                                >
                                    <Text style={styles.saveText}>Salvar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={Logo} style={styles.imageCard}></Image>
                    <View>
                        <Text style={styles.titleCard}>vuejs</Text>
                        <View style={{ width: 274 }}>
                            <TouchableOpacity onPress={() => {/* do this */ }}>
                                <View style={styles.save}
                                >
                                    <Text style={styles.saveText}>Salvar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ width: 350 }}>
                    <TouchableOpacity onPress={() => {/* do this */ }}>
                        <View style={styles.seeSaves}
                        >
                            <Text style={styles.seeSaveText}>Ver Salvos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}