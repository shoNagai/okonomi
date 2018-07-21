import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('cuplist', {
  clientId: "2omQi6HGhS1j7ZGg3i1JP2Rmb7ssbXqXPnr",
  network: "rinkeby",
  signer: SimpleSigner("87276ca61fa7b7742414de67cf0e013690d6230e0bf66bd2f09e6280b608dbfe")
})
