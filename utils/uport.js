import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('cuplist', {
  clientId: process.env.UPORT_CLIENT_ID,
  network: process.env.UPORT_NETWORK,
  signer: SimpleSigner(process.env.UPORT_SIGNING_KEY)
})
