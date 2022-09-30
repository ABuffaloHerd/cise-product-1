import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => 
    {
      setResult(JSON.stringify(data));

      axios
        .post('http://localhost:8000/api/submission-articles', data)
        .catch(err => {
          console.log("Error!");
        })
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("source")} placeholder="Journal/Conference name" /></p> 
      <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input {...register("volume")} placeholder="Volume" /></p>
      <p><input {...register("pages")} placeholder="Pages" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>
     
      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;