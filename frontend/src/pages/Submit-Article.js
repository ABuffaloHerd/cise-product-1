import React from "react";
import SubmissionForm from "../components/SubmissionForm.js";
 
const SubmitArticle = () =>  {
     return (
      <div>
        <h2>Submit Article</h2>
        <p>Please submit your article with the following information:</p>
            <SubmissionForm/>
        </div>
    );
}

export default SubmitArticle;