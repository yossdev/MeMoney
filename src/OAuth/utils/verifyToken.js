// token confirmation
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID)

const googleAuth = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
  })

  const payload = ticket.getPayload()
  console.log('payload: ', payload)

  console.log(`User ${payload.name} verified`)

  const { sub, email, name, picture } = payload
  const userId = sub
  return { userId, email, fullName: name, photoUrl: picture }
}
// googleAuth().catch(console.error)
module.exports = googleAuth()