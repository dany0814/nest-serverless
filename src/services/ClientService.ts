import { Client } from "../models/client";
import { DBManager } from "../utils/DBManager";
import { HTTP } from "../utils/HttpClient";

export class ClientService {
  private readonly DB: DBManager;
  private readonly HTTP: HTTP;

  constructor() {
    this.DB = new DBManager(process.env.DYNAMODB_CLIENT_TABLE!);
    this.HTTP = new HTTP;
  }

  async findAll(): Promise<Client[]> {
    return await this.DB.getAll();
  }

  findById(id: string): Promise<Client> {
    return this.DB.getById(id);
  }

  create(body: Client): Promise<Client> {
    return this.DB.insert(body);
  }

  update(id: string, body: Client): Promise<Client> {
    return this.DB.update(id, body);
  }

  delete(id: string): Promise<void> {
    return this.DB.deleteItem(id);
  }

  // starwars api
  getPeople(){
    console.log("Data de starwars entrando a servicio getPeople")
    return this.HTTP.getUsers()
  }
}
