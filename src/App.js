import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";

export default function App() {
  return (
    <div>
      <DynamicContextProvider
        settings={{
          environmentId: "8b5038f9-171c-480b-9f3c-294d868aeb74",
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    </div>
  );
}
