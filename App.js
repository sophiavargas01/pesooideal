import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import Main from "./src/screens/Main"

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center" height={"$full"}>
        <Main />
      </Box>
    </GluestackUIProvider>
  )
}
