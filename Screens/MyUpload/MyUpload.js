import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ProblemOverview from "../../components/ProblemOverview/ProblemOverview";
import { useNavigation } from "@react-navigation/native";

const MyUpload = () => {
  const [canBid, setCanBid] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.problemContainer}>
        <ScrollView
          style={styles.problemContainerInner}
          showsVerticalScrollIndicator={false}
        >
          <ProblemOverview
            center="Barishal Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
            canBid={canBid}
          ></ProblemOverview>

          <ProblemOverview
            center="Bogura Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
            canBid={canBid}
          ></ProblemOverview>

          <ProblemOverview
            center="Noakhali Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
            canBid={canBid}
          ></ProblemOverview>

          <ProblemOverview
            center="Patuakhai Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
            canBid={canBid}
          ></ProblemOverview>

          <ProblemOverview
            center="Feni Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
            canBid={canBid}
          ></ProblemOverview>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  problemContainer: {
    width: "95%",
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#f0c0ad",
    alignItems: "center",

    alignItems: "center",
  },

  problemContainerInner: {
    width: "95%",
    paddingTop: 10,
  },
});

export default MyUpload;
