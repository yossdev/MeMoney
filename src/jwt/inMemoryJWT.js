const inMemoryJWTManager = () => {
  let inMemoryJWT = null

  const getToken = () => inMemoryJWT
  console.log(getToken())

  const setToken = (token) => {
    inMemoryJWT = token
    return true
  }

  const ereaseToken = () => {
    inMemoryJWT = null
    return true
  }

  return {
    ereaseToken,
    getToken,
    setToken,
  }
}

export default inMemoryJWTManager()
