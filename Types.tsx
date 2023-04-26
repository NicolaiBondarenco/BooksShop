export interface IData {
  items: IDataObj[]
  kind: string
  totalItems: number
}

export interface IDataObj {
  accessInfo: {
    accessViewStatus: string
    country: string
    embeddable: boolean
    epub: { isAvailable: boolean }
    pdf: { isAvailable: boolean }
    publicDomain: boolean
    quoteSharingAllowed: boolean
    textToSpeechPermission: string
    viewability: string
    webReaderLink: string
  }
  etag: string
  id: string
  kind: string
  saleInfo: { country: string; saleability: string; isEbook: boolean }
  searchInfo: {
    textSnippet: string
  }
  selfLink: string
  volumeInfo: {
    allowAnonLogging: boolean
    authors: string[]
    canonicalVolumeLink: string
    categories: string[]
    contentVersion: string
    description: string
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
    industryIdentifiers: IIndustryIdentifiersObj[]
    infoLink: string
    language: string
    maturityRating: string
    pageCount: number
    panelizationSummary: {
      containsEpubBubbles: boolean
      containsImageBubbles: boolean
    }
    previewLink: string
    printType: string
    publishedDate: string
    publisher: string
    readingModes: { text: boolean; image: boolean }
    subtitle: string
    title: string
  }
}

interface IIndustryIdentifiersObj {
  type: string
  identifier: string
}
