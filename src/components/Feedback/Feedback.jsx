export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div>
      <h2>Feedback Statistics</h2>
      {totalFeedback > 0 && (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total Feedback: {totalFeedback}</p>
          <p>Positive Feedback Percentage: {positivePercentage}%</p>
        </div>
      )}
    </div>
  );
}
