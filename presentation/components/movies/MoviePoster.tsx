import { Image, Pressable } from "react-native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className = '' }: Props) => {
  return (
    <Pressable className={`px-2 active:opacity-70 ${className}`}>
      <Image
        source={{ uri: poster }}
        className="w-full h-full shadow-2xl rounded-xl"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
          borderRadius: 10,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
