import { Box } from "@/components/ui/box";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <View className="flex-1 justify-center items-center gap-7">
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Box className="bg-black p-5">
          <Text className="text-white">This is the Box</Text>
        </Box>
      </View>
    </>
  );
}
