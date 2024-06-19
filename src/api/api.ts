const overlayRowsEntityCreate: EntityResponse = {
    "id": 126568,
    "rowName": "d4cdc7a1-f03e-4931-9d9b-fb7931cdf117"
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