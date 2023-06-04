

export interface IProject {
    title    : string
    subtitle : string
    slug     : string
    type     : string
    summary  : string
    image    : string
    imagePreview : string
    bgImage  : string
    banner   : string
    technologies: ITechnology[]
    links    : ILink[]
    position: 'left' | 'right'
    client   : string
    images   : IImageCapture[]
}


export interface ITechnology {
    name       : string
    icon       : string
    styleClases: string
}


export interface ILink {
    title: string
    url  : string
    type : 'preview' | 'repository' 
}

export interface IImageCapture {
    url  : string
    title: string
}