import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiService {
    private readonly _logger:Logger = new Logger(ApiService.name);
    private _token:string;
    private _user_rm:string;
    private _password_rm:string;
    private readonly _httpService:HttpService;
    private readonly _configService:ConfigService;
    private readonly _baseUrl:string;

    constructor(httpService: HttpService, configService: ConfigService) {
        this._httpService = httpService;
        this._configService = configService;
        this._user_rm = this._configService.get<string>('USER_RM');
        this._password_rm = this._configService.get<string>('PASS_RM');
        this._baseUrl = this._configService.get<string>('SERVER_RM');
    }
    
    async Login(){

        const loginPayload:ILoginPayload = {
            username: this._user_rm,
            password: this._password_rm
        }

        const response = await firstValueFrom(
            this._httpService.post<ILoginResponse>(`${this._baseUrl}/auth`, loginPayload)
        )

        this._token = response.data['token']
        this._logger.log("Login exitoso")
    } 

    async getLicencesInfo():Promise<ILicenceByOrganization>{
        const response = await firstValueFrom(
            this._httpService.get<ILicenceByOrganization>(`${this._baseUrl}/ems/settings/licenses/organization`,{
                headers: {
                    "api_key": this._token
                }
            })
        )

        return response.data
    }
}
