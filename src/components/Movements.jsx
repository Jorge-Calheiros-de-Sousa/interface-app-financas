import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);
    const formatDate = (data) => {
        if (data) {
            const newDate = new Date(data);
            return `${addZero(newDate.getDate())}/${addZero(newDate.getMonth())}/${newDate.getFullYear()}`
        }
    }
    const addZero = (number) => {
        if (number < 10) {
            return `0${number}`
        } else {
            return `${number}`
        }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.date}>{formatDate(data.date)}</Text>
            <View style={styles.content}>
                <Text style={styles.title}>{data.title}</Text>
                {showValue ? (
                    <Text style={data.expense ? styles.expense : styles.value}>
                        {
                            data.expense ? `R$ -${data.value}` : `R$ ${data.value}`
                        }
                    </Text>
                ) : (
                    <View style={styles.skeleton}>

                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    expense: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})