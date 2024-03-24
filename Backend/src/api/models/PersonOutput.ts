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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PersonOutput
 */
export interface PersonOutput {
    /**
     * 
     * @type {string}
     * @memberof PersonOutput
     */
    idPerson: string;
    /**
     * 
     * @type {string}
     * @memberof PersonOutput
     */
    dNI: string;
    /**
     * 
     * @type {string}
     * @memberof PersonOutput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PersonOutput
     */
    email: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PersonOutput
     */
    pppoInternal: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PersonOutput
     */
    pppoExternal: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PersonOutput
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof PersonOutput
     */
    company: string;
}

/**
 * Check if a given object implements the PersonOutput interface.
 */
export function instanceOfPersonOutput(value: object): boolean {
    if (!('idPerson' in value)) return false;
    if (!('dNI' in value)) return false;
    if (!('name' in value)) return false;
    if (!('email' in value)) return false;
    if (!('pppoInternal' in value)) return false;
    if (!('pppoExternal' in value)) return false;
    if (!('password' in value)) return false;
    if (!('company' in value)) return false;
    return true;
}

export function PersonOutputFromJSON(json: any): PersonOutput {
    return PersonOutputFromJSONTyped(json, false);
}

export function PersonOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonOutput {
    if (json == null) {
        return json;
    }
    return {
        
        'idPerson': json['idPerson'],
        'dNI': json['DNI'],
        'name': json['name'],
        'email': json['email'],
        'pppoInternal': json['pppo_internal'],
        'pppoExternal': json['pppo_external'],
        'password': json['password'],
        'company': json['company'],
    };
}

export function PersonOutputToJSON(value?: PersonOutput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'idPerson': value['idPerson'],
        'DNI': value['dNI'],
        'name': value['name'],
        'email': value['email'],
        'pppo_internal': value['pppoInternal'],
        'pppo_external': value['pppoExternal'],
        'password': value['password'],
        'company': value['company'],
    };
}

