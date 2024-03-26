export default function Options({ updateFeedback, resetEnabled }) {
  return (
    <div>
      <h2>Leave Feedback</h2>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {resetEnabled && (
        <button onClick={() => updateFeedback("reset")}>Reset</button>
      )}
    </div>
  );
}
