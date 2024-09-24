import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "src/Components/Modules/Header/Header";

const Layout = ({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation: any;
}) => {
  return (
    <>
      <Header navigation={navigation} />
      {children}
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});
