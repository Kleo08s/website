import type { RequestHandler  } from "./$types";
import * as config from '$lib/config';

export const GET: RequestHandler = async ({ request }) => {
    const ua = request.headers.get('user-agent') || '';

    if (ua.includes('curl')) {
        return new Response(
            `
   ===== // ${config.profile.name} // ======

   ----- [ about me ] ----------
    bio   : ${config.profile.bio}
            `,
            {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
    }

    return new Response(null, {
        status: 302,
        headers: {
            location: '/home'
        }
    });
};