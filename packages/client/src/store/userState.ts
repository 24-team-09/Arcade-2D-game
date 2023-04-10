import { useAppSelector } from './hooks'

export const userState = () => {
  const user = useAppSelector(state => state.user.user)
  const isLoading = useAppSelector(state => state.user.isLoading)
  const userError = useAppSelector(state => state.user.error)
  return { userError, user, isLoading }
}
