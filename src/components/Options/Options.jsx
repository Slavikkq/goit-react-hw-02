export default function Options({
  updateFeedback,
  resetFeedback,
  feedbackCount,
}) {
  return (
    <div>
      <h2>Leave Feedback</h2>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {feedbackCount > 0 && (
        <button onClick={() => resetFeedback()}>Reset</button>
      )}
    </div>
  );
}
