import React from 'react'


const MainMovie = () => {
    let API_KEY="&api_key=f98c87a47c745ba4ef7443f0507475e4"
let BASE_URL="https://api.themoviedb.org/3";
let url=BASE_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY

   return (
    <div>MainMovie</div>
  )
}

export default MainMovie