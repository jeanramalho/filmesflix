import {
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import styles from './style'
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";

import Poster from '../../components/Poster'


const HomeScreen = () => {

  const theme = useTheme()

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} >       
          <Poster />            
          <ActivityIndicator />

          <LinearGradient
            colors={[theme.colors.background, "transparent"]}
            start={{
              x: 0,
              y: 1,
            }}
            end={{
              x: 0,
              y: 0,
            }}
            style={styles.linearStyle}
          />

          <View style={[StyleSheet.absoluteFill, { zIndex: 2, padding: 16 }]}>
            <View style={{ flex: 1 }} />
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                gap: 16,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#ffffff",
                  paddingHorizontal: 16,
                  height: 40,
                  alignItems: "center",
                  borderRadius: 40,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <Icons name="play" size={22} color={"#000"} />
                <Text style={{ color: "#000", fontWeight: "600" }}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  paddingHorizontal: 16,
                  height: 40,
                  alignItems: "center",
                  borderRadius: 40,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <Icons name="plus" size={22} color={"#fff"} />
                <Text style={{ color: "#fff", fontWeight: "600" }}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <MoviesHorizontalList
          onMoviePress={(movie) =>
            navigation.navigate("Details", {
              movieId: movie.id,
            })
          }
          title="Now Playing"
          query={nowPlayingMoviesQuery}
        />
        <MoviesHorizontalList
          onMoviePress={(movie) =>
            navigation.navigate("Details", {
              movieId: movie.id,
            })
          }
          title="Popular"
          query={popularMoviesQuery}
        />
        <MoviesHorizontalList
          onMoviePress={(movie) =>
            navigation.navigate("Details", {
              movieId: movie.id,
            })
          }
          title="Upcoming"
          query={upcomingQuery}
        />
        <View
          style={{
            height: insets.bottom + 16,
          }}
        />
      </ScrollView>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          paddingTop: insets.top,
        }}
      >
        <LinearGradient
          pointerEvents="none"
          colors={["transparent", theme.colors.background]}
          start={{
            x: 0,
            y: 1,
          }}
          end={{
            x: 0,
            y: 0,
          }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            height: 52,
            gap: 16,
          }}
        >
          <Text
            style={{
              color: "#ED6707",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Flex
          </Text>

          <View
            style={{
              flexDirection: "row",
              gap: 16,
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 30,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 30,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 30,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>Series</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              width: 40,
              height: 40,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1615579586457-372d770be858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=56&q=80",
              }}
              style={{ width: 32, height: 32, borderRadius: 32 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;