import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import ProblemOverview from "../../components/ProblemOverview/ProblemOverview";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Solved = () => {
  const [canBid, setCanBid] = useState(false);
  const navigation = useNavigation();
  const [doneIssues, setDoneIssue] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.pat}`;
    axios
      .get("https://sbfrnd.herokuapp.com/api/doneIssues")
      .then((response) => {
        console.log(response.data);
        setDoneIssue(response.data);
        console.log(doneIssues);
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
          {doneIssues.length > 0 ? (
            doneIssues.map((is) => (
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
    height: "100%",
    alignItems: "center",
    flex: 1,
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

export default Solved;
