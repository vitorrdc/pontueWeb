import axios from "axios"

export function setUserLocalStorage(user) {
  localStorage.setItem('u', JSON.stringify(user))
}

export function getuserLocalStorage() {
  const json = localStorage.getItem('u')

  if (!json) {
    return null
  }

  const user = JSON.parse(json)

  return user ?? null
}

export function removeUserLocalStorage() {
  localStorage.removeItem('u')
}
