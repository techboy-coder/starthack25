import { BACKEND_URL } from '$lib';
import type { ColumnMapping, DataPoints, IDs } from './types';

export async function getIds() {
  const response = await fetch(`${BACKEND_URL}/getIds`);
  let ids: IDs = await response.json();
  return ids;
}

export async function getData(id: string, limit: number, skip: number) {
  const response = await fetch(`${BACKEND_URL}/get?id=${id}&limit=${limit}&skip=${skip}`);
  let data: DataPoints = await response.json();
  return data;
}

export async function getColumns() {
    const response = await fetch(`${BACKEND_URL}/columns`);
    let columns: ColumnMapping = await response.json();
    return columns;
}