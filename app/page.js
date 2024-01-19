import ExamList from "@/components/exams/examlist";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex items-center h-screen w-screen flex-col">
      <div className="">
        <h1 className="text-2xl mb-10">Microsoft Exams</h1>
      </div>
      <ExamList />
    </main>
  );
}
