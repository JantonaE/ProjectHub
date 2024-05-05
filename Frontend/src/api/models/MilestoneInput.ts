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
 * @interface MilestoneInput
 */
export interface MilestoneInput {
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    idMilestone: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    company: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    parentId: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof MilestoneInput
     */
    plannedValue: number;
    /**
     * 
     * @type {number}
     * @memberof MilestoneInput
     */
    actualCost: number;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    plannedDate: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    realDate?: string;
    /**
     * 
     * @type {number}
     * @memberof MilestoneInput
     */
    risk: number;
    /**
     * 
     * @type {number}
     * @memberof MilestoneInput
     */
    priority: number;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    strategicGoal: string;
    /**
     * 
     * @type {number}
     * @memberof MilestoneInput
     */
    earnedValue: number;
    /**
     * 
     * @type {number}
     * @memberof MilestoneInput
     */
    rOI: number;
    /**
     * 
     * @type {number}
     * @memberof MilestoneInput
     */
    costBenefit: number;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    internalManager: string;
    /**
     * 
     * @type {string}
     * @memberof MilestoneInput
     */
    externalManager: string | null;
}

/**
 * Check if a given object implements the MilestoneInput interface.
 */
export function instanceOfMilestoneInput(value: object): boolean {
    if (!('idMilestone' in value)) return false;
    if (!('code' in value)) return false;
    if (!('company' in value)) return false;
    if (!('parentId' in value)) return false;
    if (!('title' in value)) return false;
    if (!('description' in value)) return false;
    if (!('plannedValue' in value)) return false;
    if (!('actualCost' in value)) return false;
    if (!('plannedDate' in value)) return false;
    if (!('risk' in value)) return false;
    if (!('priority' in value)) return false;
    if (!('strategicGoal' in value)) return false;
    if (!('earnedValue' in value)) return false;
    if (!('rOI' in value)) return false;
    if (!('costBenefit' in value)) return false;
    if (!('state' in value)) return false;
    if (!('internalManager' in value)) return false;
    if (!('externalManager' in value)) return false;
    return true;
}

export function MilestoneInputFromJSON(json: any): MilestoneInput {
    return MilestoneInputFromJSONTyped(json, false);
}

export function MilestoneInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MilestoneInput {
    if (json == null) {
        return json;
    }
    return {
        
        'idMilestone': json['idMilestone'],
        'code': json['code'],
        'company': json['company'],
        'parentId': json['parent_id'],
        'title': json['title'],
        'description': json['description'],
        'plannedValue': json['planned_value'],
        'actualCost': json['actual_cost'],
        'plannedDate': json['planned_date'],
        'realDate': json['real_date'] == null ? undefined : json['real_date'],
        'risk': json['risk'],
        'priority': json['priority'],
        'strategicGoal': json['strategic_goal'],
        'earnedValue': json['earned_value'],
        'rOI': json['ROI'],
        'costBenefit': json['cost_benefit'],
        'state': json['state'],
        'internalManager': json['internal_manager'],
        'externalManager': json['external_manager'],
    };
}

export function MilestoneInputToJSON(value?: MilestoneInput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'idMilestone': value['idMilestone'],
        'code': value['code'],
        'company': value['company'],
        'parent_id': value['parentId'],
        'title': value['title'],
        'description': value['description'],
        'planned_value': value['plannedValue'],
        'actual_cost': value['actualCost'],
        'planned_date': value['plannedDate'],
        'real_date': value['realDate'],
        'risk': value['risk'],
        'priority': value['priority'],
        'strategic_goal': value['strategicGoal'],
        'earned_value': value['earnedValue'],
        'ROI': value['rOI'],
        'cost_benefit': value['costBenefit'],
        'state': value['state'],
        'internal_manager': value['internalManager'],
        'external_manager': value['externalManager'],
    };
}

