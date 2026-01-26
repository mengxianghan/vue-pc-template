import type { FormInstance, Rule } from 'ant-design-vue/es/form'
import { ref } from 'vue'
import { useResettableRef } from './use-resettable-ref'

interface UseFormOptions<T, R> {
  formData: T
  formRecord?: R
  formRules?: Record<string, Rule | Rule[]>
}

export function useForm<
  T extends Record<string, any> = Record<string, any>,
  R extends Record<string, any> = Record<string, any>,
>(options: UseFormOptions<T, R>) {
  const [formData, resetFormData] = useResettableRef<T>(options.formData)
  const formRecord = ref<R | null>(options?.formRecord || null)
  const formRules = ref<Record<string, Rule | Rule[]>>(options?.formRules || {})
  const formLoading = ref(false)
  const formRef = ref<FormInstance>()

  function showFormLoading() {
    formLoading.value = true
  }

  function hideFormLoading() {
    formLoading.value = false
  }

  function resetForm() {
    resetFormData()
    formRecord.value = null
    formRef.value?.resetFields()
    formRef.value?.clearValidate()
  }

  function filterOption(
    input: string,
    option: {
      label: any
      value: any
    },
  ) {
    return String(option.label).toLowerCase().includes(input.toLowerCase())
  }

  return {
    formRecord,
    formData,
    formRules,
    formLoading,
    formRef,
    showFormLoading,
    hideFormLoading,
    resetForm,
    filterOption,
  }
}
