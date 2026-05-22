import React, { useState } from "react";
import AccueilGeneral from "./AccueilGeneral";
import Jolab360Page from "./Jolab360Page";
import QuestionnaireInteretModal from "./QuestionnaireInteretModal";

export default function App() {
  const [page, setPage] = useState("accueil");
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);

  function scrollToId(id) {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 80);
  }

  function navigateTo(nextPage, targetId = null) {
    setPage(nextPage);

    if (targetId) {
      scrollToId(targetId);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#020617",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {page === "jolab360" ? (
        <Jolab360Page onOpenContact={() => setQuestionnaireOpen(true)} />
      ) : (
        <AccueilGeneral
          onNavigate={navigateTo}
          onOpenContact={() => setQuestionnaireOpen(true)}
        />
      )}

      <QuestionnaireInteretModal
        open={questionnaireOpen}
        onClose={() => setQuestionnaireOpen(false)}
        source={page === "jolab360" ? "jolab360_global" : "accueil_general"}
      />
    </div>
  );
}