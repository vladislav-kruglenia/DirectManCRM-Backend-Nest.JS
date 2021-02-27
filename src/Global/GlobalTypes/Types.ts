export type ClientContactType = {
  idClient: string,
  name: string | null,
  email: string | null,
  phoneNumber: string | null,
}

export type DisplayAccesses = 'direct' | 'google' | 'instagram' | 'facebook'