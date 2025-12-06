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
        className="w-full h-full shadow-2xl"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
          marginRight: 15,
          marginTop: 10,
          marginBottom: 15 ,
          borderRadius: 20,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
