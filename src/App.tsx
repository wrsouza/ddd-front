import { useUser } from "./contexts/user";
import { Service } from "./domain/services/service";
import { ENV_NEW_VERSION, ENV_REGION } from "./constants/environment.constant";
import { Form } from "./components/form";

function App() {
  const region = ENV_REGION;
  const { user, setUser } = useUser();

  if (!ENV_NEW_VERSION) {
    return (
      <div className="App">
        <Form {...{ user, setUser }} />
      </div>
    );
  }

  const service = new Service[region]({ user, setUser });
  return <div className="App">{service.render()}</div>;
}

export default App;
