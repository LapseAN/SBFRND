import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import ProblemOverview from "../../components/ProblemOverview/ProblemOverview";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const MyUpload = () => {
  const [canBid, setCanBid] = useState(false);
  const [myUpload, setMyUpload] = useState([]);
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.pat}`;
    axios
      .get(`https://sbfrnd.herokuapp.com/api/myUpload/${user.user_id}`)
      .then((response) => {
        // console.log(response.data);
        setMyUpload(response.data);
        // console.log(doneIssues);
      })
      .catch((error) => {
        console.log(error.response);
      });
  });

  return (
    <View style={styles.container}>
      <View style={styles.problemContainer}>
        <ScrollView
          style={styles.problemContainerInner}
          showsVerticalScrollIndicator={false}
        >
          {myUpload.length > 0 ? (
            myUpload.map((is) => (
              <ProblemOverview
                alarm={is.alarm}
                description={is.description}
                history={is.history}
                stepsTaken={is.stepsTaken}
                navigation={navigation}
                canBid={canBid}
                issue_id={is.id}
                key={is.id}
              />
            ))
          ) : (
            <View style={styles.emptyDIv}>
              <Text style={styles.emptyTitle}>Empty!!</Text>
            </View>
          )}
          {/* <ProblemOverview
            center="Barishal Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
            canBid={canBid}
          ></ProblemOverview> */}
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
  emptyDIv: {
    width: "100%",
    height: 650,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  emptyTitle: {
    fontSize: 30,
    marginLeft: "35%",
    fontWeight: "bold",
  },
});

export default MyUpload;
