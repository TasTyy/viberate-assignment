import axios from "axios";
import { Artist, Navbar } from "./Interfaces";
import { navbarSchema, artistSchema } from "./Schemas";
import { BASE_URL } from "../config";

axios.defaults.baseURL = BASE_URL;

export async function getNavbar() {
    const res = await axios.get(`/navbar`);
    const data = res.data as Navbar[];

    return navbarSchema.parse(data);
}

export async function getArtist(artistId: string) {
    const res = await axios.get(`/${artistId}`);
    const data = res.data.data as Artist;

    return artistSchema.parse(data);
}
