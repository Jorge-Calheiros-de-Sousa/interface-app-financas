import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Actions from "../components/Actions";
import Balance from '../components/Balance';
import Header from '../components/Header';
import Movements from "../components/Movements";

export default function Home() {
    const financas = [
        {
            id: 1,
            title: 'Conta de luz',
            value: '300,00',
            date: '2022-07-11',
            expense: true
        },
        {
            id: 2,
            title: 'Salario',
            value: '1.500,00',
            date: '2022-07-12',
            expense: false
        },
        {
            id: 3,
            title: 'Pix Cliente X',
            value: '500,00',
            date: '2022-07-12',
            expense: false
        },
        {
            id: 4,
            title: 'Pix Cliente Y',
            value: '500,00',
            date: '2022-07-12',
            expense: false
        }
    ]

    return (
        <View style={styles.container}>
            <Header name={'Jorge Calheiros'} />
            <Balance saldo={'4.500,00'} gastos={'-350,00'} />
            <Actions />
            <Text style={styles.title}>Ultimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={financas}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
});
