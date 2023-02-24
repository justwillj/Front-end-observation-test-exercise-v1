import "./Modal.css";
const Modal = ({ finishedTime, totalClicks }) => {
  return (
    <div className="modal">
      <h1>YOU WIN!</h1>
      <h1>Time:{finishedTime}s</h1>
      <h1>Score:{((25 / totalClicks) * 100).toFixed(2)}%</h1>
    </div>
  );
};
export default Modal;
