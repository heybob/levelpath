export type Thumbnail = {
    source: string
}
export type Page = {
    description: string,
    extract: string,
    thumbnail: Thumbnail
}

export type Births = {
    text: string,
    year: string,
    pages: Page[]
}

export type Profile = {
    name: string
    title: string
    birthYear: string
    extract: string
    thumbnail: string
  }

export type WikiResponse = {
    births: Births[]
}

export type WikiState = {
    isLoading: boolean, 
    data: Profile[][], 
    paginatedData: Profile[], 
    pageNum: number, 
    totalPages: number, 
    pageSize: number, 
    today: Date,
    apiError: boolean,
    pageTitle: string,
}

export type Action = {
    type: string
    payload?: any
}

export type ButtonProps = {
    key?: string | number
    name: string,
    clickHandler?: () => void,
    disabled?: boolean
}