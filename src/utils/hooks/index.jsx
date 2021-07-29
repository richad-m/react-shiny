import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context'

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) return
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setLoading(false)
    }
    setLoading(true)
    fetchData()
  }, [url])
  return { isLoading, data }
}

export function useTheme() {
  const { theme } = useContext(ThemeContext)
  return { theme }
}
