export type HTTPMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

export interface TreeResponse {
    child: TreeResponse[];
    equipmentCosts: number;
    estimatedProfit: number;
    id: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    rowName: string;
    salary: number;
    supportCosts: number;
    total: number;
}

export interface RowResponse {

}

export interface RecalculatedRows {
    changed: RowResponse[];
    current: RowResponse;
}

export interface OutlayRowRequest {
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    parentId?: number;
    rowName: string;
    salary: number;
    supportCosts: number;
}

export interface EntityResponse {
    id: number
    rowName: string
}