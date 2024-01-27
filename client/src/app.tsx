import { SocketProvider } from "./context";
import { Router } from "./pages";

export const App = () => (
	<SocketProvider>
		<Router />
	</SocketProvider>
);