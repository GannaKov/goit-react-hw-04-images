

export function FetchFotos (baseurl,key,nextWord,page){
   return  fetch(`${baseurl}?key=${key}&q=${nextWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
    .then(response=>response.json())
}
// ${key}