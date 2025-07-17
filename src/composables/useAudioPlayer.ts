import { ref, watch, type Ref } from 'vue'


interface Props {
  play: boolean
  id: string
  audioElement: Ref<HTMLAudioElement | null>
}
export function useAudioPlayer(props: Props, emit: (event: string, payload?: any) => void) {
  const isActive = ref(false)

  watch(() => props.play, (newVal) => {
    if (newVal && props.audioElement.value) {
      props.audioElement.value.currentTime = 0
      props.audioElement.value.play()
      isActive.value = true
    } else if (props.audioElement.value && !newVal) {
      props.audioElement.value.pause()
      isActive.value = false
    }
  })

  const toggleAudio = () => {
    if (!props.audioElement.value) return

    if (isActive.value) {
      props.audioElement.value.pause()
      props.audioElement.value.currentTime = 0
      isActive.value = false
      emit('update:play', { id: props.id, value: false })
    } else {
      props.audioElement.value.play()
      isActive.value = true
      emit('update:play', { id: props.id, value: true })
    }
  }

  const onAudioEnd = () => {
    isActive.value = false
    emit('update:play', { id: props.id, value: false })
    emit('audio-ended', props.id)
  }

  return {
    isActive,
    toggleAudio,
    onAudioEnd
  }
}