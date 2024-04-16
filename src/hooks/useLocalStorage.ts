import { useEffect, useState } from "react"

export function useLocalStorage(key: string, initialValue: number | (() => number)) {
  const [value, setValue] = useState<number>(() => {
    const jsonValue = localStorage.getItem(key)
    if(jsonValue == null) {
      if(typeof initialValue === "function") {
        return (initialValue as () => number)()
      } else {
        return initialValue
      }
    } else {
      return JSON.parse(jsonValue)
    }
  }) 

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as [number, typeof setValue]
}
