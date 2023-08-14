import axios from "axios";

export default function CustomAxios() {
    axios.create({
        baseURL: "http://15.164.131.248:8080/",
    });
}
