# disneyplus-clone
A Disney Plus clone in React JS. 
Tech used : React Routers , Firebase auth , Firebase database , styled component, Redux, CSS Flexbox , CSS Grid, React Hooks

Live Demo : https://disneyplus-clone-824a5.web.app/

Login Page : User auto redirected to login page if user is not logged in previously.User can login using firebase google authentication. Login details were saved in local storage.
Home Page : After user logged in, User can view movies which were fetched from firebase store. As user logged in, useEffect hook is used to fetch movies data.
Movie Detail page : On clicking on a movie, user will be directed to movie detail page for that particular movie.

Interesting effects: On hovering over movie studios, background video start playing.
