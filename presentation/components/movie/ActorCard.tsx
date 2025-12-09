import { Cast } from "@/infrastructure/interfaces/cast";
import { Image, Text, View } from "react-native";

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  return (
    <View style={{ width: 100, marginHorizontal: 8, marginBottom: 40 }}>
      <Image
        source={{ uri: actor.avatar }}
        style={{
          resizeMode: "cover",
          width: 100,
          height: 150,
          borderRadius: 16,
        }}
      />

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          style={{ marginTop: 12, fontWeight: "bold" }}
        >
          {actor.name}
        </Text>
        <Text style={{ marginTop: 4, color: "gray" }} numberOfLines={2}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};
