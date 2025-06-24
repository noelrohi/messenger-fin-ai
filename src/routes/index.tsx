import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import IntercomMessenger from '../components/IntercomMessenger'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
	// Example user data - replace with your actual user data
	const user = {
		id: "user123",
		name: "John Doe",
		email: "john@example.com",
		createdAt: Math.floor(Date.now() / 1000), // Unix timestamp in seconds
	};

	return (
		<div className="text-center">
			<IntercomMessenger user={user} />
			<header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
				<img
					src={logo}
					className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
					alt="logo"
				/>
				<p>
					Edit <code>src/routes/index.tsx</code> and save to reload.
				</p>
				<a
					className="text-[#61dafb] hover:underline"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<a
					className="text-[#61dafb] hover:underline"
					href="https://tanstack.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn TanStack
				</a>
			</header>
		</div>
	);
}
