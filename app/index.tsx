import { Redirect } from "expo-router";

const MoviesApp = () => {
  //Hacemos un redirect a la pantalla de inicio Home
  return <Redirect href="/home" />;
};

export default MoviesApp;
