'use server';

import { cookies } from 'next/headers';

export async function createAuthData(data: any) {
  cookies().set('email', data?.data?.user?.email);
}

export async function deleteAuthData(data: any) {
  cookies().delete(data);
}
