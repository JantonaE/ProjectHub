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
 * @interface Person
 */
export interface Person {
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    idPerson: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    dNI: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    email: string;
}

/**
 * Check if a given object implements the Person interface.
 */
export function instanceOfPerson(value: object): boolean {
    if (!('idPerson' in value)) return false;
    if (!('dNI' in value)) return false;
    if (!('name' in value)) return false;
    if (!('email' in value)) return false;
    return true;
}

export function PersonFromJSON(json: any): Person {
    return PersonFromJSONTyped(json, false);
}

export function PersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): Person {
    if (json == null) {
        return json;
    }
    return {
        
        'idPerson': json['idPerson'],
        'dNI': json['DNI'],
        'name': json['name'],
        'email': json['email'],
    };
}

export function PersonToJSON(value?: Person | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'idPerson': value['idPerson'],
        'DNI': value['dNI'],
        'name': value['name'],
        'email': value['email'],
    };
}

