import { BaseModel, AppContextServer } from "../models/types";
import { GenericApi } from './GenericApi';
import axsios from 'axios';
import Axios from "axios";

export class Api<T extends BaseModel> implements GenericApi<T> {
    
    protected env : AppContextServer
    protected endpoint: string;
    protected uri: string;

    constructor(serverEnv: AppContextServer, endpoint: string){
        this.env = serverEnv;
        this.endpoint = endpoint;
        this.uri = `${this.env.server}:${this.env.port}${this.env.apiEndpoint}${endpoint}`
    }

    get = async (id: number) : Promise<T> => {
        return {} as any
    }
    
    getAll = async () : Promise<T[]> => {
        const result = await Axios.get<T[]>(this.uri);
        return result.data;
    }
    create = async (object: T) : Promise<T> => {
        return {} as any;
    };
    update = async (toUpdate: T) : Promise<T> => {
        return {} as any;
    };

    delete =  async (id: number) : Promise<number> => {
        return {} as any;
    };



    
}