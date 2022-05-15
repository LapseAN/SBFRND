import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProblemOverview from "../../components/ProblemOverview/ProblemOverview";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ProblemOnProcess = () => {
  const [canBid, setCanBid] = useState(false);
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);
  const [runningIssues, setRunningIssues] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.pat}`
    axios.get('https://sbfrnd.herokuapp.com/api/runningIssues')
    .then(response => {
      console.log(response.data)
      setRunningIssues(response.data)
      console.log(runningIssues)
    })
    .catch(error => {
      console.log(error.response)
    })
  }, [runningIssues]);

  
  return (
    <View style={styles.container}>
      <View style={styles.problemContainer}>
        <ScrollView
          style={styles.problemContainerInner}
          showsVerticalScrollIndicator={false}
        >
            {
                runningIssues.length > 0 ? runningIssues.map(is =>  {
                    <ProblemOverview
                        center="Barishal Center"
                        alarm={is.alarm}
                        date={is.date}
                        history={is.history}
                        description={is.description}
                        image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
                        stepsTaken={is.stepsTaken}
                        navigation={navigation}
                        canBid={canBid}
                    ></ProblemOverview>
                }) :
                <View style={styles.emptyDIv}>
                    <Text style={styles.emptyTitle}>No Problems</Text>
                </View> 
                
               
            }
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
    alignContent: "center"
  },
  emptyTitle:{
    fontSize: 30,
    marginLeft: "25%",
    fontWeight: "bold"
  }
});

export default ProblemOnProcess;
