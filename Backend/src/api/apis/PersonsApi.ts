/* tslint:disable */
/* eslint-disable */
/**
 * ProjectHub
 * Jesus Antona Espejo
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  PersonInput,
  PersonOutput,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    PersonInputFromJSON,
    PersonInputToJSON,
    PersonOutputFromJSON,
    PersonOutputToJSON,
} from '../models/index';

export interface CreatePersonPersonsPostRequest {
    personInput: PersonInput;
}

export interface DeletePersonPersonsIdDeleteRequest {
    id: string;
}

export interface FindOnePersonPersonsIdGetRequest {
    id: string;
}

export interface FindPersonsByCompanyPersonsByCompanyCompanyGetRequest {
    company: string;
}

export interface UpdatePersonPersonsIdPutRequest {
    id: string;
    personInput: PersonInput;
}

/**
 * 
 */
export class PersonsApi extends runtime.BaseAPI {

    /**
     * Crea un person y lo devuelve
     * Create Person
     */
    async createPersonPersonsPostRaw(requestParameters: CreatePersonPersonsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PersonOutput>> {
        if (requestParameters['personInput'] == null) {
            throw new runtime.RequiredError(
                'personInput',
                'Required parameter "personInput" was null or undefined when calling createPersonPersonsPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Persons/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PersonInputToJSON(requestParameters['personInput']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonOutputFromJSON(jsonValue));
    }

    /**
     * Crea un person y lo devuelve
     * Create Person
     */
    async createPersonPersonsPost(requestParameters: CreatePersonPersonsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PersonOutput> {
        const response = await this.createPersonPersonsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Elimina el person con id pasado por parámetro
     * Delete Person
     */
    async deletePersonPersonsIdDeleteRaw(requestParameters: DeletePersonPersonsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePersonPersonsIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Elimina el person con id pasado por parámetro
     * Delete Person
     */
    async deletePersonPersonsIdDelete(requestParameters: DeletePersonPersonsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePersonPersonsIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Devuelve una lista de persons
     * Find All Persons
     */
    async findAllPersonsPersonsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PersonOutput>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Persons/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonOutputFromJSON));
    }

    /**
     * Devuelve una lista de persons
     * Find All Persons
     */
    async findAllPersonsPersonsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PersonOutput>> {
        const response = await this.findAllPersonsPersonsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Devuelve la persona con los parametros pasados
     * Find Logged Person1
     */
    async findLoggedPerson1PersonLoginPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PersonOutput>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Person/Login/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonOutputFromJSON(jsonValue));
    }

    /**
     * Devuelve la persona con los parametros pasados
     * Find Logged Person1
     */
    async findLoggedPerson1PersonLoginPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PersonOutput> {
        const response = await this.findLoggedPerson1PersonLoginPostRaw(initOverrides);
        return await response.value();
    }

    /**
     * Devuelve el person con id pasado por parámetro
     * Find One Person
     */
    async findOnePersonPersonsIdGetRaw(requestParameters: FindOnePersonPersonsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PersonOutput>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling findOnePersonPersonsIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonOutputFromJSON(jsonValue));
    }

    /**
     * Devuelve el person con id pasado por parámetro
     * Find One Person
     */
    async findOnePersonPersonsIdGet(requestParameters: FindOnePersonPersonsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PersonOutput> {
        const response = await this.findOnePersonPersonsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Devuelve una lista de persons filtrados por la compañía
     * Find Persons By Company
     */
    async findPersonsByCompanyPersonsByCompanyCompanyGetRaw(requestParameters: FindPersonsByCompanyPersonsByCompanyCompanyGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PersonOutput>>> {
        if (requestParameters['company'] == null) {
            throw new runtime.RequiredError(
                'company',
                'Required parameter "company" was null or undefined when calling findPersonsByCompanyPersonsByCompanyCompanyGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Persons/by_company/{company}`.replace(`{${"company"}}`, encodeURIComponent(String(requestParameters['company']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonOutputFromJSON));
    }

    /**
     * Devuelve una lista de persons filtrados por la compañía
     * Find Persons By Company
     */
    async findPersonsByCompanyPersonsByCompanyCompanyGet(requestParameters: FindPersonsByCompanyPersonsByCompanyCompanyGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PersonOutput>> {
        const response = await this.findPersonsByCompanyPersonsByCompanyCompanyGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Actualiza el person con id pasado por parámetro y lo devuelve
     * Update Person
     */
    async updatePersonPersonsIdPutRaw(requestParameters: UpdatePersonPersonsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PersonOutput>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updatePersonPersonsIdPut().'
            );
        }

        if (requestParameters['personInput'] == null) {
            throw new runtime.RequiredError(
                'personInput',
                'Required parameter "personInput" was null or undefined when calling updatePersonPersonsIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PersonInputToJSON(requestParameters['personInput']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonOutputFromJSON(jsonValue));
    }

    /**
     * Actualiza el person con id pasado por parámetro y lo devuelve
     * Update Person
     */
    async updatePersonPersonsIdPut(requestParameters: UpdatePersonPersonsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PersonOutput> {
        const response = await this.updatePersonPersonsIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
