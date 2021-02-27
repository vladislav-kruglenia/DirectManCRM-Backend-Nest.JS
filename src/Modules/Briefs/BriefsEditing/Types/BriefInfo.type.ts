import { ClientContactType, DisplayAccesses } from '../../../../Global/GlobalTypes/Types';

export type BriefInfoType = {
  briefId: string | null
  briefType: 'contextAdvertising' | 'socialNetworksAdvertising' | "youtubeAdvertising" | null,
  questions: Array<QuestionAndResponse>
}

export type QuestionAndResponse = {
  idQuestion: string,
  question: string,
  response: ResponsesTypes
}
export type ResponsesTypes = ResponseText | ResponseLinks | ResponseAccesses | ResponseContacts



export type ResponseText = {
  responseType: "Text",
  data: ResponseTextData
}
export type ResponseLinks = {
  responseType: "Links",
  data: ResponseLinksData
}

export type ResponseAccesses = {
  responseType: "Accesses",
  data: Array<ResponseAccessData>
}
export type ResponseContacts = {
  responseType: "Contacts",
  data: ResponseContactsData
}



export type ResponseTextData = {
  textData: string,
  isChanged: boolean
}
export type ResponseLinksData = {
  numberLinks: number,
  isNoData: boolean,
  linksData: Array<LinkData>
}
export type ResponseAccessData = {
  accessType: DisplayAccesses,
  login: string,
  password: string
}

export type ResponseContactsData = {
  isNoData: boolean,
  contactsData: Array<ClientContactType>
}

export type LinkData = {
  isChanged: boolean
  productName: string
  productLink: string
}