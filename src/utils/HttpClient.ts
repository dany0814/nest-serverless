import axios from "axios";

type User = {
    id: number;
    email: string;
    first_name: string;
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
        "https://reqres.in/api/users",
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
