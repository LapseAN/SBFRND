import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const Profile = () => {
  const [tableHead, setTableHead] = useState(["Month", "Number of Solved"]);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [widthArr, setWidthArr] = useState([
    windowWidth / 2 - 12,
    windowWidth / 2 - 12,
  ]);
  const tableData = [];
  for (let i = 0; i < 1; i += 1) {
    const rowData = [];
    for (let j = 0; j < 2; j += 1) {
      rowData.push(`${i}${j}`);
    }
    tableData.push(rowData);
  }

  const [profile, setProfile] = useState({});
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.pat}`
    axios.get(`https://sbfrnd.herokuapp.com/api/users/show/${user.user_id}`)
    .then(response => setProfile(response.data));
    
  })

  return (
    <View style={styles.container}>
      <View style={styles.infoDiv}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={styles.name}>{ profile.name }</Text>
        <Text style={styles.mail}>{profile.email}</Text>
      </View>
      <View style={styles.scoreCard}>
        <Text style={styles.point}>Point: {profile.score}</Text>
        <Text style={styles.point}>Total Solved: {profile.total_solved}</Text>
      </View>

      <View style={styles.tableContainer}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
              <Row
                data={tableHead}
                widthArr={widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#F7F6E7" },
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  infoDiv: {
    alignItems: "center",
    marginTop: 20,
  },
  name: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 30,
  },
  mail: {
    marginTop: 5,
    fontSize: 18,
  },
  scoreCard: {
    justifyContent: "space-around",
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    width: "97%",
    borderRadius: 10,
    backgroundColor: "white",
  },
  point: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tableContainer: {
    flex: 0.9,
    padding: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
  },
  header: { height: 50, backgroundColor: "#d47c72" },
  text: { textAlign: "center", fontWeight: "500" },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
});

export default Profile;
