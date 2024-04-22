import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const users = [
        { userName: "CesarRegu", fullName: "Cesar Omar Reyes Gutierrez", initialIsFollowing: true },
        { userName: "mdo", fullName: "Mark Otto", initialIsFollowing: false },
        { userName: "midudev", fullName: "Miguel Ángel Durán", initialIsFollowing: true },
        { userName: "pheralb", fullName: "Pablo Hernandez", initialIsFollowing: false }
    ];

    return (
        <section className='App'>
            {users.map(user => (
                <TwitterFollowCard
                    key={user.userName}
                    userName={user.userName}
                    initialIsFollowing={user.initialIsFollowing}
                >
                    {user.fullName}
                </TwitterFollowCard>
            ))}
        </section>
    );
}

/* Forma X  */
/* 
const formatUserName = (userName) => `@${userName}`;

return (
    <section className='App'>
        <TwitterFollowCard userName="CesarRegu" initialIsFollowing={true}>
            Cesar Omar Reyes Gutierrez
        </TwitterFollowCard>

        <TwitterFollowCard userName="mdo" initialIsFollowing={false}>
            Mark Otto
        </TwitterFollowCard>

        <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
            Miguel Ángel Durán
        </TwitterFollowCard>

        <TwitterFollowCard userName="pheralb" initialIsFollowing={false}>
            Pablo Hernandez
        </TwitterFollowCard>
    </section>
);
*/

