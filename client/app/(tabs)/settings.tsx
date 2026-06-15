import { HelloWave } from '@/components/hello-wave'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import React from 'react'

const settings = () => {
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <HelloWave />
            <ThemedText>Settings Screen</ThemedText>
        </ThemedView>
    )
}

export default settings