export type BriefTemplateType = {
  briefTemplateId: string | null,
  briefName: string,
  assessesTypes: Array<Access>
  questions: Array<QuestionType>
}

export type QuestionType = {
  idQuestion: string,
  questionTextData: QuestionTextData
  response: ResponseType
}

export type QuestionTextData = {
  questionText: string,
  isChangedQuestionText: boolean,
}

export type ResponseType = AssessesTypeResponse
  | LinksTypeResponse
  | ContactsTypeResponse
  | TextTypeResponse
  | NoneTypeResponse


export type AssessesTypeResponse = {
  type: "Accesses",
  assesses: Array<Access>
}

export type LinksTypeResponse = {
  type: "Links",
  numberLinks: number
}

export type ContactsTypeResponse = {
  type: "Contacts"
}

export type TextTypeResponse = {
  type: "Text"
}

export type NoneTypeResponse = {
  type: "None"
}

export type Access = {
  idAccess: string,
  accessName: string,
  accessLink: string,
  isChanged: boolean,
  isNewAccess?: boolean
}


export type AccessTypeName = "yandex" | "google" |"instagram" | "facebook" | "otherSite"