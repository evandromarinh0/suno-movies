import { Divider } from "../../components/Divider";
import { Footer } from "../../components/Footer";
import { GeneralMovies } from "../../components/GeneralMovies";
import { Header } from "../../components/Header";
import { HotMovies } from "../../components/HotMovies";

export function Catalog() {
  return(
    <>
      <Header />
      <HotMovies />
      <Divider />
      <GeneralMovies />
      <Footer />
    </>
  );
}