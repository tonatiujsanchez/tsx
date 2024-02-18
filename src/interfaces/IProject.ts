

export interface IProject {
    title      : string
    subtitle   : string
    slug       : string
    type       : string
    summary    : string
    description: string
    image      : string
    imagePreview : string
    bgImage    : string
    banner     : string
    technologies: ITechnology[]
    links      : ILink[]
    position   : IProjectPositions
    client     : string
    versions   : string[]
    images     : IImageCapture[]
    message    : string
    properties : PropertiesViewProject
}


export type IProjectPositions = 'left' | 'right'

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

export interface PropertiesViewProject {
    spaceBetween: number;
    slidesPerView: number;
    spaceBetweenLg: number;
    slidesPerViewLg: number;
}