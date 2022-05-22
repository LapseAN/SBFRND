import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import ProblemOverview from "../../components/ProblemOverview/ProblemOverview";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../components/CustomButton/CustomButton";

const Home = (props) => {
  const [canBid, setCanBid] = React.useState(true);
  const [issues, setIssues] = React.useState([]);
  const { navigation } = props;

  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.pat}`;
    axios
      .get("https://sbfrnd.herokuapp.com/api/pendingIssues")
      .then((response) => {
        setIssues(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [issues]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Problem"
          onPress={() => navigation.navigate("InputProblem")}
        />
        <CustomButton
          title="On Process"
          onPress={() => navigation.navigate("ProblemOnProcess")}
        />
      </View>

      <Text style={styles.onlineTitle}>Problems Online</Text>

      <View style={styles.problemContainer}>
        <ScrollView
          style={styles.problemContainerInner}
          showsVerticalScrollIndicator={false}
        >
          {issues.map((is) => (
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
          ))}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "85%",
    marginTop: 30,
  },
  onlineTitle: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#fc4a03",
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
});
export default Home;
