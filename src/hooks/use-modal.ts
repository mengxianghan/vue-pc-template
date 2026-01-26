import { ref } from 'vue'

export interface ModalConfig {
  type?: string
  title?: string
  open: boolean
  confirmLoading?: boolean
  [property: string]: any
}

export interface ModalOptions {
  onAfterClose?: () => void
}

export function useModal(options?: ModalOptions) {
  const modal = ref<ModalConfig>({
    type: '',
    title: '',
    open: false,
    confirmLoading: false,
  })

  function setModal(config: Partial<ModalConfig>) {
    modal.value = {
      ...modal.value,
      ...(config || {}),
    }
  }

  function _openModal(config: Partial<ModalConfig>) {
    setModal({
      ...(config || {}),
      open: true,
    })
  }

  function _closeModal() {
    setModal({
      type: '',
      open: false,
      confirmLoading: false,
    })
  }

  function openModal(config?: Partial<ModalConfig>) {
    _openModal({
      ...(config || {}),
    })
  }

  function closeModal() {
    _closeModal()
  }

  function showModalLoading() {
    setModal({
      confirmLoading: true,
    })
  }

  function hideModalLoading() {
    setModal({
      confirmLoading: false,
    })
  }

  function onAfterClose() {
    if (typeof options?.onAfterClose === 'function') {
      options.onAfterClose()
    }
  }

  return {
    modal,
    openModal,
    closeModal,
    showModalLoading,
    hideModalLoading,
    onAfterClose,
  }
}
