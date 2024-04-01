export default function ExamDetail({ params }) {
    console.log("exam page")
    console.log(params);
    return <div>
        <div>Exam Code: {params.id}</div>
        <div>Description: {params.description}</div></div>;
  }