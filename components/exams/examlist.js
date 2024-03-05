"use client";
import { useEffect, useState } from "react";
import Exam from "./exam";

export default function ExamList() {
  const [certs, setCerts] = useState();

  async function getCerts() {
    let res = await fetch("/api/exams", { cache: "no-store", method: "GET" });
    let data = await res.json();
    setCerts(data);
  }
  useEffect(() => {
    getCerts();
  }, []);

  return (
    <div className="">
      <ul>
        {certs ? (
          certs.map((cert) => <Exam examCode={cert.id} examName={cert.name} key={cert.id}/>)
        ) : (
          <h2>No Certs</h2>
        )}
      </ul>
    </div>
  );
}
