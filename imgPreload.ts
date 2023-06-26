export function imagePreload(...imagesUrl: string[]) {  
    const images = new Array(arguments.length);
    for (let i = 0; i < imagesUrl.length; i++) {  
        images[i] = new Image();
        images[i].src = imagesUrl[i];
    }
}  
