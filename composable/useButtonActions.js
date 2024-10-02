import { ref } from 'vue'

export const useButtonActions = () => {
  const showModal = ref(false)

  const handleAction = (action) => {
    if (action === 'modal') {
      showModal.value = true
    }
  }

  return {
    showModal,
    handleAction
  }
}