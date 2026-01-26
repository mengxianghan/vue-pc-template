import { reactive, ref } from 'vue'

export interface Pagination {
  current: number
  pageSize: number
  total: number
  size: 'default' | 'small'
  showTotal: ((total: number) => string)
  showSizeChanger: boolean
  pageSizeOptions: string[]
  hideOnSinglePage: boolean
}

interface UsePaginationOptions<
  D,
  S extends Record<string, any>,
> {
  listData?: D[]
  searchFormData?: S
  pagination?: Partial<Pagination>
}

export function usePagination<
  D extends Record<string, any>,
  S extends Record<string, any> = Record<string, any>,
>(options?: UsePaginationOptions<D, S>) {
  const loading = ref(false)
  const finish = ref(false)
  const error = ref(false)
  const pagination = reactive<Pagination>({
    current: 1,
    pageSize: 20,
    total: 0,
    size: 'default',
    showTotal: total => `共 ${total} 条数据`,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100'],
    hideOnSinglePage: true,
    ...(options?.pagination || {}),
  })
  const searchFormData = ref<S>(options?.searchFormData || {} as S)
  const listData = ref<D[]>(options?.listData || [])

  function loadStart() {
    error.value = false
    finish.value = false
    loading.value = true
  }

  function loadEnd() {
    loading.value = false
  }

  function loadFinish() {
    loading.value = false
    error.value = false
    finish.value = true
  }

  function loadError() {
    loading.value = false
    finish.value = false
    error.value = true
  }

  function resetPagination() {
    pagination.current = 1
    pagination.total = 0
    listData.value = []
  }

  function refreshPagination(count: number = 1) {
    const { total, current, pageSize } = pagination
    const totalPage = Math.ceil((total - count) / pageSize)
    pagination.current = current > totalPage ? totalPage : current
  }

  return {
    loading,
    finish,
    error,
    loadStart,
    loadEnd,
    loadFinish,
    loadError,
    pagination,
    searchFormData,
    resetPagination,
    refreshPagination,
    listData,
  }
}
