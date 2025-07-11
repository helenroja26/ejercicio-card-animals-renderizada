import { Ref } from 'vue'

export type CardName = 'tigre' | 'elefante' | 'guaca' | null

export function useAudioControl(activeCard: Ref<CardName>) {
  function handleUpdatePlay(cardName: CardName, val: boolean) {
    if (val) {
      activeCard.value = cardName
    } else if (activeCard.value === cardName) {
      activeCard.value = null
    }
  }

  function handleAudioEnd(cardName: CardName) {
    if (activeCard.value === cardName) {
      activeCard.value = null
    }
  }

  return { handleUpdatePlay, handleAudioEnd }
}
