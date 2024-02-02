import axios from "axios";

type User = {
  birth_year: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  created: string
  edited: string
  species: string[]
  starships: string[]
  url: string
  vehicles: string[]
};

type GetUsersResponse = {
    data: User[];
};

export class HTTP {
  async getUsers() {
    try {
      console.log("Entrando en la función getUsers de Utils");
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetUsersResponse>(
        "https://swapi.py4e.com/api/people/1/",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log("Get ejecutado por axios correctamente");
      console.log(JSON.stringify(data, null, 4));

      // 👇️ "response status is: 200"
      console.log("response status is: ", status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
}
