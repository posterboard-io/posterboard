'use server'

import { getServerAuthSession } from '~/server/auth'

export async function HeaderUtils() {
    
    const session = await getServerAuthSession()
    
    return (
        <div>
            <p>{session && <span>Logged in as {session.user?.name}</span>}</p>
        </div>
    )
}