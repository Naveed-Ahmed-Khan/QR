import React from "react";
import CreateSurvey from "./CreateSurvey";
import DisplaySurvey from "../DisplaySurvey";
import ViewSurvey from "./ViewSurvey";

const Survey = () => {
  return (
    <>
      <DisplaySurvey/>
      <CreateSurvey />
      <ViewSurvey />
    </>
  );
};

export default Survey;
