import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import Gallery from "./Gallery";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
        <ReactQueryDevtools initialIsOpen={true}/>
      </QueryClientProvider>
    </main>
  );
};
export default App;
