'use server';

import { cookies } from 'next/headers';

export async function createAuthData(data: any) {
  // console.log(data?.data?.user?.email);
  cookies().set('email', data?.data?.user?.email);
}

export async function deleteAuthData(data: any) {
  cookies().delete(data);
}
