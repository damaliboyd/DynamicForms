
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Form from './components/Form';
import { defaultValues, options, suite, types } from './models/SignUp';
function App() {
  return (
    <>
      <Form defaultValues={defaultValues} options={options} suite={suite} types={types} />
    </>
  );
}

export default App;
