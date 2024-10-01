'use server';

import { tripsApi } from '@/app/api';

export async function getTrips(query) {
  try {
    const res = await getData(tripsApi, query);

    let tripSet = res.tripSet;

    tripSet = applySort(tripSet, query.sort);
    tripSet = applySearch(tripSet, query.search);
    tripSet = applyPagination(tripSet, query.page);

    return tripSet;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
export async function getData(apiUrl, query) {
  try {
    const res = await fetch(`${apiUrl}?${query}`, {
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function applySort(tripSet, sort) {
  if (sort === 'asc') {
    return tripSet.sort(
      (a, b) =>
        new Date(a.checkInDate).getTime() - new Date(b.checkInDate).getTime()
    );
  } else if (sort === 'desc') {
    return tripSet.sort(
      (a, b) =>
        new Date(b.checkInDate).getTime() - new Date(a.checkInDate).getTime()
    );
  }
  return tripSet;
}

function applySearch(tripSet, search) {
  if (search) {
    return tripSet.filter((trip) =>
      trip.unitName.toLowerCase().includes(search.toLowerCase())
    );
  }
  return tripSet;
}

function applyPagination(tripSet, page, limit = 9) {
  const pageInt = page ? parseInt(page) : 1;
  const startIndex = (pageInt - 1) * limit;
  const endIndex = pageInt * limit;

  tripSet = tripSet.slice(startIndex, endIndex);
  if (tripSet.length >= limit) {
    tripSet.next = { page: pageInt + 1, limit };
  }

  if (startIndex > 0) {
    tripSet.previous = { page: pageInt - 1, limit };
  }

  return tripSet;
}
