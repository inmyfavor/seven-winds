import {
    EntityResponse, HTTPMethod, TreeResponse, RecalculatedRows,
    OutlayRowRequest
} from './api.types';
const overlayRowsEntityCreate: EntityResponse = {
    "id": 133802,
    "rowName": "43edb5a4-a8bb-43f1-8ba8-73fec4653329"
};
const eID = overlayRowsEntityCreate.id;

async function api(method: HTTPMethod, url: string) {
    const res = await fetch(url, {method});
    return await res.json();
}

export async function getTreeRows(): Promise<TreeResponse[]> {
    return await api('GET', `/v1/outlay-rows/entity/${eID}/row/list`) as TreeResponse[];
}

export async function deleteRow(rID: number): Promise<RecalculatedRows> {
    return await api('DELETE', `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`) as RecalculatedRows;
}

export async function createRowInEntity(data: OutlayRowRequest): Promise<RecalculatedRows> {
    return await api('POST', `/v1/outlay-rows/entity/${eID}/row/create`) as RecalculatedRows;
}

export async function updateRow(data: OutlayRowRequest): Promise<RecalculatedRows> {
    return await api('POST', `/v1/outlay-rows/entity/${eID}/row/update`) as RecalculatedRows;
}

export async function createEntity(): Promise<EntityResponse> {
    return await api('POST', `/v1/outlay-rows/entity/create`) as EntityResponse;
}