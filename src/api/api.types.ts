type HTTPMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

interface TreeResponse {
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

interface RowResponse {

}

interface RecalculatedRows {
    changed: RowResponse[];
    current: RowResponse;
}

interface OutlayRowRequest {
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    parentId: number;
    rowName: string;
    salary: number;
    supportCosts: number;
}

interface EntityResponse {
    id: number
    rowName: string
}