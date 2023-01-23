export enum EnumContentTypes {
    photo = "photo",
    text = "text",
    video = "video",
    radio = "radio"
}

type TypeSlide = {
    title: string;
    text: string;
    componentType: "image" | "video";
    url: string;
    tumbnailUrl: string
}