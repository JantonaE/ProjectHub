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
  MilestoneInput,
  MilestoneOutput,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    MilestoneInputFromJSON,
    MilestoneInputToJSON,
    MilestoneOutputFromJSON,
    MilestoneOutputToJSON,
} from '../models/index';

export interface CreateMilestoneMilestonesPostRequest {
    milestoneInput: MilestoneInput;
}

export interface DeleteMilestoneMilestonesIdDeleteRequest {
    id: string;
}

export interface FindMilestoneSonsMilestonesSonsIdGetRequest {
    id: string;
}

export interface FindOneMilestoneMilestonesIdGetRequest {
    id: string;
}

export interface UpdateMilestoneMilestonesIdPutRequest {
    id: string;
    milestoneInput: MilestoneInput;
}

/**
 * 
 */
export class MilestonesApi extends runtime.BaseAPI {

    /**
     * Crea un milestone y lo devuelve
     * Create Milestone
     */
    async createMilestoneMilestonesPostRaw(requestParameters: CreateMilestoneMilestonesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneOutput>> {
        if (requestParameters['milestoneInput'] == null) {
            throw new runtime.RequiredError(
                'milestoneInput',
                'Required parameter "milestoneInput" was null or undefined when calling createMilestoneMilestonesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Milestones/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MilestoneInputToJSON(requestParameters['milestoneInput']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MilestoneOutputFromJSON(jsonValue));
    }

    /**
     * Crea un milestone y lo devuelve
     * Create Milestone
     */
    async createMilestoneMilestonesPost(requestParameters: CreateMilestoneMilestonesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneOutput> {
        const response = await this.createMilestoneMilestonesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Elimina el milestone con id pasado por parámetro
     * Delete Milestone
     */
    async deleteMilestoneMilestonesIdDeleteRaw(requestParameters: DeleteMilestoneMilestonesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteMilestoneMilestonesIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Milestones/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Elimina el milestone con id pasado por parámetro
     * Delete Milestone
     */
    async deleteMilestoneMilestonesIdDelete(requestParameters: DeleteMilestoneMilestonesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteMilestoneMilestonesIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Devuelve los milestones con parent_id con id pasado por parámetro
     * Find Milestone Sons
     */
    async findMilestoneSonsMilestonesSonsIdGetRaw(requestParameters: FindMilestoneSonsMilestonesSonsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MilestoneOutput>>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling findMilestoneSonsMilestonesSonsIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Milestones/Sons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MilestoneOutputFromJSON));
    }

    /**
     * Devuelve los milestones con parent_id con id pasado por parámetro
     * Find Milestone Sons
     */
    async findMilestoneSonsMilestonesSonsIdGet(requestParameters: FindMilestoneSonsMilestonesSonsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MilestoneOutput>> {
        const response = await this.findMilestoneSonsMilestonesSonsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Devuelve el milestone con id pasado por parámetro
     * Find One Milestone
     */
    async findOneMilestoneMilestonesIdGetRaw(requestParameters: FindOneMilestoneMilestonesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneOutput>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling findOneMilestoneMilestonesIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Milestones/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MilestoneOutputFromJSON(jsonValue));
    }

    /**
     * Devuelve el milestone con id pasado por parámetro
     * Find One Milestone
     */
    async findOneMilestoneMilestonesIdGet(requestParameters: FindOneMilestoneMilestonesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneOutput> {
        const response = await this.findOneMilestoneMilestonesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Actualiza el milestone con id pasado por parámetro y lo devuelve
     * Update Milestone
     */
    async updateMilestoneMilestonesIdPutRaw(requestParameters: UpdateMilestoneMilestonesIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneOutput>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateMilestoneMilestonesIdPut().'
            );
        }

        if (requestParameters['milestoneInput'] == null) {
            throw new runtime.RequiredError(
                'milestoneInput',
                'Required parameter "milestoneInput" was null or undefined when calling updateMilestoneMilestonesIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Milestones/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MilestoneInputToJSON(requestParameters['milestoneInput']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MilestoneOutputFromJSON(jsonValue));
    }

    /**
     * Actualiza el milestone con id pasado por parámetro y lo devuelve
     * Update Milestone
     */
    async updateMilestoneMilestonesIdPut(requestParameters: UpdateMilestoneMilestonesIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneOutput> {
        const response = await this.updateMilestoneMilestonesIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
