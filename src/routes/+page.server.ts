
import prisma from '$lib/prisma';

import type { PageServerLoad } from './$types';


export const load = (async () => {

// 1.

const response = await prisma.user.findMany({

  })


// 2.
console.log(response);
return { users: response };

}) satisfies PageServerLoad;